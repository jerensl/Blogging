# Blogging

Blogging is an open source blogging system that is easy to use.

## Features

- Mobile app friendly using Progresive Web App
- Article and page creation using Markdown syntax
- Search articles
- Offline reading using cache
- Dark theme & Light theme

## Technologies Used

- [Typescript](https://www.typescriptlang.org/)
- [React](https://facebook.github.io/react/)
- [Tailwind CSS](https://tailwindcss.com/)
- [MDX](https://mdxjs.com/)
- [Progressive Web App](https://developers.google.com/web/progressive-web-apps/)
- [Workbox](https://developers.google.com/web/tools/workbox/)
- [Next.js](https://nextjs.org/)

## Getting Started

Dont forget to change app name & description on `public/manifest.json`.
If you want to build costum icon and theme, you can use this [web generator](https://app-manifest.firebaseapp.com/)

1. Clone this repository
2. Run `npm install`
3. Run `npm run dev`
4. Open `http://localhost:3000` in your browser
5. Test your changes by running `npm run test`
6. See code coverage by running `npm run test:coverage`

## Deployment

Because this app use Static Site Generators, you can deploy output directory to any static site hosting service or CDN.

1. Run `npm run build`
2. Deploy output directory to your static site hosting service or CDN

[See more on this documentation](https://nextjs.org/docs/advanced-features/static-html-export#deployment)
