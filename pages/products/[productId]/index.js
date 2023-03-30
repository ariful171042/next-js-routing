import { useRouter } from "next/router";

export default function ProductDetals() {
  const {
    query: { productId },
  } = useRouter();
  return (
    <div>
      <h1>ProductDetals:{productId}</h1>
    </div>
  );
}
