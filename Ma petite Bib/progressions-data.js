// PROGRESSIONS COMPLÈTES GS 2025-2026
// Données extraites du PDF des programmations

const progressionsData = {
  "Activité physique": {
    "Agir dans l'espace, sur la durée et sur les objets": {
      "toutes": [
        "Découvrir des objets de tailles, de formes ou de poids différents : ballons, cerceaux, cordes/rubans, sacs de graines, anneaux",
        "Expérimenter les différentes actions possibles : lancer, attraper, faire rouler, faire glisser, faire tourner",
        "Répondre à un signal",
        "Agir dans un temps limité"
      ]
    },
    "Adapter ses équilibres et déplacements": {
      "toutes": [
        "Expérimenter différents modes de déplacement : marcher, courir, ramper, sauter, rouler, grimper, glisser",
        "Reproduire un mode de déplacement",
        "Sauter de différentes façons : loin, haut, par-dessus, dans, rebondir avec du matériel divers",
        "Ramper de différentes façons : sur le ventre, sur le dos, avec ou sans les bras",
        "Ramper en s'adaptant aux contraintes proposées : sur, sous, dans",
        "Découvrir et utiliser les tricycles, vélos, draisiennes, trottinettes",
        "Adapter ses déplacements à des contraintes et des environnements variés"
      ]
    },
    "Communiquer avec les autres au travers d'actions à visée expressive ou artistique": {
      "toutes": [
        "Connaître les différentes positions : assis, à genoux, debout, couché... et les exécuter en musique",
        "Expérimenter différentes actions motrices : avancer, reculer, tourner sur soi-même, sauter sur place, taper des pieds, taper des mains",
        "Participer à des actions corporelles d'expression avec les différentes parties du corps et différents outils (chaises, rubans, ballons, cordes...)",
        "Danser à deux, danser avec du petit matériel",
        "Faire des rondes et jeux dansés"
      ]
    },
    "Collaborer, coopérer, s'opposer": {
      "toutes": [
        "Apprendre à respecter les règles",
        "Découvrir des jeux moteurs vécus en collectif : vider la maison, déménageurs",
        "Comprendre et s'approprier un rôle",
        "Comprendre et s'approprier deux rôles différents dans un jeu d'opposition",
        "Coopérer et s'opposer dans des jeux de poursuite : loup..."
      ]
    }
  },

  "Productions plastiques et visuelles": {
    "Dessiner": {
      "P1": ["Enrichir son dessin avec un graphisme"],
      "P2": ["Illustrer une phrase", "Illustrer une comptine", "Représenter ses camarades"],
      "P3": ["Dessiner à partir d'une observation", "Dessiner à partir de formes"],
      "P4": ["Représenter des objets", "Réaliser un dessin d'observation", "Dessiner quelque chose d'identifiable"],
      "P5": ["Dessiner des personnages habillés", "Représenter des animaux", "Illustrer une action", "Réaliser un dessin d'observation"]
    },
    "S'exercer au graphisme décoratif": {
      "P1": ["Tracer des traits dans différentes directions", "Tracer des traits rayonnants"],
      "P2": ["Tracer des lignes sinueuses, brisées", "Tracer des boucles", "Tracer des ponts"],
      "P3": ["Tracer des spirales", "Tracer des cercles concentriques"],
      "P4": ["Tracer des graphismes sur différents formats"],
      "P5": ["Combiner et inventer des graphismes"]
    },
    "Réaliser des compositions plastiques planes et en volume": {
      "toutes": [
        "Colorier sans dépasser et de manière structurée, en suivant un code",
        "Découper et coller pour composer",
        "Plier en suivant une ligne",
        "Modeler à l'aide d'un modèle"
      ]
    },
    "Observer, comprendre et transformer des images": {
      "toutes": [
        "Observer et décrire des images, des dessins, des illustrations d'albums, des reproductions d'œuvres d'art, des photographies"
      ]
    }
  },

  "Univers sonores": {
    "Jouer avec sa voix et acquérir un répertoire": {
      "toutes": [
        "Mémoriser un répertoire de comptines et de chansons composées de phrases musicales courtes, à structure simple",
        "Interpréter un chant ou une comptine au sein d'un groupe restreint",
        "Explorer ses capacités vocales de manière ludique : intensité, hauteur, nuances",
        "Apprendre progressivement à chanter en chœur"
      ]
    },
    "Explorer les instruments et utiliser les sonorités du corps": {
      "toutes": [
        "Explorer les sonorités de son corps à travers des jeux rythmiques simples",
        "Explorer des objets sonores divers empruntés à la vie quotidienne, des instruments de percussion"
      ]
    },
    "Affiner son écoute": {
      "toutes": [
        "Travailler autour de l'écoute et du silence",
        "Développer progressivement son temps d'écoute",
        "Écouter des extraits d'œuvres musicales d'origines variées caractérisés par des contrastes forts"
      ]
    }
  },

  "Spectacle vivant": {
    "Pratiquer quelques activités du spectacle vivant": {
      "toutes": [
        "Participer à des mises en jeux et en scènes du corps",
        "Découvrir le rôle de spectateur en observant des productions de ses camarades ou un spectacle"
      ]
    }
  },

  "Explorer le monde - Le temps": {
    "Le temps": {
      "P1": ["Se repérer dans la journée"],
      "P2": ["Se repérer dans la semaine", "Écrire une date"],
      "P3": ["Se repérer dans le mois", "Utiliser un calendrier"],
      "P4": ["Comparer des durées", "Repérer des actions simultanées"],
      "P5": ["Se repérer dans l'année"],
      "toutes": [
        "Comprendre le vocabulaire relatif au temps de manière progressive",
        "Appréhender la notion de durée courte en la matérialisant"
      ]
    }
  },

  "Explorer le monde - L'espace": {
    "L'espace": {
      "P1": ["Se repérer dans l'espace de la classe pour se mettre en activité, ranger", "Situer des objets par rapport à soi"],
      "P2": ["Situer des objets par rapport des repères stables", "Utiliser le vocabulaire usuel (haut, bas, gauche, droite...)"],
      "P3": ["Se repérer dans l'espace d'une page", "Construire une image orientée de son corps"],
      "P4": ["Suivre, décrire et représenter un parcours simple"],
      "P5": ["Se repérer dans un quadrillage"]
    }
  },

  "Découvrir le monde du vivant": {
    "Découvrir le monde du vivant": {
      "P1": ["Repérer les différentes sortes de danger : à l'école, à la maison, dans la rue"],
      "P2": ["Identifier, nommer et regrouper des animaux en fonction de leurs caractéristiques", "Identifier, désigner et nommer les parties du corps et du visage", "Découvrir les 5 sens"],
      "P3": ["Identifier, désigner et nommer les parties du corps et du visage", "Découvrir les 5 sens"],
      "P4": ["Distinguer le vivant du non vivant", "Observer différentes manifestations de la vie végétale"],
      "P5": ["S'initier de manière concrète à une attitude responsable vis-à-vis de l'environnement"]
    }
  },

  "Explorer la matière": {
    "Explorer la matière": {
      "toutes": [
        "Explorer et agir sur la matière (pâte à modeler, papier, eau, copeaux de bois, semoule, riz, graines, sable…) par des actions variées",
        "Découvrir, explorer et transformer des matériaux naturels ou fabriqués par l'homme",
        "Découvrir, utiliser et agir sur quelques matières : l'air, l'eau…"
      ]
    }
  },

  "Utiliser, fabriquer, manipuler des objets": {
    "Utiliser, fabriquer, manipuler des objets": {
      "P1": ["S'approprier un outil : les ciseaux", "Relier une action ou le choix d'un outil à l'effet souhaité"],
      "P2": ["Découper de manière plus précise avec les ciseaux"],
      "P3": ["Découvrir les propriétés d'objets divers : flotte ou coule", "Découvrir et manipuler un objet technique : la seringue"],
      "P4": ["Relier une action ou le choix d'un outil à l'effet souhaité : transvaser différentes matières"],
      "P5": ["Utiliser une fiche technique pour fabriquer un objet"]
    }
  },

  "Utiliser des outils numériques": {
    "Utiliser des outils numériques": {
      "toutes": [
        "Découvrir et commencer à utiliser de manière adaptée différents outils numériques : ordinateur, tablette numérique, vidéoprojecteur"
      ]
    }
  },

  "Acquérir le langage oral - Enrichir son vocabulaire": {
    "Enrichir son vocabulaire": {
      "P1": ["Comprendre et mémoriser des mots : École et classe, Automne", "Distinguer sens propre et sens figuré", "Construire des dérivations", "Inférer le sens d'un mot inconnu"],
      "P2": ["Comprendre et mémoriser des mots : motricité, Sorcières et Noël", "Distinguer sens propre et sens figuré", "Construire des dérivations", "Inférer le sens d'un mot inconnu"],
      "P3": ["Comprendre et mémoriser des mots : émotions, Roi/château et hiver", "Distinguer sens propre et sens figuré", "Construire des dérivations", "Inférer le sens d'un mot inconnu"],
      "P4": ["Comprendre et mémoriser des mots : Corps humain, Contes et printemps", "Distinguer sens propre et sens figuré", "Construire des dérivations", "Inférer le sens d'un mot inconnu"],
      "P5": ["Comprendre et mémoriser des mots : jardin, insectes et été", "Distinguer sens propre et sens figuré", "Construire des dérivations", "Inférer le sens d'un mot inconnu"]
    },
    "Développer sa syntaxe": {
      "P1": ["Comprendre et utiliser les pronoms « nous »", "Utiliser un système à 3 temps : imparfait/plus que parfait/futur", "Utiliser des introducteurs complexes : Où / quand / pour que/ si, comme"],
      "P2": ["Comprendre et utiliser les pronoms « vous »", "Utiliser le verbe au futur simple", "Utiliser des introducteurs complexes"],
      "P3": ["Comprendre et utiliser tous les pronoms appris", "Utiliser le verbe au futur et futur antérieur", "Utiliser des introducteurs complexes"],
      "P4": ["Comprendre et utiliser tous les pronoms appris", "Utiliser le verbe avec tous les temps appris", "Utiliser des introducteurs complexes"],
      "P5": ["Comprendre et utiliser tous les pronoms appris", "Utiliser le verbe avec tous les temps appris", "Utiliser des introducteurs complexes"]
    },
    "Articuler distinctement": {
      "P1": ["Percevoir les distinctions entre des mots proches phonologiquement « ch/s»", "Prononcer correctement des mots choisis : ex mouche/mousse"],
      "P2": ["Percevoir les distinctions entre des mots proches phonologiquement « ch/j»", "Prononcer correctement des mots choisis : ex manche/mange"],
      "P3": ["Percevoir les distinctions entre des mots proches phonologiquement « ch/z »", "Prononcer correctement des mots choisis : ex biche/bise"],
      "P4": ["Percevoir les distinctions entre des mots proches phonologiquement « j/z)»", "Prononcer correctement des mots choisis : ex bijou, bisou"],
      "P5": ["Percevoir les distinctions entre des mots proches phonologiquement (révision)", "Prononcer correctement des mots choisis avec des doubles consonnes"]
    },
    "Produire des discours variés": {
      "P1": ["Décrire une action/activité menée par un autre élève", "Se faire comprendre par quelqu'un hors contexte", "Reformuler ses propos", "Émettre une hypothèse", "Réciter une comptine, chanson"],
      "P2": ["Raconter un évènement non connu des autres", "Expliquer comment on a fait ou va faire", "Réciter une comptine, chanson"],
      "P3": ["Raconter un évènement non connu des autres", "Expliquer le travail effectué", "Réciter une comptine, chanson"],
      "P4": ["Raconter un évènement non connu des autres", "Expliquer le travail effectué", "Réciter une comptine, chanson"],
      "P5": ["Entrer en relation avec autrui par la médiation du langage", "Raconter un évènement non connu des autres"]
    }
  },

  "Se préparer à apprendre à lire": {
    "Acquérir les habiletés phonologiques - Écouter, identifier, discriminer": {
      "P1": ["Découvrir les phonèmes a, o, i, u, é et e avec des comptines", "Localiser des sons connus dans des mots"],
      "P2": ["Découvrir les phonèmes a, o, i, u, é et e avec des comptines", "Localiser des sons connus dans des mots"],
      "P3": ["Découvrir les phonèmes s, m, f, s, on, ch, r, l, v, in, ai avec des comptines", "Localiser des sons connus"],
      "P4": ["Découvrir les phonèmes j, n, p, z, an, b, c (k) ,t, d, g, oi, k, q, gn, x, y et w", "Localiser des sons connus"],
      "P5": ["Révision de tous les phonèmes connus", "Différencier les sons proches connus", "Localiser des sons connus"]
    },
    "Manipuler des syllabes orales puis des phonèmes": {
      "P1": ["Trouver un son demandé dans une liste de mots", "Scander, frapper et compter les syllabes", "Pratiquer des opérations sur les syllabes", "Jouer avec les syllabes d'attaque et finales"],
      "P2": ["Jouer avec les syllabes d'attaque et syllabes finales", "Discriminer, associer et coder des syllabes", "Pratiquer des opérations sur les syllabes"],
      "P3": ["Associer des mots ayant la même rime", "Pratiquer des opérations sur les phonèmes", "Chercher des intrus sur un phonème donné"],
      "P4": ["Pratiquer des opérations sur les phonèmes", "Chercher des intrus sur un phonème donné"],
      "P5": ["Pratiquer toutes les opérations possibles sur les phonèmes", "Manipuler les phonèmes et syllabes pour construire des mots", "Écrire la syllabe d'un mot puis le mot entier", "Lire des petites syllabes"]
    },
    "Connaître le nom des lettres": {
      "P1": ["Reconnaître son prénom en capitale", "Reconnaître et nommer de nombreuses lettres en capitale", "Reconstituer un mot en capitale", "Reconnaître des mots quotidiens"],
      "P2": ["Reconnaître son prénom en script", "Reconnaître et nommer de nombreuses lettres en capitale et en script", "Essayer de donner les sons et lettres d'un mot"],
      "P3": ["Reconnaître son prénom en cursive", "Reconnaître et nommer de nombreuses lettres dans les 3 graphies", "Essayer de donner les sons et lettres d'un mot"],
      "P4": ["Reconnaître et nommer de nombreuses lettres dans les 3 graphies", "Épeler un mot connu", "Distinguer les lettres visuellement proches"],
      "P5": ["Reconnaître et nommer les lettres de l'alphabet dans les 3 graphies", "Nommer toutes les lettres d'un mot écrit", "Distinguer et nommer les lettres visuellement proches"]
    },
    "Connaître le son des lettres": {
      "P1": ["Les phonèmes a, o, i, u, é et e"],
      "P2": ["Les phonèmes a, o, i, u, é et e"],
      "P3": ["Les phonèmes s, m, f, s, on, ch, r, l, v, in, ai"],
      "P4": ["Les phonèmes j, n, p, z, an, b, c (k) ,t, d, g, oi, k, q, gn, x, y et w"],
      "P5": ["Répéter un mot lentement en prolongeant les phonèmes", "Discriminer et identifier des mots proches : poule/boule/roule"]
    },
    "S'éveiller à la diversité linguistique": {
      "P1": ["Participer à des jeux dans une autre langue", "Comparer des histoires en français et dans une autre langue"],
      "P2": ["Manifester de l'intérêt pour d'autres langues", "S'exercer, répéter des sons et des mots", "Comparer les sons entre les langues"],
      "P3": ["Écouter des histoires lues et connues dans différentes langues", "Mémoriser des mots et consignes simples", "Mémoriser des chants et comptines"],
      "P4": ["Écouter des histoires lues et connues dans différentes langues", "Mémoriser et restituer des mots et consignes", "Mémoriser et restituer des chants et comptines"],
      "P5": ["Écouter des histoires lues et connues dans différentes langues", "Mémoriser et restituer des mots et consignes", "Mémoriser et restituer des chants et comptines"]
    },
    "Découvrir les supports de l'écrit": {
      "P1": ["Associer un écrit connu à son utilisation", "Identifier la fonction d'un écrit : livres", "Utiliser un vocabulaire approprié"],
      "P2": ["Associer un écrit connu à son utilisation", "Identifier la fonction d'un écrit : lettres", "Utiliser un vocabulaire approprié"],
      "P3": ["Associer un écrit connu à son utilisation", "Identifier la fonction d'un écrit : recettes, menus", "Utiliser un vocabulaire approprié"],
      "P4": ["Associer un écrit connu à son utilisation", "Identifier la fonction d'un écrit : affiches", "Utiliser un vocabulaire approprié"],
      "P5": ["Associer un écrit connu à son utilisation", "Identifier la fonction d'un écrit : notice de fabrication", "Utiliser un vocabulaire approprié"]
    },
    "Comprendre des textes lus": {
      "P1": ["Comprendre et reformuler une histoire lue complexe", "Répondre à des questions simples sur un texte"],
      "P2": ["Écouter des histoires sans images", "Reformuler des passages", "Identifier une ou plusieurs images intruses", "Remettre l'histoire dans l'ordre", "Trouver l'image qui correspond à la phrase"],
      "P3": ["Remettre l'histoire dans l'ordre", "Trouver l'image qui correspond à la phrase", "À partir d'un texte documentaire dessiner l'animal décrit", "Ressentir les émotions des personnages"],
      "P4": ["Écouter une histoire, trouver le titre et justifier", "Raconter une histoire lue avec ou sans support", "Donner les caractéristiques des personnages"],
      "P5": ["Expliquer les motivations des personnages", "Raconter une histoire connue dans son intégralité", "Transposer les émotions ressenties"]
    }
  },

  "Se préparer à apprendre à écrire": {
    "Apprendre le geste d'écriture": {
      "P1": ["Tenir son outil scripteur correctement", "Contrôler et guider ses gestes par le regard", "S'entraîner sur des graphismes : les boucles"],
      "P2": ["Tenir son outil scripteur correctement", "Mémoriser et automatiser le tracé des lettres en cursive", "Écrire son prénom en cursive avec modèle", "S'entraîner sur les boucles"],
      "P3": ["Tenir son outil scripteur correctement", "Mémoriser et automatiser le tracé des lettres en cursive", "Écrire son prénom en cursive avec modèle"],
      "P4": ["Tenir son outil scripteur correctement", "Mémoriser et automatiser le tracé des lettres en cursive", "Écrire son prénom en cursive avec modèle", "Écrire des petits mots en cursive avec modèle"],
      "P5": ["Tenir son outil scripteur correctement", "Mémoriser et automatiser le tracé des lettres en cursive", "Écrire son prénom en cursive sans modèle", "Écrire des petits mots en cursive avec modèle"]
    },
    "Passer de l'oral à l'écrit": {
      "P1": ["Reformuler son propos pour arriver à un message syntaxiquement correct", "Moduler le débit de sa parole", "Repérer un oubli volontaire d'un mot lors d'une dictée à l'adulte"],
      "P2": ["Reformuler son propos pour arriver à un message syntaxiquement correct", "Moduler le débit de sa parole", "Repérer un oubli volontaire d'un mot"],
      "P3": ["Repérer un mot transparent dans une phrase écrite", "Repérer un oubli volontaire d'un mot", "Discriminer les phonèmes d'une syllabe"],
      "P4": ["Repérer un mot transparent dans une phrase écrite", "Trouver les phonèmes d'une syllabe", "Discriminer les phonèmes d'une syllabe"],
      "P5": ["Repérer un mot transparent dans une phrase écrite", "Trouver les phonèmes d'une syllabe", "Discriminer les phonèmes d'une syllabe"]
    },
    "Produire des écrits": {
      "P1": ["Utiliser les outils de la classe pour participer aux essais d'écriture", "Utiliser ses propres ressources mémorisées"],
      "P2": ["Utiliser les outils de la classe", "Utiliser ses propres ressources mémorisées", "Expliciter la stratégie utilisée"],
      "P3": ["Utiliser les outils de la classe", "Utiliser ses propres ressources mémorisées", "Expliciter la stratégie utilisée"],
      "P4": ["Utiliser les outils de la classe", "Écrire des syllabes, puis des mots simples", "Produire des écrits en utilisant les rapports phonie-graphie connus", "Utiliser des signes de ponctuation"],
      "P5": ["Utiliser les outils de la classe", "Écrire des syllabes, puis des mots simples", "Produire des écrits en utilisant les rapports phonie-graphie connus", "Utiliser des signes de ponctuation"]
    }
  },

  "Mathématiques - Découvrir les nombres": {
    "Comprendre qu'une quantité ne dépend ni de la nature ni de l'organisation": {
      "P1": ["Réaliser une collection d'objets de 1 à 4"],
      "P2": ["Réaliser une collection d'objets de 1 à 6"],
      "P3": ["Réaliser une collection d'objets de 1 à 8"],
      "P4": ["Réaliser des collections 1-10 avec représentation analogique ou nom du nombre"],
      "P5": ["Reconnaître et réaliser des collections jusqu'à 10 et au-delà"]
    },
    "Comprendre que chaque nombre s'obtient en ajoutant un": {
      "P1": ["Réaliser une collection contenant un objet de plus", "Réaliser une collection contenant un objet de moins"],
      "P2": ["Nommer les nombres correspondant au cardinal avant et après l'ajout d'un élément (1 à 6)"],
      "P3": ["Nommer les nombres correspondant au cardinal avant et après l'ajout d'un élément (1 à 8)"],
      "P4": ["Nommer les nombres correspondant au cardinal avant et après l'ajout d'un élément (1 à 10)"],
      "P5": ["Nommer les nombres correspondant au cardinal avant et après l'ajout d'un élément (plus de 10)"]
    },
    "Poursuivre les stratégies de parcours d'une collection": {
      "P1": ["Séparer les éléments déjà pointés de ceux qui ne le sont pas encore"],
      "P2": ["Pointer du doigt ou marquer les éléments déjà parcourus (plus de 6 objets)"],
      "P3": ["Pointer du doigt ou marquer les éléments déjà parcourus (plus de 10 objets)", "Créer un parcours passant une et une seule fois par chaque élément", "Mettre un objet dans chaque boîte sans en oublier"]
    },
    "Dénombrer une collection d'objets": {
      "toutes": [
        "Dénombrer en déplaçant les objets",
        "Utiliser le principe de cardinalité pour dénombrer jusqu'à 10",
        "Utiliser ses doigts, les points du dé ou le nom d'un nombre pour indiquer la quantité",
        "Utiliser des compositions et décompositions pour dénombrer",
        "Utiliser la connaissance d'une composition pour aider à dénombrer plus rapidement (4 et 4 font 8)"
      ]
    },
    "Constituer une collection d'un cardinal donné": {
      "toutes": [
        "Réaliser des collections contenant la même quantité qu'une collection donnée",
        "Réaliser des collections contenant la même quantité qu'une représentation analogique",
        "Réaliser une collection en réunissant des collections plus petites"
      ]
    },
    "Comparer des quantités": {
      "P1": ["Comparer globalement et utiliser les locutions « plus que », « moins que », « autant que »"],
      "P2": ["Comparer par correspondance terme à terme et utiliser les locutions"],
      "P3": ["Comparer les cardinaux en dénombrant chacune et utiliser les locutions"],
      "P5": ["Comparer des quantités données par leur écriture chiffrée ou par le nom des nombres"]
    },
    "Composer et décomposer des nombres": {
      "toutes": [
        "Manipuler et verbaliser des compositions et décompositions de nombres",
        "Surcompter (compter de un en un à partir d'un nombre donné)",
        "Mobiliser des compositions et décompositions pour résoudre des problèmes (jusqu'à 10)",
        "Réaliser des compositions et décompositions avec les doigts",
        "Verbaliser les compositions en montrant l'utilisation possible des doubles (2 et 2 font 4)",
        "Verbaliser les décompositions des nombres compris entre deux et dix",
        "Apprendre le surcomptage pour ajouter deux nombres avec l'aide des doigts"
      ]
    },
    "Associer quantité, nom et écriture chiffrée": {
      "P1": ["Nommer le nombre correspondant à la quantité d'objets demandée (4)", "Faire la correspondance entre le nombre, le nombre écrit et sa représentation analogique (4)"],
      "P2": ["Nommer le nombre correspondant à la quantité d'objets demandée (6)", "Faire la correspondance (6)"],
      "P3": ["Nommer le nombre correspondant à la quantité d'objets demandée (8)", "Faire la correspondance (8)"],
      "P4": ["Nommer le nombre correspondant à la quantité d'objets demandée (10)", "Faire la correspondance (10)"],
      "P5": ["Nommer le nombre correspondant à la quantité d'objets demandée (plus de 10)", "Faire la correspondance (plus de 10)"]
    },
    "Écrire en chiffres les nombres de un à dix": {
      "toutes": ["Écrire des nombres dans des situations de communication"]
    },
    "Connaître et utiliser la comptine numérique jusqu'à trente": {
      "toutes": [
        "Réciter la comptine numérique de 1 à 30 voire plus de façon ordonnée et segmentée",
        "Réciter la comptine numérique jusqu'à un nombre donné",
        "Réciter la comptine numérique jusqu'à trente en partant d'un nombre autre que un",
        "Réciter la comptine numérique à rebours de dix à un",
        "Réciter les comptines numériques (jusqu'à vingt) de deux en deux"
      ]
    }
  },

  "Mathématiques - Exprimer un rang ou une position": {
    "Comprendre la notion de rang d'un objet": {
      "toutes": [
        "Repérer par perception visuelle le premier, le dernier, le deuxième et l'avant dernier",
        "Repérer à l'aide d'une procédure de comptage le rang d'un élément (au plus dix éléments)",
        "Déterminer un rang dans une suite ordonnée dont on a changé le point de départ ou le sens"
      ]
    },
    "Déterminer l'effet d'un déplacement sur une position": {
      "toutes": [
        "Comprendre le lien entre un ajout et un avancement et celui entre un retrait et un recul",
        "Déterminer une position résultant d'un déplacement avant ou arrière via des jeux de plateaux",
        "Verbaliser la procédure permettant de déterminer la position résultant d'un avancement ou d'un recul",
        "Utiliser la décomposition pour trouver plus facilement le déplacement à effectuer"
      ]
    },
    "Construire la bande numérique jusqu'à dix": {
      "toutes": [
        "Positionner des représentations des nombres inférieurs ou égaux à 10 dans les premières cases",
        "Placer un objet dans une case correspondant à une position donnée",
        "Compléter une bande numérique lacunaire",
        "Noter avec une photo son avancée dans l'apprentissage de la comptine numérique"
      ]
    }
  },

  "Mathématiques - Utiliser les nombres pour résoudre des problèmes": {
    "Résoudre des problèmes": {
      "P1": ["Manifester sa compréhension du problème par un problème d'ajout", "Utiliser une représentation sur papier", "Mobiliser compositions-décompositions", "Faire des problèmes de logique"],
      "P2": ["Manifester sa compréhension du problème par un problème de partage", "Utiliser une représentation sur papier", "Faire des problèmes de logique", "Mobiliser compositions-décompositions"],
      "P3": ["Manifester sa compréhension du problème par un problème de groupement", "Utiliser une représentation sur papier", "Faire des problèmes de logique", "Mobiliser compositions-décompositions"],
      "P4": ["Manifester sa compréhension du problème par un problème de retrait", "Utiliser une représentation sur papier", "Faire des problèmes de logique", "Mobiliser compositions-décompositions"],
      "P5": ["Manifester sa compréhension du problème par un problème de déplacement", "Utiliser une représentation sur papier", "Faire des problèmes de logique", "Mobiliser compositions-décompositions"]
    }
  },

  "Mathématiques - Explorer les solides et les formes planes": {
    "Décrire quelques solides simples": {
      "toutes": [
        "Décrire avec des mots simples les solides pour les différencier",
        "Reconnaître visuellement et tactilement une forme géométrique",
        "Trier et classer des formes géométriques",
        "Décrire et nommer quelques formes géométriques planes (carré, rectangle, triangle, disque) dans toutes les orientations",
        "Reproduire un modèle (puzzle, pavage, assemblage de solides) non nécessairement à l'échelle",
        "Utiliser la règle pour effectuer des tracés"
      ]
    }
  },

  "Mathématiques - Explorer des grandeurs": {
    "La longueur": {
      "toutes": [
        "Utiliser une bande témoin pour y reporter différentes longueurs afin de les comparer",
        "Utiliser une bande témoin pour y reporter différentes longueurs afin de les ordonner",
        "Utiliser à bon escient les locutions « plus long que », « plus court que », « de même longueur que »",
        "Classer des objets selon leur longueur par ordre croissant ou décroissant (de 3 à 5 objets)",
        "Produire un objet de la même longueur qu'un objet donné"
      ]
    },
    "La masse": {
      "toutes": [
        "Utiliser une balance de type Roberval pour comparer des masses",
        "Utiliser à bon escient les locutions « plus lourd que », « plus léger que », « de même masse que »",
        "Réaliser l'équilibre sur une balance de type Roberval",
        "Initier à la transitivité des masses"
      ]
    }
  },

  "Mathématiques - Se familiariser avec les motifs organisés": {
    "Motifs organisés": {
      "toutes": [
        "Verbaliser les éléments d'un motif évolutif simple en utilisant un lexique élaboré",
        "Transcrire un motif visuel simple en utilisant des symboles différents",
        "Reconnaître des motifs visuels ayant la même structure",
        "Transcrire sous forme visuelle ou gestuelle un motif sonore (et vice versa)",
        "Créer un motif (visuel, sonore ou gestuel) et le décrire",
        "Identifier et verbaliser les règles donnant lieu à différents prolongements"
      ]
    }
  }
};

console.log('✅ Progressions complètes chargées:', Object.keys(progressionsData).length, 'domaines principaux');
