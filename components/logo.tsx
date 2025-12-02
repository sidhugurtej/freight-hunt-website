export function Logo({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Background shape */}
      <rect width="48" height="48" rx="10" className="fill-primary" />

      {/* Crosshair/Target ring - represents "Hunt" */}
      <circle cx="24" cy="24" r="14" stroke="currentColor" strokeWidth="2" className="stroke-primary-foreground/30" />
      <circle cx="24" cy="24" r="8" stroke="currentColor" strokeWidth="1.5" className="stroke-primary-foreground/20" />

      {/* Crosshair lines */}
      <path
        d="M24 8V14"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        className="stroke-primary-foreground/40"
      />
      <path
        d="M24 34V40"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        className="stroke-primary-foreground/40"
      />
      <path
        d="M8 24H14"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        className="stroke-primary-foreground/40"
      />
      <path
        d="M34 24H40"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        className="stroke-primary-foreground/40"
      />

      {/* Truck icon - centered */}
      <g className="fill-primary-foreground">
        {/* Truck body */}
        <rect x="13" y="20" width="14" height="10" rx="1.5" />
        {/* Truck cab */}
        <path d="M27 23H31C32.1046 23 33 23.8954 33 25V28.5C33 29.3284 32.3284 30 31.5 30H27V23Z" />
        {/* Cab window */}
        <rect x="28" y="24.5" width="3.5" height="3" rx="0.5" className="fill-primary" />
        {/* Wheels */}
        <circle cx="17" cy="30" r="2.5" className="fill-primary" />
        <circle cx="17" cy="30" r="1.5" />
        <circle cx="30" cy="30" r="2.5" className="fill-primary" />
        <circle cx="30" cy="30" r="1.5" />
        {/* Cargo lines */}
        <rect x="15" y="22" width="6" height="1" rx="0.5" className="fill-primary/50" />
        <rect x="15" y="24.5" width="8" height="1" rx="0.5" className="fill-primary/50" />
      </g>

      {/* Target dot center */}
      <circle cx="24" cy="24" r="2" className="fill-accent" />
    </svg>
  )
}
