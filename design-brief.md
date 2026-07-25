# KNX MAROC - design brief

## Design read
For Moroccan architects, developers and villa owners who buy building
intelligence the way they buy stone and glass: once, correctly, forever. The
emotional register is calm technical authority, not gadget excitement.

## Concept spine
**The building as a single instrument.** The site is one continuous walk
through one villa, from the threshold to the electrical cabinet to the
supervision screen. Every chapter reveals another layer of the same instrument,
so the visitor understands that KNX is not a product bolted on, it is the
wiring logic of the house itself.

## Delivery tier
`cinema` - Lenis + GSAP for surrounding motion, seam-locked scroll journey as
the Tier-1 hero mechanic, scroll chapters.

## Animation mode
Animation mode: animated-website

### Journey (Architecture A, continuous forward flight)
Camera architecture: **A** - one entry still, then sequential forward legs, each
leg starting from the actual last rendered frame of the previous leg.
Seam direction: always forward, slow constant dolly, never a reverse pull-out.
Mobile framing: every focal point stays inside the centre-safe area, portrait
uses `cover` on the same encodes plus lighter mobile files.

1. **Le seuil** - entrance patio, open pale oak pivot door, light crossing the
   threshold. Headline: "La maison vous reconnait." Proof tags: KNX Partner.
2. **Le geste** - hallway, flush white glass keypad on lime plaster, one finger
   width of engraved legend. Headline: "Un seul geste, toute la maison."
3. **Le sejour** - living room, full height glazing, fabric blinds descending,
   light shifting to an evening scene. Headline: "La lumiere suit la vie."
4. **Le tableau** - technical room, white cabinet, DIN rail, aligned KNX
   modules, disciplined wiring. Headline: "Derriere le calme, la rigueur."
5. **La supervision** - study, wall screen showing a wireframe plan of the
   villa. Headline: "Tout se pilote, tout se prouve."

The journey enacts the spine because the camera never leaves the building: it
descends from what the client feels to what the integrator builds.

### World grammar (byte identical preamble in every scene prompt)
Photoreal architectural cinematography, contemporary Moroccan villa, late
afternoon neutral daylight raking from the left, white lime plaster, pale
travertine, matte finishes, warm 3000K artificial accents, 35mm lens, eye level
camera at 1.6 m, gentle one point perspective looking forward, chalk white,
pale stone grey, deep ink black, one desaturated blueprint blue accent, no
people, no text, no logos, no watermarks, focal point centred.

### Cost shape
1 entry still (plus 1 alternate) + 4 sequential video legs. No destination
stills are purchased: every seam uses the real last rendered frame.

### Delivery budget
Desktop clips total <= 32 MiB, mobile clips total <= 16 MiB.

## Locked palette
- Ground `#F2F2EF` chalk plaster
- Surface `#FFFFFF` paper
- Ink `#15181B` off black, never pure black
- Muted `#6E7479` graphite line and secondary text
- Rule `#DFDFD9` hairline
- Accent `#2E4A7D` blueprint blue, single accent page wide, saturation 46%

Defense: the palette is taken from the material world of the work itself, the
chalk of Moroccan lime plaster and the ink of an architect's drawing. The
blueprint blue is the only saturated element on the page, so it can carry every
state, focus ring and active chapter without competing with the photography. It
avoids all banned families: no graphite plus ember, no near black plus neon, no
beige plus brass, no violet glow.

## Locked type
Display `Outfit` (300/400/600), technical labels and figures `IBM Plex Mono`
(400/500). No serif: the brand is an engineering practice, not an editorial or
heritage house. Display base `text-4xl md:text-6xl tracking-tighter leading-none`,
body `text-base leading-relaxed max-w-[65ch]`.

## Section plan (one layout family each, no consecutive repeats)
1. Hero + scroll journey - full viewport seam locked chapters (family: cinematic scrub)
2. Positionnement - asymmetric two column statement over hairline rules (family: editorial split)
3. Solutions - horizontal scroll rail of six domains (family: horizontal rail)
4. Segments - stacked full bleed rows divided by rules (family: divided rows)
5. Methode - numbered vertical timeline on the left, sticky note on the right (family: timeline)
6. Marques - logo grid, marks only, no captions (family: logo grid)
7. Contact - split form and coordinates (family: form split)

Eyebrow budget: ceil(7/3) = 2 eyebrows page wide.

## Asset plan
Scene 1 entry still, 4 seam locked MP4 legs (desktop + mobile encodes + first
frame posters), KNX MAROC monogram and favicon, custom icon set for the six
solution domains, six partner brand marks as inline SVG monograms, OG cover and
marketplace cover.

## CTA inventory (bespoke chrome, no shared button utility)
- `EtudeCta` - primary, ink block with blueprint blue underline that draws on
  hover, label "Demander une etude". Used in nav, hero chapter 1 and contact.
- `RappelCta` - secondary, hairline outline with a mono label and a caret that
  slides, label "Etre rappele". Used in the contact section only.
- `DomaineCta` - tertiary inline link inside each solution card, label is the
  domain name with an animated rule underneath.
- `MarqueCta` - quiet text link in the brands section, label "Voir la gamme".

One label per CTA intent page wide: "Demander une etude" is the only primary
contact label, repeated verbatim everywhere it appears.
