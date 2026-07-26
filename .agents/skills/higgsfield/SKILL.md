---
name: higgsfield
description: Générer, télécharger et intégrer automatiquement des visuels (images et vidéos) depuis Higgsfield AI pour le site KNX MAROC. S'active lorsque l'utilisateur souhaite créer des prompts, lier Higgsfield ou télécharger des rendus.
---

# Skill Higgsfield AI pour Antigravity

Ce skill permet à Antigravity d'interagir directement avec l'écosystème Higgsfield AI pour générer, récupérer et intégrer des visuels photoréalistes et cinématiques sur le site **KNX MAROC**.

## 1. Structure d'Intégration

L'intégration repose sur 3 mécanismes :

1. **Génération de Prompts d'Élite** : Formulation automatique de prompts adaptés au moteur Higgsfield (`/hyperframes`, `/photoreal`, `/motion`).
2. **Script de Récupération Automatique** : Script Bash / Node dans `scripts/fetch-higgsfield.sh` qui interroge ou télécharge les URLs Higgsfield Cloudfront.
3. **Pipeline d'Intégration Web** : Ingestion automatique des assets dans `public/assets/world/` et synchronisation avec le héros vidéo/image (`scroll-scrub.tsx`).

## 2. Configuration MCP (Model Context Protocol) & Clé API

Le serveur MCP officiel d'Higgsfield est disponible à l'adresse suivante :
`https://mcp.higgsfield.ai/mcp`

### Configuration MCP JSON :

```json
{
  "mcpServers": {
    "higgsfield": {
      "url": "https://mcp.higgsfield.ai/mcp",
      "type": "sse"
    }
  }
}
```

Les identifiants et clés API locales peuvent également s'inscrire dans `.env.local` :

```env
# URL du Serveur MCP Higgsfield
HIGGSFIELD_MCP_URL=https://mcp.higgsfield.ai/mcp

# Si utilisation de l'API Higgsfield v2 / Client ID
HIGGSFIELD_API_KEY=votre_cle_api_higgsfield
HIGGSFIELD_USER_ID=user_3H0ObVqxuFE92uSehkAHQtDZLyP
HIGGSFIELD_CDN_BASE=https://d8j0ntlcm91z4.cloudfront.net/user_3H0ObVqxuFE92uSehkAHQtDZLyP
```

## 3. Prompts d'Élite Dédiés aux Matériels & Intégrations KNX

Pour que le héros montre explicitement l'intégration du standard KNX (interrupteurs, tableau DIN, écran de supervision) :

### Scène 1 : Le Clavier KNX (Interrupteur / Commande Tactile)

```text
/hyperframes Extreme macro photoreal shot of a high-end luxury KNX wall keypad, brushed dark bronze metal finish, engraved icons for LIGHTS, SHADES and CLIMATE, illuminated by tiny soft blueprint blue LED indicators, flush-mounted into a dark lime plaster wall, eye-level cinematic shot, a finger touching the switch button, architectural lighting 3000K, ultra-sharp focus on the keypad hardware details, ISO/IEC 14543-3 engineering precision, 8k resolution, 85mm lens f/1.8 --ar 16:9
```

### Scène 2 : L'Armoire Technique KNX (Tableau & Rail DIN)

```text
/hyperframes Cinematography of an open luxury home automation technical cabinet, perfectly aligned KNX DIN-rail modules with green KNX bus wiring, illuminated status LEDs for lighting actuators and climate controllers, precision electrical engineering, dark moody technical room, architectural detail shot, ultra-clean cabling, 8k resolution, 50mm lens f/2.0 --ar 16:9
```

### Scène 3 : Écran Tactile & Supervision KNX (OLED Wall Panel)

```text
/hyperframes Close-up shot of a flush-mounted luxury KNX wall touchscreen panel, dark OLED display showing a high-tech blueprint wireframe 3D villa layout, blue vector graphics displaying temperature 21.5°C, DALI dimming sliders, and KNX system status, mounted on dark travertine wall in a modern villa at night, soft ambient indoor lighting, 8k resolution, photorealistic, 35mm lens --ar 16:9
```

## 4. Workflow de Génération & Récupération

1. **Copier/Coller les Prompts ci-dessus dans Higgsfield AI** (Image-to-Video ou Text-to-Video avec travelling avant lent).
2. **Récupérer l'URL/Nom du fichier rendu**.
3. **Exécuter la mise à jour** via `./scripts/fetch-higgsfield.sh` ou `./3-installer-les-videos.sh`.
