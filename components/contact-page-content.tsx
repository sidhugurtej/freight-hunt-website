"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import {
    Phone,
    Mail,
    Clock,
    Truck,
    ArrowRight,
    ShieldCheck
} from "lucide-react"

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

export function ContactPageContent() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        cargoType: "",
        service: "",
        origin: "",
        destination: "",
        notes: ""
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
    const [errors, setErrors] = useState<{
        email?: string
        phone?: string
        general?: string
    }>({})

    const validateEmail = (email: string): boolean => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        return emailRegex.test(email)
    }

    const validatePhone = (phone: string): boolean => {
        // Remove all non-digit characters
        const digitsOnly = phone.replace(/\D/g, '')
        // Valid if 10 or 11 digits (with or without country code)
        return digitsOnly.length >= 10 && digitsOnly.length <= 11
    }

    const validateForm = (): boolean => {
        const newErrors: { email?: string; phone?: string } = {}

        if (!validateEmail(formData.email)) {
            newErrors.email = "Please enter a valid email address"
        }

        if (!validatePhone(formData.phone)) {
            newErrors.phone = "Please enter a valid phone number (10 digits)"
        }

        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        // Validate all fields
        if (!validateForm()) {
            return
        }

        setIsSubmitting(true)
        setSubmitStatus('idle')
        setErrors({})

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            })

            if (response.ok) {
                setSubmitStatus('success')
                setFormData({
                    name: "",
                    email: "",
                    phone: "",
                    cargoType: "",
                    service: "",
                    origin: "",
                    destination: "",
                    notes: ""
                })
            } else {
                const data = await response.json()
                setErrors({ general: data.error || 'Something went wrong. Please try again.' })
                setSubmitStatus('error')
            }
        } catch (error) {
            setErrors({ general: 'Network error. Please check your connection and try again.' })
            setSubmitStatus('error')
        } finally {
            setIsSubmitting(false)
        }
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })

        // Clear field-specific errors when user types
        if (errors[name as keyof typeof errors]) {
            setErrors({ ...errors, [name]: undefined })
        }
    }

    const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target
        // Only allow digits, spaces, parentheses, and hyphens
        const filtered = value.replace(/[^\d\s()-]/g, '')
        setFormData({ ...formData, phone: filtered })

        // Clear phone error when user types
        if (errors.phone) {
            setErrors({ ...errors, phone: undefined })
        }
    }

    const handleServiceChange = (value: string) => {
        setFormData({ ...formData, service: value })
    }

    return (
        <main className="min-h-screen bg-background flex flex-col">
            <Header />

            {/* Hero Section */}
            <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 overflow-hidden">
                <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
                <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-primary/20 opacity-20 blur-[100px]"></div>

                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
                        {/* Left Column: Content */}
                        <div className="space-y-8">
                            <div className="space-y-4">
                                <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                                    <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-pulse"></span>
                                    Available 24/7
                                </div>
                                <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl xl:text-6xl text-balance">
                                    Let's Talk Freight
                                </h1>
                                <p className="text-lg text-muted-foreground leading-relaxed text-pretty max-w-xl">
                                    Same day truck capacity and live tracking for U.S. , Canada and Mexico cross‑border freight.
                                </p>
                                <div className="p-4 bg-muted/50 rounded-lg border-l-4 border-primary max-w-lg">
                                    <p className="font-medium text-foreground">
                                        Shippers: <span className="text-muted-foreground font-normal">Get capacity fast.</span>
                                    </p>
                                    <p className="font-medium text-foreground mt-1">
                                        Carriers: <span className="text-muted-foreground font-normal">Keep your trucks loaded.</span>
                                    </p>
                                </div>
                            </div>

                            <div className="grid sm:grid-cols-2 gap-6">
                                <a href="tel:+18172568492" className="flex items-start gap-3 group">
                                    <div className="p-2 bg-primary/10 rounded-md text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                                        <Phone className="h-5 w-5" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-foreground">Phone</h3>
                                        <p className="text-sm text-muted-foreground">(817) 256-8492</p>
                                    </div>
                                </a>
                                <a href="mailto:info@freighthunt.us" className="flex items-start gap-3 group">
                                    <div className="p-2 bg-primary/10 rounded-md text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                                        <Mail className="h-5 w-5" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-foreground">Email</h3>
                                        <p className="text-sm text-muted-foreground">info@freighthunt.us</p>
                                    </div>
                                </a>
                            </div>

                            <div className="pt-4 flex items-center gap-2 text-sm text-muted-foreground">
                                <ShieldCheck className="h-4 w-4 text-primary" />
                                <span>Licensed and bonded freight broker • Over 10,000 loads moved</span>
                            </div>
                        </div>

                        {/* Right Column: Quote Form */}
                        <div id="quote-form" className="relative">
                            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-primary to-primary/50 opacity-20 blur-lg"></div>
                            <div className="relative bg-card rounded-2xl border shadow-xl p-6 sm:p-8">
                                <div className="mb-6">
                                    <h3 className="text-xl font-bold flex items-center gap-2">
                                        Request a Free Quote
                                        <ArrowRight className="h-4 w-4 text-primary" />
                                    </h3>
                                    <p className="text-sm text-muted-foreground mt-1">
                                        Get a competitive price for your shipment in minutes.
                                    </p>
                                </div>

                                <form onSubmit={handleSubmit} className="space-y-4">
                                    {/* Row 1: Name & Email */}
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <Label htmlFor="name">Full Name *</Label>
                                            <Input
                                                id="name"
                                                name="name"
                                                placeholder="John Doe"
                                                required
                                                className="bg-muted/30"
                                                value={formData.name}
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="email">Email *</Label>
                                            <Input
                                                id="email"
                                                name="email"
                                                type="email"
                                                placeholder="john@company.com"
                                                required
                                                className={`bg-muted/30 ${errors.email ? 'border-red-500 focus-visible:ring-red-500' : ''}`}
                                                value={formData.email}
                                                onChange={handleChange}
                                            />
                                            {errors.email && (
                                                <p className="text-sm text-red-600 mt-1">{errors.email}</p>
                                            )}
                                        </div>
                                    </div>

                                    {/* Row 2: Phone & Cargo Type */}
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <Label htmlFor="phone">Phone Number *</Label>
                                            <Input
                                                id="phone"
                                                name="phone"
                                                type="tel"
                                                placeholder="(555) 000-0000"
                                                required
                                                className={`bg-muted/30 ${errors.phone ? 'border-red-500 focus-visible:ring-red-500' : ''}`}
                                                value={formData.phone}
                                                onChange={handlePhoneChange}
                                            />
                                            {errors.phone && (
                                                <p className="text-sm text-red-600 mt-1">{errors.phone}</p>
                                            )}
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="cargoType">Cargo Type *</Label>
                                            <Input
                                                id="cargoType"
                                                name="cargoType"
                                                placeholder="e.g. Dry Van, 40000lbs"
                                                className="bg-muted/30"
                                                required
                                                value={formData.cargoType}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>

                                    {/* Row 3: Service & Origin */}
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <Label>Service Type</Label>
                                            <Select onValueChange={handleServiceChange}>
                                                <SelectTrigger className="bg-muted/30">
                                                    <SelectValue placeholder="--Select--" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="ltl">LTL</SelectItem>
                                                    <SelectItem value="reefer-ltl">Reefer LTL</SelectItem>
                                                    <SelectItem value="ftl">FTL (Full Truckload)</SelectItem>
                                                    <SelectItem value="rftl">RFTL (Reefer Full)</SelectItem>
                                                    <SelectItem value="rail">Rail Intermodal</SelectItem>
                                                    <SelectItem value="drayage">Drayage Shipment</SelectItem>
                                                    <SelectItem value="other">Other</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="origin">Origin</Label>
                                            <Input
                                                id="origin"
                                                name="origin"
                                                placeholder="City, State or Zip"
                                                className="bg-muted/30"
                                                value={formData.origin}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>

                                    {/* Row 4: Destination */}
                                    <div className="space-y-2">
                                        <Label htmlFor="destination">Destination</Label>
                                        <Input
                                            id="destination"
                                            name="destination"
                                            placeholder="City, State or Zip"
                                            className="bg-muted/30"
                                            value={formData.destination}
                                            onChange={handleChange}
                                        />
                                    </div>

                                    {/* Row 5: Notes */}
                                    <div className="space-y-2">
                                        <Label htmlFor="notes">Additional Notes</Label>
                                        <Textarea
                                            id="notes"
                                            name="notes"
                                            placeholder="Any specific requirements or details..."
                                            className="bg-muted/30 min-h-[80px]"
                                            value={formData.notes}
                                            onChange={handleChange}
                                        />
                                    </div>

                                    {errors.general && (
                                        <p className="text-sm text-red-600 text-center font-medium">{errors.general}</p>
                                    )}

                                    <Button type="submit" size="lg" className="w-full text-lg shadow-md hover:shadow-lg transition-all bg-primary hover:bg-primary/90 text-primary-foreground border-none" disabled={isSubmitting}>
                                        {isSubmitting ? 'Submitting...' : 'Submit Now'}
                                    </Button>

                                    {submitStatus === 'success' && (
                                        <p className="text-center text-sm text-green-600 font-medium">Thank you! We'll respond shortly.</p>
                                    )}
                                    {submitStatus === 'error' && (
                                        <p className="text-center text-sm text-red-600 font-medium">Something went wrong. Please try again or call us.</p>
                                    )}

                                    <p className="text-center text-xs text-muted-foreground mt-4">
                                        Our team will respond with your free quote shortly.
                                    </p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Details Grid */}
            <section className="py-20 bg-muted/30 border-t">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="grid lg:grid-cols-3 gap-8">
                        {/* Phone */}
                        <div className="group relative overflow-hidden rounded-2xl bg-background p-8 border shadow-sm hover:shadow-xl transition-all duration-300">


                            <div className="relative">
                                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary mb-6 group-hover:scale-110 transition-transform">
                                    <Phone className="h-6 w-6" />
                                </div>
                                <h3 className="text-xl font-bold mb-2">Call Us Now</h3>
                                <p className="text-muted-foreground mb-6 h-12">
                                    Immediate assistance for shippers and carriers. No automated menus.
                                </p>

                                <a href="tel:+18172568492" className="text-xl font-bold text-primary hover:underline flex items-center gap-2">
                                    (817) 256-8492
                                </a>

                                <div className="mt-4 flex flex-wrap gap-2">
                                    <span className="inline-flex items-center rounded-md bg-muted px-2 py-1 text-xs font-medium text-muted-foreground ring-1 ring-inset ring-gray-500/10">Shippers</span>
                                    <span className="inline-flex items-center rounded-md bg-muted px-2 py-1 text-xs font-medium text-muted-foreground ring-1 ring-inset ring-gray-500/10">Carriers</span>
                                    <span className="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-xs font-medium text-primary ring-1 ring-inset ring-primary/20">24/7 Dispatch</span>
                                </div>
                            </div>
                        </div>

                        {/* Email */}
                        <div className="group relative overflow-hidden rounded-2xl bg-background p-8 border shadow-sm hover:shadow-xl transition-all duration-300">


                            <div className="relative">
                                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary mb-6 group-hover:scale-110 transition-transform">
                                    <Mail className="h-6 w-6" />
                                </div>
                                <h3 className="text-xl font-bold mb-2">Email Us</h3>
                                <p className="text-muted-foreground mb-6 h-12">
                                    For quotes, include lanes, weight, and timing for the fastest response.
                                </p>

                                <a href="mailto:info@freighthunt.us" className="text-xl font-bold text-primary hover:underline flex items-center gap-2">
                                    info@freighthunt.us
                                </a>

                                <div className="mt-4">
                                    <p className="text-sm text-muted-foreground">
                                        <span className="font-medium text-foreground">Response time:</span> Fast response guaranteed
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Location */}
                        <div className="group relative overflow-hidden rounded-2xl bg-background p-8 border shadow-sm hover:shadow-xl transition-all duration-300">

                            <div className="relative">
                                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary mb-6 group-hover:scale-110 transition-transform">
                                    <Clock className="h-6 w-6" />
                                </div>
                                <h3 className="text-xl font-bold mb-2">Office & Hours</h3>
                                <p className="text-muted-foreground mb-6 h-12">
                                    <span className="block text-foreground font-medium">Headquarters</span>
                                    11701 Sky Blue Ct, Haslet, TX 76052
                                </p>

                                <div className="space-y-2">
                                    <div className="flex items-center gap-2 text-sm">
                                        <div className="h-2 w-2 rounded-full bg-primary animate-pulse"></div>
                                        <span className="font-medium">24/7 Dispatch Operations</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                        <div className="h-2 w-2 rounded-full bg-muted-foreground/30"></div>
                                        <span>Office: Mon-Fri 7am-7pm CST</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main >
    )
}
