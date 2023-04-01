import Link from "next/link";

export default function Products({ productId = 55 }) {
  return (
    <div>
      <Link href="/">Home</Link>
      <Link href="/products/1">Product 1</Link>
      <Link href="/products/2">Product 2</Link>
      <Link href="/products/3">Product 3</Link>
      <Link href="/products/4">Product 4</Link>
      <Link href={`/products/${productId}`} replace>
        Product {productId}
      </Link>
    </div>
  );
}
