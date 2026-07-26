# Audit KNX MAROC — Impeccable

Cible : `src/routes/index.tsx` et l'arbre de composants atteignable depuis elle.
Mode : **Persuade** — le visiteur (architecte, promoteur, propriétaire de villa)
doit décider de nous consulter. Le design est le produit.

## Score

| #         | Dimension                  | Score    | Constat principal                                                      |
| --------- | -------------------------- | -------- | ---------------------------------------------------------------------- |
| 1         | Accessibilité              | 2/4      | Corps de texte `graphite` sur `chalk` à 4.22:1, sous le seuil AA       |
| 2         | Performance                | 1/4      | 16,4 Mo de MP4 desktop téléchargés en blob avant tout scrub            |
| 3         | Responsive                 | 1/4      | Aucune navigation sur mobile, CTA principal masqué sous `sm`           |
| 4         | Theming                    | 3/4      | Tokens de marque propres, mais surcouche Quanta morte de ~2000 lignes  |
| 5         | Intégrité d'implémentation | 2/4      | Numéro de téléphone factice en production, formulaire sans destination |
| **Total** |                            | **9/20** | **Poor — refonte majeure nécessaire**                                  |

## Verdict d'intégrité

**Échec partiel.** Le système visuel est cohérent et spécifique au produit : la
palette et la typographie viennent du monde matériel du métier, le vocabulaire
est celui d'un intégrateur, pas d'un site de SaaS générique. Ce n'est pas de
l'IA slop de surface.

L'échec est en profondeur : **le site est une belle vitrine sans porte**. Le
téléphone est un placeholder, le formulaire écrit dans une base qui n'existera
pas, aucune adresse e-mail n'apparaît nulle part, et sur mobile la navigation
disparaît entièrement. Un visiteur convaincu par les huit écrans de cinématique
n'a aucun moyen fiable de nous joindre.

## P0 — Bloquant

### 1. Numéro de téléphone factice en production

`src/components/cta/rappel-cta.tsx:5` — `href="tel:+212000000000"`.
Le CTA secondaire « Être rappelé » compose un numéro inexistant.
**Impact** : perte sèche de lead, et perte de crédibilité immédiate chez un
prospect qui vérifie avant d'appeler.

### 2. Le formulaire n'a aucune destination

`src/lib/api/contact.functions.ts:26` — écrit dans le binding Cloudflare D1 `DB`.
Sur Vercel ce binding n'existe pas : `if (!DB)` renvoie `ok:false`, l'utilisateur
lit « Écrivez-nous directement par e-mail »… et aucune adresse e-mail n'est
affichée sur le site.
**Impact** : 100 % des demandes perdues, sans trace ni notification.

### 3. Aucune navigation sur mobile

`src/components/site/sections.tsx:13` — `hidden … md:flex` sur le `<nav>`,
`hidden … sm:inline-flex` sur le CTA.
Sous 768 px l'en-tête ne contient que le logo. Sous 640 px le CTA primaire
disparaît aussi.
**Impact** : sur le terminal majoritaire au Maroc, les six sections et le
chemin de conversion ne sont atteignables qu'en faisant défiler huit écrans.
**WCAG** : 2.4.5 Multiple Ways.

## P1 — Majeur

### 4. Contraste du corps de texte sous le seuil AA

`graphite #6E7479` sur `chalk #F2F2EF` = **4.22:1** (seuil AA : 4.5:1).
C'est la combinaison de tout le corps de texte des sections Positionnement,
Méthode, Marques et du pied de page.
**WCAG** : 1.4.3 Contrast (Minimum), niveau AA.
**Correction** : assombrir `graphite` à `#5C6266` (5.4:1 sur chalk).

### 5. Accents manquants sur ~40 chaînes visibles

`contact.tsx`, `__root.tsx`, `etude-cta.tsx` : « Demander une etude »,
« Societe ou cabinet », « Telephone », « Residentiel », « Hotellerie »,
« Batiment existant », « schema de principe », « ordre de grandeur budgetaire »,
« Demande enregistree », « sous deux jours ouvres », « Francais », « Verifiez
les champs », « caracteres », « integrateur KNX certifie »…
Ailleurs (`sections.tsx`, `segments.tsx`) les accents sont corrects.
**Impact** : c'est le marqueur d'IA slop le plus lisible du site. Sur une page
qui vend la rigueur d'exécution, l'incohérence orthographique contredit
directement l'argument. Le CTA primaire, répété quatre fois, est fautif.

### 6. 16,4 Mo de vidéo avant le premier contenu commercial

`scroll-scrub.tsx:303` — `fetch()` puis `blob()` : chaque clip est téléchargé
intégralement avant le moindre scrub. Fenêtre de préchargement de 1,5 viewport,
donc plusieurs clips de 3 à 4,5 Mo en vol simultanément.
Le héros occupe par ailleurs **7,9 hauteurs d'écran** (1.6+1.5+1.6+1.5+1.7)
avant la première section commerciale.
**Impact** : sur 4G marocaine, plusieurs dizaines de secondes de posters figés,
et un budget d'attention dépensé en atmosphère avant l'argument.
**Nuance** : le choix du blob est délibéré et défendable — le seek sur un MP4
streamé provoque des à-coups de range-request. Le problème n'est pas la
technique, c'est le poids et la longueur.

