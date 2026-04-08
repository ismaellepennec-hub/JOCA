import type { Metadata } from "next";
import CTAButton from "@/components/CTAButton";
import DelegataControlSchema from "@/components/DelegataControlSchema";
import ManifestoQuote from "@/components/ManifestoQuote";

export const metadata: Metadata = {
  title: "Méthode DelegataControl™",
  description:
    "DelegataControl™ est une méthode de structuration du contrôle des délégataires pour les organismes assureurs.",
};

export default function Methode() {
  return (
    <>
      {/* BLOC 1 — HERO */}
      <section className="bg-white py-24 md:py-32">
        <div className="mx-auto max-w-[1120px] px-6">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-navy max-w-3xl leading-tight">
            Une méthode pour rendre le contrôle des délégataires lisible,
            structuré et mobilisable à tout moment
          </h1>
          <div className="mt-8 max-w-2xl space-y-4 text-navy/70 leading-relaxed">
            <p>
              Dans la plupart des organisations, le dispositif existe. Mais il
              reste difficile à expliquer clairement, à consolider ou à
              transmettre sans dépendre de certaines personnes.
            </p>
            <p className="font-medium text-navy">
              DelegataControl™ apporte une structure claire, cohérente et
              durable.
            </p>
          </div>
        </div>
      </section>

      {/* BLOC 2 — TENSION */}
      <section className="bg-navy py-16">
        <div className="mx-auto max-w-[1120px] px-6">
          <p className="font-serif italic text-2xl md:text-3xl text-white max-w-3xl mx-auto text-center leading-relaxed">
            Le problème n&apos;est pas de faire des contrôles. Le problème est
            de pouvoir les expliquer, les relire et les démontrer sans dépendre
            de ceux qui les connaissent.
          </p>
        </div>
      </section>

      {/* BLOC 3 — PRINCIPE DE LA MÉTHODE */}
      <section className="bg-gray-light py-20">
        <div className="mx-auto max-w-[1120px] px-6">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-navy max-w-3xl">
            Un principe simple
          </h2>
          <p className="mt-8 text-navy/70 max-w-2xl leading-relaxed">
            DelegataControl™ repose sur un principe simple&nbsp;:
          </p>
          <p className="mt-4 font-medium text-navy max-w-2xl leading-relaxed">
            Un dispositif de contrôle ne doit pas seulement fonctionner. Il doit
            être&nbsp;:
          </p>

          <div className="mt-6 max-w-2xl space-y-3">
            {["Compréhensible", "Structuré", "Consolidé", "Démontrable"].map(
              (item) => (
                <div key={item} className="border-l-4 border-navy pl-4 py-2">
                  <p className="text-navy/70 leading-relaxed">{item}</p>
                </div>
              )
            )}
          </div>

          <p className="mt-6 text-navy/70 max-w-2xl leading-relaxed">
            → sans dépendre des individus ni des formats d&apos;information.
          </p>

          <div className="mt-10 max-w-2xl space-y-4 text-navy/70 leading-relaxed">
            <p>
              Aujourd&apos;hui, les contrôles reposent souvent sur&nbsp;:
            </p>
            <ul className="list-none space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-navy/40">–</span>
                <span>des documents dispersés</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-navy/40">–</span>
                <span>
                  des supports hétérogènes (mails, fichiers, outils…)
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-navy/40">–</span>
                <span>
                  des artefacts multiples difficiles à relire
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-navy/40">–</span>
                <span>
                  une connaissance détenue par certaines personnes
                </span>
              </li>
            </ul>
            <p className="font-medium text-navy">
              La méthode vise à remettre de la cohérence dans cet ensemble.
            </p>
          </div>
        </div>
      </section>

      {/* BLOC 4 — LES 3 ÉTAPES */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-[1120px] px-6">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-navy max-w-3xl">
            Une approche progressive en 3 étapes
          </h2>

          <div className="mt-12 space-y-16 max-w-2xl">
            {/* Étape 1 */}
            <div>
              <span className="text-sm font-medium text-navy/40">Étape 1</span>
              <div className="border-t border-gray-border mt-2 mb-4" />
              <h3 className="font-serif text-2xl font-semibold text-navy">
                Clarifier
              </h3>
              <p className="mt-4 text-navy/70 leading-relaxed">
                Comprendre le fonctionnement réel du dispositif&nbsp;:
              </p>
              <ul className="mt-2 list-none space-y-2 text-navy/70">
                <li className="flex items-start gap-2">
                  <span className="text-navy/40">–</span>
                  <span>délégations en place</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-navy/40">–</span>
                  <span>responsabilités</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-navy/40">–</span>
                  <span>contrôles réalisés</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-navy/40">–</span>
                  <span>circuits d&apos;information</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-navy/40">–</span>
                  <span>gouvernance existante</span>
                </li>
              </ul>
              <p className="mt-4 font-medium text-navy">
                → Une lecture claire, indépendante et consolidée
              </p>
            </div>

            {/* Étape 2 */}
            <div>
              <span className="text-sm font-medium text-navy/40">Étape 2</span>
              <div className="border-t border-gray-border mt-2 mb-4" />
              <h3 className="font-serif text-2xl font-semibold text-navy">
                Structurer
              </h3>
              <p className="mt-4 text-navy/70 leading-relaxed">
                Organiser le dispositif de manière cohérente&nbsp;:
              </p>
              <ul className="mt-2 list-none space-y-2 text-navy/70">
                <li className="flex items-start gap-2">
                  <span className="text-navy/40">–</span>
                  <span>rôles et responsabilités clarifiés</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-navy/40">–</span>
                  <span>processus formalisés</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-navy/40">–</span>
                  <span>supports de traçabilité structurés</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-navy/40">–</span>
                  <span>gouvernance consolidée</span>
                </li>
              </ul>
              <p className="mt-4 font-medium text-navy">
                → Un dispositif lisible, pilotable et démontrable
              </p>
            </div>

            {/* Étape 3 */}
            <div>
              <span className="text-sm font-medium text-navy/40">Étape 3</span>
              <div className="border-t border-gray-border mt-2 mb-4" />
              <h3 className="font-serif text-2xl font-semibold text-navy">
                Stabiliser
              </h3>
              <p className="mt-4 text-navy/70 leading-relaxed">
                Maintenir la cohérence dans le temps&nbsp;:
              </p>
              <ul className="mt-2 list-none space-y-2 text-navy/70">
                <li className="flex items-start gap-2">
                  <span className="text-navy/40">–</span>
                  <span>suivi des évolutions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-navy/40">–</span>
                  <span>adaptation aux changements</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-navy/40">–</span>
                  <span>détection des fragilités</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-navy/40">–</span>
                  <span>maintien de la lisibilité</span>
                </li>
              </ul>
              <p className="mt-4 font-medium text-navy">
                → Un dispositif durable, indépendant des personnes clés
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SCHÉMA DELEGATACONTROL™ */}
      <DelegataControlSchema />

      {/* BLOC 5 — CIBLE */}
      <section className="bg-gray-light py-20">
        <div className="mx-auto max-w-[1120px] px-6">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-navy max-w-3xl">
            Une approche adaptée aux organisations structurées
          </h2>
          <div className="mt-8 max-w-2xl space-y-4 text-navy/70 leading-relaxed">
            <p>
              Cette approche s&apos;adresse principalement aux mutuelles et
              institutions de prévoyance disposant déjà d&apos;un dispositif de
              contrôle des délégataires et souhaitant en renforcer la lisibilité,
              la cohérence et la gouvernance.
            </p>
            <p>
              Elle est particulièrement pertinente lorsque plusieurs directions
              interviennent dans le suivi des délégataires et que le dispositif
              nécessite d&apos;être clarifié ou consolidé.
            </p>
          </div>

          <ManifestoQuote />
        </div>
      </section>

      {/* BLOC 6 — CTA FINAL */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-[1120px] px-6 text-center">
          <p className="text-navy/70 leading-relaxed max-w-xl mx-auto">
            Vous souhaitez comprendre comment cette approche pourrait
            s&apos;appliquer à votre organisation&nbsp;?
          </p>
          <div className="mt-8">
            <CTAButton
              href="/contact"
              label="Faire un point sur votre situation"
            />
          </div>
        </div>
      </section>
    </>
  );
}
