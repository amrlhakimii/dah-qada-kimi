# Dah Qada?

A small mobile-friendly web app for keeping track of missed (qada) prayers. You log which prayer was missed and when, then mark entries as done as you make them up. The UI is in Malay.

## Features

- Nickname prompt on first visit, stored in the browser (`localStorage`).
- Home screen with today's prayer times fetched from the e-Solat (JAKIM) API, with a selectable state and zone.
- Zikir counter, persisted in `localStorage`.
- Add a qada entry: date, prayer (subuh, zohor, asar, maghrib, isyak) and an optional reason.
- View the list of entries, mark them as done, or delete them.
- Qada entries are stored locally in the browser with IndexedDB (via Dexie). There is no backend.

The Profile page is currently a placeholder with static sample data.

## Tech stack

- React 19, TypeScript, Vite
- Material UI (MUI) and Emotion, react-icons
- React Router
- Dexie (IndexedDB), axios, moment

## Getting started

```bash
npm install     # or: yarn
npm run dev     # start the dev server
npm run build   # type-check and build
npm run lint
npm run preview # serve the production build
```

No environment variables are required. Prayer times are requested from `https://www.e-solat.gov.my`.

## Project structure

```
src/
  main.tsx, App.tsx        entry point and routing
  config/routes.ts         route table (/, /add-list, /view-list, /profile)
  pages/                   Home (prayer times, zikir), AddList, ViewList, Profile, NotFound
  components/layout/       app bar and layout
  contexts/                notification context
  db/index.ts              Dexie database (qadaSalah table)
  constants/               prayer list, states, JAKIM zone codes
  theme/                   MUI theme
```

The repository also contains older copies of these files at the top level; the app is built from `src/`.
