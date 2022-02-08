import Link from "next/link";
import { useRouter } from "next/router";

export default function NavBar() {
  const router = useRouter();

  return (
    <nav>
      <Link href="/">
        <a style={{ color: router.pathname === "/" ? "blue" : "grey" }}>Home</a>
      </Link>
      <Link href="/about">
        <a style={{ color: router.pathname === "/about" ? "blue" : "grey" }}>
          About
        </a>
      </Link>
    </nav>
  );
}
