import { notFound } from "next/navigation";
import { productMap } from "@/lib/products";
import ProductDetailClient from "@/components/ProductDetailClient";

type ProductPageProps = {
  params: { slug: string };
};

export function generateMetadata({ params }: ProductPageProps) {
  const product = productMap.get(params.slug);
  if (!product) {
    return { title: "Product Not Found" };
  }
  return {
    title: product.name,
    description: product.description,
    openGraph: {
      title: product.name,
      description: product.description,
      type: "website",
    },
  };
}

export default function ProductDetailPage({ params }: ProductPageProps) {
  const product = productMap.get(params.slug);
  if (!product) {
    notFound();
  }

  return <ProductDetailClient product={product} />;
}

