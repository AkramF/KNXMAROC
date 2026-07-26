import { useState } from "react";

import { useRevelation } from "../../lib/use-revelation";
import { TitreRevele } from "../lumiere/titre-revele";
import { Eyebrow } from "./sections";

export interface QuestionFaq {
  question: string;
  reponse: string;
}

const QUESTIONS_FAQ: QuestionFaq[] = [
  {
    question: "Pourquoi KNX est-il considéré comme le meilleur standard domotique au monde ?",
    reponse:
      "KNX est la seule norme internationale ouverte (ISO/IEC 14543-3) d'automatisation du bâtiment. Contrairement aux systèmes fermés ou sans-fil, KNX fonctionne sur un bus filaire physique décentralisé à très haute fiabilité. Plus de 500 fabricants mondiaux (Gira, JUNG, Basalte, ABB, Schneider Electric) conçoivent des équipements 100 % interopérables sur le même câble, garantissant une pérennité de 30 à 50 ans.",
  },
  {
    question: "Quelle est la différence entre KNX et une domotique sans-fil (Zigbee, Wi-Fi) ?",
    reponse:
      "Les solutions sans-fil grand public conviennent au petit retrofit mais s'épuisent sur les grandes superficies. Pour une villa ou un hôtel, le câble bus KNX garantit zéro latence, aucune saturation radio, aucune dépendance aux batteries ou au cloud, et une réactivité instantanée à chaque pression d'interrupteur.",
  },
  {
    question: "Suis-je bloqué avec un seul fabricant ou un installateur unique ?",
    reponse:
      "Non, c'est le principe fondateur de KNX. Vous pouvez associer un clavier en laiton Basalte, des détecteurs Gira et des actionneurs Schneider sur la même installation. À la réception du chantier, KNX MAROC vous remet l'intégralité du fichier de programmation ETS (.knxproj). Vous restez 100 % propriétaire de votre installation et n'importe quel intégrateur certifié dans le monde peut la maintenir.",
  },
  {
    question: "À quel moment du projet de construction faut-il consulter KNX MAROC ?",
    reponse:
      "Le moment le plus fluide et efficace est la phase d'études (APS/APD), avant que le réseau électrique ne soit posé. Nous travaillons en coordination directe avec votre architecte et votre bureau d'études électricité pour concevoir l'infrastructure filaire optimale.",
  },
  {
    question: "KNX est-il adapté aux fortes exigences de climatisation au Maroc ?",
    reponse:
      "Absolument. KNX excelle dans la régulation thermique multi-zones (FCU, plancher chauffant, VRV/VRF). En croisant la détection de présence, la position solaire des stores et les contacts d'ouverture de fenêtres, KNX réduit la facture de climatisation jusqu'à 32 % tout en maintenant un confort de consigne optimal.",
  },
];

export function Faq() {
  const ref = useRevelation<HTMLElement>();
  const [ouvertId, setOuvertId] = useState<number | null>(0); // La 1ère question est ouverte par défaut

  const basculer = (index: number) => {
    setOuvertId((prev) => (prev === index ? null : index));
  };

  return (
    <section className="border-t border-rule bg-ardoise/70 backdrop-blur-[2px]" id="faq" ref={ref}>
      <div className="mx-auto w-full max-w-[1480px] px-5 py-28 md:px-10 md:py-40">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="revelation lg:col-span-5">
            <Eyebrow>Questions Fréquentes</Eyebrow>
            <TitreRevele
              as="h2"
              className="mt-7 font-display text-4xl font-semibold leading-[0.95] tracking-[-0.04em] text-chalk md:text-[3.75rem]"
              texte={"Pourquoi choisir le standard KNX."}
            />
            <p className="mt-8 text-lg leading-relaxed text-graphite">
              Retrouvez l'essentiel des réponses techniques et stratégiques concernant l'intégration
              du standard KNX dans vos projets résidentiels et tertiaires au Maroc.
            </p>

            <div className="mt-10 rounded border border-blueprint/30 bg-blueprint/5 p-6 font-mono text-xs text-blueprint">
              <span className="font-semibold uppercase">Norme ISO/IEC 14543-3 :</span> Standard
              mondial éprouvé depuis plus de 30 ans sur les plus grands bâtiments de prestige.
            </div>
          </div>

          <div className="revelation lg:col-span-7">
            <div className="space-y-4">
              {QUESTIONS_FAQ.map((item, index) => {
                const estOuvert = ouvertId === index;
                const reponseId = `faq-reponse-${index}`;
                return (
                  <div
                    className={`border transition-colors duration-300 ${
                      estOuvert
                        ? "border-blueprint bg-encre/90"
                        : "border-rule-strong/50 bg-encre/50 hover:border-rule-strong"
                    }`}
                    key={item.question}
                  >
                    <button
                      aria-controls={reponseId}
                      aria-expanded={estOuvert}
                      className="flex w-full items-center justify-between gap-6 p-6 text-left"
                      onClick={() => basculer(index)}
                      type="button"
                    >
                      <h3 className="font-display text-lg font-medium tracking-tight text-chalk md:text-xl">
                        {item.question}
                      </h3>
                      <span
                        className={`flex h-8 w-8 shrink-0 items-center justify-center border font-mono text-sm transition-transform duration-300 ${
                          estOuvert
                            ? "border-blueprint bg-blueprint text-encre rotate-180"
                            : "border-rule-strong text-graphite"
                        }`}
                      >
                        ↓
                      </span>
                    </button>

                    {estOuvert && (
                      <div className="border-t border-rule/50 px-6 pb-6 pt-4" id={reponseId}>
                        <p className="text-base leading-relaxed text-graphite">{item.reponse}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
