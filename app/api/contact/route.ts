import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY || 're_123');

export async function POST(request: Request) {
    try {
        const apiKey = process.env.RESEND_API_KEY;

        // Check if API key is loaded
        if (!apiKey || apiKey.startsWith('re_123')) {
            console.error('RESEND_API_KEY is missing or invalid. Did you restart the server after updating .env.local?');
            return NextResponse.json({ error: 'Server configuration error: Missing API Key' }, { status: 500 });
        }

        const body = await request.json();
        const { firstName, lastName, email, company, phone, service, message } = body;

        console.log('Attempting to send email via Resend...');

        const { data, error } = await resend.emails.send({
            from: 'ViaNew Contact Form <onboarding@resend.dev>',
            to: ['avigupt@gmail.com'],
            subject: `New Inquiry: ${service} - ${company}`,
            html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Service of Interest:</strong> ${service}</p>
        <br/>
        <h3>Message:</h3>
        <p>${message.replace(/\n/g, '<br/>')}</p>
      `,
        });

        if (error) {
            console.error('Resend API Error:', error);
            return NextResponse.json({ error: `Email Provider Error: ${error.message}` }, { status: 400 });
        }

        console.log('Email sent successfully:', data);
        return NextResponse.json({ message: 'Email sent successfully', data }, { status: 200 });
    } catch (error) {
        console.error('Detailed Server Error:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
