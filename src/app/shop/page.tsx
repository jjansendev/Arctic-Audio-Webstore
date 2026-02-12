"use client";

import { Suspense, useState, useMemo } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import ProductCard from "@/components/ProductCard";
import { products } from "@/lib/products";

function ShopContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  
  const [searchQuery, setSearchQuery] = useState(searchParams.get("q") || "");
  const [categoryFilter, setCategoryFilter] = useState(searchParams.get("category") || "all");
  const [sortBy, setSortBy] = useState(searchParams.get("sort") || "name");

  const categories = ["all", ...Array.from(new Set(products.map((p) => p.category)))];

  const filteredProducts = useMemo(() => {
    let filtered = [...products];

    // Search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (p) =>
          p.name.toLowerCase().includes(query) ||
          p.description.toLowerCase().includes(query) ||
          p.category.toLowerCase().includes(query)
      );
    }

    // Category filter
    if (categoryFilter !== "all") {
      filtered = filtered.filter((p) => p.category === categoryFilter);
    }

    // Sort
    if (sortBy === "price-asc") {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sortBy === "price-desc") {
      filtered.sort((a, b) => b.price - a.price);
    } else {
      filtered.sort((a, b) => a.name.localeCompare(b.name));
    }

    return filtered;
  }, [searchQuery, categoryFilter, sortBy]);

  const updateURL = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (value && value !== "all" && value !== "name") {
      params.set(key, value);
    } else {
      params.delete(key);
    }
    router.push(`/shop?${params.toString()}`);
  };

  return (
    <section className="px-6 py-16 md:px-12">
      <div className="mx-auto w-full max-w-6xl">
        <div className="mb-10 space-y-4">
          <p className="text-xs uppercase tracking-[0.5em] text-white/50">Shop</p>
          <h1 className="text-3xl font-semibold md:text-5xl">All Products</h1>
          <p className="max-w-2xl text-white/70">
            Browse our complete collection of premium audio plugins and bundles.
          </p>
        </div>

        {/* Filters */}
        <div className="glass mb-8 rounded-panel p-6">
          <div className="grid gap-4 md:grid-cols-3">
            {/* Search */}
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                updateURL("q", e.target.value);
              }}
              className="rounded-panel border border-white/10 bg-black/30 px-4 py-3 text-sm text-white placeholder:text-white/40"
              aria-label="Search products"
            />

            {/* Category Filter */}
            <select
              value={categoryFilter}
              onChange={(e) => {
                setCategoryFilter(e.target.value);
                updateURL("category", e.target.value);
              }}
              className="rounded-panel border border-white/10 bg-black/30 px-4 py-3 text-sm text-white"
              aria-label="Filter by category"
            >
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat === "all" ? "All Categories" : cat}
                </option>
              ))}
            </select>

            {/* Sort */}
            <select
              value={sortBy}
              onChange={(e) => {
                setSortBy(e.target.value);
                updateURL("sort", e.target.value);
              }}
              className="rounded-panel border border-white/10 bg-black/30 px-4 py-3 text-sm text-white"
              aria-label="Sort products"
            >
              <option value="name">Sort by Name</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
            </select>
          </div>
        </div>

        {/* Results */}
        <div className="mb-4 text-sm text-white/60">
          Showing {filteredProducts.length} {filteredProducts.length === 1 ? "product" : "products"}
        </div>

        {/* Product Grid */}
        <div className="grid gap-6 md:grid-cols-3">
          {filteredProducts.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="glass rounded-panel p-12 text-center">
            <p className="text-white/70">No products found matching your criteria.</p>
          </div>
        )}
      </div>
    </section>
  );
}

export default function ShopPage() {
  return (
    <Suspense fallback={<div className="px-6 py-16 md:px-12"><div className="mx-auto w-full max-w-6xl">Loading...</div></div>}>
      <ShopContent />
    </Suspense>
  );
}
