export function Logo({ className = "w-48 h-12" }: { className?: string }) {
  return (
    <img
      src="/logo.png"
      alt="Freight Hunt Logo"
      className={`${className} object-contain`}
    />
  )
}
