# Медовый маршрут (Vue 3 + GSAP)

Многостраничный авторский сайт о пчеловодстве в чёрно-золотой визуальной концепции.

## Стек
- Vue 3
- Vue Router
- Vite
- SCSS
- GSAP + IntersectionObserver + Vue Transition

## Страницы
- `/` Главная
- `/about` О пасеке
- `/care` Пчёлы и уход
- `/calendar` Календарь работ
- `/gallery` Галерея
- `/blog` Блог
- `/contacts` Контакты

## Запуск
```bash
npm install
npm run dev
npm run build
```

## Деплой на GitHub Pages
Проект уже подготовлен под Pages:
- `vite.config.js` автоматически выставляет `base` для репозитория в CI;
- `.github/workflows/deploy-pages.yml` публикует `dist` через GitHub Actions;
- `public/404.html` добавляет fallback для Vue Router history mode.

Что сделать в GitHub:
1. Откройте `Settings` -> `Pages`.
2. В `Build and deployment` выберите `Source: GitHub Actions`.
3. Убедитесь, что workflow `Deploy to GitHub Pages` отработал успешно на ветке `main`.
4. Открывайте сайт по URL формата:
   `https://<your-username>.github.io/<repo-name>/`

Для вашего репозитория `beekeeper` это:
`https://<your-username>.github.io/beekeeper/`

## Структура
- `src/pages` страницы
- `src/components` переиспользуемые блоки
- `src/assets` изображения/иконки
- `src/data` контентные коллекции (включая галерею)
- `src/router` маршруты
- `src/directives` директивы анимаций

## Визуальная концепция
- Лого: золотая пчела в круге (`src/assets/images/bee-logo.svg`)
- Подложка: honeycomb + золотые пчёлы (`src/assets/images/bee-pattern.svg`)
- Плавные page transitions и stagger-анимации карточек
- `prefers-reduced-motion` fallback

## Галерея и расширение
Галерея поддерживает:
- карточки,
- полноэкранный lightbox,
- перелистывание кнопками,
- перелистывание клавишами `←`/`→`,
- закрытие `Esc`,
- переход по миниатюрам.

Чтобы добавить новые фото:
1. Положите файлы в `src/assets/images/` (или отдельную подпапку, например `src/assets/images/gallery/`).
2. Импортируйте изображения в `src/data/galleryItems.js`.
3. Добавьте новый объект в `galleryItems`:
```js
{
  src: myPhoto,
  alt: 'Короткое описание фото для доступности',
  title: 'Название',
  caption: 'Подпись к фото',
  location: 'Место, месяц'
}
```
