"use client";

import { useCallback, useEffect, useRef, useState } from "react";

// A physically-draggable flip card: press and drag horizontally (mouse or
// touch) to spin it freely, release to snap to whichever face is closest.
// `flip()` (passed to the front/back render props) does the same snap
// programmatically, so a button click and a manual drag land in the same
// place. Direct DOM write during drag (no re-render per pointer move) —
// same pattern as Tilt.js / Parallax.js.
//
// This is a 2D illusion, not a real 3D flip: the card visually "thins" to
// an edge (scaleX -> 0) and the content swaps at that exact point, instead
// of using `perspective`/`transform-style: preserve-3d`/`backface-
// visibility`. Real 3D transforms combined with `.glass` (backdrop-filter:
// blur) across many cards is a known iOS Safari WebKit crash vector — on
// real iPhones it showed as flickering double-content and full browser
// crashes, even though it looked fine in desktop Chrome's responsive mode
// (software rendering hides the bug; real WebKit GPU compositing doesn't).
// Plain `scaleX` is a cheap 2D transform and doesn't hit that path.
const DEG_PER_PX = 0.65;
const SNAP_MS = 450;

function angleToScaleX(deg) {
  return Math.abs(Math.cos((deg * Math.PI) / 180));
}

function isBackAngle(deg) {
  const normalized = ((deg % 360) + 360) % 360;
  return normalized > 90 && normalized < 270;
}

export default function FlipCard({ front, back, className = "" }) {
  const wrapRef = useRef(null);
  const scaleRef = useRef(null);
  const frontRef = useRef(null);
  const backRef = useRef(null);
  const dragging = useRef(false);
  const dragStartX = useRef(0);
  const baseAngle = useRef(0);
  const liveAngle = useRef(0);

  const [isDragging, setIsDragging] = useState(false);
  const [restAngle, setRestAngle] = useState(0);

  const paint = useCallback((deg) => {
    if (scaleRef.current) scaleRef.current.style.transform = `scaleX(${angleToScaleX(deg)})`;
    const showBack = isBackAngle(deg);
    // `visibility` (not `display`) — the hidden face must stay in layout
    // so it keeps contributing to the grid row's height. Toggling
    // `display: none` here previously removed whichever face was inactive
    // from layout entirely, which (since the "back" face is grid-stacked
    // with no normal-flow height of its own once "front" disappeared)
    // collapsed the whole card to a sliver the instant it flipped.
    if (frontRef.current) frontRef.current.style.visibility = showBack ? "hidden" : "visible";
    if (backRef.current) backRef.current.style.visibility = showBack ? "visible" : "hidden";
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
  const flipped = isBackAngle(restAngle);

  // Belt-and-suspenders re-sync: `paint()` during drag writes to
  // scaleRef/frontRef/backRef directly, bypassing React. If the drag ends
  // on an angle whose scaleX/display JSX would compute to the SAME value
  // React last rendered (e.g. back to rest), React's own diffing sees "no
  // change" and skips touching the DOM — leaving the card visually stuck
  // mid-squeeze from the last manual paint(). This effect forces a fresh,
  // unconditional imperative write after every settled angle change, so
  // the DOM can never drift from what `restAngle` actually says.
  useEffect(() => {
    paint(restAngle);
  }, [restAngle, paint]);

  return (
    <div
      ref={wrapRef}
      className={`relative min-w-0 select-none ${className}`}
      style={{ touchAction: "pan-y", WebkitTapHighlightColor: "transparent" }}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={endDrag}
      onPointerCancel={endDrag}
    >
      <div
        ref={scaleRef}
        className="grid min-w-0"
        style={{
          transform: `scaleX(${angleToScaleX(restAngle)})`,
          transition: isDragging ? "none" : `transform ${SNAP_MS}ms cubic-bezier(0.22, 1, 0.36, 1)`,
          cursor: isDragging ? "grabbing" : "grab",
        }}
      >
        {/* Both faces share the same grid cell — plain 2D stacking (no
            position:absolute height hack needed), so the row auto-sizes
            to the taller of the two regardless of which is visible. */}
        <div
          ref={frontRef}
          className="[grid-area:1/1] min-w-0"
          style={{ visibility: flipped ? "hidden" : "visible" }}
          aria-hidden={flipped}
          inert={flipped}
        >
          {typeof front === "function" ? front({ flipped, flip }) : front}
        </div>
        <div
          ref={backRef}
          className="[grid-area:1/1] min-w-0"
          style={{ visibility: flipped ? "visible" : "hidden" }}
          aria-hidden={!flipped}
          inert={!flipped}
        >
          {typeof back === "function" ? back({ flipped, flip }) : back}
        </div>
      </div>
    </div>
  );
}
