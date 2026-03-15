// ========================================
// COMPÉTENCES PAR NIVEAU ET PAR PÉRIODE
// Fichier de données pour l'outil Évaluation & Observations
// ========================================

// COMPÉTENCES PS (Petite Section)
const competencesPS = {
  'P1': {
    'Langage oral': [
      'Réagit à son prénom',
      'Exprime un besoin simple (pipi, eau, mal)',
      'Dit "bonjour" et "au revoir"',
      'Nomme papa et maman',
      'Répond par oui ou non',
      'Montre du doigt ce qu\'il veut'
    ],
    'Découvrir l\'écrit': [
      'Manipule un livre (tourne pages)',
      'Regarde des images',
      'Écoute une comptine courte',
      'Reconnaît son doudou/étiquette photo'
    ],
    'Mathématiques': [
      'Montre 1 avec ses doigts',
      'Dit "encore" ou "un autre"',
      'Donne 1 objet quand on demande',
      'Reconnaît beaucoup/pas beaucoup'
    ],
    'Graphisme et écriture': [
      'Tient un crayon',
      'Fait des traces sur une feuille',
      'Gribouille librement'
    ],
    'Activités artistiques': [
      'Peint avec ses mains',
      'Montre du doigt une couleur',
      'Écoute une musique'
    ],
    'Activité physique': [
      'Marche seul',
      'Court',
      'Monte sur un toboggan',
      'Donne la main en ronde'
    ],
    'Explorer le monde': [
      'Montre sa bouche, ses mains',
      'Va aux toilettes avec aide',
      'Enlève son manteau avec aide'
    ]
  },
  'P2': {
    'Langage oral': [
      'Dit son prénom',
      'Nomme des objets familiers (table, chaise)',
      'Fait des phrases de 2-3 mots',
      'Répond à "c\'est quoi ?"',
      'Chante des comptines simples',
      'Nomme quelques copains'
    ],
    'Découvrir l\'écrit': [
      'Reconnaît son prénom avec photo',
      'Tient le livre à l\'endroit',
      'Montre des images nommées',
      'Fait semblant de lire'
    ],
    'Mathématiques': [
      'Donne 1, puis 2 objets',
      'Dit "1, 2" en comptant',
      'Reconnaît rond et carré',
      'Trie par couleur'
    ],
    'Graphisme et écriture': [
      'Trace des traits',
      'Fait des ronds',
      'Remplit un espace',
      'Dessine spontanément'
    ],
    'Activités artistiques': [
      'Nomme rouge, bleu, jaune',
      'Colle des gommettes',
      'Tape dans ses mains en rythme'
    ],
    'Activité physique': [
      'Saute à pieds joints',
      'Lance un ballon',
      'Fait une ronde',
      'Grimpe à l\'échelle'
    ],
    'Explorer le monde': [
      'Nomme les parties du visage',
      'Se lave les mains seul',
      'Mange seul'
    ]
  },
  'P3': {
    'Langage oral': [
      'Fait des phrases complètes simples',
      'Raconte ce qu\'il a fait',
      'Nomme les couleurs principales',
      'Utilise "je" pour parler de lui',
      'Pose des questions simples',
      'Chante plusieurs comptines'
    ],
    'Découvrir l\'écrit': [
      'Reconnaît son prénom sans photo',
      'Distingue dessin et écriture',
      'Écoute une histoire de 5 minutes',
      'Raconte une histoire d\'après images'
    ],
    'Mathématiques': [
      'Compte jusqu\'à 3',
      'Compare grand/petit',
      'Trie par forme',
      'Reconnaît 1, 2, 3 doigts'
    ],
    'Graphisme et écriture': [
      'Trace lignes verticales',
      'Trace lignes horizontales',
      'Dessine des bonhommes têtards',
      'Tient bien le crayon'
    ],
    'Activités artistiques': [
      'Mélange 2 couleurs',
      'Peint au pinceau',
      'Reconnaît musique douce/forte'
    ],
    'Activité physique': [
      'Court sans tomber',
      'Tape dans un ballon',
      'Marche en équilibre sur ligne',
      'Participe aux jeux collectifs'
    ],
    'Explorer le monde': [
      'Nomme matin et après-midi',
      'Reconnaît fille et garçon',
      'Utilise les toilettes seul',
      'S\'habille seul (presque)'
    ]
  },
  'P4': {
    'Langage oral': [
      'Raconte un événement en plusieurs phrases',
      'Nomme les émotions (content, triste, fâché)',
      'Pose beaucoup de questions',
      'Utilise le présent correctement',
      'Dialogue avec les copains',
      'Enrichit son vocabulaire quotidien'
    ],
    'Découvrir l\'écrit': [
      'Reconnaît quelques lettres',
      'Suit une histoire longue',
      'Invente une histoire simple',
      'Comprend que les lettres font des mots'
    ],
    'Mathématiques': [
      'Compte jusqu\'à 5',
      'Donne 1, 2, 3 objets sans se tromper',
      'Range du plus petit au plus grand (3 objets)',
      'Reconnaît toutes les formes de base'
    ],
    'Graphisme et écriture': [
      'Trace des ponts',
      'Fait des croix',
      'Dessine soleil et maison',
      'Colorie sans dépasser'
    ],
    'Activités artistiques': [
      'Dessine avec intention',
      'Nomme 6-7 couleurs',
      'Chante juste quelques chansons',
      'Reconnaît instruments simples'
    ],
    'Activité physique': [
      'Saute en avant',
      'Lance et rattrape',
      'Pédale sur tricycle',
      'Respecte règles simples'
    ],
    'Explorer le monde': [
      'Nomme toutes parties du corps',
      'Comprend hier/aujourd\'hui',
      'Utilise ciseaux avec aide',
      'Boutonne gros boutons'
    ]
  },
  'P5': {
    'Langage oral': [
      'Raconte une histoire cohérente',
      'S\'exprime clairement',
      'Explique ce qu\'il fait',
      'Argumente simplement ses choix',
      'Vocabulaire riche pour son âge',
      'Écoute attentivement'
    ],
    'Découvrir l\'écrit': [
      'Reconnaît son prénom partout',
      'Reconnaît 5-10 lettres',
      'Scande syllabes mots simples',
      'Comprend à quoi sert la lecture'
    ],
    'Mathématiques': [
      'Compte jusqu\'à 7-8',
      'Résout petits problèmes (1+1)',
      'Compare quantités jusqu\'à 5',
      'Reconnaît chiffres 1, 2, 3'
    ],
    'Graphisme et écriture': [
      'Trace boucles',
      'Dessine bonhomme complet',
      'Écrit quelques lettres de son prénom',
      'Tient bien tous les outils'
    ],
    'Activités artistiques': [
      'Production artistique réfléchie',
      'Utilise toutes les couleurs',
      'Joue d\'un instrument simple',
      'Danse en suivant la musique'
    ],
    'Activité physique': [
      'Coordonne bien ses mouvements',
      'Vise une cible',
      'Pédale et dirige',
      'Joue en équipe'
    ],
    'Explorer le monde': [
      'Connaît les saisons',
      'Utilise ciseaux seul',
      'Autonome habillage',
      'Comprend grandir'
    ]
  }
};

