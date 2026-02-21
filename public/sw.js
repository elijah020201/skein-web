// ============================================================
//  Skein PWA — Service Worker
//  Enables offline support and "Add to Home Screen"
// ============================================================

const CACHE_NAME = 'skein-v2';
const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/manifest.json',
  'https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700&family=Cormorant+Garamond:ital,wght@0,400;0,500;1,400&display=swap',
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      // Cache what we can, ignore failures for external resources
      return Promise.allSettled(
        STATIC_ASSETS.map(url => cache.add(url).catch(() => {}))
      );
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', event => {
  // Only handle http/https — ignore chrome-extension://, data:, etc.
  if (!event.request.url.startsWith('http')) return;

  const url = new URL(event.request.url);

  // Never cache API calls or Cognito requests — always network
  if (url.hostname.includes('amazonaws.com') || url.hostname.includes('execute-api')) {
    event.respondWith(fetch(event.request));
    return;
  }

  // Cache-first for static assets, fall back to network
  event.respondWith(
    caches.match(event.request).then(cached => {
      if (cached) return cached;
      return fetch(event.request).then(response => {
        if (response.ok && event.request.method === 'GET') {
          const clone = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
        }
        return response;
      }).catch(() => {
        // If offline and no cache, return the main app shell
        if (event.request.destination === 'document')
          return caches.match('/index.html');
      });
    })
  );
});
