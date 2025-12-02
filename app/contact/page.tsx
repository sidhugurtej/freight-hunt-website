"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PageHeader } from "@/components/page-header"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Phone,
  Mail,
  Clock,
  Truck,
  Package,
  Headphones,
  Building2,
  Users,
  Briefcase,
} from "lucide-react"
import { cn } from "@/lib/utils"

const contactInfo = [
  {
    icon: Building2,
    title: "Main Office",
    details: ["11701 Sky Blue Ct", "Haslet, TX 76052"],
    description: "Corporate Headquarters",
  },
  {
    icon: Headphones,
    title: "Quotes & Operations",
    details: ["(817) 256-8492"],
    description: "Available 24/7 - Never Closed",
    highlight: true,
    phone: "tel:+18172568492",
  },
  {
    icon: Truck,
    title: "Carrier Support",
    details: ["(817) 256-8492"],
    description: "Dedicated carrier dispatch line",
    phone: "tel:+18172568492",
  },
  {
    icon: Clock,
    title: "Office Hours",
    details: ["24/7 Dispatch Operations", "Office: Mon-Fri 7am-7pm CST"],
    description: "Round-the-clock support",
  },
]

const emailContacts = [
  { icon: Package, email: "freighthunt001@gmail.com", label: "Get a Quote", subject: "Freight Quote Request" },
  { icon: Truck, email: "freighthunt001@gmail.com", label: "Carrier Onboarding", subject: "Carrier Onboarding Application" },
  { icon: Users, email: "freighthunt001@gmail.com", label: "Sales Inquiries", subject: "Sales Inquiry" },
  { icon: Briefcase, email: "freighthunt001@gmail.com", label: "Career Opportunities", subject: "Career Opportunity" },
  { icon: Mail, email: "freighthunt001@gmail.com", label: "General Inquiries", subject: "General Inquiry" },
]

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Header />

      <PageHeader
        badge="Contact Us"
        title="Let's Talk Freight"
        description="Reach out directly via phone or email. Our team is ready to assist you with quotes, carrier onboarding, and all freight inquiries."
      />

      {/* Primary Contact CTAs */}
      <section className="py-16 bg-muted/30">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Get in Touch Instantly</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Choose your preferred method of contact. We're available 24/7 for immediate assistance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* Call Us Card */}
            <Card className="border-2 border-primary shadow-xl hover:shadow-2xl transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary text-primary-foreground mx-auto mb-6">
                  <Phone className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-2">Call Us Now</h3>
                <p className="text-muted-foreground mb-6">
                  Speak with our team immediately. Available 24/7, 365 days a year.
                </p>
                <div className="space-y-3">
                  <Button size="lg" className="w-full text-lg" asChild>
                    <a href="tel:+18172568492">
                      <Phone className="h-5 w-5 mr-2" />
                      (817) 256-8492
                    </a>
                  </Button>
                  <Button size="lg" variant="outline" className="w-full text-lg" asChild>
                    <a href="tel:+18172568492">
                      <Truck className="h-5 w-5 mr-2" />
                      Carrier Hotline
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Email Us Card */}
            <Card className="border-2 border-primary shadow-xl hover:shadow-2xl transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary text-primary-foreground mx-auto mb-6">
                  <Mail className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-2">Email Us</h3>
                <p className="text-muted-foreground mb-6">
                  Send us a message and we'll respond within 30 minutes during business hours.
                </p>
                <div className="space-y-3">
                  <Button size="lg" className="w-full text-lg" asChild>
                    <a href="mailto:freighthunt001@gmail.com?subject=Freight Quote Request">
                      <Package className="h-5 w-5 mr-2" />
                      Get a Quote
                    </a>
                  </Button>
                  <Button size="lg" variant="outline" className="w-full text-lg" asChild>
                    <a href="mailto:freighthunt001@gmail.com?subject=General Inquiry">
                      <Mail className="h-5 w-5 mr-2" />
                      General Inquiries
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Information & Email Directory */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Cards */}
            <div>
              <h2 className="text-2xl font-bold text-primary mb-6">Contact Information</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {contactInfo.map((item) => (
                  <Card
                    key={item.title}
                    className={cn("border-0 shadow-md", item.highlight && "ring-2 ring-primary bg-primary/5")}
                  >
                    <CardContent className="p-5">
                      {item.phone ? (
                        <a href={item.phone} className="block group">
                          <div className="flex items-start gap-4">
                            <div
                              className={cn(
                                "flex items-center justify-center w-12 h-12 rounded-lg shrink-0 transition-colors",
                                item.highlight
                                  ? "bg-primary text-primary-foreground group-hover:bg-primary/90"
                                  : "bg-primary/10 group-hover:bg-primary/20",
                              )}
                            >
                              <item.icon className={cn("h-6 w-6", !item.highlight && "text-primary")} />
                            </div>
                            <div>
                              <h3 className="font-semibold text-primary mb-1 group-hover:text-primary transition-colors">
                                {item.title}
                              </h3>
                              {item.details.map((detail) => (
                                <p key={detail} className="text-foreground text-sm">
                                  {detail}
                                </p>
                              ))}
                              <p
                                className={cn(
                                  "text-xs mt-2",
                                  item.highlight ? "text-primary font-medium" : "text-muted-foreground",
                                )}
                              >
                                {item.description}
                              </p>
                            </div>
                          </div>
                        </a>
                      ) : (
                        <div className="flex items-start gap-4">
                          <div
                            className={cn(
                              "flex items-center justify-center w-12 h-12 rounded-lg shrink-0",
                              item.highlight ? "bg-primary text-primary-foreground" : "bg-primary/10",
                            )}
                          >
                            <item.icon className={cn("h-6 w-6", !item.highlight && "text-primary")} />
                          </div>
                          <div>
                            <h3 className="font-semibold text-primary mb-1">{item.title}</h3>
                            {item.details.map((detail) => (
                              <p key={detail} className="text-foreground text-sm">
                                {detail}
                              </p>
                            ))}
                            <p
                              className={cn(
                                "text-xs mt-2",
                                item.highlight ? "text-primary font-medium" : "text-muted-foreground",
                              )}
                            >
                              {item.description}
                            </p>
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Email Directory */}
            <div>
              <h2 className="text-2xl font-bold text-primary mb-6">Email Directory</h2>
              <Card className="border-0 shadow-md">
                <CardContent className="p-6">
                  <div className="space-y-2">
                    {emailContacts.map((contact) => (
                      <a
                        key={contact.label}
                        href={`mailto:${contact.email}?subject=${contact.subject}`}
                        className="flex items-center gap-4 p-4 rounded-lg hover:bg-muted transition-colors group"
                      >
                        <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                          <contact.icon className="h-5 w-5 text-primary" />
                        </div>
                        <div className="flex-1">
                          <p className="font-medium text-foreground group-hover:text-primary transition-colors">
                            {contact.label}
                          </p>
                          <p className="text-sm text-primary">{contact.email}</p>
                        </div>
                        <Mail className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                      </a>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact Banner */}
      <section className="py-12 bg-primary">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <div>
              <h2 className="text-2xl font-bold text-primary-foreground mb-2">Need Immediate Assistance?</h2>
              <p className="text-primary-foreground/80">
                Our dispatch team is available 24/7, 365 days a year. No voicemail, no waiting.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:+18172568492"
                className="inline-flex items-center justify-center gap-2 bg-white text-primary font-semibold px-6 py-3 rounded-lg hover:bg-white/90 transition-colors"
              >
                <Phone className="h-5 w-5" />
                (817) 256-8492
              </a>
              <a
                href="tel:+18172568492"
                className="inline-flex items-center justify-center gap-2 bg-primary-foreground/10 text-primary-foreground font-semibold px-6 py-3 rounded-lg border border-primary-foreground/20 hover:bg-primary-foreground/20 transition-colors"
              >
                <Truck className="h-5 w-5" />
                Carrier Hotline
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
