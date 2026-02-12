import ProductCard from "@/components/ProductCard";
import { products } from "@/lib/products";

export const metadata = {
  title: "Plugins"
};

export default function ProductsPage() {
  return (
    <section className="px-6 py-16 md:px-12">
      <div className="mx-auto w-full max-w-6xl">
        <div className="mb-10 space-y-4">
          <p className="text-xs uppercase tracking-[0.5em] text-white/50">Plugins</p>
          <h1 className="text-3xl font-semibold md:text-5xl">Explore the Arctic Series</h1>
          <p className="max-w-2xl text-white/70">
            Boutique processors engineered for clarity, depth, and uncompromising control.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
