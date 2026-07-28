import { Outlet, createRootRoute, useRouter, HeadContent, Scripts } from "@tanstack/react-router";
import type { ReactNode } from "react";

import appCss from "../styles.css?url";
import { ADRESSE_UNE_LIGNE, COORDONNEES, LIEN_EMAIL } from "../lib/coordonnees";

const URL_SITE = "https://knxmaroc.ma";

const TITRE = "KNX MAROC — intégrateur KNX certifié à Rabat et Casablanca";
const DESCRIPTION =
  "Intégrateur domotique KNX certifié au Maroc. Éclairage, stores, climatisation, sécurité et supervision sur un seul bus filaire, pour la villa, l'hôtel, les bureaux et le point de vente. Étude, programmation ETS et mise en service à Rabat, Casablanca, Marrakech et Tanger.";

/* Villes desservies, déclarées une fois et réutilisées.
 *
 * Le référencement local se joue sur l'accord entre trois choses : ce que dit
 * la page, ce que déclarent les données structurées, et ce que porte la fiche
 * d'établissement Google. Les trois doivent nommer les mêmes villes. */
const VILLES = ["Rabat", "Casablanca", "Marrakech", "Tanger", "Salé", "Kénitra"] as const;

const COORDONNEES_GEO = { latitude: 34.020882, longitude: -6.84165 };

const ficheEntreprise = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${URL_SITE}#entreprise`,
  name: "KNX MAROC",
  description: DESCRIPTION,
  url: URL_SITE,
  image: `${URL_SITE}/assets/brand/knx-maroc-og.png`,
  telephone: COORDONNEES.telephone.affichage,
  email: COORDONNEES.email,
  areaServed: VILLES.map((ville) => ({ "@type": "City", name: ville })),
  serviceType: "Intégration de systèmes KNX",
  /* Un achat de projet, sans prix affiché : la fourchette large évite de faire
   * fuir un maître d'ouvrage tout en écartant les demandes hors sujet. */
  priceRange: "$$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: `${COORDONNEES.adresse.rue}, ${COORDONNEES.adresse.quartier}`,
    addressLocality: COORDONNEES.adresse.ville,
    addressCountry: COORDONNEES.adresse.codePays,
  },
  geo: { "@type": "GeoCoordinates", ...COORDONNEES_GEO },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Prestations KNX",
    itemListElement: [
      "Étude et avant-projet KNX",
      "Câblage et intégration du bus",
      "Programmation ETS et mise en service",
      "Maintenance et évolution",
    ].map((nom) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: nom },
    })),
  },
  knowsLanguage: ["fr", "ar", "en"],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Pourquoi KNX est-il considéré comme le meilleur standard domotique au monde ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "KNX est la seule norme internationale ouverte (ISO/IEC 14543-3) d'automatisation du bâtiment. Plus de 500 fabricants mondiaux (Gira, JUNG, Basalte, ABB, Schneider) conçoivent des équipements 100 % interopérables sur un câble bus filaire certifié pour 30 à 50 ans d'exploitation.",
      },
    },
    {
      "@type": "Question",
      name: "Quelle est la différence entre KNX et une domotique sans-fil (Zigbee, Wi-Fi) ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Le bus filaire KNX garantit zéro latence, aucune saturation radio, aucune dépendance au cloud et ne nécessite pas de changement de batteries.",
      },
    },
    {
      "@type": "Question",
      name: "Suis-je bloqué avec un seul fabricant ou un installateur unique ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Non. À la réception du chantier, KNX MAROC vous remet le fichier source de programmation ETS (.knxproj). Vous êtes 100 % propriétaire de votre installation.",
      },
    },
  ],
};

function NotFoundComponent() {
  return (
    <div className="flex min-h-dvh flex-col items-center justify-center gap-4 px-6 text-center">
      <p className="font-mono text-xs uppercase tracking-[0.16em] text-blueprint">Erreur 404</p>
      <h1 className="font-display text-4xl font-semibold tracking-tighter text-chalk">
        Cette page n&apos;existe pas.
      </h1>
      <a
        href="/"
        className="font-mono text-sm uppercase tracking-[0.08em] text-chalk underline decoration-blueprint decoration-2 underline-offset-4"
      >
        Revenir à l&apos;accueil
      </a>
    </div>
  );
}

