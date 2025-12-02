import { Card, CardContent } from "@/components/ui/card"
import { Truck, Package, Shield, Clock, MapPin, HeadphonesIcon } from "lucide-react"

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
    icon: Shield,
    title: "Vetted Carriers",
    description: "Every carrier in our network is thoroughly vetted for safety, reliability, and compliance.",
  },
  {
    icon: Clock,
    title: "Real-Time Tracking",
    description: "Know exactly where your freight is at all times with our advanced tracking system.",
  },
  {
    icon: MapPin,
    title: "Nationwide Coverage",
    description: "From coast to coast, we have the network to move your freight anywhere.",
  },
  {
    icon: HeadphonesIcon,
    title: "Dedicated Support",
    description: "Our logistics experts are available 24/7 to ensure your shipments run smoothly.",
  },
]

export function Services() {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary mb-3">Our Services</p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Comprehensive Freight Solutions
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            From full truckloads to specialized freight, we provide end-to-end logistics solutions tailored to your
            business needs.
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
