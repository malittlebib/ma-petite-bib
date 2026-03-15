// ========================================
// GESTIONNAIRE PWA
// Installation, mises à jour, mode hors-ligne
// ========================================

class PWAManager {
  constructor() {
    this.deferredPrompt = null;
    this.registration = null;
    this.isOnline = navigator.onLine;
    
    this.init();
  }
  
  async init() {
    // Enregistrer le Service Worker
    if ('serviceWorker' in navigator) {
      try {
        this.registration = await navigator.serviceWorker.register('./sw.js');
        console.log('✅ Service Worker enregistré');
        
        // Vérifier les mises à jour
        this.checkForUpdates();
        
        // Écouter les changements de connexion
        window.addEventListener('online', () => this.handleOnline());
        window.addEventListener('offline', () => this.handleOffline());
        
        // Écouter l'événement d'installation
        window.addEventListener('beforeinstallprompt', (e) => {
          e.preventDefault();
          this.deferredPrompt = e;
          this.showInstallButton();
        });
        
        // Détecter si déjà installé
        window.addEventListener('appinstalled', () => {
          console.log('✅ PWA installée');
          this.hideInstallButton();
          this.showNotification('Application installée avec succès !', 'success');
        });
        
        // Afficher le statut de connexion initial
        this.updateConnectionStatus();
        
      } catch (error) {
        console.error('❌ Erreur Service Worker:', error);
      }
    }
  }
  
