# HertzBet Telegram Mini App

Telegram Mini App для редиректа на HertzBet с красивым лоадером в полноэкранном режиме.

## Возможности

- 🚀 Полноэкранный режим в Telegram
- 💫 Красивый анимированный лоадер
- 🔄 Автоматический редирект на hertzbet.com
- 📱 Оптимизировано для мобильных устройств
- 🎨 Современный дизайн с градиентами
- 🔒 Блокировка вертикальных свайпов
- ⚡️ Ранняя инициализация через плагин

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

### Шаг 1: Создание бота
1. Откройте [@BotFather](https://t.me/BotFather) в Telegram
2. Отправьте команду `/newbot`
3. Следуйте инструкциям и получите токен

### Шаг 2: Создание Web App
1. Отправьте команду `/newapp` в BotFather
2. Выберите вашего бота
3. Введите название приложения (например: HertzBet)
4. Введите описание
5. Загрузите иконку (512x512 px)
6. Загрузите GIF-демонстрацию (опционально)
7. **Важно!** Укажите URL вашего приложения (например: `https://your-app.vercel.app`)

### Шаг 3: Настройка меню бота
```
/setmenubutton
[Выберите вашего бота]
[Введите название кнопки] HertzBet
[Введите URL] https://your-app.vercel.app
```

### Шаг 4: Настройка полноэкранного режима (важно!)
В BotFather также настройте:
```
/setdescription - описание бота
/setabouttext - короткий текст о боте
```

## Конфигурация

### Изменение URL редиректа
Отредактируйте `pages/index.vue`:

```typescript
const redirectUrl = 'https://hertzbet.com/'
```

### Изменение времени задержки
По умолчанию задержка 1 секунда:

```typescript
setTimeout(() => {
  window.location.href = redirectUrl
}, 1000) // <- измените это значение (в миллисекундах)
```

### Изменение цветов
Отредактируйте цвета в `pages/index.vue`:

```css
background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);
```

И в настройках Telegram:

```typescript
tg.setHeaderColor('#1a1a2e')
tg.setBackgroundColor('#1a1a2e')
```

## Деплой

### Vercel (рекомендуется)
1. Установите Vercel CLI: `npm i -g vercel`
2. Запустите: `vercel`
3. Следуйте инструкциям
4. Скопируйте полученный URL в BotFather

### Netlify
1. Подключите репозиторий к Netlify
2. Build command: `npm run build`
3. Publish directory: `.output/public`
4. Скопируйте URL в BotFather

### Cloudflare Pages
1. Подключите репозиторий
2. Build command: `npm run build`
3. Build output directory: `.output/public`
4. Скопируйте URL в BotFather

### Статическая генерация
```bash
npm run generate
```
Файлы будут в `.output/public`

## Отладка

Для проверки работы в консоли браузера вы увидите логи:
- `🚀 Telegram environment detected!` - Telegram обнаружен
- `🔥 Expand called` - Вызов полноэкранного режима
- `🎯 Fullscreen requested` - Запрос fullscreen
- `🔄 Redirecting...` - Начало редиректа

Если приложение не разворачивается:
1. Проверьте версию Telegram (должна быть >= 6.9)
2. Убедитесь, что в BotFather правильно настроен `/newapp`
3. Проверьте консоль браузера на ошибки
4. Попробуйте очистить кеш Telegram: Настройки → Данные и память → Очистить кеш

## Технологии

- Nuxt 3
- Vue 3
- TypeScript
- Telegram WebApp API
- CSS3 Animations

# lending-hetzer-bot
# lending-hetzer-bot
