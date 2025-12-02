import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    // Validate input
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // Send email using Resend
    const RESEND_API_KEY = process.env.RESEND_API_KEY;

    if (!RESEND_API_KEY) {
      // Fallback: Log to console in development
      console.log("=== CONTACT FORM SUBMISSION ===");
      console.log("From:", name, `<${email}>`);
      console.log("Message:", message);
      console.log("================================");

      return NextResponse.json(
        {
          success: true,
          message: "Email service not configured. Message logged to console.",
        },
        { status: 200 }
      );
    }

    // Use Resend API to send email
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Portfolio Contact <onboarding@resend.dev>", // You'll need to verify your domain
        to: ["mohamed.mahran220@gmail.com"],
        replyTo: email,
        subject: `New Contact Form Message from ${name}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #00f0ff;">New Contact Form Submission</h2>
            <div style="background: #1a1a1a; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <p style="color: #ffffff; margin: 10px 0;"><strong>From:</strong> ${name}</p>
              <p style="color: #ffffff; margin: 10px 0;"><strong>Email:</strong> <a href="mailto:${email}" style="color: #00f0ff;">${email}</a></p>
              <div style="margin-top: 20px;">
                <p style="color: #ffffff; margin-bottom: 10px;"><strong>Message:</strong></p>
                <p style="color: #cccccc; white-space: pre-wrap; line-height: 1.6;">${message}</p>
              </div>
            </div>
          </div>
        `,
        text: `
New Contact Form Submission

From: ${name}
Email: ${email}

Message:
${message}
        `,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Failed to send email");
    }

    const data = await response.json();

    return NextResponse.json(
      { success: true, message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      {
        error: "Failed to send message. Please try again later.",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
