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

/* Le sujet grammatical de chaque titre est le client ou sa maison — jamais le
 * protocole. Un maître d'ouvrage n'achète pas « un standard ouvert
 * décentralisé » : il achète de ne pas avoir à refaire, de ne dépendre de
 * personne, et une maison qui fonctionne sans qu'il y pense.
 *
 * La preuve technique n'est pas supprimée, elle est déplacée : elle passe du
 * titre au kicker et aux étiquettes, où elle rassure l'architecte et le bureau
 * d'études sans barrer la route au propriétaire. */
const SCENES: ScrollScrubScene[] = [
  {
    body: "KNX MAROC conçoit et met en service des installations pour les villas, hôtels et bâtiments tertiaires du Royaume. Une norme ouverte, une infrastructure filaire, un interlocuteur unique du plan à la mise en service.",
    id: "seuil",
    kicker: "Intégrateur KNX certifié · Rabat",
    label: "La maison",
    mobileObjectPosition: "50% 50%",
    mobilePoster: "/assets/world/clavier-mobile-poster.webp",
    objectPosition: "92% 50%",
    poster: "/assets/world/clavier-poster.webp",
    scroll: 1.4,
    tags: ["Norme ISO/IEC 14543-3", "Études et mise en service"],
    title: "Votre maison vous obéit.",
  },
  {
    /* Une négation — « ne tombe jamais en panne » — fait penser à la panne.
     * Une projection dans le temps engage l'acheteur sur l'horizon qui le
     * préoccupe vraiment : celui du bâtiment, pas celui de l'équipement. */
    body: "Chaque module porte sa propre intelligence : il n'existe aucune centrale dont la panne arrêterait la maison. Pas de pile à remplacer, pas de serveur distant qui ferme, pas d'application abandonnée par son éditeur. La norme est publiée depuis 1990 et reste rétrocompatible.",
    id: "sejour",
    kicker: "Architecture décentralisée · Ni pile, ni cloud",
    label: "L'infrastructure",
    mobileObjectPosition: "50% 50%",
    mobilePoster: "/assets/world/sejour-mobile-poster.webp",
    objectPosition: "85% 50%",
    poster: "/assets/world/sejour-poster.webp",
    scroll: 1.3,
    tags: ["Norme publiée en 1990", "Aucun point de panne unique", "Rétrocompatible"],
    title: "Elle sera encore là dans trente ans.",
  },
  {
    /* L'aveu qui rassure : une entreprise qui reconnaît qu'on peut se passer
     * d'elle inspire davantage confiance que celle qui se rend indispensable.
     * Et c'est vérifiable — le fichier ETS est effectivement remis. */
    align: "right",
    body: "À la réception, nous vous remettons le fichier de programmation de votre installation. N'importe quel intégrateur certifié, au Maroc ou ailleurs, peut la reprendre et la faire évoluer. Ce n'est pas une faveur commerciale : c'est ce que la norme impose, et c'est le seul engagement qui vous protège réellement.",
    id: "supervision",
    kicker: "Fichier ETS remis à la réception",
    label: "La maîtrise",
    mobileObjectPosition: "50% 50%",
    mobilePoster: "/assets/world/supervision-mobile-poster.webp",
    objectPosition: "20% 50%",
    poster: "/assets/world/supervision-poster.webp",
    scroll: 1.5,
    tags: ["Projet ETS remis", "Aucun verrouillage", "500+ fabricants compatibles"],
    title: "Vous pouvez nous remplacer. C'est prévu.",
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
