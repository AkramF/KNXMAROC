import { createContext } from "react";

import type { Scene, SceneId } from "./scenes";

export interface EtatLumiere {
  scene: Scene;
  choisir: (id: SceneId) => void;
  /* Vrai tant que le visiteur n'a rien choisi : la maison tourne alors sur
   * son propre cycle, comme une installation laissée à sa programmation. */
  automatique: boolean;
}

export const ContexteLumiere = createContext<EtatLumiere | null>(null);
