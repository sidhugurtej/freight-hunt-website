"use client"

import type React from "react"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PageHeader } from "@/components/page-header"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle,
  Truck,
  Package,
  ArrowRight,
  ArrowLeft,
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
    details: ["1234 Logistics Parkway", "Suite 500", "Dallas, TX 75201"],
    description: "Corporate Headquarters",
  },
  {
    icon: Headphones,
    title: "Quotes & Operations",
    details: ["(800) 555-HUNT (4868)"],
    description: "Available 24/7 - Never Closed",
    highlight: true,
  },
  {
    icon: Truck,
    title: "Carrier Support",
    details: ["(800) 555-HAUL (4285)"],
    description: "Dedicated carrier dispatch line",
  },
  {
    icon: Clock,
    title: "Office Hours",
    details: ["24/7 Dispatch Operations", "Office: Mon-Fri 7am-7pm CST"],
    description: "Round-the-clock support",
  },
]

const emailContacts = [
  { icon: Package, email: "quotes@freighthunt.us", label: "Get a Quote" },
  { icon: Truck, email: "carriers@freighthunt.us", label: "Carrier Onboarding" },
  { icon: Users, email: "sales@freighthunt.us", label: "Sales Inquiries" },
  { icon: Briefcase, email: "careers@freighthunt.us", label: "Career Opportunities" },
  { icon: Mail, email: "info@freighthunt.us", label: "General Inquiries" },
]

const steps = [
  { number: 1, title: "Who are you?" },
  { number: 2, title: "Your details" },
  { number: 3, title: "Your message" },
]

