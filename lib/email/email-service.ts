// Email service abstraction layer
// This allows easy switching between email providers (Nodemailer, Resend, SendGrid, etc.)

export interface EmailData {
  name: string
  email: string
  phone: string
  cargoType: string
  service?: string
  origin: string
  destination: string
  notes?: string
}

export interface EmailService {
  sendContactForm(data: EmailData): Promise<void>
}

// Email template generator
export function generateContactEmailHTML(data: EmailData): string {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: #1e40af; color: white; padding: 20px; text-align: center; }
          .content { background: #f9fafb; padding: 20px; margin: 20px 0; }
          .field { margin: 15px 0; }
          .label { font-weight: bold; color: #1e40af; }
          .value { margin-top: 5px; }
          .footer { text-align: center; color: #6b7280; font-size: 12px; padding: 20px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>New Freight Quote Request</h1>
          </div>
          <div class="content">
            <div class="field">
              <div class="label">Name:</div>
              <div class="value">${data.name}</div>
            </div>
            <div class="field">
              <div class="label">Email:</div>
              <div class="value"><a href="mailto:${data.email}">${data.email}</a></div>
            </div>
            <div class="field">
              <div class="label">Phone:</div>
              <div class="value"><a href="tel:${data.phone}">${data.phone}</a></div>
            </div>
            <div class="field">
              <div class="label">Cargo Type:</div>
              <div class="value">${data.cargoType}</div>
            </div>
            ${data.service ? `
            <div class="field">
              <div class="label">Service Type:</div>
              <div class="value">${data.service}</div>
            </div>
            ` : ''}
            <div class="field">
              <div class="label">Origin:</div>
              <div class="value">${data.origin}</div>
            </div>
            <div class="field">
              <div class="label">Destination:</div>
              <div class="value">${data.destination}</div>
            </div>
            ${data.notes ? `
            <div class="field">
              <div class="label">Additional Notes:</div>
              <div class="value">${data.notes}</div>
            </div>
            ` : ''}
          </div>
          <div class="footer">
            <p>This email was sent from the Freight Hunt contact form</p>
            <p>Submitted at: ${new Date().toLocaleString('en-US', { timeZone: 'America/Chicago' })} CST</p>
          </div>
        </div>
      </body>
    </html>
  `
}

export function generateContactEmailText(data: EmailData): string {
  return `
      New Freight Quote Request

      Name: ${data.name}
      Email: ${data.email}
      Phone: ${data.phone}
      Cargo Type: ${data.cargoType}
      ${data.service ? `Service Type: ${data.service}` : ''}
      Origin: ${data.origin}
      Destination: ${data.destination}
      ${data.notes ? `Additional Notes: ${data.notes}` : ''}
      Submitted at: ${new Date().toLocaleString('en-US', { timeZone: 'America/Chicago' })} CST
        `.trim()
}
