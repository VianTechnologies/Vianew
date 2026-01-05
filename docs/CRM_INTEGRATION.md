# CRM Integration Guide

This document explains how to integrate the DD Enterprise website with your CRM system for automatic lead capture and management.

## Supported CRMs

- **HubSpot** - Full native integration
- **Salesforce** - Full native integration  
- **Custom Webhook** - Works with any CRM (Pipedrive, Zoho, ActiveCampaign, etc.)

## Quick Start

### 1. Choose Your CRM

Set the CRM type in `.env.local`:

```env
NEXT_PUBLIC_CRM_TYPE=hubspot  # or salesforce, or webhook
```

### 2. Add Credentials

Add your CRM credentials to `.env.local` (see examples below)

### 3. Test Lead Capture

Submit any form on your website - leads will automatically be sent to your CRM!

## HubSpot Integration

### Setup Steps

1. **Create a Private App in HubSpot**
   - Go to Settings → Integrations → Private Apps
   - Click "Create a private app"
   - Give it a name: "DD Enterprise Website"
   - Under Scopes, select:
     - `crm.objects.contacts.write`
     - `crm.objects.contacts.read`
     - `forms`
   - Click "Create app"
   - Copy the access token

2. **Get Your Portal ID**
   - Go to Settings → Account Setup → Account Defaults
   - Copy your Hub ID (Portal ID)

3. **Configure Environment**

```env
NEXT_PUBLIC_CRM_TYPE=hubspot
NEXT_PUBLIC_HUBSPOT_API_KEY=pat-na1-xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
NEXT_PUBLIC_HUBSPOT_PORTAL_ID=12345678
```

### Usage Example

```typescript
import { HubSpotIntegration } from '@/lib/crm-integration';

const hubspot = new HubSpotIntegration();

await hubspot.createContact({
  firstName: 'John',
  lastName: 'Doe',
  email: 'john@example.com',
  company: 'Acme Corp',
  jobTitle: 'Data Manager',
  phone: '+1-555-123-4567',
});
```

### What Gets Created

When a lead is captured, HubSpot will create:
- A new Contact (or update if exists)
- Lifecycle stage set to "Lead"
- Lead status set to "New"
- All form fields mapped to contact properties

### HubSpot Form Submission

If you prefer using HubSpot's form API:

```typescript
await hubspot.submitForm('form-guid-here', leadData);
```

## Salesforce Integration

### Setup Steps

1. **Create a Connected App**
   - Go to Setup → Apps → App Manager
   - Click "New Connected App"
   - Fill in basic information
   - Enable OAuth Settings
   - Select OAuth Scopes:
     - `api` - Access and manage your data
     - `refresh_token` - Perform requests on your behalf at any time
   - Save and get Consumer Key and Secret

2. **Get Access Token**
   - Use OAuth 2.0 flow to get access token
   - Or use username-password flow for simplicity
   - Store the token securely

3. **Configure Environment**

```env
NEXT_PUBLIC_CRM_TYPE=salesforce
NEXT_PUBLIC_SALESFORCE_INSTANCE_URL=https://yourcompany.my.salesforce.com
NEXT_PUBLIC_SALESFORCE_ACCESS_TOKEN=00D...
NEXT_PUBLIC_SALESFORCE_CLIENT_ID=3MVG9...
NEXT_PUBLIC_SALESFORCE_CLIENT_SECRET=12345...
```

### Usage Example

```typescript
import { SalesforceIntegration } from '@/lib/crm-integration';

const salesforce = new SalesforceIntegration();

await salesforce.createLead({
  firstName: 'Jane',
  lastName: 'Smith',
  email: 'jane@example.com',
  company: 'Tech Corp',
  jobTitle: 'CTO',
  phone: '+1-555-987-6543',
  source: 'Website - Report Download',
});
```

### What Gets Created

When a lead is captured, Salesforce will create:
- A new Lead object
- Status set to "New"
- Lead Source set to "Website" (or custom source)
- All form fields mapped to Lead fields

