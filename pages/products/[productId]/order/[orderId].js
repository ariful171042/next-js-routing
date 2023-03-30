import { useRouter } from "next/router";

export default function OrderDetals() {
  const {
    query: { orderId, productId },
  } = useRouter();
  return (
    <div>
      <h1>
        Product {productId} OrderId {orderId}
      </h1>
    </div>
  );
}
