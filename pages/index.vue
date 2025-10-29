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
import { init, miniApp, viewport, themeParams } from '@telegram-apps/sdk'

const redirectUrl = 'https://hertzbet.com/'

onMounted(async () => {
  // Проверяем, запущено ли приложение в Telegram
  const isTelegramEnv = window.Telegram?.WebApp
  
  if (!isTelegramEnv) {
    console.log('⚠️ Not running in Telegram environment')
    // Редирект в любом случае
    setTimeout(() => {
      window.location.href = redirectUrl
    }, 1000)
    return
  }

  try {
    console.log('🚀 Telegram environment detected!')
    
    // 1. Инициализируем SDK
    init()
    console.log('✅ SDK initialized')

    // 2. Проверяем доступность miniApp
    if (miniApp.mount.isAvailable()) {
      miniApp.mount()
      miniApp.ready()
      console.log('✅ Mini App mounted and ready')
    }

    // 3. Настраиваем Theme (цвета)
    if (themeParams.mount.isAvailable()) {
      themeParams.mount()
    }

    // 4. МОНТИРУЕМ VIEWPORT (обязательно!)
    if (viewport.mount.isAvailable()) {
      viewport.mount()
      console.log('📱 Viewport mounted')

      // 5. BIND CSS VARIABLES (для responsive)
      if (viewport.bindCssVars.isAvailable()) {
        viewport.bindCssVars()
        console.log('🎯 CSS vars bound')
      }

      // 6. ⭐ EXPAND - ОТКРЫВАЕМ НА ПОЛНЫЙ ЭКРАН!
      if (viewport.expand.isAvailable()) {
        viewport.expand()
        console.log('🔥 VIEWPORT EXPANDED!')

        // 7. 🚀 FULLSCREEN MODE - для Telegram Desktop!
        if (viewport.requestFullscreen && viewport.requestFullscreen.isAvailable()) {
          viewport.requestFullscreen()
            .then(() => {
              console.log('🎯 FULLSCREEN MODE ACTIVATED!')
            })
            .catch((err) => {
              console.log('⚠️ Fullscreen not supported or denied:', err)
            })
        }
      } else {
        // Фоллбэк на старый API
        console.log('⚠️ Using fallback expand method')
        window.Telegram.WebApp.expand()
        
        // Пробуем fullscreen через старый API
        if (window.Telegram.WebApp.requestFullscreen) {
          window.Telegram.WebApp.requestFullscreen()
          console.log('🎯 Fullscreen requested via fallback')
        }
      }
    }

    // 8. Настраиваем цвета Mini App
    if (miniApp.setHeaderColor.isAvailable()) {
      miniApp.setHeaderColor('#1a1a2e')
    } else {
      window.Telegram.WebApp.setHeaderColor?.('#1a1a2e')
    }
    
    if (miniApp.setBackgroundColor.isAvailable()) {
      miniApp.setBackgroundColor('#1a1a2e')
    } else {
      window.Telegram.WebApp.setBackgroundColor?.('#1a1a2e')
    }

    console.log('✅ Telegram Mini App fully initialized!')

  } catch (error) {
    console.error('❌ Telegram Mini App initialization error:', error)
    
    // Фоллбэк на старый SDK при ошибке
    console.log('🔄 Trying fallback initialization...')
    try {
      window.Telegram.WebApp.ready()
      window.Telegram.WebApp.expand()
      console.log('✅ Fallback expand successful')
      
      // Пробуем fullscreen
      if (window.Telegram.WebApp.requestFullscreen) {
        window.Telegram.WebApp.requestFullscreen()
        console.log('🎯 Fallback fullscreen requested')
      }
    } catch (fallbackError) {
      console.error('❌ Fallback also failed:', fallbackError)
    }
  }

  // Редирект сразу после инициализации
  setTimeout(() => {
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

