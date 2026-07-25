# KNX MAROC

Site vitrine de KNX MAROC, intégrateur KNX à Rabat.

TanStack Start (React 19) + Tailwind 4, rendu côté serveur, déployé sur Vercel
via Nitro.

## Démarrer en local

```bash
npm install
cp .env.example .env.local   # puis renseigner RESEND_API_KEY
npm run dev                  # http://localhost:3000
```

Autres commandes :

```bash
npm run build       # build de production
npm run typecheck   # TypeScript, sans émission
npm run lint        # ESLint + Prettier
npm run format      # réécrit le formatage
```

## Mettre en ligne sur Vercel

1. Pousser ce dépôt sur GitHub.
2. Sur [vercel.com/new](https://vercel.com/new), importer le dépôt.
   **Ne rien renseigner** en build command ni en output directory : Nitro
   expose la configuration et Vercel la détecte seule.
3. Dans **Settings → Environment Variables**, ajouter pour *Production* et
   *Preview* :

   | Variable | Valeur |
   |---|---|
   | `RESEND_API_KEY` | la clé créée sur [resend.com/api-keys](https://resend.com/api-keys) |
   | `CONTACT_TO` | `contact@knxmaroc.ma` |
   | `CONTACT_FROM` | `Site KNX MAROC <site@knxmaroc.ma>` |

4. Dans Resend, **Domains → Add Domain**, ajouter `knxmaroc.ma` et publier les
   enregistrements DNS chez le registrar. Sans domaine vérifié, Resend refuse
   l'envoi et le formulaire bascule sur son message de repli.
5. Déployer, puis brancher le domaine dans **Settings → Domains**.

Sans `RESEND_API_KEY`, le site fonctionne : le formulaire affiche un message
d'indisponibilité avec l'e-mail et le téléphone. Il n'échoue jamais en silence.

## Structure

```
src/
  routes/
    __root.tsx           coquille HTML, métadonnées, JSON-LD, pages 404 et erreur
    index.tsx            page d'accueil : ordre des sections et scènes du héros
    robots[.]txt.ts      robots.txt
    sitemap[.]xml.ts     sitemap.xml
  components/
    scroll-scrub/        héros cinématique piloté au scroll
    site/                sections de la page (nav, contenu, contact, pied)
    cta/                 les deux appels à l'action du site
    brand/               monogramme et logotype
  lib/
    coordonnees.ts       source unique du téléphone, de l'e-mail et de l'adresse
    api/contact.functions.ts   validation Zod + envoi Resend
  styles.css             tokens de marque et couche de base
```

## Points à connaître avant de modifier

**Les coordonnées ont une seule source.** Téléphone, e-mail et adresse vivent
dans `src/lib/coordonnees.ts`. Ne jamais les écrire en dur ailleurs : c'est
comme ça qu'un numéro factice avait survécu jusqu'en production.

**La palette et la typographie sont verrouillées** dans `design-brief.md`, avec
l'argumentaire qui les justifie. Le gris `graphite` est calibré à 5.52:1 sur le
fond `chalk` ; l'éclaircir repasserait sous le seuil WCAG AA.
`rule-strong` est réservé aux bordures de contrôles (3:1 minimum), `rule` aux
filets décoratifs.

**Le rendu est serveur.** Ne pas toucher `window`, `document`, `localStorage` ou
`navigator` pendant le rendu ni au niveau module — seulement dans un effet, un
gestionnaire d'événement, ou derrière `typeof window !== "undefined"`.

**Le héros charge chaque clip entièrement** avant de pouvoir le scrubber
(`fetch` puis `blob`), parce que le seek sur un MP4 streamé provoque des
à-coups. Ajouter une scène coûte donc 3 à 4 Mo. `prefers-reduced-motion` coupe
le chargement vidéo et retombe sur les posters.

`AUDIT.md` conserve l'état des lieux à la reprise du site et ce qui a été
corrigé.
