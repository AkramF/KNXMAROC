import { createFileRoute } from "@tanstack/react-router";

import { Lumiere } from "../lib/lumiere";
import { EtudeCta } from "../components/cta/etude-cta";
import { Halo } from "../components/lumiere/halo";
import {
  ScrollScrub,
  type ScrollScrubScene,
  type ScrollScrubTheme,
} from "../components/scroll-scrub/scroll-scrub";
import { Clavier } from "../components/site/clavier";
import { Contact } from "../components/site/contact";
import { Marques, Positionnement, SiteNav, Solutions } from "../components/site/sections";
import { Methode, Segments, SiteFooter } from "../components/site/segments";

export const Route = createFileRoute("/")({
  component: Index,
});

/* Le héros emprunte ses couleurs au système de lumière : quand la scène
 * change, la cinématique change avec elle. */
const THEME: ScrollScrubTheme = {
  accent: "var(--lueur, #7FA8E8)",
  background: "var(--scene-fond, #0D1012)",
  ink: "#F2F2EF",
  muted: "#9AA0A4",
};

/* Deux temps : ce que la maison fait, ce que vous en gardez. Le parcours
 * d'origine en comptait cinq — huit hauteurs d'écran et 16 Mo avant le
 * premier argument commercial.
 *
 * Une troisième scène en ouverture (macro d'un clavier mural) est générée
 * mais pas encore déposée dans public/assets/world/. Elle s'insérera ici. */
const SCENES: ScrollScrubScene[] = [
  {
    actions: <EtudeCta />,
    body: "KNX MAROC conçoit et met en service des installations KNX pour la villa, l'hôtel et le bâtiment tertiaire. Les stores suivent la course du soleil, l'éclairage bascule en fin de journée, la climatisation s'arrête quand une baie s'ouvre.",
    clip: "/assets/world/sejour.mp4",
    id: "seuil",
    kicker: "Intégrateur KNX au Maroc",
    label: "Séjour",
    mobileClip: "/assets/world/sejour-mobile.mp4",
    mobilePoster: "/assets/world/sejour-mobile-poster.jpg",
    poster: "/assets/world/sejour-poster.jpg",
    scroll: 1.4,
    tags: ["Rabat", "Partenaire KNX certifié", "Études et mise en service"],
    title: "La lumière suit la vie.",
  },
  {
    actions: <EtudeCta />,
    align: "right",
    body: "États, consommations, alarmes : tout est visible sur un écran mural ou depuis un téléphone. Le projet ETS vous est remis, vous restez propriétaire de votre installation.",
    clip: "/assets/world/supervision.mp4",
    id: "supervision",
    label: "Supervision",
    mobileClip: "/assets/world/supervision-mobile.mp4",
    mobilePoster: "/assets/world/supervision-mobile-poster.jpg",
    poster: "/assets/world/supervision-poster.jpg",
    scroll: 1.5,
    tags: ["Projet ETS remis", "Mesure par circuit", "Écran ou téléphone"],
    title: "Tout se pilote, tout se prouve.",
  },
];

function Index() {
  return (
    <Lumiere>
      <a className="saut-contenu" href="#positionnement">
        Aller au contenu
      </a>

      {/* La source de lumière de la page, derrière tout le reste. */}
      <Halo />

      <div className="au-dessus">
        <SiteNav />
        <main id="contenu">
          <ScrollScrub scenes={SCENES} theme={THEME} />
          <Positionnement />
          {/* Le clavier arrive tôt : c'est la démonstration, elle doit
           * précéder le catalogue de ce qu'on sait faire. */}
          <Clavier />
          <Solutions />
          <Segments />
          <Methode />
          <Marques />
          <Contact />
        </main>
        <SiteFooter />
      </div>
    </Lumiere>
  );
}
