import type { Metadata } from "next";
import Image from "next/image";
import AvantApresSchema from "@/components/AvantApresSchema";
import CTAButton from "@/components/CTAButton";
import MirrorQuestion from "@/components/MirrorQuestion";

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
          <div className="grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-12 items-center">
            <div>
              <p className="text-sm text-navy/50">
                Mutuelles &amp; institutions de prévoyance
              </p>
              <h1 className="mt-4 font-serif text-4xl md:text-5xl font-semibold text-navy max-w-3xl leading-tight">
                Structurer le contrôle des délégataires… avant qu&apos;il ne
                devienne difficile à expliquer, à piloter ou à transmettre
              </h1>
              <div className="mt-8 max-w-xl space-y-4 text-navy/70 leading-relaxed">
                <p>
                  Dans de nombreuses organisations, le dispositif existe. Mais il
                  reste souvent peu lisible, insuffisamment formalisé et
                  dépendant de certaines personnes.
                </p>
                <p>
                  Nous intervenons pour le rendre structuré, cohérent et
                  démontrable dans la durée.
                </p>
              </div>
              <div className="mt-10">
                <CTAButton
                  href="/contact"
                  label="Faire un point sur votre dispositif"
                />
              </div>
            </div>

            <div className="hidden md:block relative h-full min-h-[480px] rounded-xl overflow-hidden">
              <Image
                src="/images/hero-bg.jpg"
                alt="Stylo sur document — JOCA Services"
                fill
                className="object-cover object-top"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* BLOC 2 — PHRASE D'ACCROCHE */}
      <section className="bg-navy py-16">
        <div className="mx-auto max-w-[1120px] px-6">
          <p className="font-serif italic text-2xl md:text-3xl text-white max-w-3xl mx-auto text-center leading-relaxed">
            Un dispositif peut fonctionner au quotidien… et devenir pourtant
            fragile dès qu&apos;il doit être repris, expliqué ou transmis.
          </p>
        </div>
      </section>

      {/* BLOC 3 — QUESTION DE POSITIONNEMENT */}
      <MirrorQuestion />

      {/* BLOC 4 — PROBLÈME */}
      <section className="bg-gray-light py-20">
        <div className="mx-auto max-w-[1120px] px-6">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-navy max-w-3xl">
            Dans la plupart des organisations
          </h2>
          <div className="mt-8 max-w-2xl space-y-4 text-navy/70 leading-relaxed">
            <p>
              Le contrôle des délégataires existe. Mais dans les faits&nbsp;:
            </p>
            <ul className="list-none space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-navy/40">·</span>
                <span>il est réparti entre plusieurs équipes</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-navy/40">·</span>
                <span>les responsabilités sont peu clarifiées</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-navy/40">·</span>
                <span>
                  les preuves sont difficiles à mobiliser rapidement
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-navy/40">·</span>
                <span>
                  une partie de la connaissance repose sur certaines personnes
                  clés
                </span>
              </li>
            </ul>
            <p>
              En cas d&apos;absence, de départ ou de réorganisation, le
              dispositif devient difficile à reconstituer et à piloter.
            </p>
            <p>
              Lors d&apos;une revue interne ou externe, la difficulté
              n&apos;est pas l&apos;existence des contrôles… mais la capacité à
              les présenter de manière claire, structurée et traçable.
            </p>
          </div>
          <AvantApresSchema />
        </div>
      </section>

      {/* BLOC 5 — CE QUE NOUS APPORTONS */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-[1120px] px-6">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-navy max-w-3xl">
            Ce que nous apportons
          </h2>
          <p className="mt-6 text-navy/70 max-w-2xl leading-relaxed">
            Nous intervenons pour structurer le dispositif et le rendre&nbsp;:
          </p>

          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
            {/* Lisible */}
            <div className="border border-gray-border p-6 flex flex-col items-center gap-3">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-navy"
              >
                <path d="M6 8h20M6 14h20M6 20h14M6 26h10" />
              </svg>
              <span className="font-serif font-semibold text-navy">
                Lisible
              </span>
            </div>

            {/* Cohérent */}
            <div className="border border-gray-border p-6 flex flex-col items-center gap-3">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-navy"
              >
                <circle cx="10" cy="16" r="4" />
                <circle cx="22" cy="16" r="4" />
                <path d="M14 16h4" />
              </svg>
              <span className="font-serif font-semibold text-navy">
                Cohérent
              </span>
            </div>

            {/* Transmissible */}
            <div className="border border-gray-border p-6 flex flex-col items-center gap-3">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-navy"
              >
                <path d="M12 16h12M20 12l4 4-4 4" />
                <circle cx="8" cy="16" r="3" />
              </svg>
              <span className="font-serif font-semibold text-navy">
                Transmissible
              </span>
            </div>

            {/* Pilotable */}
            <div className="border border-gray-border p-6 flex flex-col items-center gap-3">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-navy"
              >
                <path d="M6 26V14M12 26V10M18 26V18M24 26V6" />
              </svg>
              <span className="font-serif font-semibold text-navy">
                Pilotable
              </span>
            </div>
          </div>

          <div className="mt-10 space-y-2 text-navy/70 leading-relaxed">
            <p>→ en réduisant la dépendance aux individus</p>
            <p>
              → en sécurisant la capacité de démonstration du dispositif
            </p>
          </div>
        </div>
      </section>

      {/* BLOC 6 — LES 3 BRIQUES */}
      <section className="bg-gray-light py-20">
        <div className="mx-auto max-w-[1120px] px-6">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-navy max-w-3xl">
            Une intervention structurée en 3 briques
          </h2>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            {/* Brique 1 */}
            <div>
              <span className="text-sm font-medium text-navy/40">01</span>
              <h3 className="mt-2 font-serif text-xl font-semibold text-navy">
                Diagnostic structuré
              </h3>
              <ul className="mt-4 list-none space-y-2 text-navy/70 leading-relaxed">
                <li className="flex items-start gap-2">
                  <span className="text-navy/40">·</span>
                  <span>Analyse du dispositif existant</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-navy/40">·</span>
                  <span>Mise à plat du fonctionnement réel</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-navy/40">·</span>
                  <span>Identification des zones de fragilité</span>
                </li>
              </ul>
              <p className="mt-4 text-navy font-medium leading-relaxed">
                Résultat&nbsp;: une lecture claire, indépendante et un plan
                d&apos;actions priorisé
              </p>
            </div>

            {/* Brique 2 */}
            <div>
              <span className="text-sm font-medium text-navy/40">02</span>
              <h3 className="mt-2 font-serif text-xl font-semibold text-navy">
                Structuration opérationnelle
              </h3>
              <ul className="mt-4 list-none space-y-2 text-navy/70 leading-relaxed">
                <li className="flex items-start gap-2">
                  <span className="text-navy/40">·</span>
                  <span>Clarification des rôles et responsabilités</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-navy/40">·</span>
                  <span>Formalisation des contrôles</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-navy/40">·</span>
                  <span>
                    Organisation de la traçabilité et du pilotage
                  </span>
                </li>
              </ul>
              <p className="mt-4 text-navy font-medium leading-relaxed">
                Résultat&nbsp;: un dispositif structuré, cohérent et démontrable
              </p>
            </div>

            {/* Brique 3 */}
            <div>
              <span className="text-sm font-medium text-navy/40">03</span>
              <h3 className="mt-2 font-serif text-xl font-semibold text-navy">
                Gouvernance &amp; monitoring
              </h3>
              <ul className="mt-4 list-none space-y-2 text-navy/70 leading-relaxed">
                <li className="flex items-start gap-2">
                  <span className="text-navy/40">·</span>
                  <span>Revue périodique du dispositif</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-navy/40">·</span>
                  <span>Identification des risques de dérive</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-navy/40">·</span>
                  <span>
                    Accompagnement des décisions structurantes
                  </span>
                </li>
              </ul>
              <p className="mt-4 text-navy font-medium leading-relaxed">
                Résultat&nbsp;: un dispositif maintenu dans le temps, sans perte
                de lisibilité ni de cohérence
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

      {/* BLOC 7 — MÉTHODE */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-[1120px] px-6">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-navy max-w-3xl">
            Une approche structurée&nbsp;: DelegataControl™
          </h2>
          <p className="mt-6 text-navy/70 max-w-2xl leading-relaxed">
            Une méthode conçue pour analyser le dispositif existant, structurer
            les contrôles, organiser la gouvernance et garantir la capacité de
            démonstration.
          </p>
          <p className="mt-4 text-navy/70 max-w-2xl leading-relaxed">
            Une approche pragmatique, adaptée aux environnements assurance et
            prévoyance.
          </p>
          <div className="mt-10">
            <CTAButton
              href="/methode"
              label="Découvrir la méthode"
              variant="outline"
            />
          </div>
        </div>
      </section>

      {/* BLOC 8 — FILTRE */}
      <section className="bg-navy py-16">
        <div className="mx-auto max-w-[1120px] px-6">
          <p className="font-serif text-xl md:text-2xl text-white max-w-2xl mx-auto text-center leading-relaxed">
            Ce travail s&apos;adresse aux organisations souhaitant structurer
            durablement leur gouvernance délégataires.
          </p>
        </div>
      </section>

      {/* BLOC 9 — CTA FINAL */}
      <section className="bg-gray-light py-20">
        <div className="mx-auto max-w-[1120px] px-6 text-center">
          <p className="text-navy/70 leading-relaxed max-w-2xl mx-auto">
            Vous souhaitez clarifier votre dispositif ou sécuriser sa capacité à
            être présenté dans la durée&nbsp;?
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
