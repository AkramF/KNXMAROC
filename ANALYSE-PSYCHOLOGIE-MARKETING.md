# KNX MAROC — analyse psychologique et marketing

Analyse du site tel qu'il existe au 27 juillet 2026, après tes développements
manuels. Grille de lecture : modèles mentaux et biais cognitifs appliqués à la
décision d'achat.

**Contexte de décision.** Un achat à cinq ou six chiffres, engagé pour la durée
du bâtiment, décidé par un maître d'ouvrage qui, la plupart du temps, ne sait
pas encore ce qu'est KNX quand il arrive sur la page. Il n'achète pas un
protocole : il achète la certitude de ne pas se tromper sur un choix
irréversible.

---

## Synthèse

Le site a beaucoup progressé : la profondeur technique est réelle, le blog
existe, la FAQ traite les vraies objections. Le problème n'est plus la qualité,
c'est **l'orientation**.

Le site parle de **KNX**. Il ne parle presque jamais de **KNX MAROC**, et jamais
de ce que devient la vie du client. Trois symptômes convergents :

1. Le `h1` annonce « KNX : le protocole domotique absolu » — un slogan pour la
   norme, pas pour l'entreprise qui la vend.
2. **Zéro preuve sociale** sur tout le site. Aucun projet, aucun client, aucune
   photo de réalisation, aucun chiffre d'activité.
3. Les chiffres d'économie d'énergie se contredisent d'une page à l'autre :
   **32 %**, **40 %**, **35 à 45 %**.

Le premier point coûte de l'attention. Le deuxième coûte la confiance. Le
troisième la détruit activement.

---

## 1. Le défaut structurant : on vend la norme, pas le résultat

### Jobs to Be Done — le modèle le plus violé du site

Un propriétaire de villa n'engage pas un intégrateur pour obtenir « un standard
ouvert décentralisé ISO/IEC 14543-3 ». Il l'engage pour une raison qu'il
formule autrement : _ne pas avoir à refaire, ne pas dépendre d'un installateur
qui disparaît, que la maison soit agréable sans qu'il ait à y penser._

Le site actuel décrit exhaustivement le **foret**. Le client veut le **trou**.

Relève des trois titres du héros :

| Titre affiché                               | Sujet réel de la phrase |
| ------------------------------------------- | ----------------------- |
| « KNX : Le protocole domotique absolu. »    | Le protocole            |
| « L'infrastructure filaire décentralisée. » | Le câblage              |
| « La maîtrise totale de votre bâtiment. »   | **Le client** ✓         |

Deux titres sur trois ont pour sujet grammatical un objet technique. Seul le
troisième parle au client — et c'est le plus fort des trois, ce qui n'est pas
un hasard.

La section Positionnement enchaîne : « KNX est la norme ouverte mondiale de
l'automatisation du bâtiment ». Premier paragraphe du site après le héros,
sujet : KNX. KNX MAROC n'apparaît qu'au paragraphe suivant.

**Ce que ça coûte.** Un visiteur qui ne connaît pas KNX doit d'abord être
convaincu que la catégorie l'intéresse, avant même d'évaluer l'entreprise. Le
site fait cet effort d'évangélisation — c'est courageux et parfois nécessaire —
mais il le fait **au détriment de la vente**, en repoussant la question « et
pourquoi vous ? » très loin dans la page.

### Curse of Knowledge

Le site est écrit par des gens qui savent. « Actionneurs Rail DIN », « DALI-2 »,
« VRV/VRF », « topologie du bus », « objets de groupe », « .knxproj » —
dès le deuxième écran.

C'est excellent pour l'architecte et le bureau d'études. C'est opaque pour le
propriétaire, qui est pourtant celui qui signe. Le site suppose partout un
lecteur déjà technique.

**Recommandation.** Garder toute la profondeur — c'est un actif — mais
**hiérarchiser deux niveaux de lecture** : la promesse en langage de client
en premier plan, la preuve technique en second. Aujourd'hui les deux sont
mélangés au même niveau.

---

## 2. Le trou béant : l'absence totale de preuve sociale

### Bandwagon Effect / Social Proof — absent

**Aucun** des éléments suivants n'existe sur le site :

- un témoignage client
- une réalisation nommée, même anonymisée (« une villa de 800 m² à Souissi »)
- une photographie d'installation réelle
- un nombre de projets livrés, d'années d'activité, de points bus programmés
- un logo de partenaire, de promoteur, d'architecte avec qui vous travaillez

Pour un achat à forte considération, c'est **le manque le plus coûteux du
site**. Le visiteur doit croire sur parole une entreprise dont il ne peut
vérifier aucune trace d'activité.

