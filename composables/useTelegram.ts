export const useTelegram = () => {
  const tg = computed(() => {
    if (typeof window !== 'undefined' && window.Telegram?.WebApp) {
      return window.Telegram.WebApp
    }
    return null
  })

  const isTelegramEnv = computed(() => !!tg.value)
  
  const user = computed(() => tg.value?.initDataUnsafe?.user || null)
  
  const platform = computed(() => tg.value?.platform || '')
  
  const colorScheme = computed(() => tg.value?.colorScheme || 'light')

  const expand = () => {
    if (tg.value) {
      tg.value.expand()
      console.log('🔥 Telegram expand called')
    }
  }

  const requestFullscreen = () => {
    if (tg.value && typeof tg.value.requestFullscreen === 'function') {
      tg.value.requestFullscreen()
      console.log('🎯 Telegram fullscreen requested')
    }
  }

  const close = () => {
    if (tg.value) {
      tg.value.close()
    }
  }

  return {
    tg,
    isTelegramEnv,
    user,
    platform,
    colorScheme,
    expand,
    requestFullscreen,
    close
  }
}

