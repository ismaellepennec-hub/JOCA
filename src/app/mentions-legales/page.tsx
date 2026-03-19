import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions légales",
  description: "Mentions légales du site JOCA Services.",
};

export default function MentionsLegales() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-[1120px] px-6">
        <h1 className="font-serif text-4xl md:text-5xl font-semibold text-navy">
          Mentions légales
        </h1>

        <div className="mt-12 max-w-2xl space-y-8 text-navy/70 leading-relaxed">
          <div>
            <h2 className="font-serif text-2xl font-semibold text-navy">
              Éditeur du site
            </h2>
            <p className="mt-4">
              JOCA Services
              <br />
              Cabinet indépendant spécialisé dans la structuration du contrôle
              des délégataires en environnement assurance.
            </p>
            <p className="mt-2">
              Responsable de la publication&nbsp;: George-Carole BARBIER
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl font-semibold text-navy">
              Hébergement
            </h2>
            <p className="mt-4">
              Les informations relatives à l&apos;hébergeur seront complétées
              après mise en ligne.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl font-semibold text-navy">
              Protection des données personnelles
            </h2>
            <p className="mt-4">
              Les données collectées via le formulaire de contact (nom,
              fonction, organisation, email professionnel, message) sont
              utilisées uniquement dans le cadre de la prise de contact et ne
              sont transmises à aucun tiers.
            </p>
            <p className="mt-2">
              Conformément au Règlement Général sur la Protection des Données
              (RGPD), vous disposez d&apos;un droit d&apos;accès, de
              rectification et de suppression de vos données. Pour exercer ces
              droits, vous pouvez nous contacter via le formulaire de contact du
              site.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl font-semibold text-navy">
              Propriété intellectuelle
            </h2>
            <p className="mt-4">
              L&apos;ensemble du contenu de ce site (textes, méthode
              DelegataControl™, structure) est protégé par le droit de la
              propriété intellectuelle. Toute reproduction, même partielle, est
              soumise à autorisation préalable.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
