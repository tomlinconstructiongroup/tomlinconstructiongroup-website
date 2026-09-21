export default function PhotoPlaceholder({
  label,
  className = "",
  dark = false,
}: {
  label: string;
  className?: string;
  dark?: boolean;
}) {
  return (
    <div
      className={`flex items-center justify-center text-center text-xs uppercase tracking-[0.2em] ${
        dark
          ? "bg-gradient-to-br from-[#2a2a2a] to-[#141414] text-white/40"
          : "bg-gradient-to-br from-maroon/10 to-maroon/5 text-maroon/50"
      } ${className}`}
    >
      [{label}]
    </div>
  );
}
