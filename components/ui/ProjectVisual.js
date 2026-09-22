// Deterministic abstract visual per project category — no fake screenshots.
// Swap for a real product screenshot the moment one exists (see project-case-study skill).
const palette = {
  healthcare: "#ef4444",
  government: "#3b82f6",
  education: "#10b981",
  business: "#f59e0b",
  sports: "#ec4899",
  mobile: "#14b8a6",
  portfolio: "#0099ff",
  technical: "#8b8e96",
  academic: "#22c55e",
  components: "#a855f7",
  frontend: "#06b6d4",
};

export default function ProjectVisual({ category, label }) {
  const color = palette[category] || "#0099ff";

  return (
    <div
      className="relative h-32 w-full overflow-hidden rounded-2xl border"
      style={{ borderColor: "var(--hairline)", backgroundColor: "var(--surface-2)" }}
      aria-hidden="true"
    >
      <div
        className="absolute inset-0 opacity-90"
        style={{
          backgroundImage: `radial-gradient(circle at 20% 20%, ${color}4d, transparent 55%), radial-gradient(var(--hairline-strong) 1px, transparent 1px)`,
          backgroundSize: "auto, 18px 18px",
        }}
      />
      <div
        className="absolute inset-0"
        style={{ boxShadow: "inset 0 1px 0 rgba(255,255,255,0.04)" }}
      />
      <span
        className="absolute bottom-3 right-4 font-mono text-[11px] uppercase tracking-wide"
        style={{ color: "var(--ink-tertiary)" }}
      >
        {label}
      </span>
      <span
        className="absolute top-3 left-4 h-2 w-2 rounded-full"
        style={{ backgroundColor: color }}
      />
    </div>
  );
}
