import { NextResponse } from 'next/server'
import { getEmailService } from '@/lib/email'

export async function POST(request: Request) {
    try {
        const body = await request.json()
        const { name, email, phone, cargoType, service, origin, destination, notes } = body

        // Validate required fields
        if (!name || !email || !phone || !cargoType) {
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            )
        }

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!emailRegex.test(email)) {
            return NextResponse.json(
                { error: 'Invalid email format' },
                { status: 400 }
            )
        }

        // Get email service and send email
        const emailService = getEmailService()

        await emailService.sendContactForm({
            name,
            email,
            phone,
            cargoType,
            service,
            origin,
            destination,
            notes,
        })

        return NextResponse.json(
            { message: 'Form submitted successfully' },
            { status: 200 }
        )
    } catch (error) {
        return NextResponse.json(
            { error: 'Failed to send email. Please try again or call us directly.' },
            { status: 500 }
        )
    }
}
