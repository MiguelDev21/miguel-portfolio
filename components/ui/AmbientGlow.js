// Fixed, page-wide blurred glow — the thing that makes the header, cards
// and sections read as one integrated surface instead of flat black boxes.
// Rendered once in layout.js, sits behind everything (-z-10), never scrolls.
export default function AmbientGlow() {
  return (
    <div className="ambient-glow" aria-hidden="true">
      <span
        style={{
          width: "60vw",
          height: "60vw",
          maxWidth: 900,
          maxHeight: 900,
          top: "-15vw",
          left: "-10vw",
          background: "var(--glow-blue)",
        }}
      />
      <span
        style={{
          width: "45vw",
          height: "45vw",
          maxWidth: 700,
          maxHeight: 700,
          top: "20vh",
          right: "-15vw",
          background: "var(--glow-cyan)",
        }}
      />
      <span
        style={{
          width: "50vw",
          height: "50vw",
          maxWidth: 800,
          maxHeight: 800,
          bottom: "-20vh",
          left: "10vw",
          background: "var(--glow-violet)",
        }}
      />
    </div>
  );
}
