const stats = [
  { id: 1, value: "10K+", label: "Loads Delivered" },
  { id: 2, value: "100+", label: "Carrier Partners" },
  { id: 3, value: "98%", label: "On-Time Delivery" },
  { id: 4, value: "24/7", label: "Support Available" },
]

export function Stats() {
  return (
    <section className="py-16 bg-primary">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.id} className="text-center">
              <p className="text-4xl font-bold text-primary-foreground lg:text-5xl">{stat.value}</p>
              <p className="mt-2 text-sm font-medium text-primary-foreground/80">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
