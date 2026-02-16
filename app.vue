<template>
  <div>
    <NuxtPage />
  </div>
</template>

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

