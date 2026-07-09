import React, { useEffect, useRef, useState } from "react";
import logo from "../assets/logo.png";

const SEGMENTS = [
  { id: 1, label: "Screening & Counselling\nWith Career Counselor" },
  { id: 2, label: "Resume Building\nBy CV Experts" },
  { id: 3, label: "Resume Understanding\nSession" },
  { id: 4, label: "Marketing By\nDedicated/Personal Recruiter" },
  { id: 5, label: "Technical Training\nWith Industry Experts" },
  { id: 6, label: "Interview\nPreparation & Mock Interview" },
  { id: 7, label: "Background Check\nVerification Guidance" },
  { id: 8, label: "Offer Letter &\nOnboarding" },
].map((seg, i, arr) => ({
  ...seg,
  percent: Math.round((i / (arr.length - 1)) * 100),
}));

const SIZE_W = 1200;
const SIZE_H = 620;
const MARGIN_X = 90;
const TOP_Y = 170;
const BOTTOM_Y = 450;
const RISE_RANGE = BOTTOM_Y - TOP_Y;

const RISE_FRAC = [0.05, 0.12, 0.35, 0.4, 0.55, 0.62, 0.85, 1.0];

const xForPercent = (percent) =>
  MARGIN_X + (percent / 100) * (SIZE_W - 2 * MARGIN_X);

const yForIndex = (i) => BOTTOM_Y - RISE_FRAC[i] * RISE_RANGE;

const GRAY_DARK = "#2A2A2D";
const RED_ACCENT = "#ee1936";

// Gradient from dark to red to bright white
function colorForPercent(percent) {
  const t = Math.min(Math.max(percent / 100, 0), 1);
  if (t < 0.6) return "#666666";
  if (t < 0.85) return "#ee1936";
  return "#f5f5f7";
}

const COLOR_STOPS = [0, 25, 50, 70, 85, 100].map((p) => ({
  offset: p,
  color: colorForPercent(p),
}));

const CONFETTI_COLORS = ["#ee1936", "#f5f5f7", "#ff4d6b", "#ffffff", "#d4d4d8"];

function layoutFor(i) {
  const above = i % 2 === 0;
  const tall = Math.floor(i / 2) % 2 === 1;
  const connector = tall ? 115 : 70;
  return { above, connector };
}

const POINTS = SEGMENTS.map((seg, i) => ({
  x: xForPercent(seg.percent),
  y: yForIndex(i),
}));
const PATH_D = POINTS.map((p, i) => `${i === 0 ? "M" : "L"} ${p.x} ${p.y}`).join(" ");
const END = POINTS[POINTS.length - 1];

const RUN_SECONDS = 5;
const PAUSE_SECONDS = 2;
const TOTAL_SECONDS = RUN_SECONDS + PAUSE_SECONDS;
const RUN_END = RUN_SECONDS / TOTAL_SECONDS;
const RUN_DURATION = `${TOTAL_SECONDS}s`;

function remapT(t) {
  const flourishStart = 0.86;
  if (t <= flourishStart) return (t / flourishStart) * RUN_END;
  return RUN_END + ((t - flourishStart) / (1 - flourishStart)) * (1 - RUN_END);
}

function kt(...times) {
  return times.map((t) => remapT(t).toFixed(4)).join(";");
}

function ktPercent(t) {
  return (remapT(t) * 100).toFixed(2);
}

const BURST_RAYS = Array.from({ length: 12 }, (_, i) => {
  const angle = (i * Math.PI * 2) / 12;
  return {
    dx: Math.cos(angle) * 38,
    dy: Math.sin(angle) * 38,
    color: CONFETTI_COLORS[i % CONFETTI_COLORS.length],
  };
});

const CONFETTI_PIECES = Array.from({ length: 16 }, (_, i) => {
  const angle = (i / 16) * Math.PI * 2 + (i % 2 ? 0.2 : -0.2);
  const distance = 46 + (i % 4) * 16;
  return {
    id: i,
    dx: Math.cos(angle) * distance,
    dy: Math.sin(angle) * distance * 0.6 - 12,
    fall: 40 + (i % 3) * 18,
    rotate: (i * 53) % 360,
    size: 5 + (i % 3) * 2,
    color: CONFETTI_COLORS[(i + 2) % CONFETTI_COLORS.length],
    delay: (i % 4) * 0.015,
  };
});

