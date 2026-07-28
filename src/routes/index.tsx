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
/* ── Cadrage et lisibilité ────────────────────────────────────────────
 *
 * Une remarque qui vaut pour les trois scènes : les posters sont en 16/10
 * (1920×1200). Sur tout écran d'ordinateur au moins aussi large en
 * proportion — 16/10 comme 16/9 — `object-fit: cover` ajuste la largeur et
 * ne rogne donc que la hauteur. La composante horizontale d'objectPosition
 * n'a alors aucun effet : les anciennes valeurs (92 %, 85 %, 20 %) ne
 * faisaient rien. Elles sont ramenées à 50 %, et seule la verticale est
 * réglée. Sur mobile, c'est l'inverse : mobileObjectPosition compte, et
 * beaucoup.
 *
 * Contraste du corps de texte mesuré sur le rendu composite (recadrage +
 * filtre CSS + vignette), pire cas sur six définitions d'écran en desktop et
 * trois en mobile. Seuil AA : 4,5:1 pour le texte, 3:1 pour les grands titres.
 *
 *   Scène 1   4,32:1 → 6,65:1   image remplacée, sans voile
 *   Scène 2   3,20:1 → 6,59:1   image remplacée, sans voile
 *   Scène 3   6,50:1 → 7,12:1   image remplacée, voile mobile 0,40
 *
 * La leçon mérite d'être retenue avant de changer une image : un plan produit
 * cadre son sujet au centre, un héros a besoin d'un tiers vide. Aucun voile ne
 * rattrape une photo composée sans réserve — l'ancienne scène 2 plafonnait à
 * 3,55:1 même poussée à 0,35, les trois nouvelles dépassent 6,5:1 sans rien.
 * Ça se règle au cadrage, pas en CSS.
 *
 * Les trois images sont du même bâtiment, de la même nuit, sous la même
 * lumière bleu-blanc : le mur qu'on touche, l'armoire derrière le mur, le
 * fichier qui décrit l'ensemble. */
const SCENES: ScrollScrubScene[] = [
  {
    body: "Villas, hôtels, bureaux, points de vente : KNX MAROC conçoit, programme et met en service des installations domotiques dans tout le Royaume. Une norme ouverte, une infrastructure filaire, un interlocuteur unique du plan à la réception.",
    id: "seuil",
    kicker: "Intégrateur KNX certifié · Rabat",
    label: "Le bâtiment",
    mobileObjectPosition: "50% 50%",
    mobilePoster: "/assets/world/clavier-mobile-poster.webp",
    objectPosition: "50% 50%",
    poster: "/assets/world/clavier-poster.webp",
    scroll: 1.4,
    tags: ["Résidentiel, hôtellerie, tertiaire", "Norme ISO/IEC 14543-3"],
    title: "Un bâtiment qui répond.",
    /* Clavier encastré dans le béton, tiers droit, couloir qui fuit derrière :
     * un étage d'hôtel ou un plateau de bureaux, pas un salon. L'appareillage
     * doré précédent était chaud alors que la palette est strictement le Bleu
     * de Plan, et son sujet centré obligeait à voiler. Corps à 6,65:1. */
  },
  {
    /* « Qui ne se refait pas » dit la pérennité sans annoncer un nombre
     * d'années que personne ne peut vérifier. La preuve chiffrée descend dans
     * le corps, où elle est vérifiable au lieu d'être clamée. */
    body: "Chaque module porte sa propre intelligence : aucune centrale dont la panne arrêterait le bâtiment. Pas de pile à remplacer, pas de serveur distant qui ferme, pas d'application abandonnée par son éditeur. La norme est publiée depuis 1990 et reste rétrocompatible.",
    /* « sejour » — séjour, salon — était un reste de la version où cette scène
     * montrait une pièce de vie. Elle parle maintenant de l'installation. */
    id: "installation",
    kicker: "Architecture décentralisée · Ni pile, ni cloud",
    label: "L'installation",
    mobileObjectPosition: "50% 50%",
    mobilePoster: "/assets/world/installation-mobile-poster.webp",
    objectPosition: "50% 50%",
    poster: "/assets/world/installation-poster.webp",
    scroll: 1.3,
    tags: ["Norme publiée en 1990", "Aucun point de panne unique", "Rétrocompatible"],
    title: "Une installation qui ne se refait pas.",
    /* Image composée pour porter du texte, à l'inverse d'un plan catalogue :
     * l'armoire occupe le tiers droit, la moitié gauche reste dans le noir.
     * Le contraste est réglé à la prise de vue et non rattrapé au voile — d'où
     * 0 ici, alors que la version précédente plafonnait à 3,55:1 même poussée
     * à 0,35. Corps mesuré à 6,64:1. */
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
    objectPosition: "50% 50%",
    poster: "/assets/world/supervision-poster.webp",
    scroll: 1.5,
    tags: ["Projet ETS remis", "Aucun verrouillage", "500+ fabricants compatibles"],
    title: "Un projet qui vous appartient.",
    /* Composition en miroir des deux autres : le sujet passe à gauche puisque
     * la copie est alignée à droite. Un plan en traits fins, sans interface ni
     * main — l'image précédente montrait une interface illisible et deux
     * lampes orange.
     *
     * Seule scène à garder un voile, et seulement pour le mobile : la copie y
     * descend sur la moitié basse de l'écran, là où se trouvent le portable et
     * sa lueur. 4,22:1 sans voile, 4,66:1 avec. Sur desktop le voile tombe sur
     * le mur vide de droite, il n'y coûte rien. */
    voile: 0.4,
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
