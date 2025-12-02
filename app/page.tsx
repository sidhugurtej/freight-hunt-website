import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Stats } from "@/components/stats"
import { Services } from "@/components/services"
import { HowItWorks } from "@/components/how-it-works"
import { ForShippers } from "@/components/for-shippers"
import { ForCarriers } from "@/components/for-carriers"
import { Testimonials } from "@/components/testimonials"
import { CTA } from "@/components/cta"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Stats />
      <Services />
      <HowItWorks />
      <ForShippers />
      <ForCarriers />
      <Testimonials />
      <CTA />
      <Contact />
      <Footer />
    </main>
  )
}
