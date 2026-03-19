import Link from "next/link";

interface CTAButtonProps {
  href: string;
  label: string;
  variant?: "primary" | "outline";
}

export default function CTAButton({
  href,
  label,
  variant = "primary",
}: CTAButtonProps) {
  const base = "inline-block text-sm font-medium rounded-md px-7 py-3.5 transition-colors";
  const styles =
    variant === "primary"
      ? "bg-navy text-white hover:bg-navy-light"
      : "border border-navy text-navy hover:bg-navy hover:text-white";

  return (
    <Link href={href} className={`${base} ${styles}`}>
      {label}
    </Link>
  );
}
