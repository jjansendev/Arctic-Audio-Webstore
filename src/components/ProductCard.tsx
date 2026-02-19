import Link from "next/link";
import type { Product } from "@/lib/products";
import { formatPrice } from "@/lib/utils";

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="glass group rounded-panel p-6 transition hover:shadow-glow">
      <div className="flex h-36 items-center justify-center rounded-panel bg-gradient-to-br from-white/10 via-white/5 to-transparent">
        <span className="text-xs uppercase tracking-[0.3em] text-white/60">{product.category}</span>
      </div>
      <div className="mt-6 space-y-3">
        <h3 className="text-xl font-semibold">{product.name}</h3>
        <p className="text-sm text-white/70">{product.description}</p>
        <div className="flex items-center justify-between">
          <span className="text-lg font-semibold text-arctic-cyan">
            {formatPrice(product.price, product.currency ?? "CAD")}
          </span>
          <Link
            href={`/products/${product.slug}`}
            className="text-xs uppercase tracking-[0.3em] text-white/70 transition group-hover:text-arctic-cyan"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}
