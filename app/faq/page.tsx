import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PageHeader } from "@/components/page-header"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Link from "next/link"

const faqCategories = [
  {
    title: "General Questions",
    faqs: [
      {
        question: "What is Freight Hunt?",
        answer:
          "Freight Hunt is a licensed freight brokerage that connects shippers with reliable carriers. We handle the logistics of finding, vetting, and managing transportation for your freight, so you can focus on your business.",
      },
      {
        question: "What areas do you serve?",
        answer:
          "We provide freight brokerage services across all 48 continental United States. We also offer cross-border shipping services to Canada and Mexico through our partner network.",
      },
      {
        question: "How do I get a freight quote?",
        answer:
          "Getting a quote is easy! Simply contact us via phone at (817) 256-8492, email us at info@freighthunt.us, or fill out our online contact form. Provide your origin, destination, commodity type, weight, and desired pickup date, and we'll provide competitive rates.",
      },
      {
        question: "What types of freight do you handle?",
        answer:
          "We handle a wide variety of freight including dry goods, refrigerated products, flatbed commodities, oversized loads, hazardous materials, and specialized freight. Contact us to discuss your specific needs.",
      },
    ],
  },
  {
    title: "For Shippers",
    faqs: [
      {
        question: "How do you vet your carriers?",
        answer:
          "Every carrier in our network undergoes thorough vetting including verification of operating authority, insurance coverage, safety ratings, and performance history. We continuously monitor carrier performance to maintain our high standards.",
      },
      {
        question: "Can I track my shipment?",
        answer:
          "Yes! We provide real-time tracking updates for all shipments. Your dedicated freight agent will keep you informed throughout the transit process, and you can request updates at any time.",
      },
      {
        question: "What if there's a problem with my shipment?",
        answer:
          "Our team is available 24/7 to handle any issues that arise. If there's a problem, contact us immediately and we'll work to resolve it quickly. All shipments are covered by carrier insurance and our claims process is straightforward.",
      },
      {
        question: "How do payment terms work?",
        answer:
          "We offer flexible payment terms for established customers, typically Net 30. New customers may be asked for payment upon delivery initially. We accept checks, ACH, and credit cards.",
      },
    ],
  },
  {
    title: "For Carriers",
    faqs: [
      {
        question: "How do I sign up as a carrier?",
        answer:
          "Contact our carrier relations team at (817) 256-8492 or complete our online carrier application. We'll verify your authority, insurance, and safety record. Approved carriers can start hauling loads within 24 hours.",
      },
      {
        question: "What are your payment terms for carriers?",
        answer:
          "Standard payment is Net 30 from invoice receipt. We also offer a QuickPay option where you can receive payment within 24-48 hours for a small factoring fee.",
      },
      {
        question: "What equipment types do you need?",
        answer:
          "We regularly need dry vans, reefers, flatbeds, step decks, lowboys, and power-only capacity. If you have quality equipment and a good safety record, we want to hear from you.",
      },
      {
        question: "How often will I get loads?",
        answer:
          "Load frequency depends on your equipment type, preferred lanes, and availability. Many of our carriers run dedicated lanes with consistent weekly freight. We work to build long-term relationships with reliable carriers.",
      },
    ],
  },
]

import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "FAQ",
  description: "Frequently asked questions about Freight Hunt services for shippers and carriers.",
}

export default function FAQPage() {
  return (
    <main className="min-h-screen">
      <Header />

      <PageHeader
        badge="FAQ"
        title="Frequently Asked Questions"
        description="Find answers to common questions about our freight brokerage services, working with shippers, and joining our carrier network."
      />

      <section className="py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          {faqCategories.map((category) => (
            <div key={category.title} className="mb-12">
              <h2 className="text-2xl font-bold text-primary mb-6">{category.title}</h2>
              <Accordion type="single" collapsible className="space-y-4">
                {category.faqs.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`${category.title}-${index}`}
                    className="border rounded-lg px-6 shadow-sm"
                  >
                    <AccordionTrigger className="text-left font-semibold hover:no-underline">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed">{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-muted/30">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold tracking-tight text-primary mb-4">Still Have Questions?</h2>
          <p className="text-muted-foreground mb-8">
            Our team is here to help. Contact us and we'll get back to you within 2 hours.
          </p>
          <Button size="lg" asChild>
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  )
}
