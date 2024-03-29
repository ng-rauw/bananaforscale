import Link from "next/link";
import { ReactNode } from "react";

interface HeaderLinkProps {
  url: string;
  active: boolean;
  children: ReactNode;
}

export default function HeaderLink({ url, active, children }: HeaderLinkProps) {
  return (
    <Link
      href={url}
      className={
        active
          ? "rounded border-b-4 border-blue-400 p-2"
          : "rounded border-blue-400 p-2 transition-all hover:border-b-4"
      }
    >
      {children}
    </Link>
  );
}
