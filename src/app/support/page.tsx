"use client";

import { useState } from "react";
import GlowButton from "@/components/GlowButton";

const faqs = [
  {
    question: "What formats are supported?",
    answer: "All Glacial Audio plugins are available in VST3, AU (Audio Units), and AAX formats for maximum compatibility with your DAW."
  },
  {
    question: "What are the system requirements?",
    answer: "Glacial Audio plugins require macOS 12+ or Windows 10+ (64-bit). An iLok account is not required - we use simple email-based licensing."
  },
  {
    question: "How does licensing work?",
    answer: "Each license allows installation on up to 2 computers simultaneously. You can deactivate and reactivate on different machines at any time through your account."
  },
  {
    question: "Can I try before I buy?",
    answer: "All products include audio demos on their product pages. We also offer a 30-day money-back guarantee if the plugin doesn't meet your expectations."
  },
  {
    question: "How do I download my purchases?",
    answer: "After purchase, you'll receive an email with download links and license keys. You can also access your purchases anytime from your account page."
  },
  {
    question: "Do you offer educational discounts?",
    answer: "Yes! Students and educators receive 40% off. Contact us with proof of enrollment or employment for a discount code."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards, debit cards, and various local payment methods through our secure Stripe integration."
  },
  {
    question: "Can I use Glacial Audio plugins commercially?",
    answer: "Absolutely! All licenses include full commercial use rights for music production, sound design, broadcasting, and more."
  }
];

export default function SupportPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="px-6 py-16 md:px-12">
      <div className="mx-auto w-full max-w-4xl">
        <div className="mb-10 space-y-4">
          <p className="text-xs uppercase tracking-[0.5em] text-white/50">Support</p>
          <h1 className="text-3xl font-semibold md:text-5xl">Frequently Asked Questions</h1>
          <p className="max-w-2xl text-white/70">
            Find answers to common questions about our products, licensing, and support.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="glass rounded-panel overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full p-6 text-left flex items-center justify-between hover:bg-white/5 transition"
                aria-expanded={openIndex === index}
              >
                <span className="font-semibold">{faq.question}</span>
                <span className="text-2xl text-arctic-cyan">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6 text-white/70">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact Form */}
        <div className="glass rounded-panel p-8 mt-12">
          <h2 className="text-2xl font-semibold mb-4">Still Have Questions?</h2>
          <p className="text-white/70 mb-6">
            Can&apos;t find what you&apos;re looking for? Send us a message and we&apos;ll get back to you within 24 hours.
          </p>
          <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert('Contact form submitted! In production, this would send an email.'); }}>
            <div className="grid gap-4 md:grid-cols-2">
              <input
                type="text"
                placeholder="Name"
                className="rounded-panel border border-white/10 bg-black/30 px-4 py-3 text-sm text-white placeholder:text-white/40"
                aria-label="Name"
              />
              <input
                type="email"
                placeholder="Email"
                className="rounded-panel border border-white/10 bg-black/30 px-4 py-3 text-sm text-white placeholder:text-white/40"
                aria-label="Email"
              />
            </div>
            <input
              type="text"
              placeholder="Subject"
              className="w-full rounded-panel border border-white/10 bg-black/30 px-4 py-3 text-sm text-white placeholder:text-white/40"
              aria-label="Subject"
            />
            <textarea
              placeholder="Your message"
              rows={6}
              className="w-full rounded-panel border border-white/10 bg-black/30 px-4 py-3 text-sm text-white placeholder:text-white/40"
              aria-label="Message"
            />
            <button type="submit" className="btn-primary">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
