import Link from "next/link";

interface ButtonProps {
  href?: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  size?: "default" | "sm";
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
}

export function Button({
  href,
  children,
  variant = "primary",
  size = "default",
  className = "",
  onClick,
  type = "button",
}: ButtonProps) {
  const sizes = {
    default: "px-6 py-3 text-sm",
    sm: "px-4 py-2.5 text-sm",
  };
  const base =
    `inline-flex items-center justify-center ${sizes[size]} font-semibold rounded-full transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2`;

  const variants = {
    primary:
      "bg-foreground text-white hover:bg-foreground/90 active:scale-[0.97] shadow-[0_2px_8px_rgba(0,0,0,0.08)]",
    secondary:
      "border border-border text-foreground hover:bg-foreground/[0.04] hover:border-foreground/20 active:scale-[0.97]",
    ghost:
      "text-foreground hover:bg-foreground/[0.04] active:scale-[0.97]",
  };

  const combined = `${base} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combined}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={combined}>
      {children}
    </button>
  );
}
