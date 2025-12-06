# Email Service Setup

This project uses Nodemailer for sending contact form emails via SMTP.

## Configuration

### .env.local.example

```bash
# Email Configuration (Nodemailer)

# Option 1: Gmail (requires App Password)
# https://support.google.com/accounts/answer/185833
# SMTP_HOST=smtp.gmail.com
# SMTP_PORT=587
# SMTP_SECURE=false
# SMTP_USER=your-email@gmail.com
# SMTP_PASS=your-app-password
# SMTP_FROM=your-email@gmail.com

# Option 2: Zoho Mail (RECOMMENDED FOR BUSINESS)
# Use your Zoho Mail credentials or App Password for better security
SMTP_HOST=smtp.zoho.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=info@freighthunt.us
SMTP_PASS=your-zoho-password
SMTP_FROM=info@freighthunt.us

# Recipient email for contact form submissions
CONTACT_EMAIL=info@freighthunt.us
```

### 1. Copy Environment File

```bash
cp .env.local.example .env.local
```

### 2. Configure SMTP Settings

Edit `.env.local` with your email provider settings:

#### **Option 1: Zoho Mail** ⭐ RECOMMENDED FOR BUSINESS

```env
SMTP_HOST=smtp.zoho.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=info@freighthunt.us
SMTP_PASS=your-zoho-password
SMTP_FROM=info@freighthunt.us
CONTACT_EMAIL=info@freighthunt.us
```

**For better security, use App Password:**
1. Log into Zoho Mail
2. Go to **Settings** → **Security** → **App Passwords**
3. Generate a new App Password for "Freight Hunt Website"
4. Use that password in `SMTP_PASS`

**Why Zoho?**
- ✅ Professional email with your domain
- ✅ Better deliverability than Gmail
- ✅ No "sent from Gmail" warnings
- ✅ Designed for business use
- ✅ More reliable for automated emails

#### **Option 2: Gmail**

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
SMTP_FROM=your-email@gmail.com
CONTACT_EMAIL=info@freighthunt.us
```

**Setup:**
1. Enable 2-factor authentication on your Google account
2. Generate an App Password: https://support.google.com/accounts/answer/185833
3. Use the App Password (not your regular password) in `SMTP_PASS`

#### **Option 3: Other SMTP Providers**

Update the following variables with your provider's settings:
- `SMTP_HOST` - Your SMTP server hostname
- `SMTP_PORT` - Usually 587 for TLS or 465 for SSL
- `SMTP_SECURE` - Set to `true` for port 465, `false` for port 587
- `SMTP_USER` - Your email address
- `SMTP_PASS` - Your email password or app password
- `SMTP_FROM` - Email address to send from
- `CONTACT_EMAIL` - Where form submissions should be sent

