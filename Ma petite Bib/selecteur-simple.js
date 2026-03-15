/**
 * SÉLECTEUR DE COMPÉTENCES - VERSION SIMPLIFIÉE QUI MARCHE
 */

(function() {
  'use strict';
  
  console.log('🎯 Sélecteur Simple - Init...');
  
  // Vérifier dépendances
  if (typeof LiaisonCahierProgressions === 'undefined') {
    console.error('❌ LiaisonCahierProgressions manquant');
    return;
  }
  
  var selectedCompetences = [];
  var currentActivityId = null;
  
  // Attendre que la page soit chargée
  window.addEventListener('load', function() {
    setTimeout(function() {
      init();
    }, 2000); // Attendre 2 secondes que tout soit prêt
  });
  
  function init() {
    console.log('🔧 Init sélecteur...');
    
    // Trouver le formulaire
    var labelInput = document.getElementById('activityLabel');
    var commentInput = document.getElementById('activityComment');
    
    if (!labelInput) {
      console.error('❌ Champ activityLabel introuvable');
      return;
    }
    
    console.log('✅ Champs trouvés');
    
    // Ajouter le sélecteur après le champ commentaire
    ajouterSelecteur(commentInput || labelInput);
    
    // Écouter les changements
    labelInput.addEventListener('input', function() {
      detecterSuggestions();
    });
    
    if (commentInput) {
      commentInput.addEventListener('input', function() {
        detecterSuggestions();
      });
    }
    
    console.log('✅ Sélecteur initialisé !');
  }
  
  function ajouterSelecteur(afterElement) {
    var container = document.createElement('div');
    container.id = 'compSelector';
    container.style.cssText = 'margin-top: 15px; border: 2px solid #e9ecef; border-radius: 12px; overflow: hidden;';
    
    container.innerHTML = `
      <div id="compHeader" onclick="window.toggleCompSelector()" 
        style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 15px; cursor: pointer; display: flex; justify-content: space-between; align-items: center;">
        <span style="font-weight: 700;">
          <i class="fas fa-tasks"></i> Compétences <span id="compCount">(0)</span>
        </span>
        <i id="compIcon" class="fas fa-chevron-down"></i>
      </div>
      
      <div id="compBody" style="display: none; padding: 20px; background: white;">
        
        <div id="compSuggestions" style="display: none; background: #fff3cd; padding: 15px; border-radius: 10px; margin-bottom: 15px;">
          <div style="font-weight: 700; color: #856404; margin-bottom: 10px;">
            💡 Suggestions automatiques :
          </div>
          <div id="compSuggList"></div>
        </div>
        
        <input type="text" id="compSearch" placeholder="🔍 Rechercher..." 
          style="width: 100%; padding: 12px; border: 2px solid #e9ecef; border-radius: 10px; margin-bottom: 15px;">
        
        <div id="compResults" style="max-height: 200px; overflow-y: auto; margin-bottom: 15px;"></div>
        
        <div style="border-top: 2px solid #e9ecef; padding-top: 15px;">
          <div style="font-weight: 700; margin-bottom: 10px;">Sélectionnées :</div>
          <div id="compSelected"></div>
        </div>
      </div>
    `;
    
    // Insérer
    if (afterElement && afterElement.parentNode && afterElement.parentNode.parentNode) {
      afterElement.parentNode.parentNode.insertBefore(container, afterElement.parentNode.nextSibling);
    }
    
    // Écouter recherche
    setTimeout(function() {
      var search = document.getElementById('compSearch');
      if (search) {
        search.addEventListener('input', function() {
          rechercherCompetences(this.value);
        });
      }
    }, 100);
  }
  
  function detecterSuggestions() {
    var label = document.getElementById('activityLabel');
    var comment = document.getElementById('activityComment');
    
    var titre = label ? label.value : '';
    var desc = comment ? comment.value : '';
    
    console.log('🔍 Détection pour:', titre, desc);
    
    if (!titre && !desc) {
      document.getElementById('compSuggestions').style.display = 'none';
      return;
    }
    
    var suggestions = LiaisonCahierProgressions.suggerer(titre, desc, '');
    
    console.log('💡 Suggestions:', suggestions);
    
    if (suggestions.length === 0) {
      document.getElementById('compSuggestions').style.display = 'none';
      return;
    }
    
    afficherSuggestions(suggestions);
  }
  
  function afficherSuggestions(suggestions) {
    var container = document.getElementById('compSuggestions');
    var list = document.getElementById('compSuggList');
    
    if (!list) return;
    
    list.innerHTML = '';
    
    suggestions.slice(0, 3).forEach(function(s) {
      var div = document.createElement('div');
      div.style.cssText = 'display: flex; justify-content: space-between; align-items: center; padding: 10px; background: white; border-radius: 8px; margin-bottom: 8px;';
      
      var compText = s.competence.substring(0, 50);
      if (s.competence.length > 50) compText += '...';
      
      div.innerHTML = `
        <div style="flex: 1;">
          <div style="font-weight: 600; color: #2c3e50;">${escapeHtml(compText)}</div>
          <div style="font-size: 0.75rem; color: #7f8c8d;">${s.theme} • ${Math.round(s.score*100)}%</div>
        </div>
        <button onclick="window.ajouterCompetence('${escapeHtml(s.competence).replace(/'/g, "\\'")}', this)" 
          style="padding: 8px 15px; background: #27ae60; color: white; border: none; border-radius: 8px; cursor: pointer; font-weight: 700;">
          + Ajouter
        </button>
      `;
      
      list.appendChild(div);
    });
    
    container.style.display = 'block';
  }
  
  function rechercherCompetences(query) {
    var results = document.getElementById('compResults');
    if (!results) return;
    
    query = query.toLowerCase().trim();
    
    if (query.length < 2) {
      results.innerHTML = '<div style="text-align: center; padding: 20px; color: #95a5a6;">Tapez au moins 2 caractères...</div>';
      return;
    }
    
    if (typeof progressionsCompletes === 'undefined') {
      results.innerHTML = '<div style="text-align: center; padding: 20px; color: #e74c3c;">Progressions non chargées</div>';
      return;
    }
    
    var matches = [];
    
    Object.keys(progressionsCompletes).forEach(function(domaine) {
      var data = progressionsCompletes[domaine];
      var sousdomaines = data.sousDomainesParPeriode || data.sousDomainesTransversaux || {};
      
      Object.keys(sousdomaines).forEach(function(sd) {
        var periodes = sousdomaines[sd];
        Object.keys(periodes).forEach(function(periode) {
          var comps = periodes[periode];
          if (Array.isArray(comps)) {
            comps.forEach(function(c) {
              if (c.toLowerCase().indexOf(query) > -1) {
                matches.push({ comp: c, periode: periode, sd: sd });
              }
            });
          }
        });
      });
    });
    
    if (matches.length === 0) {
      results.innerHTML = '<div style="text-align: center; padding: 20px; color: #95a5a6;">Aucune compétence trouvée</div>';
      return;
    }
    
    results.innerHTML = '';
    matches.slice(0, 10).forEach(function(m) {
      var isSelected = selectedCompetences.indexOf(m.comp) > -1;
      
      var div = document.createElement('div');
      div.style.cssText = 'display: flex; justify-content: space-between; align-items: center; padding: 10px; border-bottom: 1px solid #f1f3f5;';
      div.innerHTML = `
        <div style="flex: 1;">
          <div style="font-weight: 600; color: #2c3e50; font-size: 0.9rem;">${escapeHtml(m.comp)}</div>
          <div style="font-size: 0.75rem; color: #7f8c8d;">${m.periode}</div>
        </div>
        <button onclick="window.toggleCompetence('${escapeHtml(m.comp).replace(/'/g, "\\'")}', this)" 
          style="width: 35px; height: 35px; border: 2px solid ${isSelected ? '#27ae60' : '#e9ecef'}; background: ${isSelected ? '#27ae60' : 'white'}; color: ${isSelected ? 'white' : '#95a5a6'}; border-radius: 50%; cursor: pointer;">
          ${isSelected ? '✓' : '+'}
        </button>
      `;
      results.appendChild(div);
    });
  }
  
  // FONCTIONS GLOBALES
  window.toggleCompSelector = function() {
    var body = document.getElementById('compBody');
    var icon = document.getElementById('compIcon');
    
    if (!body) return;
    
    if (body.style.display === 'none') {
      body.style.display = 'block';
      if (icon) icon.className = 'fas fa-chevron-up';
    } else {
      body.style.display = 'none';
      if (icon) icon.className = 'fas fa-chevron-down';
    }
  };
  
  window.ajouterCompetence = function(comp, btn) {
    if (selectedCompetences.indexOf(comp) === -1) {
      selectedCompetences.push(comp);
      updateSelected();
      console.log('✅ Ajouté:', comp);
    }
    if (btn) {
      btn.disabled = true;
      btn.style.opacity = '0.5';
      btn.textContent = '✓ Ajouté';
    }
  };
  
  window.toggleCompetence = function(comp, btn) {
    var idx = selectedCompetences.indexOf(comp);
    if (idx > -1) {
      selectedCompetences.splice(idx, 1);
      if (btn) {
        btn.style.background = 'white';
        btn.style.color = '#95a5a6';
        btn.style.borderColor = '#e9ecef';
        btn.textContent = '+';
      }
    } else {
      selectedCompetences.push(comp);
      if (btn) {
        btn.style.background = '#27ae60';
        btn.style.color = 'white';
        btn.style.borderColor = '#27ae60';
        btn.textContent = '✓';
      }
    }
    updateSelected();
  };
  
  window.retirerCompetence = function(comp) {
    var idx = selectedCompetences.indexOf(comp);
    if (idx > -1) {
      selectedCompetences.splice(idx, 1);
      updateSelected();
    }
  };
  
  function updateSelected() {
    var list = document.getElementById('compSelected');
    var count = document.getElementById('compCount');
    
    if (count) {
      count.textContent = '(' + selectedCompetences.length + ')';
    }
    
    if (!list) return;
    
    if (selectedCompetences.length === 0) {
      list.innerHTML = '<div style="text-align: center; padding: 15px; color: #95a5a6; font-style: italic;">Aucune sélection</div>';
      return;
    }
    
    list.innerHTML = '';
    selectedCompetences.forEach(function(c) {
      var div = document.createElement('div');
      div.style.cssText = 'display: flex; justify-content: space-between; align-items: center; padding: 10px; background: #e8f5e9; border-radius: 8px; margin-bottom: 8px;';
      div.innerHTML = `
        <span style="font-weight: 600; color: #2c3e50; flex: 1;">${escapeHtml(c)}</span>
        <button onclick="window.retirerCompetence('${escapeHtml(c).replace(/'/g, "\\'")})" 
          style="background: rgba(231,76,60,0.1); border: none; color: #e74c3c; width: 28px; height: 28px; border-radius: 50%; cursor: pointer;">
          ✕
        </button>
      `;
      list.appendChild(div);
    });
  }
  
  function escapeHtml(text) {
    var div = document.createElement('div');
    div.textContent = text || '';
    return div.innerHTML;
  }
  
  console.log('✅ Sélecteur simple chargé');
  
})();
