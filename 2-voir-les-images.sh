#!/usr/bin/env bash
#
# Télécharge les propositions d'images générées pour le héros et ouvre le
# dossier pour que tu les regardes.
#
#     bash ~/Desktop/KNXMAROC/2-voir-les-images.sh
#
set -euo pipefail

DEST="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)/_candidats-hero"
mkdir -p "$DEST"

BASE="${HIGGSFIELD_CDN_BASE:-https://d8j0ntlcm91z4.cloudfront.net/user_3H0ObVqxuFE92uSehkAHQtDZLyP}"

echo "==> Téléchargement des propositions..."

# ── Série sombre, faite pour la nouvelle direction ──────────────────
# Macro du clavier mural : la chose que le client touche, gros plan, nuit.
curl -sL "$BASE/hf_20260726_124624_10f55d31-219c-4f0d-9136-2efe99618098.png" -o "$DEST/SOMBRE-1-clavier-macro-A.png"
curl -sL "$BASE/hf_20260726_124624_01dad58d-3e1d-4757-97fb-02ddce0dac71.png" -o "$DEST/SOMBRE-1-clavier-macro-B.png"
# Séjour à la tombée du jour : seules les lignes de lumière subsistent.
curl -sL "$BASE/hf_20260726_124636_07c30f94-1e0d-46da-9ff9-efb2ebf78aab.png" -o "$DEST/SOMBRE-2-sejour-nuit-A.png"
curl -sL "$BASE/hf_20260726_124636_b3e18800-1952-4c6e-abbb-9abd5c7d6fba.png" -o "$DEST/SOMBRE-2-sejour-nuit-B.png"

# ── Série claire, générée avant le passage en sombre ────────────────
# Conservée au cas où tu préfères l'une d'elles ; elles demanderont un
# étalonnage plus poussé pour tenir sur le fond noir.
curl -sL "$BASE/hf_20260726_122437_9bfd7a00-e8e9-4903-8f81-0b73dfc4af27.png" -o "$DEST/clair-1-clavier-A.png"
curl -sL "$BASE/hf_20260726_122437_1524137b-8ee1-4875-b60b-5c8ff64cad2f.png" -o "$DEST/clair-1-clavier-B.png"
curl -sL "$BASE/hf_20260726_122503_6058dac9-27d5-40d9-965a-871eb39b414d.png" -o "$DEST/clair-2-armoire-A.png"
curl -sL "$BASE/hf_20260726_122503_06cf3945-49b0-46d6-8750-f3fe98628439.png" -o "$DEST/clair-2-armoire-B.png"
curl -sL "$BASE/hf_20260726_122516_d268457c-754c-46d5-a508-8c11ed4a3c76.png" -o "$DEST/clair-3-supervision-A.png"
curl -sL "$BASE/hf_20260726_122516_85740267-b378-4b8d-a0ef-dcb7a29eb27a.png" -o "$DEST/clair-3-supervision-B.png"

echo ""
for f in "$DEST"/*.png; do
  printf "  %-34s %s\n" "$(basename "$f")" "$(du -h "$f" | cut -f1)"
done

echo ""
echo "OK. Le dossier s'ouvre — regarde et dis-moi lesquelles tu gardes."
echo "Les fichiers SOMBRE-* sont pensés pour la nouvelle direction."
open "$DEST" 2>/dev/null || true
