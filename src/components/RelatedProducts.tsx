"use client";

import { products, type Product } from "@/lib/products";
import ProductCard from "@/components/ProductCard";

type RelatedProductsProps = {
  currentProduct: Product;
  maxProducts?: number;
};

export default function RelatedProducts({ currentProduct, maxProducts = 3 }: RelatedProductsProps) {
  // Get related products based on category or bundles
  const getRelatedProducts = () => {
    let related: Product[] = [];

    // If current product is in a bundle, show the bundle
    const bundleContainingProduct = products.find(
      (p) => p.isBundle && p.bundleProducts?.includes(currentProduct.slug)
    );

    if (bundleContainingProduct && bundleContainingProduct.slug !== currentProduct.slug) {
      related.push(bundleContainingProduct);
    }

    // If current product is a bundle, show some products from the bundle
    if (currentProduct.isBundle && currentProduct.bundleProducts) {
      const bundledProducts = products.filter(
        (p) => currentProduct.bundleProducts?.includes(p.slug)
      );
      related.push(...bundledProducts.slice(0, 2));
    }

    // Add products from same category
    const sameCategory = products.filter(
      (p) =>
        p.category === currentProduct.category &&
        p.slug !== currentProduct.slug &&
        !related.some((r) => r.slug === p.slug)
    );
    related.push(...sameCategory);

    // If still not enough, add other products
    if (related.length < maxProducts) {
      const others = products.filter(
        (p) =>
          p.slug !== currentProduct.slug &&
          !related.some((r) => r.slug === p.slug)
      );
      related.push(...others);
    }

    return related.slice(0, maxProducts);
  };

  const relatedProducts = getRelatedProducts();

  if (relatedProducts.length === 0) {
    return null;
  }

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold">Related Products</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {relatedProducts.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </div>
    </div>
  );
}
