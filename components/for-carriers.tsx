import { Button } from "@/components/ui/button"
import { CheckCircle2, ArrowRight } from "lucide-react"
import Link from "next/link"

const benefits = [
  "Access consistent, high-quality loads daily to keep your trucks moving",
  "Quick pay options available to improve your cash flow",
  "No hidden fees or charges so you keep more of what you earn",
  "Dedicated carrier support team to assist you every mile of the way",
  "Easy-to-use load board for finding the perfect freight for your equipment",
  "Build long-term relationships for steady work and reliable income",
]

export function ForCarriers() {
  return (
    <section id="carriers" className="py-24 bg-muted/50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="order-2 lg:order-1">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary mb-3">For Carriers</p>
            <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl text-balance">
              Keep Your Trucks Moving
            </h2>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              Partner with Freight Hunt to access consistent, quality loads that keep your trucks rolling and your
              business growing.
            </p>

            <ul className="mt-8 space-y-4">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">{benefit}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10">
              <Button size="lg" className="gap-2" asChild>
                <Link href="/contact">
                  Apply as a Carrier
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>

          <div className="relative order-1 lg:order-2">
            <div className="aspect-[4/3] overflow-hidden rounded-2xl">
              <img src="/professional-truck-driver-in-cab-with-modern-fleet.jpg" alt="Carrier partner" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground rounded-xl p-6 shadow-xl">
              <p className="text-3xl font-bold">500+</p>
              <p className="text-sm">Carrier Partners</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
