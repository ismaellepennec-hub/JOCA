import type { Metadata } from "next";
import CTAButton from "@/components/CTAButton";

export const metadata: Metadata = {
  title: "JOCA Services — Structuration du contrôle des délégataires",
  description:
    "JOCA Services accompagne les organismes assureurs dans la structuration et la lisibilité de leur dispositif de contrôle des délégataires.",
};

export default function Accueil() {
  return (
    <>
      {/* BLOC 1 — HERO */}
      <section className="bg-white py-24 md:py-32">
        <div className="mx-auto max-w-[1120px] px-6">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-navy max-w-3xl leading-tight">
            Structurer le contrôle des délégataires.
          </h1>
          <p className="mt-6 text-lg text-navy/70 max-w-2xl leading-relaxed">
            JOCA Services accompagne les organismes assureurs dans la
            structuration et la lisibilité de leur dispositif de contrôle des
            délégataires.
          </p>
          <div className="mt-10">
            <CTAButton
              href="/contact"
              label="Engager un échange stratégique"
            />
          </div>
        </div>
      </section>

      {/* BLOC 2 — CONSTAT */}
      <section className="bg-gray-light py-20">
        <div className="mx-auto max-w-[1120px] px-6">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-navy">
            Un sujet souvent maîtrisé… mais difficile à présenter
          </h2>
          <div className="mt-8 max-w-2xl space-y-4 text-navy/70 leading-relaxed">
            <p>
              Dans de nombreuses organisations, les contrôles existent. Les
              équipes réalisent des vérifications, suivent des indicateurs et
              mettent en œuvre des actions correctives.
            </p>
            <p>
              Avec le temps, cependant, le dispositif peut devenir difficile à
              lire dans son ensemble&nbsp;:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Responsabilités réparties entre plusieurs directions</li>
              <li>Contrôles organisés de manière hétérogène</li>
              <li>Preuves dispersées</li>
              <li>Gouvernance peu formalisée.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* BLOC 3 — QUESTION MIROIR */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-[1120px] px-6">
          <p className="font-serif text-2xl md:text-3xl italic text-navy/80 max-w-3xl leading-relaxed border-l-2 border-navy pl-6">
            Seriez-vous aujourd&apos;hui en mesure de présenter de manière
            claire votre dispositif de contrôle des délégataires&nbsp;?
          </p>
        </div>
      </section>

      {/* BLOC 4 — APPROCHE EN 3 ÉTAPES */}
      <section className="bg-gray-light py-20">
        <div className="mx-auto max-w-[1120px] px-6">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-navy">
            Une approche structurée
          </h2>
          <p className="mt-6 text-navy/70 max-w-2xl leading-relaxed">
            JOCA Services accompagne les organismes assureurs dans l&apos;analyse
            et la structuration de leur dispositif de contrôle des délégataires.
          </p>
          <p className="mt-4 text-navy/70 max-w-2xl leading-relaxed">
            L&apos;intervention s&apos;articule autour d&apos;une logique en
            trois étapes&nbsp;:
          </p>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                num: "01",
                title: "Diagnostic du dispositif",
              },
              {
                num: "02",
                title: "Structuration du dispositif",
              },
              {
                num: "03",
                title: "Monitoring et pilotage",
              },
            ].map((step) => (
              <div key={step.num}>
                <span className="text-sm font-medium text-navy/40">
                  {step.num}
                </span>
                <h3 className="mt-2 font-serif text-xl font-semibold text-navy">
                  {step.title}
                </h3>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <CTAButton
              href="/methode"
              label="Découvrir l'approche"
              variant="outline"
            />
          </div>
        </div>
      </section>
    </>
  );
}
