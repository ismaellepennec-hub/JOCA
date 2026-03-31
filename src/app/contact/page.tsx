import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Échangez avec JOCA Services sur votre dispositif de contrôle des délégataires — premier échange pour évaluer votre situation.",
};

export default function Contact() {
  return (
    <>
      {/* BLOC 1 — HERO */}
      <section className="bg-white py-24 md:py-32">
        <div className="mx-auto max-w-[1120px] px-6">
          <h1 className="font-serif text-4xl md:text-5xl font-semibold text-navy max-w-3xl leading-tight">
            Échanger sur votre dispositif
          </h1>
          <div className="mt-8 max-w-2xl space-y-4 text-navy/70 leading-relaxed">
            <p>
              Vous souhaitez clarifier votre dispositif de contrôle des
              délégataires, ou évaluer sa capacité à être structuré et piloté
              dans la durée&nbsp;?
            </p>
            <p>
              Un premier échange permet d&apos;identifier les enjeux et le
              niveau d&apos;intervention adapté.
            </p>
          </div>
        </div>
      </section>

      {/* BLOC 2 — POSITIONNEMENT */}
      <section className="bg-gray-light py-20">
        <div className="mx-auto max-w-[1120px] px-6">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-navy max-w-3xl">
            Les échanges s&apos;adressent principalement à
          </h2>
          <ul className="mt-8 list-none space-y-2 max-w-xl">
            <li className="flex items-start gap-2 text-navy/70">
              <span className="text-navy mt-0.5">—</span>
              <span>directions conformité</span>
            </li>
            <li className="flex items-start gap-2 text-navy/70">
              <span className="text-navy mt-0.5">—</span>
              <span>directions risques</span>
            </li>
            <li className="flex items-start gap-2 text-navy/70">
              <span className="text-navy mt-0.5">—</span>
              <span>directions contrôle interne</span>
            </li>
            <li className="flex items-start gap-2 text-navy/70">
              <span className="text-navy mt-0.5">—</span>
              <span>
                directions métiers impliquées dans la gestion des délégataires
              </span>
            </li>
          </ul>
          <p className="mt-4 text-navy/70 leading-relaxed">
            Dans des organisations souhaitant structurer durablement leur
            dispositif.
          </p>
        </div>
      </section>

      {/* BLOC 3 — FORMULAIRE */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-[1120px] px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-semibold text-navy max-w-3xl">
                Prendre contact
              </h2>
              <p className="mt-4 text-navy/70 leading-relaxed">
                Merci de préciser votre contexte. Chaque demande est analysée
                avec attention et une réponse est apportée rapidement.
              </p>
              <div className="mt-8">
                <ContactForm />
              </div>
            </div>

            <div>
              <h3 className="font-serif text-xl font-semibold text-navy">
                Contact direct
              </h3>
              <p className="mt-4 text-navy/70 text-sm leading-relaxed">
                Vous pouvez également nous contacter directement par email.
              </p>
              <a
                href="mailto:contact@joca-services.fr"
                className="mt-3 inline-block text-navy font-medium hover:underline"
              >
                contact@joca-services.fr
              </a>
              <div className="border-t border-gray-border my-8" />
              <p className="font-serif italic text-navy/70 text-sm leading-relaxed">
                Chaque demande est analysée avec attention. Une réponse est
                apportée rapidement afin de proposer un échange adapté à votre
                situation.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
