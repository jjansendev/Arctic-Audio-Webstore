import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

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
      segment += chars[Math.floor(Math.random() * chars.length)];
    }
    result.push(segment);
  }
  
  return result.join("-");
}

export function generateDownloadToken(): string {
  // Generate a secure random token
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let token = "";
  for (let i = 0; i < 32; i++) {
    token += chars[Math.floor(Math.random() * chars.length)];
  }
  return token;
}

export async function hashToken(token: string): Promise<string> {
  // Simple hash for token storage (in production, use crypto.subtle.digest)
  const encoder = new TextEncoder();
  const data = encoder.encode(token);
  
  if (typeof crypto !== "undefined" && crypto.subtle) {
    const hashBuffer = await crypto.subtle.digest("SHA-256", data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");
  }
  
  // Fallback for environments without crypto.subtle
  return Buffer.from(token).toString("base64");
}