function fillOnPassKeyframes(name, seg, prop) {
  const p = Math.round(seg.percent * RUN_END);
  const before = Math.max(0, p - 1);
  const color = colorForPercent(seg.percent);
  return `
@keyframes ${name} {
  0% { ${prop}: ${GRAY_DARK}; }
  ${before}% { ${prop}: ${GRAY_DARK}; }
  ${p}% { ${prop}: ${color}; }
  100% { ${prop}: ${color}; }
}`;
}

function confettiKeyframes(piece) {
  const flourishStart = ktPercent(0.86);
  const flourishPeak = ktPercent(0.91);
  return `
@keyframes confetti-${piece.id} {
  0%, ${flourishStart}% { opacity: 0; transform: translate(0px, 0px) rotate(0deg) scale(0.3); }
  ${flourishPeak}% { opacity: 1; transform: translate(${piece.dx}px, ${piece.dy}px) rotate(${piece.rotate}deg) scale(1); }
  100% { opacity: 0; transform: translate(${piece.dx * 1.2}px, ${piece.dy + piece.fall}px) rotate(${piece.rotate + 140}deg) scale(0.7); }
}`;
}

function NumberBadge({ seg, i, reduceMotion }) {
  const x = xForPercent(seg.percent);
  const y = yForIndex(i);
  const finalColor = colorForPercent(seg.percent);

  return (
    <div
      className="absolute flex flex-col items-center justify-center rounded-full leading-none border-4 transition-colors"
      style={{
        left: `${(x / SIZE_W) * 100}%`,
        top: `${(y / SIZE_H) * 100}%`,
        width: "9%",
        height: "9%",
        transform: "translate(-50%, -50%)",
        borderColor: reduceMotion ? finalColor : GRAY_DARK,
        backgroundColor: "#121212",
        color: reduceMotion ? finalColor : "#666666",
        animation: reduceMotion ? undefined : `badge-fill-${seg.id} ${RUN_DURATION} linear infinite`,
      }}
    >
      <span className="font-display font-bold text-white" style={{ fontSize: "clamp(13px, 2vw, 22px)" }}>
        {seg.id}
      </span>
      <span className="text-[10px] tracking-widest text-white/60" style={{ marginTop: "-2px" }}>
        {seg.percent}%
      </span>
    </div>
  );
}

function Label({ seg, i }) {
  const { above, connector } = layoutFor(i);
  const x = xForPercent(seg.percent);
  const y = yForIndex(i);
  const labelY = above ? y - connector : y + connector;
  const lines = seg.label.split("\n");
  const color = colorForPercent(seg.percent);

  return (
    <div
      className="absolute flex flex-col items-center"
      style={{
        left: `${(x / SIZE_W) * 100}%`,
        top: `${(labelY / SIZE_H) * 100}%`,
        transform: "translate(-50%, -50%)",
        width: "172px",
      }}
    >
      {!above && <div className="w-2.5 h-2.5 rounded-full mb-2" style={{ backgroundColor: color }} />}
      
      <div className="text-white/90 font-medium leading-tight text-center text-[13px] md:text-sm">
        {lines.map((l, idx) => (
          <div key={idx}>{l}</div>
        ))}
      </div>

      {above && <div className="w-2.5 h-2.5 rounded-full mt-2" style={{ backgroundColor: color }} />}
    </div>
  );
}

