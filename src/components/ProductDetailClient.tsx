"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ShoppingCart, CheckCircle } from "lucide-react";
import GlowButton from "@/components/GlowButton";
import AudioPlayer from "@/components/AudioPlayer";
import RelatedProducts from "@/components/RelatedProducts";
import type { Product } from "@/lib/products";
import { productMap } from "@/lib/products";

type ProductDetailClientProps = {
  product: Product;
};

export default function ProductDetailClient({ product }: ProductDetailClientProps) {
  return (
    <div className="min-h-screen">
      {/* Breadcrumb Navigation */}
      <section className="px-6 pt-8 md:px-12">
        <div className="mx-auto w-full max-w-6xl">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-sm text-white/60 transition-colors hover:text-arctic-cyan"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Products
          </Link>
        </div>
      </section>

      {/* Header Section */}
      <section className="px-6 py-8 md:px-12">
        <div className="mx-auto w-full max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="glass rounded-panel p-8 md:p-12"
          >
            <div className="grid gap-8 lg:grid-cols-[1fr_400px]">
              {/* Left: Product Info */}
              <div className="space-y-6">
                <div className="inline-block rounded-full border border-arctic-cyan/30 bg-arctic-cyan/10 px-4 py-1 text-xs uppercase tracking-[0.3em] text-arctic-cyan">
                  {product.category}
                </div>
                <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
                  {product.name}
                </h1>
                <p className="text-lg text-white/80 md:text-xl">{product.description}</p>
                
                <div className="flex flex-wrap items-center gap-4">
                  <div className="text-4xl font-bold text-arctic-cyan">${product.price}</div>
                  {product.isBundle && (
                    <div className="rounded-full bg-gradient-to-r from-arctic-cyan/20 to-arctic-frost/10 px-4 py-1 text-sm font-semibold text-arctic-cyan">
                      Bundle • Save 25%
                    </div>
                  )}
                </div>

                {/* CTAs */}
                <div className="flex flex-col gap-3 sm:flex-row">
                  <GlowButton
                    href={`/checkout?product=${product.slug}`}
                    label={
                      <span className="flex items-center gap-2">
                        <ShoppingCart className="h-4 w-4" />
                        Add to Cart
                      </span>
                    }
                  />
                  <GlowButton href="/products" label="View All Products" variant="secondary" />
                </div>
              </div>

              {/* Right: Hero Visual */}
              <div className="relative">
                <div className="relative aspect-square overflow-hidden rounded-panel bg-gradient-to-br from-arctic-cyan/20 via-arctic-cyan/5 to-transparent shadow-soft">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      className="h-40 w-40 rounded-full bg-gradient-to-br from-arctic-cyan/30 to-arctic-frost/20 blur-3xl"
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.5, 0.8, 0.5]
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-6xl font-bold text-white/10">{product.category}</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="px-6 py-8 md:px-12">
        <div className="mx-auto grid w-full max-w-6xl gap-8 lg:grid-cols-[1fr_400px]">
          {/* Left Column */}
          <div className="space-y-8">
            {/* Features Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="glass rounded-panel p-8"
            >
              <h2 className="mb-6 text-2xl font-semibold">Key Features</h2>
              <div className="grid gap-4 sm:grid-cols-2">
                {product.features.map((feature, index) => (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 + index * 0.05 }}
                    className="flex items-start gap-3 rounded-panel border border-white/5 bg-white/5 p-4 transition-colors hover:border-arctic-cyan/20 hover:bg-white/10"
                  >
                    <CheckCircle className="h-5 w-5 flex-shrink-0 text-arctic-cyan" />
                    <span className="text-sm text-white/80">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Audio Demo Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="mb-4 text-2xl font-semibold">Audio Demo</h2>
              <AudioPlayer src={product.demoUrl} title={`${product.name} Demo`} />
            </motion.div>

            {/* Bundle Products (if applicable) */}
            {product.isBundle && product.bundleProducts && product.bundleProducts.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="glass rounded-panel p-8"
              >
                <h2 className="mb-4 text-2xl font-semibold">What&apos;s Included</h2>
                <p className="mb-4 text-white/70">
                  This bundle includes {product.bundleProducts.length} premium plugins:
                </p>
                <ul className="space-y-2">
                  {product.bundleProducts.map((slug) => {
                    const bundledProduct = productMap.get(slug);
                    return bundledProduct ? (
                      <li key={slug} className="flex items-center gap-3 text-sm text-white/80">
                        <CheckCircle className="h-4 w-4 text-arctic-cyan" />
                        <Link
                          href={`/products/${slug}`}
                          className="transition-colors hover:text-arctic-cyan"
                        >
                          {bundledProduct.name}
                        </Link>
                      </li>
                    ) : null;
                  })}
                </ul>
              </motion.div>
            )}
          </div>

          {/* Right Column - Specs */}
          <div className="space-y-6">
            {/* System Requirements */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="glass rounded-panel p-6"
            >
              <h2 className="mb-4 text-xl font-semibold">System Requirements</h2>
              <ul className="space-y-3">
                {product.system.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-white/70">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-arctic-cyan" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* License Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="glass rounded-panel p-6"
            >
              <h2 className="mb-4 text-xl font-semibold">License Information</h2>
              <ul className="space-y-3">
                {product.license.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-white/70">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-arctic-cyan" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Quick Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="glass rounded-panel p-6"
            >
              <h3 className="mb-4 text-lg font-semibold">Need Help?</h3>
              <div className="space-y-3">
                <Link
                  href="/support"
                  className="block rounded-panel border border-white/10 bg-white/5 p-3 text-sm text-white/80 transition-colors hover:border-arctic-cyan/30 hover:bg-white/10"
                >
                  Contact Support
                </Link>
                <Link
                  href="/products"
                  className="block rounded-panel border border-white/10 bg-white/5 p-3 text-sm text-white/80 transition-colors hover:border-arctic-cyan/30 hover:bg-white/10"
                >
                  Compare Products
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="px-6 py-12 md:px-12">
        <div className="mx-auto w-full max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <RelatedProducts currentProduct={product} />
          </motion.div>
        </div>
      </section>
    </div>
  );
}
