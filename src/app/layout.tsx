import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: {
    default: "Arctic Audio | Precision in Every Frequency",
    template: "%s | Arctic Audio"
  },
  description: "Premium boutique VST plugins engineered for pristine clarity and musical depth.",
  metadataBase: new URL("https://arcticaudio.example"),
  openGraph: {
    title: "Arctic Audio",
    description: "Precision in Every Frequency.",
    type: "website"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
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
