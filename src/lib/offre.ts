/* ─────────────────────────────────────────────────────────────────────
 * L'offre d'entrée, en un seul endroit.
 *
 * Même raison d'être que preuves.ts, appliquée aux promesses plutôt qu'aux
 * chiffres. Avant ce fichier, le site proposait « Demander une étude » dans
 * la barre de navigation, « Demander une étude » recopié en dur dans le menu
 * mobile, « Demander une étude » recopié en dur sur le blog, et
 * « Contactez-nous » au bas des articles. Le délai promis, lui, valait
 * « deux jours ouvrés » à trois endroits et « 24h ouvrées » à un quatrième.
 *
 * Un prospect qui parcourt trois pages n'en conclut pas qu'on est approximatif
 * sur la mise en forme. Il en conclut qu'on est approximatif.
 *
 * ── Pourquoi ces mots-là ────────────────────────────────────────────
 *
 * « Demander une étude » posait trois problèmes que l'analyse marketing a
 * nommés. « Demander » met la charge sur le visiteur : il sollicite, et rien
 * ne lui est donné avant qu'on lui demande quelque chose. « Une étude » est
 * une boîte noire — gratuite ou payante, en combien de temps, pour recevoir
 * quoi. Et c'était la marche haute, pas la première : le seul geste possible
 * engageait une conversation commerciale.
 *
 * L'offre existait pourtant déjà, enterrée dans la section Contact : envoyez
 * les plans, on renvoie un schéma de principe et un ordre de grandeur
 * budgétaire. Le bouton n'en portait rien. Il le porte maintenant.
 * ───────────────────────────────────────────────────────────────────── */

/* Nomme ce qu'on attend du visiteur — un plan — plutôt qu'un livrable
 * abstrait. Au passage, ça qualifie : qui n'a pas encore de plans est trop tôt
 * dans son projet, et le comprend sans qu'on ait à le lui dire. */
export const LABEL_ETUDE = "Étudier mes plans";

/* Le bouton de soumission est un autre moment : il conclut quelqu'un qui vient
 * de remplir huit champs, il ne l'invite plus. Un seul libellé pour les deux
 * obligeait l'un des cas à sonner faux. */
export const LABEL_ENVOI = "Envoyer ma demande";

/* Les trois réserves qui font tomber l'objection, dans l'ordre où elle se
 * pose : combien de temps, combien ça coûte, et ce qu'il m'en reste si je ne
 * donne pas suite. La dernière est la plus importante — c'est elle qui
 * transforme une prise de contact en service rendu.
 *
 * La gratuité ne dévalue pas ici parce que le travail humain reste visible :
 * un plan lu et annoté à la main ne peut pas passer pour un automatisme. Ce
 * serait un tout autre signal pour un document téléchargeable.
 *
 * « Deux jours ouvrés » plutôt que « 48 h » : le site promettait déjà les
 * deux, et 48 h englobe le week-end. Une promesse de délai qu'on tient vaut
 * mieux qu'une qui claque. */
export const DELAI_REPONSE = "deux jours ouvrés";

export const MENTION_ETUDE = [
  `Réponse sous ${DELAI_REPONSE}`,
  "Gratuit",
  "Vous gardez le document",
];
