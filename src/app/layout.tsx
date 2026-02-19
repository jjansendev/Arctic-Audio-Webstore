import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Glacial Audio | Precision in Every Frequency",
    template: "%s | Glacial Audio"
  },
  description: "Premium boutique VST plugins engineered for pristine clarity and musical depth.",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://arcticaudio.example"),
  openGraph: {
    title: "Glacial Audio",
    description: "Precision in Every Frequency.",
    type: "website"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="relative min-h-screen overflow-hidden">
          <Header />
          <main className="relative z-10">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
