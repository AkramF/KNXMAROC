import { useEffect, useRef, type ElementType } from "react";

/* Titre révélé mot à mot.
 *
 * Chaque mot est enfermé dans un masque et remonte depuis dessous, décalé de
 * quelques dizaines de millisecondes sur le précédent. L'effet lit comme une
 * lumière qui balaie une surface plutôt que comme une animation d'entrée.
 *
 * Le texte est présent dans le DOM en un seul morceau lisible : les masques
 * n'ajoutent que des <span>, donc la sélection, la recherche dans la page et
 * les lecteurs d'écran voient une phrase normale. */
export function TitreRevele({
  texte,
  as: Balise = "h2",
  className,
  delaiBase = 0,
}: {
  texte: string;
  as?: ElementType;
  className?: string;
  delaiBase?: number;
}) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const noeud = ref.current;
    if (!noeud) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const mots = [...noeud.querySelectorAll<HTMLElement>(".mot")];
    for (const mot of mots) mot.dataset.vu = "non";

    const observateur = new IntersectionObserver(
      (entrees) => {
        for (const entree of entrees) {
          if (!entree.isIntersecting) continue;
          for (const mot of mots) delete mot.dataset.vu;
          observateur.disconnect();
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.1 },
    );

    observateur.observe(noeud);
    return () => observateur.disconnect();
  }, []);

  /* Les sauts de ligne explicites du texte sont conservés : ils font partie
   * de la composition du titre, pas du hasard du rendu. */
  const lignes = texte.split("\n");
  let compteur = 0;

  return (
    <Balise className={className} ref={ref}>
      {lignes.map((ligne, indexLigne) => (
        <span className="block" key={indexLigne}>
          {ligne.split(" ").map((mot, indexMot, tousMots) => {
            const delai = delaiBase + compteur * 55;
            compteur += 1;
            return (
              <span key={`${indexLigne}-${indexMot}`}>
                <span className="mot">
                  <span style={{ "--mot-delai": `${delai}ms` } as React.CSSProperties}>{mot}</span>
                </span>
                {indexMot < tousMots.length - 1 ? " " : null}
              </span>
            );
          })}
        </span>
      ))}
    </Balise>
  );
}
