export default defineNuxtPlugin(() => {
  // Инициализация происходит только на клиенте
  if (typeof window !== 'undefined' && window.Telegram?.WebApp) {
    const tg = window.Telegram.WebApp
    
    console.log('🚀 [Plugin] Telegram WebApp early initialization')
    
    // Ранняя инициализация для максимального эффекта
    tg.ready()
    tg.expand()
    
    // Попытка полноэкранного режима
    if (typeof tg.requestFullscreen === 'function') {
      tg.requestFullscreen()
    }
    
    // Блокируем вертикальные свайпы
    if (typeof tg.disableVerticalSwipes === 'function') {
      tg.disableVerticalSwipes()
    }
    
    console.log('✅ [Plugin] Early expand called')
  }
})

