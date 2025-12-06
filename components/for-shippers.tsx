import { Button } from "@/components/ui/button"
import { CheckCircle2, ArrowRight } from "lucide-react"
import Link from "next/link"

const benefits = [
  "Instant access to a nationwide network of 500+ vetted carriers for faster coverage",
  "Transparent, competitive pricing with no hidden fees to protect your margins",
  "Real-time visibility and tracking so you always know where your freight is",
  "Dedicated account management for personalized service and support",
  "Flexible scheduling options to meet your specific delivery timelines",
  "Comprehensive claims support and insurance for complete peace of mind",
]

export function ForShippers() {
  return (
    <section id="shippers" className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="relative">
            <div className="aspect-[4/3] overflow-hidden rounded-2xl">
              <img
                src="/warehouse-logistics-worker-with-tablet-managing-fr.jpg"
                alt="Shipper managing freight"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground rounded-xl p-6 shadow-xl">
              <p className="text-3xl font-bold">98%</p>
              <p className="text-sm">On-Time Rate</p>
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-primary mb-3">For Shippers</p>
            <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl text-balance">
              Move Your Freight with Confidence
            </h2>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              Whether you're shipping one load or managing a complex supply chain, Freight Hunt provides the tools and
              network you need to move freight efficiently.
            </p>

            <ul className="mt-8 space-y-4">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">{benefit}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10">
              <Button size="lg" className="gap-2" asChild>
                <Link href="/contact#quote-form">
                  Get Shipper Quote
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
