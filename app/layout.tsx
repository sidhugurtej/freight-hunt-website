import type React from "react"
import type { Metadata } from "next"
import { Inter, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _inter = Inter({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Freight Hunt | Connecting Shippers and Carriers",
  description:
    "FreightHunt is your trusted freight brokerage partner. We connect shippers with reliable carriers for seamless load selection and transportation solutions.",
  keywords: "freight brokerage, load selection, shippers, carriers, freight transportation, logistics"
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
