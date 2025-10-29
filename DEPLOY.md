# Инструкция по деплою

## Быстрый деплой на Vercel (рекомендуется)

### Способ 1: Через CLI
```bash
# 1. Установите Vercel CLI глобально
npm i -g vercel

# 2. Войдите в аккаунт
vercel login

# 3. Деплой
vercel

# 4. Для продакшена
vercel --prod
```

После деплоя вы получите URL вида: `https://your-app.vercel.app`

### Способ 2: Через Git
1. Создайте репозиторий на GitHub
2. Push код:
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/your-username/your-repo.git
git push -u origin main
```
3. Зайдите на [vercel.com](https://vercel.com)
4. Нажмите "New Project"
5. Импортируйте ваш репозиторий
6. Vercel автоматически определит настройки Nuxt
7. Нажмите "Deploy"

---

## Деплой на Netlify

### Через CLI
```bash
# 1. Установите Netlify CLI
npm i -g netlify-cli

# 2. Войдите
netlify login

# 3. Инициализируйте сайт
netlify init

# 4. Деплой
netlify deploy --prod
```

### Через Git
1. Push код на GitHub (см. выше)
2. Зайдите на [netlify.com](https://netlify.com)
3. "Add new site" → "Import an existing project"
4. Выберите ваш репозиторий
5. Настройки уже в `netlify.toml`, просто нажмите "Deploy"

---

## Деплой на Cloudflare Pages

1. Push код на GitHub
2. Зайдите на [Cloudflare Pages](https://pages.cloudflare.com/)
3. "Create a project" → "Connect to Git"
4. Выберите репозиторий
5. Настройки:
   - **Build command**: `npm run build`
   - **Build output directory**: `.output/public`
   - **Root directory**: `/`
6. Нажмите "Save and Deploy"

---

## Настройка Telegram Bot после деплоя

После успешного деплоя вы получите URL (например: `https://your-app.vercel.app`)

### 1. Откройте [@BotFather](https://t.me/BotFather)

### 2. Создайте Web App (если еще не создали)
```
/newapp
[Выберите вашего бота]
Название: HertzBet
Описание: Официальное приложение HertzBet
Фото: [загрузите иконку 512x512]
Demo GIF: [опционально]
URL: https://your-app.vercel.app  ⬅️ ВАШ URL
Short name: hertzbet
```

### 3. Настройте кнопку меню
```
/setmenubutton
[Выберите вашего бота]
Текст кнопки: 🎰 Открыть HertzBet
URL: https://your-app.vercel.app  ⬅️ ВАШ URL
```

### 4. (Опционально) Настройте inline режим
```
/setinlinegeo
[Выберите вашего бота]
Enable

/setinlinefeedback
[Выберите вашего бота]
100
```

---

## Проверка работы

1. Откройте вашего бота в Telegram
2. Нажмите на кнопку меню
3. Должно открыться приложение в полноэкранном режиме
4. Через 1 секунду должен произойти редирект на hertzbet.com

### Если не разворачивается на полный экран:

1. **Проверьте версию Telegram**
   - Telegram Desktop >= 3.0
   - Telegram iOS >= 8.0
   - Telegram Android >= 8.0

2. **Проверьте консоль в Desktop версии**
   - Откройте DevTools (Ctrl+Shift+I в Windows/Linux, Cmd+Option+I в macOS)
   - Смотрите логи с эмодзи 🚀🔥🎯

3. **Очистите кеш Telegram**
   - Настройки → Данные и память → Очистить кеш

4. **Проверьте URL в BotFather**
   - Убедитесь, что URL правильный и доступен
   - Попробуйте открыть URL в обычном браузере

---

## Обновление приложения

### Vercel
```bash
# Автоматически при push в Git
git add .
git commit -m "Update"
git push

# Или через CLI
vercel --prod
```

### Netlify
```bash
# Автоматически при push в Git
git push

# Или через CLI
netlify deploy --prod
```

---

## Мониторинг

### Vercel
- Логи: https://vercel.com/dashboard
- Analytics: встроенная аналитика в Vercel

### Netlify
- Логи: https://app.netlify.com
- Analytics: встроенная аналитика

### Cloudflare Pages
- Логи: https://dash.cloudflare.com
- Analytics: Cloudflare Web Analytics

---

## Полезные команды

```bash
# Локальная разработка
npm run dev

# Сборка
npm run build

# Предпросмотр продакшена локально
npm run preview

# Статическая генерация
npm run generate

# Проверка типов
npx nuxi typecheck
```

---

## Troubleshooting

### Ошибка: "Application not found"
- Убедитесь, что URL в BotFather правильный
- Проверьте, что сайт доступен по HTTPS

### Ошибка: "Failed to load resource"
- Проверьте CORS заголовки
- Убедитесь, что в vercel.json/netlify.toml правильные настройки

### Не происходит редирект
- Проверьте консоль браузера
- Убедитесь, что `redirectUrl` правильный в `pages/index.vue`

### Приложение медленно открывается
- Используйте CDN (Vercel/Netlify/Cloudflare уже используют)
- Оптимизируйте изображения если добавите
- Проверьте размер bundle (должен быть < 100KB)

---

## Поддержка

Если возникли проблемы:
1. Проверьте [README.md](README.md) - раздел "Отладка"
2. Проверьте логи в консоли браузера
3. Проверьте логи на платформе хостинга
4. Проверьте настройки в BotFather

