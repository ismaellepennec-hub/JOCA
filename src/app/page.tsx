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
      <section className="bg-white py-24 md:py-32">
        <div className="mx-auto max-w-[1120px] px-6">
          <div className="grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-12 items-center">
            <div>
              <h1 className="font-serif text-4xl md:text-5xl font-semibold text-navy max-w-3xl leading-tight">
                Quand le contrôle des délégataires repose sur des personnes et
                des informations éparpillées, le dispositif devient fragile.
              </h1>
              <div className="mt-8 max-w-xl space-y-4 text-navy/70 leading-relaxed">
                <p>
                  Dans la plupart des organisations, les contrôles existent. Mais
                  les preuves, documents et supports (mails, fichiers,
                  outils…) sont dispersés, hétérogènes et difficiles à relire de
                  manière consolidée.
                </p>
                <p>Le dispositif devient&nbsp;:</p>
                <ul className="list-none space-y-1.5 pl-1">
                  <li className="flex items-start gap-2">
                    <span className="text-navy/40">–</span>
                    <span>dépendant de certaines personnes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-navy/40">–</span>
                    <span>difficile à expliquer clairement</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-navy/40">–</span>
                    <span>complexe à mobiliser rapidement</span>
                  </li>
                </ul>
                <p className="font-medium text-navy">
                  Nous intervenons pour structurer l&apos;ensemble et le rendre
                  lisible, pilotable et transmissible.
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
                alt="Documents et supports de travail — JOCA Services"
                fill
                className="object-cover object-top"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* BLOC 2 — TENSION */}
      <section className="bg-navy py-16">
        <div className="mx-auto max-w-[1120px] px-6">
          <p className="font-serif italic text-2xl md:text-3xl text-white max-w-3xl mx-auto text-center leading-relaxed">
            Le sujet n&apos;est pas l&apos;existence des contrôles. Le sujet est
            la capacité à les retrouver, les comprendre et les démontrer
            rapidement.
          </p>
        </div>
      </section>

      {/* BLOC 3 — PROBLÈME */}
      <section className="bg-gray-light py-20">
        <div className="mx-auto max-w-[1120px] px-6">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-navy max-w-3xl">
            Dans la plupart des organisations
          </h2>

          <div className="mt-8 max-w-2xl space-y-6 text-navy/70 leading-relaxed">
            <div>
              <p className="font-medium text-navy">
                Les contrôles sont réalisés, les preuves existent, les équipes
                connaissent leur périmètre.
              </p>
            </div>

            <div>
              <p className="font-medium text-navy mb-2">
                Mais dans les faits&nbsp;:
              </p>
              <ul className="list-none space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-navy/40">–</span>
                  <span>
                    les informations sont dispersées (mails, fichiers,
                    outils…)
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-navy/40">–</span>
                  <span>les formats sont hétérogènes</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-navy/40">–</span>
                  <span>les responsabilités sont réparties</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-navy/40">–</span>
                  <span>
                    une partie de la connaissance repose sur certaines personnes
                  </span>
                </li>
              </ul>
            </div>

            <div className="border-l-4 border-navy pl-4 py-2">
              <p className="font-medium text-navy">Résultat&nbsp;:</p>
              <p>
                Le dispositif fonctionne… mais devient difficile à lire, à
                consolider et à expliquer dès qu&apos;il faut le mobiliser.
              </p>
            </div>

            <div className="border-l-4 border-navy pl-4 py-2">
              <p className="font-medium text-navy">Et surtout&nbsp;:</p>
              <p>
                Il devient fragile dès qu&apos;il doit être repris, partagé ou
                justifié.
              </p>
            </div>
          </div>

          <AvantApresSchema />
        </div>
      </section>

      {/* BLOC 4 — CE QUE NOUS APPORTONS */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-[1120px] px-6">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-navy max-w-3xl">
            Ce que nous apportons
          </h2>
          <p className="mt-6 text-navy/70 max-w-2xl leading-relaxed">
            Nous intervenons pour rendre le dispositif&nbsp;:
          </p>

          <div className="mt-10 grid grid-cols-2 md:grid-cols-5 gap-8 max-w-4xl">
            {["Lisible", "Cohérent", "Transmissible", "Pilotable", "Démontrable"].map(
              (item) => (
                <div key={item} className="border-t border-gray-border pt-4">
                  <span className="font-serif text-xl font-semibold text-navy">
                    {item}
                  </span>
                </div>
              )
            )}
          </div>

          <div className="mt-10 space-y-2 text-navy/70 leading-relaxed">
            <p>
              → en structurant les informations, les preuves et les
              responsabilités
            </p>
            <p>→ et en réduisant la dépendance aux individus</p>
          </div>
        </div>
      </section>

      {/* BLOC 5 — LES 3 BRIQUES */}
      <section className="bg-gray-light py-20">
        <div className="mx-auto max-w-[1120px] px-6">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-navy max-w-3xl">
            Une intervention structurée en 3 briques
          </h2>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            {/* Brique 1 */}
            <div className="border-t border-gray-border pt-6 flex flex-col gap-3">
              <span className="text-sm text-navy/40">01</span>
              <h3 className="font-serif text-xl font-semibold text-navy">
                Diagnostic structuré
              </h3>
              <ul className="list-none space-y-2 text-navy/70 text-sm leading-relaxed">
                <li className="flex items-start gap-2">
                  <span className="text-navy/40">·</span>
                  <span>
                    Comprendre le fonctionnement réel du dispositif
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-navy/40">·</span>
                  <span>Identifier les zones de fragilité</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-navy/40">·</span>
                  <span>
                    Mettre en évidence les points difficiles à lire ou à
                    mobiliser
                  </span>
                </li>
              </ul>
              <p className="text-sm font-medium text-navy mt-4">
                Résultat&nbsp;: une vision claire et structurée de la situation
              </p>
            </div>

            {/* Brique 2 */}
            <div className="border-t border-gray-border pt-6 flex flex-col gap-3">
              <span className="text-sm text-navy/40">02</span>
              <h3 className="font-serif text-xl font-semibold text-navy">
                Structuration opérationnelle
              </h3>
              <ul className="list-none space-y-2 text-navy/70 text-sm leading-relaxed">
                <li className="flex items-start gap-2">
                  <span className="text-navy/40">·</span>
                  <span>Organiser les contrôles</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-navy/40">·</span>
                  <span>Structurer les supports et les preuves</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-navy/40">·</span>
                  <span>Clarifier les rôles et responsabilités</span>
                </li>
              </ul>
              <p className="text-sm font-medium text-navy mt-4">
                Résultat&nbsp;: un dispositif lisible, cohérent et exploitable
              </p>
            </div>

            {/* Brique 3 */}
            <div className="border-t border-gray-border pt-6 flex flex-col gap-3">
              <span className="text-sm text-navy/40">03</span>
              <h3 className="font-serif text-xl font-semibold text-navy">
                Gouvernance &amp; monitoring
              </h3>
              <ul className="list-none space-y-2 text-navy/70 text-sm leading-relaxed">
                <li className="flex items-start gap-2">
                  <span className="text-navy/40">·</span>
                  <span>Maintenir la cohérence dans le temps</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-navy/40">·</span>
                  <span>Éviter la dispersion progressive</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-navy/40">·</span>
                  <span>Accompagner les évolutions</span>
                </li>
              </ul>
              <p className="text-sm font-medium text-navy mt-4">
                Résultat&nbsp;: un dispositif qui reste stable et pilotable
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

      {/* BLOC 6 — MÉTHODE */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-[1120px] px-6">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-navy max-w-3xl">
            Une approche structurée&nbsp;: DelegataControl™
          </h2>
          <p className="mt-6 text-navy/70 max-w-2xl leading-relaxed">
            Une méthode conçue pour analyser le fonctionnement réel, structurer
            les informations et les artefacts (preuves, documents, supports),
            organiser la gouvernance et garantir une lecture claire et consolidée
            du dispositif.
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

      {/* BLOC 7 — FILTRE */}
      <section className="bg-navy py-16">
        <div className="mx-auto max-w-[1120px] px-6">
          <p className="font-serif text-xl md:text-2xl text-white max-w-2xl mx-auto text-center leading-relaxed">
            Ce travail s&apos;adresse aux organisations souhaitant structurer
            durablement leur dispositif de contrôle des délégataires.
          </p>
        </div>
      </section>

      {/* BLOC 8 — CTA FINAL */}
      <section className="bg-gray-light py-20">
        <div className="mx-auto max-w-[1120px] px-6 text-center">
          <p className="text-navy/70 leading-relaxed max-w-2xl mx-auto">
            Vous souhaitez vérifier si votre dispositif peut être compris,
            mobilisé et expliqué clairement à tout moment&nbsp;?
          </p>
          <div className="mt-8">
            <CTAButton
              href="/contact"
              label="Faire un point sur votre dispositif"
            />
          </div>
        </div>
      </section>
    </>
  );
}
