#!/usr/bin/env python3
"""
Script pour remplacer les couleurs violettes par beige premium
dans toutes les pages HTML
"""

import re
import os
from pathlib import Path

# Mappings de couleurs : Violet → Beige
COLOR_MAPPINGS = {
    # Violets principaux
    '#667eea': '#8b6f47',  # Violet principal → Brun principal
    '#764ba2': '#6b5435',  # Violet foncé → Brun foncé
    '#5568d3': '#6b5435',  # Violet dark → Brun foncé
    
    # Backgrounds violets
    'linear-gradient(135deg, #667eea 0%, #764ba2 100%)': 'linear-gradient(135deg, #a68a5e 0%, #8b6f47 100%)',
    'linear-gradient(135deg, #667eea, #764ba2)': 'linear-gradient(135deg, #a68a5e, #8b6f47)',
    
    # Remplacer aussi les variantes
    'background: white': 'background: #ffffff',  # Pour standardiser
}

# Fichiers à traiter
FILES_TO_PROCESS = [
    'tableau-de-bord.html',
    'classe-en-direct.html', 
    'documents-ien.html',
    'planning-annuel.html',
    'evaluation-observations.html',
    'suivi-comportement.html',
    'import-fichiers.html',
    'diagnostic.html',
]

def replace_colors_in_file(filepath):
    """Remplace les couleurs dans un fichier"""
    print(f"📝 Traitement de {filepath}...")
    
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        changes = 0
        
        # Remplacer chaque couleur
        for old_color, new_color in COLOR_MAPPINGS.items():
            if old_color in content:
                count = content.count(old_color)
                content = content.replace(old_color, new_color)
                changes += count
                print(f"   ✓ {old_color} → {new_color} ({count} fois)")
        
        # Remplacer aussi le body background
        if 'background: linear-gradient' not in content and 'body {' in content:
            # Ajouter le fond beige
            content = re.sub(
                r'(body\s*\{[^}]*)',
                r'\1\n  background: var(--bg-cream);\n  background-image: radial-gradient(at 0% 0%, rgba(212, 184, 150, 0.1) 0px, transparent 50%), radial-gradient(at 100% 100%, rgba(139, 111, 71, 0.08) 0px, transparent 50%);\n  background-attachment: fixed;',
                content,
                count=1
            )
        
        if content != original_content:
            # Sauvegarder
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"   ✅ {changes} modifications sauvegardées\n")
        else:
            print(f"   ℹ️  Aucune modification nécessaire\n")
            
    except Exception as e:
        print(f"   ❌ Erreur: {e}\n")

def main():
    print("🎨 REMPLACEMENT DES COULEURS")
    print("=" * 50)
    print()
    
    total_files = 0
    for filename in FILES_TO_PROCESS:
        if os.path.exists(filename):
            replace_colors_in_file(filename)
            total_files += 1
        else:
            print(f"⚠️  Fichier non trouvé: {filename}\n")
    
    print("=" * 50)
    print(f"✨ Traitement terminé ! {total_files} fichiers modifiés")
    print("=" * 50)

if __name__ == '__main__':
    main()
