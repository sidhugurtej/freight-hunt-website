import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PageHeader } from "@/components/page-header"

export default function PrivacyPage() {
  return (
    <main className="min-h-screen">
      <Header />

      <PageHeader title="Privacy Policy" description="Last updated: December 1, 2025" />

      <section className="py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 prose prose-slate max-w-none">
          <h2 className="text-2xl font-bold text-foreground mb-4">1. Information We Collect</h2>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            Freight Hunt collects information you provide directly to us, such as when you request a quote, create an
            account, contact us, or otherwise communicate with us. This information may include your name, email
            address, phone number, company name, and shipping information.
          </p>

          <h2 className="text-2xl font-bold text-foreground mb-4">2. How We Use Your Information</h2>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            We use the information we collect to provide, maintain, and improve our services, process transactions, send
            you technical notices and support messages, respond to your comments and questions, and provide customer
            service.
          </p>

          <h2 className="text-2xl font-bold text-foreground mb-4">3. Information Sharing</h2>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            We may share your information with carriers and other service providers who need access to such information
            to carry out work on our behalf. We may also share information in response to a request for information if
            we believe disclosure is required by applicable law.
          </p>

          <h2 className="text-2xl font-bold text-foreground mb-4">4. Data Security</h2>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            We take reasonable measures to help protect information about you from loss, theft, misuse, unauthorized
            access, disclosure, alteration, and destruction. All data is transmitted using industry-standard encryption
            protocols.
          </p>

          <h2 className="text-2xl font-bold text-foreground mb-4">5. Your Rights</h2>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            You may access, update, or delete your personal information by contacting us at info@freighthunt.us. You may
            also opt out of receiving promotional communications from us by following the instructions in those
            messages.
          </p>

          <h2 className="text-2xl font-bold text-foreground mb-4">6. Contact Us</h2>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            If you have any questions about this Privacy Policy, please contact us at:
            <br />
            <br />
            Freight Hunt
            <br />
            Email: info@freighthunt.us
            <br />
            Phone: (800) 555-HUNT
          </p>
        </div>
      </section>

      <Footer />
    </main>
  )
}
