# Riri's Cozy Nook 🪷✨

A cozy-core full-stack web app built with Angular, Node.js (Vercel Serverless), and a splash of baddie energy. You're stepping into a nook of vibes, visuals, and very cute components.

---

## 🛠 Tech Stack

- **Frontend:** Angular 17+, TypeScript, SCSS
- **Backend:** Node.js API routes (via Vercel Serverless)
- **Database:** Neon (Postgres, hosted)
- **E2E Testing:** Playwright
- **Unit Testing:** Jasmine + Karma
- **Deployment:** Vercel
- **Styling:** Custom SCSS with pastel + cozy themes
- **Dev Tools:** Prettier, .editorconfig

---

## 📁 File Structure

```plaintext
RirisCozyNook/
├── api/                      # Serverless API functions
│   └── crew.js               # Example endpoint: GET crew data
├── e2e/                      # Playwright end-to-end tests
│   ├── app.spec.ts
│   └── pages/
├── public/images/           # Character image assets
│   ├── evan.png
│   ├── mo.png
│   └── ...
├── public/gifs/           # Character image assets
├── src/                     # Angular app source
│   ├── app/
│   │   ├── models/          # TypeScript interfaces
│   │   ├── pages/
│   │   │   ├── about-me/
│   │   │   │   ├── crew/    # Nested component
│   │   │   └── cozy-corner/
│   │   ├── app.routes.ts    # Route definitions
│   │   └── ...
│   ├── styles.scss
│   ├── _variables.scss
│   └── main.ts
├── .vercel/                 # Vercel deployment config
├── .env.development.local   # Local environment variables
├── angular.json             # Angular config
├── package.json             # Dependencies + scripts
├── playwright.config.ts     # E2E test setup
└── README.md                # You're here!
```

---

## 🚀 Getting Started

### Install Dependencies

```bash
npm install
```

### Start the Dev Server

```bash
ng serve
```

Go to `http://localhost:4200` to view the app.

---

## 🧪 Running Tests

### Unit Tests (Jasmine + Karma)

```bash
ng test
```

### E2E Tests (Playwright)

```bash
npx playwright test
```

You can also run specific tests from `e2e/app.spec.ts` or use custom page objects in `e2e/pages`.

---

## 🌐 API Routes

Deployed via Vercel’s serverless functions in the `/api` folder. Example:

```bash
GET /api/crew
```

Returns JSON data of your crew members.

---

## ✨ Custom Styling

All styles are written in SCSS with cozy-core variables in `_variables.scss`.

---

## 🧼 Code Style

This repo uses:

- `.editorconfig` for consistent spacing
- `.prettierrc` for linting and formatting

Use:

```bash
npx prettier --write .
```

---

## 🧭 Roadmap Ideas (Optional)

- Add favorites page with local storage or DB-backed state
- Integrate bunny fact API for daily fluff
- Storybook setup for isolated UI testing
- Clerk/Auth0 login if you ever want personalization

---

## 🌸 Live Preview

Hosted on **Vercel**  
🪩 <https://riris-cozy-nook.vercel.app> _(Replace with your actual link)_

---

## 🖤 Made with love (and TypeScript) by Arianna
