#!/bin/bash
# Script pour appliquer le design Beige Premium à toutes les pages

echo "🎨 APPLICATION DU DESIGN BEIGE PREMIUM"
echo "======================================"
echo ""

# Liste des pages principales à modifier
pages=(
  "tableau-de-bord.html"
  "classe-en-direct.html"
  "gestion-classe.html"
  "documents-ien.html"
  "planning-annuel.html"
  "evaluation-observations.html"
  "suivi-comportement.html"
  "fiche-preparation.html"
  "cahier-journal-final-complet.html"
  "programmations.html"
  "import-fichiers.html"
  "diagnostic.html"
)

count=0
for page in "${pages[@]}"; do
  if [ -f "$page" ]; then
    echo "✅ Traitement: $page"
    
    # Ajouter le lien vers style-global.css si pas déjà présent
    if ! grep -q "style-global.css" "$page"; then
      # Chercher la ligne avec font-awesome et ajouter après
      sed -i.bak '/<link.*font-awesome/a\
  <link rel="stylesheet" href="style-global.css">
' "$page"
      echo "   → style-global.css ajouté"
    else
      echo "   → style-global.css déjà présent"
    fi
    
    ((count++))
  else
    echo "⚠️  Fichier non trouvé: $page"
  fi
done

echo ""
echo "======================================"
echo "✨ Design appliqué à $count pages !"
echo "======================================"
