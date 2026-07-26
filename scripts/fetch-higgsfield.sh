#!/usr/bin/env bash
#
# Helper script d'intégration Higgsfield pour Antigravity & KNX MAROC
#
# Usage:
#   ./scripts/fetch-higgsfield.sh <URL_OU_FILENAME_HIGGSFIELD> <NOM_DE_DESTINATION>
#
set -euo pipefail

DEST_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)/_candidats-hero"
mkdir -p "$DEST_DIR"

BASE_CDN="${HIGGSFIELD_CDN_BASE:-https://d8j0ntlcm91z4.cloudfront.net/user_3H0ObVqxuFE92uSehkAHQtDZLyP}"

INPUT="${1:-}"
OUTPUT_NAME="${2:-rendu_higgsfield.png}"

if [ -z "$INPUT" ]; then
    echo "Usage: ./scripts/fetch-higgsfield.sh <URL_OU_HASH> [Nom_Fichier_Destination]"
    echo "Exemple: ./scripts/fetch-higgsfield.sh hf_20260726_124624_10f55d31.png hero-1.png"
    exit 1
fi

if [[ "$INPUT" =~ ^https?:// ]]; then
    TARGET_URL="$INPUT"
else
    TARGET_URL="$BASE_CDN/$INPUT"
fi

DEST_FILE="$DEST_DIR/$OUTPUT_NAME"

echo "==> Téléchargement depuis Higgsfield CDN..."
echo "URL : $TARGET_URL"
echo "Dest : $DEST_FILE"

curl -sL "$TARGET_URL" -o "$DEST_FILE"

if [ -f "$DEST_FILE" ]; then
    SIZE=$(du -h "$DEST_FILE" | cut -f1)
    echo "✅ Téléchargement réussi ($SIZE) : $DEST_FILE"
else
    echo "❌ Échec du téléchargement."
    exit 1
fi
