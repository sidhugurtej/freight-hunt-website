import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PageHeader } from "@/components/page-header"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { CheckCircle, DollarSign, Clock, Shield, Headphones, MapPin, FileCheck, ArrowRight } from "lucide-react"

const benefits = [
  {
    icon: DollarSign,
    title: "Competitive Rates",
    description:
      "Our established carrier relationships and market expertise ensure you get the best rates for your freight.",
  },
  {
    icon: Shield,
    title: "Vetted Carriers",
    description: "Every carrier in our network is thoroughly screened for safety, insurance, and performance records.",
  },
  {
    icon: MapPin,
    title: "Real-Time Tracking",
    description:
      "Know exactly where your freight is at all times with our comprehensive tracking and visibility tools.",
  },
  {
    icon: Headphones,
    title: "Dedicated Support",
    description: "Your dedicated freight agent knows your business and is available 24/7 to handle your shipments.",
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    description: "98% on-time delivery rate means you can count on us to meet your deadlines consistently.",
  },
  {
    icon: FileCheck,
    title: "Simple Billing",
    description: "Transparent pricing with no hidden fees. One invoice, one point of contact, simple accounting.",
  },
]

const process = [
  {
    step: "01",
    title: "Request a Quote",
    description: "Tell us about your shipment details including origin, destination, freight type, and timeline.",
  },
  {
    step: "02",
    title: "Review Options",
    description: "We provide competitive quotes from our vetted carrier network tailored to your needs.",
  },
  {
    step: "03",
    title: "Book Your Load",
    description: "Select your preferred option and we handle carrier coordination and pickup scheduling.",
  },
  {
    step: "04",
    title: "Track & Deliver",
    description: "Monitor your shipment in real-time until it's safely delivered to its destination.",
  },
]

const industries = [
  "Manufacturing",
  "Retail & E-Commerce",
  "Food & Beverage",
  "Construction",
  "Automotive",
  "Agriculture",
  "Pharmaceuticals",
  "Consumer Goods",
]

export default function ShippersPage() {
  return (
    <main className="min-h-screen">
      <Header />

      <PageHeader
        badge="For Shippers"
        title="Reliable Freight Solutions for Your Business"
        description="Partner with Freight Hunt to simplify your logistics. We connect you with vetted carriers, competitive rates, and dedicated support."
      />

      {/* Hero Section */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-foreground mb-6">
                Why Shippers Choose Freight Hunt
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Managing freight can be complex and time-consuming. At Freight Hunt, we take the hassle out of shipping
                by handling everything from carrier selection to delivery confirmation. Our experienced team works as an
                extension of your supply chain, ensuring your freight moves efficiently and on time.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild>
                  <Link href="/contact">Get a Free Quote</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/services">View Services</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <img src="/shipping-warehouse-logistics-operations.jpg" alt="Shipping operations" className="rounded-2xl shadow-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-20 bg-muted/30">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground mb-4">The Freight Hunt Advantage</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Experience the benefits of working with a freight broker that puts your needs first.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit) => (
              <Card key={benefit.title} className="border-0 shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 mb-4">
                    <benefit.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground mb-4">How It Works</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Shipping with Freight Hunt is simple. Here's how we make it easy.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <div key={item.step} className="relative">
                <div className="text-6xl font-bold text-primary/10 mb-4">{item.step}</div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
                {index < process.length - 1 && (
                  <ArrowRight className="hidden lg:block absolute top-8 -right-4 h-6 w-6 text-primary/30" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20 bg-muted/30">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-foreground mb-6">Industries We Serve</h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                We have experience shipping freight for businesses across a wide range of industries. No matter what
                you're moving, we have the expertise to handle it.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {industries.map((industry) => (
                  <div key={industry} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0" />
                    <span className="text-foreground">{industry}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img src="/manufacturing-factory-freight.jpg" alt="Manufacturing" className="rounded-xl shadow-md" />
              <img src="/retail-warehouse-boxes.jpg" alt="Retail" className="rounded-xl shadow-md mt-8" />
              <img src="/food-beverage-cold-storage.jpg" alt="Food & Beverage" className="rounded-xl shadow-md" />
              <img src="/construction-heavy-equipment.jpg" alt="Construction" className="rounded-xl shadow-md mt-8" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-primary-foreground mb-4">
            Ready to Simplify Your Shipping?
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-8">
            Get a free quote today and discover why businesses trust Freight Hunt for their freight needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">Get a Free Quote</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary"
              asChild
            >
              <Link href="tel:8005554868">Call (800) 555-HUNT</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
