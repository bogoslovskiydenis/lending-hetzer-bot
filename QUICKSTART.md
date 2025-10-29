# 🚀 Быстрый старт

## 1️⃣ Запуск локально (опционально)

```bash
npm run dev
```

Откройте http://localhost:3000

---

## 2️⃣ Деплой на Vercel (1 минута)

```bash
npm i -g vercel
vercel login
vercel --prod
```

Получите URL, например: `https://lending-hetzer-bot.vercel.app`

---

## 3️⃣ Настройка бота в Telegram

### Откройте [@BotFather](https://t.me/BotFather)

### Если бота нет - создайте:
```
/newbot
Название: HertzBet Bot
Username: @hertzbet_bot
```

### Создайте Web App:
```
/newapp
[выберите бота]
Название: HertzBet
Описание: Официальное приложение HertzBet
Фото: [загрузите 512x512]
URL: https://lending-hetzer-bot.vercel.app  ⬅️ ваш Vercel URL
Short name: hertzbet
```

### Добавьте кнопку в меню:
```
/setmenubutton
[выберите бота]
Текст: 🎰 Открыть HertzBet
URL: https://lending-hetzer-bot.vercel.app  ⬅️ ваш Vercel URL
```

---

## 4️⃣ Готово! 🎉

1. Откройте вашего бота в Telegram
2. Нажмите кнопку "🎰 Открыть HertzBet"
3. Приложение откроется в полноэкранном режиме
4. Через 1 секунду произойдет редирект на hertzbet.com

---

## 🔧 Настройка

### Изменить URL редиректа:
Отредактируйте `pages/index.vue`, строка 15:
```typescript
const redirectUrl = 'https://hertzbet.com/'  // ⬅️ измените здесь
```

### Изменить задержку редиректа:
Отредактируйте `pages/index.vue`, строка 78:
```typescript
}, 1000)  // ⬅️ миллисекунды (1000 = 1 секунда)
```

### Изменить цвета:
Отредактируйте `pages/index.vue`, стили (строка 85+)

---

## ❓ Не работает полный экран?

✅ Проверьте:
1. Версия Telegram >= 8.0 (мобильный) или >= 3.0 (desktop)
2. URL в BotFather совпадает с Vercel URL
3. Откройте консоль браузера (Ctrl+Shift+I) и посмотрите логи

✅ Попробуйте:
1. Очистить кеш Telegram: Настройки → Данные и память → Очистить кеш
2. Перезапустить Telegram
3. Открыть в другом устройстве (iOS/Android/Desktop)

---

## 📚 Подробная документация

- [README.md](README.md) - полная документация
- [DEPLOY.md](DEPLOY.md) - детальные инструкции по деплою

