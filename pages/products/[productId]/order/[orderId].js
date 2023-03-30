import { useRouter } from "next/router";

export default function OrderDetals() {
  const {
    query: { orderId },
  } = useRouter();
  return (
    <div className="">
      <h1>OrderDetals:{orderId}</h1>
    </div>
  );
}
