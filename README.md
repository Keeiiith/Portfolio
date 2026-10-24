# Keith Ryan N. Almanzor — Portfolio

React + Vite + Tailwind CSS v4. Dark mode, glass cards, soft accent glow.

## Run it

```bash
npm install
npm run dev      # local dev server
npm run build    # production build in /dist
npm run preview  # preview the build
```

## Change your content

Everything lives in `src/data/portfolio.js`:

- `profile`: name, headline, bio, email, resume path, social links
- `education`, `skills`, `projects`, `experience`

Search for `TODO` to find the placeholders (social links, email, project GitHub links).

## Resume button

Your resume is `public/resume.pdf`. Replace the file to update it. It shows up as "View Resume" in the hero, "Resume" in the menu panel, and "View Resume" and "Download" in the contact section.

## Change the accent color

Edit `--color-accent` in `src/index.css`:

- `#00e640` green (default)
- `#c6f432` lime
- `#34d399` emerald
- `#60a5fa` electric blue
- `#a78bfa` violet

## Deploy

Push to GitHub and import the repo on Vercel or Netlify. Build command: `npm run build`. Output folder: `dist`.

## Project screenshots

On the Projects list, hovering a row shows that project's UI on the left. Screenshots are in `public/projects/`. Each project in `src/data/portfolio.js` can have `image`, `github`, `figma` (adds a "View Figma" button) and `private: true` (locked GitHub button that opens a notice instead of a link). The notice text is `privateNotice` in the same file.

## Stack logos

PNG logos are in `public/logos/`. The `logos` list in `src/data/portfolio.js` links each tool name to its file. To add a tool, add its name to `skills` and its PNG to `logos`. Tools without a logo show a letter.
Logos are trademarks of their owners. Most come from the open-source Devicon set.

## Effects

- `Cursor.jsx`: green glow, dot and ring cursor, click ripple (mouse devices only)
- `Starfield.jsx`: background stars that react to the mouse
- `Focus.jsx`: each section fades out as it leaves the screen
- `HeroTerminal.jsx`: typing terminal on the hero (edit its lines in `terminal` in `src/data/portfolio.js`)
