"use client";

import { useState, type FormEvent } from "react";
import { supabase } from "@/lib/supabase";

interface FormData {
  nom: string;
  prenom: string;
  fonction: string;
  organisation: string;
  email: string;
  contexte: string;
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
    contexte: "",
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
      <div className="py-12 text-navy/70">
        <p className="font-serif text-2xl font-semibold text-navy">
          Message envoyé.
        </p>
        <p className="mt-4">
          Nous reviendrons vers vous dans les meilleurs délais.
        </p>
      </div>
    );
  }

  const inputClasses =
    "w-full px-4 py-3 border border-gray-border bg-white text-navy placeholder:text-navy/30 focus:outline-none focus:border-navy transition-colors";

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="nom" className="block text-sm font-medium text-navy mb-1.5">
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
        <label htmlFor="prenom" className="block text-sm font-medium text-navy mb-1.5">
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
        <label htmlFor="fonction" className="block text-sm font-medium text-navy mb-1.5">
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
        <label htmlFor="organisation" className="block text-sm font-medium text-navy mb-1.5">
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
        <label htmlFor="email" className="block text-sm font-medium text-navy mb-1.5">
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
        <label htmlFor="contexte" className="block text-sm font-medium text-navy mb-1.5">
          Contexte de la demande
        </label>
        <select
          id="contexte"
          value={form.contexte}
          onChange={(e) => setForm({ ...form, contexte: e.target.value })}
          className={inputClasses}
        >
          <option value="" disabled>
            Sélectionnez votre contexte
          </option>
          <option value="structuration">Structuration du dispositif</option>
          <option value="clarification">Besoin de clarification</option>
          <option value="audit">Préparation d&apos;un audit / revue</option>
          <option value="autre">Autre</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-navy mb-1.5">
          Message
        </label>
        <textarea
          id="message"
          required
          rows={5}
          placeholder="Précisez brièvement votre contexte, vos enjeux et votre niveau d'avancement."
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className={inputClasses}
        />
      </div>

      {status === "error" && (
        <p className="text-red-600 text-sm">
          Une erreur est survenue. Veuillez réessayer.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="bg-navy text-white text-sm font-medium rounded-md px-7 py-3.5 transition-colors hover:bg-navy-light disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === "submitting"
          ? "Envoi en cours…"
          : "Demander un échange stratégique"}
      </button>
    </form>
  );
}
