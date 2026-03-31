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
            Une approche structurée&nbsp;: DelegataControl™
          </h1>
          <p className="mt-4 font-serif text-xl text-navy/60">
            Une méthode conçue pour structurer et clarifier le dispositif de
            contrôle des délégataires
          </p>
          <p className="mt-8 max-w-2xl text-navy/70 leading-relaxed">
            DelegataControl™ repose sur un principe simple&nbsp;: un dispositif
            de contrôle ne doit pas seulement fonctionner, il doit être
            compréhensible, organisé et démontrable.
          </p>
        </div>
      </section>

      {/* BLOC 2 — OBJECTIF */}
      <section className="bg-gray-light py-20">
        <div className="mx-auto max-w-[1120px] px-6">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-navy">
            Un objectif clair
          </h2>
          <p className="mt-8 text-navy/70 max-w-2xl leading-relaxed">
            La méthode vise à transformer un ensemble de pratiques existantes en
            un dispositif&nbsp;:
          </p>

          <div className="mt-6 max-w-2xl space-y-3">
            <div className="border-l-4 border-navy pl-4 py-2">
              <p className="text-navy/70 leading-relaxed">
                Lisible dans son organisation
              </p>
            </div>
            <div className="border-l-4 border-navy pl-4 py-2">
              <p className="text-navy/70 leading-relaxed">
                Cohérent dans sa gouvernance
              </p>
            </div>
            <div className="border-l-4 border-navy pl-4 py-2">
              <p className="text-navy/70 leading-relaxed">
                Structuré dans sa traçabilité
              </p>
            </div>
            <div className="border-l-4 border-navy pl-4 py-2">
              <p className="text-navy/70 leading-relaxed">
                Défendable à tout moment
              </p>
            </div>
          </div>

          <p className="mt-8 font-medium text-navy max-w-2xl leading-relaxed">
            L&apos;enjeu n&apos;est pas d&apos;ajouter de nouveaux contrôles.
            L&apos;enjeu est de donner une cohérence d&apos;ensemble au
            dispositif.
          </p>
        </div>
      </section>

      {/* BLOC 3 — LES 3 ÉTAPES */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-[1120px] px-6">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-navy">
            Une approche progressive
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
                Comprendre comment le contrôle des délégataires est organisé
                aujourd&apos;hui&nbsp;:
              </p>
              <ul className="mt-2 list-none space-y-2 text-navy/70">
                <li className="flex items-start gap-2">
                  <span className="text-navy/40">·</span>
                  <span>Cartographie des délégations en place</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-navy/40">·</span>
                  <span>Responsabilités par direction</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-navy/40">·</span>
                  <span>Contrôles réalisés et leur traçabilité</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-navy/40">·</span>
                  <span>Circuits d&apos;information et gouvernance</span>
                </li>
              </ul>
              <p className="mt-4 font-medium text-navy">
                → Une lecture claire et indépendante du dispositif existant
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
                  <span className="text-navy/40">·</span>
                  <span>
                    Clarification des responsabilités entre directions
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-navy/40">·</span>
                  <span>Formalisation des processus de contrôle</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-navy/40">·</span>
                  <span>
                    Structuration des supports de traçabilité
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-navy/40">·</span>
                  <span>Consolidation de la gouvernance</span>
                </li>
              </ul>
              <p className="mt-4 font-medium text-navy">
                → Un dispositif structuré, lisible et pilotable
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
                Maintenir la cohérence du dispositif dans le temps&nbsp;:
              </p>
              <ul className="mt-2 list-none space-y-2 text-navy/70">
                <li className="flex items-start gap-2">
                  <span className="text-navy/40">·</span>
                  <span>Suivi de l&apos;évolution du dispositif</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-navy/40">·</span>
                  <span>
                    Adaptation aux changements organisationnels
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-navy/40">·</span>
                  <span>Détection des fragilités émergentes</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-navy/40">·</span>
                  <span>
                    Maintien de la lisibilité et de la capacité de démonstration
                  </span>
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

      {/* BLOC 4 — CIBLE */}
      <section className="bg-gray-light py-20">
        <div className="mx-auto max-w-[1120px] px-6">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-navy">
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

      {/* BLOC 5 — CTA FINAL */}
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
