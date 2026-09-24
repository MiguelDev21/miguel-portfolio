"use client";

import { useCallback, useRef, useState } from "react";

// A physically-draggable 3D flip card: press and drag horizontally (mouse
// or touch) to spin it freely, release to snap to whichever face is
// closest. `flip()` (passed to the front/back render props) does the same
// snap programmatically, in 180deg steps, so a button click and a manual
// drag land in the same place. Direct DOM write during drag (no re-render
// per pointer move) — same rAF pattern as Tilt.js / Parallax.js.
//
// The 3D transform functions themselves (perspective/preserve-3d/backface-
// visibility) live in globals.css as .flip-perspective/.flip-card-inner/
// .flip-face, not inline styles — mobile Safari needs -webkit- prefixes on
// those to hide the back face correctly, and inline React styles are never
// autoprefixed. Only the live angle (--flip-angle) is set from here.
const DEG_PER_PX = 0.65;
const SNAP_MS = 450;

export default function FlipCard({ front, back, className = "" }) {
  const wrapRef = useRef(null);
  const cardRef = useRef(null);
  const dragging = useRef(false);
  const dragStartX = useRef(0);
  const baseAngle = useRef(0);
  const liveAngle = useRef(0);

  const [isDragging, setIsDragging] = useState(false);
  const [restAngle, setRestAngle] = useState(0);

  const paint = useCallback((deg) => {
    if (cardRef.current) cardRef.current.style.setProperty("--flip-angle", `${deg}deg`);
  }, []);

  const onPointerDown = useCallback(
    (e) => {
      if (e.target.closest("a, button")) return;
      if (e.pointerType === "mouse" && e.button !== 0) return;
      dragging.current = true;
      dragStartX.current = e.clientX;
      baseAngle.current = restAngle;
      liveAngle.current = restAngle;
      setIsDragging(true);
      wrapRef.current?.setPointerCapture(e.pointerId);
    },
    [restAngle]
  );

  const onPointerMove = useCallback(
    (e) => {
      if (!dragging.current) return;
      liveAngle.current = baseAngle.current + (e.clientX - dragStartX.current) * DEG_PER_PX;
      paint(liveAngle.current);
    },
    [paint]
  );

  const endDrag = useCallback(() => {
    if (!dragging.current) return;
    dragging.current = false;
    setIsDragging(false);
    setRestAngle(Math.round(liveAngle.current / 180) * 180);
  }, []);

  const flip = useCallback(() => setRestAngle((prev) => prev + 180), []);
  const flipped = (((restAngle / 180) % 2) + 2) % 2 !== 0;

  return (
    <div
      ref={wrapRef}
      className={`relative min-w-0 select-none flip-perspective ${className}`}
      style={{ touchAction: "pan-y", WebkitTapHighlightColor: "transparent" }}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={endDrag}
      onPointerCancel={endDrag}
    >
      <div
        ref={cardRef}
        className="relative min-w-0 flip-card-inner"
        style={{
          "--flip-angle": `${restAngle}deg`,
          transition: isDragging ? "none" : `transform ${SNAP_MS}ms cubic-bezier(0.22, 1, 0.36, 1)`,
          cursor: isDragging ? "grabbing" : "grab",
        }}
      >
        {/* Front stays in normal flow — it defines the card's height. */}
        <div className="min-w-0 flip-face" aria-hidden={flipped} inert={flipped}>
          {typeof front === "function" ? front({ flipped, flip }) : front}
        </div>
        {/* Back overlays it exactly, and scrolls internally if its content
            (role/solution/description) runs taller than the front. */}
        <div
          className="absolute inset-0 h-full min-w-0 flip-face flip-face-back"
          aria-hidden={!flipped}
          inert={!flipped}
        >
          {typeof back === "function" ? back({ flipped, flip }) : back}
        </div>
      </div>
    </div>
  );
}
