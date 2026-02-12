import { notFound } from "next/navigation";
import GlowButton from "@/components/GlowButton";
import { productMap } from "@/lib/products";

type ProductPageProps = {
  params: { slug: string };
};

export function generateMetadata({ params }: ProductPageProps) {
  const product = productMap.get(params.slug);
  if (!product) {
    return { title: "Plugin" };
  }
  return {
    title: product.name,
    description: product.description
  };
}

export default function ProductDetailPage({ params }: ProductPageProps) {
  const product = productMap.get(params.slug);
  if (!product) {
    notFound();
  }

  return (
    <section className="px-6 py-16 md:px-12">
      <div className="mx-auto grid w-full max-w-6xl gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-8">
          <div className="glass rounded-panel p-6">
            <div className="h-64 rounded-panel bg-gradient-to-br from-white/15 via-white/5 to-transparent" />
            <div className="mt-6 space-y-3">
              <p className="text-xs uppercase tracking-[0.5em] text-white/50">{product.category}</p>
              <h1 className="text-3xl font-semibold md:text-4xl">{product.name}</h1>
              <p className="text-white/70">{product.description}</p>
              <GlowButton href="/checkout" label={`Buy for $${product.price}`} />
            </div>
          </div>
          <div className="glass rounded-panel p-6">
            <h2 className="text-xl font-semibold">Features</h2>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              {product.features.map((feature) => (
                <li key={feature}>• {feature}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="space-y-6">
          <div className="glass rounded-panel p-6">
            <h2 className="text-xl font-semibold">Audio Demo</h2>
            <p className="mt-2 text-sm text-white/60">
              Demo files are placeholders. Replace with production stems.
            </p>
            <audio className="mt-4 w-full" controls preload="none">
              {product.demoUrl ? <source src={product.demoUrl} /> : null}
              Your browser does not support the audio element.
            </audio>
          </div>
          <div className="glass rounded-panel p-6">
            <h2 className="text-xl font-semibold">System Requirements</h2>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              {product.system.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </div>
          <div className="glass rounded-panel p-6">
            <h2 className="text-xl font-semibold">License</h2>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              {product.license.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
