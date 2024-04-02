"use client";
import Link from "next/link";
import BananaIcon from "@/components/icons/Banana";
import { usePathname } from "next/navigation";
import HeaderLink from "@/components/HeaderLink";

export default function Header() {
  const currentPath = usePathname();
  return (
    <nav className="flex w-full gap-2 bg-yellow-400 p-4 text-black">
      <Link href="/" className="mr-auto flex flex-row items-center">
        <span className="h-12 w-12">
          <BananaIcon />
        </span>
        <h1 className="flex h-8 items-center text-xl">Banana for scale</h1>
      </Link>
      <HeaderLink url="/height" active={currentPath.includes("/height")}>
        <span>Height</span>
      </HeaderLink>
      <HeaderLink url="/weight" active={currentPath.includes("/weight")}>
        <span>Weight</span>
      </HeaderLink>
      <HeaderLink url="/distance" active={currentPath.includes("/distance")}>
        <span>Distance</span>
      </HeaderLink>
      <HeaderLink url="/time" active={currentPath.includes("/time")}>
        <span>Time</span>
      </HeaderLink>
      <HeaderLink url="/currency" active={currentPath.includes("/currency")}>
        <span>Currency</span>
      </HeaderLink>
    </nav>
  );
}
