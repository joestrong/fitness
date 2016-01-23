"use strict";

self.addEventListener('install', function(event) {
    console.log('Service Worker: Installing v1');
    event.waitUntil(
        caches.open('v1').then(function(cache) {
            return cache.addAll([
                '/',
                '/app.js',
                '/app.css',
                '/fonts/MaterialIcons-Regular.eot',
                '/fonts/MaterialIcons-Regular.woff2',
                '/fonts/MaterialIcons-Regular.woff',
                '/fonts/MaterialIcons-Regular.ttf'
            ]);
        })
    );
});

self.addEventListener('activate', function(event) {
    console.log('Service Worker: Activating v1');
});

self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request).then(function (response) {
            if (response) {
                return response;
            }
            return fetch(event.request);
        })
    );
});
