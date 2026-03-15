/**
 * EXTENSION CAHIER JOURNAL - LIAISON COMPÉTENCES
 * Ajoute l'interface visuelle pour lier les activités aux compétences
 * 
 * À charger APRÈS liaison-cahier-progressions.js et progressions-completes-data.js
 */

(function() {
  'use strict';
  
  console.log('🔗 Extension Liaison Compétences - Chargement...');
  
  // VÉRIFIER LES DÉPENDANCES
  if (typeof LiaisonCahierProgressions === 'undefined') {
    console.error('❌ LiaisonCahierProgressions non chargé !');
    return;
  }
  
  if (typeof progressionsCompletes === 'undefined') {
    console.warn('⚠️ progressionsCompletes non chargé - Certaines fonctions seront limitées');
  }
  
  // INIT AU CHARGEMENT
  document.addEventListener('DOMContentLoaded', function() {
    console.log('✅ Extension Liaison Compétences - Prête');
    
    // Attendre que le planner soit chargé
    setTimeout(function() {
      ajouterBadgesCompetences();
      surveillerChangements();
    }, 1000);
  });
  
  // AJOUTER LES BADGES SUR LES ACTIVITÉS EXISTANTES
  function ajouterBadgesCompetences() {
    // Trouver toutes les activités dans le planning
    var activities = document.querySelectorAll('[data-id]');
    
    activities.forEach(function(activityEl) {
      var activityId = activityEl.getAttribute('data-id');
      if (!activityId) return;
      
      // Vérifier si un badge existe déjà
      if (activityEl.querySelector('.competences-badge')) return;
      
      // Obtenir les compétences liées
      var competences = LiaisonCahierProgressions.obtenirCompetences(activityId);
      
      if (competences.length > 0) {
        // Créer le badge
        var badge = document.createElement('div');
        badge.className = 'competences-badge';
        badge.innerHTML = '<i class="fas fa-check-circle"></i> ' + competences.length + ' compétence' + (competences.length > 1 ? 's' : '');
        badge.title = 'Clic pour voir les détails';
        badge.onclick = function(e) {
          e.stopPropagation();
          afficherDetailsCompetences(activityId, activityEl);
        };
        
        // Ajouter le badge à l'activité
        activityEl.appendChild(badge);
      }
    });
  }
  
  // AFFICHER LES DÉTAILS DES COMPÉTENCES
  function afficherDetailsCompetences(activityId, activityEl) {
    var competences = LiaisonCahierProgressions.obtenirCompetences(activityId);
    
    if (competences.length === 0) {
      alert('Aucune compétence liée à cette activité');
      return;
    }
    
    // Créer une modal
    var modal = document.createElement('div');
    modal.className = 'competences-modal-overlay';
    modal.onclick = function() {
      document.body.removeChild(modal);
    };
    
    var content = '<div class="competences-modal-content" onclick="event.stopPropagation()">';
    content += '<div class="competences-modal-header">';
    content += '<h3><i class="fas fa-tasks"></i> Compétences travaillées</h3>';
    content += '<button class="competences-modal-close" onclick="this.closest(\'.competences-modal-overlay\').remove()">';
    content += '<i class="fas fa-times"></i>';
    content += '</button>';
    content += '</div>';
    
    content += '<div class="competences-modal-body">';
    content += '<div class="competences-list">';
    
    competences.forEach(function(comp, index) {
      content += '<div class="competence-item">';
      content += '<div class="competence-numero">' + (index + 1) + '</div>';
      content += '<div class="competence-texte">' + comp + '</div>';
      content += '<button class="competence-delete" onclick="supprimerCompetence(\'' + activityId + '\', \'' + comp.replace(/'/g, "\\'") + '\')">';
      content += '<i class="fas fa-trash"></i>';
      content += '</button>';
      content += '</div>';
    });
    
    content += '</div>';
    content += '</div>';
    
    content += '<div class="competences-modal-footer">';
    content += '<button class="btn btn-secondary" onclick="this.closest(\'.competences-modal-overlay\').remove()">Fermer</button>';
    content += '<a href="progressions-par-periode.html" class="btn btn-primary" target="_blank">';
    content += '<i class="fas fa-external-link-alt"></i> Voir dans Progressions';
    content += '</a>';
    content += '</div>';
    
    content += '</div>';
    
    modal.innerHTML = content;
    document.body.appendChild(modal);
  }
  
  // SUPPRIMER UNE COMPÉTENCE
  window.supprimerCompetence = function(activityId, competence) {
    if (!confirm('Supprimer cette compétence de l\'activité ?')) return;
    
    LiaisonCahierProgressions.delier(activityId, competence);
    
    // Rafraîchir l'affichage
    var modal = document.querySelector('.competences-modal-overlay');
    if (modal) modal.remove();
    
    // Rafraîchir les badges
    rafraichirBadges();
  };
  
  // RAFRAÎCHIR LES BADGES
  function rafraichirBadges() {
    // Supprimer tous les badges existants
    document.querySelectorAll('.competences-badge').forEach(function(badge) {
      badge.remove();
    });
    
    // Recréer les badges
    ajouterBadgesCompetences();
  }
  
  // SURVEILLER LES CHANGEMENTS DANS LE PLANNING
  function surveillerChangements() {
    // Observer les modifications du DOM
    var observer = new MutationObserver(function(mutations) {
      var needsRefresh = false;
      
      mutations.forEach(function(mutation) {
        if (mutation.addedNodes.length > 0) {
          mutation.addedNodes.forEach(function(node) {
            if (node.nodeType === 1 && node.getAttribute && node.getAttribute('data-id')) {
              needsRefresh = true;
            }
          });
        }
      });
      
      if (needsRefresh) {
        setTimeout(ajouterBadgesCompetences, 100);
      }
    });
    
    // Observer le conteneur du planning
    var plannerContainer = document.querySelector('.planner-container') || document.body;
    observer.observe(plannerContainer, {
      childList: true,
      subtree: true
    });
  }
  
  // AJOUTER LES STYLES CSS
  var style = document.createElement('style');
  style.textContent = `
    /* Badge Compétences sur les activités */
    .competences-badge {
      position: absolute;
      bottom: 5px;
      right: 5px;
      background: linear-gradient(135deg, #27ae60 0%, #2ecc71 100%);
      color: white;
      padding: 4px 10px;
      border-radius: 12px;
      font-size: 0.75rem;
      font-weight: 700;
      cursor: pointer;
      transition: all 0.3s ease;
      z-index: 10;
      box-shadow: 0 2px 8px rgba(39, 174, 96, 0.3);
      display: flex;
      align-items: center;
      gap: 5px;
    }
    
    .competences-badge:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(39, 174, 96, 0.4);
    }
    
    .competences-badge i {
      font-size: 0.8rem;
    }
    
    /* Modal Compétences */
    .competences-modal-overlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.7);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 10000;
      padding: 20px;
      animation: fadeIn 0.3s ease;
    }
    
    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }
    
    .competences-modal-content {
      background: white;
      border-radius: 20px;
      max-width: 600px;
      width: 100%;
      max-height: 80vh;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      box-shadow: 0 10px 50px rgba(0, 0, 0, 0.3);
      animation: slideUp 0.3s ease;
    }
    
    @keyframes slideUp {
      from { transform: translateY(50px); opacity: 0; }
      to { transform: translateY(0); opacity: 1; }
    }
    
    .competences-modal-header {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      padding: 25px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    
    .competences-modal-header h3 {
      margin: 0;
      font-size: 1.4rem;
      font-weight: 700;
      display: flex;
      align-items: center;
      gap: 12px;
    }
    
    .competences-modal-close {
      background: rgba(255, 255, 255, 0.2);
      border: none;
      color: white;
      font-size: 1.5rem;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      cursor: pointer;
      transition: all 0.3s ease;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    
    .competences-modal-close:hover {
      background: rgba(255, 255, 255, 0.3);
      transform: rotate(90deg);
    }
    
    .competences-modal-body {
      padding: 25px;
      overflow-y: auto;
      flex: 1;
    }
    
    .competences-list {
      display: flex;
      flex-direction: column;
      gap: 12px;
    }
    
    .competence-item {
      display: flex;
      align-items: flex-start;
      gap: 15px;
      padding: 15px;
      background: #f8f9fa;
      border-radius: 12px;
      border-left: 4px solid #27ae60;
      transition: all 0.3s ease;
    }
    
    .competence-item:hover {
      background: #e9ecef;
      transform: translateX(5px);
    }
    
    .competence-numero {
      min-width: 30px;
      height: 30px;
      background: linear-gradient(135deg, #27ae60 0%, #2ecc71 100%);
      color: white;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 700;
      font-size: 0.9rem;
    }
    
    .competence-texte {
      flex: 1;
      font-size: 0.95rem;
      color: #2c3e50;
      line-height: 1.5;
    }
    
    .competence-delete {
      background: rgba(231, 76, 60, 0.1);
      border: none;
      color: #e74c3c;
      width: 32px;
      height: 32px;
      border-radius: 8px;
      cursor: pointer;
      transition: all 0.3s ease;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    
    .competence-delete:hover {
      background: #e74c3c;
      color: white;
      transform: scale(1.1);
    }
    
    .competences-modal-footer {
      padding: 20px 25px;
      background: #f8f9fa;
      display: flex;
      justify-content: flex-end;
      gap: 12px;
      border-top: 1px solid #e9ecef;
    }
    
    .competences-modal-footer .btn {
      padding: 10px 20px;
      border: none;
      border-radius: 10px;
      font-weight: 700;
      cursor: pointer;
      transition: all 0.3s ease;
      display: inline-flex;
      align-items: center;
      gap: 8px;
      text-decoration: none;
    }
    
    .competences-modal-footer .btn:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
    }
    
    .btn-primary {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
    }
    
    .btn-secondary {
      background: #95a5a6;
      color: white;
    }
    
    @media print {
      .competences-badge,
      .competences-modal-overlay {
        display: none !important;
      }
    }
  `;
  document.head.appendChild(style);
  
  console.log('✅ Extension Liaison Compétences - Styles CSS ajoutés');
  
})();
