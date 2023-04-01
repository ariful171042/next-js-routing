import Link from "next/link";

const Home = () => {
  return (
    <div>
      <h1>Home page</h1>

      <ul>
        <li>
          <Link href="/products">Product</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/profile">Profile</Link>
        </li>
        <li>
          <Link href="/products">Product</Link>
        </li>
      </ul>
    </div>
  );
};
export default Home;
