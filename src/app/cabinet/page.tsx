import type { Metadata } from "next";
import Image from "next/image";
import CTAButton from "@/components/CTAButton";
import ManifestoQuote from "@/components/ManifestoQuote";

export const metadata: Metadata = {
  title: "Le Cabinet",
  description:
    "JOCA Services est un cabinet indépendant dédié à la structuration du contrôle des délégataires en environnement assurance.",
};

export default function Cabinet() {
  return (
    <>
      {/* Section principale — texte + photo */}
      <section className="bg-white py-24 md:py-32">
        <div className="mx-auto max-w-[1120px] px-6">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_35%] gap-12 items-center">
            {/* Colonne texte (65-70%) */}
            <div>
              <h1 className="font-serif text-4xl md:text-5xl font-semibold text-navy">
                JOCA Services
              </h1>
              <div className="mt-8 max-w-2xl space-y-4 text-navy/70 leading-relaxed">
                <p>
                  JOCA Services est un cabinet indépendant dédié à la
                  structuration du contrôle des délégataires en environnement
                  assurance.
                </p>
                <p>
                  Le cabinet intervient lorsque le dispositif existe, mais que
                  son organisation nécessite d&apos;être clarifiée, consolidée
                  ou formalisée.
                </p>
              </div>

              <h2 className="mt-12 font-serif text-3xl font-semibold text-navy">
                Une expertise issue du terrain
              </h2>
              <div className="mt-6 max-w-2xl space-y-4 text-navy/70 leading-relaxed">
                <p>
                  Le cabinet a été fondé par une professionnelle ayant exercé au
                  sein d&apos;environnements assurance et gouvernance, au
                  contact direct des directions financières, conformité, DSI et
                  métiers.
                </p>
                <p>Cette expérience permet&nbsp;:</p>
                <ul className="list-none space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-navy mt-0.5">—</span>
                    <span>
                      Une compréhension concrète des contraintes
                      organisationnelles
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-navy mt-0.5">—</span>
                    <span>
                      Une lecture transversale des interactions entre directions
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-navy mt-0.5">—</span>
                    <span>
                      Une approche pragmatique des exigences de formalisation
                    </span>
                  </li>
                </ul>
                <p className="font-medium text-navy">
                  Chaque intervention vise à produire un cadre clair, lisible et
                  durable.
                </p>
              </div>
            </div>

            {/* Colonne photo (30-35%) */}
            <div className="flex justify-center md:justify-end">
              <div className="w-full max-w-[300px] bg-gray-light p-4 rounded-xl">
                <Image
                  src="/images/cabinet-photo.png"
                  alt="George-Carole BARBIER — Fondatrice de JOCA Services"
                  width={300}
                  height={450}
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>
          </div>

          <ManifestoQuote />

          <div className="mt-8">
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
