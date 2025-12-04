import type { Metadata } from "next"
import { ContactPageContent } from "@/components/contact-page-content"

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with Freight Hunt. We are available 24/7 for quotes, carrier support, and general inquiries.",
}

export default function ContactPage() {
  return <ContactPageContent />
}
