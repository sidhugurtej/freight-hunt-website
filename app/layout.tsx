import type React from "react"
import type { Metadata } from "next"
import { Inter, Geist_Mono } from "next/font/google"
import "./globals.css"

const _inter = Inter({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "Freight Hunt | Connecting Shippers and Carriers",
    template: "%s | Freight Hunt",
  },
  description:
    "Freight Hunt is a premier nationwide freight broker offering FTL and LTL shipping solutions. We connect shippers with reliable carriers for seamless freight transportation.",
  keywords: "freight brokerage, FTL shipping, LTL shipping, nationwide freight broker, freight transportation, logistics, shippers, carriers",
  icons: {
    icon: "/icon.svg",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth" suppressHydrationWarning>
      <body className={`font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}
