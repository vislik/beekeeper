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
