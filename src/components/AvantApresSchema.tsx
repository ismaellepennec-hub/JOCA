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
      <div className="bg-white py-20">
        <div className="mx-auto max-w-[1200px] px-6 text-center">
          {/* TITRE */}
          <h2 className="font-serif text-3xl md:text-[40px] font-normal text-navy mb-10 md:mb-[60px] tracking-[0.5px] leading-snug">
            {t}
          </h2>

          {/* GRILLE 30% / 40% / 30% */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-10">
            {/* GAUCHE (30%) — Situation initiale */}
            <div className="w-full md:w-[30%] text-left font-sans text-[#6B7280]">
              <h3 className="text-[18px] font-medium mb-5 text-[#9CA3AF]">{aT}</h3>
              <div className="space-y-2 leading-relaxed">
                {aI.map((item) => (
                  <p key={item}>– {item}</p>
                ))}
              </div>
            </div>

            {/* CENTRE (40%) — DelegataControl™ (bloc plat, sans ombre/contour/texture) */}
            <div className="w-full md:w-[40%] bg-[#0F172A] text-white p-10 text-center">
              <h3 className="font-serif text-[28px] font-semibold mb-5">
                DelegataControl™
              </h3>
              <p className="font-sans text-[16px] tracking-[1px] text-white/80">
                Clarifier → Structurer → Stabiliser
              </p>
            </div>

            {/* DROITE (30%) — Résultat */}
            <div className="w-full md:w-[30%] text-left font-sans text-[#111827]">
              <h3 className="text-[18px] font-medium mb-5">{pT}</h3>
              <div className="space-y-2 leading-relaxed">
                {pI.map((item) => (
                  <p key={item}>– {item}</p>
                ))}
              </div>
            </div>
          </div>

          {/* SIGNATURE */}
          <div className="mt-[60px] font-serif text-[20px] text-navy tracking-wide">
            {bl}
          </div>
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
          {/* AVANT — dégradé "désordre" (gris atmosphérique → marine profond) */}
          <div className="md:w-[45%] text-white p-6 md:p-10 bg-gradient-to-br from-[#3B4656] via-[#1E293B] to-[#0B1220]">
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
