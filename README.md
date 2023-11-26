## Developing

Install dependencies with `npm install` (or `pnpm install` or `yarn`) and start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Generate static/sounds.json

```bash
node src/listSounds.js
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

## Deploying

```bash
npm run gh-pages
```

## .nojekyll file for Tailwind CSS/Postcss

If you are using a postcss such as Tailwind css, you need to add **an empty `.nojekyll`** file to the `gh-pages` branch.
