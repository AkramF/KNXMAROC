/* Source unique des coordonnées. Tout affichage de téléphone, d'e-mail ou
 * d'adresse sur le site lit ici. */

export const COORDONNEES = {
  telephone: {
    /* Format E.164 pour href="tel:", sans espace ni signe de ponctuation. */
    lien: "+212663666627",
    /* Format lisible, groupé à la marocaine. */
    affichage: "+212 663 66 66 27",
  },
  email: "contact@knxmaroc.ma",
  adresse: {
    rue: "2 Place Aboubaker Essadiq",
    quartier: "Agdal",
    ville: "Rabat",
    pays: "Maroc",
    codePays: "MA",
  },
} as const;

export const RESEAUX_SOCIAUX = {
  linkedin: "https://www.linkedin.com/company/knxmaroc",
  instagram: "https://www.instagram.com/knxmaroc",
  whatsapp: "https://wa.me/212663666627",
} as const;

export const ADRESSE_UNE_LIGNE = `${COORDONNEES.adresse.rue}, ${COORDONNEES.adresse.quartier}, ${COORDONNEES.adresse.ville}`;

export const LIEN_TELEPHONE = `tel:${COORDONNEES.telephone.lien}`;
export const LIEN_EMAIL = `mailto:${COORDONNEES.email}`;
export const LIEN_WHATSAPP = `https://wa.me/212663666627`;
