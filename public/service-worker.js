// public/service-worker.js

const CACHE_NAME = 'animations-cache-v1';
const STATIC_ASSETS = [
  '/',
  '/offline',
  '/path/to/animation/files', // Add paths to static resources you want to cache
  // ...other static assets
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(STATIC_ASSETS);
    })
  );
});

self.addEventListener('fetch', (event) => {
  if (event.request.mode === 'navigate') {
    event.respondWith(
      fetch(event.request)
        .then((response) => {
          return caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request.url, response.clone());
            return response;
          });
        })
        .catch(() => {
          return caches.match(event.request).then((response) => {
            return response || caches.match('/offline');
          });
        })
    );
  } else {
    event.respondWith(
      caches.match(event.request).then((response) => {
        return (
          response ||
          fetch(event.request).then((response) => {
            return caches.open(CACHE_NAME).then((cache) => {
              cache.put(event.request.url, response.clone());
              return response;
            });
          })
        );
      })
    );
  }
});
