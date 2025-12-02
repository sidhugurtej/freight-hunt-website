export function Logo({ className = "w-48 h-12" }: { className?: string }) {
  return (
    <svg viewBox="0 0 300 80" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Outer Border */}
      <rect x="2" y="2" width="296" height="76" stroke="#1e3a8a" strokeWidth="4" fill="white" />

      {/* Left Half Background - Extended for FREIGHT */}
      <rect x="4" y="4" width="176" height="72" fill="#1e3a8a" />

      {/* Text: FREIGHT (White on Navy) */}
      <text
        x="92"
        y="52"
        fill="white"
        textAnchor="middle"
        fontFamily="Arial, sans-serif"
        fontWeight="bold"
        fontSize="32"
        letterSpacing="1"
      >
        FREIGHT
      </text>

      {/* Text: HUNT (Navy on White) */}
      <text
        x="238"
        y="52"
        fill="#1e3a8a"
        textAnchor="middle"
        fontFamily="Arial, sans-serif"
        fontWeight="bold"
        fontSize="32"
        letterSpacing="1"
      >
        HUNT
      </text>
    </svg>
  )
}
