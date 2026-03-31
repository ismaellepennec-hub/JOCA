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
      {/* BLOC 1 — HERO */}
      <section className="bg-white py-24 md:py-32">
        <div className="mx-auto max-w-[1120px] px-6">
          <div className="grid grid-cols-1 md:grid-cols-[60%_38%] gap-12 items-start">
            <div>
              <h1 className="font-serif text-4xl md:text-5xl font-semibold text-navy max-w-3xl leading-tight">
                Un cabinet dédié à la structuration du contrôle des délégataires
              </h1>
              <div className="mt-8 max-w-2xl space-y-4 text-navy/70 leading-relaxed">
                <p>
                  JOCA Services accompagne les mutuelles et institutions de
                  prévoyance dans la mise en lisibilité, la structuration et la
                  sécurisation de leur dispositif de contrôle des délégataires.
                </p>
                <p>
                  Une approche centrée sur la compréhension du fonctionnement
                  réel, la structuration des pratiques et la capacité à tenir le
                  dispositif dans la durée.
                </p>
              </div>
            </div>

            <div className="flex justify-center md:justify-end">
              <div className="bg-gray-light p-3 rounded-xl">
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
        </div>
      </section>

      {/* BLOC 2 — POSITIONNEMENT */}
      <section className="bg-gray-light py-20">
        <div className="mx-auto max-w-[1120px] px-6">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-navy max-w-3xl">
            Le cabinet intervient sur des sujets où
          </h2>
          <ul className="mt-8 list-none space-y-3 max-w-2xl">
            <li className="flex items-start gap-2 text-navy/70">
              <span className="text-navy mt-0.5">—</span>
              <span>le dispositif existe mais reste difficile à formaliser</span>
            </li>
            <li className="flex items-start gap-2 text-navy/70">
              <span className="text-navy mt-0.5">—</span>
              <span>la lisibilité globale est limitée</span>
            </li>
            <li className="flex items-start gap-2 text-navy/70">
              <span className="text-navy mt-0.5">—</span>
              <span>la dépendance à certaines personnes est forte</span>
            </li>
            <li className="flex items-start gap-2 text-navy/70">
              <span className="text-navy mt-0.5">—</span>
              <span>
                la capacité à démontrer les contrôles est fragile
              </span>
            </li>
          </ul>
          <p className="mt-6 text-navy/70 leading-relaxed max-w-2xl">
            L&apos;intervention vise à structurer ce qui existe déjà, sans
            complexifier inutilement l&apos;organisation.
          </p>
        </div>
      </section>

      {/* BLOC 3 — APPROCHE */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-[1120px] px-6">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-navy max-w-3xl">
            Une approche fondée sur 3 principes
          </h2>
          <div className="mt-8 max-w-2xl space-y-4">
            <div className="border-l-4 border-navy pl-4 py-2">
              <p className="text-navy/70 leading-relaxed">
                Partir du fonctionnement réel et non des procédures théoriques
              </p>
            </div>
            <div className="border-l-4 border-navy pl-4 py-2">
              <p className="text-navy/70 leading-relaxed">
                Structurer progressivement sans rupture opérationnelle
              </p>
            </div>
            <div className="border-l-4 border-navy pl-4 py-2">
              <p className="text-navy/70 leading-relaxed">
                Rendre le dispositif compréhensible, transmissible et pilotable
              </p>
            </div>
          </div>
          <p className="mt-8 font-medium text-navy max-w-2xl leading-relaxed">
            L&apos;objectif n&apos;est pas de produire des documents, mais de
            stabiliser un dispositif réellement exploitable.
          </p>
        </div>
      </section>

      {/* BLOC 4 — EXPERTISE & CE QUI DIFFÉRENCIE */}
      <section className="bg-gray-light py-20">
        <div className="mx-auto max-w-[1120px] px-6">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-navy max-w-3xl">
            Une expertise issue du terrain
          </h2>
          <div className="mt-8 max-w-2xl space-y-4 text-navy/70 leading-relaxed">
            <p>
              Le cabinet s&apos;appuie sur une expérience en environnement
              assurance, au sein de directions métiers, IT et fonctions de
              contrôle.
            </p>
            <p>Interventions notamment sur&nbsp;:</p>
            <ul className="list-none space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-navy/40">·</span>
                <span>
                  Structuration et pilotage de dispositifs transverses
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-navy/40">·</span>
                <span>Organisation et gouvernance de projets</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-navy/40">·</span>
                <span>
                  Coordination entre métiers, IT et fonctions de contrôle
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-navy/40">·</span>
                <span>
                  Accompagnement des équipes dans la formalisation et la
                  structuration
                </span>
              </li>
            </ul>
            <p>
              Cette expérience permet une compréhension fine des contraintes
              opérationnelles et des attentes en matière de gouvernance et de
              traçabilité.
            </p>
          </div>

          <div className="border-t border-gray-border my-10" />

          <h3 className="font-serif text-2xl font-semibold text-navy">
            Ce qui différencie le cabinet
          </h3>
          <ul className="mt-6 list-none space-y-3 max-w-2xl">
            <li className="flex items-start gap-2 text-navy/70">
              <span className="text-navy mt-0.5">—</span>
              <span>
                Une spécialisation ciblée sur le contrôle des délégataires
              </span>
            </li>
            <li className="flex items-start gap-2 text-navy/70">
              <span className="text-navy mt-0.5">—</span>
              <span>Une approche structurée et opérationnelle</span>
            </li>
            <li className="flex items-start gap-2 text-navy/70">
              <span className="text-navy mt-0.5">—</span>
              <span>Une attention portée à la réalité du terrain</span>
            </li>
            <li className="flex items-start gap-2 text-navy/70">
              <span className="text-navy mt-0.5">—</span>
              <span>
                Une capacité à intervenir sans dépendance aux personnes clés
              </span>
            </li>
          </ul>
          <p className="mt-4 text-navy/70 leading-relaxed max-w-2xl">
            Le positionnement n&apos;est pas celui d&apos;un accompagnement
            générique, mais d&apos;une intervention ciblée sur un enjeu
            structurant.
          </p>
        </div>
      </section>

      {/* BLOC 5 — PHRASE MANIFESTE + CTA */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-[1120px] px-6">
          <ManifestoQuote />

          <p className="font-serif text-xl italic text-navy/80 max-w-2xl mx-auto text-center mt-12 leading-relaxed">
            Un dispositif ne se limite pas à exister. Il doit pouvoir être
            compris, piloté et transmis dans la durée.
          </p>

          <div className="border-t border-gray-border mt-12 mb-12" />

          <div className="text-center">
            <p className="text-navy/70 leading-relaxed max-w-xl mx-auto">
              Vous souhaitez échanger sur votre dispositif ou comprendre comment
              le structurer dans votre contexte&nbsp;?
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
