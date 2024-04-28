import { Product } from "@/features";

export default function ProductPage({ params }: { params: { slug: string } }) {
  return <Product />;
}