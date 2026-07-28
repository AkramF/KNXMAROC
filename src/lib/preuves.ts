/* ─────────────────────────────────────────────────────────────────────
 * Les affirmations chiffrées du site, en un seul endroit.
 *
 * Pourquoi ce fichier existe : la promesse d'économie d'énergie apparaissait
 * sous trois valeurs différentes — 32 % sur la page d'accueil, 40 % dans un
 * titre d'article, 35 à 45 % dans deux liens. Un prospect qui lit la page
 * d'accueil ET l'article n'en conclut pas « c'est entre 32 et 45 % » : il en
 * conclut qu'on invente nos chiffres.
 *
 * Un chiffre qui vend doit être unique, répété à l'identique, et sourcé. Tant
 * qu'une valeur vit à deux endroits, elle finit par diverger.
 *
 * Une affirmation non sourcée est une affirmation publicitaire ; une
 * affirmation sourcée est une preuve. La différence se voit.
 * ───────────────────────────────────────────────────────────────────── */

/* Référence commune aux chiffres d'énergie. La norme européenne classe les
 * systèmes d'automatisation du bâtiment en quatre classes de performance
 * énergétique, D à A, et chiffre le gain obtenu en passant de l'une à
 * l'autre. C'est le seul cadre normatif qui quantifie l'apport de la
 * domotique — et il est public. */
export const SOURCE_ENERGIE = {
  norme: "EN ISO 52120-1",
  ancienNom: "ex-EN 15232",
  etude: "simulation FH Aachen University of Applied Sciences",
  note: "Gain modélisé pour le passage d'un bâtiment de classe C à classe A, par typologie. Étude menée sur un parc européen : à retenir comme ordre de grandeur, pas comme engagement contractuel.",
} as const;

export const CHIFFRES = {
  /* Économie d'énergie, par typologie de bâtiment.
   *
   * Les valeurs viennent de la simulation FH Aachen citée dans la
   * documentation de la KNX Association à l'appui de l'EN 15232 (aujourd'hui
   * EN ISO 52120-1). Elles portent sur la consommation totale du bâtiment,
   * pas sur le seul poste climatisation.
   *
   * Donner un chiffre par typologie plutôt qu'un chiffre unique sert deux
   * fins : c'est plus exact, et ça laisse chaque terrain — villa, hôtel,
   * bureaux — porter sa propre valeur au lieu d'une moyenne qui ne décrit
   * personne. */
  energie: {
    residentiel: { valeur: "27 %", court: "−27 % d'énergie" },
    hotellerie: { valeur: "25 %", court: "−25 % d'énergie" },
    bureaux: { valeur: "39 %", court: "−39 % d'énergie" },
    commerce: { valeur: "49 %", court: "−49 % d'énergie" },
    source: `${SOURCE_ENERGIE.norme} (${SOURCE_ENERGIE.ancienNom}), ${SOURCE_ENERGIE.etude}`,
  },

  /* Valeur générique, pour les endroits qui ne parlent pas d'un terrain en
   * particulier. On prend le résidentiel : c'est le plus bas des quatre après
   * l'hôtellerie, donc le moins contestable. */
  economieCvc: {
    valeur: "jusqu'à 27 %",
    /* Formulation courte pour les étiquettes et badges. */
    court: "−27 % d'énergie",
    source: `${SOURCE_ENERGIE.norme} (${SOURCE_ENERGIE.ancienNom}), ${SOURCE_ENERGIE.etude}`,
  },

  /* Durée de vie d'une installation. Défendable : KNX existe depuis 1990 et
   * des installations de la première génération fonctionnent encore. */
  perennite: {
    valeur: "30 ans et plus",
    court: "Pérennité 30 ans+",
    source: "Norme publiée en 1990, rétrocompatibilité garantie par la norme",
  },

  /* Nombre de fabricants certifiés. Chiffre public de la KNX Association. */
  fabricants: {
    valeur: "plus de 500 fabricants",
    court: "500+ fabricants",
    source: "KNX Association, chiffre public",
  },

  /* La norme elle-même. Vérifiable, non négociable. */
  norme: {
    valeur: "ISO/IEC 14543-3",
    court: "ISO/IEC 14543-3",
    source: "Norme internationale publiée",
  },
} as const;

/* ─────────────────────────────────────────────────────────────────────
 * Les références de projets.
 *
 * C'est le manque le plus coûteux du site. Pour un achat engagé sur la durée
 * du bâtiment, un prospect a besoin de se projeter — et il ne peut pas se
 * projeter dans une description de catégorie. Une seule étude de cas réelle
 * pèse plus que trois articles de blog.
 *
 * ── Comment ce fichier protège le site ──────────────────────────────
 *
 * Une entrée marquée `brouillon: true` est un gabarit de travail : elle sert
 * à voir la mise en page pendant le développement, et elle est retirée à la
 * compilation de production. Si toutes les entrées sont des brouillons, la
 * section entière disparaît du site publié.
 *
 * Ce n'est pas de la prudence excessive. L'argument central du site est la
 * pérennité et la reprise du dossier par n'importe quel intégrateur certifié
 * — autrement dit, la vérifiabilité. Un projet inventé démonté par un
 * prospect ou un confrère ne coûte pas une affaire : il coûte l'argument.
 *
 * Pour publier un projet : recopiez un gabarit, remplacez les valeurs par les
 * vôtres, et retirez la ligne `brouillon`. Anonymiser est acceptable
 * (« une villa à Souissi »), inventer ne l'est pas.
 * ───────────────────────────────────────────────────────────────────── */

