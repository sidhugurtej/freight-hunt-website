import { Card, CardContent } from "@/components/ui/card"
import { Truck, Package, Snowflake, Container, Globe, Warehouse, Layers, Zap } from "lucide-react"

const services = [
  {
    icon: Truck,
    title: "Full Truckload (FTL)",
    description: "Dedicated truck capacity for your largest shipments with direct point-to-point service.",
  },
  {
    icon: Package,
    title: "Less Than Truckload (LTL)",
    description: "Cost-effective shipping for smaller loads that don't require a full truck.",
  },
  {
    icon: Zap,
    title: "Expedited Shipping",
    description: "Time-critical freight solutions when every minute counts. Guaranteed delivery.",
  },
  {
    icon: Snowflake,
    title: "Reefer / Temperature Controlled",
    description: "Refrigerated trailers for frozen and temperature-sensitive freight.",
  },
  {
    icon: Layers,
    title: "Flatbed & Specialized",
    description: "Transport heavily, oversized, or irregular goods that require open trailer equipment.",
  },
  {
    icon: Container,
    title: "Drayage",
    description: "Short-distance container transport connecting ports, rail ramps, and local warehouses.",
  },
  {
    icon: Globe,
    title: "Cross-Border Shipping",
    description: "Seamless freight transportation across U.S., Canada, and Mexico borders.",
  },
  {
    icon: Warehouse,
    title: "Warehousing",
    description: "Flexible storage and distribution services to optimize your supply chain.",
  },
]

export function Services() {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary mb-3">Our Services</p>
          <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl text-balance">
            Comprehensive Freight Solutions
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            From road to sea to air, we provide every mode of transport to keep your supply chain moving.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Card
              key={service.title}
              className="group border border-border bg-card hover:border-primary/50 hover:shadow-lg transition-all duration-300"
            >
              <CardContent className="p-6">
                <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-secondary group-hover:bg-primary transition-colors">
                  <service.icon className="h-6 w-6 text-secondary-foreground group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="text-lg font-semibold text-card-foreground mb-2">{service.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
