// ========================================
// RÉFÉRENTIELS CYCLE 1 - PS / MS / GS
// Version semi-complète optimisée
// ========================================

const REFERENTIELS_CYCLE1 = {
  
  // ==========================================
  // PETITE SECTION (PS) - 2-3 ans
  // ==========================================
  
  "PS": {
    "nom": "Petite Section",
    "age": "2-3 ans", 
    "emoji": "🐣",
    "couleur": "#FFD93D",
    
    "domaines": {
      
      // === MATHÉMATIQUES ===
      "mathematiques": {
        "nom": "Acquisition des premiers outils mathématiques",
        "icone": "🔢",
        "couleur": "#FF6B9D",
        "competences": [
          "Réaliser une collection de 1 à 4 objets",
          "Dénombrer jusqu'à 4 en déplaçant les objets",
          "Comparer des quantités (beaucoup/peu, plus/moins)",
          "Utiliser ses doigts ou le dé pour indiquer une quantité",
          "Composer et décomposer les nombres 2, 3, 4 avec les doigts",
          "Associer quantité et nom du nombre (1 à 4)",
          "Réciter la comptine numérique jusqu'à 6",
          "S'initier à la notion de rang (1er, 2ème, 3ème)",
          "Reconnaître des formes simples",
          "Trier et classer des objets selon leur forme",
          "Comparer des longueurs (petit/grand)",
          "Reproduire un motif répétitif simple",
          "Résoudre des problèmes simples d'ajout et de retrait"
        ]
      },
      
      // === LANGAGE ORAL ===
      "langage_oral": {
        "nom": "Langage oral",
        "icone": "💬",
        "couleur": "#3498DB",
        "competences": [
          "Enrichir son vocabulaire : école/classe, automne, vêtements, émotions/Noël, cuisine, roi/château/hiver, animaux, contes/printemps, transports, jardin/insectes/été",
          "Comparer, trier, catégoriser les mots",
          "Reconnaître et nommer un objet",
          "Utiliser les pronoms il-elle/ils-elles et je",
          "Utiliser le verbe au présent, passé, futur",
          "Coordonner des propositions avec 'et' et 'et puis'",
          "Articuler distinctement (t/k, f/s, m/n)",
          "Oser parler pour exprimer un besoin",
          "Se nommer, nommer les enfants de la classe",
          "Mémoriser des comptines et des chants",
          "Expliquer ce qu'on fait, ce qu'on a fait, ce qu'on va faire",
          "Raconter un texte mémorisé"
        ]
      },
      
      // === LANGAGE ÉCRIT ===
      "langage_ecrit": {
        "nom": "Découvrir l'écrit",
        "icone": "📖",
        "couleur": "#1ABC9C",
        "competences": [
          "Discriminer des sons familiers",
          "Comparer et apparier les sons",
          "Prononcer son prénom en scandant les syllabes",
          "Frapper les syllabes d'un mot",
          "Reconnaître son prénom sur les étiquettes",
          "Retrouver son prénom parmi d'autres",
          "Observer et nommer son initiale",
          "Reconnaître et nommer certaines lettres de son prénom",
          "Nommer les voyelles capitales",
          "Manipuler un album dans le bon sens",
          "Écouter et comprendre un texte lu",
          "Identifier des livres avec les mêmes personnages",
          "Remettre les images d'une histoire dans l'ordre",
          "Observer l'adulte écrire",
          "Distinguer dessin et écriture",
          "Tracer des signes pour 'écrire'",
          "Essayer de tracer son initiale en majuscule"
        ]
      },
      
      // === GRAPHISME / ÉCRITURE ===
      "graphisme_ecriture": {
        "nom": "Geste d'écriture",
        "icone": "✏️",
        "couleur": "#E67E22",
        "competences": [
          "Contrôler et guider ses gestes par le regard",
          "Muscler les doigts et le poignet",
          "Tenir correctement l'outil scripteur",
          "Gribouiller, produire des tracés continus et discontinus",
          "Tracer des lignes verticales",
          "Tracer des lignes horizontales",
          "Tracer des points et traits",
          "Tracer des cercles et boucles",
          "Manipuler la pâte à modeler (écraser, boule, colombin)",
          "S'asseoir correctement pour écrire"
        ]
      },
      
      // === ACTIVITÉ PHYSIQUE ===
      "activite_physique": {
        "nom": "Activité physique",
        "icone": "🤸",
        "couleur": "#27AE60",
        "competences": [
          "Découvrir des objets de différentes tailles et formes (ballons, cerceaux, cordes...)",
          "Expérimenter : lancer, attraper, faire rouler, faire glisser",
          "Répondre à un signal, agir dans un temps limité",
          "Expérimenter différents modes de déplacement : marcher, courir, ramper, sauter, rouler, grimper",
          "Sauter de différentes façons (loin, haut, par-dessus)",
          "Ramper (ventre, dos, avec/sans bras)",
          "Découvrir tricycles, vélos, draisiennes, trottinettes",
          "Connaître différentes positions (assis, debout, couché...)",
          "Danser à deux, avec du matériel",
          "Faire des rondes et jeux dansés",
          "Apprendre à respecter les règles",
          "Découvrir des jeux collectifs (vider la maison, déménageurs)",
          "Comprendre et s'approprier un rôle"
        ]
      },
      
      // === ACTIVITÉS ARTISTIQUES ===
      "activites_artistiques": {
        "nom": "Activités artistiques",
        "icone": "🎨",
        "couleur": "#9B59B6",
        "competences": [
          "Dessiner librement avec différents outils",
          "Dessiner des éléments identifiables (bonhomme, maisons, animaux)",
          "Laisser des traces en occupant l'espace",
          "Réaliser des gestes circulaires continus",
          "Choisir différents outils, médiums, supports",
          "Réaliser des compositions plastiques",
          "Travailler la couleur (mélanges, nuances)",
          "Travailler la matière (épais, liquide)",
          "Observer et décrire des images, illustrations, œuvres d'art",
          "Mémoriser un répertoire de comptines et chansons",
          "Explorer ses capacités vocales (intensité, hauteur)",
          "Explorer les sonorités du corps",
          "Explorer des objets sonores et instruments de percussion",
          "Participer à des mises en jeu du corps (marionnettes)",
          "Découvrir le rôle de spectateur"
        ]
      },
      
      // === EXPLORER LE MONDE ===
      "explorer_monde": {
        "nom": "Explorer le monde",
        "icone": "🌍",
        "couleur": "#E74C3C",
        "competences": [
          "Distinguer matin et après-midi",
          "Prendre des repères dans la matinée",
          "Utiliser maintenant, après, avant",
          "Reconstituer une chronologie de 3 images",
          "Explorer l'espace de la classe, cour, école",
          "Se repérer pour se mettre en activité, ranger",
          "Se déplacer sur un parcours orienté",
          "Situer des objets par rapport à soi",
          "Décrire la position des objets (sur, sous, dans, devant, derrière)",
          "S'intéresser à son corps et ses besoins",
          "Distinguer fille/garçon",
          "Distinguer les parties du corps (mains, jambes, tête, bras, yeux, bouche...)",
          "Observer le monde animal",
          "Découvrir le monde végétal",
          "Être sensibilisé à l'écocitoyenneté",
          "Explorer la matière (pâte à modeler, papier, eau, sable...)",
          "Transvaser, malaxer, mélanger, couper, modeler, déchirer",
          "Utiliser des ustensiles de cuisine",
          "Découvrir l'outil ciseaux",
          "Découvrir tablette numérique, vidéoprojecteur"
        ]
      },
      
      // === ÉDUCATION AFFECTIVE ===
      "education_affective": {
        "nom": "Éducation à la vie affective",
        "icone": "❤️",
        "couleur": "#E91E63",
        "competences": [
          "Nommer les parties du corps",
          "Prendre conscience de l'intimité (parties intimes, espaces d'intimité)",
          "Exprimer son accord ou son refus (oui, non, d'accord, stop)",
          "Respecter le refus de l'autre",
          "Comprendre l'égalité filles/garçons",
          "Comprendre que les activités ne sont pas réservées aux filles ou garçons",
          "Décrire sa famille",
          "Observer différents types de famille"
        ]
      }
    }
  },
  
  
  // ==========================================
  // MOYENNE SECTION (MS) - 4-5 ans
  // ==========================================
  
  "MS": {
    "nom": "Moyenne Section",
    "age": "4-5 ans",
    "emoji": "🦋",
    "couleur": "#FF6B9D",
    
    "domaines": {
      
      // === MATHÉMATIQUES ===
      "mathematiques": {
        "nom": "Acquisition des premiers outils mathématiques",
        "icone": "🔢",
        "couleur": "#FF6B9D",
        "competences": [
          "Réaliser une collection de 1 à 6 objets",
          "Dénombrer jusqu'à 6 par énumération",
          "Constituer une collection d'un cardinal donné (jusqu'à 6)",
          "Comparer des quantités (plus que, moins que, autant que)",
          "Comparer par correspondance terme à terme",
          "Composer et décomposer les nombres 2 à 6",
          "Verbaliser les compositions et décompositions",
          "Associer quantité, nom du nombre et écriture chiffrée (1 à 6)",
          "Écrire en chiffres les nombres de 1 à 6",
          "Réciter la comptine numérique de 1 à 12",
          "Réciter la comptine à rebours de 5 à 1",
          "Comprendre la notion de rang (1er au 6ème)",
          "Déterminer une position après un déplacement (jeux de plateaux)",
          "Se familiariser avec la bande numérique",
          "Compléter une bande numérique lacunaire",
          "Résoudre des problèmes (ajout, retrait, partage, groupement, déplacement)",
          "Reconnaître et classer solides et formes (cube, boule, pyramide, cylindre, triangle, carré, disque)",
          "Reproduire des assemblages de solides ou formes (max 5)",
          "Comparer directement des longueurs",
          "Ordonner des objets selon leur longueur",
          "Comparer les masses de deux objets (balance Roberval)",
          "Mémoriser, reconnaître, prolonger un motif répétitif"
        ]
      },
      
      // === LANGAGE ORAL ===
      "langage_oral": {
        "nom": "Langage oral",
        "icone": "💬",
        "couleur": "#3498DB",
        "competences": [
          "Enrichir son vocabulaire : jeux/jouets, école/automne, météo, sorcières/Noël, animaux du zoo, roi/château/hiver, contes, printemps, mer, jardin/insectes/été",
          "Trouver un intrus parmi des mots",
          "Trouver des mots polysémiques (glace, verre, feuille, mousse...)",
          "Ranger par catégories",
          "Trouver des synonymes",
          "Utiliser les pronoms tu et on",
          "Utiliser le verbe à l'imparfait et au passé-composé",
          "Coordonner avec : d'abord, ensuite, après, pendant",
          "Articuler distinctement f/v, s/z, p/b, t/d, k/g",
          "Prononcer correctement des mots choisis",
          "Expliquer les ateliers faits ou à faire",
          "Expliquer comment on a fait ou comment on va faire",
          "Participer à un échange collectif en respectant le sujet",
          "Réciter comptines, chansons, poèmes mémorisés"
        ]
      },
      
      // === LANGAGE ÉCRIT ===
      "langage_ecrit": {
        "nom": "Découvrir l'écrit",
        "icone": "📖",
        "couleur": "#1ABC9C",
        "competences": [
          "Discriminer et identifier les sons : voyelles a, i, o, u, e, é",
          "Discriminer et identifier les sons : s, m, f, r, l, v, j, n, z, p, b, c, t, d, g, h, k, q, x, y, w",
          "Repérer et imiter des variations d'intensité",
          "Dire des comptines avec des phonèmes connus",
          "Scander et frapper les syllabes d'un mot",
          "Dénombrer les syllabes",
          "Identifier la syllabe d'attaque ou finale",
          "Manipuler les syllabes (ajouter, supprimer, substituer, permuter, fusionner)",
          "Découvrir les rimes",
          "Épeler son prénom",
          "Composer un mot avec des lettres mobiles",
          "Repérer les correspondances entre différentes graphies",
          "Nommer le plus de lettres connues",
          "Connaître le nom et le son des lettres",
          "Identifier les supports de l'écrit",
          "Observer des écrits et situations d'écriture",
          "Écouter et comprendre un texte lu",
          "Établir la chronologie d'une histoire",
          "Reformuler une histoire racontée",
          "Répondre à des questions sur un texte sans images",
          "Faire des hypothèses sur le contenu (couverture, titre)",
          "Manifester de l'intérêt pour d'autres langues",
          "Mémoriser des mots et chants dans une autre langue"
        ]
      },
      
      // === GRAPHISME / ÉCRITURE ===
      "graphisme_ecriture": {
        "nom": "Geste d'écriture",
        "icone": "✏️",
        "couleur": "#E67E22",
        "competences": [
          "Adopter une posture adaptée",
          "Adopter une préhension correcte du crayon",
          "Utiliser de façon coordonnée les 4 articulations",
          "Muscler les doigts et le poignet",
          "Contrôler les tracés (freiner son geste)",
          "Tracer des lignes verticales",
          "Tracer des lignes horizontales et quadrillage",
          "Tracer des lignes obliques et lignes brisées",
          "Tracer des cercles fermés",
          "Tracer des ponts et des coupes",
          "Tracer des vagues et ondulations",
          "Copier en lettres capitales son prénom avec modèle",
          "Écrire en lettres capitales son prénom sans modèle",
          "Écrire en lettres capitales des mots connus",
          "Mémoriser le tracé des lettres capitales et chiffres",
          "S'entraîner aux graphismes",
          "S'initier à l'écriture cursive de son prénom"
        ]
      },
      
      // === PREMIERS ÉCRITS ===
      "premiers_ecrits": {
        "nom": "Produire des premiers écrits",
        "icone": "📝",
        "couleur": "#795548",
        "competences": [
          "Comprendre que l'écrit code l'oral",
          "Observer l'adulte écrire",
          "Dictée à l'adulte (événement, extrait d'album, histoire, photos, récit collectif)",
          "Réciter une comptine en identifiant le support écrit",
          "Utiliser le nom de lettres connues pour représenter les sons",
          "Reconnaître une syllabe, un phonème et l'écrire",
          "Écrire un mot transparent avec appui d'un modèle",
          "Jouer avec la langue en inventant des pseudo-mots"
        ]
      },
      
      // === ACTIVITÉ PHYSIQUE ===
      "activite_physique": {
        "nom": "Activité physique",
        "icone": "🤸",
        "couleur": "#27AE60",
        "competences": [
          "Découvrir et expérimenter différents objets (ballons, cerceaux, cordes, sacs...)",
          "Lancer, attraper, faire rouler, faire glisser, faire tourner",
          "Répondre à un signal, agir dans un temps limité",
          "Expérimenter différents modes de déplacement",
          "Reproduire un mode de déplacement",
          "Sauter (loin, haut, par-dessus, rebondir)",
          "Ramper (ventre, dos, avec/sans bras, s'adapter aux contraintes)",
          "Utiliser tricycles, vélos, draisiennes, trottinettes",
          "Adapter ses déplacements à des contraintes variées",
          "Connaître et exécuter différentes positions en musique",
          "Expérimenter différentes actions motrices (avancer, reculer, tourner, sauter, taper...)",
          "Danser à deux, avec du matériel",
          "Faire des rondes et jeux dansés",
          "Apprendre à respecter les règles",
          "Jeux collectifs (vider la maison, déménageurs)",
          "Comprendre et s'approprier un rôle",
          "Comprendre deux rôles différents dans un jeu d'opposition",
          "Coopérer et s'opposer (jeux de poursuite : loup...)"
        ]
      },
      
      // === ACTIVITÉS ARTISTIQUES ===
      "activites_artistiques": {
        "nom": "Activités artistiques",
        "icone": "🎨",
        "couleur": "#9B59B6",
        "competences": [
          "Dessiner différents éléments identifiables (bonhomme, véhicules, maisons, animaux)",
          "Dessiner d'après un modèle en respectant des critères",
          "Dessiner pour inventer, illustrer une histoire ou comptine",
          "Réaliser des tracés continus : lignes verticales, horizontales, obliques, lignes brisées",
          "Réaliser des cercles fermés",
          "Réaliser des ponts, coupes, vagues, ondulations",
          "Contrôler son geste (freiner, reprendre)",
          "Choisir différents outils, médiums, supports",
          "Réaliser des compositions plastiques seul ou en groupe",
          "Travailler la couleur (mélanges, nuances, effets)",
          "Observer et décrire des images, illustrations, œuvres d'art, photos",
          "Exprimer son avis face à une image",
          "Utiliser une image pour en réaliser une nouvelle",
          "Mémoriser et interpréter un répertoire de comptines et chansons",
          "Interpréter au sein d'un groupe restreint",
          "Jouer avec sa voix (timbre, intensité, hauteur, nuances)",
          "Apprendre à chanter en chœur",
          "Explorer les sonorités du corps (jeux rythmiques)",
          "Explorer des objets sonores et instruments de percussion",
          "Repérer et reproduire des formules rythmiques simples",
          "Travailler l'écoute et le silence",
          "Développer son temps d'écoute",
          "Écouter des extraits d'œuvres musicales variées",
          "Participer à des mises en jeu du corps",
          "Découvrir le rôle de spectateur",
          "Observer et échanger sur les productions des autres"
        ]
      },
      
      // === EXPLORER LE MONDE ===
      "explorer_monde": {
        "nom": "Explorer le monde",
        "icone": "🌍",
        "couleur": "#E74C3C",
        "competences": [
          "Se repérer dans la journée (matin, midi, après-midi)",
          "Dire ce qu'on a fait avant et après une activité",
          "Se repérer dans la semaine (jour, semaine)",
          "Utiliser hier, aujourd'hui, demain",
          "Se repérer dans le mois (jour, semaine, mois, année)",
          "Utiliser locutions spatiales (sur/sous, dedans/dehors, à côté/loin)",
          "Décrire des positions dans l'espace",
          "Se repérer dans une page (haut, bas, gauche, droite)",
          "Suivre, décrire et représenter un parcours",
          "Coder des déplacements sur un plan ou photo",
          "S'intéresser à son corps et ses besoins",
          "Distinguer fille/garçon",
          "Distinguer les parties du corps",
          "Observer le monde animal",
          "Découvrir le monde végétal",
          "Découvrir la matière (air, eau)",
          "Être sensibilisé à une attitude écocitoyenne",
          "Explorer et agir sur la matière (pâte, papier, eau, sable...)",
          "Transvaser, malaxer, mélanger, transporter, modeler, couper, transformer",
          "Découvrir et transformer des matériaux naturels et fabriqués",
          "Utiliser des ustensiles de cuisine",
          "Utiliser les ciseaux",
          "Découvrir et utiliser tablette numérique, vidéoprojecteur"
        ]
      },
      
      // === ÉDUCATION AFFECTIVE ===
      "education_affective": {
        "nom": "Éducation à la vie affective",
        "icone": "❤️",
        "couleur": "#E91E63",
        "competences": [
          "Repérer et nommer les parties du corps",
          "Découvrir la grossesse et la naissance",
          "Découvrir et identifier ses émotions (joie, tristesse, peur, colère)",
          "Définir la notion de confiance",
          "Identifier un adulte de confiance",
          "Savoir qu'il existe des comportements interdits",
          "Distinguer secret et situation de danger",
          "Renforcer son attention à ses sensations",
          "Savoir demander de l'aide",
          "Prendre conscience des compétences diversifiées quel que soit le sexe",
          "Comprendre et respecter les différentes structures familiales",
          "Développer des liens sociaux"
        ]
      }
    }
  },
  
  
  // ==========================================
  // GRANDE SECTION (GS) - 5-6 ans  
  // ==========================================
  
  "GS": {
    "nom": "Grande Section",
    "age": "5-6 ans",
    "emoji": "🎓",
    "couleur": "#667eea",
    
    "domaines": {
      "mathematiques": {
        "nom": "Acquisition des premiers outils mathématiques",
        "icone": "🔢",
        "couleur": "#FF6B9D",
        "competences": [
          "Réaliser une collection de 1 à 10 objets",
          "Dénombrer jusqu'à 10",
          "Constituer une collection d'un cardinal donné (jusqu'à 10)",
          "Comparer des quantités (plus que, moins que, autant que)",
          "Composer et décomposer les nombres jusqu'à 10",
          "Associer quantité, nom du nombre et écriture chiffrée (1 à 10)",
          "Écrire en chiffres les nombres de 1 à 10",
          "Réciter la comptine numérique de 1 à 30",
          "Comprendre la notion de rang et d'ordinal",
          "Se familiariser avec la bande numérique",
          "Résoudre des problèmes arithmétiques (ajout, retrait, réunion, partage)",
          "Reconnaître et nommer des formes géométriques planes et solides",
          "Reproduire des assemblages de formes",
          "Comparer, mesurer des longueurs et des masses",
          "Reconnaître, décrire et créer des motifs organisés"
        ]
      },
      "langage_oral": {
        "nom": "Langage oral",
        "icone": "💬",
        "couleur": "#3498DB",
        "competences": [
          "Enrichir son vocabulaire de manière structurée",
          "Utiliser un vocabulaire précis et varié",
          "S'exprimer dans un langage syntaxiquement correct et précis",
          "Utiliser différents temps (présent, passé, futur)",
          "Utiliser des connecteurs logiques et temporels",
          "Raconter une histoire entendue",
          "Décrire une image, un événement",
          "Expliquer une démarche, un raisonnement",
          "Échanger et réfléchir avec les autres",
          "Participer à des débats",
          "Réciter comptines, poésies, textes mémorisés"
        ]
      },
      "langage_ecrit": {
        "nom": "Découvrir l'écrit",
        "icone": "📖",
        "couleur": "#1ABC9C",
        "competences": [
          "Discriminer et identifier tous les sons de la langue",
          "Manipuler des syllabes (scander, fusionner, segmenter)",
          "Manipuler des phonèmes (identifier, localiser, substituer)",
          "Connaître le nom et le son de toutes les lettres",
          "Faire correspondre les trois écritures (script, cursive, capitale)",
          "Reconnaître et écrire son prénom en cursive",
          "Reconnaître et écrire des mots simples",
          "Écouter et comprendre des textes lus de plus en plus longs",
          "Reformuler et raconter une histoire",
          "Comprendre un texte et contrôler sa compréhension",
          "Manifester de la curiosité par rapport à l'écrit",
          "Pouvoir redire les mots d'une phrase écrite",
          "Participer à la production d'un texte écrit",
          "Écrire seul un mot en utilisant ses connaissances phonologiques"
        ]
      },
      "graphisme_ecriture": {
        "nom": "Geste d'écriture",
        "icone": "✏️",
        "couleur": "#E67E22",
        "competences": [
          "Adopter une posture et une tenue du crayon adaptées",
          "Maîtriser les gestes de l'écriture cursive",
          "Écrire son prénom en écriture cursive sans modèle",
          "Écrire des lettres en cursive en respectant le sens du tracé",
          "Copier des mots en cursive",
          "Encoder des mots phonétiquement réguliers",
          "Écrire une phrase simple",
          "Respecter l'horizontalité et le sens de l'écriture",
          "Gérer l'espace graphique (lignes, interlignes)"
        ]
      },
      "activite_physique": {
        "nom": "Activité physique",
        "icone": "🤸",
        "couleur": "#27AE60",
        "competences": [
          "Courir, sauter, lancer de différentes façons",
          "Adapter ses équilibrements et déplacements",
          "Se déplacer avec aisance dans des environnements variés",
          "Construire et conserver une séquence d'actions et de déplacements",
          "Coordonner ses gestes et ses déplacements avec ceux des autres",
          "S'exprimer de façon libre ou en suivant des consignes par la danse",
          "Coopérer, exercer des rôles différents complémentaires",
          "S'opposer individuellement ou collectivement",
          "Respecter les règles de jeux sportifs collectifs"
        ]
      },
      "activites_artistiques": {
        "nom": "Activités artistiques",
        "icone": "🎨",
        "couleur": "#9B59B6",
        "competences": [
          "Dessiner pour représenter, illustrer, inventer",
          "Réaliser des compositions plastiques planes et en volume",
          "Utiliser le dessin dans un but précis",
          "Observer et décrire des œuvres",
          "S'exprimer sur les émotions ressenties face à une œuvre",
          "Mémoriser et interpréter des chants variés",
          "Chanter en groupe en respectant le tempo et sa partie",
          "Jouer avec sa voix pour explorer timbre, intensité, hauteur",
          "Explorer et utiliser des instruments de musique",
          "Affiner son écoute et développer sa sensibilité musicale",
          "Participer à des réalisations collectives (spectacle, exposition)",
          "Développer le rôle de spectateur attentif et critique"
        ]
      },
      "explorer_monde_temps_espace": {
        "nom": "Explorer le monde - Temps et espace",
        "icone": "🗺️",
        "couleur": "#E74C3C",
        "competences": [
          "Se repérer dans le temps (journée, semaine, mois, année)",
          "Utiliser les marqueurs temporels (hier, aujourd'hui, demain, avant, après)",
          "Ordonner une suite de photographies, d'images",
          "Représenter le temps qui passe (calendriers, frises)",
          "Se repérer dans l'espace de l'école et sa représentation",
          "Coder et décoder des déplacements",
          "Élaborer des premiers essais de représentation plane",
          "Utiliser des marqueurs spatiaux adaptés",
          "Se repérer dans un environnement proche puis élargi"
        ]
      },
      "explorer_monde_vivant": {
        "nom": "Explorer le monde - Le vivant",
        "icone": "🌱",
        "couleur": "#27AE60",
        "competences": [
          "Connaître son corps (parties, articulations, fonctions)",
          "Comprendre les besoins du corps (hygiène, sommeil, alimentation)",
          "Connaître et appliquer des règles d'hygiène",
          "Reconnaître les manifestations de la vie (naissance, croissance, reproduction)",
          "Observer et décrire différents milieux de vie",
          "Connaître les besoins essentiels de quelques animaux et végétaux",
          "Prendre conscience de la biodiversité",
          "Adopter une attitude responsable (respect du vivant, environnement)"
        ]
      },
      "explorer_monde_matiere_objets": {
        "nom": "Explorer le monde - Matière et objets",
        "icone": "🔬",
        "couleur": "#F39C12",
        "competences": [
          "Choisir, utiliser et savoir nommer différents outils et matériaux",
          "Réaliser des constructions, des assemblages",
          "Utiliser des objets techniques simples",
          "Explorer et décrire différents types de matériaux",
          "Agir sur la matière (transvaser, malaxer, mélanger, transformer)",
          "Repérer des transformations de matériaux sous l'action de la chaleur, de l'eau",
          "Utiliser des outils numériques (tablette, appareil photo, ordinateur)"
        ]
      }
    }
  }
  
};

// Export pour utilisation dans l'app
if (typeof module !== 'undefined' && module.exports) {
  module.exports = REFERENTIELS_CYCLE1;
}
