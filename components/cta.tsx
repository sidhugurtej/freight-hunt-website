import { Button } from "@/components/ui/button"
import { ArrowRight, Phone } from "lucide-react"

export function CTA() {
  return (
    <section className="py-24 bg-primary">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl text-balance">
            Ready to Simplify Your Freight?
          </h2>
          <p className="mt-4 text-lg text-primary-foreground/80 leading-relaxed">
            Whether you're a shipper looking for reliable capacity or a carrier seeking quality loads, FreightHunt is
            here to help you succeed.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="gap-2" asChild>
              <a href="mailto:freighthunt001@gmail.com?subject=Freight Quote Request">
                Get a Free Quote
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="gap-2 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground bg-transparent"
              asChild
            >
              <a href="tel:+18172568492">
                <Phone className="h-4 w-4" />
                (817) 256-8492
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
