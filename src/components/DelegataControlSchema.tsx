export default function DelegataControlSchema() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-[1120px] px-6">
        <svg width="100%" viewBox="0 0 720 510" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <marker id="arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
              <path d="M2 1L8 5L2 9" fill="none" stroke="context-stroke" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </marker>
          </defs>

          {/* Titre */}
          <text fontFamily="var(--font-cormorant), serif" fontSize="20" fontWeight="600" x="360" y="36" textAnchor="middle" fill="currentColor">DelegataControl™</text>
          <text fontFamily="var(--font-inter), sans-serif" fontSize="12" x="360" y="58" textAnchor="middle" fill="currentColor" opacity="0.5">Méthode de structuration du contrôle des délégataires</text>

          {/* ======================== */}
          {/* ÉTAPE 1 — Clarifier      */}
          {/* ======================== */}
          <rect x="30" y="80" width="180" height="76" rx="10" fill="currentColor" fillOpacity="0.03" stroke="currentColor" strokeWidth="1.4" opacity="0.6"/>
          <text fontFamily="var(--font-inter), sans-serif" fontSize="12" fontWeight="500" x="120" y="106" textAnchor="middle" fill="currentColor" opacity="0.45">01</text>
          <text fontFamily="var(--font-cormorant), serif" fontSize="20" fontWeight="600" x="120" y="134" textAnchor="middle" fill="currentColor">Clarifier</text>

          {/* Flèche vers détails */}
          <line x1="120" y1="158" x2="120" y2="220" stroke="currentColor" strokeWidth="1.5" opacity="0.5" markerEnd="url(#arrow)"/>

          {/* Détails étape 1 */}
          <rect x="30" y="222" width="180" height="110" rx="8" fill="currentColor" fillOpacity="0.04" stroke="currentColor" strokeWidth="0.8" opacity="0.5"/>
          <text fontFamily="var(--font-inter), sans-serif" fontSize="12" x="120" y="252" textAnchor="middle" fill="currentColor" opacity="0.7">Délégations en place</text>
          <text fontFamily="var(--font-inter), sans-serif" fontSize="12" x="120" y="274" textAnchor="middle" fill="currentColor" opacity="0.7">Responsabilités</text>
          <text fontFamily="var(--font-inter), sans-serif" fontSize="12" x="120" y="296" textAnchor="middle" fill="currentColor" opacity="0.7">Contrôles réalisés</text>
          <text fontFamily="var(--font-inter), sans-serif" fontSize="12" x="120" y="318" textAnchor="middle" fill="currentColor" opacity="0.7">Gouvernance existante</text>

          {/* Flèche 1 → 2 */}
          <line x1="212" y1="118" x2="268" y2="118" stroke="currentColor" strokeWidth="1.5" opacity="0.5" markerEnd="url(#arrow)"/>

          {/* ======================== */}
          {/* ÉTAPE 2 — Structurer     */}
          {/* ======================== */}
          <rect x="270" y="80" width="180" height="76" rx="10" fill="currentColor" fillOpacity="0.03" stroke="currentColor" strokeWidth="1.4" opacity="0.6"/>
          <text fontFamily="var(--font-inter), sans-serif" fontSize="12" fontWeight="500" x="360" y="106" textAnchor="middle" fill="currentColor" opacity="0.45">02</text>
          <text fontFamily="var(--font-cormorant), serif" fontSize="20" fontWeight="600" x="360" y="134" textAnchor="middle" fill="currentColor">Structurer</text>

          {/* Flèche vers détails */}
          <line x1="360" y1="158" x2="360" y2="220" stroke="currentColor" strokeWidth="1.5" opacity="0.5" markerEnd="url(#arrow)"/>

          {/* Détails étape 2 */}
          <rect x="270" y="222" width="180" height="110" rx="8" fill="currentColor" fillOpacity="0.04" stroke="currentColor" strokeWidth="0.8" opacity="0.5"/>
          <text fontFamily="var(--font-inter), sans-serif" fontSize="12" x="360" y="252" textAnchor="middle" fill="currentColor" opacity="0.7">Rôles clarifiés</text>
          <text fontFamily="var(--font-inter), sans-serif" fontSize="12" x="360" y="274" textAnchor="middle" fill="currentColor" opacity="0.7">Processus formalisés</text>
          <text fontFamily="var(--font-inter), sans-serif" fontSize="12" x="360" y="296" textAnchor="middle" fill="currentColor" opacity="0.7">Traçabilité structurée</text>
          <text fontFamily="var(--font-inter), sans-serif" fontSize="12" x="360" y="318" textAnchor="middle" fill="currentColor" opacity="0.7">Gouvernance consolidée</text>

          {/* Flèche 2 → 3 */}
          <line x1="452" y1="118" x2="508" y2="118" stroke="currentColor" strokeWidth="1.5" opacity="0.5" markerEnd="url(#arrow)"/>

          {/* ======================== */}
          {/* ÉTAPE 3 — Stabiliser     */}
          {/* ======================== */}
          <rect x="510" y="80" width="180" height="76" rx="10" fill="currentColor" fillOpacity="0.03" stroke="currentColor" strokeWidth="1.4" opacity="0.6"/>
          <text fontFamily="var(--font-inter), sans-serif" fontSize="12" fontWeight="500" x="600" y="106" textAnchor="middle" fill="currentColor" opacity="0.45">03</text>
          <text fontFamily="var(--font-cormorant), serif" fontSize="20" fontWeight="600" x="600" y="134" textAnchor="middle" fill="currentColor">Piloter</text>

          {/* Flèche vers détails */}
          <line x1="600" y1="158" x2="600" y2="220" stroke="currentColor" strokeWidth="1.5" opacity="0.5" markerEnd="url(#arrow)"/>

          {/* Détails étape 3 */}
          <rect x="510" y="222" width="180" height="110" rx="8" fill="currentColor" fillOpacity="0.04" stroke="currentColor" strokeWidth="0.8" opacity="0.5"/>
          <text fontFamily="var(--font-inter), sans-serif" fontSize="12" x="600" y="252" textAnchor="middle" fill="currentColor" opacity="0.7">Suivi des évolutions</text>
          <text fontFamily="var(--font-inter), sans-serif" fontSize="12" x="600" y="274" textAnchor="middle" fill="currentColor" opacity="0.7">Détection des fragilités</text>
          <text fontFamily="var(--font-inter), sans-serif" fontSize="12" x="600" y="296" textAnchor="middle" fill="currentColor" opacity="0.7">Adaptations ciblées</text>
          <text fontFamily="var(--font-inter), sans-serif" fontSize="12" x="600" y="318" textAnchor="middle" fill="currentColor" opacity="0.7">Lisibilité maintenue</text>

          {/* ======================== */}
          {/* RÉSULTAT FINAL           */}
          {/* ======================== */}
          <rect x="120" y="392" width="480" height="72" rx="10" fill="currentColor" fillOpacity="0.08" stroke="currentColor" strokeWidth="1.5" opacity="0.6"/>
          <text fontFamily="var(--font-cormorant), serif" fontSize="18" fontWeight="600" x="360" y="422" textAnchor="middle" fill="currentColor">Dispositif lisible, pilotable et démontrable</text>
          <text fontFamily="var(--font-inter), sans-serif" fontSize="13" fontWeight="500" x="360" y="446" textAnchor="middle" fill="currentColor" opacity="0.55">Indépendant des individus</text>

          {/* Connecteurs vers résultat — flèches pleines */}
          <line x1="120" y1="334" x2="200" y2="390" stroke="currentColor" strokeWidth="1.2" opacity="0.3" markerEnd="url(#arrow)"/>
          <line x1="360" y1="334" x2="360" y2="390" stroke="currentColor" strokeWidth="1.2" opacity="0.3" markerEnd="url(#arrow)"/>
          <line x1="600" y1="334" x2="520" y2="390" stroke="currentColor" strokeWidth="1.2" opacity="0.3" markerEnd="url(#arrow)"/>
        </svg>
      </div>
    </section>
  );
}
