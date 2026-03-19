import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Engagez une réflexion structurée avec JOCA Services — premier échange pour évaluer la pertinence d'un accompagnement.",
};

export default function Contact() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-[1120px] px-6">
        <h1 className="font-serif text-4xl md:text-5xl font-semibold text-navy max-w-3xl leading-tight">
          Engager une réflexion structurée.
        </h1>

        <div className="mt-8 max-w-2xl space-y-4 text-navy/70 leading-relaxed">
          <p>
            Toute intervention débute par un premier échange permettant
            d&apos;évaluer la situation et la pertinence d&apos;un
            accompagnement.
          </p>
          <p>Cet échange permet notamment de&nbsp;:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Comprendre l&apos;organisation actuelle du dispositif</li>
            <li>Identifier les enjeux principaux</li>
            <li>Apprécier l&apos;intérêt d&apos;une intervention</li>
          </ul>
        </div>

        <div className="mt-8 max-w-2xl">
          <h2 className="font-serif text-2xl font-semibold text-navy">
            Modalités
          </h2>
          <div className="mt-4 text-navy/70 leading-relaxed space-y-2">
            <p>Merci de préciser&nbsp;:</p>
            <ul className="list-none space-y-1">
              <li className="flex items-start gap-2">
                <span className="text-navy">—</span>
                <span>Votre organisation</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-navy">—</span>
                <span>Votre fonction</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-navy">—</span>
                <span>Le contexte de votre demande</span>
              </li>
            </ul>
            <p>Nous reviendrons vers vous dans les meilleurs délais.</p>
          </div>
        </div>

        <div className="mt-12 max-w-xl">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
