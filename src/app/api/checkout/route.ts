import { NextResponse } from "next/server";

export async function POST() {
  return NextResponse.json({
    status: "ok",
    session: {
      id: "cs_test_placeholder",
      amount_total: 14900,
      currency: "usd",
      payment_status: "unpaid"
    }
  });
}
