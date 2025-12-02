import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PageHeader } from "@/components/page-header"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { CheckCircle, DollarSign, Truck, Fuel, CreditCard, MapPin, PhoneCall, Shield, TrendingUp } from "lucide-react"

const benefits = [
  {
    icon: DollarSign,
    title: "Competitive Pay",
    description: "We offer fair, market-competitive rates and work to ensure you're paid what you deserve.",
  },
  {
    icon: CreditCard,
    title: "Quick Pay Options",
    description: "Get paid faster with our QuickPay program. Receive payment within 24-48 hours of delivery.",
  },
  {
    icon: MapPin,
    title: "Quality Loads",
    description: "Access high-paying loads that match your equipment, lanes, and schedule preferences.",
  },
  {
    icon: Fuel,
    title: "Fuel Discounts",
    description: "Save on fuel costs with our carrier fuel discount program at major truck stops nationwide.",
  },
  {
    icon: PhoneCall,
    title: "24/7 Support",
    description: "Our dispatch team is available around the clock to assist with any load or route questions.",
  },
  {
    icon: TrendingUp,
    title: "Consistent Freight",
    description: "Build a relationship with us and enjoy consistent load opportunities to keep you moving.",
  },
]

const requirements = [
  "Active MC/DOT Authority",
  "Minimum $100,000 cargo insurance",
  "Minimum $1,000,000 auto liability insurance",
  "Satisfactory safety rating",
  "Valid operating authority for at least 6 months",
  "Clean CSA scores",
]

const equipmentTypes = [
  { name: "Dry Van", loads: "High Volume" },
  { name: "Flatbed", loads: "Steady" },
  { name: "Reefer", loads: "High Volume" },
  { name: "Step Deck", loads: "Moderate" },
  { name: "Lowboy", loads: "Moderate" },
  { name: "Power Only", loads: "Available" },
]

export default function CarriersPage() {
  return (
    <main className="min-h-screen">
      <Header />

      <PageHeader
        badge="For Carriers"
        title="Partner with Freight Hunt"
        description="Join our network of trusted carriers and get access to quality loads, competitive pay, and a team that respects your time."
      />

      {/* Hero Section */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-primary mb-6">
                Why Carriers Love Working with Us
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                At Freight Hunt, we treat our carriers as true partners. We understand that your success is our success,
                which is why we're committed to providing quality loads, fair pay, and exceptional support.
              </p>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                No games, no runaround. Just honest business relationships built on mutual respect and reliability.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild>
                  <Link href="/contact">Join Our Network</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <img src="/semi-truck-driver-professional.jpg" alt="Professional truck driver" className="rounded-2xl shadow-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-20 bg-muted/30">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-primary mb-4">Carrier Benefits</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We invest in our carrier relationships because we know that's what keeps freight moving.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit) => (
              <Card key={benefit.title} className="border-0 shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 mb-4">
                    <benefit.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-primary mb-2">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment Types */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-primary mb-4">Equipment We Need</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We work with a variety of equipment types. If you have quality equipment and a commitment to service, we
              want to hear from you.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {equipmentTypes.map((equipment) => (
              <Card key={equipment.name} className="border-0 shadow-md">
                <CardContent className="p-6 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10">
                      <Truck className="h-6 w-6 text-primary" />
                    </div>
                    <span className="font-semibold text-primary">{equipment.name}</span>
                  </div>
                  <span className="text-sm text-primary font-medium">{equipment.loads}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-20 bg-muted/30">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-primary mb-6">Carrier Requirements</h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                To join the Freight Hunt carrier network, you'll need to meet the following minimum requirements. These
                standards help us maintain the quality and reliability our shippers expect.
              </p>
              <ul className="space-y-4">
                {requirements.map((req) => (
                  <li key={req} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                    <span className="text-primary">{req}</span>
                  </li>
                ))}
              </ul>
            </div>
            <Card className="border-0 shadow-xl">
              <CardContent className="p-8">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mx-auto mb-6">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-primary text-center mb-4">Ready to Get Started?</h3>
                <p className="text-muted-foreground text-center mb-6">
                  Our onboarding process is quick and easy. Get set up and start hauling loads in as little as 24 hours.
                </p>
                <Button className="w-full" size="lg" asChild>
                  <Link href="/contact">Apply Now</Link>
                </Button>
                <p className="text-sm text-muted-foreground text-center mt-4">
                  Or call us at <span className="font-semibold">(817) 256-8492</span>
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-primary-foreground mb-4">
            Join Our Growing Carrier Network
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-8">
            Partner with a broker that values your time, pays fairly, and keeps you loaded.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link href="/contact">Become a Partner Carrier</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  )
}
