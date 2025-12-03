import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-background">
      <div className="mx-auto max-w-7xl w-full px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen py-20 pt-32 lg:pt-32">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <span className="inline-flex items-center rounded-full border border-border bg-secondary px-4 py-1.5 text-sm font-medium text-secondary-foreground">
                Trusted by 500+ Carriers Nationwide
              </span>
            </div>

            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl text-primary drop-shadow-sm">
              <span className="text-[#1e3a8a]">Connecting Shippers & Carriers</span>{" "}
              <span className="text-[#dc2626]">Nationwide</span>
            </h1>

            <p className="text-xl leading-relaxed text-muted-foreground max-w-xl">
              Your trusted freight brokerage partner. We connect reliable carriers with shippers for seamless,
              efficient transportation solutions across America.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Button size="lg" className="h-12 px-8 text-lg" asChild>
                <Link href="/contact">Get in Touch</Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border">
              <div>
                <div className="text-3xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Carriers</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">10k+</div>
                <div className="text-sm text-muted-foreground">Loads Moved</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">98%</div>
                <div className="text-sm text-muted-foreground">On-Time Rate</div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative h-[600px] lg:h-[700px] rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="/hero-connection-nationwide.jpg"
              alt="Modern freight logistics"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  )
}
