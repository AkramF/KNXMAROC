import { useEffect, useRef } from "react";

/* ─────────────────────────────────────────────────────────────────────
 * Le halo.
 *
 * Une source de lumière posée derrière toute la page, dont la couleur et
 * l'intensité suivent la scène courante. Elle respire — un cycle lent, à
 * peine perceptible, calé sur un rythme respiratoire humain plutôt que sur
 * une valeur ronde de designer. Et elle suit le curseur, comme une lampe
 * qu'on déplacerait dans une pièce.
 *
 * Rendu en position fixe et en dessous de tout : aucun élément de contenu
 * n'a besoin de la connaître. Les seules propriétés animées sont des
 * transformations et des opacités, donc rien ne relayout.
 * ───────────────────────────────────────────────────────────────────── */

export function Halo() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const noeud = ref.current;
    if (!noeud) return;
    if (window.matchMedia("(hover: none)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    /* La lumière ne saute pas au curseur : elle le rattrape. Un ressort
     * amorti donne une masse à la source, sinon le halo colle au pointeur et
     * ressemble à un effet de survol. */
    let cibleX = window.innerWidth / 2;
    let cibleY = window.innerHeight * 0.35;
    let x = cibleX;
    let y = cibleY;
    let frame = 0;

    const surSouris = (event: PointerEvent) => {
      cibleX = event.clientX;
      cibleY = event.clientY;
    };

    const tick = () => {
      x += (cibleX - x) * 0.045;
      y += (cibleY - y) * 0.045;
      noeud.style.setProperty("--halo-x", `${x}px`);
      noeud.style.setProperty("--halo-y", `${y}px`);
      frame = window.requestAnimationFrame(tick);
    };

    window.addEventListener("pointermove", surSouris, { passive: true });
    frame = window.requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("pointermove", surSouris);
      window.cancelAnimationFrame(frame);
    };
  }, []);

  return <div aria-hidden="true" className="halo" ref={ref} />;
}
