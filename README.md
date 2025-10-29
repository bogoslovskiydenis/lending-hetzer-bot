# HertzBet Telegram Mini App

Telegram Mini App для редиректа на HertzBet с красивым лоадером в полноэкранном режиме.

## Возможности

- 🚀 Полноэкранный режим в Telegram
- 💫 Красивый анимированный лоадер
- 🔄 Автоматический редирект на hertzbet.com
- 📱 Оптимизировано для мобильных устройств
- 🎨 Современный дизайн с градиентами

## Установка

```bash
# Установка зависимостей
npm install

# Запуск в режиме разработки
npm run dev

# Сборка для продакшена
npm run build

# Предпросмотр продакшена
npm run preview
```

## Настройка Telegram Bot

1. Создайте бота через [@BotFather](https://t.me/BotFather)
2. Получите токен бота
3. Настройте Mini App командой `/newapp` в BotFather
4. Укажите URL вашего приложения

## Конфигурация

Вы можете изменить URL редиректа в файле `pages/index.vue`:

```typescript
const redirectUrl = 'https://hertzbet.com/'
```

Также можно изменить время задержки перед редиректом (по умолчанию 3 секунды):

```typescript
setTimeout(() => {
  // код редиректа
}, 3000) // <- измените это значение
```

## Деплой

Для деплоя рекомендуется использовать:
- Vercel
- Netlify
- Cloudflare Pages
- Или любой другой хостинг с поддержкой Node.js

Для статической генерации используйте:

```bash
npm run generate
```

Это создаст статические файлы в папке `.output/public`.

# lending-hetzer-bot
# lending-hetzer-bot
