export default function DelegataControlSchema() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-[1120px] px-6">
        <svg width="100%" viewBox="0 0 680 520" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <marker id="arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M2 1L8 5L2 9" fill="none" stroke="context-stroke" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </marker>
          </defs>

          {/* Titre */}
          <text fontFamily="var(--font-cormorant), serif" fontSize="16" fontWeight="600" x="340" y="36" textAnchor="middle" fill="currentColor">DelegataControl™</text>
          <text fontFamily="var(--font-inter), sans-serif" fontSize="12" x="340" y="56" textAnchor="middle" fill="currentColor" opacity="0.5">Méthode de structuration du contrôle des délégataires</text>

          {/* Ligne de liaison */}
          <line x1="120" y1="192" x2="560" y2="192" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" opacity="0.2"/>

          {/* ÉTAPE 1 — Clarifier */}
          <rect x="40" y="78" width="160" height="72" rx="8" fill="transparent" stroke="currentColor" strokeWidth="1" opacity="0.3"/>
          <text fontFamily="var(--font-inter), sans-serif" fontSize="11" x="120" y="100" textAnchor="middle" dominantBaseline="central" fill="currentColor" opacity="0.4">01</text>
          <text fontFamily="var(--font-cormorant), serif" fontSize="16" fontWeight="600" x="120" y="128" textAnchor="middle" dominantBaseline="central" fill="currentColor">Clarifier</text>
          <line x1="120" y1="192" x2="120" y2="222" stroke="currentColor" strokeWidth="1" opacity="0.3" markerEnd="url(#arrow)"/>
          <rect x="40" y="224" width="160" height="116" rx="6" fill="currentColor" fillOpacity="0.03" stroke="currentColor" strokeWidth="0.5" opacity="0.4"/>
          <text fontFamily="var(--font-inter), sans-serif" fontSize="11" x="120" y="251" textAnchor="middle" dominantBaseline="central" fill="currentColor" opacity="0.6">Cartographie</text>
          <text fontFamily="var(--font-inter), sans-serif" fontSize="11" x="120" y="271" textAnchor="middle" dominantBaseline="central" fill="currentColor" opacity="0.6">Responsabilités</text>
          <text fontFamily="var(--font-inter), sans-serif" fontSize="11" x="120" y="291" textAnchor="middle" dominantBaseline="central" fill="currentColor" opacity="0.6">Contrôles existants</text>
          <text fontFamily="var(--font-inter), sans-serif" fontSize="11" x="120" y="311" textAnchor="middle" dominantBaseline="central" fill="currentColor" opacity="0.6">Gouvernance</text>

          {/* Flèche 1 → 2 */}
          <line x1="202" y1="114" x2="258" y2="114" stroke="currentColor" strokeWidth="1" opacity="0.3" markerEnd="url(#arrow)"/>

          {/* ÉTAPE 2 — Structurer */}
          <rect x="260" y="78" width="160" height="72" rx="8" fill="transparent" stroke="currentColor" strokeWidth="1" opacity="0.3"/>
          <text fontFamily="var(--font-inter), sans-serif" fontSize="11" x="340" y="100" textAnchor="middle" dominantBaseline="central" fill="currentColor" opacity="0.4">02</text>
          <text fontFamily="var(--font-cormorant), serif" fontSize="16" fontWeight="600" x="340" y="128" textAnchor="middle" dominantBaseline="central" fill="currentColor">Structurer</text>
          <line x1="340" y1="192" x2="340" y2="222" stroke="currentColor" strokeWidth="1" opacity="0.3" markerEnd="url(#arrow)"/>
          <rect x="260" y="224" width="160" height="116" rx="6" fill="currentColor" fillOpacity="0.03" stroke="currentColor" strokeWidth="0.5" opacity="0.4"/>
          <text fontFamily="var(--font-inter), sans-serif" fontSize="11" x="340" y="251" textAnchor="middle" dominantBaseline="central" fill="currentColor" opacity="0.6">Rôles &amp; responsabilités</text>
          <text fontFamily="var(--font-inter), sans-serif" fontSize="11" x="340" y="271" textAnchor="middle" dominantBaseline="central" fill="currentColor" opacity="0.6">Processus formalisés</text>
          <text fontFamily="var(--font-inter), sans-serif" fontSize="11" x="340" y="291" textAnchor="middle" dominantBaseline="central" fill="currentColor" opacity="0.6">Traçabilité</text>
          <text fontFamily="var(--font-inter), sans-serif" fontSize="11" x="340" y="311" textAnchor="middle" dominantBaseline="central" fill="currentColor" opacity="0.6">Pilotage consolidé</text>

          {/* Flèche 2 → 3 */}
          <line x1="422" y1="114" x2="478" y2="114" stroke="currentColor" strokeWidth="1" opacity="0.3" markerEnd="url(#arrow)"/>

          {/* ÉTAPE 3 — Stabiliser */}
          <rect x="480" y="78" width="160" height="72" rx="8" fill="transparent" stroke="currentColor" strokeWidth="1" opacity="0.3"/>
          <text fontFamily="var(--font-inter), sans-serif" fontSize="11" x="560" y="100" textAnchor="middle" dominantBaseline="central" fill="currentColor" opacity="0.4">03</text>
          <text fontFamily="var(--font-cormorant), serif" fontSize="16" fontWeight="600" x="560" y="128" textAnchor="middle" dominantBaseline="central" fill="currentColor">Stabiliser</text>
          <line x1="560" y1="192" x2="560" y2="222" stroke="currentColor" strokeWidth="1" opacity="0.3" markerEnd="url(#arrow)"/>
          <rect x="480" y="224" width="160" height="116" rx="6" fill="currentColor" fillOpacity="0.03" stroke="currentColor" strokeWidth="0.5" opacity="0.4"/>
          <text fontFamily="var(--font-inter), sans-serif" fontSize="11" x="560" y="251" textAnchor="middle" dominantBaseline="central" fill="currentColor" opacity="0.6">Suivi &amp; évolution</text>
          <text fontFamily="var(--font-inter), sans-serif" fontSize="11" x="560" y="271" textAnchor="middle" dominantBaseline="central" fill="currentColor" opacity="0.6">Détection des dérives</text>
          <text fontFamily="var(--font-inter), sans-serif" fontSize="11" x="560" y="291" textAnchor="middle" dominantBaseline="central" fill="currentColor" opacity="0.6">Adaptations ciblées</text>
          <text fontFamily="var(--font-inter), sans-serif" fontSize="11" x="560" y="311" textAnchor="middle" dominantBaseline="central" fill="currentColor" opacity="0.6">Lisibilité maintenue</text>

          {/* Résultat final */}
          <rect x="140" y="396" width="400" height="60" rx="8" fill="currentColor" fillOpacity="0.04" stroke="currentColor" strokeWidth="1" opacity="0.4"/>
          <text fontFamily="var(--font-cormorant), serif" fontSize="15" fontWeight="600" x="340" y="419" textAnchor="middle" dominantBaseline="central" fill="currentColor">Dispositif structuré, cohérent et démontrable</text>
          <text fontFamily="var(--font-inter), sans-serif" fontSize="11" x="340" y="441" textAnchor="middle" dominantBaseline="central" fill="currentColor" opacity="0.5">Indépendant des individus — pilotable dans la durée</text>

          {/* Connecteurs vers résultat */}
          <line x1="120" y1="342" x2="200" y2="394" stroke="currentColor" strokeWidth="0.8" strokeDasharray="3 3" opacity="0.2" markerEnd="url(#arrow)"/>
          <line x1="340" y1="342" x2="340" y2="394" stroke="currentColor" strokeWidth="0.8" strokeDasharray="3 3" opacity="0.2" markerEnd="url(#arrow)"/>
          <line x1="560" y1="342" x2="480" y2="394" stroke="currentColor" strokeWidth="0.8" strokeDasharray="3 3" opacity="0.2" markerEnd="url(#arrow)"/>
        </svg>
      </div>
    </section>
  );
}
