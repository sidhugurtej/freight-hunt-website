import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PageHeader } from "@/components/page-header"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import {
  Truck,
  Package,
  Zap,
  Snowflake,
  AlertTriangle,
  Globe,
  CheckCircle,
  ArrowRight,
  Clock,
  Shield,
  DollarSign,
  Headphones,
  Star,
  Quote,
} from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Services",
  description: "Explore our comprehensive freight solutions including FTL, LTL, expedited, specialized, and cross-border shipping.",
}

const services = [
  {
    id: "ftl",
    icon: Truck,
    title: "Full Truckload (FTL)",
    tag: "Best for: High Volume",
    description:
      "Dedicated truck capacity for your shipments. Ideal for large volume freight that fills an entire trailer.",
    useCases: "Common use cases: Manufacturing distribution, large retail replenishment, bulk commodity transport.",
    features: [
      "Dedicated capacity with no freight mixing",
      "Faster transit times with direct routes",
      "Ideal for shipments over 10,000 lbs",
      "Dry van, flatbed, and specialized equipment",
      "Door-to-door service nationwide",
    ],
    benefits: "Perfect for manufacturers, distributors, and retailers moving large quantities.",
  },
  {
    id: "ltl",
    icon: Package,
    title: "Less Than Truckload (LTL)",
    tag: "Best for: Small Shipments",
    description:
      "Cost-effective shipping for smaller freight that doesn't require a full truck. Share space and save money.",
    useCases: "Common use cases: E-commerce fulfillment, sample distribution, small pallet shipments.",
    features: [
      "Pay only for the space you use",
      "Consolidated shipping for cost savings",
      "Ideal for shipments under 10,000 lbs",
      "Flexible pickup and delivery schedules",
      "Real-time tracking available",
    ],
    benefits: "Ideal for small businesses and shipments that don't need a full truck.",
  },
  {
    id: "expedited",
    icon: Zap,
    title: "Expedited Shipping",
    tag: "Best for: Time Critical",
    description:
      "Time-critical freight solutions when every minute counts. Guaranteed delivery times for urgent shipments.",
    useCases: "Common use cases: Critical plant shutdown parts, last‑minute retail replenishment, urgent medical supplies.",
    features: [
      "Same-day and next-day delivery options",
      "Dedicated trucks with team drivers",
      "24/7 monitoring and updates",
      "Hot shot and sprinter van options",
      "Priority loading and unloading",
    ],
    benefits: "When deadlines are critical, we deliver without compromise.",
  },
  {
    id: "specialized",
    icon: AlertTriangle,
    title: "Specialized Freight",
    tag: "Best for: Oversized/Complex",
    description: "Heavy haul, oversized, and unique freight solutions requiring special permits and equipment.",
    useCases: "Common use cases: Heavy machinery transport, infrastructure components, energy sector equipment.",
    features: [
      "Oversized and overweight loads",
      "Heavy machinery and equipment",
      "Permit management included",
      "Escort and pilot car services",
      "Route surveys and planning",
    ],
    benefits: "We handle the complex logistics of moving your most challenging freight.",
  },
  {
    id: "temperature",
    icon: Snowflake,
    title: "Temperature Controlled",
    tag: "Best for: Perishables",
    description:
      "Refrigerated and climate-controlled shipping for perishables, pharmaceuticals, and temperature-sensitive goods.",
    useCases: "Common use cases: Produce distribution, frozen food transport, pharmaceutical cold chain.",
    features: [
      "Reefer trailers with precise controls",
      "Temperature monitoring throughout transit",
      "FSMA and food safety compliant",
      "Pharmaceutical and medical transport",
      "Frozen, chilled, and heated options",
    ],
    benefits: "Protect your temperature-sensitive products from origin to destination.",
  },
  {
    id: "crossborder",
    icon: Globe,
    title: "Cross-Border Shipping",
    tag: "Best for: International",
    description: "Seamless freight transportation across the US, Canada, and Mexico borders with full customs support.",
    useCases: "Common use cases: Automotive supply chain, raw material imports, finished goods export.",
    features: [
      "US-Canada-Mexico corridors",
      "Customs documentation assistance",
      "Bonded carrier network",
      "Border crossing coordination",
      "Compliance management",
    ],
    benefits: "Simplify international shipping with our experienced cross-border team.",
  },
]

