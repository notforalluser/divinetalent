// Signature visual motif: an ascending path with milestone markers.
// Echoes the site's core promise (resume -> interview -> offer -> placed -> growth)
// so it's reused as a hero graphic, a section divider, and the process backbone.
export default function GrowthPath({ className = '', stroke = '#DE9B3F', compact = false }) {
  const height = compact ? 120 : 320
  return (
    <svg
      viewBox={`0 0 640 ${height}`}
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d={
          compact
            ? 'M10 100 C 120 100, 140 40, 220 55 S 340 90, 420 40 S 540 10, 630 20'
            : 'M10 290 C 140 290, 170 150, 260 175 S 420 250, 480 120 S 580 30, 630 25'
        }
        stroke={stroke}
        strokeWidth="3"
        strokeLinecap="round"
        strokeDasharray="6 10"
        opacity="0.9"
      />
    </svg>
  )
}
