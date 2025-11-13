import { NextRequest, NextResponse } from "next/server";
import sgMail from "@sendgrid/mail";
export const runtime = 'nodejs';

sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

export async function POST(req: NextRequest) {
  try {
    const { firstName, lastName, email, phone, serviceType, date, message, type } = await req.json();

    if (!firstName || !email || !phone || !serviceType) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const isBooking = type === "bokning";
    const requestType = isBooking ? "Booking" : "Quote";
    const requestTypeSwedish = isBooking ? "Bokning" : "Offert";

    // --- Email to your inbox ---
    const adminMsg = {
      to: process.env.EMAIL_TO!,
      from: process.env.EMAIL_FROM!,
      replyTo: email,
      subject: `Ny ${requestTypeSwedish} förfågan från ${firstName} ${lastName}`,
      html: `
        <h2>You have received a new ${requestTypeSwedish.toLowerCase()}</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Service Type:</strong> ${serviceType}</p>
        ${date ? `<p><strong>Preferred Date:</strong> ${date}</p>` : ''}
        ${message ? `<p><strong>Message:</strong><br/>${message}</p>` : ''}
        <p><strong>Request Type:</strong> ${requestType}</p>
      `,
    };

    // --- Confirmation email to user ---
    const userMsg = {
      to: email,
      from: process.env.EMAIL_FROM!,
      subject: `Din ${requestTypeSwedish.toLowerCase()}förfrågan har mottagits ✅`,
      html: `
        <p>Hej ${firstName},</p>
        <p>Tack för att du kontaktar oss! Vi har mottagit din ${requestTypeSwedish.toLowerCase()}förfrågan för <strong>${serviceType}</strong>.</p>
        ${date ? `<p><strong>Önskat datum:</strong> ${date}</p>` : ''}
        ${message ? `<p><strong>Ditt meddelande:</strong><br/>${message}</p>` : ''}
        <p>Vi återkommer till dig inom 24 timmar.</p>
        <p>Med vänliga hälsningar,<br/>Crystal Cleans & Co</p>
      `,
    };

    await Promise.all([sgMail.send(adminMsg), sgMail.send(userMsg)]);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}