// ========================================
// SYNCHRONISATION DES DONNÉES
// Gestion centralisée pour tous les outils
// ========================================

// ===================
// GESTION DES ÉLÈVES
// ===================

/**
 * Récupère la liste des élèves depuis localStorage
 * @returns {Array} Liste des élèves avec structure {id, nom, niveau}
 */
function getEleves() {
  const saved = localStorage.getItem('eleves');
  if (saved) {
    try {
      return JSON.parse(saved);
    } catch (e) {
      console.error('Erreur lors du chargement des élèves:', e);
      return [];
    }
  }
  return [];
}

/**
 * Sauvegarde la liste des élèves dans localStorage
 * @param {Array} eleves - Liste des élèves
 */
function setEleves(eleves) {
  try {
    localStorage.setItem('eleves', JSON.stringify(eleves));
    // Déclencher un événement pour notifier les autres outils
    window.dispatchEvent(new CustomEvent('elevesUpdated', { detail: eleves }));
  } catch (e) {
    console.error('Erreur lors de la sauvegarde des élèves:', e);
  }
}

/**
 * Ajoute un élève
 * @param {Object} eleve - {nom, niveau}
 * @returns {Object} L'élève ajouté avec son ID
 */
function ajouterEleve(nom, niveau = null) {
  const eleves = getEleves();
  const niveauClasse = niveau || getNiveau();
  
  const nouvelEleve = {
    id: Date.now(), // ID unique basé sur timestamp
    nom: nom.trim(),
    niveau: niveauClasse
  };
  
  eleves.push(nouvelEleve);
  setEleves(eleves);
  
  return nouvelEleve;
}

/**
 * Supprime un élève
 * @param {Number} eleveId - ID de l'élève à supprimer
 */
function supprimerEleve(eleveId) {
  let eleves = getEleves();
  eleves = eleves.filter(e => e.id !== eleveId);
  setEleves(eleves);
}

/**
 * Modifie un élève
 * @param {Number} eleveId - ID de l'élève
 * @param {Object} modifications - Champs à modifier
 */
function modifierEleve(eleveId, modifications) {
  const eleves = getEleves();
  const index = eleves.findIndex(e => e.id === eleveId);
  
  if (index !== -1) {
    eleves[index] = { ...eleves[index], ...modifications };
    setEleves(eleves);
  }
}

// ===================
// GESTION DU NIVEAU
// ===================

/**
 * Récupère le niveau de classe actuel
 * @returns {String} 'PS', 'MS', 'GS', 'PS-MS', 'MS-GS', 'PS-MS-GS', 'TPS-PS' (défaut: 'GS')
 */
function getNiveau() {
  const niveau = localStorage.getItem('niveau_classe');
  const niveauxValides = ['PS', 'MS', 'GS', 'TPS-PS', 'PS-MS', 'MS-GS', 'PS-MS-GS'];
  if (niveau && niveauxValides.includes(niveau)) {
    return niveau;
  }
  return 'GS'; // Défaut
}

/**
 * Définit le niveau de classe
 * @param {String} niveau - 'PS', 'MS', 'GS', 'PS-MS', 'MS-GS', 'PS-MS-GS', 'TPS-PS'
 */
function setNiveau(niveau) {
  const niveauxValides = ['PS', 'MS', 'GS', 'TPS-PS', 'PS-MS', 'MS-GS', 'PS-MS-GS'];
  if (niveauxValides.includes(niveau)) {
    localStorage.setItem('niveau_classe', niveau);
    // Déclencher un événement pour notifier les autres outils
    window.dispatchEvent(new CustomEvent('niveauUpdated', { detail: niveau }));
  } else {
    console.error('Niveau invalide:', niveau);
  }
}

/**
 * Récupère les informations du niveau
 * @returns {Object} {code, nom, emoji, couleur}
 */
