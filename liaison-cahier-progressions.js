// MODULE DE LIAISON BIDIRECTIONNELLE CAHIER ↔ PROGRESSIONS
// Ma petite Bib - 2025-2026

/**
 * Ce module gère la liaison automatique entre :
 * - Les activités du cahier journal
 * - Les compétences des progressions
 */

var LiaisonCahierProgressions = (function() {
  'use strict';
  
  // CONFIGURATION
  var config = {
    storageKey: 'liaison_cahier_progressions',
    autoDetection: true,
    minScore: 0.6 // Score minimum pour suggestion automatique
  };
  
  // DONNÉES
  var liaisons = {}; // Structure: { activityId: [competence1, competence2, ...] }
  
  // MOTS-CLÉS PAR DOMAINE (pour détection automatique)
  var motsCleDomaines = {
    "Phonologie": {
      mots: ["phonème", "syllabe", "rime", "son", "phonologique", "scander", "frapper", "compter syllabe", "a o i u é e", "voyelle", "consonne"],
      domaine: "Mobiliser le langage dans toutes ses dimensions",
      sousDomaine: "Se préparer à apprendre à lire - Phonologie"
    },
    "Graphisme": {
      mots: ["graphisme", "tracer", "trait", "ligne", "boucle", "pont", "spirale", "cercle", "dessiner"],
      domaine: "Agir, s'exprimer, comprendre à travers les activités artistiques",
      sousDomaine: "Productions plastiques et visuelles - S'exercer au graphisme décoratif"
    },
    "Écriture": {
      mots: ["écrire", "écriture", "cursive", "prénom", "lettre", "capitale", "script", "encoder"],
      domaine: "Mobiliser le langage dans toutes ses dimensions",
      sousDomaine: "Se préparer à apprendre à écrire"
    },
    "Numération": {
      mots: ["nombre", "compter", "dénombrer", "quantité", "collection", "cardinal", "1 2 3 4 5", "chiffre"],
      domaine: "Acquérir les premiers outils mathématiques",
      sousDomaine: "Découvrir les nombres"
    },
    "Formes": {
      mots: ["forme", "géométrique", "carré", "rectangle", "triangle", "cercle", "solide"],
      domaine: "Acquérir les premiers outils mathématiques",
      sousDomaine: "Explorer les solides et les formes planes"
    },
    "Problèmes": {
      mots: ["problème", "résoudre", "ajout", "retrait", "partage", "groupement"],
      domaine: "Acquérir les premiers outils mathématiques",
      sousDomaine: "Utiliser les nombres pour résoudre des problèmes"
    },
    "Vocabulaire": {
      mots: ["vocabulaire", "mot", "lexique", "nommer", "désigner"],
      domaine: "Mobiliser le langage dans toutes ses dimensions",
      sousDomaine: "Acquérir le langage oral - Enrichir son vocabulaire"
    },
    "Oral": {
      mots: ["oral", "parler", "s'exprimer", "raconter", "expliquer", "décrire"],
      domaine: "Mobiliser le langage dans toutes ses dimensions",
      sousDomaine: "Acquérir le langage oral - Produire des discours variés"
    },
    "Motricité": {
      mots: ["motricité", "courir", "sauter", "lancer", "grimper", "ramper", "déplacement"],
      domaine: "Agir, s'exprimer, comprendre à travers l'activité physique",
      sousDomaine: "Adapter ses équilibres et ses déplacements"
    },
    "Arts": {
      mots: ["peinture", "dessin", "collage", "découpage", "plastique", "couleur"],
      domaine: "Agir, s'exprimer, comprendre à travers les activités artistiques",
      sousDomaine: "Productions plastiques et visuelles"
    },
    "Temps": {
      mots: ["temps", "journée", "semaine", "mois", "année", "calendrier", "date"],
      domaine: "Explorer le monde",
      sousDomaine: "Le temps"
    },
    "Espace": {
      mots: ["espace", "repérage", "position", "haut", "bas", "gauche", "droite", "quadrillage"],
      domaine: "Explorer le monde",
      sousDomaine: "L'espace"
    },
    "Vivant": {
      mots: ["vivant", "animal", "plante", "végétal", "corps", "sens"],
      domaine: "Explorer le monde",
      sousDomaine: "Découvrir le monde du vivant"
    }
  };
  
  // INIT
  function init() {
    charger();
    console.log('🔗 Module de liaison chargé:', Object.keys(liaisons).length, 'activités liées');
  }
  
  // CHARGER
  function charger() {
    try {
      var saved = localStorage.getItem(config.storageKey);
      if (saved) {
        liaisons = JSON.parse(saved);
      }
    } catch(e) {
      console.error('Erreur chargement liaisons:', e);
    }
  }
  
  // SAUVEGARDER
  function sauvegarder() {
    try {
      localStorage.setItem(config.storageKey, JSON.stringify(liaisons));
      console.log('✅ Liaisons sauvegardées');
    } catch(e) {
      console.error('Erreur sauvegarde liaisons:', e);
    }
  }
  
  // LIER UNE ACTIVITÉ À DES COMPÉTENCES
  function lierActivite(activityId, competences) {
    if (!activityId || !competences) return false;
    
    // Convertir en tableau si nécessaire
    if (typeof competences === 'string') {
      competences = [competences];
    }
    
    // Créer ou mettre à jour
    if (!liaisons[activityId]) {
      liaisons[activityId] = [];
    }
    
    // Ajouter les nouvelles compétences (éviter les doublons)
    competences.forEach(function(comp) {
      if (liaisons[activityId].indexOf(comp) === -1) {
        liaisons[activityId].push(comp);
      }
    });
    
    sauvegarder();
    return true;
  }
  
  // DÉLIER UNE COMPÉTENCE D'UNE ACTIVITÉ
  function delierCompetence(activityId, competence) {
    if (!liaisons[activityId]) return false;
    
    var index = liaisons[activityId].indexOf(competence);
    if (index > -1) {
      liaisons[activityId].splice(index, 1);
      
      // Supprimer l'entrée si vide
      if (liaisons[activityId].length === 0) {
        delete liaisons[activityId];
      }
      
      sauvegarder();
      return true;
    }
    return false;
  }
  
  // OBTENIR LES COMPÉTENCES D'UNE ACTIVITÉ
  function obtenirCompetences(activityId) {
    return liaisons[activityId] || [];
  }
  
  // OBTENIR LES ACTIVITÉS POUR UNE COMPÉTENCE
  function obtenirActivites(competence) {
    var activites = [];
    
    Object.keys(liaisons).forEach(function(activityId) {
      if (liaisons[activityId].indexOf(competence) > -1) {
        activites.push(activityId);
      }
    });
    
    return activites;
  }
  
  // DÉTECTION AUTOMATIQUE
  function detecterCompetences(titre, description, domaine) {
    var suggestions = [];
    var texte = (titre + ' ' + (description || '')).toLowerCase();
    
    // Chercher les mots-clés
    Object.keys(motsCleDomaines).forEach(function(theme) {
      var config = motsCleDomaines[theme];
      var score = 0;
      
      config.mots.forEach(function(motCle) {
        if (texte.indexOf(motCle.toLowerCase()) > -1) {
          score += 1;
        }
      });
      
      if (score > 0) {
        suggestions.push({
          theme: theme,
          score: score / config.mots.length,
          domaine: config.domaine,
          sousDomaine: config.sousDomaine
        });
      }
    });
    
    // Trier par score
    suggestions.sort(function(a, b) {
      return b.score - a.score;
    });
    
    return suggestions;
  }
  
  // SUGGÉRER DES COMPÉTENCES
  function suggererCompetences(titre, description, domaine) {
    var detections = detecterCompetences(titre, description, domaine);
    var suggestions = [];
    
    // Charger les progressions
    if (typeof progressionsCompletes === 'undefined') {
      console.warn('progressionsCompletes non chargé');
      return suggestions;
    }
    
    // Pour chaque détection, trouver les compétences correspondantes
    detections.forEach(function(detection) {
      if (detection.score >= config.minScore) {
        var domaineData = progressionsCompletes[detection.domaine];
        if (domaineData) {
          var sousdomaines = domaineData.sousDomainesParPeriode || domaineData.sousDomainesTransversaux || {};
          
          Object.keys(sousdomaines).forEach(function(sdNom) {
            // Correspondance partielle du nom
            if (sdNom.toLowerCase().indexOf(detection.theme.toLowerCase()) > -1 ||
                detection.sousDomaine.toLowerCase().indexOf(sdNom.toLowerCase()) > -1) {
              
              var periodes = sousdomaines[sdNom];
              Object.keys(periodes).forEach(function(periode) {
                if (Array.isArray(periodes[periode])) {
                  periodes[periode].forEach(function(comp) {
                    suggestions.push({
                      competence: comp,
                      domaine: detection.domaine,
                      sousDomaine: sdNom,
                      periode: periode,
                      score: detection.score,
                      theme: detection.theme
                    });
                  });
                }
              });
            }
          });
        }
      }
    });
    
    // Limiter à 5 suggestions max
    return suggestions.slice(0, 5);
  }
  
  // STATISTIQUES
  function obtenirStats() {
    var totalActivites = Object.keys(liaisons).length;
    var totalLiaisons = 0;
    var competencesUniques = {};
    
    Object.keys(liaisons).forEach(function(actId) {
      totalLiaisons += liaisons[actId].length;
      liaisons[actId].forEach(function(comp) {
        competencesUniques[comp] = (competencesUniques[comp] || 0) + 1;
      });
    });
    
    return {
      totalActivites: totalActivites,
      totalLiaisons: totalLiaisons,
      moyenneParActivite: totalActivites > 0 ? (totalLiaisons / totalActivites).toFixed(1) : 0,
      competencesUniques: Object.keys(competencesUniques).length,
      competencesLesPlusTravaillees: Object.keys(competencesUniques)
        .map(function(comp) {
          return { competence: comp, count: competencesUniques[comp] };
        })
        .sort(function(a, b) {
          return b.count - a.count;
        })
        .slice(0, 10)
    };
  }
  
  // EXPORTER LES LIAISONS
  function exporter() {
    return {
      liaisons: liaisons,
      stats: obtenirStats(),
      date: new Date().toISOString()
    };
  }
  
  // IMPORTER LES LIAISONS
  function importer(data) {
    if (data && data.liaisons) {
      liaisons = data.liaisons;
      sauvegarder();
      return true;
    }
    return false;
  }
  
  // API PUBLIQUE
  return {
    init: init,
    lier: lierActivite,
    delier: delierCompetence,
    obtenirCompetences: obtenirCompetences,
    obtenirActivites: obtenirActivites,
    detecter: detecterCompetences,
    suggerer: suggererCompetences,
    stats: obtenirStats,
    exporter: exporter,
    importer: importer
  };
  
})();

// Auto-init si progressions chargées
if (typeof progressionsCompletes !== 'undefined') {
  LiaisonCahierProgressions.init();
}

console.log('✅ Module LiaisonCahierProgressions chargé');
