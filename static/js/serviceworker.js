// Set a name for the current cache
var cacheName = 'v1';

// Default files to always cache
var cacheFiles = [
    'static/css/main.css',
    'static/js/cached_pages.js',
    'static/js/index.js',
	'../',
];


self.addEventListener('install', function(e) {
    console.log('ServiceWorker Installed Successfully');
    // waitUntil Delays the event until the Promise is resolved
    e.waitUntil(
    	// Cache gets opened
	    caches.open(cacheName).then(function(cache) {
	    	// defined files added to the cache
			console.log('ServiceWorker Caching Defined CacheFiles');
			return cache.addAll(cacheFiles);
	    })
	);
});


self.addEventListener('activate', function(e) {
    e.waitUntil(
    	// Get all the cache keys (cacheName)
		caches.keys().then(function(cacheNames) {
			return Promise.all(cacheNames.map(function(thisCacheName) {
				// Check if the cached item is saved under a previous cacheName
				if (thisCacheName !== cacheName) {
					// Remove that cached file
					console.log('ServiceWorker Removing Cached Files from Cache - ', thisCacheName);
					return caches.delete(thisCacheName);
				}
			}));
		})
	);
});


self.addEventListener('fetch', function(e) {
	console.log('ServiceWorker Fetch Executed', e.request.url);
	e.respondWith( // e.respondWidth Responds to the fetch event
		caches.match(e.request) // Check in cache for the request being made
			.then(function(response) { // If the request is in the cache
				if ( response ) {
					console.log("ServiceWorker Found in Cache", e.request.url, response);
					return response; // Return the cached version
				}
				var requestClone = e.request.clone(); // If request is NOT in the cache, fetch and cache
				fetch(requestClone)
					.then(function(response) {
						if ( !response ) {
							return response;
						}
						var responseClone = response.clone();
						caches.open(cacheName).then(function(cache) { //  Open the cache
							cache.put(e.request, responseClone); // Put the fetched response in the cache
							console.log('ServiceWorker New Data Cached', e.request.url);
							return response; // Return the response.
				        });
					})
					.catch(function(err) {
						console.log('ServiceWorker Error Fetching & Caching New Data', err);
					});
			})
	);
});

