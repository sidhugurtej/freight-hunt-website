import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PageHeader } from "@/components/page-header"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { Target, Eye, Users, TrendingUp, Shield, Clock } from "lucide-react"

const values = [
  {
    icon: Shield,
    title: "Integrity",
    description: "We operate with complete transparency and honesty in every transaction and relationship.",
  },
  {
    icon: Users,
    title: "Partnership",
    description: "We view our clients and carriers as partners, invested in mutual success and growth.",
  },
  {
    icon: TrendingUp,
    title: "Excellence",
    description: "We continuously strive to exceed expectations and deliver superior service every time.",
  },
  {
    icon: Clock,
    title: "Reliability",
    description: "We understand that timing is critical, and we deliver on our promises consistently.",
  },
]

const stats = [
  { value: "15+", label: "Years Experience" },
  { value: "10,000+", label: "Loads Delivered" },
  { value: "500+", label: "Carrier Partners" },
  { value: "98%", label: "On-Time Rate" },
]

const team = [
  {
    name: "Michael Johnson",
    role: "Founder & CEO",
    bio: "25+ years in logistics, started Freight Hunt to revolutionize freight brokerage.",
  },
  {
    name: "Sarah Williams",
    role: "VP of Operations",
    bio: "Former logistics director at Fortune 500 company, oversees all carrier relationships.",
  },
  {
    name: "David Chen",
    role: "Director of Sales",
    bio: "Passionate about building lasting partnerships with shippers across industries.",
  },
  {
    name: "Emily Rodriguez",
    role: "Customer Success Lead",
    bio: "Dedicated to ensuring every client receives exceptional support and service.",
  },
]

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Header />

      <PageHeader
        badge="About Us"
        title="Your Trusted Freight Partner"
        description="Freight Hunt was founded with a simple mission: to make freight transportation simpler, more reliable, and more efficient for businesses of all sizes."
      />

      {/* Our Story */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-foreground mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Freight Hunt was born from a simple observation: the freight industry needed a better way to connect
                  shippers with carriers. Too often, businesses struggled with unreliable shipping, lack of
                  transparency, and poor communication.
                </p>
                <p>
                  Founded in 2009, we set out to change that. Starting as a small operation with just a handful of
                  trusted carriers, we focused on building relationships based on trust, reliability, and exceptional
                  service.
                </p>
                <p>
                  Today, Freight Hunt has grown into a nationwide freight brokerage, connecting hundreds of shippers
                  with our network of over 500 vetted carriers. But our core values remain the same: integrity,
                  reliability, and a commitment to our partners' success.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                <img
                  src="/freight-trucks-on-highway-logistics.jpg"
                  alt="Freight Hunt logistics operations"
                  className="rounded-2xl object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-muted/30">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10">
                    <Target className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">Our Mission</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  To provide exceptional freight brokerage services that connect shippers with reliable carriers,
                  ensuring on-time deliveries, competitive rates, and complete peace of mind. We are committed to
                  simplifying logistics so our clients can focus on growing their business.
                </p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10">
                    <Eye className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">Our Vision</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  To be the most trusted name in freight brokerage, recognized for our unwavering commitment to service
                  excellence, innovation, and the success of our partners. We envision a future where every shipment
                  moves seamlessly from origin to destination.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-primary">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary-foreground">{stat.value}</div>
                <div className="mt-2 text-primary-foreground/80 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground mb-4">Our Core Values</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              These principles guide everything we do at Freight Hunt.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <Card key={value.title} className="border-0 shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 mx-auto mb-4">
                    <value.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-muted/30">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground mb-4">Meet Our Leadership</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our experienced team brings decades of logistics expertise to serve you.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member) => (
              <Card key={member.name} className="border-0 shadow-md overflow-hidden">
                <div className="aspect-square bg-gradient-to-br from-primary/20 to-primary/5">
                  <img
                    src="/team-placeholder.svg"
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-foreground">{member.name}</h3>
                  <p className="text-sm text-primary mb-2">{member.role}</p>
                  <p className="text-sm text-muted-foreground">{member.bio}</p>
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
            Ready to Partner with Freight Hunt?
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-8">
            Whether you're a shipper looking for reliable transportation or a carrier seeking quality loads, we're here
            to help you succeed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">Get a Quote</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary"
              asChild
            >
              <Link href="/carriers">Join as Carrier</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