const whyChoose = [
  {
    icon: Shield,
    title: "Vetted Carrier Network",
    description: "Carriers screened for safety, insurance, and on‑time performance scores, ensuring your freight is in good hands.",
  },
  {
    icon: DollarSign,
    title: "Competitive Rates",
    description: "Our buying power and carrier relationships ensure you get the best rates available without compromising quality.",
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description: "Live agents monitoring shipments nights and weekends, so you never have to wonder where your freight is.",
  },
  {
    icon: Headphones,
    title: "Dedicated Agents",
    description: "Work with the same team who understands your business, shipping patterns, and communication preferences.",
  },
]

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <Header />

      <PageHeader
        badge="Our Services"
        title="Comprehensive Freight Solutions"
        description="From full truckloads to specialized freight, we provide end-to-end logistics services, including freight brokerage and nationwide shipping, tailored to your business needs."
      >
        <Button size="lg" asChild>
          <Link href="/contact">Request a Freight Quote</Link>
        </Button>
      </PageHeader>

      {/* Services Grid */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-8">
            {services.map((service, index) => (
              <Card key={service.id} id={service.id} className="border-0 shadow-lg overflow-hidden scroll-mt-24">
                <div className={`grid lg:grid-cols-2 ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
                  <div className={`p-8 lg:p-12 ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                    <div className="flex flex-col gap-2 mb-6">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10">
                          <service.icon className="h-7 w-7 text-primary" />
                        </div>
                        <h2 className="text-2xl font-bold text-primary">{service.title}</h2>
                      </div>
                      <div className="flex items-center gap-2 text-sm font-medium text-primary bg-primary/5 w-fit px-3 py-1 rounded-full">
                        <CheckCircle className="h-3.5 w-3.5" />
                        {service.tag}
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-4 leading-relaxed">{service.description}</p>
                    <p className="text-sm font-medium text-foreground mb-6 bg-muted/50 p-3 rounded-lg border-l-4 border-primary">
                      {service.useCases}
                    </p>

                    <ul className="space-y-3 mb-6">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                          <span className="text-foreground text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="text-sm text-muted-foreground italic mb-6">{service.benefits}</p>
                    <Button asChild>
                      <Link href={`/contact?service=${service.id}`}>
                        Request a Freight Quote <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                  <div
                    className={`flex items-center justify-center min-h-[300px] lg:min-h-full p-6 ${index % 2 === 1 ? "lg:order-1" : ""}`}
                  >
                    <img
                      src={
                        service.id === "ftl"
                          ? "/full-truckload-semi-truck-on-highway-professional.jpg"
                          : service.id === "ltl"
                            ? "/retail-warehouse-boxes.jpg"
                            : service.id === "expedited"
                              ? "/aerial-view-of-highway-with-semi-trucks-and-freigh.jpg"
                              : service.id === "specialized"
                                ? "/oversized-heavy-haul-freight-truck-carrying-large.jpg"
                                : service.id === "temperature"
                                  ? "/refrigerated-reefer-truck-cold-chain-logistics-tem.jpg"
                                  : service.id === "crossborder"
                                    ? "/shipping-warehouse-logistics-operations.jpg"
                                    : "/placeholder.jpg"
                      }
                      alt={service.title}
                      className="w-full h-full object-cover rounded-2xl shadow-md"
                    />
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-muted/30">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-primary mb-4">Why Choose Freight Hunt?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We go beyond just moving freight. We become an extension of your team.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {whyChoose.map((item) => (
              <Card key={item.title} className="border-0 shadow-md text-center">
                <CardContent className="p-6">
                  <div className="flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 mx-auto mb-4">
                    <item.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-primary mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-primary-foreground mb-4">
            Need a Custom Freight Solution?
          </h2>
          <p className="text-lg text-primary-foreground/90 font-medium mb-2">
            Average response time: under 1 business hour
          </p>
          <p className="text-primary-foreground/80 mb-8">
            Our logistics experts can design a transportation solution tailored to your unique requirements.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link href="/contact">Talk to an Expert</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  )
}
