import { NextResponse } from 'next/server'

export async function POST(request: Request) {
    try {
        const body = await request.json()
        const { name, email, phone, cargoType, service, origin, destination, notes } = body

        // Validate required fields
        if (!name || !email || !phone || !cargoType || !origin || !destination) {
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            )
        }

        // Here you would typically:
        // 1. Send an email using a service like SendGrid, Resend, or Nodemailer
        // 2. Store the submission in a database
        // 3. Send to a CRM system

        // For now, we'll just log it and return success
        console.log('Contact form submission:', {
            name,
            email,
            phone,
            cargoType,
            service,
            origin,
            destination,
            notes,
            timestamp: new Date().toISOString()
        })

        // TODO: Implement email sending
        // Example with Resend:
        // await resend.emails.send({
        //   from: 'noreply@freighthunt.us',
        //   to: 'info@freighthunt.us',
        //   subject: 'New Freight Quote Request',
        //   html: `
        //     <h2>New Quote Request</h2>
        //     <p><strong>Name:</strong> ${name}</p>
        //     <p><strong>Email:</strong> ${email}</p>
        //     <p><strong>Phone:</strong> ${phone}</p>
        //     <p><strong>Cargo Type:</strong> ${cargoType}</p>
        //     <p><strong>Service:</strong> ${service || 'Not specified'}</p>
        //     <p><strong>Origin:</strong> ${origin}</p>
        //     <p><strong>Destination:</strong> ${destination}</p>
        //     <p><strong>Notes:</strong> ${notes || 'None'}</p>
        //   `
        // })

        return NextResponse.json(
            { message: 'Form submitted successfully' },
            { status: 200 }
        )
    } catch (error) {
        console.error('Contact form error:', error)
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        )
    }
}
