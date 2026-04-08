import type { Metadata } from "next";
import CTAButton from "@/components/CTAButton";
import DelegataControlSimplified from "@/components/DelegataControlSimplified";

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
            Structurer le contrôle des délégataires pour qu&apos;il soit lisible,
            pilotable et démontrable
          </h1>
          <div className="mt-8 max-w-2xl space-y-4 text-navy/70 leading-relaxed">
            <p>
              Vos contrôles existent. Mais les preuves sont dispersées, les
              formats hétérogènes et personne ne peut en donner une lecture
              claire et consolidée.
            </p>
            <p className="font-medium text-navy">
              Nous structurons l&apos;ensemble pour le rendre compréhensible et
              mobilisable à tout moment.
            </p>
          </div>
          <div className="mt-10">
            <CTAButton
              href="/contact"
              label="Faire un point sur votre situation"
            />
          </div>
        </div>
      </section>

      {/* BLOC 2 — TENSION */}
      <section className="bg-navy py-16">
        <div className="mx-auto max-w-[1120px] px-6">
          <p className="font-serif italic text-2xl md:text-3xl text-white max-w-3xl mx-auto text-center leading-relaxed">
            Un dispositif peut fonctionner au quotidien… et devenir difficile à
            expliquer, à consolider ou à défendre dès qu&apos;il doit être
            présenté.
          </p>
        </div>
      </section>

      {/* BLOC 3 — INTRO OFFRE */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-[1120px] px-6">
          <p className="font-serif text-2xl md:text-3xl text-navy max-w-3xl leading-relaxed">
            Une intervention structurée en trois niveaux, adaptée à votre niveau
            de maturité.
          </p>
          <p className="mt-4 text-navy/70 max-w-2xl leading-relaxed">
            Objectif&nbsp;: rendre le dispositif lisible dans son ensemble, pas
            ajouter des contrôles isolés.
          </p>
        </div>
      </section>

      {/* BLOC 4 — BRIQUE 1 : DIAGNOSTIC */}
      <section className="bg-gray-light py-20">
        <div className="mx-auto max-w-[1120px] px-6">
          <p className="text-xs font-medium text-navy/40 uppercase tracking-widest">
            Brique 01
          </p>
          <h2 className="mt-3 font-serif text-3xl md:text-4xl font-semibold text-navy max-w-3xl">
            Diagnostic structuré
          </h2>
          <p className="mt-2 font-serif text-lg italic text-navy/60">
            Obtenir une lecture claire et indépendante du dispositif existant
          </p>

          <div className="mt-8 max-w-2xl space-y-4 text-navy/70 leading-relaxed">
            <p>
              Dans la plupart des organisations, le dispositif existe déjà. Mais
              il est réparti, peu lisible et difficile à présenter de manière
              consolidée.
            </p>
          </div>

          <h3 className="mt-10 font-serif text-2xl font-semibold text-navy">
            Ce que nous faisons
          </h3>
          <ul className="mt-4 list-none space-y-2 text-navy/70 max-w-2xl">
            <li className="flex items-start gap-2">
              <span className="text-navy/40">·</span>
              <span>Analyse des délégations en place</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-navy/40">·</span>
              <span>Revue des contrôles réalisés</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-navy/40">·</span>
              <span>Identification des responsabilités</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-navy/40">·</span>
              <span>Analyse des preuves disponibles</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-navy/40">·</span>
              <span>Évaluation de la gouvernance</span>
            </li>
          </ul>

          <h3 className="mt-10 font-serif text-2xl font-semibold text-navy">
            Résultat
          </h3>
          <ul className="mt-4 list-none space-y-2 text-navy/70 max-w-2xl">
            <li className="flex items-start gap-2">
              <span className="text-navy/40">·</span>
              <span>Une vision claire du dispositif réel</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-navy/40">·</span>
              <span>L&apos;identification des zones de fragilité</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-navy/40">·</span>
              <span>Un plan d&apos;actions priorisé</span>
            </li>
          </ul>

          <p className="mt-6 font-medium text-navy max-w-2xl leading-relaxed">
            L&apos;objectif n&apos;est pas d&apos;ajouter des contrôles, mais de
            rendre le dispositif lisible et démontrable.
          </p>
        </div>
      </section>

      {/* SCHÉMA DELEGATACONTROL™ SIMPLIFIÉ */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-[1120px] px-6">
          <DelegataControlSimplified />
        </div>
      </section>

      {/* BLOC 5 — BRIQUE 2 : STRUCTURATION */}
      <section className="bg-gray-light py-20">
        <div className="mx-auto max-w-[1120px] px-6">
          <p className="text-xs font-medium text-navy/40 uppercase tracking-widest">
            Brique 02
          </p>
          <h2 className="mt-3 font-serif text-3xl md:text-4xl font-semibold text-navy max-w-3xl">
            Structuration opérationnelle
          </h2>
          <p className="mt-2 font-serif text-lg italic text-navy/60">
            Mettre en place un dispositif cohérent, structuré et pilotable
          </p>

          <div className="mt-8 max-w-2xl space-y-4 text-navy/70 leading-relaxed">
            <p>
              À partir du diagnostic, nous structurons le dispositif pour le
              rendre exploitable et compréhensible par l&apos;ensemble des
              parties prenantes.
            </p>
          </div>

          <h3 className="mt-10 font-serif text-2xl font-semibold text-navy">
            Ce que nous faisons
          </h3>
          <ul className="mt-4 list-none space-y-2 text-navy/70 max-w-2xl">
            <li className="flex items-start gap-2">
              <span className="text-navy/40">·</span>
              <span>Clarification des rôles et responsabilités</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-navy/40">·</span>
              <span>Formalisation des processus</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-navy/40">·</span>
              <span>Structuration des supports de traçabilité</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-navy/40">·</span>
              <span>Organisation du pilotage</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-navy/40">·</span>
              <span>Consolidation de la gouvernance</span>
            </li>
          </ul>

          <h3 className="mt-10 font-serif text-2xl font-semibold text-navy">
            Résultat
          </h3>
          <ul className="mt-4 list-none space-y-2 text-navy/70 max-w-2xl">
            <li className="flex items-start gap-2">
              <span className="text-navy/40">·</span>
              <span>Un dispositif structuré et lisible</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-navy/40">·</span>
              <span>Une réduction de la dépendance aux individus</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-navy/40">·</span>
              <span>
                Une capacité à démontrer les contrôles à tout moment
              </span>
            </li>
          </ul>
        </div>
      </section>

      {/* BLOC 6 — BRIQUE 3 : MONITORING */}
      <section className="bg-white py-20">
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
              Une fois structuré, le dispositif doit rester aligné avec
              l&apos;organisation et ses évolutions.
            </p>
          </div>

          <h3 className="mt-10 font-serif text-2xl font-semibold text-navy">
            Ce que nous faisons
          </h3>
          <ul className="mt-4 list-none space-y-2 text-navy/70 max-w-2xl">
            <li className="flex items-start gap-2">
              <span className="text-navy/40">·</span>
              <span>Suivi de l&apos;évolution du dispositif</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-navy/40">·</span>
              <span>Ajustement des contrôles</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-navy/40">·</span>
              <span>
                Accompagnement des évolutions organisationnelles
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-navy/40">·</span>
              <span>Identification des dérives</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-navy/40">·</span>
              <span>Maintien de la capacité de démonstration</span>
            </li>
          </ul>

          <h3 className="mt-10 font-serif text-2xl font-semibold text-navy">
            Résultat
          </h3>
          <ul className="mt-4 list-none space-y-2 text-navy/70 max-w-2xl">
            <li className="flex items-start gap-2">
              <span className="text-navy/40">·</span>
              <span>Un dispositif stable dans le temps</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-navy/40">·</span>
              <span>Une gouvernance maîtrisée</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-navy/40">·</span>
              <span>Une lisibilité maintenue</span>
            </li>
          </ul>
        </div>
      </section>

      {/* BLOC 7 — DIFFÉRENCIATION */}
      <section className="bg-gray-light py-20">
        <div className="mx-auto max-w-[1120px] px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-3xl">
            <div>
              <h2 className="font-serif text-2xl font-semibold text-navy">
                Ce que nous ne faisons pas
              </h2>
              <ul className="mt-6 list-none space-y-3 text-navy/70">
                <li className="flex items-start gap-2">
                  <span className="text-navy/40">–</span>
                  <span>
                    Ajouter des contrôles sans cohérence globale
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-navy/40">–</span>
                  <span>Produire des livrables théoriques</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-navy/40">–</span>
                  <span>Complexifier le dispositif existant</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-navy/40">–</span>
                  <span>Dépendre d&apos;un outil spécifique</span>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="font-serif text-2xl font-semibold text-navy">
                Ce que nous apportons
              </h2>
              <ul className="mt-6 list-none space-y-3 text-navy/70">
                <li className="flex items-start gap-2">
                  <span className="text-navy/40">–</span>
                  <span>
                    Une lecture consolidée du dispositif
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-navy/40">–</span>
                  <span>
                    Une structuration claire et compréhensible
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-navy/40">–</span>
                  <span>Une capacité de démonstration</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-navy/40">–</span>
                  <span>
                    Une réduction de la dépendance aux individus
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* BLOC 8 — MODALITÉS + CTA FINAL */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-[1120px] px-6">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-navy max-w-3xl">
            Modalités d&apos;intervention
          </h2>
          <p className="mt-6 text-navy/70 max-w-2xl leading-relaxed">
            Chaque intervention est construite après un premier échange, en
            fonction&nbsp;:
          </p>
          <ul className="mt-4 list-none space-y-2 text-navy/70 max-w-2xl">
            <li className="flex items-start gap-2">
              <span className="text-navy mt-0.5">—</span>
              <span>de la maturité du dispositif</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-navy mt-0.5">—</span>
              <span>du niveau de structuration existant</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-navy mt-0.5">—</span>
              <span>des enjeux de gouvernance</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-navy mt-0.5">—</span>
              <span>du périmètre concerné</span>
            </li>
          </ul>

          <div className="border-t border-gray-border mt-12 mb-12" />

          <div className="bg-navy rounded-xl py-12 px-8 text-center">
            <p className="text-white/80 leading-relaxed max-w-xl mx-auto">
              Vous souhaitez structurer votre dispositif et le rendre mobilisable
              à tout moment&nbsp;?
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
