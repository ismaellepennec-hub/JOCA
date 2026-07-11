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
                  Le contrôle des délégataires existe dans la plupart des
                  organisations. Mais il reste souvent difficile à lire, à
                  piloter et à défendre dans la durée.
                </p>
                <p>
                  Le cabinet intervient pour structurer l&apos;existant et
                  rendre le dispositif lisible, cohérent et démontrable.
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
            Le dispositif existe. Mais il reste difficile à mobiliser.
          </h2>
          <div className="mt-8 max-w-2xl space-y-4 text-navy/70 leading-relaxed">
            <p>Dans la majorité des organisations&nbsp;:</p>
            <ul className="list-none space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-navy/40">–</span>
                <span>la lecture globale est limitée</span>
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
                <span>la démonstration reste fragile</span>
              </li>
            </ul>
          </div>
          <div className="mt-6 max-w-2xl">
            <p className="font-medium text-navy leading-relaxed">
              L&apos;enjeu n&apos;est pas d&apos;ajouter.
              L&apos;enjeu est de structurer.
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
          <div className="mt-8 max-w-2xl space-y-4">
            <div className="border-l-4 border-navy pl-4 py-2">
              <p className="text-navy/70 leading-relaxed">
                Partir du fonctionnement réel.
              </p>
            </div>
            <div className="border-l-4 border-navy pl-4 py-2">
              <p className="text-navy/70 leading-relaxed">
                Structurer sans complexifier.
              </p>
            </div>
            <div className="border-l-4 border-navy pl-4 py-2">
              <p className="text-navy/70 leading-relaxed">
                Organiser les preuves autant que les contrôles.
              </p>
            </div>
            <div className="border-l-4 border-navy pl-4 py-2">
              <p className="text-navy/70 leading-relaxed">
                Rendre le dispositif indépendant des personnes.
              </p>
            </div>
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
                Spécialisation sur le contrôle des délégataires.
              </span>
            </li>
            <li className="flex items-start gap-2 text-navy/70">
              <span className="text-navy mt-0.5">—</span>
              <span>
                Focalisation sur la lisibilité du dispositif.
              </span>
            </li>
            <li className="flex items-start gap-2 text-navy/70">
              <span className="text-navy mt-0.5">—</span>
              <span>Approche ancrée dans le réel.</span>
            </li>
          </ul>
          <p className="mt-6 text-navy/70 leading-relaxed max-w-2xl">
            Pas de logique de production. Une logique de structuration.
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
