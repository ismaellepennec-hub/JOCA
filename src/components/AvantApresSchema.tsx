export default function AvantApresSchema() {
  return (
    <div className="mt-12">
      <svg width="100%" viewBox="0 0 680 360" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <marker id="arrow-aa" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M2 1L8 5L2 9" fill="none" stroke="context-stroke" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </marker>
        </defs>

        {/* Labels */}
        <text fontFamily="var(--font-inter), sans-serif" fontSize="11" x="160" y="30" textAnchor="middle" fill="currentColor" opacity="0.4">Avant</text>
        <text fontFamily="var(--font-inter), sans-serif" fontSize="11" x="520" y="30" textAnchor="middle" fill="currentColor" opacity="0.4">Après</text>
        <line x1="340" y1="40" x2="340" y2="318" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 4" opacity="0.15"/>

        {/* Flèche centrale */}
        <line x1="316" y1="180" x2="360" y2="180" stroke="currentColor" strokeWidth="1.2" opacity="0.4" markerEnd="url(#arrow-aa)"/>

        {/* AVANT — nœuds éparpillés */}
        <rect x="30" y="55" width="90" height="30" rx="4" fill="currentColor" fillOpacity="0.04" stroke="currentColor" strokeWidth="0.5" opacity="0.4"/>
        <text fontFamily="var(--font-inter), sans-serif" fontSize="11" x="75" y="70" textAnchor="middle" fill="currentColor" opacity="0.5">Équipe A</text>

        <rect x="185" y="70" width="90" height="30" rx="4" fill="currentColor" fillOpacity="0.04" stroke="currentColor" strokeWidth="0.5" opacity="0.4"/>
        <text fontFamily="var(--font-inter), sans-serif" fontSize="11" x="230" y="85" textAnchor="middle" fill="currentColor" opacity="0.5">Équipe B</text>

        <rect x="42" y="148" width="90" height="30" rx="4" fill="currentColor" fillOpacity="0.04" stroke="currentColor" strokeWidth="0.5" opacity="0.4"/>
        <text fontFamily="var(--font-inter), sans-serif" fontSize="11" x="87" y="163" textAnchor="middle" fill="currentColor" opacity="0.5">Contrôles</text>

        <rect x="178" y="165" width="90" height="30" rx="4" fill="currentColor" fillOpacity="0.04" stroke="currentColor" strokeWidth="0.5" opacity="0.4"/>
        <text fontFamily="var(--font-inter), sans-serif" fontSize="11" x="223" y="180" textAnchor="middle" fill="currentColor" opacity="0.5">Preuves</text>

        <rect x="55" y="245" width="90" height="30" rx="4" fill="currentColor" fillOpacity="0.04" stroke="currentColor" strokeWidth="0.5" opacity="0.4"/>
        <text fontFamily="var(--font-inter), sans-serif" fontSize="11" x="100" y="260" textAnchor="middle" fill="currentColor" opacity="0.5">Délégataires</text>

        <rect x="175" y="258" width="90" height="30" rx="4" fill="currentColor" fillOpacity="0.04" stroke="currentColor" strokeWidth="0.5" opacity="0.4"/>
        <text fontFamily="var(--font-inter), sans-serif" fontSize="11" x="220" y="273" textAnchor="middle" fill="currentColor" opacity="0.5">Gouvernance</text>

        {/* Traits désordonnés */}
        <line x1="120" y1="70" x2="185" y2="180" stroke="currentColor" strokeWidth="0.6" strokeDasharray="2 3" opacity="0.2"/>
        <line x1="75" y1="85" x2="178" y2="165" stroke="currentColor" strokeWidth="0.6" strokeDasharray="2 3" opacity="0.2"/>
        <line x1="230" y1="100" x2="87" y2="148" stroke="currentColor" strokeWidth="0.6" strokeDasharray="2 3" opacity="0.2"/>
        <line x1="132" y1="163" x2="178" y2="180" stroke="currentColor" strokeWidth="0.6" strokeDasharray="2 3" opacity="0.2"/>
        <line x1="100" y1="178" x2="175" y2="258" stroke="currentColor" strokeWidth="0.6" strokeDasharray="2 3" opacity="0.2"/>
        <line x1="223" y1="195" x2="145" y2="245" stroke="currentColor" strokeWidth="0.6" strokeDasharray="2 3" opacity="0.2"/>
        <line x1="120" y1="70" x2="220" y2="258" stroke="currentColor" strokeWidth="0.6" strokeDasharray="2 3" opacity="0.2"/>
        <line x1="268" y1="85" x2="55" y2="245" stroke="currentColor" strokeWidth="0.6" strokeDasharray="2 3" opacity="0.2"/>
        <line x1="87" y1="178" x2="220" y2="258" stroke="currentColor" strokeWidth="0.6" strokeDasharray="2 3" opacity="0.2"/>

        {/* APRÈS — structure claire */}
        <rect x="400" y="148" width="110" height="52" rx="8" fill="currentColor" fillOpacity="0.04" stroke="currentColor" strokeWidth="1" opacity="0.5"/>
        <text fontFamily="var(--font-inter), sans-serif" fontSize="11" x="455" y="167" textAnchor="middle" fill="currentColor" opacity="0.4">Gouvernance</text>
        <text fontFamily="var(--font-cormorant), serif" fontSize="16" fontWeight="600" x="455" y="187" textAnchor="middle" fill="currentColor">centrale</text>

        <rect x="420" y="60" width="80" height="30" rx="4" fill="currentColor" fillOpacity="0.04" stroke="currentColor" strokeWidth="0.5" opacity="0.4"/>
        <text fontFamily="var(--font-inter), sans-serif" fontSize="11" x="460" y="75" textAnchor="middle" fill="currentColor" opacity="0.5">Équipe A</text>
        <line x1="460" y1="90" x2="455" y2="146" stroke="currentColor" strokeWidth="0.8" opacity="0.3" markerEnd="url(#arrow-aa)"/>

        <rect x="560" y="90" width="80" height="30" rx="4" fill="currentColor" fillOpacity="0.04" stroke="currentColor" strokeWidth="0.5" opacity="0.4"/>
        <text fontFamily="var(--font-inter), sans-serif" fontSize="11" x="600" y="105" textAnchor="middle" fill="currentColor" opacity="0.5">Équipe B</text>
        <line x1="560" y1="108" x2="512" y2="160" stroke="currentColor" strokeWidth="0.8" opacity="0.3" markerEnd="url(#arrow-aa)"/>

        <rect x="560" y="215" width="80" height="30" rx="4" fill="currentColor" fillOpacity="0.04" stroke="currentColor" strokeWidth="0.5" opacity="0.4"/>
        <text fontFamily="var(--font-inter), sans-serif" fontSize="11" x="600" y="230" textAnchor="middle" fill="currentColor" opacity="0.5">Contrôles</text>
        <line x1="560" y1="225" x2="512" y2="192" stroke="currentColor" strokeWidth="0.8" opacity="0.3" markerEnd="url(#arrow-aa)"/>

        <rect x="420" y="258" width="80" height="30" rx="4" fill="currentColor" fillOpacity="0.04" stroke="currentColor" strokeWidth="0.5" opacity="0.4"/>
        <text fontFamily="var(--font-inter), sans-serif" fontSize="11" x="460" y="273" textAnchor="middle" fill="currentColor" opacity="0.5">Preuves</text>
        <line x1="460" y1="258" x2="455" y2="202" stroke="currentColor" strokeWidth="0.8" opacity="0.3" markerEnd="url(#arrow-aa)"/>

        {/* Labels bas */}
        <text fontFamily="var(--font-inter), sans-serif" fontSize="11" x="160" y="318" textAnchor="middle" fill="currentColor" opacity="0.35">Dispersé — difficile à présenter</text>
        <text fontFamily="var(--font-inter), sans-serif" fontSize="11" x="520" y="318" textAnchor="middle" fill="currentColor" opacity="0.35">Structuré — lisible et démontrable</text>
      </svg>
    </div>
  );
}
