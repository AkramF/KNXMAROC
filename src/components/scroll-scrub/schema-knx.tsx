/* Calque schématique du bus KNX, superposé à la cinématique.
 *
 * Le brief pose la maison comme un instrument unique et la palette comme
 * « l'encre d'un plan d'architecte ». Jusqu'ici cette idée n'existait que dans
 * le texte : les plans photoréalistes pouvaient illustrer n'importe quelle
 * annonce immobilière. Ce calque rend le bus visible — il trace, au rythme
 * exact de la caméra, le câble qui relie les organes de la pièce filmée.
 *
 * Le tracé se dessine avec la progression du segment (--ss-segment, posée par
 * le contrôleur de scrub sur chaque calque). Aucune animation autonome : la
 * ligne n'avance que si le visiteur fait défiler.
 */

type SchemaId = "seuil" | "sejour" | "supervision";

const TRAIT = "#2E4A7D";

/* Un nœud du bus : le petit carré des schémas KNX, pas une pastille décorative. */
function Noeud({ x, y, delai = 0 }: { x: number; y: number; delai?: number }) {
  return (
    <g className="schema-knx__noeud" style={{ "--noeud-delai": delai } as React.CSSProperties}>
      <rect x={x - 7} y={y - 7} width={14} height={14} fill="none" stroke={TRAIT} strokeWidth={2} />
      <rect x={x - 2.5} y={y - 2.5} width={5} height={5} fill={TRAIT} />
    </g>
  );
}

function Etiquette({
  x,
  y,
  texte,
  delai = 0,
}: {
  x: number;
  y: number;
  texte: string;
  delai?: number;
}) {
  return (
    <text
      className="schema-knx__etiquette"
      x={x}
      y={y}
      fill={TRAIT}
      style={{ "--noeud-delai": delai } as React.CSSProperties}
    >
      {texte}
    </text>
  );
}

function Seuil() {
  return (
    <>
      {/* Le bus entre par la gauche, longe le couloir, dessert le clavier
       * d'entrée puis la ligne lumineuse du plafond. */}
      <path
        className="schema-knx__ligne"
        d="M 60 700 L 300 700 L 300 470 L 690 470 L 690 300 L 1180 300"
        fill="none"
        stroke={TRAIT}
        strokeWidth={2}
      />
      <Noeud x={300} y={470} delai={0.3} />
      <Etiquette x={318} y={452} texte="CLAVIER" delai={0.34} />
      <Noeud x={690} y={300} delai={0.55} />
      <Etiquette x={708} y={282} texte="ÉCLAIRAGE" delai={0.59} />
      <Noeud x={1180} y={300} delai={0.78} />
      <Etiquette x={1198} y={282} texte="LIGNE BUS" delai={0.82} />
    </>
  );
}

function Sejour() {
  return (
    <>
      {/* Ligne de plafond, puis une descente par baie vers l'actionneur de
       * store. Le peigne dit ce que dit le texte : chaque store est un objet
       * du bus, pas un moteur isolé. */}
      <path
        className="schema-knx__ligne"
        d="M 250 250 L 1670 250"
        fill="none"
        stroke={TRAIT}
        strokeWidth={2}
      />
      {[430, 660, 890, 1120, 1350].map((x, i) => (
        <path
          className="schema-knx__descente"
          d={`M ${x} 250 L ${x} 430`}
          fill="none"
          key={x}
          stroke={TRAIT}
          strokeWidth={1.5}
          style={{ "--noeud-delai": 0.35 + i * 0.09 } as React.CSSProperties}
        />
      ))}
      {[430, 660, 890, 1120, 1350].map((x, i) => (
        <Noeud key={x} x={x} y={430} delai={0.42 + i * 0.09} />
      ))}
      <Etiquette x={250} y={228} texte="ACTIONNEURS STORES" delai={0.2} />
    </>
  );
}

function Supervision() {
  return (
    <>
      {/* Arborescence qui converge vers l'écran mural : la topologie du projet
       * ETS, remise au client à la réception. */}
      <path
        className="schema-knx__ligne"
        d="M 300 880 L 300 620 L 960 620 L 960 470"
        fill="none"
        stroke={TRAIT}
        strokeWidth={2}
      />
      <path
        className="schema-knx__ligne"
        d="M 1620 880 L 1620 620 L 960 620"
        fill="none"
        stroke={TRAIT}
        strokeWidth={2}
      />
      <Noeud x={300} y={880} delai={0.32} />
      <Etiquette x={318} y={906} texte="ZONE 1" delai={0.36} />
      <Noeud x={1620} y={880} delai={0.46} />
      <Etiquette x={1500} y={906} texte="ZONE 2" delai={0.5} />
      <rect
        className="schema-knx__ecran"
        x={830}
        y={330}
        width={260}
        height={150}
        fill="none"
        stroke={TRAIT}
        strokeWidth={2}
      />
      <Etiquette x={830} y={312} texte="SUPERVISION" delai={0.82} />
    </>
  );
}

const SCHEMAS: Record<SchemaId, () => React.JSX.Element> = {
  seuil: Seuil,
  sejour: Sejour,
  supervision: Supervision,
};

export function SchemaKnx({ id }: { id: SchemaId }) {
  const Dessin = SCHEMAS[id];
  return (
    /* aria-hidden : le schéma redit visuellement ce que la copie de la scène
     * énonce déjà. L'annoncer une seconde fois alourdirait la lecture vocale
     * sans rien apporter. */
    <svg
      aria-hidden="true"
      className="schema-knx"
      preserveAspectRatio="xMidYMid slice"
      viewBox="0 0 1920 1080"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Dessin />
    </svg>
  );
}

export type { SchemaId };
