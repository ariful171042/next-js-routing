import { useRouter } from "next/router";

export default function ProductDetals() {
  const handleOrder = () => {
    console.log("ordrr placed successfully");

    router.push("/products");
  };
  const router = useRouter();

  const productId = router.query.productId;
  return (
    <div>
      <h1>ProductDetals:{productId}</h1>
      <button onClick={handleOrder}>Place Order</button>
    </div>
  );
}
