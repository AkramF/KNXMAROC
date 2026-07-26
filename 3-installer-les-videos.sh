#!/usr/bin/env bash
#
# Installe les trois vidéos sombres du héros dans public/assets/world/.
#
#     bash ~/Desktop/KNXMAROC/3-installer-les-videos.sh
#
# Les clips ont été générés en image-to-video : travelling avant lent et
# constant, sans coupe — c'est ce que le scrub au scroll exige, un plan qui
# se laisse parcourir image par image.
#
set -euo pipefail

RACINE="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
DEST="$RACINE/public/assets/world"
TMP="$(mktemp -d)"
trap 'rm -rf "$TMP"' EXIT
mkdir -p "$DEST"

B="https://d8j0ntlcm91z4.cloudfront.net/user_3H0ObVqxuFE92uSehkAHQtDZLyP"

# Chaque scène : le clip source, puis l'image de départ qui sert de poster.
SCENES=(
  "clavier|$B/hf_20260726_170214_f0655873-195e-4baf-903f-4167af141d1d.mp4|$B/hf_20260726_124624_10f55d31-219c-4f0d-9136-2efe99618098.png"
  "sejour|$B/hf_20260726_170225_1ed32ca1-f3fa-436a-81d8-bd834b3af30c.mp4|$B/hf_20260726_124636_07c30f94-1e0d-46da-9ff9-efb2ebf78aab.png"
  "supervision|$B/hf_20260726_170322_5d8af5e5-d044-43d5-b654-2ffd56f7b72d.mp4|$B/hf_20260726_170237_4782bae0-b52d-43ac-b73b-2e0d9aebf346.png"
)

if command -v ffmpeg >/dev/null 2>&1; then
  FFMPEG=1
  echo "==> ffmpeg détecté : encodes desktop + mobile optimisés."
else
  FFMPEG=0
  echo "==> ffmpeg absent : on installe les clips tels quels."
  echo "    (mobile recevra le même fichier que le desktop, ~2 Mo par scène)"
  echo "    Pour les encodes optimisés : brew install ffmpeg, puis relance."
fi

for scene in "${SCENES[@]}"; do
  IFS='|' read -r nom url_video url_poster <<< "$scene"
  echo ""
  echo "==> $nom"

  curl -sL "$url_video" -o "$TMP/$nom.mp4"
  curl -sL "$url_poster" -o "$TMP/$nom.png"

  if [ "$FFMPEG" = "1" ]; then
    # Le contenu est sombre et lent : il compresse très bien, mais c'est
    # exactement le cas où les dégradés se cassent en bandes. Un grain très
    # fin casse les paliers ; tune film préserve le détail dans les noirs.
    ffmpeg -y -i "$TMP/$nom.mp4" -vf "noise=alls=3:allf=t+u" \
      -c:v libx264 -preset medium -crf 19 -tune film -pix_fmt yuv420p \
      -movflags +faststart -an "$DEST/$nom.mp4" -loglevel error
    ffmpeg -y -i "$TMP/$nom.mp4" -vf "scale=854:480,noise=alls=3:allf=t+u" \
      -c:v libx264 -preset medium -crf 22 -tune film -pix_fmt yuv420p \
      -movflags +faststart -an "$DEST/$nom-mobile.mp4" -loglevel error
    ffmpeg -y -i "$TMP/$nom.mp4" -frames:v 1 -q:v 3 "$DEST/$nom-poster.jpg" -loglevel error
    ffmpeg -y -i "$TMP/$nom.mp4" -vf "scale=854:480" -frames:v 1 -q:v 4 \
      "$DEST/$nom-mobile-poster.jpg" -loglevel error
  else
    cp "$TMP/$nom.mp4" "$DEST/$nom.mp4"
    cp "$TMP/$nom.mp4" "$DEST/$nom-mobile.mp4"
    # sips est livré avec macOS : pas besoin d'installer quoi que ce soit.
    sips -s format jpeg -s formatOptions 82 "$TMP/$nom.png" \
      --out "$DEST/$nom-poster.jpg" >/dev/null 2>&1
    sips -s format jpeg -s formatOptions 78 -Z 854 "$TMP/$nom.png" \
      --out "$DEST/$nom-mobile-poster.jpg" >/dev/null 2>&1
  fi

  for f in "$nom.mp4" "$nom-mobile.mp4" "$nom-poster.jpg" "$nom-mobile-poster.jpg"; do
    printf "    %-30s %s\n" "$f" "$(du -h "$DEST/$f" | cut -f1)"
  done
done

echo ""
echo "==> Retrait des anciens rushes de plein jour"
rm -f "$DEST"/scene-*.mp4 "$DEST"/scene-*.jpg

echo ""
echo "Total du héros : $(du -sh "$DEST" | cut -f1)"
echo ""
echo "OK. Relance npm run dev — les nouveaux plans sont en place."
