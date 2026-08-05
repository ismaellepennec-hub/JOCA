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
      {/* BLOC 1 — HERO (dominant) */}
      <section className="bg-white pt-20 md:pt-32 pb-16 md:pb-24">
        <div className="mx-auto max-w-[1120px] px-6">
          <h1 className="font-serif text-4xl md:text-5xl font-semibold text-navy max-w-3xl leading-[1.2] tracking-[-0.5px]">
            Évaluer votre dispositif actuel
          </h1>
          <div className="mt-6 max-w-2xl space-y-4 text-[17px] md:text-[18px] leading-[1.6] text-[#374151]">
            <p>
              Vous souhaitez vérifier la lisibilité, le pilotage ou la
              démontrabilité de votre contrôle des délégataires&nbsp;?
            </p>
            <p>
              Un premier échange permet de situer vos enjeux et de déterminer si
              l&apos;intervention de JOCA Services est adaptée.
            </p>
          </div>
        </div>
      </section>

      {/* BLOC 2 — FORMULAIRE (centre d'attention) + CONTACT DIRECT (secondaire) */}
      <section className="bg-white pb-16 md:pb-24">
        <div className="mx-auto max-w-[1120px] px-6">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_320px] gap-16 items-start">
            {/* Colonne gauche — formulaire */}
            <div>
              <h2 className="font-serif text-[28px] md:text-[34px] font-medium text-navy leading-[1.2]">
                Prendre contact
              </h2>
              <p className="mt-4 text-[17px] leading-[1.6] text-[#374151]">
                Chaque demande est analysée avec attention. Une réponse est
                apportée lorsque le sujet correspond au positionnement du
                cabinet.
              </p>
              <div className="mt-8">
                <ContactForm />
              </div>
            </div>

            {/* Colonne droite — contact direct (plus léger, moins contrasté) */}
            <div className="md:sticky md:top-28 rounded-md bg-[#F9FAFB] p-8">
              <h3 className="font-serif text-[20px] font-medium text-navy">
                Contact direct
              </h3>
              <p className="mt-4 text-[15px] leading-[1.6] text-[#6B7280]">
                Vous pouvez également adresser votre demande par email.
              </p>
              <a
                href="mailto:contact@joca-services.fr"
                className="mt-3 block text-[#111827] font-medium hover:underline"
              >
                contact@joca-services.fr
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
