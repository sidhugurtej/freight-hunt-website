"use client"

import Link from "next/link"
import { Logo } from "@/components/logo"
import { Phone, Mail, MapPin } from "lucide-react"

const footerLinks = {
  services: [
    { name: "Full Truckload (FTL)", href: "/services#ftl" },
    { name: "Less Than Truckload (LTL)", href: "/services#ltl" },
    { name: "Expedited Shipping", href: "/services#expedited" },
    { name: "Specialized Freight", href: "/services#specialized" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Our Services", href: "/services" },
    { name: "Contact", href: "/contact" },
  ],
  resources: [
    { name: "For Shippers", href: "/shippers" },
    { name: "For Carriers", href: "/carriers" },
    { name: "FAQ", href: "/faq" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
  ],
}

function handleLinkClick() {
  window.scrollTo({ top: 0, behavior: "smooth" })
}

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-6">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3" onClick={handleLinkClick}>
              <Logo className="w-48 h-12" />
            </Link>
            <p className="mt-4 text-background/70 max-w-sm leading-relaxed">
              Your trusted partner in freight brokerage. Connecting shippers with reliable carriers for seamless
              transportation solutions across the nation.
            </p>
            <div className="mt-6 space-y-3">
              <div className="flex items-center gap-3 text-background/70">
                <Phone className="h-4 w-4" />
                <span className="text-sm">(817) 256-8492</span>
              </div>
              <div className="flex items-center gap-3 text-background/70">
                <Mail className="h-4 w-4" />
                <span className="text-sm">freighthunt001@gmail.com</span>
              </div>
              <div className="flex items-center gap-3 text-background/70">
                <MapPin className="h-4 w-4" />
                <span className="text-sm">11701 Sky Blue Ct, Haslet, TX 76052</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-background uppercase tracking-wider mb-4">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-background/70 hover:text-background transition-colors text-sm"
                    onClick={handleLinkClick}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-background uppercase tracking-wider mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-background/70 hover:text-background transition-colors text-sm"
                    onClick={handleLinkClick}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-background uppercase tracking-wider mb-4">Resources</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-background/70 hover:text-background transition-colors text-sm"
                    onClick={handleLinkClick}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-background uppercase tracking-wider mb-4">Legal</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-background/70 hover:text-background transition-colors text-sm"
                    onClick={handleLinkClick}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-background/20">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-background/60">
              © {new Date().getFullYear()} Freight Hunt. All rights reserved.
            </p>
            <p className="text-sm text-background/60">Licensed Freight Broker | MC# XXXXXX | USDOT# XXXXXXX</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
