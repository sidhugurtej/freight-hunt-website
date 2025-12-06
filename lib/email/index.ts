// Email service factory
import type { EmailService } from './email-service'
import { NodemailerService } from './nodemailer-service'

let emailServiceInstance: EmailService | null = null

export function getEmailService(): EmailService {
    if (!emailServiceInstance) {
        emailServiceInstance = new NodemailerService()
    }

    return emailServiceInstance
}

// Export for convenience
export type { EmailService, EmailData } from './email-service'
