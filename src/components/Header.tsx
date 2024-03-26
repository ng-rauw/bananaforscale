import Link from "next/link";
import BananaIcon from "@/components/icons/Banana";

export default function Header() {
  return (
    <nav className="flex w-full gap-2 bg-yellow-400 p-4 text-black">
      <Link href="/" className="mr-auto flex flex-row items-center">
        <span className="h-12 w-12">
          <BananaIcon />
        </span>
        <h1 className="flex h-8 items-center text-xl">Banana for scale</h1>
      </Link>
      <Link href="/height" className="rounded border-2 border-black p-2">
        <span>Height</span>
      </Link>
      <Link href="/weight" className="rounded border-2 border-black p-2">
        <span>Weight</span>
      </Link>
      <Link href="/distance" className="rounded border-2 border-black p-2">
        <span>Distance</span>
      </Link>
      <Link href="/time" className="rounded border-2 border-black p-2">
        <span>Time</span>
      </Link>
    </nav>
  );
}
