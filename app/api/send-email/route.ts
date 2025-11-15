import { NextRequest, NextResponse } from 'next/server';
import { ContactFormSchema } from '@/lib/schemas';
import { Resend } from 'resend';
import ContactFormEmail from '@/emails/contact-form-email';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const result = ContactFormSchema.safeParse(body);
    if (!result.success) {
      return NextResponse.json({ error: result.error.format() }, { status: 400 });
    }
    const { name, email, message } = result.data;
    const { data, error } = await resend.emails.send({
      from: 'contact@juliavorobiova.com',
      to: ['contact@juliavorobiova.com'],
      reply_to: email,
      subject: 'Contact form submission',
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
    });
    console.log('Resend API response:', { data, error });
    if (!data || error) {
      throw new Error('Failed to send email');
    }
    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error('Send email error:', error, error?.message, error?.response?.data);
    return NextResponse.json({ 
      error: error?.message || error?.toString() || 'Failed to send email', 
      details: error?.response?.data || null 
    }, { status: 500 });
  }
}
