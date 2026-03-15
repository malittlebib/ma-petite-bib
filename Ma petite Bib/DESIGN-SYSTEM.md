# 🎨 MA PETITE BIB - DESIGN SYSTEM

## Palette Beige Premium - Minimaliste Chic

---

## 🎨 COULEURS

### Principales
- **Brun principal** : `#8b6f47` - Accent, boutons, icônes
- **Brun foncé** : `#6b5435` - Hover, états actifs
- **Brun clair** : `#a68a5e` - Highlights

### Backgrounds
- **Crème** : `#faf8f5` - Fond principal
- **Beige clair** : `#f5f1eb` - Fond secondaire
- **Beige** : `#e8dfd3` - Bordures
- **Blanc** : `#ffffff` - Cartes

### Texte
- **Primaire** : `#2d2520` - Titres, texte principal
- **Secondaire** : `#6b5d52` - Texte secondaire
- **Muted** : `#9b8d7e` - Texte discret

### Utilitaires
- **Succès** : `#10b981` - Actions positives
- **Avertissement** : `#f59e0b` - Alertes
- **Danger** : `#ef4444` - Erreurs, suppressions
- **Info** : `#3b82f6` - Informations

---

## 📐 ESPACEMENT

### Border Radius
- **Standard** : `24px` - Cartes, boutons
- **Small** : `16px` - Petits éléments
- **Large** : `32px` - Modales, containers

### Spacing
- **xs** : `0.5rem` (8px)
- **sm** : `1rem` (16px)
- **md** : `1.5rem` (24px)
- **lg** : `2rem` (32px)
- **xl** : `3rem` (48px)

---

## 🎭 OMBRES

### Cards
```css
--card-shadow: 0 4px 20px rgba(139, 111, 71, 0.08);
--card-shadow-hover: 0 12px 40px rgba(139, 111, 71, 0.15);
--card-shadow-lg: 0 20px 60px rgba(139, 111, 71, 0.2);
```

---

## ✍️ TYPOGRAPHIE

### Police
- **Famille** : Inter (Google Fonts)
- **Poids disponibles** : 300, 400, 500, 600, 700, 800, 900

### Tailles
- **H1** : `2.5rem` (40px)
- **H2** : `2rem` (32px)
- **H3** : `1.5rem` (24px)
- **Body** : `1rem` (16px)
- **Small** : `0.875rem` (14px)

---

## 🎨 COMPOSANTS

### Boutons

#### Primary
```html
<button class="btn btn-primary">
  <i class="fas fa-check"></i> Valider
</button>
```
- Gradient brun
- Ombre douce
- Hover : élévation

#### Secondary
```html
<button class="btn btn-secondary">Annuler</button>
```
- Fond blanc
- Bordure beige
- Hover : fond beige clair

### Cards
```html
<div class="card">
  <h3>Titre</h3>
  <p>Contenu...</p>
</div>
```
- Fond blanc
- Bordure beige subtile
- Ombre douce
- Hover : élévation

### Icons circulaires
```html
<div class="icon-circle">
  <i class="fas fa-star"></i>
</div>
```
- Fond blanc
- Bordure beige
- Hover : rotation -5deg

### Badges
```html
<span class="badge badge-primary">Nouveau</span>
```
- Fond gradient brun
- Texte blanc
- Coins arrondis

---

## 🎬 ANIMATIONS

### Transitions
```css
--transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
--transition-fast: all 0.2s ease;
```

### Keyframes disponibles
- `fadeIn` - Apparition en fondu
- `fadeInUp` - Apparition depuis le bas
- `slideIn` - Glissement depuis la gauche

---

## 📱 RESPONSIVE

### Breakpoints
- **Mobile** : < 768px
- **Tablette** : 768px - 1024px
- **Desktop** : > 1024px

### Ajustements mobile
- Titres plus petits
- Padding réduit
- Grilles en 1 colonne

---

## ✅ CHECKLIST D'IMPLÉMENTATION

Pour chaque nouvelle page :

- [ ] Inclure `<link href="style-global.css" rel="stylesheet">`
- [ ] Utiliser la palette de couleurs
- [ ] Appliquer les border-radius standards
- [ ] Utiliser les ombres définies
- [ ] Icônes circulaires (pas carrées)
- [ ] Transitions fluides
- [ ] Responsive mobile
- [ ] Tester les hovers
- [ ] Vérifier l'accessibilité

---

## 🎯 PHILOSOPHIE DU DESIGN

### Principes
1. **Minimalisme** - Épuré et élégant
2. **Cohérence** - Même style partout
3. **Fluidité** - Animations douces
4. **Lisibilité** - Contrastes optimaux
5. **Professionnalisme** - Style premium

### Inspirations
- Apple (minimalisme)
- Notion (clarté)
- Stripe (élégance)
- Hermès (luxe sobre)

---

## 📦 FICHIERS

- `style-global.css` - Styles globaux
- `index.html` - Page d'accueil (référence)
- Police : Inter (Google Fonts)

---

**Design by Ma Petite Bib - 2025**
