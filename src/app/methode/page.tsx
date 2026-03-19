import type { Metadata } from "next";
import CTAButton from "@/components/CTAButton";
import ManifestoQuote from "@/components/ManifestoQuote";

export const metadata: Metadata = {
  title: "Méthode DelegataControl™",
  description:
    "DelegataControl™ est une méthode de structuration du contrôle des délégataires pour les organismes assureurs.",
};

export default function Methode() {
  return (
    <>
      {/* SECTION 1 — Présentation */}
      <section className="bg-white py-24 md:py-32">
        <div className="mx-auto max-w-[1120px] px-6">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-navy max-w-3xl leading-tight">
            DelegataControl™
          </h1>
          <p className="mt-2 font-serif text-xl md:text-2xl text-navy/60">
            Une méthode de structuration du contrôle des délégataires
          </p>
          <div className="mt-8 max-w-2xl space-y-4 text-navy/70 leading-relaxed">
            <p>
              DelegataControl™ est une méthode conçue pour structurer et
              clarifier le dispositif de contrôle des délégataires au sein des
              organismes assureurs.
            </p>
            <p>Elle repose sur un principe simple&nbsp;:</p>
            <p className="font-medium text-navy">
              Un dispositif de contrôle ne doit pas seulement fonctionner, il
              doit être compréhensible, organisé et démontrable.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 2 — Objectif clair */}
      <section className="bg-gray-light py-20">
        <div className="mx-auto max-w-[1120px] px-6">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-navy">
            Un objectif clair
          </h2>
          <div className="mt-8 max-w-2xl space-y-4 text-navy/70 leading-relaxed">
            <p>
              La méthode vise à transformer un ensemble de pratiques existantes
              en un dispositif&nbsp;:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Lisible dans son organisation</li>
              <li>Cohérent dans sa gouvernance</li>
              <li>Structuré dans sa traçabilité.</li>
            </ul>
            <p>
              L&apos;enjeu n&apos;est pas d&apos;ajouter de nouveaux contrôles.
            </p>
            <p className="font-medium text-navy">
              L&apos;enjeu est de donner une cohérence d&apos;ensemble au
              dispositif.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3 — Approche progressive */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-[1120px] px-6">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-navy">
            Une approche progressive
          </h2>

          <div className="mt-12 space-y-16 max-w-2xl">
            {/* Étape 1 */}
            <div>
              <span className="text-sm font-medium text-navy/40">Étape 1</span>
              <h3 className="mt-2 font-serif text-2xl font-semibold text-navy">
                Clarifier
              </h3>
              <p className="mt-4 text-navy/70 leading-relaxed">
                Comprendre comment le contrôle des délégataires est organisé
                aujourd&apos;hui&nbsp;:
              </p>
              <ul className="mt-2 list-disc pl-6 space-y-1 text-navy/70">
                <li>Responsabilités</li>
                <li>Contrôles réalisés</li>
                <li>Circuits d&apos;information</li>
                <li>Gouvernance.</li>
              </ul>
            </div>

            {/* Étape 2 */}
            <div>
              <span className="text-sm font-medium text-navy/40">Étape 2</span>
              <h3 className="mt-2 font-serif text-2xl font-semibold text-navy">
                Structurer
              </h3>
              <p className="mt-4 text-navy/70 leading-relaxed">
                Organiser le dispositif de manière cohérente&nbsp;:
              </p>
              <ul className="mt-2 list-disc pl-6 space-y-1 text-navy/70">
                <li>Clarification des responsabilités</li>
                <li>Formalisation des processus</li>
                <li>Structuration de la traçabilité.</li>
              </ul>
            </div>

            {/* Étape 3 */}
            <div>
              <span className="text-sm font-medium text-navy/40">Étape 3</span>
              <h3 className="mt-2 font-serif text-2xl font-semibold text-navy">
                Stabiliser
              </h3>
              <p className="mt-4 text-navy/70 leading-relaxed">
                Maintenir la cohérence du dispositif dans le temps&nbsp;:
              </p>
              <ul className="mt-2 list-disc pl-6 space-y-1 text-navy/70">
                <li>Suivi de son évolution</li>
                <li>Adaptation aux changements organisationnels</li>
                <li>Maintien de sa lisibilité.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 — Cible */}
      <section className="bg-gray-light py-20">
        <div className="mx-auto max-w-[1120px] px-6">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-navy">
            Une approche adaptée aux organisations structurées
          </h2>
          <div className="mt-8 max-w-2xl space-y-4 text-navy/70 leading-relaxed">
            <p>
              Cette approche s&apos;adresse principalement à des organismes
              assureurs disposant déjà d&apos;un dispositif de contrôle des
              délégataires et souhaitant en renforcer la lisibilité, la
              cohérence et la gouvernance.
            </p>
            <p>
              Elle est particulièrement pertinente lorsque plusieurs directions
              interviennent dans le suivi des délégataires et le dispositif
              nécessite d&apos;être clarifié ou consolidé.
            </p>
          </div>

          <ManifestoQuote />

          <div className="mt-12">
            <CTAButton
              href="/contact"
              label="Engager un échange stratégique"
            />
          </div>
        </div>
      </section>
    </>
  );
}
