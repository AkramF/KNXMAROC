export interface ArticleBlog {
  slug: string;
  titre: string;
  chapeau: string;
  categorie: "Technique" | "Architecture" | "Énergie" | "Sécurité";
  tempsLecture: string;
  datePublication: string;
  auteur: {
    nom: string;
    role: string;
  };
  motsCles: string[];
  contenu: {
    sectionTitre: string;
    paragraphes: string[];
    citation?: string;
  }[];
}

export const ARTICLES_BLOG: ArticleBlog[] = [
  {
    slug: "pourquoi-knx-standard-filaire-villas-maroc",
    titre: "Pourquoi KNX est le seul standard filaire garanti 30 ans pour une villa au Maroc",
    chapeau:
      "Dans l'immobilier de prestige à Rabat, Casablanca ou Marrakech, les solutions domotiques sans fil montrent rapidement leurs limites. Analyse technique de la pérennité du bus filaire ouvert ISO/IEC 14543-3.",
    categorie: "Technique",
    tempsLecture: "6 min",
    datePublication: "24 Juillet 2026",
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
  {
    slug: "hypervision-securite-integree-villa-connectee",
    titre: "Hypervision & Sécurité : Remplacer l'alarme autonome par un système KNX unifié",
    chapeau:
      "Pourquoi l'intégration des détections de présence, du contrôle d'accès biométrique et des centrales d'alarme sur un bus sécurisé crée un bouclier actif inviolable.",
    categorie: "Sécurité",
    tempsLecture: "5 min",
    datePublication: "02 Juillet 2026",
    auteur: {
      nom: "Département Hypervision",
      role: "Spécialistes Sécurité Bâtiment",
    },
    motsCles: ["Hypervision Tactile", "Sécurité KNX", "Contrôle d'Accès Biométrique"],
    contenu: [
      {
        sectionTitre: "L'inconvénient des systèmes de sécurité isolés",
        paragraphes: [
          "Dans une conception classique, l'alarme anti-intrusion, les caméras IP, le contrôle d'accès et l'éclairage extérieur fonctionnent en silos isolés. En cas d'alerte périmétrique la nuit, les caméras filment dans l'obscurité car elles n'ont aucun moyen d'allumer l'éclairage de jardin.",
          "Avec KNX, tous ces sous-systèmes partagent la même dorsale d'information filaire.",
        ],
        citation:
          "Dès qu'une intrusion est détectée sur la ligne périmétrique, KNX allume instantanément les projecteurs extérieurs, baisse les volets de protection et envoie une alerte prioritaire sur votre smartphone.",
      },
      {
        sectionTitre: "Sécurité physique et cybersécurité avec KNX Data Security",
        paragraphes: [
          "Les nouvelles installations certifiées KNX Data Security intègrent le chiffrement AES-128 sur le bus filaire et sur le réseau IP. Votre réseau domotique est imperméable aux tentatives de piratage ou d'écoute clandestine.",
        ],
      },
    ],
  },
];

export function obteinArticleParSlug(slug: string): ArticleBlog | undefined {
  return ARTICLES_BLOG.find((a) => a.slug === slug);
}