  // Vérifier les mises à jour
  async checkForUpdates() {
    if (!this.registration) return;
    
    try {
      await this.registration.update();
      
      // Écouter les nouveaux Service Workers
      this.registration.addEventListener('updatefound', () => {
        const newWorker = this.registration.installing;
        
        newWorker.addEventListener('statechange', () => {
          if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
            this.showUpdateNotification();
          }
        });
      });
    } catch (error) {
      console.error('Erreur vérification mises à jour:', error);
    }
  }
  
  // Afficher notification de mise à jour
  showUpdateNotification() {
    const notification = document.createElement('div');
    notification.innerHTML = `
      <div style="position: fixed; bottom: 20px; right: 20px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 20px 30px; border-radius: 15px; box-shadow: 0 10px 30px rgba(0,0,0,0.3); z-index: 100000; max-width: 400px;">
        <div style="display: flex; align-items: center; gap: 15px;">
          <i class="fas fa-sync-alt" style="font-size: 2rem;"></i>
          <div style="flex: 1;">
            <strong style="display: block; margin-bottom: 5px; font-size: 1.1rem;">Mise à jour disponible</strong>
            <p style="margin: 0; font-size: 0.9rem; opacity: 0.9;">Une nouvelle version est prête</p>
          </div>
        </div>
        <div style="margin-top: 15px; display: flex; gap: 10px;">
          <button onclick="window.PWAManager.applyUpdate()" style="flex: 1; padding: 10px; background: white; color: #667eea; border: none; border-radius: 8px; font-weight: 700; cursor: pointer;">
            Actualiser
          </button>
          <button onclick="this.parentElement.parentElement.remove()" style="padding: 10px 20px; background: rgba(255,255,255,0.2); color: white; border: none; border-radius: 8px; font-weight: 700; cursor: pointer;">
            Plus tard
          </button>
        </div>
      </div>
    `;
    document.body.appendChild(notification);
  }
  
  // Appliquer la mise à jour
  applyUpdate() {
    if (!this.registration || !this.registration.waiting) return;
    
    this.registration.waiting.postMessage({ type: 'SKIP_WAITING' });
    
    navigator.serviceWorker.addEventListener('controllerchange', () => {
      window.location.reload();
    });
  }
  
  // Afficher bouton d'installation
  showInstallButton() {
    // Créer un bouton d'installation si pas déjà présent
    if (document.getElementById('pwa-install-button')) return;
    
    const button = document.createElement('button');
    button.id = 'pwa-install-button';
    button.innerHTML = `
      <i class="fas fa-download"></i> Installer l'application
    `;
    button.style.cssText = `
      position: fixed;
      bottom: 20px;
      left: 20px;
      background: linear-gradient(135deg, #27ae60 0%, #229954 100%);
      color: white;
      padding: 15px 25px;
      border: none;
      border-radius: 15px;
      font-weight: 700;
      font-size: 1rem;
      cursor: pointer;
      box-shadow: 0 8px 25px rgba(39,174,96,0.4);
      z-index: 100000;
      transition: all 0.3s;
      display: flex;
      align-items: center;
      gap: 10px;
    `;
    
    button.addEventListener('mouseover', () => {
      button.style.transform = 'translateY(-3px)';
      button.style.boxShadow = '0 12px 35px rgba(39,174,96,0.5)';
    });
    
    button.addEventListener('mouseout', () => {
      button.style.transform = 'translateY(0)';
      button.style.boxShadow = '0 8px 25px rgba(39,174,96,0.4)';
    });
    
    button.addEventListener('click', () => this.installPWA());
    
    document.body.appendChild(button);
  }
  
  // Masquer bouton d'installation
  hideInstallButton() {
    const button = document.getElementById('pwa-install-button');
    if (button) button.remove();
  }
  
  // Installer PWA
  async installPWA() {
    if (!this.deferredPrompt) return;
    
    this.deferredPrompt.prompt();
    const { outcome } = await this.deferredPrompt.userChoice;
    
    if (outcome === 'accepted') {
      console.log('✅ Installation acceptée');
    } else {
      console.log('❌ Installation refusée');
    }
    
    this.deferredPrompt = null;
    this.hideInstallButton();
  }
  
  // Gestion connexion
  handleOnline() {
    this.isOnline = true;
    this.updateConnectionStatus();
    this.showNotification('✅ Connexion rétablie', 'success');
    
    // Synchroniser les données si besoin
    if (this.registration && this.registration.sync) {
      this.registration.sync.register('sync-data');
    }
  }
  
  handleOffline() {
    this.isOnline = false;
    this.updateConnectionStatus();
    this.showNotification('📱 Mode hors-ligne activé', 'info');
  }
  
  // Mettre à jour le statut de connexion
  updateConnectionStatus() {
    const statusElement = document.getElementById('connection-status');
    if (!statusElement) {
      this.createConnectionStatus();
      return;
    }
    
    if (this.isOnline) {
      statusElement.innerHTML = '<i class="fas fa-wifi"></i> En ligne';
      statusElement.style.background = 'linear-gradient(135deg, #27ae60 0%, #229954 100%)';
    } else {
      statusElement.innerHTML = '<i class="fas fa-wifi-slash"></i> Hors-ligne';
      statusElement.style.background = 'linear-gradient(135deg, #e74c3c 0%, #c0392b 100%)';
    }
  }
  
  // Créer indicateur de statut
  createConnectionStatus() {
    const status = document.createElement('div');
    status.id = 'connection-status';
    status.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      padding: 10px 20px;
      border-radius: 10px;
      color: white;
      font-weight: 700;
      font-size: 0.9rem;
      z-index: 99999;
      display: flex;
      align-items: center;
      gap: 8px;
      box-shadow: 0 4px 15px rgba(0,0,0,0.2);
    `;
    
    document.body.appendChild(status);
    this.updateConnectionStatus();
  }
  
  // Afficher notification
  showNotification(message, type = 'info') {
    const colors = {
      success: '#27ae60',
      error: '#e74c3c',
      info: '#667eea'
    };
    
    const notification = document.createElement('div');
    notification.innerHTML = `
      <div style="position: fixed; top: 80px; right: 20px; background: ${colors[type]}; color: white; padding: 15px 25px; border-radius: 12px; box-shadow: 0 8px 25px rgba(0,0,0,0.3); z-index: 100000; font-weight: 700; animation: slideIn 0.3s ease;">
        ${message}
      </div>
      <style>
        @keyframes slideIn {
          from { transform: translateX(400px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
      </style>
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => notification.remove(), 3000);
  }
  
  // Vérifier si installé
  isInstalled() {
    return window.matchMedia('(display-mode: standalone)').matches ||
           window.navigator.standalone === true;
  }
  
  // Obtenir statistiques cache
  async getCacheStats() {
    if (!('caches' in window)) return null;
    
    const cacheNames = await caches.keys();
    let totalSize = 0;
    let filesCount = 0;
    
    for (const cacheName of cacheNames) {
      const cache = await caches.open(cacheName);
      const keys = await cache.keys();
      filesCount += keys.length;
      
      for (const request of keys) {
        const response = await cache.match(request);
        if (response) {
          const blob = await response.blob();
          totalSize += blob.size;
        }
      }
    }
    
    return {
      caches: cacheNames.length,
      files: filesCount,
      size: (totalSize / 1024 / 1024).toFixed(2) + ' MB'
    };
  }
}

// Initialiser le gestionnaire PWA
window.PWAManager = new PWAManager();

// Exporter pour utilisation globale
window.addEventListener('load', () => {
  console.log('📱 PWA Manager initialisé');
  
  // Log si installé
  if (window.PWAManager.isInstalled()) {
    console.log('✅ Application installée en mode standalone');
  }
});
