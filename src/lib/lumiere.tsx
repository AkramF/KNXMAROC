import { createContext, useCallback, useEffect, useMemo, useState, type ReactNode } from "react";

import { ContexteLumiere } from "./contexte-lumiere";
import { SCENES, type SceneId } from "./scenes";

/* ─────────────────────────────────────────────────────────────────────
 * Le système de lumière.
 *
 * Le site ne décrit pas la domotique, il la fait fonctionner. Une scène
 * courante — matin, journée, soirée, nuit — pilote la température et
 * l'intensité de la lumière de toute la page, exactement comme un clavier
 * KNX pilote une villa. Le visiteur peut en changer ; c'est la démonstration
 * la plus courte qu'on puisse faire du métier.
 *
 * Tout passe par des variables CSS posées sur <html>. Aucune règle Tailwind
 * n'est recalculée, aucun composant ne se remonte : le navigateur interpole
 * des couleurs, ce qu'il fait sur le compositeur.
 * ───────────────────────────────────────────────────────────────────── */

const SCENE_PAR_DEFAUT: SceneId = "soiree";

export function Lumiere({ children }: { children: ReactNode }) {
  const [id, setId] = useState<SceneId>(SCENE_PAR_DEFAUT);
  const [automatique, setAutomatique] = useState(true);

  const scene = useMemo(() => SCENES.find((s) => s.id === id) ?? SCENES[2], [id]);

  const choisir = useCallback((prochaine: SceneId) => {
    setAutomatique(false);
    setId(prochaine);
  }, []);

  /* Cycle libre : la maison passe d'une scène à l'autre toute seule tant que
   * personne n'a pris la main. Elle s'arrête à la première interaction — une
   * installation qui continuerait de changer sous les doigts du visiteur
   * donnerait l'impression d'être cassée. */
  useEffect(() => {
    if (!automatique) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const minuterie = window.setInterval(() => {
      setId((courante) => {
        const index = SCENES.findIndex((s) => s.id === courante);
        return SCENES[(index + 1) % SCENES.length].id;
      });
    }, 7000);

    return () => window.clearInterval(minuterie);
  }, [automatique]);

  /* Les variables vivent sur <html> : toute la page, y compris les portails
   * et le fond du navigateur, hérite de la scène courante. */
  useEffect(() => {
    const racine = document.documentElement;
    racine.style.setProperty("--lueur", scene.lueur);
    racine.style.setProperty("--scene-fond", scene.fond);
    racine.style.setProperty("--scene-surface", scene.surface);
    racine.style.setProperty("--scene-intensite", String(scene.intensite));
    racine.style.setProperty("--scene-hauteur", `${scene.hauteur}%`);
    racine.dataset.scene = scene.id;
  }, [scene]);

  const valeur = useMemo(() => ({ scene, choisir, automatique }), [scene, choisir, automatique]);

  return <ContexteLumiere.Provider value={valeur}>{children}</ContexteLumiere.Provider>;
}
