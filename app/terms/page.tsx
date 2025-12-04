import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PageHeader } from "@/components/page-header"

import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Review our Terms of Service for using the Freight Hunt website and services.",
}

export default function TermsPage() {
  return (
    <main className="min-h-screen">
      <Header />

      <PageHeader title="Terms of Service" description="Last updated: December 1, 2025" />

      <section className="py-10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-primary mb-4">1. Acceptance of Terms</h2>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            By accessing or using the Freight Hunt website and services, you agree to be bound by these Terms of
            Service. If you do not agree to these terms, please do not use our services.
          </p>

          <h2 className="text-2xl font-bold text-primary mb-4">2. Description of Services</h2>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            Freight Hunt is a licensed freight brokerage that arranges the transportation of freight between shippers
            and carriers. We act as an intermediary and do not physically transport goods ourselves. All transportation
            is performed by independent third-party carriers.
          </p>

          <h2 className="text-2xl font-bold text-primary mb-4">3. Shipper Responsibilities</h2>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            Shippers agree to provide accurate information about their freight, including weight, dimensions, commodity
            type, and any special handling requirements. Shippers are responsible for properly packaging and loading
            freight in accordance with industry standards.
          </p>

          <h2 className="text-2xl font-bold text-primary mb-4">4. Carrier Responsibilities</h2>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            Carriers in our network agree to maintain proper operating authority, insurance coverage, and safety
            standards. Carriers are responsible for the safe and timely transportation of freight in accordance with the
            terms of each load agreement.
          </p>

          <h2 className="text-2xl font-bold text-primary mb-4">5. Liability Limitations</h2>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            Freight Hunt's liability is limited to its role as a broker. We are not liable for damage, loss, or delay
            caused by carriers unless due to our gross negligence. Carrier liability is governed by the Carmack
            Amendment and applicable transportation law.
          </p>

          <h2 className="text-2xl font-bold text-primary mb-4">6. Payment Terms</h2>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            Shippers agree to pay for services according to the quoted rates and agreed payment terms. Late payments may
            be subject to interest charges and collection costs. Carriers are paid according to the terms specified in
            their carrier agreement.
          </p>

          <h2 className="text-2xl font-bold text-primary mb-4">7. Claims Process</h2>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            Claims for loss or damage must be filed in writing within 9 months of delivery. All claims must include
            supporting documentation including proof of value and extent of damage. We will assist in processing claims
            with the responsible carrier.
          </p>

          <h2 className="text-2xl font-bold text-primary mb-4">8. Governing Law</h2>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            These Terms of Service shall be governed by the laws of the United States and applicable federal
            transportation regulations. Any disputes shall be resolved through binding arbitration in accordance with
            the rules of the American Arbitration Association.
          </p>

          <h2 className="text-2xl font-bold text-primary mb-4">9. Contact Information</h2>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            If you have any questions about these Terms, please contact us at info@freighthunt.us:
            <br />
            <br />
            Freight Hunt
            <br />
            Email: info@freighthunt.us
            <br />
            Phone: (817) 256-8492
          </p>
        </div>
      </section>

      <Footer />
    </main>
  )
}