### Availability Heuristic

Les gens jugent le probable par ce qui leur vient facilement à l'esprit. Sans
récit de projet, le prospect ne peut pas **s'imaginer** client. Il lit une
description de catégorie, pas une histoire dans laquelle se projeter.

Une seule étude de cas — « Villa à Rabat : 6 zones, 340 points, livrée en
14 semaines » avec trois photos — ferait plus pour la conversion que trois
articles de blog supplémentaires.

### Authority Bias — partiellement servi

Ce qui fonctionne : « Partenaire KNX certifié », « ISO/IEC 14543-3 », « fichier
ETS remis », la précision technique elle-même. La compétence transpire.

Ce qui manque : **l'autorité incarnée**. Pas de nom, pas de visage, pas de
parcours. Les articles sont signés « Équipe Technique KNX MAROC », « Bureau
d'Ingénierie Éclairage », « Pôle Efficacité Énergétique » — des entités
abstraites qui, sur une structure de cette taille, sonnent plus grandes que
nature et se retournent en soupçon.

Un intégrateur nommé, avec sa certification et ses années de métier, est **plus
crédible** qu'un « pôle ».

---

## 3. Le problème de crédibilité : les chiffres se contredisent

C'est le point le plus urgent du rapport, parce qu'il est actif : il détruit de
la confiance à chaque lecture croisée.

La même promesse d'économie apparaît sous **trois valeurs différentes** :

| Emplacement                          | Valeur affirmée     |
| ------------------------------------ | ------------------- |
| `sections.tsx` — carte Climatisation | **−32 % d'énergie** |
| `segments.tsx` — badge Hôtellerie    | **up to −32 %**     |
| `faq.tsx` — question climatisation   | **jusqu'à 32 %**    |
| `blog.ts` — titre d'article          | **40 %**            |
| `blog.ts` — deux liens contextuels   | **35 % à 45 %**     |

Un prospect sérieux lit la page d'accueil **et** l'article. Il voit 32 % puis
40 % puis 35-45 %. La conclusion qu'il tire n'est pas « c'est entre 32 et 45 % »,
c'est **« ils inventent leurs chiffres »**.

S'ajoute « up to −32 % » : de l'anglais dans une phrase française, sur un site
qui vend la rigueur d'exécution.

**Deux corrections, dans l'ordre :**

1. **Choisir une seule valeur** et la répéter à l'identique partout. Si la
   fourchette est réelle, écrire la fourchette partout — « 30 à 40 % » —
   jamais un chiffre isolé à un endroit et une fourchette ailleurs.
2. **La sourcer.** « Jusqu'à 32 % » sans origine est une affirmation
   publicitaire. « 32 % mesurés sur [projet X] » ou « selon l'étude KNX
   Association [référence] » est une preuve. Le second convertit, le premier
   éveille le doute.

### Pratfall Effect — l'occasion manquée

Le site est parfait. Trop. Aucune limite reconnue nulle part.

Admettre un défaut précis **augmente** la confiance : « KNX coûte plus cher à
l'installation qu'une solution sans fil. C'est vrai. Voilà pourquoi ça revient
moins cher sur quinze ans. » Cette phrase désarme l'objection la plus fréquente
au lieu de la laisser vivre dans la tête du prospect.

---

## 4. La décision : ce qui bloque le passage à l'acte

### Absence totale d'ancrage prix — Anchoring Effect

Aucun repère budgétaire nulle part sur le site.

Pour un système sur-mesure, ne pas afficher de prix catalogue est légitime. Mais
**l'absence totale d'ancre** produit deux effets nuisibles :

- Le prospect **importe sa propre estimation**, presque toujours trop basse. La
  découverte du vrai budget arrive comme une mauvaise nouvelle, en rendez-vous,
  après un travail d'avant-vente déjà engagé.
- Vous recevez des demandes hors cible que vous devez disqualifier une par une.

**Recommandation.** Une fourchette large, présentée comme un ordre de grandeur :
« La plupart des villas que nous équipons représentent un budget de X à Y % du
lot électrique. » Cela qualifie en amont et positionne haut de gamme — le prix
élevé étant lui-même un signal de qualité sur ce marché.

### Regret Aversion — bien servi, mais enfoui

Le meilleur argument anti-regret du site est **la remise du fichier ETS**. Il
dit exactement : _vous n'êtes prisonnier de personne, même pas de nous._

C'est un argument remarquable. Il est aujourd'hui dispersé — un encadré dans
Méthode, une ligne dans les repères, une question de FAQ, deux mentions de blog.
Il mériterait d'être **un moment de la page**, pas une note de bas de page
répétée.

