# 🎓 Ma Petite Bib - Guide de Démarrage

## ⚠️ IMPORTANT : Ne PAS ouvrir directement les fichiers HTML

Les fichiers HTML **ne fonctionneront pas** si vous les ouvrez directement (double-clic).  
Vous devez **lancer un serveur local**.

---

## 🚀 Démarrage Rapide

### **Sur Mac/Linux**

1. Ouvrez le Terminal
2. Naviguez vers le dossier :
   ```bash
   cd /Users/marie/Desktop/Planificateur/Ma\ petite\ Bib/
   ```
3. Lancez le serveur :
   ```bash
   python3 -m http.server 8000
   ```
4. Ouvrez votre navigateur à : **http://localhost:8000**

**OU** double-cliquez sur : `start-server.sh`

---

### **Sur Windows**

1. Double-cliquez sur : **start-server.bat**
2. Une fenêtre noire s'ouvre
3. Ouvrez votre navigateur à : **http://localhost:8000**

**OU** en ligne de commande :
1. Ouvrez le dossier dans l'explorateur
2. Tapez `cmd` dans la barre d'adresse
3. Tapez : `python -m http.server 8000`
4. Ouvrez : **http://localhost:8000**

---

## 🌐 Alternative : Extension VS Code

Si vous avez **Visual Studio Code** :

1. Installez l'extension **"Live Server"**
2. Clic droit sur `index.html`
3. Choisir **"Open with Live Server"**

---

## 📱 Installer comme Application (PWA)

Une fois le serveur lancé :

1. Ouvrez **http://localhost:8000** dans Chrome/Edge/Safari
2. Cliquez sur l'icône **"Installer"** dans la barre d'adresse
3. L'application s'installe comme une vraie app !

---

## ❓ Problèmes Fréquents

### **"Python n'est pas reconnu"**
- Installez Python : https://www.python.org/downloads/
- Cochez "Add Python to PATH" lors de l'installation

### **Port 8000 déjà utilisé**
Changez le port :
```bash
python3 -m http.server 8080
```
Puis ouvrez : http://localhost:8080

### **Impossible de lancer le serveur**
Vérifiez que vous êtes dans le bon dossier :
```bash
pwd  # Sur Mac/Linux
cd   # Sur Windows
```

---

## 🎯 Adresses Utiles

- **Page d'accueil** : http://localhost:8000
- **Tableau de bord** : http://localhost:8000/tableau-de-bord.html
- **Diagnostic** : http://localhost:8000/diagnostic.html
- **Gestion classe** : http://localhost:8000/gestion-classe.html

---

## 🔧 Pour Développeurs

### Structure du projet
```
Ma petite Bib/
├── index.html              # Page d'accueil
├── start-server.sh         # Script Mac/Linux
├── start-server.bat        # Script Windows
├── sw.js                   # Service Worker
├── manifest.json           # PWA Manifest
├── sync-data.js            # Synchronisation données
├── pdf-exporter.js         # Export PDF
├── pwa-manager.js          # Gestion PWA
├── competences-data.js     # Compétences PS/MS/GS
├── diagnostic.html         # Page de diagnostic
└── [autres fichiers HTML]
```

### Technologies utilisées
- HTML5 / CSS3 / JavaScript ES6
- LocalStorage pour persistance
- Service Worker pour mode hors-ligne
- SheetJS pour import Excel
- jsPDF pour export PDF
- Font Awesome pour icônes

---

## 📞 Support

En cas de problème :
1. Ouvrez http://localhost:8000/diagnostic.html
2. Vérifiez les erreurs en rouge
3. Ouvrez la console du navigateur (F12)

---

**Bon courage avec vos élèves ! 🎓✨**
