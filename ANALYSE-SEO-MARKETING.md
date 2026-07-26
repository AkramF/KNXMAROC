# KNX MAROC — audit SEO, opportunités de blog, approche marketing

Date : 25 juillet 2026. Porte sur la page unique du site (`src/routes/index.tsx`
et les sections qu'elle assemble) telle qu'elle existe après le portage Vercel
et les corrections d'`AUDIT.md`.

---

## 1. Audit SEO

### Score de santé

| #                    | Dimension       | Constat                                                                                                                                                |
| -------------------- | --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Indexation           | Bon             | `robots.txt` autorise tout, référence `sitemap.xml` ; une seule URL, canonical et `og:url` ajoutés ce jour (absents avant)                             |
| Meta on-page         | Bon             | Titre 44 caractères, description ramenée de 182 à 159 caractères ; un seul `h1`, hiérarchie `h2`/`h3` propre                                           |
| Schema               | Correct         | `ProfessionalService` avec adresse, téléphone, e-mail, langues, `url` et `image` ajoutés ce jour ; aucun `FAQPage`, `Service` par domaine, ni `sameAs` |
| Contenu / profondeur | **Insuffisant** | Une seule page indexable. Zéro contenu informationnel, zéro page susceptible de capter une recherche autre que la marque elle-même                     |
| Vitesse / CWV        | Bon             | Poster du héros en `fetchPriority="high"`, polices avec `display=swap`, pas de mise en page qui saute                                                  |

Le point qui domine tout le reste : **le site n'a qu'une page.** Un audit
technique propre ne compense pas l'absence totale de surface indexable au-delà
du nom de marque. C'est la seule chose qui mérite un investissement soutenu ;
le reste n'est que de l'entretien.

### Corrections appliquées aujourd'hui

- **Canonical et `og:url` manquants.** Aucune des deux balises n'existait.
  Sans canonical, une page unique reste indexable mais perd la déclaration
  explicite de son URL de référence — sensible dès qu'un paramètre de tracking
  ou une variante `www` apparaît un jour.
- **Description meta à 182 caractères** — Google tronque au-delà d'environ 160. Ramenée à 159, sans perdre l'énumération des six domaines.
- **`sitemap.xml` mentait sur sa fraîcheur** : `lastmod` était calculé à
  `new Date()` à chaque requête, donc toujours « aujourd'hui » même sans
  changement de contenu. Remplacé par une date fixe à mettre à jour à la main.
- **Schema enrichi** de `url` et `image`, qui manquaient sur le
  `ProfessionalService`.

### Ce qui reste ouvert

**Le titre affirme « certifié ».** `KNX MAROC — intégrateur KNX certifié à
Rabat` reprend un mot qui était déjà dans le code source récupéré avant mon
intervention — je ne l'ai pas inventé, mais je ne peux pas non plus vérifier
qu'il est exact. Si KNX MAROC ne détient pas une certification KNX Partner
formelle, ce mot dans une balise `<title>` visible sur chaque résultat Google
est le genre de détail qui se retourne contre la crédibilité du site le jour
où un client le vérifie. Je te pose la question plus bas.

**Aucun `FAQPage` schema.** Le site ne répond à aucune des questions qu'un
acheteur tape réellement dans Google avant de chercher un intégrateur — « prix
domotique KNX Maroc », « KNX ou Zigbee », « KNX Rabat avis ». Une section FAQ
avec balisage capte ces requêtes sans qu'il faille un blog entier ; c'est le
gain le plus rapide après le blog lui-même.

**`sameAs` absent du schema.** Si KNX MAROC a un profil LinkedIn, Instagram ou
une fiche Google Business, les y relier renforce le graphe de connaissances —
zéro coût, à faire dès que les URLs existent.

### Opportunités de blog

Le site vend une décision à forte considération — une installation à cinq
chiffres qui s'engage pour la durée du bâtiment — à un acheteur qui, la
plupart du temps, ne sait pas encore ce qu'est KNX quand il commence à
chercher. C'est exactement le terrain où le contenu informationnel convertit
mieux qu'une page produit, parce qu'il intercepte la recherche avant que le
besoin soit formulé.

Trois familles de contenu, dans l'ordre où je les construirais :

**Le socle éducatif**, qui capte la recherche de découverte et sert de page
pivot vers laquelle tout le reste renvoie :

- _Qu'est-ce que le KNX ? Le guide pour les propriétaires marocains_ — la
  requête la plus large, celle qui doit exister avant toutes les autres.
- _KNX, Zigbee, Wi-Fi : quelle domotique choisir pour une villa_ — capte la
  recherche comparative, celle où un acheteur hésite encore entre technologies
  avant de savoir qu'il veut un intégrateur.
- _Lexique KNX : bus, ETS, objet de groupe, actionneur, rail DIN_ — coûte peu à
  produire, capte une longue traîne de recherches définitionnelles, et devient
  un hub de maillage interne vers tous les autres articles.

**Le contenu à intention commerciale**, celui qui rapproche un lecteur déjà
convaincu de la décision d'achat :

- _Prix d'une installation KNX au Maroc : ce qui fait varier le budget_ — le
  site actuel n'affiche aucun repère de prix nulle part, ce qui est cohérent
  avec un positionnement sur-mesure, mais laisse un vide que la concurrence
  ou un forum remplira à ta place si tu ne le fais pas.
- _Pourquoi intégrer KNX dès la phase d'étude coûte moins cher qu'après_ —
  reprend et développe l'argument déjà présent dans la section Méthode
  (« le moment le moins cher... »), qui mérite mieux qu'un aparté dans une
  barre latérale.
- _KNX à l'hôtel : réduire la facture de climatisation par la détection
  d'occupation_ — s'adresse directement au segment hôtellerie avec un
  bénéfice chiffrable, alors que la page actuelle reste générique sur ce
  segment.

**La preuve par l'exemple**, le signal E-E-A-T qui manque le plus au site
aujourd'hui :

- _Étude de cas : une villa à Rabat, six domaines sur un seul bus_ — premier
  contenu à expérience réelle du site ; tout le reste est actuellement
  descriptif, rien n'est narratif.
- _Ce qu'on remet au client à la réception : le fichier ETS expliqué_ —
  développe l'argument de propriété déjà présent en Positionnement.

Exécution : ajouter `/blog` et `/blog/$slug` comme nouvelles routes TanStack
Start, chaque article avec son propre `<title>`, sa description et un schema
`BlogPosting` (auteur, date de publication, image). Un rythme d'un article
toutes les deux à trois semaines, en commençant par le socle éducatif, suffit
à construire un maillage interne et une autorité thématique avant même que le
volume de contenu soit important — c'est la logique de compounding : les
premiers articles rapportent peu isolément, mais chacun rend le suivant plus
facile à faire remonter.

---

## 2. Approche marketing — lecture par la psychologie

### Ce qui fonctionne déjà

**Le vocabulaire est spécifique, jamais générique.** « ISO/IEC 14543-3 », « le
projet ETS vous est remis », « rail DIN » — ce n'est pas la voix d'un
générateur de copie SaaS, c'est celle d'un bureau d'études qui connaît son
sujet. Ça sert l'_autorité_ (Authority Bias) sans un seul badge ni logo
« featured in » : la précision technique elle-même fait office de crédential.

**Aucune fausse urgence, aucun chiffre gonflé.** Pas de compte à rebours, pas
de « plus que 3 places », pas de statistique non vérifiable en gros caractères
sous la photo. Le brief visuel bannit explicitement le « hero-metric template »
(gros chiffre, petit label, encart d'accent) — et le site le respecte partout,
y compris là où céder à la tentation aurait été facile. Pour une clientèle
d'architectes et de bureaux d'études qui repère l'exagération commerciale au
premier coup d'œil, cette sobriété _est_ le signal de confiance.

**Le CTA est unique et répété verbatim.** « Demander une étude » apparaît
identique dans la navigation, le héros et le formulaire — pas de variation
« Contactez-nous » ici, « Discutons » là. Un seul intitulé, une seule
attente créée, jamais déçue. C'est du Hick's Law bien appliqué : une seule
décision à prendre, formulée de la même façon partout.

**La promesse de réponse est concrète.** « Nous vous répondons sous deux
jours ouvrés » plutôt que « nous vous recontacterons bientôt ». Une promesse
vérifiable réduit l'aversion au risque (Regret Aversion) mieux qu'une
formule vague, parce qu'elle donne au visiteur un moyen de vérifier qu'on l'a
tenue.

### Ce qui manque

**Aucune preuve sociale, nulle part.** Pas un chiffre de projets livrés, pas
une durée d'activité, pas une citation de client, pas une photo de chantier
réel. Pour un achat à forte considération — un système qui s'engage pour la
durée du bâtiment — l'absence totale de témoignage ou de repère chiffré est le
manque le plus net du site. Ce n'est pas la même chose que le refus salutaire
du « hero-metric » : on peut citer un client, montrer une villa réellement
équipée, sans jamais tomber dans le gros chiffre décoratif. La section « Étude
de cas » proposée plus haut comble exactement ce vide.

**Le CTA nomme le produit du prestataire, pas le résultat du client.**
« Demander une étude » décrit ce que KNX MAROC _produit_ en interne — un
livrable technique — pas ce que le visiteur _cherche_. Un propriétaire de
villa ne se lève pas le matin en voulant « une étude » ; il veut que sa maison
lui obéisse sans qu'il y pense. Ce n'est pas une erreur à corriger d'office —
pour un public d'architectes et de maîtres d'ouvrage habitués au vocabulaire
de chantier, « étude » est un mot exact et rassurant — mais c'est un candidat
naturel pour un test A/B contre une formulation orientée résultat
(« Parler de mon projet », « Être recontacté »), maintenant que le formulaire
fonctionne réellement.

**Aucun repère de prix, même indicatif.** L'absence peut être un choix
défendable — un système sur-mesure n'a pas de prix catalogue — mais elle
laisse un vide d'ancrage (Anchoring) : sans aucun repère, chaque visiteur
importe sa propre estimation, souvent trop basse pour ce que coûte réellement
une installation KNX complète. Même une fourchette large (« la plupart des
projets résidentiels se situent entre X et Y ») qualifierait les leads en
amont et éviterait des échanges avec des prospects dont le budget n'a jamais
été dans la bonne zone.

**Le formulaire demande huit champs sans étape intermédiaire.** Pour ce type
d'achat, un formulaire complet est défendable — mieux vaut qualifier en amont
que multiplier les allers-retours — donc ce n'est pas un défaut à corriger
d'urgence. Mais l'effet Zeigarnik joue en sens inverse d'un formulaire trop
long : rien n'indique au visiteur combien de temps ça va prendre avant qu'il
commence à remplir. Un repère simple avant le formulaire (« deux minutes,
sept champs ») coûte une ligne et réduit l'énergie d'activation perçue avant
le premier caractère tapé.

**Le mot « certifié » n'est étayé nulle part sur la page.** Si c'est vrai,
c'est un signal d'autorité qui mérite d'être visible ailleurs que dans une
balise `<title>` invisible à l'écran — un badge, une mention explicite en
Positionnement. Si ce n'est pas vrai, c'est un risque de crédibilité plus
qu'un atout marketing. Question ci-dessous.

---

## 3. Ce qui reste à trancher

Deux décisions m'appartiennent pas — je te les pose directement plutôt que de
deviner.
