import Link from "next/link";
import { NAV_LINKS, SITE_NAME, MANIFESTO_QUOTE } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-navy text-white/80">
      {/* Citation */}
      <div className="mx-auto max-w-[1120px] px-6 pt-16 pb-8">
        <blockquote className="text-white/60 font-serif text-lg italic max-w-2xl leading-relaxed">
          «&nbsp;{MANIFESTO_QUOTE}&nbsp;»
        </blockquote>
      </div>

      {/* Liens + infos */}
      <div className="mx-auto max-w-[1120px] px-6 pb-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Col 1 — Cabinet */}
        <div>
          <p className="font-serif text-xl font-semibold text-white">JOCA</p>
          <p className="text-xs tracking-[0.25em] text-white/50 uppercase mb-4">
            Services
          </p>
          <p className="text-sm text-white/60 leading-relaxed">
            Cabinet indépendant dédié à la structuration du contrôle des
            délégataires en environnement assurance.
          </p>
        </div>

        {/* Col 2 — Navigation */}
        <div>
          <p className="font-medium text-white text-sm mb-4">Navigation</p>
          <nav className="flex flex-col gap-2">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-white/60 hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Col 3 — Légal */}
        <div>
          <p className="font-medium text-white text-sm mb-4">Informations</p>
          <Link
            href="/mentions-legales"
            className="text-sm text-white/60 hover:text-white transition-colors"
          >
            Mentions légales
          </Link>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/10 py-6">
        <p className="text-center text-xs text-white/40">
          © {new Date().getFullYear()} {SITE_NAME}. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
}
