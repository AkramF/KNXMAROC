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
 * du parcours d'origine racontaient la même promesse que la première — huit
 * hauteurs d'écran et 16 Mo avant le premier argument commercial.
 *
 * Chaque scène porte un schéma de bus (voir schema-knx.tsx). Sans lui, ces
 * plans photoréalistes pourraient illustrer n'importe quelle annonce
 * immobilière : rien dans l'image ne dit KNX. Le schéma trace le câble au
 * rythme du scroll et rend visible ce que la copie affirme. */
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
    schema: "seuil",
    scroll: 1.4,
    tags: ["Rabat", "Partenaire KNX certifié", "Études et mise en service"],
    title: "La maison vous reconnaît.",
  },
  {
    /* Le plan montre des stores motorisés qui descendent sur une baie vitrée.
     * Le texte précédent parlait d'armoire électrique et de rail DIN, qui
     * n'apparaissent nulle part dans le clip : la copie décrit maintenant ce
     * que l'image donne réellement à voir. L'argument de rigueur technique
     * tient sa place dans la section Méthode. */
    body: "Les stores suivent la course du soleil, l'éclairage bascule en fin de journée, la climatisation s'arrête quand une baie s'ouvre. Le confort se règle une fois et tient.",
    clip: "/assets/world/scene-4.mp4",
    id: "sejour",
    label: "Séjour",
    mobileClip: "/assets/world/scene-4-mobile.mp4",
    mobilePoster: "/assets/world/scene-4-mobile-poster.jpg",
    poster: "/assets/world/scene-4-poster.jpg",
    schema: "sejour",
    scroll: 1.3,
    tags: ["Protection solaire", "Scènes horaires", "Consigne par zone"],
    title: "La lumière suit la vie.",
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
    schema: "supervision",
    scroll: 1.4,
    tags: ["Projet ETS remis", "Mesure par circuit", "Écran ou téléphone"],
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