### Hick's Law & Activation Energy — le formulaire

Huit champs avant tout contact. Pour un achat de cette taille c'est
défendable — qualifier en amont vaut mieux que multiplier les allers-retours —
mais rien n'indique au visiteur **combien de temps ça va prendre** avant qu'il
commence.

Un repère d'une ligne (« sept champs, deux minutes ») réduit l'énergie
d'activation perçue à coût nul.

Point positif notable : **WhatsApp** est présent dans le menu mobile et le pied
de page. Sur le marché marocain c'est le canal de contact à plus faible friction
qui existe. Il mériterait d'être plus visible que « troisième lien après
LinkedIn et Instagram » — c'est probablement votre meilleur convertisseur
mobile, traité comme un réseau social parmi d'autres.

### Paradox of Choice — bien maîtrisé

Un seul appel à l'action primaire, « Demander une étude », répété à l'identique
partout. Aucune dispersion. C'est propre et rare.

---

## 5. Ce que la refonte a gagné — et ce qu'elle a perdu

### Le système de lumière : un actif rare

La page change de lumière selon l'heure. C'est le seul élément du site qu'un
concurrent ne peut pas copier sans avoir compris le métier, et il produit
exactement ce que la psychologie appelle **Mere Exposure** puis **Peak-End** :
un moment mémorable qui reste après la visite.

### Mais l'interaction a été retirée

La section « clavier » — quatre touches, le visiteur choisit l'heure, la page
bascule — **n'est plus dans la page**. Le cycle tourne désormais tout seul,
sans possibilité d'agir.

C'est, à mon avis, la perte la plus coûteuse des derniers changements, pour
trois raisons psychologiques précises :

- **IKEA Effect** — ce qu'on a manipulé prend de la valeur. Un visiteur qui
  actionne la maison s'y projette ; un visiteur qui la regarde tourner ne fait
  que constater.
- **Endowment Effect** — l'interaction produit un début de possession. C'est
  l'équivalent de l'essai gratuit pour un produit qu'on ne peut pas essayer.
- **Commitment & Consistency** — un micro-engagement (une pression) rend le
  suivant (remplir le formulaire) plus probable.

Une animation qu'on regarde est une démonstration. Une animation qu'on
**actionne** est une expérience. La différence de mémorisation est considérable.

**Recommandation forte : remettre le clavier**, ou une forme équivalente
d'interaction. C'est le seul endroit du site où le visiteur peut _faire_ quelque
chose, et c'est précisément ce qui distingue votre page de celle d'un
concurrent qui décrirait les mêmes fonctions.

---

## 6. Priorités

Classées par rapport impact / effort.

### À corriger cette semaine

1. **Unifier le chiffre d'économie d'énergie.** Une seule valeur, sourcée,
   partout. C'est une correction d'une heure qui arrête une perte de crédibilité
   permanente.
2. **Corriger « up to −32 % »** en français.
3. **Remettre l'interaction** du clavier de scènes.

### À construire ce mois-ci

4. **Une étude de cas.** Un projet réel, nommé ou anonymisé, avec surface,
   nombre de points, durée de chantier et trois photos. C'est l'élément manquant
   le plus rentable du site.
5. **Incarner l'autorité.** Remplacer « Pôle Efficacité Énergétique » par un nom
   et une certification réels. Une personne crédible bat une entité abstraite.
6. **Un ancrage budgétaire**, même large.

### À travailler au trimestre

7. **Réécrire le héros en langage de résultat.** Garder la profondeur technique
   juste en dessous, mais ouvrir sur ce que le client obtient, pas sur ce
   qu'est la norme.
8. **Assumer une limite** quelque part — le coût initial, le délai d'étude — et
   la retourner en argument.
9. **Sortir WhatsApp** du rang des réseaux sociaux pour en faire un canal de
   contact de premier plan sur mobile.

---

## Ce que je n'ai pas pu évaluer

Cette analyse porte sur le code et la copie. Elle ne dit rien de :

- la performance réelle du site en conditions marocaines (4G, terminaux
  d'entrée de gamme) ;
- le taux de conversion actuel, faute d'analytics installé ;
- ce que les prospects disent réellement — aucune recherche client n'a été
  conduite, et cinq entretiens vaudraient plus que ce rapport entier.

Les recommandations ci-dessus sont des hypothèses fondées sur des mécanismes
psychologiques documentés, pas des certitudes sur _votre_ marché. Les points 1
à 3 sont des corrections factuelles ; les autres méritent d'être testés.