### Token Refresh

For production, implement token refresh:

```typescript
// Add to your API route
async function refreshSalesforceToken() {
  const response = await fetch('https://login.salesforce.com/services/oauth2/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      grant_type: 'refresh_token',
      client_id: process.env.SALESFORCE_CLIENT_ID,
      client_secret: process.env.SALESFORCE_CLIENT_SECRET,
      refresh_token: process.env.SALESFORCE_REFRESH_TOKEN,
    }),
  });
  
  const data = await response.json();
  return data.access_token;
}
```

## Webhook Integration (Other CRMs)

For any CRM not directly supported, use webhook integration.

### Setup Steps

1. **Create Webhook in Your CRM**
   - Most CRMs have a "Webhooks" or "API" section
   - Create a new webhook endpoint
   - Copy the webhook URL

2. **Examples by CRM:**
   
   **Pipedrive:**
   - Go to Settings → Webhooks
   - Create new webhook for "Deal" or "Person"
   - Use Zapier or Make.com to create receiving endpoint
   
   **Zoho CRM:**
   - Go to Setup → Developer Space → Webhooks
   - Create webhook URL
   - Map fields
   
   **ActiveCampaign:**
   - Go to Settings → Developer
   - Create webhook or use Forms API
   
   **Custom CRM:**
   - Create API endpoint that accepts POST requests
   - Parse JSON payload

3. **Configure Environment**

```env
NEXT_PUBLIC_CRM_TYPE=webhook
NEXT_PUBLIC_CRM_WEBHOOK_URL=https://hooks.zapier.com/hooks/catch/xxxxx/
# or
NEXT_PUBLIC_CRM_WEBHOOK_URL=https://your-api.com/api/leads
```

### Webhook Payload

Your webhook will receive this JSON payload:

```json
{
  "firstName": "John",
  "lastName": "Doe",
  "email": "john@example.com",
  "company": "Acme Corp",
  "jobTitle": "Data Manager",
  "phone": "+1-555-123-4567",
  "source": "Website Form",
  "message": "Interested in data governance services",
  "consent": true,
  "timestamp": "2025-10-12T14:30:00.000Z"
}
```

### Usage Example

```typescript
import { sendToWebhook } from '@/lib/crm-integration';

await sendToWebhook('https://your-webhook-url.com', {
  firstName: 'Bob',
  lastName: 'Johnson',
  email: 'bob@example.com',
  company: 'Industries Inc',
});
```

## Advanced Integration

### Custom Lead Processing

Add custom logic before sending to CRM:

```typescript
// In your form handler
const handleFormSubmit = async (formData) => {
  // Custom validation
  if (!isValidEmail(formData.email)) {
    throw new Error('Invalid email');
  }
  
  // Add tracking info
  const enrichedData = {
    ...formData,
    source: 'Website - Contact Form',
    campaign: getCampaignFromURL(),
    referrer: document.referrer,
    utmParams: getUTMParams(),
  };
  
  // Send to CRM
  await submitLeadToCRM(enrichedData);
  
  // Also send email notification
  await sendEmailNotification(enrichedData);
};
```

### Multiple CRM Integration

Send leads to multiple systems:

```typescript
const leadData = {
  firstName: 'Sarah',
  lastName: 'Wilson',
  email: 'sarah@example.com',
  company: 'Global Corp',
};

// Send to primary CRM
await submitLeadToCRM(leadData, 'hubspot');

// Also send to backup/analytics
await sendToWebhook('https://your-analytics.com/track', leadData);

// Send confirmation email
await sendEmailNotification(leadData);
```

### Lead Scoring

Add lead scoring logic:

