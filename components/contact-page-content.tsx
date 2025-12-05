"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PageHeader } from "@/components/page-header"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
    Phone,
    Mail,
    Clock,
    MapPin,
    CheckCircle2,
} from "lucide-react"

export function ContactPageContent() {
    return (
        <main className="min-h-screen">
            <Header />

            <PageHeader
                badge="Contact Us"
                title="Let's Talk Freight"
                description="Specialized support for cross-border freight between the U.S., Canada, and Mexico. Reach out for 24/7 support and expert logistics solutions."
            >
                <div className="flex flex-wrap justify-center gap-4 text-sm font-medium text-muted-foreground">
                    <div className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary" />
                        Customs coordination
                    </div>
                    <div className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary" />
                        Cross-border capacity
                    </div>
                    <div className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary" />
                        Real-time updates
                    </div>
                </div>
            </PageHeader>

            <section className="py-16 bg-muted/30">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="grid lg:grid-cols-3 gap-8">
                        {/* Call Us Now */}
                        <Card className="border-2 border-primary shadow-xl hover:shadow-2xl transition-shadow">
                            <CardContent className="p-8 text-center flex flex-col h-full">
                                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary text-primary-foreground mx-auto mb-6">
                                    <Phone className="h-8 w-8" />
                                </div>
                                <h3 className="text-2xl font-bold text-primary mb-2">Call Us Now</h3>
                                <p className="text-muted-foreground mb-6">
                                    Fast quotes, live dispatch, and no voicemail.
                                </p>
                                <div className="mt-auto space-y-4">
                                    <Button size="lg" className="w-full text-lg" asChild>
                                        <a href="tel:+18172568492">
                                            <Phone className="h-5 w-5 mr-2" />
                                            (817) 256-8492
                                        </a>
                                    </Button>
                                    <div className="flex justify-center gap-2 text-sm text-muted-foreground font-medium">
                                        <span>Shippers</span>
                                        <span>•</span>
                                        <span>Carriers</span>
                                        <span>•</span>
                                        <span>24/7 Dispatch</span>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Email Us */}
                        <Card className="border-2 border-primary shadow-xl hover:shadow-2xl transition-shadow">
                            <CardContent className="p-8 text-center flex flex-col h-full">
                                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary text-primary-foreground mx-auto mb-6">
                                    <Mail className="h-8 w-8" />
                                </div>
                                <h3 className="text-2xl font-bold text-primary mb-2">Email Us</h3>
                                <p className="text-muted-foreground mb-6">
                                    Quick responses for quotes and operations.
                                </p>
                                <div className="mt-auto space-y-4 text-left">
                                    <div className="bg-background rounded-lg p-4 border">
                                        <div className="mb-3 pb-3 border-b last:border-0 last:mb-0 last:pb-0">
                                            <p className="text-sm font-medium text-primary mb-1">General Inquiries</p>
                                            <a href="mailto:info@freighthunt.us" className="text-sm text-muted-foreground hover:text-primary transition-colors block">
                                                info@freighthunt.us
                                            </a>
                                        </div>
                                        <div className="mb-0 pb-0">
                                            <p className="text-sm font-medium text-primary mb-1">Quotes & Operations</p>
                                            <a href="mailto:info@freighthunt.us" className="text-sm text-muted-foreground hover:text-primary transition-colors block">
                                                info@freighthunt.us
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Office & Hours */}
                        <Card className="border-2 border-primary shadow-xl hover:shadow-2xl transition-shadow">
                            <CardContent className="p-8 text-center flex flex-col h-full">
                                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary text-primary-foreground mx-auto mb-6">
                                    <Clock className="h-8 w-8" />
                                </div>
                                <h3 className="text-2xl font-bold text-primary mb-2">Office & Hours</h3>
                                <p className="text-muted-foreground mb-6">
                                    Visit our headquarters or reach us anytime.
                                </p>
                                <div className="mt-auto space-y-4 text-left">
                                    <div className="bg-background rounded-lg p-4 border space-y-4">
                                        <div className="flex gap-3">
                                            <MapPin className="h-5 w-5 text-primary shrink-0" />
                                            <div>
                                                <p className="text-sm font-medium text-foreground">Headquarters</p>
                                                <p className="text-sm text-muted-foreground">11701 Sky Blue Ct<br />Haslet, TX 76052</p>
                                            </div>
                                        </div>
                                        <div className="flex gap-3">
                                            <Clock className="h-5 w-5 text-primary shrink-0" />
                                            <div>
                                                <p className="text-sm font-medium text-foreground">Hours</p>
                                                <p className="text-sm text-muted-foreground">24/7 Dispatch Operations</p>
                                                <p className="text-sm text-muted-foreground">Mon-Fri 7am-7pm CST</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    )
}
