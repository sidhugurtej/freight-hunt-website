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
    <footer className="bg-white text-foreground border-t border-border">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-6">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3" onClick={handleLinkClick}>
              <Logo className="w-48 h-24" />
            </Link>
            <p className="mt-4 text-muted-foreground max-w-sm leading-relaxed">
              Your trusted partner in freight brokerage. Connecting shippers with reliable carriers for seamless
              transportation solutions across the nation.
            </p>
            <div className="mt-8">
              <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">Contact Details</h3>
              <div className="space-y-3">
                <a
                  href="tel:+18172568492"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
                >
                  <Phone className="h-4 w-4 group-hover:text-primary transition-colors" />
                  <span className="text-sm">(817) 256-8492</span>
                </a>
                <a
                  href="mailto:info@freighthunt.us"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
                >
                  <Mail className="h-4 w-4 group-hover:text-primary transition-colors" />
                  <span className="text-sm">info@freighthunt.us</span>
                </a>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=11701+Sky+Blue+Ct,+Haslet,+TX+76052"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-muted-foreground hover:text-primary transition-colors group"
                >
                  <MapPin className="h-4 w-4 mt-0.5 group-hover:text-primary transition-colors" />
                  <span className="text-sm">11701 Sky Blue Ct, Haslet, TX 76052</span>
                </a>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    onClick={handleLinkClick}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    onClick={handleLinkClick}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">Resources</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    onClick={handleLinkClick}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">Legal</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    onClick={handleLinkClick}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Freight Hunt. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