// COMPÉTENCES MS (Moyenne Section)
const competencesMS = {
  'P1': {
    'Langage oral': [
      'Se présente (prénom, âge)',
      'Raconte ses vacances en quelques phrases',
      'Nomme tous les objets courants de la classe',
      'Répond à des questions précises',
      'Utilise "je", "tu", "il/elle"',
      'Enrichit vocabulaire : rentrée, automne, famille',
      'Écoute sans interrompre',
      'Exprime clairement ses besoins'
    ],
    'Découvrir l\'écrit': [
      'Reconnaît son prénom en capitale sans photo',
      'Distingue lettres de chiffres',
      'Écoute histoire 10 minutes',
      'Repère titre et auteur d\'un livre',
      'Comprend sens de lecture (gauche → droite)',
      'Identifie quelques lettres',
      'Discrimine sons proches'
    ],
    'Mathématiques': [
      'Dénombre jusqu\'à 5 de façon fiable',
      'Compare 2 collections (plus/moins/autant)',
      'Reconnaît formes géométriques',
      'Trie selon 2 critères',
      'Récite suite numérique jusqu\'à 15',
      'Réalise collection de 1 à 4',
      'Range 4 objets par taille'
    ],
    'Graphisme et écriture': [
      'Tient outil en pince tripode',
      'Trace lignes variées',
      'Dessine bonhomme têtard détaillé',
      'Reproduit graphismes simples',
      'Respecte sens de tracé',
      'Colorie sans dépasser'
    ],
    'Activités artistiques': [
      'Dessine avec intention',
      'Nomme et utilise couleurs primaires + vert/orange',
      'Mémorise comptines longues',
      'Reproduit rythme simple',
      'Explore matériaux variés'
    ],
    'Activité physique': [
      'Court vite et s\'arrête au signal',
      'Saute pieds joints en avançant',
      'Lance ballon avec précision',
      'Grimpe et descend échelle',
      'Participe jeux de ronde',
      'Slalome entre plots'
    ],
    'Explorer le monde': [
      'Se repère dans journée (matin/midi/soir)',
      'Explore tout l\'espace classe',
      'Connaît corps et besoins',
      'Distingue vivant/non vivant',
      'Observe automne',
      'Nomme parties du corps'
    ]
  },
  'P2': {
    'Langage oral': [
      'Raconte événement chronologique',
      'Nomme tous les enfants de classe',
      'Utilise présent, passé simple',
      'Explique règle jeu simple',
      'Vocabulaire : hiver, Noël, vêtements, météo',
      'Formule demandes polies',
      'Dialogue avec pairs',
      'Exprime émotions variées'
    ],
    'Découvrir l\'écrit': [
      'Reconnaît 10-15 lettres capitales',
      'Identifie prénom copains',
      'Repère éléments livre (couverture, pages, texte)',
      'Reformule histoire entendue',
      'Distingue syllabe longue/courte',
      'Comprend fonction de l\'écrit',
      'Produit tracés pré-alphabétiques'
    ],
    'Mathématiques': [
      'Dénombre jusqu\'à 8',
      'Utilise nombres pour compter',
      'Résout problèmes simples (+1, -1)',
      'Montre quantités avec doigts',
      'Range 6 objets',
      'Reproduit algorithme AB',
      'Repère position (1er, dernier)'
    ],
    'Graphisme et écriture': [
      'Trace ponts, boucles, vagues',
      'Dessine bonhomme 4 membres',
      'Réalise graphismes décoratifs',
      'Contrôle geste',
      'Écrit lettres simples (I, L, T)',
      'Respecte lignes'
    ],
    'Activités artistiques': [
      'Dessine bonhomme complet',
      'Mélange couleurs primaires',
      'Chante comptines en groupe',
      'Reconnaît instruments',
      'Réalise œuvre avec projet',
      'Reproduit rythmes variés'
    ],
    'Activité physique': [
      'Enchaîne actions motrices',
      'Saute obstacles bas',
      'Rampe sous obstacles',
      'Roule sur côté',
      'Coopère en équipe',
      'Lance vers cible'
    ],
    'Explorer le monde': [
      'Ordonne 2-3 images chronologiques',
      'Utilise devant/derrière, sur/sous',
      'Observe vivant (animaux, plantes)',
      'Reconnaît caractéristiques hiver',
      'Nomme parties visage détaillées',
      'Comprend croissance'
    ]
  },
  'P3': {
    'Langage oral': [
      'Raconte histoire début/milieu/fin',
      'Participe discussions collectives',
      'Utilise phrases complexes',
      'Pose questions pour comprendre',
      'Vocabulaire : corps, santé, métiers',
      'Utilise futur proche',
      'Argumente choix simples',
      'Reformule pour clarifier'
    ],
    'Découvrir l\'écrit': [
      'Reconnaît alphabet majuscules',
      'Scande syllabes orales',
      'Écrit prénom en capitales seul',
      'Identifie rimes',
      'Suit texte du doigt',
      'Anticipe suite histoire',
      'Localise un mot dans phrase',
      'Comprend lien oral/écrit'
    ],
    'Mathématiques': [
      'Dénombre jusqu\'à 10',
      'Associe nombre et quantité',
      'Résout problèmes réunion/partage',
      'Compare par correspondance',
      'Reconnaît chiffres 1-5',
      'Décompose 5 (3+2, 4+1)',
      'Reproduit algorithme ABC',
      'Repère sur quadrillage'
    ],
    'Graphisme et écriture': [
      'Trace spirales, créneaux',
      'Dessine bonhomme détaillé',
      'Reproduit motifs complexes',
      'Écrit lettres capitales simples',
      'Commence cursive (e, l)',
      'Gère espace graphique'
    ],
    'Activités artistiques': [
      'Dessine avec détails voulus',
      'Réalise production personnelle',
      'Reproduit formules rythmiques',
      'Nomme œuvres connues',
      'Décrit ressenti',
      'Varie techniques'
    ],
    'Activité physique': [
      'Enchaîne parcours moteur',
      'Vise et touche cible',
      'Danse sur musiques variées',
      'Respecte règles opposition',
      'Équilibre sur un pied',
      'Franchit obstacles variés',
      'Coopère pour gagner'
    ],
    'Explorer le monde': [
      'Repère jours semaine',
      'Utilise calendrier simple',
      'Repère sur plan classe',
      'Nomme organes (cœur, ventre)',
      'Comprend besoins vivant',
      'Observe printemps',
      'Manipule objets techniques'
    ]
  },
  'P4': {
    'Langage oral': [
      'S\'exprime devant groupe',
      'Argumente de façon construite',
      'Vocabulaire riche et précis',
      'Utilise passé composé',
      'Enrichit vocabulaire : nature, sciences',
      'Reformule propos autres',
      'Décrit images complexes',
      'Invente histoires courtes'
    ],
    'Découvrir l\'écrit': [
      'Reconnaît mots courants',
      'Identifie phonèmes initiaux',
      'Écrit lettres cursives rondes',
      'Segmente phrases en mots',
      'Comprend principe alphabétique début',
      'Scande et compte syllabes',
      'Invente suite cohérente'
    ],
    'Mathématiques': [
      'Utilise nombres jusqu\'à 12-15',
      'Résout problèmes partage',
      'Reproduit assemblages géométriques',
      'Code/décode déplacements quadrillage',
      'Reconnaît chiffres 1-10',
      'Compare nombres',
      'Décompose jusqu\'à 8',
      'Complète collections'
    ],
    'Graphisme et écriture': [
      'Écrit prénom cursive',
      'Trace toutes lettres cursives',
      'Dessine avec précision',
      'Respecte interlignes',
      'Copie mots courts cursive',
      'Affine geste'
    ],
    'Activités artistiques': [
      'Dessine scènes complexes',
      'Explique productions',
      'Joue avec voix (variations)',
      'Donne avis argumenté œuvres',
      'Mélange couleurs avancé',
      'Chante avec nuances'
    ],
    'Activité physique': [
      'Adapte actions à contraintes',
      'Coopère stratégies',
      'Lance précis loin',
      'S\'équilibre hauteur',
      'Exerce rôles différents',
      'Respecte règles complexes',
      'Évalue performances'
    ],
    'Explorer le monde': [
      'Utilise hier/aujourd\'hui/demain',
      'Repère dans parcours',
      'Utilise outils (ciseaux, règle)',
      'Comprend hygiène',
      'Observe phénomènes naturels',
      'Comprend cycle vie plantes',
      'Utilise tablette'
    ]
  },
  'P5': {
    'Langage oral': [
      'Participe activement discussions',
      'Reformule efficacement',
      'Raconte histoires riches',
      'Utilise tous temps',
      'Vocabulaire : été, école élémentaire',
      'Explique raisonnements',
      'Justifie actions',
      'Comprend textes complexes'
    ],
    'Découvrir l\'écrit': [
      'Lit mots simples',
      'Écrit prénom cursive fluide',
      'Manipule phonèmes',
      'Comprend principe alphabétique',
      'Connaît son/nom lettres',
      'Écrit mots phonétiquement',
      'Segmente chaîne orale',
      'Produit écrits courts'
    ],
    'Mathématiques': [
      'Utilise nombres jusqu\'à 20',
      'Résout problèmes variés',
      'Reconnaît écriture chiffrée 1-15',
      'Décompose jusqu\'à 10',
      'Repère espace (plan)',
      'Repère temps (jours, mois)',
      'Compare, range nombres',
      'Comprend doubles'
    ],
    'Graphisme et écriture': [
      'Écrit cursive lisible',
      'Copie phrases',
      'Varie outils et supports',
      'Respecte taille lettres',
      'Écrit mots dictée simple',
      'Produit écrits autonomes'
    ],
    'Activités artistiques': [
      'Crée productions originales',
      'Présente démarches',
      'Chante avec expression',
      'Compare œuvres d\'art',
      'Maîtrise techniques variées',
      'Exprime émotions artistiques'
    ],
    'Activité physique': [
      'Coordonne actions complexes',
      'Exerce tous rôles jeux',
      'S\'oppose respectueusement',
      'Évalue soi et autres',
      'Enchaîne parcours précis',
      'Adapte à environnements'
    ],
    'Explorer le monde': [
      'Repère mois, année, saisons',
      'Décrit environnement',
      'Prend soin santé',
      'Comprend sciences simples',
      'Autonome numérique',
      'Respecte environnement',
      'Prêt pour CP'
    ]
  }
};

// Les compétences GS sont déjà dans le fichier HTML principal

// Fonction pour obtenir les compétences selon le niveau
function getCompetencesParNiveau(niveau) {
  if (niveau === 'PS') return competencesPS;
  if (niveau === 'MS') return competencesMS;
  // competencesGS sera défini dans le fichier HTML
  return window.competencesGS || {};
}
