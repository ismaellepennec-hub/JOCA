interface AvantApresSchemaProps {
  variant?: "three-col" | "two-col";
  title?: string;
  baseline?: string;
  avantTitle?: string;
  apresTitle?: string;
  avantItems?: string[];
  apresItems?: string[];
}

const defaults = {
  "three-col": {
    title: "Du dispositif fragile au dispositif démontrable",
    baseline: "Dispositif lisible, pilotable et démontrable à tout moment.",
    avantTitle: "Situation initiale",
    apresTitle: "Résultat",
    avantItems: [
      "Dispositif peu lisible",
      "Informations dispersées",
      "Responsabilités floues",
      "Difficulté à démontrer",
    ],
    apresItems: [
      "Vision consolidée",
      "Pilotage structuré",
      "Preuves accessibles",
      "Dispositif défendable",
    ],
  },
  "two-col": {
    title:
      "D\u2019un dispositif difficile à exploiter à un dispositif structuré et démontrable",
    baseline:
      "Structuré = lisible, pilotable et défendable à tout moment",
    avantTitle: "Dispositif fragile",
    apresTitle: "Dispositif structuré et pilotable",
    avantItems: [
      "Informations dispersées (mails, fichiers, outils)",
      "Formats hétérogènes",
      "Responsabilités éclatées",
      "Preuves difficiles à retrouver",
      "Dépendance aux personnes clés",
    ],
    apresItems: [
      "Informations organisées et accessibles",
      "Responsabilités clairement définies",
      "Lecture consolidée du dispositif",
      "Preuves disponibles et démontrables",
      "Indépendance vis-à-vis des individus",
    ],
  },
};

export default function AvantApresSchema({
  variant = "two-col",
  title,
  baseline,
  avantTitle,
  apresTitle,
  avantItems,
  apresItems,
}: AvantApresSchemaProps) {
  const d = defaults[variant];
  const t = title ?? d.title;
  const bl = baseline ?? d.baseline;
  const aT = avantTitle ?? d.avantTitle;
  const pT = apresTitle ?? d.apresTitle;
  const aI = avantItems ?? d.avantItems;
  const pI = apresItems ?? d.apresItems;

  if (variant === "three-col") {
    return (
      <div className="pt-6 pb-14 md:pt-8 md:pb-16 bg-white">
        <div className="mx-auto max-w-[1000px] px-6 text-center">
          <h2 className="font-serif text-3xl md:text-[40px] font-normal text-navy mb-14 md:mb-16 tracking-wide leading-snug">
            {t}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-6 md:gap-0 items-stretch">
            {/* GAUCHE — Situation initiale */}
            <div className="border border-gray-border rounded-lg p-6 md:p-8 text-left">
              <h3 className="text-sm font-medium uppercase tracking-widest text-navy/40 mb-5">
                {aT}
              </h3>
              <div className="space-y-3 text-navy/70">
                {aI.map((item) => (
                  <p key={item} className="flex items-start gap-2 leading-relaxed">
                    <span className="text-navy/30 shrink-0">–</span>
                    <span>{item}</span>
                  </p>
                ))}
              </div>
            </div>

            {/* CENTRE — DelegataControl™ */}
            <div className="flex items-center justify-center px-4 md:px-8">
              <div className="bg-[#0F172A] text-white py-8 md:py-10 px-6 md:px-10 text-center rounded-lg w-full md:w-auto md:min-w-[280px]">
                <h3 className="text-xl md:text-2xl font-serif font-semibold mb-4">
                  DelegataControl™
                </h3>
                <p className="text-sm tracking-widest text-white/70">
                  Clarifier → Structurer → Stabiliser
                </p>
              </div>
            </div>

            {/* DROITE — Résultat */}
            <div className="border border-gray-border rounded-lg p-6 md:p-8 text-left">
              <h3 className="text-sm font-medium uppercase tracking-widest text-navy/40 mb-5">
                {pT}
              </h3>
              <div className="space-y-3 text-navy/70">
                {pI.map((item) => (
                  <p key={item} className="flex items-start gap-2 leading-relaxed">
                    <span className="text-navy/30 shrink-0">–</span>
                    <span>{item}</span>
                  </p>
                ))}
              </div>
            </div>
          </div>

          <p className="mt-12 md:mt-14 text-lg text-navy/70 tracking-wide">
            {bl}
          </p>
        </div>
      </div>
    );
  }

  // Variant two-col (Méthode & Offre)
  return (
    <div className="py-16 md:py-20">
      <div className="mx-auto max-w-[1120px] px-6">
        <p className="font-serif text-xl md:text-2xl font-semibold text-navy text-center mb-10">
          {t}
        </p>

        <div className="flex flex-col md:flex-row items-stretch gap-0 rounded-xl overflow-hidden">
          {/* AVANT */}
          <div className="md:w-[45%] bg-[#1E293B] text-white p-6 md:p-10">
            <p className="text-xs font-medium uppercase tracking-widest text-white/50 mb-3">
              Avant
            </p>
            <h3 className="font-serif text-xl font-semibold mb-6">
              {aT}
            </h3>
            <div className="space-y-2.5 text-white/75 text-sm leading-relaxed">
              {aI.map((item) => (
                <p key={item} className="flex items-start gap-2">
                  <span className="text-white/30 shrink-0">–</span>
                  <span>{item}</span>
                </p>
              ))}
            </div>
          </div>

          {/* FLÈCHE CENTRALE */}
          <div className="flex items-center justify-center bg-[#1E293B] md:bg-transparent py-3 md:py-0 md:w-[10%]">
            <div className="hidden md:flex items-center justify-center w-full">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                <path d="M8 20H32M32 20L24 12M32 20L24 28" stroke="#0F172A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div className="md:hidden">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                <path d="M20 8V32M20 32L12 24M20 32L28 24" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.5" />
              </svg>
            </div>
          </div>

          {/* APRÈS */}
          <div className="md:w-[45%] bg-white border border-gray-border p-6 md:p-10">
            <p className="text-xs font-medium uppercase tracking-widest text-navy/40 mb-3">
              Après
            </p>
            <h3 className="font-serif text-xl font-semibold text-navy mb-6">
              {pT}
            </h3>
            <div className="space-y-2.5 text-navy/70 text-sm leading-relaxed">
              {pI.map((item) => (
                <p key={item} className="flex items-start gap-2">
                  <span className="text-navy/30 shrink-0">–</span>
                  <span>{item}</span>
                </p>
              ))}
            </div>
          </div>
        </div>

        <p className="mt-8 text-center text-navy/60 text-sm tracking-wide">
          {bl}
        </p>
      </div>
    </div>
  );
}
