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
} from "lucide-react"

const services = [
  {
    id: "ftl",
    icon: Truck,
    title: "Full Truckload (FTL)",
    description:
      "Dedicated truck capacity for your shipments. Ideal for large volume freight that fills an entire trailer.",
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
    description:
      "Cost-effective shipping for smaller freight that doesn't require a full truck. Share space and save money.",
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
    description:
      "Time-critical freight solutions when every minute counts. Guaranteed delivery times for urgent shipments.",
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
    description: "Heavy haul, oversized, and unique freight solutions requiring special permits and equipment.",
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
    description:
      "Refrigerated and climate-controlled shipping for perishables, pharmaceuticals, and temperature-sensitive goods.",
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
    description: "Seamless freight transportation across the US, Canada, and Mexico borders with full customs support.",
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
    description: "Every carrier in our network is thoroughly screened for safety, insurance, and reliability.",
  },
  {
    icon: DollarSign,
    title: "Competitive Rates",
    description: "Our buying power and carrier relationships ensure you get the best rates available.",
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description: "Our team is always available to handle your freight needs and answer questions.",
  },
  {
    icon: Headphones,
    title: "Dedicated Agents",
    description: "Work with the same team who understands your business and shipping patterns.",
  },
]

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <Header />

      <PageHeader
        badge="Our Services"
        title="Comprehensive Freight Solutions"
        description="From full truckloads to specialized freight, we provide end-to-end logistics services tailored to your business needs."
      />

      {/* Services Grid */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-8">
            {services.map((service, index) => (
              <Card key={service.id} id={service.id} className="border-0 shadow-lg overflow-hidden">
                <div className={`grid lg:grid-cols-2 ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
                  <div className={`p-8 lg:p-12 ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10">
                        <service.icon className="h-7 w-7 text-primary" />
                      </div>
                      <h2 className="text-2xl font-bold text-foreground">{service.title}</h2>
                    </div>
                    <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>
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
                      <Link href="/contact">
                        Request Quote <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                  <div
                    className={`bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center min-h-[300px] lg:min-h-full ${index % 2 === 1 ? "lg:order-1" : ""}`}
                  >
                    <img
                      src={
                        service.id === "ftl"
                          ? "/freight-trucks-on-highway-logistics.jpg"
                          : service.id === "ltl"
                            ? "/retail-warehouse-boxes.jpg"
                            : service.id === "expedited"
                              ? "/aerial-view-of-highway-with-semi-trucks-and-freigh.jpg"
                              : service.id === "specialized"
                                ? "/construction-heavy-equipment.jpg"
                                : service.id === "temperature"
                                  ? "/food-beverage-cold-storage.jpg"
                                  : service.id === "crossborder"
                                    ? "/shipping-warehouse-logistics-operations.jpg"
                                    : "/placeholder.jpg"
                      }
                      alt={service.title}
                      className="w-full h-full object-cover"
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
            <h2 className="text-3xl font-bold tracking-tight text-foreground mb-4">Why Choose Freight Hunt?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We go beyond just moving freight. We become an extension of your team.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChoose.map((item) => (
              <Card key={item.title} className="border-0 shadow-md text-center">
                <CardContent className="p-6">
                  <div className="flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 mx-auto mb-4">
                    <item.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
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
          <p className="text-lg text-primary-foreground/80 mb-8">
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
