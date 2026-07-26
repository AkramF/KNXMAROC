export interface ArticleBlog {
  slug: string;
  titre: string;
  chapeau: string;
  categorie: "Technique" | "Architecture" | "Énergie" | "Sécurité";
  tempsLecture: string;
  datePublication: string;
  imageCouverture?: {
    src: string;
    alt: string;
    legende?: string;
  };
  auteur: {
    nom: string;
    role: string;
  };
  motsCles: string[];
  contenu: {
    sectionTitre: string;
    paragraphes: string[];
    citation?: string;
    imageSection?: {
      src: string;
      alt: string;
      legende?: string;
    };
    lienSolution?: {
      texteAncre: string;
      url: string;
      descriptionContextuelle: string;
    };
  }[];
}

export const ARTICLES_BLOG: ArticleBlog[] = [
  {
    slug: "comprendre-le-protocole-knx-standard-filaire-mondial",
    titre: "Comprendre le Protocole KNX : Le Standard Filaire Mondial du Bâtiment Intelligent",
    chapeau:
      "Qu'est-ce que le protocole KNX ? Pourquoi est-il devenu la référence incontournable de la domotique haut de gamme pour les villas et bâtiments de prestige au Maroc ? Analyse détaillée du standard filaire ISO/IEC 14543-3.",
    categorie: "Technique",
    tempsLecture: "8 min",
    datePublication: "26 Juillet 2026",
    imageCouverture: {
      src: "/assets/world/clavier-poster.jpg",
      alt: "Interface et appareillage KNX filaire haut de gamme",
      legende:
        "Appareillage mural KNX Ekinex & Basalte interconnecté sur câble bus 29V à très basse sécurité (SELV).",
    },
    auteur: {
      nom: "Équipe Technique KNX MAROC",
      role: "Intégrateurs Certifiés KNX Partner",
    },
    motsCles: [
      "Protocole KNX",
      "Standard Filaire ISO/IEC 14543-3",
      "Domotique Maroc",
      "Bus KNX",
      "DALI-2",
      "Hypervision",
    ],
    contenu: [
      {
        sectionTitre: "1. Les Fondements du Protocole KNX : Un Standard Ouvert et Décentralisé",
        paragraphes: [
          "Le protocole KNX est le seul standard mondial ouvert et normalisé (ISO/IEC 14543-3, EN 50090, ANSI/ASHRAE 135) dédié au contrôle et à l'automatisation des bâtiments résidentiels et tertiaires.",
          "À la différence des systèmes domotiques propriétaires ou grand public (Wi-Fi, Zigbee, Z-Wave), KNX repose sur un câble bus vert torsadé blindé à très basse tension de sécurité (29V SELV). Ce câble relie tous les équipements de la maison en une topologie d'une fiabilité absolue.",
          "La grande force de KNX réside dans son architecture décentralisée : chaque participant (interrupteur, variateur, passerelle CVC, détecteur) intègre son propre microprocesseur. Il n'existe pas de centrale unique dont la panne paralyserait la maison entière.",
        ],
        citation:
          "KNX n'est pas une marque commerciale, c'est une norme internationale partagée par plus de 500 fabricants mondiaux certifiés.",
        imageSection: {
          src: "/assets/world/clavier-poster.jpg",
          alt: "Bouton poussoir et interrupteur KNX haut de gamme",
          legende: "Commande murale KNX avec finition métal brossé et thermostat intégré.",
        },
      },
      {
        sectionTitre: "2. Éclairage Architectural : La Synergie KNX & DALI-2",
        paragraphes: [
          "L'éclairage est le cœur battant de l'ambiance d'une villa de luxe. Pour obtenir une gradation parfaitement fluide sans aucun scintillement, KNX s'interface de manière native avec le protocole DALI-2 (Digital Addressable Lighting Interface).",
          "Grâce aux passerelles KNX/DALI-2, chaque luminaire ou ruban LED (Tunable White, RGBW, gradation logarithmique à 0,1%) est adressé numériquement. Vous créez des scénarios lumineux complexes ('Réception', 'Dîner', 'Cinéma') d'une pression sur une seule touche.",
        ],
        lienSolution: {
          texteAncre: "Découvrir nos solutions d'éclairage DALI-2 & Gradation",
          url: "/#solutions",
          descriptionContextuelle:
            "Consultez notre expertise sur l'interfaçage des passerelles DALI-2 et la gestion circadienne de l'éclairage.",
        },
        imageSection: {
          src: "/assets/world/sejour-poster.jpg",
          alt: "Éclairage architectural et confort dans un séjour de villa",
          legende:
            "Gestion des scènes lumineuses DALI-2 et régulation thermique unifiée dans un séjour d'exception.",
        },
      },
      {
        sectionTitre: "3. Climatisation CVC VRF & Stores Bioclimatiques : Énergie Maîtrisée",
        paragraphes: [
          "Au Maroc, où le confort thermique exige une climatisation performante l'été et un chauffage efficace l'hiver, le protocole KNX apporte une réponse énergétique stratégique.",
          "KNX communique directement avec les bus de communication des grands constructeurs CVC (Daikin, Mitsubishi Electric, LG, Toshiba). Les thermostats KNX régulent chaque zone au dixième de degré près et coupent automatiquement le CVC à l'ouverture des baies vitrées.",
          "Simultanément, KNX pilote les volets et stores bioclimatiques en fonction de la course du soleil calculée par la station météo, réduisant la charge thermique avant même l'activation de la climatisation.",
        ],
        lienSolution: {
          texteAncre: "Explorer nos passerelles CVC VRF & Stores Bioclimatiques",
          url: "/#solutions",
          descriptionContextuelle:
            "Apprenez comment réduire votre facture énergétique de 35% à 45% grâce au couplage CVC / Météo KNX.",
        },
        imageSection: {
          src: "/assets/segments/residentiel.jpg",
          alt: "Villa d'exception équipée d'une régulation thermique KNX au Maroc",
          legende:
            "Optimisation bioclimatique des volets roulants et du CVC VRF dans une résidence de luxe.",
        },
      },
      {
        sectionTitre: "4. Hypervision Tactile Murale & Sécurité Biométrique Unifiée",
        paragraphes: [
          "L'un des avantages majeurs de l'infrastructure KNX est la centralisation du contrôle. Plus besoin d'accumuler les boîtiers et télécommandes disparates.",
          "Les écrans tactiles muraux d'hypervision regroupent sur une interface épurée la totalité des fonctions du bâtiment : plan 2D/3D des pièces, état des ouvrants, consommations énergétiques en temps réel et flux vidéo des caméras.",
          "Côté sécurité, avec l'extension KNX Data Security (chiffrement AES-128), les alarmes anti-intrusion et le contrôle d'accès biométrique sont intégrés sur le bus filaire avec un niveau de sécurité militaire.",
        ],
        lienSolution: {
          texteAncre: "Consulter nos écrans d'hypervision & sécurité biométrique",
          url: "/#solutions",
          descriptionContextuelle:
            "Découvrez nos interfaces tactiles murales et nos solutions de contrôle d'accès sécurisé.",
        },
        imageSection: {
          src: "/assets/world/supervision-poster.jpg",
          alt: "Écran d'hypervision tactile mural KNX",
          legende:
            "Supervision tactile murale centralisée pour le contrôle intégral de la résidence.",
        },
      },
      {
        sectionTitre: "5. Pérennité & Souveraineté : La Remise du Fichier Source ETS (.knxproj)",
        paragraphes: [
          "Le logiciel officiel ETS6 (Engineering Tool Software) est l'outil unique utilisé dans le monde entier pour programmer les installations KNX.",
          "En tant qu'intégratueur certifié KNX Partner, KNX MAROC remet obligatoirement à chaque maître d'ouvrage le fichier source complet (.knxproj) à la fin du chantier. Vous n'êtes jamais dépendant d'un seul prestataire : n'importe quel intégrateur certifié dans le monde peut intervenir sur votre villa à tout moment.",
        ],
        citation:
          "La remise du fichier source ETS est votre garantie de souveraineté absolue sur votre bâtiment pour les 30 prochaines années.",
      },
    ],
  },
  {
    slug: "pourquoi-knx-standard-filaire-villas-maroc",
    titre: "Pourquoi KNX est le seul standard filaire garanti 30 ans pour une villa au Maroc",
    chapeau:
      "Dans l'immobilier de prestige à Rabat, Casablanca ou Marrakech, les solutions domotiques sans fil montrent rapidement leurs limites. Analyse technique de la pérennité du bus filaire ouvert ISO/IEC 14543-3.",
    categorie: "Technique",
    tempsLecture: "6 min",
    datePublication: "24 Juillet 2026",
    imageCouverture: {
      src: "/assets/segments/residentiel.jpg",
      alt: "Villa de haut standing à Rabat",
    },
    auteur: {
      nom: "Équipe Technique KNX MAROC",
      role: "Intégrateurs Certifiés KNX Partner",
    },
    motsCles: ["KNX Maroc", "Standard Filaire", "ISO/IEC 14543-3", "Domotique Villa Rabat"],
    contenu: [
      {
        sectionTitre: "L'illusion des technologies domotiques propriétaires sans fil",
        paragraphes: [
          "Lors de la construction ou de la rénovation d'une villa de prestige, le choix de l'infrastucture électrique est déterminant pour les trente prochaines années. Trop souvent, des solutions propriétaires ou sans fil (Zigbee, Wi-Fi, Z-Wave) sont installées en pensant faire l'économie d'un câblage dédié.",
          "Cependant, le béton armé, les grandes hauteurs sous plafond et les surfaces en marbre caractéristiques des villas d'exception au Maroc créent une atténuation radio sévère. Les pannes de maillage et l'obsolescence programmée des applications cloud propriétaires rendent ces installations inutilisables au bout de quelques années.",
        ],
        citation:
          "Une vraie domotique de luxe ne dépend ni d'un serveur tiers aux États-Unis, ni d'une connexion Wi-Fi capricieuse. Elle repose sur un câble physique torsadé à très basse tension.",
      },
      {
        sectionTitre: "Le câble bus KNX : 29V de stabilité absolue",
        paragraphes: [
          "Le standard KNX (ISO/IEC 14543-3) repose sur un principe décentralisé : chaque participant (interrupteur, variateur, détecteur, passerelle CVC) possède sa propre intelligence intégrée dans un microcontrôleur EEPROM. Si un composant tombe en panne, le reste du bâtiment continue de fonctionner parfaitement.",
          "De plus, avec plus de 500 fabricants mondiaux certifiés (Gira, JUNG, Basalte, Ekinex, ABB, Schneider Electric), votre installation n'est jamais prisonnière d'une seule marque. Vous gardez la liberté absolue de faire évoluer votre appareillage mural dans 10 ou 20 ans sans refaire le câblage.",
        ],
      },
      {
        sectionTitre: "Le fichier source ETS6 : votre titre de propriété numérique",
        paragraphes: [
          "En tant qu'intégrateur certifié, KNX MAROC remet à chaque fin de chantier le fichier de projet officiel ETS (.knxproj). Ce fichier contient la topologie complète, l'adressage individuel et les participants de votre villa.",
          "Ce projet vous garantit une souveraineté totale : n'importe quel intégrateur certifié KNX dans le monde peut intervenir sur votre installation à tout moment.",
        ],
      },
    ],
  },
  {
    slug: "dali-2-knx-eclairage-architectural-sans-scintillement",
    titre: "DALI-2 & KNX : Maîtriser l'éclairage architectural haut de gamme sans scintillement",
    chapeau:
      "Comment la passerelle DALI-2 interconnectée au bus KNX permet de piloter les rubans LED Tunable White, la gradation ultra-douce à 0,1% et l'éclairage centré sur l'humain (HCL).",
    categorie: "Architecture",
    tempsLecture: "5 min",
    datePublication: "18 Juillet 2026",
    imageCouverture: {
      src: "/assets/world/sejour-poster.jpg",
      alt: "Éclairage architectural séjour villa",
    },
    auteur: {
      nom: "Bureau d'Ingénierie Éclairage",
      role: "Spécialistes Gradation DALI-2",
    },
    motsCles: ["DALI-2", "Gradation LED", "Tunable White", "Éclairage Architectural"],
    contenu: [
      {
        sectionTitre: "La différence entre gradation Phase et protocole DALI-2",
        paragraphes: [
          "Dans les résidences premium, les luminaires architecturaux modernes (gorges lumineuses, spots encastrés trimless, rails magnétiques) exigent une gradation d'une grande finesse. La gradation traditionnelle par coupure de phase génère souvent des bourdonnements et du scintillement à faible intensité.",
          "Le protocole DALI-2 (Digital Addressable Lighting Interface) numérise la commande d'éclairage directement au niveau des drivers. Chaque luminaire est adressé individuellement sur un bus 2 fils non polarisé, offrant une courbe de gradation logarithmique parfaitement adaptée à l'œil humain.",
        ],
        citation:
          "Passer du 230V haché au DALI-2, c'est offrir à vos espaces intérieurs la douceur d'un crépuscule naturel, réglable au millième près.",
      },
      {
        sectionTitre: "Intégration transparente avec le bus KNX",
        paragraphes: [
          "Grâce aux passerelles KNX / DALI-2 certifiées, les boutons poussoirs muraux ou l'écran d'hypervision pilotent les groupes DALI-2 sans latence. Les retours d'état sont instantanés et incluent la détection des pannes d'ampoules et d'alimentations.",
          "Les scénarios 'Réception', 'Dîner' ou 'Cinéma' ajustent simultanément la puissance et la température de couleur (2700K à 6500K) pour s'adapter aux rythmes circadiens des occupants.",
        ],
      },
    ],
  },
  {
    slug: "pilotage-cvc-vrf-economie-energie-climatisation-maroc",
    titre: "Pilotage CVC VRF & KNX : Réduire la consommation électrique de 40% au Maroc",
    chapeau:
      "Le climat marocain exige un confort thermique sans compromis. Découvrez comment l'interfaçage direct KNX avec les systèmes VRF (Daikin, LG, Mitsubishi) élimine les gaspillages d'énergie.",
    categorie: "Énergie",
    tempsLecture: "7 min",
    datePublication: "10 Juillet 2026",
    imageCouverture: {
      src: "/assets/segments/hotellerie.jpg",
      alt: "Climatisation et confort hôtel de luxe",
    },
    auteur: {
      nom: "Pôle Efficacité Énergétique",
      role: "Experts Thermique & CVC",
    },
    motsCles: ["CVC VRF", "Climatisation Maroc", "Économie Énergie", "Passerelle Daikin KNX"],
    contenu: [
      {
        sectionTitre: "Le défi du confort thermique dans les villas et hôtels marocains",
        paragraphes: [
          "La climatisation et le chauffage représentent jusqu'à 65% de la facture énergétique d'une villa à Marrakech ou d'un hôtel de luxe au Nord du Maroc. Le problème le plus fréquent réside dans la contradiction entre les commandes de clim et l'ouverture des baies vitrées.",
          "Lorsque la climatisation tourne à plein régime alors que les fenêtres sont ouvertes, l'énergie est littéralement gaspillée.",
        ],
        citation:
          "En coupant automatiquement le CVC lors de l'ouverture des fenêtres et en régulant selon l'occupation réelle, KNX réduit la facture énergétique de 35% à 45%.",
      },
      {
        sectionTitre: "Gestion unifiée du CVC, des stores et de l'ensoleillement",
        paragraphes: [
          "KNX s'interface directement avec le bus natif des fabricants de climatisation VRF/DRV (Daikin, Mitsubishi Electric, LG, Toshiba) via des passerelles passerelles BACnet ou KNX directes.",
          "En été, dès que la station météo KNX détecte un fort ensoleillement sur une façade Sud, le système abaisse automatiquement les stores bioclimatiques pour limiter l'apport thermique avant d'activer la climatisation.",
        ],
      },
    ],
  },
];

export function obteinArticleParSlug(slug: string): ArticleBlog | undefined {
  return ARTICLES_BLOG.find((a) => a.slug === slug);
}
