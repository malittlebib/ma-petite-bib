/**
 * SÉLECTEUR DE COMPÉTENCES COMPLET
 * Version finale avec suggestions automatiques + recherche manuelle
 */

(function() {
  'use strict';
  
  console.log('🎯 Sélecteur Compétences - Init...');
  
  if (typeof LiaisonCahierProgressions === 'undefined') {
    console.error('❌ LiaisonCahierProgressions manquant !');
    return;
  }
  
  var selectedCompetences = [];
  var allCompetences = [];
  
  // INIT
  document.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() {
      chargerCompetences();
      ajouterSelecteurDansFormulaire();
      console.log('✅ Sélecteur Compétences prêt');
    }, 1500);
  });
  
  // CHARGER TOUTES LES COMPÉTENCES
  function chargerCompetences() {
    if (typeof progressionsCompletes === 'undefined') return;
    
    allCompetences = [];
    Object.keys(progressionsCompletes).forEach(function(domaine) {
      var data = progressionsCompletes[domaine];
      var sousdomaines = data.sousDomainesParPeriode || data.sousDomainesTransversaux || {};
      
      Object.keys(sousdomaines).forEach(function(sd) {
        var periodes = sousdomaines[sd];
        Object.keys(periodes).forEach(function(periode) {
          var comps = periodes[periode];
          if (Array.isArray(comps)) {
            comps.forEach(function(c) {
              allCompetences.push({ comp: c, domaine: domaine, sd: sd, periode: periode });
            });
          }
        });
      });
    });
    
    console.log('📚', allCompetences.length, 'compétences chargées');
  }
  
  // AJOUTER SÉLECTEUR DANS LE FORMULAIRE
  function ajouterSelecteurDansFormulaire() {
    var modal = document.querySelector('[id*="modal"], [class*="modal"]');
    if (!modal) return;
    
    var activityLabel = document.getElementById('activityLabel');
    var activityComment = document.getElementById('activityComment');
    
    if (!activityLabel && !activityComment) return;
    
    // Créer le sélecteur
    var selecteur = document.createElement('div');
    selecteur.id = 'competencesSelector';
    selecteur.style.cssText = 'grid-column: 1/3; margin-top: 15px; border: 2px solid #e9ecef; border-radius: 12px; overflow: hidden;';
    
    selecteur.innerHTML = `
      <div onclick="toggleSelector()" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 15px; cursor: pointer; display: flex; justify-content: space-between; align-items: center;">
        <span style="font-weight: 700; font-size: 1rem;">
          <i class="fas fa-tasks"></i> Compétences travaillées <span id="compCount">(0)</span>
        </span>
        <i id="toggleIcon" class="fas fa-chevron-down"></i>
      </div>
      
      <div id="selectorBody" style="display: none; padding: 20px; background: white;">
        
        <!-- Suggestions -->
        <div id="suggestions" style="display: none; background: #fff3cd; padding: 15px; border-radius: 10px; margin-bottom: 15px; border-left: 4px solid #f39c12;">
          <div style="font-weight: 700; color: #856404; margin-bottom: 10px;">
            <i class="fas fa-lightbulb"></i> Suggestions automatiques
          </div>
          <div id="suggestionsList"></div>
        </div>
        
        <!-- Recherche -->
        <input type="text" id="searchComp" placeholder="🔍 Rechercher une compétence..." 
          style="width: 100%; padding: 12px; border: 2px solid #e9ecef; border-radius: 10px; margin-bottom: 15px; font-size: 0.95rem;"
          onkeyup="rechercherCompetences(this.value)">
        
        <!-- Résultats -->
        <div id="results" style="max-height: 250px; overflow-y: auto; margin-bottom: 15px;"></div>
        
        <!-- Sélectionnées -->
        <div style="border-top: 2px solid #e9ecef; padding-top: 15px;">
          <div style="font-weight: 700; margin-bottom: 10px;">Sélectionnées :</div>
          <div id="selectedList"></div>
        </div>
      </div>
    `;
    
    // Insérer
    var target = activityComment ? activityComment.parentNode : activityLabel.parentNode;
    if (target && target.parentNode) {
      target.parentNode.insertBefore(selecteur, target.nextSibling);
    }
    
    // Écouter saisie
    if (activityLabel) {
      activityLabel.addEventListener('input', debounce(detecterSuggestions, 500));
    }
    if (activityComment) {
      activityComment.addEventListener('input', debounce(detecterSuggestions, 500));
    }
    
    // Intercepter sauvegarde
    var validateBtn = document.getElementById('validateBtn');
    if (validateBtn) {
      var oldClick = validateBtn.onclick;
      validateBtn.onclick = function(e) {
        sauvegarderCompetences();
        if (oldClick) oldClick.call(this, e);
      };
    }
    
    console.log('✅ Sélecteur ajouté au formulaire');
  }
  
  // TOGGLE
  window.toggleSelector = function() {
    var body = document.getElementById('selectorBody');
    var icon = document.getElementById('toggleIcon');
    if (!body) return;
    
    if (body.style.display === 'none') {
      body.style.display = 'block';
      if (icon) icon.className = 'fas fa-chevron-up';
    } else {
      body.style.display = 'none';
      if (icon) icon.className = 'fas fa-chevron-down';
    }
  };
  
  // DÉTECTER SUGGESTIONS
  function detecterSuggestions() {
    var titre = document.getElementById('activityLabel');
    var desc = document.getElementById('activityComment');
    
    var t = titre ? titre.value : '';
    var d = desc ? desc.value : '';
    
    if (!t && !d) {
      document.getElementById('suggestions').style.display = 'none';
      return;
    }
    
    var suggs = LiaisonCahierProgressions.suggerer(t, d, '');
    
    if (suggs.length === 0) {
      document.getElementById('suggestions').style.display = 'none';
      return;
    }
    
    var list = document.getElementById('suggestionsList');
    list.innerHTML = '';
    
    suggs.slice(0, 3).forEach(function(s) {
      var div = document.createElement('div');
      div.style.cssText = 'display: flex; justify-content: space-between; align-items: center; padding: 10px; background: white; border-radius: 8px; margin-bottom: 8px;';
      div.innerHTML = `
        <div style="flex: 1;">
          <div style="font-weight: 600; color: #2c3e50; font-size: 0.9rem;">${esc(s.competence.substring(0,60))}${s.competence.length > 60 ? '...' : ''}</div>
          <div style="font-size: 0.75rem; color: #7f8c8d;">${s.theme} • ${Math.round(s.score*100)}%</div>
        </div>
        <button onclick="ajouterComp('${esc(s.competence).replace(/'/g, "\\'")}', this)" 
          style="padding: 8px 15px; background: linear-gradient(135deg, #27ae60 0%, #2ecc71 100%); color: white; border: none; border-radius: 8px; cursor: pointer; font-weight: 700; font-size: 0.85rem;">
          <i class="fas fa-plus"></i> Ajouter
        </button>
      `;
      list.appendChild(div);
    });
    
    document.getElementById('suggestions').style.display = 'block';
  }
  
  // RECHERCHER
  window.rechercherCompetences = function(q) {
    var results = document.getElementById('results');
    if (!results) return;
    
    q = q.toLowerCase().trim();
    
    if (q.length < 2) {
      results.innerHTML = '<div style="text-align: center; padding: 30px; color: #95a5a6;">Tapez au moins 2 caractères...</div>';
      return;
    }
    
    var matches = allCompetences.filter(function(item) {
      return item.comp.toLowerCase().indexOf(q) > -1;
    });
    
    if (matches.length === 0) {
      results.innerHTML = '<div style="text-align: center; padding: 30px; color: #95a5a6;">Aucune compétence trouvée</div>';
      return;
    }
    
    results.innerHTML = '';
    matches.slice(0, 15).forEach(function(m) {
      var isSelected = selectedCompetences.indexOf(m.comp) > -1;
      
      var div = document.createElement('div');
      div.style.cssText = 'display: flex; justify-content: space-between; align-items: center; padding: 10px; border-bottom: 1px solid #f1f3f5;';
      div.innerHTML = `
        <div style="flex: 1;">
          <div style="font-weight: 600; color: #2c3e50; font-size: 0.9rem;">${esc(m.comp)}</div>
          <div style="font-size: 0.75rem; color: #7f8c8d;">${m.periode} • ${esc(m.sd)}</div>
        </div>
        <button onclick="toggleComp('${esc(m.comp).replace(/'/g, "\\'")}', this)" 
          style="width: 35px; height: 35px; border: 2px solid ${isSelected ? '#27ae60' : '#e9ecef'}; background: ${isSelected ? 'linear-gradient(135deg, #27ae60 0%, #2ecc71 100%)' : 'white'}; color: ${isSelected ? 'white' : '#95a5a6'}; border-radius: 50%; cursor: pointer;">
          <i class="fas fa-${isSelected ? 'check' : 'plus'}"></i>
        </button>
      `;
      results.appendChild(div);
    });
  };
  
  // AJOUTER
  window.ajouterComp = function(comp, btn) {
    if (selectedCompetences.indexOf(comp) === -1) {
      selectedCompetences.push(comp);
      updateSelected();
    }
    if (btn) {
      btn.disabled = true;
      btn.style.opacity = '0.5';
    }
  };
  
  // TOGGLE
  window.toggleComp = function(comp) {
    var idx = selectedCompetences.indexOf(comp);
    if (idx > -1) {
      selectedCompetences.splice(idx, 1);
    } else {
      selectedCompetences.push(comp);
    }
    updateSelected();
    
    // Refresh search
    var search = document.getElementById('searchComp');
    if (search && search.value) {
      rechercherCompetences(search.value);
    }
  };
  
  // RETIRER
  window.retirerComp = function(comp) {
    var idx = selectedCompetences.indexOf(comp);
    if (idx > -1) {
      selectedCompetences.splice(idx, 1);
      updateSelected();
    }
  };
  
  // UPDATE SELECTED
  function updateSelected() {
    var list = document.getElementById('selectedList');
    var count = document.getElementById('compCount');
    
    if (count) {
      count.textContent = '(' + selectedCompetences.length + ')';
    }
    
    if (!list) return;
    
    if (selectedCompetences.length === 0) {
      list.innerHTML = '<div style="text-align: center; padding: 20px; color: #95a5a6;">Aucune compétence sélectionnée</div>';
      return;
    }
    
    list.innerHTML = '';
    selectedCompetences.forEach(function(c) {
      var div = document.createElement('div');
      div.style.cssText = 'display: flex; justify-content: space-between; align-items: center; padding: 10px; background: #e8f5e9; border-radius: 8px; border-left: 3px solid #27ae60; margin-bottom: 8px;';
      div.innerHTML = `
        <span style="font-weight: 600; color: #2c3e50; font-size: 0.9rem; flex: 1;">${esc(c)}</span>
        <button onclick="retirerComp('${esc(c).replace(/'/g, "\\'")})" 
          style="background: rgba(231,76,60,0.1); border: none; color: #e74c3c; width: 28px; height: 28px; border-radius: 50%; cursor: pointer;">
          <i class="fas fa-times"></i>
        </button>
      `;
      list.appendChild(div);
    });
  }
  
  // SAUVEGARDER
  function sauvegarderCompetences() {
    if (selectedCompetences.length > 0) {
      // TODO: Récupérer l'ID de l'activité
      console.log('💾 Sauvegarder compétences:', selectedCompetences);
      // LiaisonCahierProgressions.lier(activityId, selectedCompetences);
    }
    selectedCompetences = [];
    updateSelected();
  }
  
  // UTILS
  function debounce(func, wait) {
    var timeout;
    return function() {
      clearTimeout(timeout);
      timeout = setTimeout(func, wait);
    };
  }
  
  function esc(text) {
    var div = document.createElement('div');
    div.textContent = text || '';
    return div.innerHTML;
  }
  
  console.log('✅ Sélecteur Compétences chargé !');
  
})();
