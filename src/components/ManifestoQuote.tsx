import { MANIFESTO_QUOTE } from "@/lib/constants";

export default function ManifestoQuote() {
  return (
    <blockquote className="border-l-2 border-navy pl-6 py-2 my-12 max-w-2xl">
      <p className="font-serif text-xl italic text-navy/80 leading-relaxed">
        «&nbsp;{MANIFESTO_QUOTE}&nbsp;»
      </p>
    </blockquote>
  );
}