export default function Feature() {
  const gradientId = "line-progress-gradient";
  const runnerGradientId = "runner-gradient";
  const pathRef = useRef(null);
  const [pathLength, setPathLength] = useState(0);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduceMotion(mq.matches);
    const handler = (e) => setReduceMotion(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    if (pathRef.current) setPathLength(pathRef.current.getTotalLength());
  }, []);

  const dynamicStyles = [
    ...SEGMENTS.map((seg) => fillOnPassKeyframes(`badge-fill-${seg.id}`, seg, "borderColor")),
    ...SEGMENTS.map((seg) => fillOnPassKeyframes(`dot-fill-${seg.id}`, seg, "stroke")),
    ...CONFETTI_PIECES.map(confettiKeyframes),
  ].join("\n");

  return (
    <div className="w-full min-h-screen bg-[#0a0a0a] flex flex-col items-center justify-center p-4 sm:p-6 md:p-12 gap-8">
      {/* Title */}
      <div className="flex flex-col items-center text-center">
        <p className="font-display text-white text-3xl md:text-5xl tracking-tight font-semibold">
          Life Cycle of Candidate at
        </p>
        <img src={logo} alt="JHEX Logo" className="h-10 sm:h-16 md:h-20 mt-5 rounded-xl" />
      </div>

      {/* Chart Container */}
      <div className="w-full max-w-6xl overflow-x-auto">
        <div
          className="relative mx-auto"
          style={{
            width: "100%",
            minWidth: "640px",
            maxWidth: `${SIZE_W}px`,
            aspectRatio: `${SIZE_W} / ${SIZE_H}`,
          }}
        >
          <svg viewBox={`0 0 ${SIZE_W} ${SIZE_H}`} className="w-full h-full" overflow="visible">
            <defs>
              <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="0%">
                {COLOR_STOPS.map((s) => (
                  <stop key={s.offset} offset={`${s.offset}%`} stopColor={s.color} />
                ))}
              </linearGradient>
              <radialGradient id={runnerGradientId} cx="40%" cy="40%" r="70%">
                <stop offset="0%" stopColor="#ffffff" stopOpacity="0.35" />
                <stop offset="100%" stopColor="#ee1936" stopOpacity="0" />
              </radialGradient>
            </defs>

            {/* Base track */}
            <path
              d={PATH_D}
              fill="none"
              stroke={GRAY_DARK}
              strokeWidth="7"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {/* Progress line */}
            <path
              ref={pathRef}
              d={PATH_D}
              fill="none"
              stroke={`url(#${gradientId})`}
              strokeWidth="7"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeDasharray={reduceMotion || !pathLength ? undefined : pathLength}
              strokeDashoffset={reduceMotion || !pathLength ? 0 : pathLength}
            >
              {!reduceMotion && pathLength > 0 && (
                <animate
                  attributeName="stroke-dashoffset"
                  values={`${pathLength};0;0`}
                  keyTimes={`0;${RUN_END.toFixed(4)};1`}
                  dur={RUN_DURATION}
                  repeatCount="indefinite"
                />
              )}
            </path>

            {/* Connector stems */}
            {SEGMENTS.map((seg, i) => {
              const { above, connector } = layoutFor(i);
              const x = xForPercent(seg.percent);
              const y = yForIndex(i);
              const y2 = above ? y - connector + 14 : y + connector - 14;
              return (
                <line
                  key={`stem-${seg.id}`}
                  x1={x} y1={y} x2={x} y2={y2}
                  stroke="#3A3A3E"
                  strokeWidth="2.5"
                  strokeDasharray="3 3"
                />
              );
            })}

            {/* Milestone dots */}
            {SEGMENTS.map((seg, i) => (
              <circle
                key={`dot-${seg.id}`}
                cx={xForPercent(seg.percent)}
                cy={yForIndex(i)}
                r="8"
                fill="#121212"
                strokeWidth="4"
                style={{
                  stroke: reduceMotion ? colorForPercent(seg.percent) : GRAY_DARK,
                  animation: reduceMotion ? undefined : `dot-fill-${seg.id} ${RUN_DURATION} linear infinite`,
                }}
              />
            ))}

            {!reduceMotion && (
              <>
                {/* Runner */}
                <g>
                  <circle r="18" fill={`url(#${runnerGradientId})`}>
                    <animateMotion
                      path={PATH_D}
                      keyPoints="0;1;1"
                      keyTimes={`0;${RUN_END.toFixed(4)};1`}
                      dur={RUN_DURATION}
                      repeatCount="indefinite"
                    />
                  </circle>
                  <circle r="11" fill="#ee1936">
                    <animateMotion
                      path={PATH_D}
                      keyPoints="0;1;1"
                      keyTimes={`0;${RUN_END.toFixed(4)};1`}
                      dur={RUN_DURATION}
                      repeatCount="indefinite"
                    />
                  </circle>
                </g>

                {/* Celebration rings + confetti at end */}
                {[0, 1].map((ring) => (
                  <circle
                    key={`ring-${ring}`}
                    cx={END.x}
                    cy={END.y}
                    r="16"
                    fill="none"
                    stroke={ring === 0 ? "#ee1936" : "#f5f5f7"}
                    strokeWidth={ring === 0 ? 4 : 2.5}
                  >
                    <animate attributeName="r" values="16;16;48;68" keyTimes={ring === 0 ? kt(0, 0.86, 0.94, 1) : kt(0, 0.88, 0.96, 1)} dur={RUN_DURATION} repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0;0;0.8;0" keyTimes={ring === 0 ? kt(0, 0.86, 0.9, 1) : kt(0, 0.88, 0.92, 1)} dur={RUN_DURATION} repeatCount="indefinite" />
                  </circle>
                ))}

                {/* Spark burst */}
                {BURST_RAYS.map((ray, idx) => (
                  <circle key={`spark-${idx}`} r="2.5" fill={ray.color}>
                    <animate attributeName="cx" values={`${END.x};${END.x};${END.x + ray.dx};${END.x + ray.dx * 1.35}`} keyTimes={kt(0, 0.86, 0.94, 1)} dur={RUN_DURATION} repeatCount="indefinite" />
                    <animate attributeName="cy" values={`${END.y};${END.y};${END.y + ray.dy};${END.y + ray.dy * 1.35}`} keyTimes={kt(0, 0.86, 0.94, 1)} dur={RUN_DURATION} repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0;0;1;0" keyTimes={kt(0, 0.86, 0.9, 1)} dur={RUN_DURATION} repeatCount="indefinite" />
                  </circle>
                ))}

                {/* Confetti */}
                {CONFETTI_PIECES.map((piece) => (
                  <rect
                    key={`confetti-${piece.id}`}
                    x={END.x - piece.size / 2}
                    y={END.y - piece.size / 2}
                    width={piece.size}
                    height={piece.size * 1.7}
                    rx="1"
                    fill={piece.color}
                    style={{
                      animation: `confetti-${piece.id} ${RUN_DURATION} linear infinite`,
                      animationDelay: `${piece.delay}s`,
                      transformBox: "fill-box",
                      transformOrigin: "center",
                    }}
                  />
                ))}
              </>
            )}
          </svg>

          {/* Number Badges + Labels */}
          {SEGMENTS.map((seg, i) => (
            <NumberBadge key={`badge-${seg.id}`} seg={seg} i={i} reduceMotion={reduceMotion} />
          ))}
          {SEGMENTS.map((seg, i) => (
            <Label key={`label-${seg.id}`} seg={seg} i={i} />
          ))}

          {/* Celebration Emojis */}
          {!reduceMotion && (
            <div
              className="absolute pointer-events-none"
              style={{ left: `${(END.x / SIZE_W) * 100}%`, top: `${(END.y / SIZE_H) * 100}%` }}
            >
              <span className="absolute text-3xl" style={{ animation: `jhex-celebrate-center ${RUN_DURATION} linear infinite` }}>🎉</span>
              <span className="absolute text-xl" style={{ animation: `jhex-celebrate-left ${RUN_DURATION} linear infinite` }}>✨</span>
              <span className="absolute text-xl" style={{ animation: `jhex-celebrate-right ${RUN_DURATION} linear infinite` }}>🎊</span>
            </div>
          )}
        </div>
      </div>

      <style>{`
        @keyframes jhex-celebrate-center {
          0%, ${ktPercent(0.86)}% { opacity: 0; transform: translate(-50%, -160%) scale(0.4); }
          ${ktPercent(0.92)}% { opacity: 1; transform: translate(-50%, -220%) scale(1.25); }
          100% { opacity: 0; transform: translate(-50%, -260%) scale(1); }
        }
        @keyframes jhex-celebrate-left {
          0%, ${ktPercent(0.87)}% { opacity: 0; transform: translate(-180%, -130%) scale(0.3); }
          ${ktPercent(0.93)}% { opacity: 1; transform: translate(-260%, -200%) scale(1.1); }
          100% { opacity: 0; transform: translate(-300%, -230%) scale(0.9); }
        }
        @keyframes jhex-celebrate-right {
          0%, ${ktPercent(0.87)}% { opacity: 0; transform: translate(80%, -130%) scale(0.3); }
          ${ktPercent(0.93)}% { opacity: 1; transform: translate(160%, -200%) scale(1.1); }
          100% { opacity: 0; transform: translate(200%, -230%) scale(0.9); }
        }
        ${dynamicStyles}
      `}</style>
    </div>
  );
}