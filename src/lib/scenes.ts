export type SceneId = "matin" | "journee" | "soiree" | "nuit";

export interface Scene {
  id: SceneId;
  label: string;
  heure: string;
  /* Ce que la maison fait à ce moment-là — la phrase change avec la scène. */
  recit: string;
  /* Teinte de la lumière artificielle : Bleu de plan (Blueprint Blue) #7FA8E8. */
  lueur: string;
  /* Fond de la pièce. La nuit est plus profonde que le soir. */
  fond: string;
  /* Surface soulevée, dérivée du fond mais jamais identique. */
  surface: string;
  /* Intensité du halo, 0 → 1. */
  intensite: number;
  /* Position verticale de la source, en pourcentage. */
  hauteur: number;
}

export const SCENES: Scene[] = [
  {
    id: "matin",
    label: "Matin",
    heure: "07:00",
    recit: "Les stores s'ouvrent d'un quart, le chauffage a devancé le réveil.",
    lueur: "#8FB6F0",
    fond: "#0E1216",
    surface: "#171C21",
    intensite: 0.5,
    hauteur: 22,
  },
  {
    id: "journee",
    label: "Journée",
    heure: "13:00",
    recit: "Personne dans la pièce : la climatisation se met en veille, seule.",
    lueur: "#A8C4E8",
    fond: "#121619",
    surface: "#1B2126",
    intensite: 0.28,
    hauteur: 8,
  },
  {
    id: "soiree",
    label: "Soirée",
    heure: "20:00",
    recit: "Une pression sur le clavier : lumière basse, stores fermés, musique.",
    lueur: "#7FA8E8", // Maintien strict du Bleu de Plan (pas d'orange)
    fond: "#0D1012",
    surface: "#161A1D",
    intensite: 0.75,
    hauteur: 38,
  },
  {
    id: "nuit",
    label: "Nuit",
    heure: "23:30",
    recit: "Tout s'éteint sauf le balisage du couloir. L'alarme s'arme seule.",
    lueur: "#5B86D6",
    fond: "#07090B",
    surface: "#0F1315",
    intensite: 0.34,
    hauteur: 62,
  },
];
