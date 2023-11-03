import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`flex flex-col items-center ${inter.className}`}>
      <Link
        href="/posts"
        className="text-5xl my-[300px] rounded-lg shadow-md p-8 bg-white"
      >
        Show All Posts
      </Link>
    </main>
  );
}
