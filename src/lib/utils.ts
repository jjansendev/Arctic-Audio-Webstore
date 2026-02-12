import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import crypto from "crypto";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPrice(cents: number, currency = "USD"): string {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
  });
  return formatter.format(cents / 100);
}

export function generateLicenseKey(): string {
  const segments = 5;
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  const segmentLength = 5;
  
  const result: string[] = [];
  for (let i = 0; i < segments; i++) {
    let segment = "";
    for (let j = 0; j < segmentLength; j++) {
      // Use crypto.randomInt for cryptographically secure random numbers
      const randomIndex = crypto.randomInt(0, chars.length);
      segment += chars[randomIndex];
    }
    result.push(segment);
  }
  
  return result.join("-");
}

export function generateDownloadToken(): string {
  // Generate a cryptographically secure random token
  return crypto.randomBytes(32).toString("hex");
}

export async function hashToken(token: string): Promise<string> {
  // Use Node's built-in crypto for secure hashing
  return crypto.createHash("sha256").update(token).digest("hex");
}
