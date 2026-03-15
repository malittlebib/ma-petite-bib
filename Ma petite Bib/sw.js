// Service Worker pour Ma Petite Bib
// Version 2.0 - Mode hors-ligne amélioré

const CACHE_NAME = 'ma-petite-bib-v2.0';
const RUNTIME_CACHE = 'runtime-cache-v2.0';

// Fichiers essentiels à mettre en cache
const ESSENTIAL_FILES = [
  './index.html',
  './tableau-de-bord.html',
  './gestion-classe.html',
  './evaluation-observations.html',
  './suivi-comportement.html',
  './classe-en-direct.html',
  './documents-ien.html',
  './planning-annuel.html',
  './cahier-journal-final-complet.html',
  './sync-data.js',
  './pdf-exporter.js',
  './competences-data.js',
  './apple-touch-icon.png',
  './manifest.json'
];

// Installation du Service Worker
self.addEventListener('install', (event) => {
  console.log('🔧 Service Worker : Installation...');
  
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('📦 Mise en cache des fichiers essentiels');
        return cache.addAll(ESSENTIAL_FILES);
      })
      .then(() => {
        console.log('✅ Service Worker installé');
        return self.skipWaiting();
      })
      .catch((error) => {
        console.error('❌ Erreur installation:', error);
      })
  );
});

// Activation du Service Worker
self.addEventListener('activate', (event) => {
  console.log('🚀 Service Worker : Activation...');
  
  event.waitUntil(
    caches.keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            if (cacheName !== CACHE_NAME && cacheName !== RUNTIME_CACHE) {
              console.log('🗑️ Suppression ancien cache:', cacheName);
              return caches.delete(cacheName);
            }
          })
        );
      })
      .then(() => {
        console.log('✅ Service Worker activé');
        return self.clients.claim();
      })
  );
});

// Interception des requêtes
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);
  
  // Ignorer les requêtes non-HTTP
  if (!url.protocol.startsWith('http')) {
    return;
  }
  
  // Stratégie : Cache First pour les fichiers locaux
  if (url.origin === self.location.origin) {
    event.respondWith(
      caches.match(request)
        .then((cachedResponse) => {
          if (cachedResponse) {
            return cachedResponse;
          }
          
          return fetch(request)
            .then((response) => {
              // Ne pas mettre en cache les erreurs
              if (!response || response.status !== 200 || response.type === 'error') {
                return response;
              }
              
              // Cloner la réponse
              const responseToCache = response.clone();
              
              caches.open(RUNTIME_CACHE)
                .then((cache) => {
                  cache.put(request, responseToCache);
                });
              
              return response;
            })
            .catch(() => {
              // Retourner une page hors-ligne personnalisée
              return caches.match('./index.html');
            });
        })
    );
  } else {
    // Stratégie : Network First pour les ressources externes (CDN)
    event.respondWith(
      fetch(request)
        .then((response) => {
          const responseToCache = response.clone();
          
          caches.open(RUNTIME_CACHE)
            .then((cache) => {
              cache.put(request, responseToCache);
            });
          
          return response;
        })
        .catch(() => {
          return caches.match(request);
        })
    );
  }
});

// Synchronisation en arrière-plan
self.addEventListener('sync', (event) => {
  if (event.tag === 'sync-data') {
    console.log('🔄 Synchronisation des données...');
    event.waitUntil(syncData());
  }
});

async function syncData() {
  try {
    // Logique de synchronisation
    console.log('✅ Données synchronisées');
  } catch (error) {
    console.error('❌ Erreur synchronisation:', error);
  }
}

// Messages du Service Worker
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
  
  if (event.data && event.data.type === 'CHECK_UPDATE') {
    event.ports[0].postMessage({
      type: 'UPDATE_STATUS',
      hasUpdate: false
    });
  }
});

console.log('📱 Service Worker Ma Petite Bib chargé');
