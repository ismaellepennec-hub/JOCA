export default function DelegataControlSchema() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-[1120px] px-6">
        <svg width="100%" viewBox="0 0 720 540" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <marker id="arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
              <path d="M2 1L8 5L2 9" fill="none" stroke="context-stroke" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </marker>
          </defs>

          {/* Titre */}
          <text fontFamily="var(--font-cormorant), serif" fontSize="18" fontWeight="600" x="360" y="36" textAnchor="middle" fill="currentColor">DelegataControl™</text>
          <text fontFamily="var(--font-inter), sans-serif" fontSize="12" x="360" y="58" textAnchor="middle" fill="currentColor" opacity="0.5">Méthode de structuration du contrôle des délégataires</text>

          {/* Ligne de liaison */}
          <line x1="130" y1="200" x2="590" y2="200" stroke="currentColor" strokeWidth="1.2" strokeDasharray="4 4" opacity="0.25"/>

          {/* ÉTAPE 1 — Clarifier */}
          <rect x="30" y="80" width="180" height="80" rx="10" fill="transparent" stroke="currentColor" strokeWidth="1.2" opacity="0.5"/>
          <text fontFamily="var(--font-inter), sans-serif" fontSize="12" x="120" y="106" textAnchor="middle" fill="currentColor" opacity="0.5">01</text>
          <text fontFamily="var(--font-cormorant), serif" fontSize="18" fontWeight="600" x="120" y="136" textAnchor="middle" fill="currentColor">Clarifier</text>
          <line x1="120" y1="200" x2="120" y2="234" stroke="currentColor" strokeWidth="1.2" opacity="0.4" markerEnd="url(#arrow)"/>
          <rect x="30" y="236" width="180" height="120" rx="8" fill="currentColor" fillOpacity="0.04" stroke="currentColor" strokeWidth="0.7" opacity="0.5"/>
          <text fontFamily="var(--font-inter), sans-serif" fontSize="12" x="120" y="264" textAnchor="middle" fill="currentColor" opacity="0.65">Délégations en place</text>
          <text fontFamily="var(--font-inter), sans-serif" fontSize="12" x="120" y="286" textAnchor="middle" fill="currentColor" opacity="0.65">Responsabilités</text>
          <text fontFamily="var(--font-inter), sans-serif" fontSize="12" x="120" y="308" textAnchor="middle" fill="currentColor" opacity="0.65">Contrôles réalisés</text>
          <text fontFamily="var(--font-inter), sans-serif" fontSize="12" x="120" y="330" textAnchor="middle" fill="currentColor" opacity="0.65">Gouvernance existante</text>

          {/* Flèche 1 → 2 */}
          <line x1="212" y1="120" x2="268" y2="120" stroke="currentColor" strokeWidth="1.2" opacity="0.4" markerEnd="url(#arrow)"/>

          {/* ÉTAPE 2 — Structurer */}
          <rect x="270" y="80" width="180" height="80" rx="10" fill="transparent" stroke="currentColor" strokeWidth="1.2" opacity="0.5"/>
          <text fontFamily="var(--font-inter), sans-serif" fontSize="12" x="360" y="106" textAnchor="middle" fill="currentColor" opacity="0.5">02</text>
          <text fontFamily="var(--font-cormorant), serif" fontSize="18" fontWeight="600" x="360" y="136" textAnchor="middle" fill="currentColor">Structurer</text>
          <line x1="360" y1="200" x2="360" y2="234" stroke="currentColor" strokeWidth="1.2" opacity="0.4" markerEnd="url(#arrow)"/>
          <rect x="270" y="236" width="180" height="120" rx="8" fill="currentColor" fillOpacity="0.04" stroke="currentColor" strokeWidth="0.7" opacity="0.5"/>
          <text fontFamily="var(--font-inter), sans-serif" fontSize="12" x="360" y="264" textAnchor="middle" fill="currentColor" opacity="0.65">Rôles clarifiés</text>
          <text fontFamily="var(--font-inter), sans-serif" fontSize="12" x="360" y="286" textAnchor="middle" fill="currentColor" opacity="0.65">Processus formalisés</text>
          <text fontFamily="var(--font-inter), sans-serif" fontSize="12" x="360" y="308" textAnchor="middle" fill="currentColor" opacity="0.65">Traçabilité structurée</text>
          <text fontFamily="var(--font-inter), sans-serif" fontSize="12" x="360" y="330" textAnchor="middle" fill="currentColor" opacity="0.65">Gouvernance consolidée</text>

          {/* Flèche 2 → 3 */}
          <line x1="452" y1="120" x2="508" y2="120" stroke="currentColor" strokeWidth="1.2" opacity="0.4" markerEnd="url(#arrow)"/>

          {/* ÉTAPE 3 — Stabiliser */}
          <rect x="510" y="80" width="180" height="80" rx="10" fill="transparent" stroke="currentColor" strokeWidth="1.2" opacity="0.5"/>
          <text fontFamily="var(--font-inter), sans-serif" fontSize="12" x="600" y="106" textAnchor="middle" fill="currentColor" opacity="0.5">03</text>
          <text fontFamily="var(--font-cormorant), serif" fontSize="18" fontWeight="600" x="600" y="136" textAnchor="middle" fill="currentColor">Stabiliser</text>
          <line x1="600" y1="200" x2="600" y2="234" stroke="currentColor" strokeWidth="1.2" opacity="0.4" markerEnd="url(#arrow)"/>
          <rect x="510" y="236" width="180" height="120" rx="8" fill="currentColor" fillOpacity="0.04" stroke="currentColor" strokeWidth="0.7" opacity="0.5"/>
          <text fontFamily="var(--font-inter), sans-serif" fontSize="12" x="600" y="264" textAnchor="middle" fill="currentColor" opacity="0.65">Suivi des évolutions</text>
          <text fontFamily="var(--font-inter), sans-serif" fontSize="12" x="600" y="286" textAnchor="middle" fill="currentColor" opacity="0.65">Détection des fragilités</text>
          <text fontFamily="var(--font-inter), sans-serif" fontSize="12" x="600" y="308" textAnchor="middle" fill="currentColor" opacity="0.65">Adaptations ciblées</text>
          <text fontFamily="var(--font-inter), sans-serif" fontSize="12" x="600" y="330" textAnchor="middle" fill="currentColor" opacity="0.65">Lisibilité maintenue</text>

          {/* Résultat final */}
          <rect x="140" y="416" width="440" height="68" rx="10" fill="currentColor" fillOpacity="0.06" stroke="currentColor" strokeWidth="1.2" opacity="0.5"/>
          <text fontFamily="var(--font-cormorant), serif" fontSize="17" fontWeight="600" x="360" y="443" textAnchor="middle" fill="currentColor">Dispositif lisible, pilotable et démontrable</text>
          <text fontFamily="var(--font-inter), sans-serif" fontSize="12" x="360" y="468" textAnchor="middle" fill="currentColor" opacity="0.55">Indépendant des individus</text>

          {/* Connecteurs vers résultat */}
          <line x1="120" y1="358" x2="210" y2="414" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" opacity="0.25" markerEnd="url(#arrow)"/>
          <line x1="360" y1="358" x2="360" y2="414" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" opacity="0.25" markerEnd="url(#arrow)"/>
          <line x1="600" y1="358" x2="510" y2="414" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" opacity="0.25" markerEnd="url(#arrow)"/>
        </svg>
      </div>
    </section>
  );
}