function ErrorComponent({ reset }: { error: Error; reset: () => void }) {
  const router = useRouter();

  return (
    <div className="flex min-h-dvh flex-col items-center justify-center gap-4 px-6 text-center">
      <h1 className="font-display text-3xl font-semibold tracking-tighter text-chalk">
        Cette page ne s&apos;est pas chargée.
      </h1>
      <p className="max-w-[48ch] text-base leading-relaxed text-graphite">
        Un incident est survenu de notre côté. Réessayez, ou écrivez-nous à{" "}
        <a
          className="text-chalk underline decoration-blueprint decoration-2 underline-offset-4"
          href={LIEN_EMAIL}
        >
          {COORDONNEES.email}
        </a>
        .
      </p>
      <button
        type="button"
        onClick={() => {
          router.invalidate();
          reset();
        }}
        className="font-mono text-sm uppercase tracking-[0.08em] text-chalk underline decoration-blueprint decoration-2 underline-offset-4"
      >
        Réessayer
      </button>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: TITRE },
      { name: "description", content: DESCRIPTION },
      {
        name: "keywords",
        content:
          "domotique knx maroc, intégrateur knx rabat, domotique villa marrakech, domotique casablanca, knx association maroc, fichier ets knx, domotique haut de gamme, etude knx",
      },
      {
        name: "robots",
        content: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
      },
      { name: "author", content: "KNX MAROC" },
      { name: "theme-color", content: "#0d1012" },
      { property: "og:title", content: TITRE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: URL_SITE },
      { property: "og:locale", content: "fr_MA" },
      { property: "og:site_name", content: "KNX MAROC" },
      { property: "og:image", content: `${URL_SITE}/assets/brand/knx-maroc-og.png` },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: `${URL_SITE}/assets/brand/knx-maroc-og.png` },
      { name: "geo.region", content: "MA-RAB" },
      { name: "geo.placename", content: ADRESSE_UNE_LIGNE },
      { name: "geo.position", content: "34.020882;-6.841650" },
      { name: "ICBM", content: "34.020882, -6.841650" },
    ],
    links: [
      {
        rel: "preload",
        as: "image",
        href: "/assets/world/clavier-mobile-poster.webp",
        type: "image/webp",
        media: "(max-width: 860px)",
      },
      {
        rel: "preload",
        as: "image",
        href: "/assets/world/clavier-poster.webp",
        type: "image/webp",
        media: "(min-width: 861px)",
      },
      { rel: "stylesheet", href: appCss },
      { rel: "canonical", href: URL_SITE },
      { rel: "icon", type: "image/svg+xml", href: "/assets/brand/favicon.svg" },
      { rel: "icon", href: "/assets/brand/favicon.png" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous" as const,
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600&family=IBM+Plex+Mono:wght@400;500&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(ficheEntreprise),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(faqSchema),
      },
      /* Mesure d'audience.
       *
       * Première recommandation du rapport marketing : sans mesure, aucune
       * décision suivante n'est vérifiable — on ne sait ni si quelqu'un
       * arrive, ni d'où, ni ce qu'il fait.
       *
       * Web Analytics de Vercel, appelé par son script plutôt que par le
       * paquet npm. Deux raisons : le projet tient ses dépendances de
       * production à cinq, et le script fait exactement la même chose.
       *
       * Sans cookie et sans identifiant persistant : pas de bandeau de
       * consentement à imposer. Ça compte ici — un bandeau serait la première
       * chose que verrait un visiteur, et le rapport met précisément en garde
       * contre tout ce qui fait ressembler ce site à une boutique.
       *
       * ⚠ À activer une fois dans Vercel : projet → Analytics → Enable.
       * Sans cette étape, le script renvoie 404 et rien n'est collecté. */
      ...(import.meta.env.PROD ? [{ src: "/_vercel/insights/script.js", defer: true }] : []),
    ],
  }),
  shellComponent: RootShell,
  component: Outlet,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="fr" style={{ colorScheme: "dark" }}>
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}
