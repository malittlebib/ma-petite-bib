/**
 * SÉLECTEUR INTELLIGENT DE COMPÉTENCES
 * Ajoute la détection automatique + recherche manuelle dans le formulaire d'activité
 */

(function() {
  'use strict';
  
  console.log('🎯 Sélecteur Intelligent - Chargement...');
  
  // VARIABLES GLOBALES
  var competencesDisponibles = [];
  var competencesSelectionnees = [];
  var currentActivityId = null;
  var detectionTimeout = null;
  
  // INIT
  document.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() {
      initialiserSelecteur();
      console.log('✅ Sélecteur Intelligent - Prêt');
    }, 1500); // Attendre que le cahier soit chargé
  });
  
  // INITIALISER LE SÉLECTEUR
  function initialiserSelecteur() {
    // Charger toutes les compétences disponibles
    chargerCompetencesDisponibles();
    
    // Remplacer le champ de compétence existant
    remplacerChampCompetence();
    
    // Surveiller le champ titre pour suggestions
    surveillerTitre();
    
    // Intercepter la sauvegarde
    intercepterSauvegarde();
  }
  
  // CHARGER TOUTES LES COMPÉTENCES DISPONIBLES
  function chargerCompetencesDisponibles() {
    competencesDisponibles = [];
    
    if (typeof progressionsCompletes === 'undefined') {
      console.warn('⚠️ progressionsCompletes non disponible');
      return;
    }
    
    Object.keys(progressionsCompletes).forEach(function(domaine) {
      var data = progressionsCompletes[domaine];
      var sousdomaines = data.sousDomainesParPeriode || data.sousDomainesTransversaux || {};
      
      Object.keys(sousdomaines).forEach(function(sdNom) {
        var periodes = sousdomaines[sdNom];
        
        Object.keys(periodes).forEach(function(periode) {
          if (Array.isArray(periodes[periode])) {
            periodes[periode].forEach(function(comp) {
              competencesDisponibles.push({
                texte: comp,
                domaine: domaine,
                sousDomaine: sdNom,
                periode: periode
              });
            });
          } else if (periodes === sousdomaines[sdNom] && Array.isArray(periodes)) {
            // Cas transversal (toutes périodes)
            periodes.forEach(function(comp) {
              competencesDisponibles.push({
                texte: comp,
                domaine: domaine,
                sousDomaine: sdNom,
                periode: 'Toutes'
              });
            });
          }
        });
      });
    });
    
    console.log('📚', competencesDisponibles.length, 'compétences chargées');
  }
  
  // REMPLACER LE CHAMP COMPÉTENCE
  function remplacerChampCompetence() {
    var competenceWrap = document.getElementById('competenceWrap');
    if (!competenceWrap) {
      console.warn('⚠️ competenceWrap non trouvé');
      return;
    }
    
    // Créer le nouveau contenu
    var html = '<label>Compétences travaillées</label>';
    
    // Zone de suggestions automatiques
    html += '<div id="suggestionsAuto" class="suggestions-auto"></div>';
    
    // Tags des compétences sélectionnées
    html += '<div id="competencesTags" class="competences-tags"></div>';
    
    // Champ de recherche
    html += '<div class="competence-search-container">';
    html += '<input type="text" id="competenceSearch" class="competence-search" placeholder="🔍 Rechercher ou ajouter une compétence...">';
    html += '<div id="competenceSearchResults" class="competence-search-results"></div>';
    html += '</div>';
    
    // Masquer l'ancien champ
    var oldSelect = document.getElementById('activityCompetence');
    if (oldSelect) oldSelect.style.display = 'none';
    
    competenceWrap.innerHTML = html;
    
    // Initialiser les événements
    var searchInput = document.getElementById('competenceSearch');
    if (searchInput) {
      searchInput.addEventListener('input', function(e) {
        rechercherCompetences(e.target.value);
      });
      
      searchInput.addEventListener('focus', function() {
        if (searchInput.value.trim()) {
          rechercherCompetences(searchInput.value);
        }
      });
    }
    
    // Clic en dehors = fermer les résultats
    document.addEventListener('click', function(e) {
      if (!e.target.closest('.competence-search-container')) {
        var results = document.getElementById('competenceSearchResults');
        if (results) results.style.display = 'none';
      }
    });
  }
  
  // SURVEILLER LE CHAMP TITRE POUR SUGGESTIONS AUTO
  function surveillerTitre() {
    var titreInput = document.getElementById('activityLabel');
    if (!titreInput) return;
    
    titreInput.addEventListener('input', function(e) {
      clearTimeout(detectionTimeout);
      
      detectionTimeout = setTimeout(function() {
        var titre = e.target.value.trim();
        if (titre.length > 3) {
          genererSuggestionsAuto(titre);
        } else {
          // Effacer les suggestions
          var suggestDiv = document.getElementById('suggestionsAuto');
          if (suggestDiv) suggestDiv.innerHTML = '';
        }
      }, 500); // Attendre 500ms après la dernière frappe
    });
  }
  
  // GÉNÉRER LES SUGGESTIONS AUTOMATIQUES
  function genererSuggestionsAuto(titre) {
    if (typeof LiaisonCahierProgressions === 'undefined') return;
    
    var suggestions = LiaisonCahierProgressions.suggerer(titre, '', '');
    var suggestDiv = document.getElementById('suggestionsAuto');
    
    if (!suggestDiv) return;
    
    if (suggestions.length === 0) {
      suggestDiv.innerHTML = '';
      return;
    }
    
    // Limiter à 3 suggestions
    suggestions = suggestions.slice(0, 3);
    
    var html = '<div class="suggestions-auto-header">';
    html += '<i class="fas fa-lightbulb"></i> Suggestions automatiques :';
    html += '</div>';
    html += '<div class="suggestions-auto-list">';
    
    suggestions.forEach(function(sugg) {
      // Vérifier si déjà sélectionnée
      var dejaSelectionnee = competencesSelectionnees.some(function(comp) {
        return comp.texte === sugg.competence;
      });
      
      if (!dejaSelectionnee) {
        html += '<div class="suggestion-auto-item" data-competence="' + escapeHtml(sugg.competence) + '">';
        html += '<div class="suggestion-auto-text">' + escapeHtml(sugg.competence) + '</div>';
        html += '<button type="button" class="suggestion-auto-btn" onclick="ajouterSuggestion(\'' + escapeHtml(sugg.competence).replace(/'/g, "\\'") + '\')">';
        html += '<i class="fas fa-plus"></i> Ajouter';
        html += '</button>';
        html += '</div>';
      }
    });
    
    html += '</div>';
    
    suggestDiv.innerHTML = html;
  }
  
  // AJOUTER UNE SUGGESTION
  window.ajouterSuggestion = function(competenceTexte) {
    var comp = competencesDisponibles.find(function(c) {
      return c.texte === competenceTexte;
    });
    
    if (comp) {
      ajouterCompetence(comp);
    }
  };
  
  // RECHERCHER DES COMPÉTENCES
  function rechercherCompetences(query) {
    var results = document.getElementById('competenceSearchResults');
    if (!results) return;
    
    query = query.trim().toLowerCase();
    
    if (query.length < 2) {
      results.style.display = 'none';
      return;
    }
    
    // Filtrer les compétences
    var matches = competencesDisponibles.filter(function(comp) {
      return comp.texte.toLowerCase().indexOf(query) > -1;
    }).slice(0, 10); // Max 10 résultats
    
    if (matches.length === 0) {
      results.innerHTML = '<div class="no-results">Aucune compétence trouvée</div>';
      results.style.display = 'block';
      return;
    }
    
    var html = '';
    matches.forEach(function(comp) {
      // Vérifier si déjà sélectionnée
      var dejaSelectionnee = competencesSelectionnees.some(function(c) {
        return c.texte === comp.texte;
      });
      
      var disabled = dejaSelectionnee ? ' disabled' : '';
      var icon = dejaSelectionnee ? '<i class="fas fa-check"></i>' : '<i class="fas fa-plus"></i>';
      
      html += '<div class="search-result-item' + disabled + '" data-comp-index="' + competencesDisponibles.indexOf(comp) + '">';
      html += '<div class="search-result-text">';
      html += '<div class="search-result-competence">' + highlightQuery(comp.texte, query) + '</div>';
      html += '<div class="search-result-meta">' + comp.domaine + ' • ' + comp.periode + '</div>';
      html += '</div>';
      if (!dejaSelectionnee) {
        html += '<button type="button" class="search-result-btn" onclick="ajouterCompetenceParIndex(' + competencesDisponibles.indexOf(comp) + ')">';
        html += icon + ' Ajouter';
        html += '</button>';
      } else {
        html += '<span class="search-result-added">Ajoutée</span>';
      }
      html += '</div>';
    });
    
    results.innerHTML = html;
    results.style.display = 'block';
  }
  
  // AJOUTER COMPÉTENCE PAR INDEX
  window.ajouterCompetenceParIndex = function(index) {
    var comp = competencesDisponibles[index];
    if (comp) {
      ajouterCompetence(comp);
      
      // Fermer les résultats
      var results = document.getElementById('competenceSearchResults');
      if (results) results.style.display = 'none';
      
      // Vider la recherche
      var searchInput = document.getElementById('competenceSearch');
      if (searchInput) searchInput.value = '';
    }
  };
  
  // AJOUTER UNE COMPÉTENCE
  function ajouterCompetence(comp) {
    // Vérifier si déjà ajoutée
    var existe = competencesSelectionnees.some(function(c) {
      return c.texte === comp.texte;
    });
    
    if (existe) return;
    
    competencesSelectionnees.push(comp);
    afficherTags();
    
    // Effacer les suggestions auto
    var suggestDiv = document.getElementById('suggestionsAuto');
    if (suggestDiv) suggestDiv.innerHTML = '';
  }
  
  // AFFICHER LES TAGS
  function afficherTags() {
    var tagsDiv = document.getElementById('competencesTags');
    if (!tagsDiv) return;
    
    if (competencesSelectionnees.length === 0) {
      tagsDiv.innerHTML = '<div class="no-competences">Aucune compétence sélectionnée</div>';
      return;
    }
    
    var html = '';
    competencesSelectionnees.forEach(function(comp, index) {
      html += '<div class="competence-tag">';
      html += '<span class="competence-tag-text">' + escapeHtml(comp.texte.substring(0, 60)) + (comp.texte.length > 60 ? '...' : '') + '</span>';
      html += '<button type="button" class="competence-tag-remove" onclick="retirerCompetence(' + index + ')" title="Retirer">';
      html += '<i class="fas fa-times"></i>';
      html += '</button>';
      html += '</div>';
    });
    
    tagsDiv.innerHTML = html;
  }
  
  // RETIRER UNE COMPÉTENCE
  window.retirerCompetence = function(index) {
    competencesSelectionnees.splice(index, 1);
    afficherTags();
  };
  
  // INTERCEPTER LA SAUVEGARDE
  function intercepterSauvegarde() {
    // Quand le modal s'ouvre en édition, charger les compétences existantes
    var observer = new MutationObserver(function(mutations) {
      mutations.forEach(function(mutation) {
        if (mutation.type === 'attributes' && mutation.attributeName === 'style') {
          var modal = document.getElementById('modalBackdrop');
          if (modal && modal.style.display !== 'none') {
            // Modal ouvert
            setTimeout(function() {
              chargerCompetencesActivite();
            }, 100);
          }
        }
      });
    });
    
    var modal = document.getElementById('modalBackdrop');
    if (modal) {
      observer.observe(modal, { attributes: true });
    }
    
    // Intercepter le bouton Valider
    var validateBtn = document.getElementById('validateBtn');
    if (validateBtn) {
      validateBtn.addEventListener('click', function() {
        setTimeout(function() {
          sauvegarderCompetences();
        }, 100);
      }, true);
    }
  }
  
  // CHARGER LES COMPÉTENCES D'UNE ACTIVITÉ
  function chargerCompetencesActivite() {
    // Essayer de récupérer l'ID de l'activité en cours d'édition
    var modalTitle = document.getElementById('modalTitle');
    if (!modalTitle) return;
    
    var isEditing = modalTitle.textContent.indexOf('Modifier') > -1;
    
    if (!isEditing) {
      // Nouvelle activité - réinitialiser
      competencesSelectionnees = [];
      afficherTags();
      var suggestDiv = document.getElementById('suggestionsAuto');
      if (suggestDiv) suggestDiv.innerHTML = '';
      return;
    }
    
    // TODO: Récupérer l'ID de l'activité en cours d'édition
    // Pour l'instant, on réinitialise
    competencesSelectionnees = [];
    afficherTags();
  }
  
  // SAUVEGARDER LES COMPÉTENCES
  function sauvegarderCompetences() {
    if (competencesSelectionnees.length === 0) return;
    if (typeof LiaisonCahierProgressions === 'undefined') return;
    
    // Récupérer l'ID de l'activité qui vient d'être créée/modifiée
    // Pour l'instant, on utilise un timestamp
    var activityId = 'activity_' + Date.now();
    
    var competences = competencesSelectionnees.map(function(comp) {
      return comp.texte;
    });
    
    LiaisonCahierProgressions.lier(activityId, competences);
    
    console.log('✅ Compétences liées:', competences.length);
    
    // Réinitialiser
    competencesSelectionnees = [];
  }
  
  // UTILITAIRES
  function escapeHtml(text) {
    var div = document.createElement('div');
    div.textContent = text || '';
    return div.innerHTML;
  }
  
  function highlightQuery(text, query) {
    var regex = new RegExp('(' + query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + ')', 'gi');
    return escapeHtml(text).replace(regex, '<mark>$1</mark>');
  }
  
  console.log('✅ Sélecteur Intelligent - Initialisé');
  
})();
