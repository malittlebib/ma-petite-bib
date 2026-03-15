#!/bin/bash
# Script pour lancer Ma Petite Bib en serveur local

echo "🚀 Démarrage de Ma Petite Bib..."
echo ""
echo "📱 Ouvrez votre navigateur à l'adresse :"
echo "   http://localhost:8000"
echo ""
echo "⏹️  Pour arrêter : Ctrl+C"
echo ""

# Vérifier si Python 3 est disponible
if command -v python3 &> /dev/null; then
    python3 -m http.server 8000
elif command -v python &> /dev/null; then
    python -m http.server 8000
else
    echo "❌ Python n'est pas installé"
    echo "📥 Installez Python depuis https://www.python.org/"
fi
