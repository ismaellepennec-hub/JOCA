export default function DelegataControlSimplified() {
  return (
    <div className="my-16">
      {/* Titre */}
      <h3 className="font-serif text-2xl md:text-3xl font-semibold text-navy text-center">
        Des livrables structurés, exploitables et défendables
      </h3>
      <div className="w-16 h-px bg-navy/20 mx-auto mt-6 mb-12" />

      {/* Schéma 3 blocs */}
      <div className="grid grid-cols-1 gap-0 md:grid-cols-[1fr_auto_1fr_auto_1fr] md:gap-0 items-stretch">
        {/* Bloc 1 — Ce que nous analysons */}
        <div className="bg-gray-light border border-gray-border rounded-lg p-6">
          <h4 className="font-serif text-lg font-semibold text-navy border-b border-gray-border pb-4 mb-4 md:h-[60px] flex items-end">
            Ce que nous analysons
          </h4>
          <ul className="list-none space-y-2 text-sm text-navy/70">
            <li className="flex items-start gap-2">
              <span className="text-navy/40">·</span>
              <span>Délégations en place</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-navy/40">·</span>
              <span>Contrôles réalisés</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-navy/40">·</span>
              <span>Responsabilités</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-navy/40">·</span>
              <span>Preuves existantes</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-navy/40">·</span>
              <span>Gouvernance actuelle</span>
            </li>
          </ul>
        </div>

        {/* Flèche 1 → 2 */}
        <div className="hidden md:flex items-center justify-center px-3">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.4"/>
          </svg>
        </div>
        <div className="flex md:hidden items-center justify-center py-3">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 5V19M12 19L6 13M12 19L18 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.4"/>
          </svg>
        </div>

        {/* Bloc 2 — Structuration DelegataControl™ */}
        <div className="bg-navy rounded-lg p-6 text-white">
          <h4 className="font-serif text-lg font-semibold text-center border-b border-white/20 pb-4 mb-4 md:md:h-[60px] flex items-end justify-center">
            <span>Structuration DelegataControl™</span>
          </h4>
          <div className="flex items-center justify-center gap-2 text-sm">
            <span className="font-medium">Clarifier</span>
            <span className="text-white/40">→</span>
            <span className="font-medium">Structurer</span>
            <span className="text-white/40">→</span>
            <span className="font-medium">Piloter</span>
          </div>
          <div className="mt-6 space-y-3 text-sm text-white/70">
            <div>
              <p className="font-medium text-white/90">Clarifier</p>
              <p>Comprendre le fonctionnement réel</p>
            </div>
            <div>
              <p className="font-medium text-white/90">Structurer</p>
              <p>Organiser contrôles, responsabilités et preuves</p>
            </div>
            <div>
              <p className="font-medium text-white/90">Piloter</p>
              <p>Maintenir la lisibilité et la capacité de démonstration dans le temps</p>
            </div>
          </div>
        </div>

        {/* Flèche 2 → 3 */}
        <div className="hidden md:flex items-center justify-center px-3">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.4"/>
          </svg>
        </div>
        <div className="flex md:hidden items-center justify-center py-3">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 5V19M12 19L6 13M12 19L18 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.4"/>
          </svg>
        </div>

        {/* Bloc 3 — Ce que vous obtenez */}
        <div className="bg-gray-light border border-gray-border rounded-lg p-6">
          <h4 className="font-serif text-lg font-semibold text-navy border-b border-gray-border pb-4 mb-4 md:h-[60px] flex items-end">
            Ce que vous obtenez
          </h4>
          <ul className="list-none space-y-2 text-sm text-navy/70">
            <li className="flex items-start gap-2">
              <span className="text-navy/40">·</span>
              <span>Cartographie consolidée du dispositif</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-navy/40">·</span>
              <span>Indicateurs de pilotage (%)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-navy/40">·</span>
              <span>Dispositif explicable à tout moment</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-navy/40">·</span>
              <span>Preuves structurées et accessibles</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-navy/40">·</span>
              <span>Réduction de la dépendance aux individus</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Phrase finale */}
      <p className="mt-8 text-center font-serif italic text-navy/70 leading-relaxed max-w-2xl mx-auto">
        Un dispositif prêt à être présenté, expliqué et défendu en audit.
      </p>
    </div>
  );
}
