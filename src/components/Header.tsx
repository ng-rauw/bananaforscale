"use client";
import Link from "next/link";
import BananaIcon from "@/components/icons/Banana";
import { usePathname } from "next/navigation";
import HeaderLink from "@/components/HeaderLink";
import { useTranslations } from "next-intl";

export default function Header({ locale }: { locale: string }) {
  const currentPath = usePathname();
  const t = useTranslations("Index");

  return (
    <nav className="sticky top-0 z-40 flex w-full gap-2 bg-yellow-400 p-4 text-black">
      <Link href={`/`} className="mr-auto flex flex-row items-center">
        <span className="h-12 w-12">
          <BananaIcon />
        </span>
        <h1 className="flex h-8 items-center text-xl">Banana for scale</h1>
      </Link>
      <HeaderLink
        url={`/${locale}/height`}
        active={currentPath.includes("/height")}
      >
        <span>{t("height")}</span>
      </HeaderLink>
      <HeaderLink
        url={`/${locale}/weight`}
        active={currentPath.includes("/weight")}
      >
        <span>{t("weight")}</span>
      </HeaderLink>
      <HeaderLink
        url={`/${locale}/distance`}
        active={currentPath.includes("/distance")}
      >
        <span>{t("distance")}</span>
      </HeaderLink>
      <HeaderLink
        url={`/${locale}/time`}
        active={currentPath.includes("/time")}
      >
        <span>{t("time")}</span>
      </HeaderLink>
      <HeaderLink
        url={`/${locale}/currency`}
        active={currentPath.includes("/currency")}
      >
        <span>{t("currency")}</span>
      </HeaderLink>
    </nav>
  );
}
