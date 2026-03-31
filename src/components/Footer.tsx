import Image from "next/image";
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
          <Image
            src="/images/logo-white.png"
            alt="JOCA Services"
            width={124}
            height={56}
            className="h-14 w-auto mb-4"
          />
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
            className="block text-sm text-white/60 hover:text-white transition-colors"
          >
            Mentions légales
          </Link>
          <Link
            href="/espace-gestion"
            className="block mt-2 text-sm text-white/30 hover:text-white/60 transition-colors"
          >
            Espace gestion
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
