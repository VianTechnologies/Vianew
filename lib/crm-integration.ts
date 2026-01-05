// CRM Integration Utilities
// This file provides integration helpers for HubSpot, Salesforce, and other CRMs

interface LeadData {
  firstName: string;
  lastName: string;
  email: string;
  company?: string;
  jobTitle?: string;
  phone?: string;
  source?: string;
  message?: string;
  consent?: boolean;
}

// HubSpot Integration
export class HubSpotIntegration {
  private apiKey: string;
  private portalId: string;

  constructor(apiKey?: string, portalId?: string) {
    this.apiKey = apiKey || process.env.NEXT_PUBLIC_HUBSPOT_API_KEY || '';
    this.portalId = portalId || process.env.NEXT_PUBLIC_HUBSPOT_PORTAL_ID || '';
  }

  async createContact(data: LeadData) {
    const endpoint = `https://api.hubapi.com/crm/v3/objects/contacts`;
    
    const payload = {
      properties: {
        email: data.email,
        firstname: data.firstName,
        lastname: data.lastName,
        company: data.company,
        jobtitle: data.jobTitle,
        phone: data.phone,
        hs_lead_status: 'NEW',
        lifecyclestage: 'lead',
      },
    };

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.apiKey}`,
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error(`HubSpot API error: ${response.statusText}`);
      }

      return await response.json();
    } catch (error) {
      console.error('HubSpot integration error:', error);
      throw error;
    }
  }

  async submitForm(formGuid: string, data: LeadData) {
    const endpoint = `https://api.hsforms.com/submissions/v3/integration/submit/${this.portalId}/${formGuid}`;
    
    const fields = Object.entries(data).map(([name, value]) => ({
      name,
      value: String(value),
    }));

    const payload = {
      fields,
      context: {
        pageUri: typeof window !== 'undefined' ? window.location.href : '',
        pageName: typeof document !== 'undefined' ? document.title : '',
      },
    };

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error(`HubSpot form submission error: ${response.statusText}`);
      }

      return await response.json();
    } catch (error) {
      console.error('HubSpot form submission error:', error);
      throw error;
    }
  }
}

// Salesforce Integration
export class SalesforceIntegration {
  private instanceUrl: string;
  private accessToken: string;

  constructor(instanceUrl?: string, accessToken?: string) {
    this.instanceUrl = instanceUrl || process.env.NEXT_PUBLIC_SALESFORCE_INSTANCE_URL || '';
    this.accessToken = accessToken || process.env.NEXT_PUBLIC_SALESFORCE_ACCESS_TOKEN || '';
  }

  async createLead(data: LeadData) {
    const endpoint = `${this.instanceUrl}/services/data/v58.0/sobjects/Lead`;
    
    const payload = {
      FirstName: data.firstName,
      LastName: data.lastName,
      Email: data.email,
      Company: data.company || 'Unknown',
      Title: data.jobTitle,
      Phone: data.phone,
      LeadSource: data.source || 'Website',
      Description: data.message,
      Status: 'New',
    };

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.accessToken}`,
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error(`Salesforce API error: ${response.statusText}`);
      }

      return await response.json();
    } catch (error) {
      console.error('Salesforce integration error:', error);
      throw error;
    }
  }
}

// Generic CRM webhook integration
export async function sendToWebhook(webhookUrl: string, data: LeadData) {
  try {
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...data,
        timestamp: new Date().toISOString(),
      }),
    });

    if (!response.ok) {
      throw new Error(`Webhook error: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Webhook error:', error);
    throw error;
  }
}

// Main CRM handler that routes to appropriate service
export async function submitLeadToCRM(data: LeadData, crmType: 'hubspot' | 'salesforce' | 'webhook' = 'hubspot') {
  try {
    switch (crmType) {
      case 'hubspot':
        const hubspot = new HubSpotIntegration();
        return await hubspot.createContact(data);
      
      case 'salesforce':
        const salesforce = new SalesforceIntegration();
        return await salesforce.createLead(data);
      
      case 'webhook':
        const webhookUrl = process.env.NEXT_PUBLIC_CRM_WEBHOOK_URL || '';
        return await sendToWebhook(webhookUrl, data);
      
      default:
        throw new Error('Unsupported CRM type');
    }
  } catch (error) {
    console.error('CRM submission error:', error);
    // Fallback: Store in database or queue for retry
    return null;
  }
}

// Email notification service (for immediate follow-up)
export async function sendEmailNotification(data: LeadData) {
  // This would integrate with SendGrid, AWS SES, or similar
  const endpoint = '/api/send-email'; // Your email API endpoint
  
  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        to: data.email,
        from: 'info@ddenterprise.com',
        subject: 'Thank you for your interest in DD Enterprise',
        type: 'lead_confirmation',
        data,
      }),
    });

    return response.ok;
  } catch (error) {
    console.error('Email notification error:', error);
    return false;
  }
}

