# Riri's Cozy Nook

Welcome to Riri's Cozy Nook! This is a personal Angular web app for sharing favorites, bunny facts, playlists, and cozy vibes.

## Features

- **Favorites**: Songs, albums, movies, TV shows, and games with cover images and lists.
- **Bunny Facts**: Random bunny facts fetched from an API.
- **Playlist**: Spotify playlist.
- **About Me**: Fun facts, skills, and hobbies.
- **Crew**: Special people in my life.
- **404 Page**: Custom not-found experience.
- **Dialogs**: Clickable buttons to show favorite colors, animals, foods, snacks, and artists.

## Tech Stack

- **Angular** (standalone components)
- **TypeScript**
- **Playwright** (E2E tests)
- **CDK Clipboard**
- **SCSS** for styling

## Getting Started

1. **Install dependencies**

   ```bash
   npm install
   ```

2. **Set up environment**

   - Copy `.env.example` to `.env` and set your `DATABASE_URL`.

3. **Run the app**

   ```bash
   npm start
   ```

4. **Run tests**

   ```bash
   npm test
   # or for E2E
   npx playwright test
   ```

## Project Structure

```plaintext
public/
  gifs/
  images/
    characters/
    covers/
      albums/
      games/
      movies-tv/
  svgs/
    check.svg
    copy.svg
src/
  app/
    components/
      favorite-icon/
      loader-dot/
      loader-spinner/
      navbar/
    constants/
    models/
    pages/
      about-me/
      bunny-facts/
      crew/
      favorites/
      home/
      not-found/
      playlist/
    services/
      bunny-fact/
      favorites/
e2e/
  pages/
api/
```

## API Endpoints

- `/api/bunny-facts` - Returns bunny facts
- `/api/bunny-facts/random` - Returns a random bunny fact

## License

MIT

---

Made with ❤️ by Riri
