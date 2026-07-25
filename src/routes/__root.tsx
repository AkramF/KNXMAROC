import { Outlet, createRootRoute, useRouter, HeadContent, Scripts } from "@tanstack/react-router";
import type { ReactNode } from "react";

import appCss from "../styles.css?url";
import { ADRESSE_UNE_LIGNE, COORDONNEES, LIEN_EMAIL } from "../lib/coordonnees";

// À remplacer par le domaine réel une fois acheté, si différent.
const URL_SITE = "https://knxmaroc.ma";

const TITRE = "KNX MAROC — intégrateur KNX certifié à Rabat";
// 155 caractères : au-delà, Google tronque la description dans les résultats.
const DESCRIPTION =
  "Bureau d'études et intégrateur KNX au Maroc. Éclairage, stores, climatisation, sécurité et supervision sur un seul bus, pour la villa, l'hôtel et le tertiaire.";

const ficheEntreprise = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "KNX MAROC",
  description: DESCRIPTION,
  url: URL_SITE,
  image: `${URL_SITE}/assets/brand/knx-maroc-og.png`,
  telephone: COORDONNEES.telephone.affichage,
  email: COORDONNEES.email,
  areaServed: "MA",
  serviceType: "Intégration de systèmes KNX",
  address: {
    "@type": "PostalAddress",
    streetAddress: `${COORDONNEES.adresse.rue}, ${COORDONNEES.adresse.quartier}`,
    addressLocality: COORDONNEES.adresse.ville,
    addressCountry: COORDONNEES.adresse.codePays,
  },
  knowsLanguage: ["fr", "ar", "en"],
};

function NotFoundComponent() {
  return (
    <div className="flex min-h-dvh flex-col items-center justify-center gap-4 px-6 text-center">
      <p className="font-mono text-xs uppercase tracking-[0.16em] text-blueprint">Erreur 404</p>
      <h1 className="font-display text-4xl font-semibold tracking-tighter text-ink">
        Cette page n&apos;existe pas.
      </h1>
      <a
        href="/"
        className="font-mono text-sm uppercase tracking-[0.08em] text-ink underline decoration-blueprint decoration-2 underline-offset-4"
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
      <h1 className="font-display text-3xl font-semibold tracking-tighter text-ink">
        Cette page ne s&apos;est pas chargée.
      </h1>
      <p className="max-w-[48ch] text-base leading-relaxed text-graphite">
        Un incident est survenu de notre côté. Réessayez, ou écrivez-nous à{" "}
        <a
          className="text-ink underline decoration-blueprint decoration-2 underline-offset-4"
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
        className="font-mono text-sm uppercase tracking-[0.08em] text-ink underline decoration-blueprint decoration-2 underline-offset-4"
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
      { name: "theme-color", content: "#f2f2ef" },
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
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "canonical", href: URL_SITE },
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
    ],
  }),
  shellComponent: RootShell,
  component: Outlet,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="fr" style={{ colorScheme: "light" }}>
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
