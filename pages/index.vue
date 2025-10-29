<template>
  <div class="fullscreen-container">
    <div class="loader-wrapper">
      <div class="loader">
        <div class="spinner"></div>
        <div class="logo">HertzBet</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'

const redirectUrl = 'https://hertzbet.com/'

onMounted(() => {
  // Проверяем, запущено ли приложение в Telegram
  if (!window.Telegram?.WebApp) {
    console.log('⚠️ Not running in Telegram environment')
    // Редирект в любом случае
    setTimeout(() => {
      window.location.href = redirectUrl
    }, 1000)
    return
  }

  const tg = window.Telegram.WebApp
  
  console.log('🚀 Telegram environment detected!')
  console.log('📱 Platform:', tg.platform)
  console.log('📱 Version:', tg.version)
  console.log('📱 Is Expanded:', tg.isExpanded)
  
  // 1. Готовность приложения
  tg.ready()
  console.log('✅ WebApp ready')
  
  // 2. Разворачиваем на весь экран
  tg.expand()
  console.log('🔥 Expand called')
  
  // Ждем немного и проверяем статус
  setTimeout(() => {
    console.log('📏 After expand - isExpanded:', tg.isExpanded)
    console.log('📐 Viewport height:', tg.viewportHeight)
    console.log('📐 Viewport stable height:', tg.viewportStableHeight)
  }, 100)
  
  // 3. Устанавливаем цвета
  if (tg.setHeaderColor) {
    tg.setHeaderColor('#1a1a2e')
  }
  if (tg.setBackgroundColor) {
    tg.setBackgroundColor('#1a1a2e')
  }
  
  // 4. Пробуем requestFullscreen если доступно
  if (typeof tg.requestFullscreen === 'function') {
    tg.requestFullscreen()
    console.log('🎯 Fullscreen requested')
  } else {
    console.log('⚠️ requestFullscreen not available')
  }
  
  // 5. Блокируем вертикальные свайпы если доступно
  if (typeof tg.disableVerticalSwipes === 'function') {
    tg.disableVerticalSwipes()
    console.log('🔒 Vertical swipes disabled')
  }

  console.log('✅ Telegram Mini App initialized!')

  // Редирект
  setTimeout(() => {
    console.log('🔄 Redirecting...')
    window.location.href = redirectUrl
  }, 1000)
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

