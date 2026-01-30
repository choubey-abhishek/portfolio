const CACHE_NAME = 'abhishek-portfolio-v1';
const urlsToCache = [
  '/',
  '/index.html',
  // Add more: CSS, JS, images, videos, etc.
  // e.g., '/style.css' if external, but yours is inline
  // '/Scalable URL Shortener.mp4',
  // '/Full-Stack Educational.mp4',
  // '/Speed testing.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
