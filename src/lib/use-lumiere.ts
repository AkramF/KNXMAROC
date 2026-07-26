import { useContext } from "react";

import { ContexteLumiere } from "./contexte-lumiere";

/* Accès à la scène courante depuis n'importe quel composant sous <Lumiere>. */
export function useLumiere() {
  const valeur = useContext(ContexteLumiere);
  if (!valeur) throw new Error("useLumiere doit être appelé sous <Lumiere>");
  return valeur;
}
