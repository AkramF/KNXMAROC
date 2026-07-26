#!/usr/bin/env bash
#
# Télécharge les 6 propositions d'images générées pour le héros et ouvre le
# dossier pour que tu les regardes.
#
#     bash ~/Desktop/KNXMAROC/2-voir-les-images.sh
#
set -euo pipefail

DEST="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)/_candidats-hero"
mkdir -p "$DEST"

BASE="https://d8j0ntlcm91z4.cloudfront.net/user_3H0ObVqxuFE92uSehkAHQtDZLyP"

echo "==> Téléchargement des 6 propositions..."

# Scène 1 — clavier KNX mural (remplace « le seuil »)
curl -sL "$BASE/hf_20260726_122437_9bfd7a00-e8e9-4903-8f81-0b73dfc4af27.png" -o "$DEST/1-clavier-A.png"
curl -sL "$BASE/hf_20260726_122437_1524137b-8ee1-4875-b60b-5c8ff64cad2f.png" -o "$DEST/1-clavier-B.png"

# Scène 2 — armoire technique sur rail DIN
curl -sL "$BASE/hf_20260726_122503_6058dac9-27d5-40d9-965a-871eb39b414d.png" -o "$DEST/2-armoire-A.png"
curl -sL "$BASE/hf_20260726_122503_06cf3945-49b0-46d6-8750-f3fe98628439.png" -o "$DEST/2-armoire-B.png"

# Scène 3 — écran de supervision
curl -sL "$BASE/hf_20260726_122516_d268457c-754c-46d5-a508-8c11ed4a3c76.png" -o "$DEST/3-supervision-A.png"
curl -sL "$BASE/hf_20260726_122516_85740267-b378-4b8d-a0ef-dcb7a29eb27a.png" -o "$DEST/3-supervision-B.png"

echo ""
for f in "$DEST"/*.png; do
  printf "  %-28s %s\n" "$(basename "$f")" "$(du -h "$f" | cut -f1)"
done

echo ""
echo "OK. Le dossier s'ouvre — regarde les 6 et dis-moi lesquelles tu gardes"
echo "(par exemple : « 1-clavier-B, 2-armoire-A, 3-supervision-A »)."
open "$DEST" 2>/dev/null || true
