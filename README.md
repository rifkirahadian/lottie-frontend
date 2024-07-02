This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Project Overview
This project is small React application that enables users to search and preview, upload and download Lottie Animations.The application provide robust offline capabilities, allowing users to interact with animations and access detailed metadata even when no internet connection is available

### Technology Used
● Apollo Client GraphQL for API development.
- Service Workers for offline support
- State Management Library (Redux)
- IndexedDB local caching
- PWA

### Pages 
- List of Animations
- Create New Animation
- Detail of animation

### Offline Support
- Service Worker -> Service workers act as a proxy between the network and the browser, allowing for the interception of network requests, caching responses, and delivering those cached responses when the network is unavailable
- IndexedDB -> IndexedDB provides a way to store large amounts of structured data, including files and blobs, which can be accessed offline. This way only happen if the APIs cannot be accessed.


## Getting Started
First, run the production server:

```bash
# install packages
npm install
# build
npm run build
# start
npm run start
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
