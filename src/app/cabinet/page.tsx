import type { Metadata } from "next";
import Image from "next/image";
import CTAButton from "@/components/CTAButton";

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
                Un cabinet spécialisé sur un angle précis de la gouvernance des
                délégataires
              </h1>
              <div className="mt-8 max-w-2xl space-y-4 text-navy/70 leading-relaxed">
                <p>
                  Le contrôle des délégataires est en place dans la plupart des
                  organisations. Mais il reste souvent difficile à lire, à
                  structurer et à défendre dans la durée.
                </p>
                <p>
                  Le cabinet intervient pour structurer ce qui existe déjà, et
                  rendre le dispositif compréhensible, pilotable et démontrable.
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
            Le cabinet intervient lorsque le dispositif existe… mais ne tient
            plus dans la durée
          </h2>
          <div className="mt-8 max-w-2xl space-y-4 text-navy/70 leading-relaxed">
            <p>Dans la majorité des organisations&nbsp;:</p>
            <ul className="list-none space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-navy/40">–</span>
                <span>
                  le dispositif existe mais reste difficile à formaliser
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-navy/40">–</span>
                <span>la lisibilité globale est limitée</span>
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
          <p className="mt-6 font-medium text-navy max-w-2xl leading-relaxed">
            L&apos;enjeu n&apos;est pas d&apos;ajouter. L&apos;enjeu est de
            structurer, clarifier et rendre défendable.
          </p>
        </div>
      </section>

      {/* BLOC 3 — PRINCIPES D'INTERVENTION */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-[1120px] px-6">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-navy max-w-3xl">
            Une approche fondée sur des principes simples
          </h2>
          <div className="mt-8 max-w-2xl space-y-4">
            <div className="border-l-4 border-navy pl-4 py-2">
              <p className="text-navy/70 leading-relaxed">
                Partir du fonctionnement réel, pas des procédures théoriques
              </p>
            </div>
            <div className="border-l-4 border-navy pl-4 py-2">
              <p className="text-navy/70 leading-relaxed">
                Structurer sans créer de rupture opérationnelle
              </p>
            </div>
            <div className="border-l-4 border-navy pl-4 py-2">
              <p className="text-navy/70 leading-relaxed">
                Organiser les preuves, pas seulement les contrôles
              </p>
            </div>
            <div className="border-l-4 border-navy pl-4 py-2">
              <p className="text-navy/70 leading-relaxed">
                Rendre le dispositif compréhensible au-delà des personnes qui le
                portent
              </p>
            </div>
          </div>
          <p className="mt-8 font-medium text-navy max-w-2xl leading-relaxed">
            L&apos;objectif n&apos;est pas de produire des documents.
            L&apos;objectif est de stabiliser un dispositif réellement
            exploitable.
          </p>
        </div>
      </section>

      {/* BLOC 4 — EXPERTISE */}
      <section className="bg-gray-light py-20">
        <div className="mx-auto max-w-[1120px] px-6">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-navy max-w-3xl">
            Une expertise issue du terrain
          </h2>
          <div className="mt-8 max-w-2xl space-y-4 text-navy/70 leading-relaxed">
            <p>
              Le cabinet intervient en environnement assurance, au croisement des
              directions métiers, IT et fonctions de contrôle.
            </p>
            <p>
              Cette position permet une lecture directe des enjeux&nbsp;:
            </p>
            <ul className="list-none space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-navy/40">–</span>
                <span>contraintes opérationnelles réelles</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-navy/40">–</span>
                <span>attentes de gouvernance</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-navy/40">–</span>
                <span>exigences de traçabilité</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-navy/40">–</span>
                <span>
                  capacité à expliquer et démontrer le dispositif
                </span>
              </li>
            </ul>
          </div>

          <div className="border-t border-gray-border my-10" />

          <h3 className="font-serif text-2xl font-semibold text-navy">
            Interventions types
          </h3>
          <ul className="mt-6 list-none space-y-3 max-w-2xl text-navy/70">
            <li className="flex items-start gap-2">
              <span className="text-navy/40">–</span>
              <span>Structuration de dispositifs transverses</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-navy/40">–</span>
              <span>Organisation de la gouvernance</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-navy/40">–</span>
              <span>Clarification des responsabilités</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-navy/40">–</span>
              <span>Mise en lisibilité des contrôles existants</span>
            </li>
          </ul>

          <p className="mt-8 font-medium text-navy max-w-2xl leading-relaxed">
            Le sujet n&apos;est pas technique. Il est organisationnel,
            transversal et structurant.
          </p>
        </div>
      </section>

      {/* BLOC 5 — DIFFÉRENCIATION */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-[1120px] px-6">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-navy max-w-3xl">
            Un positionnement volontairement ciblé
          </h2>
          <ul className="mt-8 list-none space-y-3 max-w-2xl">
            <li className="flex items-start gap-2 text-navy/70">
              <span className="text-navy mt-0.5">—</span>
              <span>
                Une spécialisation sur le contrôle des délégataires
              </span>
            </li>
            <li className="flex items-start gap-2 text-navy/70">
              <span className="text-navy mt-0.5">—</span>
              <span>
                Une approche centrée sur la lisibilité globale du dispositif
              </span>
            </li>
            <li className="flex items-start gap-2 text-navy/70">
              <span className="text-navy mt-0.5">—</span>
              <span>
                Une intervention ancrée dans le fonctionnement réel
              </span>
            </li>
            <li className="flex items-start gap-2 text-navy/70">
              <span className="text-navy mt-0.5">—</span>
              <span>
                Une capacité à structurer sans dépendance aux personnes clés
              </span>
            </li>
            <li className="flex items-start gap-2 text-navy/70">
              <span className="text-navy mt-0.5">—</span>
              <span>
                Une logique de dispositif, pas de production de livrables
              </span>
            </li>
          </ul>
          <p className="mt-6 text-navy/70 leading-relaxed max-w-2xl">
            Le cabinet n&apos;intervient pas sur des sujets génériques. Il se
            positionne sur un enjeu précis, structurant et souvent sous-estimé.
          </p>
        </div>
      </section>

      {/* BLOC 6 — CONVICTION */}
      <section className="bg-gray-light py-16">
        <div className="mx-auto max-w-[1120px] px-6">
          <p className="font-serif text-xl md:text-2xl italic text-navy/80 max-w-2xl mx-auto text-center leading-relaxed">
            Un dispositif de contrôle n&apos;est réellement robuste que
            lorsqu&apos;il peut être expliqué, démontré et transmis sans
            dépendre de ceux qui l&apos;ont construit.
          </p>
        </div>
      </section>

      {/* BLOC 7 — CTA FINAL */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-[1120px] px-6 text-center">
          <p className="text-navy/70 leading-relaxed max-w-xl mx-auto">
            Vous souhaitez clarifier votre dispositif et sécuriser sa capacité à
            être expliqué à tout moment&nbsp;?
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
