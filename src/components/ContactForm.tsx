"use client";

import { useState, type FormEvent } from "react";
import { supabase } from "@/lib/supabase";

interface FormData {
  nom: string;
  prenom: string;
  fonction: string;
  organisation: string;
  email: string;
  message: string;
}

type FormStatus = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [form, setForm] = useState<FormData>({
    nom: "",
    prenom: "",
    fonction: "",
    organisation: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<FormStatus>("idle");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      const { error } = await supabase.from("contact_submissions").insert([form]);
      if (error) throw error;
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="py-12 text-[#374151]">
        <p className="font-serif text-2xl font-semibold text-navy">
          Message envoyé.
        </p>
        <p className="mt-4 text-[17px] leading-[1.6]">
          Nous reviendrons vers vous dans les meilleurs délais.
        </p>
      </div>
    );
  }

  // Champs : hauteur ~52px, bordure #E5E7EB (hover #D1D5DB, focus #0F172A),
  // angles 6px, sans ombre, texte #111827.
  const inputClasses =
    "w-full px-4 py-3.5 rounded-md border border-[#E5E7EB] bg-white text-[#111827] placeholder:text-[#9CA3AF] hover:border-[#D1D5DB] focus:outline-none focus:border-[#0F172A] transition-colors";
  const labelClasses = "block text-sm font-medium text-[#6B7280] mb-2";

  return (
    <form onSubmit={handleSubmit}>
      {/* Champs — 20px entre chaque */}
      <div className="space-y-5">
        <div>
          <label htmlFor="nom" className={labelClasses}>
            Nom
          </label>
          <input
            id="nom"
            type="text"
            required
            value={form.nom}
            onChange={(e) => setForm({ ...form, nom: e.target.value })}
            className={inputClasses}
          />
        </div>

        <div>
          <label htmlFor="prenom" className={labelClasses}>
            Prénom
          </label>
          <input
            id="prenom"
            type="text"
            required
            value={form.prenom}
            onChange={(e) => setForm({ ...form, prenom: e.target.value })}
            className={inputClasses}
          />
        </div>

        <div>
          <label htmlFor="fonction" className={labelClasses}>
            Fonction
          </label>
          <input
            id="fonction"
            type="text"
            required
            value={form.fonction}
            onChange={(e) => setForm({ ...form, fonction: e.target.value })}
            className={inputClasses}
          />
        </div>

        <div>
          <label htmlFor="organisation" className={labelClasses}>
            Organisation
          </label>
          <input
            id="organisation"
            type="text"
            required
            value={form.organisation}
            onChange={(e) => setForm({ ...form, organisation: e.target.value })}
            className={inputClasses}
          />
        </div>

        <div>
          <label htmlFor="email" className={labelClasses}>
            Email professionnel
          </label>
          <input
            id="email"
            type="email"
            required
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className={inputClasses}
          />
        </div>

        <div>
          <label htmlFor="message" className={labelClasses}>
            Message
          </label>
          <textarea
            id="message"
            required
            placeholder="Précisez brièvement votre contexte, vos enjeux et votre niveau d'avancement."
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className={`${inputClasses} min-h-[130px] resize-y`}
          />
        </div>
      </div>

      {status === "error" && (
        <p className="mt-5 text-red-600 text-sm">
          Une erreur est survenue. Veuillez réessayer.
        </p>
      )}

      {/* Bouton — 32px au-dessus, pleine largeur, 56px de haut */}
      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-8 w-full rounded-md bg-[#0F172A] text-white text-[15px] font-medium px-8 py-4 transition-colors hover:bg-[#1E293B] disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === "submitting" ? "Envoi en cours…" : "Envoyer ma demande"}
      </button>
    </form>
  );
}
