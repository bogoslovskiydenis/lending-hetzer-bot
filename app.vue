<template>
  <div>
    <NuxtPage />
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'

onMounted(() => {
  if (typeof window === 'undefined' || !window.Telegram?.WebApp) return

  const w = window as any
  w.__lc = w.__lc || {}
  w.__lc.license = 18565707
  w.__lc.integration_name = 'manual_channels'
  w.__lc.product_name = 'livechat'

  ;(function(n: any, t: any, c: any) {
    function i(nArg: any) {
      return e._h ? e._h.apply(null, nArg) : e._q.push(nArg)
    }
    const e: any = {
      _q: [],
      _h: null,
      _v: '2.0',
      on() { i(['on', c.call(arguments)]) },
      once() { i(['once', c.call(arguments)]) },
      off() { i(['off', c.call(arguments)]) },
      get() {
        if (!e._h) throw new Error("[LiveChatWidget] You can't use getters before load.")
        return i(['get', c.call(arguments)])
      },
      call() { i(['call', c.call(arguments)]) },
      init() {
        const script = t.createElement('script')
        script.async = true
        script.type = 'text/javascript'
        script.src = 'https://cdn.livechatinc.com/tracking.js'
        t.head.appendChild(script)
      }
    }
    if (!n.__lc.asyncInit) e.init()
    n.LiveChatWidget = n.LiveChatWidget || e
  })(window, document, [].slice)
})
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 0;
  background-color: #1a1a2e;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  
  /* ⭐ Для Telegram Mini App - убираем переполнение */
  overflow-x: hidden;
  min-height: 100vh;
  min-height: -webkit-fill-available;
}

html {
  /* Для iOS Safari */
  height: -webkit-fill-available;
}

#__nuxt {
  min-height: 100vh;
  min-height: -webkit-fill-available;
  display: flex;
  flex-direction: column;
  background-color: #1a1a2e;
  
  /* Для Telegram Mini App */
  position: relative;
  width: 100%;
}

/* Для touch-устройств в Telegram */
@media (hover: none) and (pointer: coarse) {
  * {
    -webkit-tap-highlight-color: transparent;
  }
}
</style>

