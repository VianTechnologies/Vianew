# DD Enterprise Website - Setup Guide

## ⚠️ Important: Node.js Version Requirement

This project requires **Node.js 18.17.0 or higher**. Your current version is 12.18.0.

### Upgrading Node.js

#### Option 1: Using NVM (Recommended)

```bash
# Install NVM if you don't have it
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash

# Close and reopen terminal, then install Node 18
nvm install 18
nvm use 18
nvm alias default 18

# Verify installation
node --version  # Should show v18.x.x or higher
```

#### Option 2: Using Homebrew (macOS)

```bash
# Update Homebrew
brew update

# Install Node.js 18
brew install node@18

# Link it
brew link node@18 --force --overwrite

# Verify installation
node --version
```

#### Option 3: Direct Download

Download and install from [nodejs.org](https://nodejs.org/) - choose the LTS version (v18 or higher)

## Installation Steps

Once you have Node.js 18+ installed:

### 1. Install Dependencies

```bash
cd /Users/avijit/Documents/ddenterprise
npm install
```

### 2. Configure Environment

Create a `.env.local` file in the project root:

```bash
touch .env.local
```

Add your configuration (see .env.example for all options):

```env
# Choose your CRM
NEXT_PUBLIC_CRM_TYPE=hubspot

# HubSpot Configuration (if using HubSpot)
NEXT_PUBLIC_HUBSPOT_API_KEY=your_api_key_here
NEXT_PUBLIC_HUBSPOT_PORTAL_ID=your_portal_id_here

# Or use Salesforce
# NEXT_PUBLIC_CRM_TYPE=salesforce
# NEXT_PUBLIC_SALESFORCE_INSTANCE_URL=https://your-instance.salesforce.com
# NEXT_PUBLIC_SALESFORCE_ACCESS_TOKEN=your_token

# Or use a webhook for other CRMs
# NEXT_PUBLIC_CRM_TYPE=webhook
# NEXT_PUBLIC_CRM_WEBHOOK_URL=https://your-webhook-url.com
```

### 3. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Build for Production

```bash
npm run build
npm run start
```

## Project Features

✅ **Complete Website Built**
- Modern, responsive homepage with hero section, services overview, and CTAs
- Service pages for all offerings (Data Governance, Process Mapping, Integration, Analytics)
- Reports section with lead capture forms
- Books section with lead capture forms
- Dynamic landing page system
- Contact form
- About page
- Resources hub
- Case studies showcase
- Blog listing

✅ **Lead Generation System**
- Lead capture modals for reports and books
- Contact forms
- Landing page templates
- CRM integration ready (HubSpot, Salesforce, Webhook)

✅ **Professional Design**
- Beautiful, modern UI with Tailwind CSS
- Smooth animations with Framer Motion
- Fully responsive across all devices
- SEO optimized

## CRM Integration

### HubSpot Setup

1. Log in to HubSpot
2. Go to Settings → Integrations → API Key
3. Create a Private App or get API key
4. Add credentials to `.env.local`
5. Forms will automatically sync to HubSpot

### Salesforce Setup

1. Create a Connected App in Salesforce
2. Get OAuth credentials
3. Add to `.env.local`
4. Leads will be created automatically

### Custom Webhook

For other CRMs (Pipedrive, Zoho, etc.):
1. Set up a webhook endpoint in your CRM
2. Add URL to `.env.local`
3. Leads will be posted as JSON

## Customization

### Branding
- Update colors in `tailwind.config.ts`
- Replace logo placeholders in `components/Navbar.tsx` and `components/Footer.tsx`

### Content
- Edit service pages in `app/services/`
- Update reports in `app/reports/page.tsx`
- Update books in `app/books/page.tsx`
- Modify homepage sections in `components/home/`

### Landing Pages
Add new landing pages in `app/landing/[slug]/page.tsx`:

```typescript
const landingPages = {
  'your-campaign': {
    title: 'Your Campaign Title',
    // ... other fields
  }
};
```

## Deployment

### Vercel (Easiest)
```bash
npm install -g vercel
vercel
```

### Other Platforms
- Netlify: Connect GitHub repo
- AWS Amplify: Use Amplify Console
- Self-hosted: Run `npm run build && npm start`

## Troubleshooting

### Port Already in Use
```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill -9

# Or use different port
PORT=3001 npm run dev
```

### Build Errors
```bash
# Clear Next.js cache
rm -rf .next
npm run build
```

### Module Not Found
```bash
# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
```

## Support

For issues or questions:
- Check Next.js docs: https://nextjs.org/docs
- Review Tailwind docs: https://tailwindcss.com/docs
- Check Framer Motion: https://www.framer.com/motion/

## What's Included

```
✅ Homepage with hero, services, stats, and CTAs
✅ 4 detailed service pages
✅ Reports download section with lead capture
✅ Books download section with lead capture
✅ Dynamic landing page system
✅ Contact form with CRM integration
✅ About page
✅ Resources hub
✅ Case studies page
✅ Blog listing
✅ Responsive navigation and footer
✅ CRM integration utilities (HubSpot/Salesforce/Webhook)
✅ Lead capture modals
✅ Professional animations
✅ SEO optimization
✅ TypeScript for type safety
✅ Comprehensive documentation
```

## Next Steps

After upgrading Node.js to version 18+:

1. Run `npm install` to install all dependencies
2. Create `.env.local` with your CRM credentials
3. Run `npm run dev` to start development server
4. Customize branding and content
5. Test all forms and lead capture
6. Deploy to your hosting platform

Need help? All code is well-documented and follows best practices!

