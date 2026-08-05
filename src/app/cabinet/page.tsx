import type { Metadata } from "next";
import Image from "next/image";
import CTAButton from "@/components/CTAButton";

export const metadata: Metadata = {
  title: "Le Cabinet",
  description:
    "JOCA Services, cabinet spécialisé dans la structuration du contrôle des délégataires en environnement assurance, pour un dispositif lisible et démontrable.",
};

export default function Cabinet() {
  return (
    <>
      {/* BLOC 1 — HERO */}
      <section className="bg-white pt-20 md:pt-28 pb-10 md:pb-12">
        <div className="mx-auto max-w-[1120px] px-6">
          <div className="grid grid-cols-1 md:grid-cols-[60%_38%] gap-12 items-start">
            <div>
              <h1 className="font-serif text-4xl md:text-5xl font-semibold text-navy max-w-3xl leading-tight">
                Une spécialisation assumée&nbsp;: structurer le contrôle des
                délégataires
              </h1>
              <div className="mt-8 max-w-2xl space-y-4 text-navy/70 leading-relaxed">
                <p>
                  JOCA Services concentre son expertise sur un enjeu
                  précis&nbsp;: rendre le contrôle des délégataires lisible,
                  pilotable et démontrable.
                </p>
                <p>
                  Cette spécialisation relie gouvernance, responsabilités,
                  contrôles et preuves dans une méthode conçue pour les
                  mutuelles et institutions de prévoyance.
                </p>
              </div>
            </div>

            <div className="flex justify-center md:justify-end">
              <div className="bg-gray-light p-3 rounded-xl">
                <Image
                  src="/images/cabinet-photo.jpg"
                  alt="George-Carole BARBIER — Fondatrice de JOCA Services"
                  width={300}
                  height={450}
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BLOC 2 — POSITION */}
      <section className="bg-gray-light py-16">
        <div className="mx-auto max-w-[1120px] px-6">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-navy max-w-3xl">
            Notre vision&nbsp;: un dispositif qui reste lisible, pilotable et
            démontrable
          </h2>
          <div className="mt-8 max-w-2xl space-y-4 text-navy/70 leading-relaxed">
            <p>Au fil des évolutions&nbsp;:</p>
            <ul className="list-none space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-navy/40">–</span>
                <span>les responsabilités se brouillent</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-navy/40">–</span>
                <span>les preuves se dispersent</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-navy/40">–</span>
                <span>les audits mobilisent davantage les équipes</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-navy/40">–</span>
                <span>la dépendance aux personnes clés augmente</span>
              </li>
            </ul>
          </div>
          <div className="mt-6 max-w-2xl">
            <p className="font-medium text-navy leading-relaxed">
              L&apos;enjeu n&apos;est pas d&apos;ajouter des contrôles, mais de
              préserver une capacité durable de lecture, de pilotage et de
              démonstration.
            </p>
          </div>
        </div>
      </section>

      {/* BLOC 3 — RUPTURE */}
      <section className="bg-navy py-16">
        <div className="mx-auto max-w-[1120px] px-6">
          <p className="font-serif italic text-2xl md:text-3xl text-white max-w-3xl mx-auto text-center leading-relaxed">
            Structurer ne consiste pas à produire.
            Cela consiste à rendre le dispositif défendable.
          </p>
        </div>
      </section>

      {/* BLOC 4 — APPROCHE */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-[1120px] px-6">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-navy max-w-3xl">
            Une approche volontairement sobre
          </h2>
          <div className="mt-8 max-w-2xl space-y-4 text-navy/70 leading-relaxed">
            <p>
              En complément des équipes internes, JOCA Services apporte un
              regard externe pour relier les informations et objectiver les
              fragilités.
            </p>
            <p>
              Une mission réussie laisse un dispositif que les équipes peuvent
              expliquer, piloter et faire évoluer.
            </p>
          </div>
        </div>
      </section>

      {/* BLOC 5 — RUPTURE 2 */}
      <section className="bg-gray-light py-16">
        <div className="mx-auto max-w-[1120px] px-6">
          <p className="font-serif text-xl md:text-2xl italic text-navy/80 max-w-2xl mx-auto text-center leading-relaxed">
            Un dispositif n&apos;est maîtrisé que s&apos;il peut être démontré sans vous.
          </p>
        </div>
      </section>

      {/* BLOC 6 — EXPERTISE */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-[1120px] px-6">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-navy max-w-3xl">
            Une lecture issue du terrain
          </h2>
          <div className="mt-8 max-w-2xl space-y-4 text-navy/70 leading-relaxed">
            <p>
              Intervention en environnement assurance, au croisement&nbsp;:
            </p>
            <ul className="list-none space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-navy/40">–</span>
                <span>métiers</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-navy/40">–</span>
                <span>IT</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-navy/40">–</span>
                <span>fonctions de contrôle</span>
              </li>
            </ul>

            <p className="mt-4">Avec une compréhension directe&nbsp;:</p>
            <ul className="list-none space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-navy/40">–</span>
                <span>des contraintes opérationnelles</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-navy/40">–</span>
                <span>des exigences de gouvernance</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-navy/40">–</span>
                <span>des enjeux de traçabilité</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* BLOC 7 — POSITIONNEMENT */}
      <section className="bg-gray-light py-16">
        <div className="mx-auto max-w-[1120px] px-6">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-navy max-w-3xl">
            Un choix volontairement ciblé
          </h2>
          <ul className="mt-8 list-none space-y-3 max-w-2xl">
            <li className="flex items-start gap-2 text-navy/70">
              <span className="text-navy mt-0.5">—</span>
              <span>
                Expertise concentrée sur le contrôle des délégataires
              </span>
            </li>
            <li className="flex items-start gap-2 text-navy/70">
              <span className="text-navy mt-0.5">—</span>
              <span>
                Méthode dédiée aux mutuelles et institutions de prévoyance
              </span>
            </li>
            <li className="flex items-start gap-2 text-navy/70">
              <span className="text-navy mt-0.5">—</span>
              <span>
                Lecture croisée des contrôles, preuves et gouvernance
              </span>
            </li>
          </ul>
          <p className="mt-6 text-navy/70 leading-relaxed max-w-2xl">
            Cette focalisation apporte une profondeur difficile à obtenir dans
            une approche généraliste.
          </p>
        </div>
      </section>

      {/* BLOC 8 — CLÔTURE */}
      <section className="bg-navy py-16">
        <div className="mx-auto max-w-[1120px] px-6">
          <p className="font-serif italic text-2xl md:text-3xl text-white max-w-3xl mx-auto text-center leading-relaxed">
            Un dispositif n&apos;est robuste que lorsqu&apos;il peut être
            expliqué, relu et défendu à tout moment.
          </p>
        </div>
      </section>

      {/* BLOC 9 — CTA FINAL */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-[1120px] px-6 text-center">
          <p className="text-navy/70 leading-relaxed max-w-xl mx-auto">
            Vous souhaitez clarifier votre dispositif et sécuriser sa capacité à
            être expliqué à tout moment&nbsp;?
          </p>
          <div className="mt-8">
            <CTAButton
              href="/contact"
              label="Échanger sur votre dispositif"
            />
          </div>
        </div>
      </section>
    </>
  );
}
