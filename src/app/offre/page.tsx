import type { Metadata } from "next";
import CTAButton from "@/components/CTAButton";

export const metadata: Metadata = {
  title: "Offre",
  description:
    "Diagnostic, structuration et monitoring du dispositif de contrôle des délégataires — une intervention structurée par JOCA Services.",
};

export default function Offre() {
  return (
    <>
      {/* INTRODUCTION */}
      <section className="bg-white py-24 md:py-32">
        <div className="mx-auto max-w-[1120px] px-6">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-navy max-w-3xl leading-tight">
            Une intervention structurée.
          </h1>
          <p className="mt-6 text-lg text-navy/70 max-w-2xl leading-relaxed">
            L&apos;accompagnement s&apos;organise autour de trois briques
            complémentaires.
          </p>
        </div>
      </section>

      {/* BRIQUE 1 — DIAGNOSTIC */}
      <section className="bg-gray-light py-20">
        <div className="mx-auto max-w-[1120px] px-6">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-navy">
            Diagnostic du dispositif de contrôle des délégataires
          </h2>
          <p className="mt-2 text-navy/60 text-lg">
            Une analyse indépendante visant à clarifier l&apos;organisation du
            dispositif
          </p>

          <div className="mt-8 max-w-2xl space-y-4 text-navy/70 leading-relaxed">
            <p>
              De nombreux organismes assureurs s&apos;appuient sur des
              délégataires pour la gestion des prestations, la relation adhérents
              ou certaines fonctions opérationnelles.
            </p>
            <p>
              Avec le temps, les contrôles se mettent en place progressivement.
              Cependant, lorsque plusieurs directions interviennent, le
              dispositif peut devenir difficile à présenter de manière claire et
              structurée.
            </p>
            <p>
              Les responsabilités sont réparties entre plusieurs équipes, les
              preuves sont dispersées et la logique globale du contrôle
              n&apos;est pas toujours formalisée.
            </p>
          </div>

          {/* Question miroir */}
          <p className="mt-10 font-serif text-xl italic text-navy/80 max-w-2xl leading-relaxed border-l-2 border-navy pl-6">
            Seriez-vous aujourd&apos;hui en mesure de présenter de manière
            claire l&apos;organisation complète de votre dispositif de contrôle
            des délégataires&nbsp;?
          </p>

          {/* Objectif */}
          <h3 className="mt-12 font-serif text-2xl font-semibold text-navy">
            Objectif de la mission
          </h3>
          <div className="mt-4 max-w-2xl space-y-4 text-navy/70 leading-relaxed">
            <p>Le diagnostic vise à&nbsp;:</p>
            <ul className="list-none space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-navy/40">·</span>
                <span>Établir une lecture claire du dispositif existant</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-navy/40">·</span>
                <span>Identifier les éventuelles zones de fragilité</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-navy/40">·</span>
                <span>Clarifier la gouvernance de contrôles et des actions correctives</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-navy/40">·</span>
                <span>Renforcer la traçabilité des contrôles et des actions correctives.</span>
              </li>
            </ul>
            <p>
              L&apos;objectif n&apos;est pas d&apos;ajouter de nouveaux
              contrôles.
            </p>
            <p className="font-medium text-navy">
              L&apos;objectif est de structurer un dispositif lisible et
              démontrable.
            </p>
          </div>

          {/* Résultats */}
          <h3 className="mt-12 font-serif text-2xl font-semibold text-navy">
            Résultats
          </h3>
          <div className="mt-4 max-w-2xl space-y-4 text-navy/70 leading-relaxed">
            <p>
              À l&apos;issue de la mission, l&apos;organisation dispose
              notamment&nbsp;:
            </p>
            <ul className="list-none space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-navy/40">·</span>
                <span>D&apos;un diagnostic indépendant du dispositif</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-navy/40">·</span>
                <span>D&apos;une vision consolidée des délégations et du dispositif de contrôle</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-navy/40">·</span>
                <span>D&apos;un plan d&apos;actions priorisé</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-navy/40">·</span>
                <span>De recommandations visant à renforcer la gouvernance et la traçabilité.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* BRIQUE 2 — STRUCTURATION */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-[1120px] px-6">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-navy">
            Structuration du dispositif
          </h2>
          <div className="mt-8 max-w-2xl space-y-4 text-navy/70 leading-relaxed">
            <p>
              À partir du diagnostic, cette phase vise à formaliser un cadre
              structuré permettant d&apos;organiser le contrôle des
              délégataires.
            </p>
            <p>L&apos;intervention consiste notamment à&nbsp;:</p>
            <ul className="list-none space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-navy/40">·</span>
                <span>Clarifier les responsabilités entre directions</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-navy/40">·</span>
                <span>Formaliser les processus de contrôle</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-navy/40">·</span>
                <span>Structurer les supports de traçabilité</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-navy/40">·</span>
                <span>Consolider la gouvernance du dispositif.</span>
              </li>
            </ul>
            <p className="font-medium text-navy">
              L&apos;objectif est de disposer d&apos;un dispositif cohérent,
              lisible et pilotable.
            </p>
          </div>
        </div>
      </section>

      {/* BRIQUE 3 — MONITORING */}
      <section className="bg-gray-light py-20">
        <div className="mx-auto max-w-[1120px] px-6">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-navy">
            Monitoring du dispositif
          </h2>
          <div className="mt-8 max-w-2xl space-y-4 text-navy/70 leading-relaxed">
            <p>
              Une fois le dispositif structuré, l&apos;enjeu est de maintenir sa
              cohérence dans le temps.
            </p>
            <p>Cette intervention vise à&nbsp;:</p>
            <ul className="list-none space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-navy/40">·</span>
                <span>Suivre l&apos;évolution du dispositif</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-navy/40">·</span>
                <span>Ajuster l&apos;organisation des contrôles</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-navy/40">·</span>
                <span>Accompagner les évolutions organisationnelles</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-navy/40">·</span>
                <span>Préserver la lisibilité du dispositif.</span>
              </li>
            </ul>
            <p className="font-medium text-navy">
              L&apos;objectif est d&apos;éviter que le dispositif ne perde
              progressivement sa cohérence.
            </p>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-[1120px] px-6">
          <CTAButton
            href="/contact"
            label="Engager un échange stratégique"
          />
        </div>
      </section>
    </>
  );
}
