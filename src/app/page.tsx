"use client";

import { motion } from "framer-motion";
import GlowButton from "@/components/GlowButton";
import WaveformBackdrop from "@/components/WaveformBackdrop";
import { products } from "@/lib/products";
import ProductCard from "@/components/ProductCard";

export default function HomePage() {
  return (
    <div>
      <section className="relative overflow-hidden px-6 pb-20 pt-16 md:px-12">
        <WaveformBackdrop />
        <motion.div
          className="absolute inset-0 -z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
        />
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-10">
          <div className="flex flex-col gap-6">
            <p className="text-xs uppercase tracking-[0.5em] text-arctic-cyan">Arctic Audio</p>
            <h1 className="text-4xl font-semibold tracking-tight md:text-6xl">ARCTIC AUDIO</h1>
            <p className="max-w-2xl text-lg text-white/80 md:text-xl">
              Precision in Every Frequency.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <GlowButton href="/products" label="Explore Plugins" />
              <GlowButton href="/products" label="Listen to Demos" variant="secondary" />
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {products.slice(0, 3).map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:px-12">
        <div className="mx-auto w-full max-w-6xl">
          <div className="glass rounded-panel p-8">
            <h2 className="section-title">Sculpted for elite engineers</h2>
            <p className="mt-4 text-white/70">
              Arctic Audio plugins combine surgical control with musical warmth. Every processor is tuned
              for modern studios, immersive mixes, and cinematic clarity.
            </p>
            <div className="mt-6 grid gap-4 text-sm text-white/70">
              <div className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-arctic-cyan shadow-glow" />
                Ultra-low CPU footprint with oversampling options.
              </div>
              <div className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-arctic-cyan shadow-glow" />
                Precision metering built for mastering workflows.
              </div>
              <div className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-arctic-cyan shadow-glow" />
                Adaptive UI scaling for every studio display.
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
