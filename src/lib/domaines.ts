import type { SceneId } from "./scenes";

/* Les six domaines du bus, et ce que chacun fait à chaque heure.
 *
 * Ces états ne sont pas décoratifs : ce sont les valeurs qu'un intégrateur
 * programme réellement dans ETS. Une consigne réduite chambre vide, des lames
 * à 45° en anti-éblouissement, un balisage à 5 % la nuit — c'est le contenu
 * d'un cahier des charges, pas un argument marketing.
 *
 * En les affichant, la section cesse de décrire six catégories et se met à
 * montrer une installation en fonctionnement. */

export interface Domaine {
  id: string;
  label: string;
  body: string;
  /* Ce que l'intégrateur programme dans ce domaine — le détail technique qui
   * distingue une étude d'une liste de matériel. */
  livrables: string[];
  /* L'état du domaine dans chaque scène. */
  etats: Record<SceneId, string>;
}

export const DOMAINES: Domaine[] = [
  {
    id: "eclairage",
    label: "Éclairage",
    body: "Circuits variés ou commutés, scènes par pièce, détection de présence, gestion de la lumière du jour.",
    livrables: ["Scènes par pièce", "Gradation 1–100 %", "Détection de présence"],
    etats: {
      matin: "Levée progressive · 40 %",
      journee: "Éteint · lumière du jour suffisante",
      soiree: "Scène Soirée · 35 %",
      nuit: "Balisage couloir · 5 %",
    },
  },
  {
    id: "stores",
    label: "Stores et volets",
    body: "Position et angle des lames, protection solaire suivant la course du soleil, sécurité vent et pluie.",
    livrables: ["Position et angle", "Suivi solaire", "Sécurité vent et pluie"],
    etats: {
      matin: "Ouverts au quart",
      journee: "Lames à 45° · anti-éblouissement",
      soiree: "Fermés",
      nuit: "Fermés · verrouillés",
    },
  },
  {
    id: "cvc",
    label: "Chauffage et climatisation",
    body: "Régulation par zone, consigne liée à l'occupation, coordination avec les ouvrants.",
    livrables: ["Régulation par zone", "Consigne sur occupation", "Coupure si baie ouverte"],
    etats: {
      matin: "Consigne 21 °C · relance anticipée",
      journee: "Réduit 19 °C · zone inoccupée",
      soiree: "Consigne 22 °C",
      nuit: "Régime nuit · 18 °C",
    },
  },
  {
    id: "securite",
    label: "Sécurité et accès",
    body: "Intrusion, contrôle d'accès, simulation de présence, scénarios d'alerte reliés à l'éclairage.",
    livrables: ["Intrusion et accès", "Simulation de présence", "Alerte reliée à l'éclairage"],
    etats: {
      matin: "Désarmée",
      journee: "Périmètre armé",
      soiree: "Désarmée",
      nuit: "Armement total · temporisé",
    },
  },
  {
    id: "audio",
    label: "Audio multiroom",
    body: "Sources par zone, appels de scène depuis les claviers muraux, intégration des amplificateurs.",
    livrables: ["Sources par zone", "Appel depuis le clavier", "Intégration amplificateurs"],
    etats: {
      matin: "Cuisine · radio · 18 %",
      journee: "Éteint",
      soiree: "Séjour · 28 %",
      nuit: "Éteint",
    },
  },
  {
    id: "supervision",
    label: "Hypervision",
    body: "Écran mural, application, journal des états, mesure des consommations par circuit.",
    livrables: ["Écran mural et application", "Journal des états", "Comptage par circuit"],
    etats: {
      matin: "3 zones actives",
      journee: "1 zone active",
      soiree: "5 zones actives",
      nuit: "Veille · 1 zone",
    },
  },
];
