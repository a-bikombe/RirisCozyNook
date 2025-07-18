# Arianna’s Cozy Nook

Welcome to Arianna’s Cozy Nook, a gentle little corner of the internet where I share my favorite things, thoughts, and experiences. This site is built to be a low-pressure, feel-good space that reflects who I am.

---

## Features

- About Me: A small intro so you can get to know me
- Journal: Occasional entries about what I’m feeling, thinking, or doing
- Game Library: Some of the games I love or have played
- Favorites: Music, movies, snacks, and cozy things I enjoy
- Mood Tracker or Vibes Board: (Maybe coming soon!)

---

## Why This Exists

I wanted a space that’s just for me—calm, authentic, and creative. No pressure, no algorithms, just vibes.

---

## Tech Stack

- **Frontend:** Angular 16, Angular Material
- **Backend:** Node.js, Express
- **Database:** SQLite3
- **Tooling:** TypeScript, Concurrently

---

## Project Structure

```bash
ariannas-cozy-nook/
│
├── server/                # Node.js backend
│   └── db/
│       └── nook.db        # SQLite database file
│   └── index.js           # Entry point and API routes
├── src/                   # Angular frontend
├── .editorconfig
├── .gitignore
├── angular.json
├── package.json
├── README.md
├── tsconfig.app.json
└── tsconfig.json
```

---

## Setup Instructions

```bash
npm install
npm install express cors body-parser sqlite3
ng add @angular/material
npm start
```

This runs the backend and frontend concurrently. The server runs on <http://localhost:3000>, and the Angular app runs on <http://localhost:4200>.

⸻

## Future Ideas

- Custom themes (e.g. rainy day, sunny window)
- A little pet or mascot to hang out on the screen
- Upload images or decorate your journal

⸻

## License

MIT License
Created with love by Arianna Bikombe
