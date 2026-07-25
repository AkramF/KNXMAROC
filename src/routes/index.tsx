import { createFileRoute } from "@tanstack/react-router";

import { EtudeCta } from "../components/cta/etude-cta";
import {
  ScrollScrub,
  type ScrollScrubScene,
  type ScrollScrubTheme,
} from "../components/scroll-scrub/scroll-scrub";
import { Contact } from "../components/site/contact";
import { Marques, Positionnement, SiteNav, Solutions } from "../components/site/sections";
import { Methode, Segments, SiteFooter } from "../components/site/segments";

export const Route = createFileRoute("/")({
  component: Index,
});

const THEME: ScrollScrubTheme = {
  accent: "#2E4A7D",
  background: "#F2F2EF",
  ink: "#15181B",
  muted: "#5C6266",
};

/* Trois temps : la promesse, la preuve, la maîtrise. Les scènes intermédiaires
 * du parcours d'origine (le geste, le séjour) racontaient la même promesse que
 * la première — huit hauteurs d'écran et 16 Mo avant le premier argument
 * commercial. Le fondu enchaîné du composant absorbe la coupe entre le seuil et
 * le tableau. */
const SCENES: ScrollScrubScene[] = [
  {
    actions: <EtudeCta />,
    body: "KNX MAROC conçoit et met en service des installations KNX pour la villa, l'hôtel et le bâtiment tertiaire. Une norme ouverte, un seul bus, un interlocuteur unique.",
    clip: "/assets/world/scene-1.mp4",
    id: "seuil",
    kicker: "Intégrateur KNX au Maroc",
    label: "Seuil",
    mobileClip: "/assets/world/scene-1-mobile.mp4",
    mobilePoster: "/assets/world/scene-1-mobile-poster.jpg",
    poster: "/assets/world/scene-1-poster.jpg",
    scroll: 1.4,
    tags: ["Rabat", "Norme ouverte", "Études et mise en service"],
    title: "La maison vous reconnaît.",
  },
  {
    body: "Actionneurs sur rail DIN, repérage complet, schémas à jour. Une armoire lisible se dépanne en minutes et s'étend sans être refaite.",
    clip: "/assets/world/scene-4.mp4",
    id: "tableau",
    label: "Tableau",
    mobileClip: "/assets/world/scene-4-mobile.mp4",
    mobilePoster: "/assets/world/scene-4-mobile-poster.jpg",
    poster: "/assets/world/scene-4-poster.jpg",
    scroll: 1.3,
    tags: ["Rail DIN", "Repérage", "Schémas remis"],
    title: "Derrière le calme, la rigueur.",
  },
  {
    actions: <EtudeCta />,
    align: "right",
    body: "États, consommations, alarmes : tout est visible sur un écran mural ou depuis un téléphone. Le projet ETS vous est remis, vous restez propriétaire de votre installation.",
    clip: "/assets/world/scene-5.mp4",
    id: "supervision",
    label: "Supervision",
    mobileClip: "/assets/world/scene-5-mobile.mp4",
    mobilePoster: "/assets/world/scene-5-mobile-poster.jpg",
    poster: "/assets/world/scene-5-poster.jpg",
    scroll: 1.4,
    title: "Tout se pilote, tout se prouve.",
  },
];

function Index() {
  return (
    <>
      <a className="saut-contenu" href="#positionnement">
        Aller au contenu
      </a>
      <SiteNav />
      <main id="contenu">
        <ScrollScrub scenes={SCENES} theme={THEME} />
        <Positionnement />
        <Solutions />
        <Segments />
        <Methode />
        <Marques />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}
