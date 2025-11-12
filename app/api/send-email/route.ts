import { NextRequest, NextResponse } from "next/server";
import sgMail from "@sendgrid/mail";
export const runtime = 'nodejs';

sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

export async function POST(req: NextRequest) {
  try {
    const { firstName, lastName, email, phone, serviceType } = await req.json();

    if (!firstName || !lastName || !email || !phone || !serviceType) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    // --- Email to your inbox ---
    const adminMsg = {
      to: process.env.EMAIL_TO!,       // your inbox
      from: process.env.EMAIL_FROM!,   // verified sender
      replyTo: email,                  // user’s email
      subject: `New Quote Request from ${firstName} ${lastName}`,
      html: `
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Service Type:</strong> ${serviceType}</p>
      `,
    };

    // --- Confirmation email to user ---
    const userMsg = {
      to: email,                       // the user
      from: process.env.EMAIL_FROM!,   // verified sender
      subject: "Your request has been received ✅",
      html: `
        <p>Hi ${firstName},</p>
        <p>Thank you for contacting us! We have received your request for <strong>${serviceType}</strong>.</p>
        <p>We will get back to you within 24 hours.</p>
        <p>Best regards,<br/>Crystal Cleans & Co</p>
      `,
    };

    // Send both emails simultaneously
    await Promise.all([sgMail.send(adminMsg), sgMail.send(userMsg)]);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
