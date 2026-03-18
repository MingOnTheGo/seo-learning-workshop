// Service Worker for SEO学习工坊 PWA
const CACHE_NAME = 'seo-workshop-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/learn.html',
  '/flashcard.html',
  '/roots.html',
  '/progress.html',
  '/css/minimal.css',
  '/js/wordData.js',
  '/js/siteConfig.js',
  '/js/storage.js',
  '/icon-192.png',
  '/icon-512.png',
  '/manifest.json'
];

// Install event - cache resources
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
      .catch(function(error) {
        console.error('Cache open failed:', error);
      })
  );
  self.skipWaiting();
});

// Fetch event - serve from cache, fall back to network
self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // Cache hit - return response
        if (response) {
          return response;
        }

        // Clone the request
        const fetchRequest = event.request.clone();

        return fetch(fetchRequest).then(
          function(response) {
            // Check if valid response
            if (!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }

            // Clone the response
            const responseToCache = response.clone();

            caches.open(CACHE_NAME)
              .then(function(cache) {
                cache.put(event.request, responseToCache);
              });

            return response;
          }
        );
      })
      .catch(function(error) {
        console.error('Fetch failed:', error);
        // You could return a custom offline page here
      })
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', function(event) {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.map(function(cacheName) {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim();
});
