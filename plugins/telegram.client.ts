// Функция для вызова методов Telegram согласно документации
function callTelegramMethod(method: string, params?: any) {
  const data = JSON.stringify(params || {})
  
  try {
    // Desktop and Mobile
    if (window.TelegramWebviewProxy?.postEvent) {
      window.TelegramWebviewProxy.postEvent(method, data)
      return
    }
    
    // Windows Phone
    if ((window as any).external?.notify) {
      (window as any).external.notify(JSON.stringify({
        eventType: method,
        eventData: params
      }))
      return
    }
    
    // Web version (iframe)
    if (window.parent) {
      window.parent.postMessage(JSON.stringify({
        eventType: method,
        eventData: params
      }), 'https://web.telegram.org')
    }
  } catch (e) {
    console.error('[Plugin] Error calling Telegram method:', e)
  }
}

export default defineNuxtPlugin(() => {
  // Инициализация происходит только на клиенте
  if (typeof window !== 'undefined' && window.Telegram?.WebApp) {
    const tg = window.Telegram.WebApp
    
    console.log('🚀 [Plugin] Telegram WebApp early initialization')
    
    // Ранняя инициализация согласно документации
    callTelegramMethod('web_app_ready')
    tg.ready()
    
    callTelegramMethod('web_app_request_viewport')
    
    callTelegramMethod('web_app_expand')
    tg.expand()
    
    try {
      callTelegramMethod('web_app_request_fullscreen')
      if (typeof tg.requestFullscreen === 'function') {
        tg.requestFullscreen()
      }
    } catch (e) {
      console.log('⚠️ [Plugin] requestFullscreen not supported in this version')
    }
    
    callTelegramMethod('web_app_setup_swipe_behavior', { allow_vertical_swipe: false })
    if (typeof tg.disableVerticalSwipes === 'function') {
      tg.disableVerticalSwipes()
    }
    
    console.log('✅ [Plugin] Early initialization complete')
  }
})

