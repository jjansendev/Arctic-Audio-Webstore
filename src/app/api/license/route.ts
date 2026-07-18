import { NextResponse } from "next/server";
import { generateLicenseKey } from "@/lib/license";

export async function POST(request: Request) {
  const body = await request.json().catch(() => ({ email: "" }));
  const email = typeof body.email === "string" ? body.email : "";

  return NextResponse.json({
      license: generateLicenseKey(email || "GLACIALAUDIO")
  });
}
