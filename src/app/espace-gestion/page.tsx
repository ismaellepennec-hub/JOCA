"use client";

import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";

const ADMIN_PASSWORD = "DelegataControl";

interface Submission {
  id: string;
  nom: string;
  fonction: string;
  organisation: string;
  email: string;
  message: string;
  created_at: string;
}

export default function Admin() {
  const [authenticated, setAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [loading, setLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setAuthenticated(true);
      setError(false);
    } else {
      setError(true);
    }
  };

  useEffect(() => {
    if (!authenticated) return;
    setLoading(true);
    supabase
      .from("contact_submissions")
      .select("*")
      .order("created_at", { ascending: false })
      .then(({ data }) => {
        setSubmissions(data || []);
        setLoading(false);
      });
  }, [authenticated]);

  if (!authenticated) {
    return (
      <>
      <head>
        <meta name="robots" content="noindex, nofollow" />
      </head>
      <section className="bg-white py-24 md:py-32">
        <div className="mx-auto max-w-[400px] px-6">
          <h1 className="font-serif text-3xl font-semibold text-navy">
            Administration
          </h1>
          <form onSubmit={handleLogin} className="mt-8 space-y-4">
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-navy mb-1.5"
              >
                Mot de passe
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 border border-gray-border bg-white text-navy focus:outline-none focus:border-navy transition-colors"
              />
            </div>
            {error && (
              <p className="text-red-600 text-sm">Mot de passe incorrect.</p>
            )}
            <button
              type="submit"
              className="bg-navy text-white text-sm font-medium rounded-md px-7 py-3.5 transition-colors hover:bg-navy-light"
            >
              Accéder
            </button>
          </form>
        </div>
      </section>
      </>
    );
  }

  return (
    <section className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-[1120px] px-6">
        <div className="flex items-center justify-between mb-12">
          <h1 className="font-serif text-3xl font-semibold text-navy">
            Demandes de contact
          </h1>
          <span className="text-sm text-navy/50">
            {submissions.length} demande{submissions.length > 1 ? "s" : ""}
          </span>
        </div>

        {loading ? (
          <p className="text-navy/50">Chargement…</p>
        ) : submissions.length === 0 ? (
          <p className="text-navy/50">Aucune demande pour le moment.</p>
        ) : (
          <div className="space-y-6">
            {submissions.map((sub) => (
              <div
                key={sub.id}
                className="border border-gray-border p-6 space-y-3"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-medium text-navy text-lg">{sub.nom}</p>
                    <p className="text-sm text-navy/60">
                      {sub.fonction} — {sub.organisation}
                    </p>
                  </div>
                  <time className="text-xs text-navy/40 whitespace-nowrap">
                    {new Date(sub.created_at).toLocaleDateString("fr-FR", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </time>
                </div>
                <a
                  href={`mailto:${sub.email}`}
                  className="text-sm text-navy/60 hover:text-navy transition-colors"
                >
                  {sub.email}
                </a>
                <p className="text-navy/70 leading-relaxed whitespace-pre-line">
                  {sub.message}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
