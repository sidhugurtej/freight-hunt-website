"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, Package, Truck } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-muted/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary mb-3">Contact Us</p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Get in Touch Instantly
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Reach out directly via phone or email. We're available 24/7 for immediate assistance.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* Call Us Card */}
          <Card className="border-2 border-primary shadow-xl hover:shadow-2xl transition-shadow">
            <CardContent className="p-8 text-center">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary text-primary-foreground mx-auto mb-6">
                <Phone className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">Call Us Now</h3>
              <p className="text-muted-foreground mb-6">
                Speak with our team immediately. Available 24/7, 365 days a year.
              </p>
              <div className="space-y-3">
                <Button size="lg" className="w-full text-lg" asChild>
                  <a href="tel:+18005554868">
                    <Phone className="h-5 w-5 mr-2" />
                    (800) 555-HUNT
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="w-full text-lg" asChild>
                  <a href="tel:+18005554285">
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
              <h3 className="text-2xl font-bold text-foreground mb-2">Email Us</h3>
              <p className="text-muted-foreground mb-6">
                Send us a message and we'll respond within 30 minutes during business hours.
              </p>
              <div className="space-y-3">
                <Button size="lg" className="w-full text-lg" asChild>
                  <a href="mailto:quotes@freighthunt.us">
                    <Package className="h-5 w-5 mr-2" />
                    Get a Quote
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="w-full text-lg" asChild>
                  <a href="mailto:info@freighthunt.us">
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
  )
}
