// Nodemailer implementation of EmailService
import nodemailer from 'nodemailer'
import type { EmailService, EmailData } from './email-service'
import { generateContactEmailHTML, generateContactEmailText } from './email-service'

export class NodemailerService implements EmailService {
    private transporter: nodemailer.Transporter

    constructor() {
        // Configure nodemailer transporter
        // For production, use environment variables
        this.transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST || 'smtp.gmail.com',
            port: parseInt(process.env.SMTP_PORT || '587'),
            secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        })
    }

    async sendContactForm(data: EmailData): Promise<void> {
        const mailOptions = {
            from: `"Freight Hunt Contact Form" <${process.env.SMTP_FROM || process.env.SMTP_USER}>`,
            to: process.env.CONTACT_EMAIL || 'info@freighthunt.us',
            replyTo: data.email,
            subject: `New Quote Request from ${data.name}`,
            text: generateContactEmailText(data),
            html: generateContactEmailHTML(data),
        }

        await this.transporter.sendMail(mailOptions)
    }

    // Test connection (useful for debugging)
    async verifyConnection(): Promise<boolean> {
        try {
            await this.transporter.verify()
            return true
        } catch (error) {
            console.error('SMTP connection failed:', error)
            return false
        }
    }
}