export interface Reference {
  /* « Villa à Souissi, Rabat » — la ville compte, le nom du client est
   * facultatif. */
  intitule: string;
  /* Ce que le projet avait de particulier, en une phrase. */
  contexte: string;
  /* Les faits qui rendent le projet crédible : surface, nombre de points bus,
   * durée de chantier, lots intégrés. Trois à cinq maximum. */
  faits: { cle: string; valeur: string }[];
  /* Facultatif. Une phrase du maître d'ouvrage ou de l'architecte, avec son
   * accord. Une citation vraie et banale vaut mieux qu'une fausse et
   * enthousiaste. */
  citation?: { texte: string; auteur: string };
  /* Facultatif. Photo du chantier ou de la livraison. */
  image?: { src: string; alt: string };
  /* Gabarit de travail : visible en développement, retiré en production.
   * Retirez cette ligne quand le projet est réel et publiable. */
  brouillon?: boolean;
}

/* Les trois gabarits couvrent les trois terrains sur lesquels l'entreprise
 * communique, pour que la mise en page soit éprouvée sur des contenus de
 * longueurs différentes : un projet court sans citation, un projet long avec
 * citation, un projet à faits nombreux.
 *
 * Le ternaire sur import.meta.env.DEV n'est pas décoratif. À la compilation de
 * production, la condition devient littéralement `false` et le compilateur
 * supprime toute la branche : les textes n'existent pas dans le fichier
 * livré. Sans lui, les gabarits ne s'afficheraient pas mais resteraient
 * lisibles par qui ouvre le JavaScript du site — une donnée inventée qu'on ne
 * voit pas reste une donnée inventée qu'on publie. */
const GABARITS: Reference[] = import.meta.env.DEV
  ? [
      {
        brouillon: true,
        contexte:
          "Intégration décidée en phase études, avant tirage des gaines, en coordination avec l'architecte et le bureau d'études électricité. Le tableau divisionnaire a été dimensionné pour accueillir les modules dès l'origine.",
        faits: [
          { cle: "Surface", valeur: "820 m²" },
          { cle: "Points bus", valeur: "340" },
          { cle: "Lots intégrés", valeur: "Éclairage, stores, CVC, sécurité" },
          { cle: "Mise en service", valeur: "14 semaines" },
        ],
        image: {
          alt: "Armoire électrique KNX : modules de commande alignés sur rail DIN",
          src: "/assets/world/installation-poster.jpg",
        },
        intitule: "Villa à Souissi, Rabat",
      },
      {
        brouillon: true,
        citation: {
          auteur: "Directeur technique — à remplacer par une citation réelle et autorisée",
          texte:
            "La reprise chambre par chambre s'est faite sans fermer l'étage. C'est ce qui a emporté la décision.",
        },
        contexte:
          "Rénovation par tranches, étage par étage, sans interruption d'exploitation. Chaque chambre bascule sur le bus en une nuit ; la régulation de climatisation est asservie au contact de fenêtre et à la carte d'accès.",
        faits: [
          { cle: "Chambres", valeur: "72" },
          { cle: "Durée par étage", valeur: "3 semaines" },
          { cle: "Lots intégrés", valeur: "Éclairage, CVC, contrôle d'accès" },
        ],
        image: {
          alt: "Clavier de commande encastré dans un mur en béton, à l'étage d'un hôtel",
          src: "/assets/world/clavier-poster.jpg",
        },
        intitule: "Hôtel — reprise d'étage, Casablanca",
      },
      {
        brouillon: true,
        contexte:
          "Plateau de bureaux en open space avec cloisonnement évolutif. Le zonage de l'éclairage et de la climatisation se reprogramme depuis ETS à chaque réaménagement, sans toucher au câblage.",
        faits: [
          { cle: "Surface", valeur: "1 400 m²" },
          { cle: "Zones", valeur: "26, reconfigurables" },
          { cle: "Comptage", valeur: "Par circuit" },
          { cle: "Lots intégrés", valeur: "Éclairage DALI-2, CVC, stores" },
          { cle: "Mise en service", valeur: "9 semaines" },
        ],
        image: {
          alt: "Poste de programmation ETS affichant le plan d'une installation",
          src: "/assets/world/supervision-poster.jpg",
        },
        intitule: "Plateau tertiaire, Casablanca",
      },
    ]
  : [];

/* Vos projets réels. Recopiez la forme d'un gabarit ci-dessus, remplacez les
 * valeurs par les vôtres, et n'ajoutez pas la ligne `brouillon`. */
export const REFERENCES: Reference[] = [];

/* Ce que la section affiche. En développement, les gabarits complètent les
 * projets réels pour qu'on voie la mise en page ; en production, il ne reste
 * que le réel — et s'il n'y a rien de réel, la section entière disparaît. */
export const REFERENCES_PUBLIABLES: Reference[] = [...REFERENCES, ...GABARITS];