### 7. Les cartes Solutions n'ont pas de titre

`sections.tsx:137` + `cta/domaine-cta.tsx`.
Ordre de lecture réel : icône → paragraphe de description → _puis_ le nom du
domaine. Le nom est dans un `<span>` nommé `DomaineCta` qui n'est pas
interactif : trait bleu animé au survol, aucune destination.
**Impact** : on lit la description d'« Éclairage » sans savoir qu'il s'agit
d'éclairage. Et une affordance de lien qui ne mène nulle part.
**WCAG** : 1.3.1 Info and Relationships (aucun `<h3>` dans les cartes).

### 8. Erreurs de formulaire génériques et mal attribuées

`contact.tsx:49` — le `catch` affiche « Vérifiez les champs… » pour _toute_
exception, y compris une panne réseau. Aucun `aria-invalid`, aucun
`aria-describedby`, aucun message par champ, `noValidate` sans validation
client de remplacement.
**Impact** : l'utilisateur ne sait pas quel champ corriger.

### 9. « Voir la gamme » ne mène à aucune gamme

`cta/marque-cta.tsx:4` — libellé qui promet un catalogue, `href="#contact"`.

## P2 — Mineur

### 10. Numérotation 01–04 non méritée sur les Segments

`segments.tsx:46` — quatre marchés parallèles (résidentiel, hôtellerie,
tertiaire, retail) numérotés comme une séquence. La numérotation de la section
Méthode, elle, est méritée : les étapes s'enchaînent réellement.

### 11. Le mur de marques n'a pas de marques

`sections.tsx:178` — Gira, JUNG, ABB, Schneider… en texte brut dans une grille
bordée. Le brief prévoyait des monogrammes SVG. En l'état c'est un mur de
partenaires sans logo, qui suggère un agrément commercial non établi.

### 12. Le `h1` ne dit ni le métier ni le pays

Le seul `h1` est « La maison vous reconnaît. » L'information « intégrateur KNX
au Maroc » est dans un `<p>` (le kicker).

### 13. La section Contact n'affiche aucun contact

`contact.tsx:69` — la liste de définitions donne « Ville / Langues /
Interventions » à l'emplacement où le lecteur cherche un téléphone et un e-mail.

### 14. Monospace en costume

IBM Plex Mono habille la navigation, les libellés de CTA et les intertitres.
Le brief le réservait aux « étiquettes techniques et aux chiffres ». Sur des
liens de navigation, ce n'est ni du code, ni de la donnée, ni de la mesure.

### 15. 508 Ko d'images d'exemple Higgsfield livrées

`public/presets/` — `cover.png`, `explain.png`, `hyper-motion.png`,
`how-product-works.png`, sans rapport avec le site.

### 16. « Demande enregistrée » expose l'implémentation

`contact.tsx:103` — le visiteur se moque du stockage ; il veut savoir qu'un
humain va répondre.

### 17. Pied de page sans coordonnées ni mentions légales

`segments.tsx:135` — une ligne de ville et un avertissement de marque.

## Constats systémiques

- **Le site n'a pas de sortie.** P0-1, P0-2, P2-13 et P2-17 sont la même
  défaillance vue de quatre endroits : personne n'a jamais posé de vraies
  coordonnées dans ce site.
- **L'exécution décroche sur les fichiers tardifs.** `sections.tsx` et
  `segments.tsx` sont accentués, soignés, sémantiques. `contact.tsx`,
  `__root.tsx` et les CTA perdent les accents, la sémantique et les états.
- **97 % du dépôt est du code mort.** 17 fichiers source sur 154 sont
  atteignables. Tout `layouts/`, `components/ui/`, `gallery/`, `composer/` et
  les paquets vendus `@higgsfield/*` ne sont jamais importés.

## Points forts à conserver

