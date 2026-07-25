import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

export const SEGMENTS = {
  residentiel: "Résidentiel",
  hotellerie: "Hôtellerie",
  tertiaire: "Tertiaire",
  retail: "Retail",
} as const;

export const PHASES = {
  etudes: "Phase études",
  chantier: "Chantier en cours",
  existant: "Bâtiment existant",
} as const;

/* Le même schéma valide côté client (pour attribuer chaque message au bon
 * champ) et côté serveur (parce qu'une validation client ne protège rien). */
export const demandeSchema = z.object({
  nom: z.string().trim().min(2, "Indiquez votre nom.").max(120, "Ce nom dépasse 120 caractères."),
  organisation: z.string().trim().max(160, "Ce nom dépasse 160 caractères.").optional().default(""),
  email: z
    .string()
    .trim()
    .email("Cette adresse e-mail n'est pas valide.")
    .max(180, "Cette adresse dépasse 180 caractères."),
  telephone: z.string().trim().max(40, "Ce numéro dépasse 40 caractères.").optional().default(""),
  ville: z.string().trim().max(80, "Ce nom de ville dépasse 80 caractères.").optional().default(""),
  segment: z.enum(["residentiel", "hotellerie", "tertiaire", "retail"]),
  phase: z.enum(["etudes", "chantier", "existant"]),
  message: z
    .string()
    .trim()
    .min(20, "Décrivez le projet en quelques lignes, 20 caractères au moins.")
    .max(4000, "Ce message dépasse 4000 caractères."),
});

export type DemandeInput = z.input<typeof demandeSchema>;
export type DemandeChamp = keyof DemandeInput;

export type ResultatDemande = { ok: true } | { ok: false; raison: "configuration" | "livraison" };

function echapper(valeur: string) {
  return valeur
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function corpsHtml(data: z.output<typeof demandeSchema>) {
  const lignes: [string, string][] = [
    ["Nom", data.nom],
    ["Société ou cabinet", data.organisation || "—"],
    ["E-mail", data.email],
    ["Téléphone", data.telephone || "—"],
    ["Ville du projet", data.ville || "—"],
    ["Type de projet", SEGMENTS[data.segment]],
    ["Phase", PHASES[data.phase]],
  ];

  return `<table style="border-collapse:collapse;font-family:system-ui,sans-serif;font-size:14px">
${lignes
  .map(
    ([cle, valeur]) =>
      `<tr><td style="padding:4px 16px 4px 0;color:#5c6266">${echapper(cle)}</td><td style="padding:4px 0"><strong>${echapper(valeur)}</strong></td></tr>`,
  )
  .join("\n")}
</table>
<p style="font-family:system-ui,sans-serif;font-size:14px;white-space:pre-wrap;margin-top:24px">${echapper(data.message)}</p>`;
}

/* Envoi par Resend. Aucune base de données : la demande part directement dans
 * la boîte de KNX MAROC, avec le prospect en reply-to pour répondre d'un clic. */
export const envoyerDemande = createServerFn({ method: "POST" })
  .inputValidator(demandeSchema)
  .handler(async ({ data }): Promise<ResultatDemande> => {
    const cle = process.env.RESEND_API_KEY;
    const destinataire = process.env.CONTACT_TO ?? "contact@knxmaroc.ma";
    const expediteur = process.env.CONTACT_FROM ?? "Site KNX MAROC <site@knxmaroc.ma>";

    if (!cle) {
      console.error("RESEND_API_KEY absente : la demande n'a pas pu être envoyée.");
      return { ok: false, raison: "configuration" };
    }

    try {
      const reponse = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${cle}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: expediteur,
          to: [destinataire],
          reply_to: data.email,
          subject: `Demande d'étude — ${data.nom}${data.organisation ? ` (${data.organisation})` : ""} — ${SEGMENTS[data.segment]}`,
          html: corpsHtml(data),
        }),
      });

      if (!reponse.ok) {
        console.error(`Resend a répondu ${reponse.status}: ${await reponse.text()}`);
        return { ok: false, raison: "livraison" };
      }

      return { ok: true };
    } catch (error) {
      console.error(error);
      return { ok: false, raison: "livraison" };
    }
  });
