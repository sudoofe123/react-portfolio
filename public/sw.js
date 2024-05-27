const CACHE_NAME = 'version-1';
const CACHE_URLS= ['https://localhost:3000'];
// const CACHE_URLS = [
//   '/static/js/main.chunk.js',
//                   '/static/js/0.chunk.js',
//                   '/static/js/bundle.js',
//                   '/static/css/main.chunk.css',
//                   '/index.html',
//                   '/',
//                   '/manifest.json',
//                   '/api/token',
//                   '/api/Query/PortalConfig',
//                   "/users",
//                   '/api/query?datasetName=EmployerGroup',
//                   '/api/query?datasetName=EmployerGroupSubAccountDataset',
//                   '/api/query?datasetName=MainMetricsNested'
//   // Add other URLs you want to cache here
// ];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(CACHE_URLS);
    })
  );
});

// self.addEventListener('fetch', (event) => {
//   event.respondWith(
//     caches.match(event.request).then((response) => {
//       return response || fetch(event.request);
//     })
//   );
// });
// public/serviceWorker.js (updated fetch event)
self.addEventListener('fetch', (event) => {

  if (!navigator.onLine && event.request.url.startsWith('https://localhost:3000')) {
    event.respondWith(
      caches.open(CACHE_NAME).then(async (cache) => {
        const response = await cache.match(event.request);
        return (
          response ||
          fetch(event.request).then((networkResponse) => {
            cache.put(event.request, networkResponse.clone());
            return networkResponse;
          })
        );
      })
    );
  } else {
    event.respondWith(
      caches.match(event.request).then((response) => {
        return response || fetch(event.request);
      })
    );
  }
});

self.addEventListener('activate', (event) => {
  const cacheWhitelist = [CACHE_NAME];

  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (!cacheWhitelist.includes(cacheName)) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
