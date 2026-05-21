# Rasul Rustamov — Portfolio (React + Vite)

Полноценный React-проект на Vite, собранный из расширенной версии портфолио (с реальными данными проектов, картинками и переключателем языков EN / RU).

## Как запустить

```bash
npm install
npm run dev
```

После `npm run dev` в терминале появится `http://localhost:5173` — открой в браузере.

## Что внутри

```
portfolio-react/
├── index.html
├── package.json
├── vite.config.js
├── src/
│   ├── main.jsx              ← запуск + LangProvider
│   ├── App.jsx               ← навигация + Tweaks
│   ├── index.css             ← глобальные стили
│   ├── hooks/
│   │   └── useLang.jsx       ← хук + контекст языка (EN / RU)
│   ├── data/
│   │   ├── projects.js       ← данные проектов (EN база) + URL картинок
│   │   └── translations.js   ← UI-строки + RU оверрайды проектов
│   └── components/
│       ├── Header.jsx        ← шапка с логотипом и навигацией
│       ├── Home.jsx          ← главная (Hero + About + Hiring + проекты + контакты)
│       ├── ProjectCard.jsx   ← карточка проекта в сетке
│       ├── ProjectPage.jsx   ← страница кейса (2 раскладки)
│       ├── LangSwitch.jsx    ← переключатель EN / RU (внизу слева)
│       └── TweaksPanel.jsx   ← панель настроек дизайна (внизу справа)
└── public/
```

## Что было изменено относительно артефакта Claude

1. **Глобальные `window.PROJECTS` / `window.getProject` / `window.__LANG`** → нормальные ES-импорты и React Context.
2. **Стили из `<style>` в `Portfolio.html`** → отдельный `src/index.css`.
3. **Tweaks-протокол для облака Claude** (`__edit_mode_*` postMessage) — убран. Панель открывается кнопкой "✦ Tweaks" в правом нижнем углу.
4. **Переключатель языков** — был внутри Tweaks, вынесен в отдельный пилл-свитч слева внизу.
5. **Картинки** — подтягиваются с **postimg.cc**, точно как в исходнике. Все URL — в `src/data/projects.js`.

## Картинки

Все картинки сейчас подтягиваются с `i.postimg.cc/...` — это публичный CDN.

**Если хочешь, чтобы картинки лежали локально** (на случай, если postimg удалит файлы):
1. Скачай каждую картинку из `src/data/projects.js` и `ASSETS.logo` / `ASSETS.portrait`.
2. Положи в `src/assets/` (например, `installment-main.png`, `system-hero.png` и т.п.).
3. В `projects.js` замени URL на импорты:
   ```js
   import installmentMain from '../assets/installment-main.png';
   // ...
   images: { hero: installmentMain, ... }
   ```

## Сборка

```bash
npm run build      # собирает в dist/
npm run preview    # локальный предпросмотр собранной версии
```

`dist/` можно залить на любой статический хостинг — Vercel, Netlify, GitHub Pages.

## Дальше

- Тексты, новые проекты, новые ссылки на соцсети → `src/data/projects.js` + `src/data/translations.js`
- Логика страниц → файлы в `src/components/`
- Стили → `src/index.css`
# Website
