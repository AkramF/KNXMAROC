import { createFileRoute } from "@tanstack/react-router";

import { Halo } from "../components/lumiere/halo";
import { Lumiere } from "../lib/lumiere";
import {
  ScrollScrub,
  type ScrollScrubScene,
  type ScrollScrubTheme,
} from "../components/scroll-scrub/scroll-scrub";
import { Clavier } from "../components/site/clavier";
import { Contact } from "../components/site/contact";
import { Faq } from "../components/site/faq";
import { References } from "../components/site/references";
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

/* Trois phrases nominales parallèles : un bâtiment, une installation, un
 * projet. La construction fait entendre un triptyque composé plutôt que trois
 * slogans juxtaposés — et sur ce marché, la retenue signale la confiance là où
 * l'affirmation signale le besoin de convaincre.
 *
 * « Bâtiment » et non « maison » : le résidentiel n'est qu'un des quatre
 * terrains. Un directeur d'hôtel qui lit « votre maison » comprend qu'on ne
 * parle pas de lui.
 *
 * La preuve technique n'est pas supprimée, elle est déplacée du titre vers le
 * kicker et les étiquettes, où elle rassure l'architecte et le bureau d'études
 * sans barrer la route au maître d'ouvrage. */
const SCENES: ScrollScrubScene[] = [
  {
    body: "Villas, hôtels, bureaux, points de vente : KNX MAROC conçoit, programme et met en service des installations domotiques dans tout le Royaume. Une norme ouverte, une infrastructure filaire, un interlocuteur unique du plan à la réception.",
    id: "seuil",
    kicker: "Intégrateur KNX certifié · Rabat",
    label: "Le bâtiment",
    mobileObjectPosition: "50% 50%",
    mobilePoster: "/assets/world/clavier-mobile-poster.webp",
    objectPosition: "92% 50%",
    poster: "/assets/world/clavier-poster.webp",
    scroll: 1.4,
    tags: ["Résidentiel, hôtellerie, tertiaire", "Norme ISO/IEC 14543-3"],
    title: "Un bâtiment qui répond.",
  },
  {
    /* « Qui ne se refait pas » dit la pérennité sans annoncer un nombre
     * d'années que personne ne peut vérifier. La preuve chiffrée descend dans
     * le corps, où elle est vérifiable au lieu d'être clamée. */
    body: "Chaque module porte sa propre intelligence : aucune centrale dont la panne arrêterait le bâtiment. Pas de pile à remplacer, pas de serveur distant qui ferme, pas d'application abandonnée par son éditeur. La norme est publiée depuis 1990 et reste rétrocompatible.",
    id: "sejour",
    kicker: "Architecture décentralisée · Ni pile, ni cloud",
    label: "L'installation",
    mobileObjectPosition: "50% 50%",
    mobilePoster: "/assets/world/sejour-mobile-poster.webp",
    objectPosition: "85% 50%",
    poster: "/assets/world/sejour-poster.webp",
    scroll: 1.3,
    tags: ["Norme publiée en 1990", "Aucun point de panne unique", "Rétrocompatible"],
    title: "Une installation qui ne se refait pas.",
  },
  {
    /* La version retenue de l'aveu. « Vous pouvez nous remplacer » disait la
     * même chose mais sur le ton du slogan ; ici la phrase énonce un fait et
     * laisse le corps en tirer la conséquence. Le lecteur conclut lui-même
     * qu'il n'est prisonnier de personne — une conclusion qu'on tire soi-même
     * résiste mieux qu'une affirmation qu'on reçoit. */
    align: "right",
    body: "À la réception, le fichier de programmation de votre installation vous est remis. N'importe quel intégrateur certifié, au Maroc ou ailleurs, peut la reprendre et la faire évoluer. Ce n'est pas une faveur commerciale : c'est ce que la norme impose.",
    id: "supervision",
    kicker: "Fichier ETS remis à la réception",
    label: "Le projet",
    mobileObjectPosition: "50% 50%",
    mobilePoster: "/assets/world/supervision-mobile-poster.webp",
    objectPosition: "20% 50%",
    poster: "/assets/world/supervision-poster.webp",
    scroll: 1.5,
    tags: ["Projet ETS remis", "Aucun verrouillage", "500+ fabricants compatibles"],
    title: "Un projet qui vous appartient.",
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
          {/* Le clavier arrive tôt : la démonstration doit précéder le
           * catalogue. Un visiteur qui a actionné la maison lit la suite
           * autrement — il a commencé à se l'approprier. */}
          <Clavier />
          <Solutions />
          <Segments />
          {/* Les réalisations se placent après les capacités et avant la
           * méthode : « voilà ce qu'on sait faire, voilà ce qu'on a fait,
           * voilà comment ça se passe ». La preuve arrive au moment où le
           * doute apparaît. Section masquée tant qu'aucun projet réel n'est
           * renseigné — voir src/lib/preuves.ts. */}
          <References />
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