function getNiveauInfo() {
  const niveau = getNiveau();
  const infos = {
    'PS': {
      code: 'PS',
      nom: 'Petite Section',
      emoji: '🟡',
      couleur: '#FFD93D'
    },
    'MS': {
      code: 'MS',
      nom: 'Moyenne Section',
      emoji: '🔴',
      couleur: '#FF6B9D'
    },
    'GS': {
      code: 'GS',
      nom: 'Grande Section',
      emoji: '🔵',
      couleur: '#8b6f47'
    },
    'TPS-PS': {
      code: 'TPS-PS',
      nom: 'TPS-PS',
      emoji: '🟠',
      couleur: '#FFA726'
    },
    'PS-MS': {
      code: 'PS-MS',
      nom: 'PS-MS',
      emoji: '🟠',
      couleur: '#FF8A65'
    },
    'MS-GS': {
      code: 'MS-GS',
      nom: 'MS-GS',
      emoji: '🟣',
      couleur: '#BA68C8'
    },
    'PS-MS-GS': {
      code: 'PS-MS-GS',
      nom: 'PS-MS-GS',
      emoji: '🌈',
      couleur: '#7E57C2'
    }
  };
  
  return infos[niveau] || infos['GS'];
}

// ===================
// GESTION DES GROUPES
// ===================

/**
 * Récupère les groupes depuis localStorage
 * @returns {Array} Liste des groupes
 */
function getGroupes() {
  const saved = localStorage.getItem('groupes');
  if (saved) {
    try {
      return JSON.parse(saved);
    } catch (e) {
      console.error('Erreur lors du chargement des groupes:', e);
      return [];
    }
  }
  return [];
}

/**
 * Sauvegarde les groupes dans localStorage
 * @param {Array} groupes - Liste des groupes
 */
function setGroupes(groupes) {
  try {
    localStorage.setItem('groupes', JSON.stringify(groupes));
    window.dispatchEvent(new CustomEvent('groupesUpdated', { detail: groupes }));
  } catch (e) {
    console.error('Erreur lors de la sauvegarde des groupes:', e);
  }
}

// ===================
// UTILITAIRES
// ===================

/**
 * Écoute les changements d'élèves
 * @param {Function} callback - Fonction appelée quand les élèves changent
 */
function onElevesChange(callback) {
  window.addEventListener('elevesUpdated', (e) => {
    callback(e.detail);
  });
}

/**
 * Écoute les changements de niveau
 * @param {Function} callback - Fonction appelée quand le niveau change
 */
function onNiveauChange(callback) {
  window.addEventListener('niveauUpdated', (e) => {
    callback(e.detail);
  });
}

/**
 * Initialise les données par défaut si nécessaire
 */
function initialiserDonneesParDefaut() {
  const eleves = getEleves();
  
  // Si aucun élève, créer des exemples
  if (eleves.length === 0) {
    const niveau = getNiveau();
    const elevesDefaut = [
      { id: 1, nom: 'MARTIN Emma', niveau: niveau },
      { id: 2, nom: 'DUBOIS Lucas', niveau: niveau },
      { id: 3, nom: 'BERNARD Léa', niveau: niveau },
      { id: 4, nom: 'PETIT Tom', niveau: niveau },
      { id: 5, nom: 'ROBERT Chloé', niveau: niveau }
    ];
    setEleves(elevesDefaut);
  }
}

// ===================
// EXPORT / IMPORT
// ===================

/**
 * Exporte toutes les données en JSON
 * @returns {Object} Toutes les données
 */
function exporterDonnees() {
  return {
    eleves: getEleves(),
    niveau: getNiveau(),
    groupes: getGroupes(),
    date: new Date().toISOString()
  };
}

/**
 * Importe des données depuis JSON
 * @param {Object} data - Données à importer
 */
function importerDonnees(data) {
  if (data.eleves) setEleves(data.eleves);
  if (data.niveau) setNiveau(data.niveau);
  if (data.groupes) setGroupes(data.groupes);
}

// ===================
// INITIALISATION
// ===================

// Initialiser au chargement de la page
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initialiserDonneesParDefaut);
} else {
  initialiserDonneesParDefaut();
}

// Exposer les fonctions globalement
window.SyncData = {
  // Élèves
  getEleves,
  setEleves,
  ajouterEleve,
  supprimerEleve,
  modifierEleve,
  onElevesChange,
  
  // Niveau
  getNiveau,
  setNiveau,
  getNiveauInfo,
  onNiveauChange,
  
  // Groupes
  getGroupes,
  setGroupes,
  
  // Export/Import
  exporterDonnees,
  importerDonnees,
  
  // Init
  initialiserDonneesParDefaut
};

console.log('✅ SyncData chargé - Synchronisation active');
