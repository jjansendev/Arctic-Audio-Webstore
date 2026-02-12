const CHARS = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";

export function generateLicenseKey(seed: string) {
  const base = seed.toUpperCase().replace(/[^A-Z0-9]/g, "");
  let key = "";
  for (let i = 0; i < 20; i += 1) {
    const index = (base.charCodeAt(i % base.length) + i * 7) % CHARS.length;
    key += CHARS[index];
  }
  return key.match(/.{1,5}/g)?.join("-") ?? key;
}
