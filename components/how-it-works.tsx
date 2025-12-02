const steps = [
  {
    number: "1",
    title: "Request a Quote",
    description: "Tell us about your shipment details and we'll provide competitive rates within minutes.",
  },
  {
    number: "2",
    title: "We Match You",
    description: "Our team matches your freight with the best carrier from our vetted network.",
  },
  {
    number: "3",
    title: "Track & Deliver",
    description: "Monitor your shipment in real-time and receive confirmation upon delivery.",
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-muted/50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary mb-3">How It Works</p>
          <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl text-balance">
            Simple, Transparent Process
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Getting your freight from point A to point B has never been easier.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-1/2 w-full h-0.5 bg-border" />
              )}
              <div className="relative flex flex-col items-center text-center">
                <div className="flex items-center justify-center w-24 h-24 rounded-full bg-primary text-primary-foreground text-3xl font-bold mb-6 relative z-10">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold text-primary mb-3">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed max-w-xs">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
