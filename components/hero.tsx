import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/aerial-view-of-highway-with-semi-trucks-and-freigh.jpg"
          alt="Freight logistics network"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-32 pb-24 lg:px-8 lg:pt-40">
        <div className="max-w-3xl">
          <div className="mb-6">
            <span className="inline-flex items-center rounded-full border border-border bg-secondary/50 px-4 py-1.5 text-sm font-medium text-secondary-foreground backdrop-blur-sm">
              Trusted by 500+ Carriers Nationwide
            </span>
          </div>

          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl text-balance">
            Connecting
            <span className="block text-primary">Shippers & Carriers</span>
          </h1>

          <p className="mt-6 text-lg leading-relaxed text-muted-foreground max-w-2xl">
            FreightHunt is your trusted freight brokerage partner. We simplify load selection and connect reliable
            carriers with shippers for seamless, efficient transportation solutions.
          </p>

          <div className="mt-10">
            <Button size="lg" className="gap-2">
              Get a Free Quote
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
          <div className="w-1 h-2 rounded-full bg-muted-foreground/50 animate-bounce" />
        </div>
      </div>
    </section>
  )
}
