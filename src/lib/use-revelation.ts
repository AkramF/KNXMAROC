import { useEffect, useRef } from "react";

/* Révélation au scroll, en un seul endroit.
 *
 * Le contenu est rendu visible par défaut : c'est le script qui le masque au
 * montage, puis le révèle à l'entrée dans le viewport. Si JavaScript ne
 * s'exécute pas — bloqué, en erreur, ou pendant le rendu serveur — la page
 * reste entièrement lisible. L'inverse (masquer en CSS et révéler en JS) fait
 * disparaître le site quand le script échoue.
 *
 * L'observateur se déconnecte après le premier passage : une section qui
 * rejoue son entrée à chaque aller-retour de scroll finit par agacer.
 */
export function useRevelation<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T>(null);

  useEffect(() => {
    const noeud = ref.current;
    if (!noeud) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const cibles = [
      ...(noeud.matches(".revelation") ? [noeud] : []),
      ...noeud.querySelectorAll<HTMLElement>(".revelation"),
    ];
    if (cibles.length === 0) return;

    for (const cible of cibles) cible.dataset.vu = "non";

    const observateur = new IntersectionObserver(
      (entrees) => {
        for (const entree of entrees) {
          if (!entree.isIntersecting) continue;
          (entree.target as HTMLElement).dataset.vu = "oui";
          observateur.unobserve(entree.target);
        }
      },
      /* Déclenchement un peu avant le bord bas : le bloc a fini son
       * mouvement quand le lecteur arrive dessus, au lieu de bouger sous
       * ses yeux. */
      { rootMargin: "0px 0px -12% 0px", threshold: 0.05 },
    );

    for (const cible of cibles) observateur.observe(cible);
    return () => observateur.disconnect();
  }, []);

  return ref;
}
