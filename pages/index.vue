<template>
  <div class="fullscreen-container">
    <div class="loader-wrapper">
      <div class="loader">
        <div class="spinner"></div>
        <div class="logo">HertzBet</div>
      </div>
    </div>

    <button
      type="button"
      class="livechat-button"
      @click="openLiveChat"
    >
      5 customer service tips from LiveChat
    </button>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'

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
    console.error('Error calling Telegram method:', e)
  }
}

function openLiveChat() {
  console.log('🔵 LiveChat button clicked')
  const w = window as any
  
  console.log('🔍 LiveChatWidget exists:', !!w.LiveChatWidget)
  console.log('🔍 LiveChatWidget.call exists:', typeof w.LiveChatWidget?.call)
  
  if (w.LiveChatWidget && typeof w.LiveChatWidget.call === 'function') {
    console.log('✅ Opening LiveChat widget...')
    try {
      w.LiveChatWidget.call('maximize')
      console.log('✅ LiveChat maximize called')
    } catch (e) {
      console.error('❌ Error calling maximize:', e)
    }
    return
  }

  console.log('⚠️ LiveChat widget not found, redirecting...')
  window.location.href = 'https://www.livechat.com/chat-with/18565707/'
}

onMounted(() => {
  // Проверяем, запущено ли приложение в Telegram
  if (!window.Telegram?.WebApp) {
    console.log('⚠️ Not running in Telegram environment')
    return
  }

  const tg = window.Telegram.WebApp
  const platform = tg.platform?.toLowerCase() || ''
  const isIOS = platform.includes('ios')
  
  console.log('🚀 Telegram environment detected!')
  console.log('📱 Platform:', tg.platform)
  console.log('📱 Version:', tg.version)
  
  // 1. web_app_ready - уведомляем что приложение готово
  callTelegramMethod('web_app_ready')
  tg.ready()
  console.log('✅ web_app_ready called')
  
  // 2. web_app_request_viewport - запрашиваем viewport
  callTelegramMethod('web_app_request_viewport')
  console.log('📱 web_app_request_viewport called')
  
  // 3. web_app_expand - разворачиваем на весь экран
  callTelegramMethod('web_app_expand')
  tg.expand()
  console.log('🔥 web_app_expand called')
  
  // 4. web_app_request_fullscreen - полноэкранный режим (v8.0+)
  if (!isIOS) {
    try {
      callTelegramMethod('web_app_request_fullscreen')
      if (typeof tg.requestFullscreen === 'function') {
        tg.requestFullscreen()
      }
      console.log('🎯 web_app_request_fullscreen called')
    } catch (e) {
      console.log('⚠️ requestFullscreen not supported in this version')
    }
  } else {
    console.log('⏭️ Skip fullscreen on iOS to keep top buttons clickable')
  }
  
  // 5. web_app_set_header_color - цвет заголовка
  callTelegramMethod('web_app_set_header_color', { color: '#1a1a2e' })
  if (tg.setHeaderColor) {
    tg.setHeaderColor('#1a1a2e')
  }
  
  // 6. web_app_set_background_color - цвет фона
  callTelegramMethod('web_app_set_background_color', { color: '#1a1a2e' })
  if (tg.setBackgroundColor) {
    tg.setBackgroundColor('#1a1a2e')
  }
  
  // 7. web_app_setup_swipe_behavior - блокируем вертикальные свайпы (v7.7+)
  callTelegramMethod('web_app_setup_swipe_behavior', { allow_vertical_swipe: false })
  if (typeof tg.disableVerticalSwipes === 'function') {
    tg.disableVerticalSwipes()
  }
  console.log('🔒 Swipe behavior configured')
  
  // Проверяем статус через 100мс
  setTimeout(() => {
    console.log('📏 isExpanded:', tg.isExpanded)
    console.log('📐 Viewport height:', tg.viewportHeight)
    console.log('📐 Viewport stable height:', tg.viewportStableHeight)
  }, 100)

  console.log('✅ Telegram Mini App initialized!')
})

</script>

<style scoped>
.fullscreen-container {
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);
  position: fixed;
  top: 0;
  left: 0;
  overflow: hidden;
}

.loader-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  position: relative;
  z-index: 1;
}

.loader {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
}

.spinner {
  width: 60px;
  height: 60px;
  border: 4px solid rgba(255, 255, 255, 0.1);
  border-top-color: #00d4ff;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.logo {
  font-size: 2.5rem;
  font-weight: bold;
  background: linear-gradient(135deg, #00d4ff 0%, #0066ff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: pulse 2s ease-in-out infinite;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
}

@keyframes pulse {
  0%, 100% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.8;
    transform: scale(1.05);
  }
}

/* Дополнительные эффекты */
.fullscreen-container::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: 
    radial-gradient(circle at 20% 30%, rgba(0, 212, 255, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 80% 70%, rgba(0, 102, 255, 0.1) 0%, transparent 50%);
  animation: floatingGradient 5s ease-in-out infinite;
  pointer-events: none;
}

.livechat-button {
  position: fixed;
  right: 16px;
  bottom: 16px;
  z-index: 10;
  padding: 10px 16px;
  border-radius: 999px;
  border: none;
  background: #00d4ff;
  color: #0b1020;
  font-size: 0.85rem;
  font-weight: 600;
  cursor: pointer;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.35);
}

.livechat-button:hover {
  background: #00b4e6;
}

@keyframes floatingGradient {
  0%, 100% {
    opacity: 0.5;
  }
  50% {
    opacity: 0.8;
  }
}
</style>

