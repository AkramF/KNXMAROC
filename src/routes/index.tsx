import { createFileRoute } from "@tanstack/react-router";

import { Halo } from "../components/lumiere/halo";
import { Lumiere } from "../lib/lumiere";
import {
  ScrollScrub,
  type ScrollScrubScene,
  type ScrollScrubTheme,
} from "../components/scroll-scrub/scroll-scrub";
import { Contact } from "../components/site/contact";
import { Faq } from "../components/site/faq";
import { Marques, Positionnement, SiteNav, Solutions } from "../components/site/sections";
import { Methode, Segments, SiteFooter } from "../components/site/segments";

export const Route = createFileRoute("/")({
  component: Index,
});

const THEME: ScrollScrubTheme = {
  accent: "#7FA8E8",
  background: "#0D1012",
  ink: "#F2F2EF",
  muted: "#9AA0A4",
};

const SCENES: ScrollScrubScene[] = [
  {
    body: "Intégration domotique sur-mesure pour villas et projets d'exception au Maroc. Norme mondiale ouverte filaire (ISO/IEC 14543-3), interconnectant les meilleures marques certifiées.",
    id: "seuil",
    kicker: "Standard ISO/IEC 14543-3",
    label: "Interrupteurs",
    mobileObjectPosition: "50% 50%",
    mobilePoster: "/assets/world/clavier-mobile-poster.webp",
    objectPosition: "92% 50%",
    poster: "/assets/world/clavier-poster.webp",
    scroll: 1.4,
    tags: ["Standard ISO/IEC 14543-3", "Bus filaire inviolable"],
    title: "KNX: Le protocole domotique absolu.",
  },
  {
    body: "Actionneurs Rail DIN, variateurs DALI-2 et passerelles CVC certifiés KNX interconnectés sur le bus filaire. Zéro batterie, zéro latence sans-fil, zéro point de panne unique.",
    id: "sejour",
    kicker: "Architecture Rail DIN · Équipements certifiés KNX",
    label: "Tableau",
    mobileObjectPosition: "50% 50%",
    mobilePoster: "/assets/world/sejour-mobile-poster.webp",
    objectPosition: "85% 50%",
    poster: "/assets/world/sejour-poster.webp",
    scroll: 1.3,
    tags: ["Actionneurs Rail DIN", "Passerelles CVC & DALI-2", "Pérennité 30+ ans"],
    title: "L'infrastructure filaire décentralisée.",
  },
  {
    align: "right",
    body: "Hypervision tactile sur écran mural et application smartphone locale. À la livraison, l'intégralité du projet vous est remise : vous restez 100 % maître et propriétaire de votre bâtiment.",
    id: "supervision",
    kicker: "Interface tactile & mobile · Contrôle local",
    label: "Hypervision",
    mobileObjectPosition: "50% 50%",
    mobilePoster: "/assets/world/supervision-mobile-poster.webp",
    objectPosition: "20% 50%",
    poster: "/assets/world/supervision-poster.webp",
    scroll: 1.5,
    tags: ["Interface tactile", "Contrôle local", "Indépendance totale"],
    title: "La maîtrise totale de votre bâtiment.",
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
          <Solutions />
          <Segments />
          <Methode />
          <Marques />
          <Faq />
          <Contact />
        </main>
        <SiteFooter />
      </div>
    </Lumiere>
  );
}
