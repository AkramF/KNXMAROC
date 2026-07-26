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

## 3. Workflow de Génération & Récupération

Quand l'utilisateur demande une nouvelle image ou séquence vidéo pour le héros :

1. **Rédiger le Prompt Higgsfield** en respectant la grammaire visuelle du projet (3000K, plâtre mat, travertin, laiton brossé, bleu de plan `#7FA8E8`).
2. **Exécuter la génération** via l'API ou fournir le lien Cloudfront/ID d'image.
3. **Lancer le téléchargement** et la conversion via le script `scripts/fetch-higgsfield.sh`.
4. **Vérifier le contraste et l'intégration** dans `src/components/scroll-scrub/schema-knx.tsx`.