```typescript
function calculateLeadScore(leadData) {
  let score = 0;
  
  // Company email = higher score
  if (leadData.email && !leadData.email.includes('gmail.com')) {
    score += 20;
  }
  
  // Job title indicates seniority
  const seniorTitles = ['ceo', 'cto', 'vp', 'director', 'manager'];
  if (seniorTitles.some(title => 
    leadData.jobTitle?.toLowerCase().includes(title)
  )) {
    score += 30;
  }
  
  // Downloaded multiple resources
  if (leadData.downloadCount > 1) {
    score += 15;
  }
  
  return score;
}

// Use when submitting
const enrichedLead = {
  ...leadData,
  leadScore: calculateLeadScore(leadData),
};
```

### Error Handling

Implement retry logic for failed submissions:

```typescript
async function submitWithRetry(leadData, maxRetries = 3) {
  for (let i = 0; i < maxRetries; i++) {
    try {
      return await submitLeadToCRM(leadData);
    } catch (error) {
      if (i === maxRetries - 1) {
        // Final failure - save to queue or notify admin
        await saveToFailureQueue(leadData);
        throw error;
      }
      // Wait before retry
      await new Promise(resolve => setTimeout(resolve, 1000 * (i + 1)));
    }
  }
}
```

## Testing CRM Integration

### Test Mode

Add a test mode to prevent sending to production CRM during development:

```env
# In .env.local
NEXT_PUBLIC_CRM_TEST_MODE=true
```

```typescript
// In crm-integration.ts
export async function submitLeadToCRM(data, crmType) {
  if (process.env.NEXT_PUBLIC_CRM_TEST_MODE === 'true') {
    console.log('TEST MODE - Would send to CRM:', data);
    return { success: true, testMode: true };
  }
  
  // Normal CRM submission
  // ...
}
```

### Testing Checklist

- [ ] Contact form submission creates lead
- [ ] Report download captures lead  
- [ ] Book download captures lead
- [ ] Landing page forms work
- [ ] All fields map correctly
- [ ] Email notifications sent
- [ ] Duplicate handling works
- [ ] Error handling works

## Monitoring & Analytics

### Track Conversion Rates

```typescript
// Add analytics tracking
const trackLeadCapture = (source) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'generate_lead', {
      event_category: 'Lead Generation',
      event_label: source,
      value: 1,
    });
  }
};

// Use in forms
await submitLeadToCRM(leadData);
trackLeadCapture('Contact Form');
```

### Dashboard Metrics

Track these metrics:
- Total leads captured
- Leads by source (form type)
- Conversion rate by page
- CRM sync success rate
- Failed submissions

## Security Best Practices

1. **Never expose API keys in client-side code**
   - Use server-side API routes for sensitive operations
   - Store credentials in environment variables

2. **Validate all input**
   - Sanitize user input before sending to CRM
   - Check for valid email formats
   - Prevent injection attacks

3. **Rate limiting**
   - Implement rate limiting on form submissions
   - Prevent spam and abuse

4. **GDPR Compliance**
   - Always get consent before storing data
   - Provide opt-out mechanisms
   - Honor data deletion requests

## Troubleshooting

### Common Issues

**"API key invalid"**
- Check that you copied the full key
- Verify key has correct permissions
- Try regenerating the key

**"Webhook not receiving data"**
- Test webhook URL with Postman
- Check webhook logs in your CRM
- Verify webhook is enabled

**"Duplicate leads created"**
- Enable duplicate detection in your CRM
- Use email as unique identifier
- Implement deduplication logic

**"Some fields not mapping"**
- Check field names match CRM fields
- Verify field types (text, number, date)
- Review CRM field permissions

### Debug Mode

Enable debug logging:

```typescript
// Set in .env.local
NEXT_PUBLIC_CRM_DEBUG=true

// Logs all CRM operations to console
```

## Need Help?

- Review your CRM's API documentation
- Check webhook logs
- Test with Postman or similar tool
- Contact your CRM support for API issues

## Summary

The DD Enterprise website includes complete CRM integration capabilities:

✅ HubSpot native integration
✅ Salesforce native integration  
✅ Generic webhook support
✅ Automatic lead capture
✅ Form validation
✅ Error handling
✅ Email notifications
✅ Easy configuration

Just add your credentials to `.env.local` and leads will automatically flow to your CRM!