export default function ContactPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    userType: "",
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  })

  const handleNext = () => {
    if (currentStep < 3) setCurrentStep(currentStep + 1)
  }

  const handleBack = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const resetForm = () => {
    setSubmitted(false)
    setCurrentStep(1)
    setFormData({
      userType: "",
      name: "",
      email: "",
      phone: "",
      company: "",
      message: "",
    })
  }

  const canProceedStep1 = formData.userType !== ""
  const canProceedStep2 = formData.name !== "" && formData.email !== "" && formData.phone !== ""
  const canSubmit = formData.message !== ""

  return (
    <main className="min-h-screen">
      <Header />

      <PageHeader
        badge="Contact Us"
        title="Let's Talk Freight"
        description="Whether you're looking to ship freight or join our carrier network, we're here to help. Reach out and let's get started."
      />

      <section className="py-20 bg-muted/30">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Start Your Journey</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Fill out our quick form and a dedicated team member will contact you within 30 minutes during business
              hours.
            </p>
          </div>

          <Card className="max-w-2xl mx-auto border-0 shadow-xl">
            <CardContent className="p-8">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="flex items-center justify-center w-20 h-20 rounded-full bg-green-100 mx-auto mb-6">
                    <CheckCircle className="h-10 w-10 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">Thank You!</h3>
                  <p className="text-muted-foreground mb-2">Your inquiry has been received.</p>
                  <p className="text-muted-foreground mb-8">
                    {formData.userType === "shipper"
                      ? "A freight specialist will contact you shortly with a customized quote."
                      : "Our carrier relations team will reach out to discuss partnership opportunities."}
                  </p>
                  <Button onClick={resetForm}>Submit Another Inquiry</Button>
                </div>
              ) : (
                <>
                  {/* Step Indicator */}
                  <div className="flex items-center justify-center mb-8">
                    {steps.map((step, index) => (
                      <div key={step.number} className="flex items-center">
                        <div className="flex flex-col items-center">
                          <div
                            className={cn(
                              "w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-colors",
                              currentStep === step.number
                                ? "bg-primary text-primary-foreground"
                                : currentStep > step.number
                                  ? "bg-green-500 text-white"
                                  : "bg-muted text-muted-foreground",
                            )}
                          >
                            {currentStep > step.number ? <CheckCircle className="h-5 w-5" /> : step.number}
                          </div>
                          <span className="text-xs mt-2 text-muted-foreground hidden sm:block">{step.title}</span>
                        </div>
                        {index < steps.length - 1 && (
                          <div
                            className={cn(
                              "w-16 sm:w-24 h-1 mx-2 rounded transition-colors",
                              currentStep > step.number ? "bg-green-500" : "bg-muted",
                            )}
                          />
                        )}
                      </div>
                    ))}
                  </div>

                  <form onSubmit={handleSubmit}>
                    {/* Step 1: User Type Selection */}
                    {currentStep === 1 && (
                      <div className="space-y-6">
                        <div className="text-center mb-6">
                          <h3 className="text-xl font-semibold text-foreground mb-2">How can we help you today?</h3>
                          <p className="text-muted-foreground">Select the option that best describes you.</p>
                        </div>
                        <div className="grid sm:grid-cols-2 gap-4">
                          <button
                            type="button"
                            onClick={() => setFormData({ ...formData, userType: "shipper" })}
                            className={cn(
                              "p-6 rounded-xl border-2 transition-all text-left",
                              formData.userType === "shipper"
                                ? "border-primary bg-primary/5"
                                : "border-border hover:border-primary/50",
                            )}
                          >
                            <Package className="h-10 w-10 text-primary mb-4" />
                            <h4 className="font-semibold text-foreground text-lg mb-2">I'm a Shipper</h4>
                            <p className="text-sm text-muted-foreground">
                              I need to ship freight and am looking for reliable carrier capacity.
                            </p>
                          </button>
                          <button
                            type="button"
                            onClick={() => setFormData({ ...formData, userType: "carrier" })}
                            className={cn(
                              "p-6 rounded-xl border-2 transition-all text-left",
                              formData.userType === "carrier"
                                ? "border-primary bg-primary/5"
                                : "border-border hover:border-primary/50",
                            )}
                          >
                            <Truck className="h-10 w-10 text-primary mb-4" />
                            <h4 className="font-semibold text-foreground text-lg mb-2">I'm a Carrier</h4>
                            <p className="text-sm text-muted-foreground">
                              I have trucks and want to partner with Freight Hunt for loads.
                            </p>
                          </button>
                        </div>
                        <div className="flex justify-end pt-4">
                          <Button type="button" onClick={handleNext} disabled={!canProceedStep1} className="min-w-32">
                            Next
                            <ArrowRight className="h-4 w-4 ml-2" />
                          </Button>
                        </div>
                      </div>
                    )}

                    {/* Step 2: Contact Details */}
                    {currentStep === 2 && (
                      <div className="space-y-6">
                        <div className="text-center mb-6">
                          <h3 className="text-xl font-semibold text-foreground mb-2">Your Contact Information</h3>
                          <p className="text-muted-foreground">How can we reach you?</p>
                        </div>
                        <div className="space-y-4">
                          <div className="space-y-2">
                            <Label htmlFor="name">Full Name *</Label>
                            <Input
                              id="name"
                              placeholder="John Smith"
                              required
                              value={formData.name}
                              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="email">Email Address *</Label>
                            <Input
                              id="email"
                              type="email"
                              placeholder="john@company.com"
                              required
                              value={formData.email}
                              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="phone">Phone Number *</Label>
                            <Input
                              id="phone"
                              type="tel"
                              placeholder="(555) 123-4567"
                              required
                              value={formData.phone}
                              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="company">Company Name (Optional)</Label>
                            <Input
                              id="company"
                              placeholder="Company Inc."
                              value={formData.company}
                              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                            />
                          </div>
                        </div>
                        <div className="flex justify-between pt-4">
                          <Button type="button" variant="outline" onClick={handleBack}>
                            <ArrowLeft className="h-4 w-4 mr-2" />
                            Back
                          </Button>
                          <Button type="button" onClick={handleNext} disabled={!canProceedStep2} className="min-w-32">
                            Next
                            <ArrowRight className="h-4 w-4 ml-2" />
                          </Button>
                        </div>
                      </div>
                    )}

                    {/* Step 3: Message/Load Details */}
                    {currentStep === 3 && (
                      <div className="space-y-6">
                        <div className="text-center mb-6">
                          <h3 className="text-xl font-semibold text-foreground mb-2">
                            {formData.userType === "shipper"
                              ? "Tell Us About Your Freight"
                              : "Tell Us About Your Fleet"}
                          </h3>
                          <p className="text-muted-foreground">
                            {formData.userType === "shipper"
                              ? "Include details like origin, destination, weight, and timeline."
                              : "Include details about your equipment, lanes, and capacity."}
                          </p>
                        </div>
                        <div className="space-y-4">
                          <div className="space-y-2">
                            <Label htmlFor="message">
                              {formData.userType === "shipper" ? "Load Details *" : "Fleet Details *"}
                            </Label>
                            <Textarea
                              id="message"
                              rows={6}
                              placeholder={
                                formData.userType === "shipper"
                                  ? "Example: I need to ship 20 pallets of electronics from Los Angeles, CA to Chicago, IL. Weight is approximately 15,000 lbs. Need pickup by Friday and delivery by Monday."
                                  : "Example: I operate 5 dry van trucks, primarily running lanes between Texas and the Midwest. Looking for consistent freight opportunities. MC#123456"
                              }
                              required
                              value={formData.message}
                              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            />
                          </div>
                        </div>
                        <div className="flex justify-between pt-4">
                          <Button type="button" variant="outline" onClick={handleBack}>
                            <ArrowLeft className="h-4 w-4 mr-2" />
                            Back
                          </Button>
                          <Button type="submit" disabled={!canSubmit} className="min-w-32">
                            <Send className="h-4 w-4 mr-2" />
                            Submit Inquiry
                          </Button>
                        </div>
                      </div>
                    )}
                  </form>
                </>
              )}
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Cards */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6">Contact Information</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {contactInfo.map((item) => (
                  <Card
                    key={item.title}
                    className={cn("border-0 shadow-md", item.highlight && "ring-2 ring-primary bg-primary/5")}
                  >
                    <CardContent className="p-5">
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
                          <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
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
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Email Directory */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6">Email Directory</h2>
              <Card className="border-0 shadow-md">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    {emailContacts.map((contact) => (
                      <a
                        key={contact.email}
                        href={`mailto:${contact.email}`}
                        className="flex items-center gap-4 p-3 rounded-lg hover:bg-muted transition-colors group"
                      >
                        <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                          <contact.icon className="h-5 w-5 text-primary" />
                        </div>
                        <div className="flex-1">
                          <p className="font-medium text-foreground">{contact.label}</p>
                          <p className="text-sm text-primary">{contact.email}</p>
                        </div>
                        <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                      </a>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

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
                href="tel:+18005554868"
                className="inline-flex items-center justify-center gap-2 bg-white text-primary font-semibold px-6 py-3 rounded-lg hover:bg-white/90 transition-colors"
              >
                <Phone className="h-5 w-5" />
                (800) 555-HUNT
              </a>
              <a
                href="tel:+18005554285"
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
