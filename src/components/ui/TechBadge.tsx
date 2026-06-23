interface TechBadgeProps {
  label: string;
  variant?: "tech" | "tag";
}

export function TechBadge({ label, variant = "tech" }: TechBadgeProps) {
  if (variant === "tag") {
    return (
      <span className="px-2 py-0.5 text-xs font-medium rounded-full border border-[#00ff88]/30 text-[#00ff88]">
        {label}
      </span>
    );
  }

  return (
    <span className="px-2.5 py-1 text-xs font-mono rounded bg-[#1a1a1a] text-[#888888] border border-[#222]">
      {label}
    </span>
  );
}
