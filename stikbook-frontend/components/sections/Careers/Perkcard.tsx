import type { Perk } from "@/lib/Perksdata";

export default function PerkCard({
  title,
  description,
  icon,
  iconBg,
  iconColor,
}: Perk) {
  return (
    <div className="perk-card rounded-2xl p-6 text-left border border-[var(--card-border)] bg-[var(--card-bg)] hover-lift">
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
        style={{ background: iconBg, color: iconColor }}
      >
        {icon}
      </div>

      <h3 className="font-semibold text-[1.1rem] mb-2 text-[var(--text-color)]">
        {title}
      </h3>

      <p className="text-sm leading-relaxed text-gray-500 dark:text-gray-400">
        {description}
      </p>
    </div>
  );
}