- **Le brief est réel et tenu.** `design-brief.md` argumente sa palette depuis
  la matière du métier (chaux, encre d'architecte, bleu de plan) et refuse
  explicitement les familles saturées. C'est une direction, pas un thème.
- **La copie est spécifique et vérifiable.** « ISO/IEC 14543-3 », « le projet
  ETS porte votre nom et vous est remis », « le moment le moins cher pour
  intégrer KNX est la phase études ». Aucune promesse creuse.
- **Le scroll-scrub est correctement construit.** `prefers-reduced-motion`
  coupe le chargement vidéo et retombe sur les posters, `AbortController` sur
  chaque segment, bascule desktop/mobile des encodes, boucle rAF sans état
  React, révocation des object URLs au démontage. Du vrai travail d'ingénierie.
- **La grille de filets tient.** Bordures 1 px, `gap-px` sur fond `rule`,
  aucune ombre décorative, aucun dégradé, aucun verre dépoli.

## Direction de correction

La direction artistique n'est pas à remplacer : elle est juste, argumentée et
adaptée au client. La remplacer serait une régression. Ce qu'il faut, c'est
**la tenir jusqu'au bout** — corriger les P0, aligner l'exécution sur le niveau
de `sections.tsx`, et rééquilibrer le rythme pour que l'argument commercial
arrive avant l'épuisement du visiteur.

---

# Correctifs appliqués

| #     | Défaut                           | Correction                                                                                                                                                                            |
| ----- | -------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| P0-1  | Téléphone factice                | `src/lib/coordonnees.ts` devient la source unique du téléphone, de l'e-mail et de l'adresse. Le CTA affiche le numéro au lieu de le cacher derrière « Être rappelé »                  |
| P0-2  | Formulaire sans destination      | Envoi par Resend, avec le prospect en `reply_to`. Sans clé API, message de repli explicite portant l'e-mail et le téléphone                                                           |
| P0-3  | Aucune navigation mobile         | Menu déroulant sous 768 px : quatre liens, le téléphone, le CTA primaire. Cible tactile 44 px, `aria-expanded`, fermeture à Échap, défilement bloqué à l'ouverture                    |
| P1-4  | Contraste 4.22:1                 | `graphite` assombri de `#6e7479` à `#5c6266` — 5.52:1 sur chalk. Nouveau token `rule-strong` (`#82888e`, 3.58:1) pour les bordures de champs                                          |
| P1-5  | ~40 chaînes sans accents         | Toutes reprises. Le CTA primaire est désormais « Demander une étude »                                                                                                                 |
| P1-6  | 16,4 Mo et 7,9 écrans de héros   | Trois scènes au lieu de cinq — promesse, preuve, maîtrise. 4,1 écrans, 10,3 Mo desktop. Les clips 2 et 3 sont supprimés du dépôt                                                      |
| P1-7  | Cartes Solutions sans titre      | Le nom du domaine devient un `<h3>` placé avant la description. Le faux lien `DomaineCta` est supprimé ; le rail est focusable au clavier                                             |
| P1-8  | Erreurs de formulaire génériques | Validation Zod côté client, message par champ, `aria-invalid` et `aria-describedby`, focus sur le premier champ fautif. Trois états d'échec distincts : saisie, configuration, réseau |
| P1-9  | « Voir la gamme » sans gamme     | Lien supprimé                                                                                                                                                                         |
| P2-10 | Numérotation 01–04 non méritée   | Retirée des Segments, conservée sur la Méthode                                                                                                                                        |
| P2-11 | Mur de marques sans marques      | Grille bordée remplacée par une liste typographique, avec la mention d'indépendance à côté des noms plutôt qu'en pied de page                                                         |
| P2-12 | `h1` sans métier ni pays         | Le kicker entre dans le `h1` : « Intégrateur KNX au Maroc — La maison vous reconnaît »                                                                                                |
| P2-13 | Section Contact sans contact     | E-mail, adresse du bureau et langues, plus le bouton d'appel                                                                                                                          |
| P2-15 | 508 Ko d'images Higgsfield       | `public/presets/` supprimé                                                                                                                                                            |
| P2-16 | « Demande enregistrée »          | « Demande envoyée », suivi du délai de réponse et du téléphone si le projet est urgent                                                                                                |
| P2-17 | Pied de page sans coordonnées    | Adresse postale, téléphone, e-mail, zone d'intervention et langues                                                                                                                    |

Non traité : **P2-14, le monospace en costume**. IBM Plex Mono habille toujours
la navigation et les libellés de CTA. Le brief le réservait aux étiquettes
techniques ; le corriger reviendrait à retoucher la grammaire typographique de
toutes les sections, ce qui relève d'un passage `typeset` à part entière.

## Nettoyage du dépôt

132 fichiers supprimés sur 154 : `layouts/`, `components/ui/` et les paquets
`@higgsfield/*` n'étaient jamais importés. `wrangler.jsonc`, `app.manifest.json`
et les bindings Cloudflare disparaissent avec le portage Vercel. La feuille de
style perd la surcouche Quanta, entièrement écrasée par la couche de marque.

Dépendances : 54 → 5 en production. CSS livré : 20,5 Ko (4,9 Ko gzip).
JS client : 425 Ko (133 Ko gzip).

## Vérifications passées

`tsc --noEmit` sans erreur · `eslint .` sans erreur · build Vercel réussi
(`.vercel/output/functions/__server.func` + statique) · rendu SSR contrôlé sur
serveur local : HTTP 200, un seul `h1`, 8 `h2`, 14 `h3`, `robots.txt` et
`sitemap.xml` servis, aucune trace de `+212000000000`, de `higgsfield` ni de
token Quanta dans le HTML.

Non vérifié : le rendu visuel réel dans un navigateur, et la livraison effective
d'un e-mail Resend — elle dépend de la vérification DNS du domaine.
