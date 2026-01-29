'use server';

import nodemailer from 'nodemailer';

export async function sendContactEmail(data: {
  fullName: string;
  phoneNumber: string;
  workEmail: string;
  helpType: string;
  projectDescription: string;
  marketingConsent: boolean;
  smsConsent: boolean;
}) {
  try {
    const transporter = nodemailer.createTransport({
      host: 'relay-hosting.secureserver.net',
      port: 25,
      secure: false,
      tls: { rejectUnauthorized: false } 
    });

    await transporter.sendMail({
     from: 'Zero One <onboarding@resend.dev>', 
      to: process.env.RECEIVER_EMAIL,
      replyTo: data.workEmail,
      subject: `New Consultation Request from ${data.fullName}`,
      text: `
Name: ${data.fullName}
Phone: ${data.phoneNumber}
Email: ${data.workEmail}
Help type: ${data.helpType}

Project / Message:
${data.projectDescription || '(no description provided)'}
      `.trim(),

      html: `
        <h2 style="color: #111;">New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${data.fullName}</p>
        <p><strong>Phone:</strong> ${data.phoneNumber}</p>
        <p><strong>Email:</strong> ${data.workEmail}</p>
        <p><strong>Help type:</strong> ${data.helpType}</p>
        <p><strong>Marketing emails OK:</strong> ${data.marketingConsent ? 'Yes' : 'No'}</p>
        <p><strong>SMS OK:</strong> ${data.smsConsent ? 'Yes' : 'No'}</p>
        <hr style="margin: 16px 0;" />
        <p><strong>Message:</strong></p>
        <p style="white-space: pre-wrap;">${data.projectDescription.replace(/\n/g, '<br>') || '—'}</p>
      `,
    });
    // console.log(html)

    return { success: true };
  } catch (error) {
    console.error('Email sending error:', error);
    return {
      success: false,
      message: 'Failed to send email. Please try again later.',
    };
  }
}