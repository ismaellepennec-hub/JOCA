import type { Metadata } from "next";
import CTAButton from "@/components/CTAButton";
import MirrorQuestion from "@/components/MirrorQuestion";

export const metadata: Metadata = {
  title: "Offre",
  description:
    "Diagnostic, structuration et monitoring du dispositif de contrôle des délégataires — une intervention structurée par JOCA Services.",
};

export default function Offre() {
  return (
    <>
      {/* BLOC 1 — HERO */}
      <section className="bg-white py-24 md:py-32">
        <div className="mx-auto max-w-[1120px] px-6">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-navy max-w-3xl leading-tight">
            Une intervention structurée.
          </h1>
          <p className="mt-4 font-serif text-xl text-navy/60">
            L&apos;accompagnement s&apos;organise autour de trois briques
            complémentaires
          </p>
          <p className="mt-8 max-w-2xl text-navy/70 leading-relaxed">
            Chaque intervention est construite après un premier échange
            permettant d&apos;évaluer la situation et le niveau
            d&apos;accompagnement adapté.
          </p>
        </div>
      </section>

      {/* BLOC 2 — QUESTION MIROIR */}
      <MirrorQuestion />

      {/* BLOC 3 — BRIQUE 1 : DIAGNOSTIC */}
      <section className="bg-gray-light py-20">
        <div className="mx-auto max-w-[1120px] px-6">
          <p className="text-xs font-medium text-navy/40 uppercase tracking-widest">
            Brique 01
          </p>
          <h2 className="mt-3 font-serif text-3xl md:text-4xl font-semibold text-navy max-w-3xl">
            Diagnostic structuré
          </h2>
          <p className="mt-2 font-serif text-lg italic text-navy/60">
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
              Lorsque plusieurs directions interviennent, le dispositif peut
              devenir difficile à présenter de manière claire et structurée.
            </p>
            <p>
              Les responsabilités sont réparties entre plusieurs équipes, les
              preuves sont dispersées et la logique globale du contrôle
              n&apos;est pas toujours formalisée.
            </p>
          </div>

          <h3 className="mt-10 font-serif text-2xl font-semibold text-navy">
            Objectif de la mission
          </h3>
          <ul className="mt-4 list-none space-y-2 text-navy/70 max-w-2xl">
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
              <span>
                Clarifier la gouvernance des contrôles et des actions correctives
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-navy/40">·</span>
              <span>
                Renforcer la traçabilité des contrôles et des actions correctives
              </span>
            </li>
          </ul>
          <p className="mt-6 font-medium text-navy max-w-2xl leading-relaxed">
            L&apos;objectif n&apos;est pas d&apos;ajouter de nouveaux contrôles.
            L&apos;objectif est de structurer un dispositif lisible et
            démontrable.
          </p>

          <h3 className="mt-10 font-serif text-2xl font-semibold text-navy">
            Résultats
          </h3>
          <ul className="mt-4 list-none space-y-2 text-navy/70 max-w-2xl">
            <li className="flex items-start gap-2">
              <span className="text-navy/40">·</span>
              <span>Un diagnostic indépendant du dispositif</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-navy/40">·</span>
              <span>
                Une vision consolidée des délégations et du dispositif de
                contrôle
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-navy/40">·</span>
              <span>Un plan d&apos;actions priorisé</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-navy/40">·</span>
              <span>
                Des recommandations visant à renforcer la gouvernance et la
                traçabilité
              </span>
            </li>
          </ul>
        </div>
      </section>

      {/* BLOC 4 — BRIQUE 2 : STRUCTURATION */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-[1120px] px-6">
          <p className="text-xs font-medium text-navy/40 uppercase tracking-widest">
            Brique 02
          </p>
          <h2 className="mt-3 font-serif text-3xl md:text-4xl font-semibold text-navy max-w-3xl">
            Structuration opérationnelle
          </h2>
          <p className="mt-2 font-serif text-lg italic text-navy/60">
            Formaliser un cadre structuré à partir du diagnostic
          </p>

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
                <span>Consolider la gouvernance du dispositif</span>
              </li>
            </ul>
            <p className="font-medium text-navy">
              L&apos;objectif est de disposer d&apos;un dispositif cohérent,
              lisible et pilotable.
            </p>
          </div>
        </div>
      </section>

      {/* BLOC 5 — BRIQUE 3 : MONITORING */}
      <section className="bg-gray-light py-20">
        <div className="mx-auto max-w-[1120px] px-6">
          <p className="text-xs font-medium text-navy/40 uppercase tracking-widest">
            Brique 03
          </p>
          <h2 className="mt-3 font-serif text-3xl md:text-4xl font-semibold text-navy max-w-3xl">
            Gouvernance &amp; monitoring
          </h2>
          <p className="mt-2 font-serif text-lg italic text-navy/60">
            Maintenir la cohérence du dispositif dans le temps
          </p>

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
                <span>Identifier les risques de dérive</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-navy/40">·</span>
                <span>
                  Préserver la lisibilité et la capacité de démonstration
                </span>
              </li>
            </ul>
            <p className="font-medium text-navy">
              L&apos;objectif est d&apos;éviter que le dispositif ne perde
              progressivement sa cohérence.
            </p>
          </div>
        </div>
      </section>

      {/* BLOC 6 — MODALITÉS + CTA FINAL */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-[1120px] px-6">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-navy max-w-3xl">
            Modalités d&apos;intervention
          </h2>
          <p className="mt-6 text-navy/70 leading-relaxed">
            Chaque intervention est adaptée&nbsp;:
          </p>
          <ul className="mt-4 list-none space-y-2 text-navy/70 max-w-2xl">
            <li className="flex items-start gap-2">
              <span className="text-navy mt-0.5">—</span>
              <span>à la maturité du dispositif</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-navy mt-0.5">—</span>
              <span>au niveau de structuration existant</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-navy mt-0.5">—</span>
              <span>aux enjeux de gouvernance</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-navy mt-0.5">—</span>
              <span>au périmètre concerné</span>
            </li>
          </ul>
          <p className="mt-6 text-navy/70 leading-relaxed">
            Une proposition est construite après un premier échange.
          </p>

          <div className="border-t border-gray-border mt-12 mb-12" />

          <div className="text-center">
            <p className="text-navy/70 leading-relaxed max-w-xl mx-auto">
              Vous souhaitez clarifier votre dispositif ou évaluer le niveau
              d&apos;intervention adapté&nbsp;?
            </p>
            <div className="mt-8">
              <CTAButton
                href="/contact"
                label="Faire un point sur votre situation"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
