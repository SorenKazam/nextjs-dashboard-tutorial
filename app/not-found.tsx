import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div>
      <h1>Page not Found!</h1>
      <Image src="/404.png" alt="404" width={500} height={500} />
      <Link href="/">Home</Link>
    </div>
  );
}
