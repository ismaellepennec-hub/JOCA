import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Échangez avec JOCA Services sur votre dispositif de contrôle des délégataires : un premier échange pour évaluer votre situation et vos besoins de structuration.",
};

export default function Contact() {
  return (
    <>
      {/* BLOC 1 — HERO */}
      <section className="bg-white pt-20 md:pt-28 pb-10 md:pb-12">
        <div className="mx-auto max-w-[1120px] px-6">
          <h1 className="font-serif text-4xl md:text-5xl font-semibold text-navy max-w-3xl leading-tight">
            Échanger sur votre dispositif
          </h1>
          <div className="mt-8 max-w-2xl space-y-4 text-navy/70 leading-relaxed">
            <p>
              Vous souhaitez clarifier votre dispositif de contrôle des
              délégataires ou évaluer sa capacité à être structuré et piloté dans
              la durée&nbsp;?
            </p>
            <p>
              Un premier échange permet d&apos;identifier les enjeux et le
              niveau d&apos;intervention adapté.
            </p>
          </div>
        </div>
      </section>

      {/* BLOC 2 — FORMULAIRE + SIDEBAR */}
      <section className="bg-white pt-4 pb-16">
        <div className="mx-auto max-w-[1120px] px-6">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_320px] gap-16 items-start">
            {/* Colonne gauche — formulaire */}
            <div>
              <h2 className="font-serif text-2xl font-semibold text-navy">
                Prendre contact
              </h2>
              <p className="mt-3 text-navy/70 leading-relaxed">
                Chaque demande est analysée avec attention. Une réponse est
                apportée lorsque le sujet correspond au positionnement du
                cabinet.
              </p>
              <div className="mt-8">
                <ContactForm />
              </div>
            </div>

            {/* Colonne droite — sticky */}
            <div className="md:sticky md:top-28 border border-gray-border rounded-xl p-8 space-y-6">
              <div>
                <h3 className="font-serif text-xl font-semibold text-navy">
                  Contact direct
                </h3>
                <p className="mt-2 text-sm text-navy/60 leading-relaxed">
                  Vous pouvez également adresser votre demande par email.
                </p>
                <a
                  href="mailto:contact@joca-services.fr"
                  className="block mt-3 text-navy font-medium hover:underline"
                >
                  contact@joca-services.fr
                </a>
              </div>
              <div className="border-t border-gray-border pt-6">
                <p className="font-serif italic text-navy/60 text-sm leading-relaxed">
                  Chaque demande est analysée avec attention. Une réponse est
                  apportée afin de proposer un échange adapté à la situation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
