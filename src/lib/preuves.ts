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
 * ⚠ À FAIRE — chaque valeur doit être rattachée à sa source avant mise en
 * ligne. Une affirmation non sourcée est une affirmation publicitaire ; une
 * affirmation sourcée est une preuve. La différence se voit.
 * ───────────────────────────────────────────────────────────────────── */

export const CHIFFRES = {
  /* Économie sur le poste climatisation / chauffage.
   *
   * SOURCE À CONFIRMER. La fourchette est plausible pour une régulation
   * multi-zones couplée à la détection d'ouvrants, mais tant qu'elle n'est
   * pas rattachée soit à un projet mesuré, soit à une publication de la KNX
   * Association, elle reste une estimation. Deux façons de la rendre
   * défendable :
   *   1. « mesuré sur [projet], saison [année] »
   *   2. « selon [étude], référence [lien] »
   */
  economieCvc: {
    valeur: "jusqu'à 30 %",
    /* Formulation courte pour les étiquettes et badges. */
    court: "−30 % de climatisation",
    source: "À sourcer avant mise en ligne",
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
 * Ce tableau est volontairement vide : la section ne s'affiche pas tant qu'il
 * l'est. Rien d'inventé ne peut donc partir en production par accident.
 *
 * Pour l'activer, ajoutez vos projets réels. Anonymiser est acceptable
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
}

export const REFERENCES: Reference[] = [
  /* Exemple de la forme attendue — à remplacer par un projet réel :
   *
   * {
   *   intitule: "Villa à Souissi, Rabat",
   *   contexte:
   *     "Intégration sur plan, avant tirage des gaines, en coordination avec
   *      l'architecte et le bureau d'études électricité.",
   *   faits: [
   *     { cle: "Surface", valeur: "820 m²" },
   *     { cle: "Points bus", valeur: "340" },
   *     { cle: "Lots intégrés", valeur: "Éclairage, stores, CVC, sécurité" },
   *     { cle: "Mise en service", valeur: "14 semaines" },
   *   ],
   * },
   */
];
