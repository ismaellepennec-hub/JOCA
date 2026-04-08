export default function DelegataControlSimplified() {
  return (
    <div className="my-16">
      {/* Schéma 3 blocs */}
      <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr_auto_1fr] gap-0 items-stretch">
        {/* Bloc 1 — Dispersé */}
        <div className="bg-gray-light border border-gray-border rounded-lg p-6">
          <h4 className="font-serif text-lg font-semibold text-navy">
            Dispositif dispersé
          </h4>
          <ul className="mt-4 list-none space-y-2 text-sm text-navy/70">
            <li className="flex items-start gap-2">
              <span className="text-navy/40">·</span>
              <span>Contrôles existants</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-navy/40">·</span>
              <span>Preuves éparpillées</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-navy/40">·</span>
              <span>Formats multiples</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-navy/40">·</span>
              <span>Dépendance à certains individus</span>
            </li>
          </ul>
          <p className="mt-4 text-xs text-navy/50 leading-relaxed">
            Difficile à expliquer, à consolider et à présenter
          </p>
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

        {/* Bloc 2 — DelegataControl™ */}
        <div className="bg-navy rounded-lg p-6 text-white">
          <h4 className="font-serif text-lg font-semibold text-center">
            DelegataControl™
          </h4>
          <div className="mt-6 flex flex-col items-center gap-3">
            <div className="flex items-center gap-2 text-sm">
              <span className="font-medium">Clarifier</span>
              <span className="text-white/40">→</span>
              <span className="font-medium">Structurer</span>
              <span className="text-white/40">→</span>
              <span className="font-medium">Stabiliser</span>
            </div>
          </div>
          <div className="mt-6 space-y-2 text-xs text-white/60">
            <p>Clarifier : comprendre le fonctionnement réel</p>
            <p>Structurer : organiser contrôles, responsabilités et preuves</p>
            <p>Stabiliser : maintenir la cohérence dans le temps</p>
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

        {/* Bloc 3 — Structuré */}
        <div className="bg-[#0a1a2e] rounded-lg p-6 text-white">
          <h4 className="font-serif text-lg font-semibold">
            Dispositif structuré
          </h4>
          <ul className="mt-4 list-none space-y-2 text-sm text-white/80">
            <li className="flex items-start gap-2">
              <span className="text-white/40">·</span>
              <span>Lisible</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-white/40">·</span>
              <span>Consolidé</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-white/40">·</span>
              <span>Pilotable</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-white/40">·</span>
              <span>Démontrable</span>
            </li>
          </ul>
          <p className="mt-4 text-sm font-medium text-white/90">
            Indépendant des individus
          </p>
        </div>
      </div>

      {/* Phrase finale */}
      <p className="mt-8 text-center font-serif italic text-navy/70 leading-relaxed max-w-2xl mx-auto">
        Un dispositif qui fonctionne ne suffit pas. Il doit pouvoir être
        expliqué, mobilisé et défendu à tout moment.
      </p>
    </div>
  );
}
