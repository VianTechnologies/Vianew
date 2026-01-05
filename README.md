# DrivePoint Data - Precision Data Management Solutions Website

A modern, professional website for DrivePoint Data Solutions, a strategic data management company specializing in precision-guided data governance, process mapping, integration, and analytics.

## Features

### Core Website Features
- **Modern, Responsive Design**: Built with Next.js 14, React, and Tailwind CSS
- **SEO Optimized**: Server-side rendering with optimized metadata
- **Fast Performance**: Optimized bundle sizes and lazy loading
- **Mobile-First**: Fully responsive across all devices

### Business Features
- **Services Showcase**: Detailed pages for each service offering
- **Lead Generation**: Reports and books download system with lead capture forms
- **Landing Page Builder**: Dynamic landing pages for campaigns
- **Contact Forms**: Multiple contact points for lead capture
- **CRM Integration**: Ready-to-use integrations for HubSpot, Salesforce, and webhooks
- **Resources Hub**: Reports, books, case studies, and blog content

### Technical Features
- **TypeScript**: Full type safety across the application
- **Framer Motion**: Smooth animations and transitions
- **React Icons**: Comprehensive icon library
- **Modular Architecture**: Easy to maintain and extend
- **Environment Configuration**: Easy CRM and analytics setup

## Getting Started

### Prerequisites
- Node.js 18.x or higher
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd ddenterprise
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Create environment configuration:
```bash
# Create .env.local file with your configurations
cp .env.example .env.local
```

4. Configure your environment variables in `.env.local`:
```env
# Choose your CRM type
NEXT_PUBLIC_CRM_TYPE=hubspot  # or salesforce, webhook

# HubSpot Configuration (if using HubSpot)
NEXT_PUBLIC_HUBSPOT_API_KEY=your_api_key
NEXT_PUBLIC_HUBSPOT_PORTAL_ID=your_portal_id
NEXT_PUBLIC_HUBSPOT_FORM_GUID=your_form_guid

# Salesforce Configuration (if using Salesforce)
NEXT_PUBLIC_SALESFORCE_INSTANCE_URL=https://your-instance.salesforce.com
NEXT_PUBLIC_SALESFORCE_ACCESS_TOKEN=your_token

# Generic Webhook (for other CRMs)
NEXT_PUBLIC_CRM_WEBHOOK_URL=https://your-webhook-url.com/lead

# Google Analytics (optional)
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

5. Run the development server:
```bash
npm run dev
# or
yarn dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
ddenterprise/
├── app/                          # Next.js app directory
│   ├── about/                    # About page
│   ├── blog/                     # Blog listing
│   ├── books/                    # Books with lead capture
│   ├── case-studies/             # Case studies
│   ├── contact/                  # Contact form
│   ├── landing/[slug]/          # Dynamic landing pages
│   ├── reports/                  # Reports with lead capture
│   ├── resources/                # Resources hub
│   ├── services/                 # Services pages
│   │   ├── data-governance/
│   │   ├── data-integration/
│   │   ├── data-analytics/
│   │   └── process-mapping/
│   ├── globals.css              # Global styles
│   ├── layout.tsx               # Root layout
│   └── page.tsx                 # Homepage
├── components/                   # React components
│   ├── home/                    # Homepage sections
│   ├── landing/                 # Landing page components
│   ├── Footer.tsx               # Site footer
│   ├── LeadCaptureModal.tsx    # Lead capture modal
│   └── Navbar.tsx               # Navigation bar
├── lib/                         # Utility libraries
│   └── crm-integration.ts       # CRM integration utilities
├── public/                      # Static assets
├── .gitignore
├── next.config.mjs              # Next.js configuration
├── package.json                 # Dependencies
├── postcss.config.mjs           # PostCSS configuration
├── tailwind.config.ts           # Tailwind CSS configuration
└── tsconfig.json                # TypeScript configuration
```

## CRM Integration

The website includes ready-to-use CRM integrations for lead capture and management.

### HubSpot Integration

1. Get your API key and Portal ID from HubSpot
2. Configure in `.env.local`
3. The system will automatically send leads to HubSpot when forms are submitted

### Salesforce Integration

1. Set up OAuth2 credentials in Salesforce
2. Get your instance URL and access token
3. Configure in `.env.local`
4. Leads will be created automatically as new Lead objects

### Custom Webhook

For other CRMs (Pipedrive, Zoho, etc.), use the webhook option:
1. Set up a webhook endpoint in your CRM
2. Add the webhook URL to `.env.local`
3. Leads will be posted to your webhook as JSON

### Implementation Example

```typescript
import { submitLeadToCRM } from '@/lib/crm-integration';

const leadData = {
  firstName: 'John',
  lastName: 'Doe',
  email: 'john@example.com',
  company: 'Acme Corp',
  jobTitle: 'Data Manager',
  source: 'Website Form',
};

await submitLeadToCRM(leadData, 'hubspot');
```

## Landing Pages

Create custom landing pages for campaigns by adding entries to `/app/landing/[slug]/page.tsx`:

```typescript
const landingPages = {
  'your-campaign-slug': {
    title: 'Campaign Title',
    subtitle: 'Campaign Subtitle',
    description: 'Campaign description',
    heroImage: 'bg-gradient-to-br from-blue-600 to-blue-900',
    benefits: ['Benefit 1', 'Benefit 2', 'Benefit 3'],
    cta: 'Call to Action Text',
    formFields: ['firstName', 'lastName', 'email', 'company'],
  },
};
```

Access at: `/landing/your-campaign-slug`

## Customization

### Brand Colors

Edit `tailwind.config.ts` to customize brand colors:

```typescript
colors: {
  primary: {
    // Your primary brand colors
  },
  secondary: {
    // Your secondary brand colors
  },
}
```

### Content Updates

- **Services**: Edit files in `/app/services/`
- **Reports**: Update `/app/reports/page.tsx`
- **Books**: Update `/app/books/page.tsx`
- **Case Studies**: Update `/app/case-studies/page.tsx`
- **Blog**: Update `/app/blog/page.tsx`

### Logo and Branding

Replace the logo placeholder in:
- `components/Navbar.tsx`
- `components/Footer.tsx`

## Building for Production

```bash
npm run build
npm run start
```

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in Vercel
3. Add environment variables
4. Deploy

### Other Platforms

The site can be deployed to any platform supporting Next.js:
- Netlify
- AWS Amplify
- Digital Ocean
- Self-hosted with Node.js

## Analytics Integration

Add Google Analytics or Google Tag Manager by updating `.env.local`:

```env
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
NEXT_PUBLIC_GTM_ID=GTM-XXXXXX
```

## Support and Documentation

For questions or issues:
- Review the Next.js documentation: https://nextjs.org/docs
- Check Tailwind CSS docs: https://tailwindcss.com/docs
- Review Framer Motion docs: https://www.framer.com/motion/

## License

Proprietary - DD Enterprise

## Version

1.0.0

