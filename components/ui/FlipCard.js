"use client";

import { useCallback, useRef, useState } from "react";

// A physically-draggable 3D flip card: press and drag horizontally (mouse
// or touch) to spin it freely, release to snap to whichever face is
// closest. `flip()` (passed to the front/back render props) does the same
// snap programmatically, in 180deg steps, so a button click and a manual
// drag land in the same place. Direct DOM write during drag (no re-render
// per pointer move) — same rAF pattern as Tilt.js / Parallax.js.
const DEG_PER_PX = 0.5;
const SNAP_MS = 500;

export default function FlipCard({ front, back, className = "" }) {
  const wrapRef = useRef(null);
  const cardRef = useRef(null);
  const rafRef = useRef(null);
  const dragging = useRef(false);
  const dragStartX = useRef(0);
  const baseAngle = useRef(0);
  const liveAngle = useRef(0);

  const [isDragging, setIsDragging] = useState(false);
  const [restAngle, setRestAngle] = useState(0);

  const paint = useCallback((deg) => {
    if (cardRef.current) cardRef.current.style.transform = `rotateY(${deg}deg)`;
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
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => paint(liveAngle.current));
    },
    [paint]
  );

  const endDrag = useCallback(() => {
    if (!dragging.current) return;
    dragging.current = false;
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    setIsDragging(false);
    setRestAngle(Math.round(liveAngle.current / 180) * 180);
  }, []);

  const flip = useCallback(() => setRestAngle((prev) => prev + 180), []);
  const flipped = (((restAngle / 180) % 2) + 2) % 2 !== 0;

  return (
    <div
      ref={wrapRef}
      className={`relative ${className}`}
      style={{ perspective: 1600, touchAction: "pan-y" }}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={endDrag}
      onPointerCancel={endDrag}
    >
      <div
        ref={cardRef}
        className="grid h-full select-none"
        style={{
          transformStyle: "preserve-3d",
          transform: `rotateY(${restAngle}deg)`,
          transition: isDragging ? "none" : `transform ${SNAP_MS}ms cubic-bezier(0.22, 1, 0.36, 1)`,
          cursor: isDragging ? "grabbing" : "grab",
        }}
      >
        <div
          className="[grid-area:1/1] h-full"
          style={{ backfaceVisibility: "hidden" }}
          aria-hidden={flipped}
          inert={flipped}
        >
          {typeof front === "function" ? front({ flipped, flip }) : front}
        </div>
        <div
          className="[grid-area:1/1] h-full"
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
          aria-hidden={!flipped}
          inert={!flipped}
        >
          {typeof back === "function" ? back({ flipped, flip }) : back}
        </div>
      </div>
    </div>
  );
}
