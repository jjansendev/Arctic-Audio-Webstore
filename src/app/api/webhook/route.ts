import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
// import { prisma } from "@/lib/prisma";
import { generateDownloadToken, hashToken, generateLicenseKey } from "@/lib/utils";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "", {
  apiVersion: "2023-10-16",
});

const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET || "";

export async function POST(request: NextRequest) {
  try {
    const body = await request.text();
    const signature = request.headers.get("stripe-signature");

    if (!signature) {
      return NextResponse.json(
        { error: "Missing stripe-signature header" },
        { status: 400 }
      );
    }

    // Verify webhook signature
    let event: Stripe.Event;
    try {
      event = stripe.webhooks.constructEvent(body, signature, webhookSecret);
    } catch (err) {
      console.error("Webhook signature verification failed:", err);
      return NextResponse.json(
        { error: "Invalid signature" },
        { status: 400 }
      );
    }

    // Handle the event
    if (event.type === "checkout.session.completed") {
      const session = event.data.object as Stripe.Checkout.Session;

      // Get session details
      const sessionWithLineItems = await stripe.checkout.sessions.retrieve(
        session.id,
        {
          expand: ["line_items"],
        }
      );

      const email = session.customer_details?.email;
      if (!email) {
        console.error("No email found in session");
        return NextResponse.json({ received: true });
      }

      // TODO: Create order in database when Prisma is properly configured
      // const order = await prisma.order.create({
      //   data: {
      //     stripeSessionId: session.id,
      //     stripePaymentIntentId: session.payment_intent as string,
      //     email,
      //     status: "paid",
      //     totalCents: session.amount_total || 0,
      //     currency: session.currency || "usd",
      //   },
      // });

      console.log(`Order received: ${session.id} for ${email}`);
      console.log(`Amount: ${session.amount_total} ${session.currency}`);
      
      // TODO: Implement email delivery before production
      // Send order confirmation email with download links and license keys
      // Example:
      // const licenseKey = generateLicenseKey();
      // const resend = new Resend(process.env.RESEND_API_KEY);
      // await resend.emails.send({
      //   from: process.env.RESEND_FROM_EMAIL,
      //   to: email,
      //   subject: 'Your Glacial Audio Order',
      //   html: `Your order ${session.id} is confirmed. License: ${licenseKey}`
      // });
    }

    return NextResponse.json({ received: true });
  } catch (error) {
    console.error("Webhook error:", error);
    return NextResponse.json(
      { error: "Webhook handler failed" },
      { status: 500 }
    );
  }
}

// Disable body parsing, need raw body for signature verification
export const runtime = "nodejs";
export const dynamic = "force-dynamic";
