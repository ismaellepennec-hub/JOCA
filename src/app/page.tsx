import type { Metadata } from "next";
import Image from "next/image";
import AvantApresSchema from "@/components/AvantApresSchema";
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
      <section className="bg-white pt-20 md:pt-28 pb-10 md:pb-12">
        <div className="mx-auto max-w-[1120px] px-6">
          <div className="grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-12 items-center">
            <div>
              <h1 className="font-serif text-4xl md:text-5xl font-semibold text-navy max-w-3xl leading-tight">
                Structurer le contrôle des délégataires pour le rendre lisible,
                pilotable et démontrable
              </h1>
              <div className="mt-8 max-w-xl space-y-4 text-navy/70 leading-relaxed">
                <p>
                  Dans la plupart des organisations, le dispositif existe.
                  Mais il reste difficile à lire, à consolider et à défendre
                  dans la durée.
                </p>
                <p className="font-medium text-navy">
                  Nous structurons ce qui existe déjà pour le rendre
                  compréhensible, mobilisable et démontrable à tout moment.
                </p>
              </div>
              <div className="mt-10">
                <CTAButton
                  href="/contact"
                  label="Échanger sur votre dispositif"
                />
              </div>
            </div>

            <div className="hidden md:block relative h-full min-h-[480px] rounded-xl overflow-hidden">
              <Image
                src="/images/hero-bg.jpg"
                alt="Documents et supports de travail — JOCA Services"
                fill
                className="object-cover object-top"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* BLOC 2 — VISUEL TRANSFORMATION (Avant / DelegataControl™ / Après) */}
      <AvantApresSchema variant="three-col" />

      {/* BLOC 3 — PROBLÈME */}
      <section className="bg-gray-light py-16">
        <div className="mx-auto max-w-[1120px] px-6">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-navy max-w-3xl">
            Un dispositif peut exister… sans être réellement maîtrisé
          </h2>

          <div className="mt-8 max-w-2xl space-y-6 text-navy/70 leading-relaxed">
            <div>
              <p>Dans la majorité des organisations&nbsp;:</p>
            </div>

            <div>
              <ul className="list-none space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-navy/40">–</span>
                  <span>le dispositif existe mais reste peu lisible</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-navy/40">–</span>
                  <span>les responsabilités sont diffuses</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-navy/40">–</span>
                  <span>les preuves sont dispersées</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-navy/40">–</span>
                  <span>
                    la capacité à démontrer les contrôles est fragile
                  </span>
                </li>
              </ul>
            </div>

            <div className="border-l-4 border-navy pl-4 py-2">
              <p className="font-medium text-navy">
                Le sujet n&apos;est pas d&apos;ajouter.
              </p>
              <p className="font-medium text-navy">
                Le sujet est de structurer, clarifier et rendre défendable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* BLOC 4 — CE QUE NOUS APPORTONS */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-[1120px] px-6">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-navy max-w-3xl">
            Ce que nous apportons
          </h2>

          <ul className="mt-8 list-none space-y-3 max-w-2xl text-navy/70 leading-relaxed">
            <li className="flex items-start gap-2">
              <span className="text-navy/40">–</span>
              <span>Une lecture consolidée du dispositif</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-navy/40">–</span>
              <span>Une structuration claire et exploitable</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-navy/40">–</span>
              <span>Une capacité de démonstration à tout moment</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-navy/40">–</span>
              <span>Une réduction de la dépendance aux individus</span>
            </li>
          </ul>
        </div>
      </section>

      {/* BLOC 5 — MÉTHODE (transition) */}
      <section className="bg-gray-light py-16">
        <div className="mx-auto max-w-[1120px] px-6">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-navy max-w-3xl">
            Une approche structurée, conçue pour durer
          </h2>
          <div className="mt-6 max-w-2xl space-y-4 text-navy/70 leading-relaxed">
            <p>
              Notre intervention repose sur une approche simple&nbsp;:
              clarifier le fonctionnement réel, structurer les éléments
              existants et stabiliser le dispositif dans le temps.
            </p>
            <p className="font-medium text-navy">
              Pas de complexification.
            </p>
            <p className="font-medium text-navy">
              Pas de dépendance à un outil.
            </p>
            <p className="font-medium text-navy">
              Un dispositif qui tient dans la durée.
            </p>
          </div>
          <div className="mt-10">
            <CTAButton
              href="/methode"
              label="Découvrir la méthode"
              variant="outline"
            />
          </div>
        </div>
      </section>

      {/* BLOC 6 — OFFRE (3 briques simplifiées) */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-[1120px] px-6">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-navy max-w-3xl">
            Une intervention en trois niveaux
          </h2>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            {/* Brique 1 */}
            <div className="border-t border-gray-border pt-6 flex flex-col gap-3">
              <span className="text-sm text-navy/40">01</span>
              <h3 className="font-serif text-xl font-semibold text-navy">
                Diagnostic structuré
              </h3>
              <p className="text-navy/70 text-sm leading-relaxed">
                Lecture claire et indépendante du dispositif existant
              </p>
            </div>

            {/* Brique 2 */}
            <div className="border-t border-gray-border pt-6 flex flex-col gap-3">
              <span className="text-sm text-navy/40">02</span>
              <h3 className="font-serif text-xl font-semibold text-navy">
                Structuration opérationnelle
              </h3>
              <p className="text-navy/70 text-sm leading-relaxed">
                Organisation des contrôles, responsabilités et preuves
              </p>
            </div>

            {/* Brique 3 */}
            <div className="border-t border-gray-border pt-6 flex flex-col gap-3">
              <span className="text-sm text-navy/40">03</span>
              <h3 className="font-serif text-xl font-semibold text-navy">
                Gouvernance &amp; monitoring
              </h3>
              <p className="text-navy/70 text-sm leading-relaxed">
                Maintien de la cohérence et de la capacité de démonstration
              </p>
            </div>
          </div>

          <div className="mt-12">
            <CTAButton
              href="/offre"
              label="Découvrir l'offre complète"
              variant="outline"
            />
          </div>
        </div>
      </section>

      {/* BLOC 7 ��� CRÉDIBILITÉ */}
      <section className="bg-gray-light py-16">
        <div className="mx-auto max-w-[1120px] px-6">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-navy max-w-3xl">
            Une expertise ancrée dans le réel
          </h2>
          <div className="mt-8 max-w-2xl space-y-4 text-navy/70 leading-relaxed">
            <p>
              Le cabinet intervient en environnement assurance,
              au croisement des directions métiers, IT et fonctions de contrôle.
            </p>
            <p>
              Cette position permet une compréhension directe des contraintes
              opérationnelles, des enjeux de gouvernance et des exigences de
              traçabilité.
            </p>
          </div>
        </div>
      </section>

      {/* BLOC 8 — CTA FINAL */}
      <section className="bg-navy py-20">
        <div className="mx-auto max-w-[1120px] px-6 text-center">
          <p className="text-white/90 leading-relaxed max-w-2xl mx-auto">
            Vous souhaitez structurer votre dispositif et le rendre
            mobilisable à tout moment&nbsp;?
          </p>
          <div className="mt-8">
            <CTAButton
              href="/contact"
              label="Faire un point sur votre dispositif"
              variant="light"
            />
          </div>
        </div>
      </section>
    </>
  );
}
