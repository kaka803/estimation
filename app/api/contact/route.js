import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const body = await req.json();
    const { fullName, email, phoneNumber, serviceType, message } = body;

    // 1. Validation
    if (!fullName || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields (Name, Email, Message)" },
        { status: 400 }
      );
    }

    // 2. Transporter setup
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT),
      secure: true, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // 3. Email formatting
    const mailOptions = {
      from: `"${fullName}" <${process.env.SMTP_USER}>`, // Gmail requires sender to be the auth user or verified
      to: process.env.CONTACT_EMAIL,
      replyTo: email,
      subject: `New Contact Form Submission: ${serviceType}`,
      html: `
        <div style="font-family: sans-serif; padding: 20px; color: #333; max-width: 600px; border: 1px solid #eee; border-radius: 10px;">
          <h2 style="color: #10C79F; border-bottom: 2px solid #10C79F; padding-bottom: 10px;">New Inquiry Received</h2>
          
          <div style="margin: 20px 0;">
            <p><strong>Full Name:</strong> ${fullName}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phoneNumber || "Not provided"}</p>
            <p><strong>Service Requested:</strong> ${serviceType}</p>
          </div>
          
          <div style="background: #f9f9f9; padding: 15px; border-radius: 5px; margin-top: 20px;">
            <h3 style="margin-top: 0; font-size: 16px;">Message Body:</h3>
            <p style="white-space: pre-wrap; line-height: 1.6;">${message}</p>
          </div>
          
          <p style="margin-top: 30px; font-size: 12px; color: #999;">
            This email was sent from the contact form on Clarity Estimates.
          </p>
        </div>
      `,
    };

    // 4. Verification and Sending
    await transporter.verify();
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Nodemailer Error:", error);
    return NextResponse.json(
      { error: "Failed to send email. Please try again later." },
      { status: 500 }
    );
  }
}
