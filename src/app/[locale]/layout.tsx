import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { NextIntlClientProvider } from "next-intl";

export const metadata: Metadata = {
  title: "Banana for scale",
  description: "Measure with bananas and other random scales",
};

export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  let translations;
  try {
    translations = (await import(`../../../messages/${locale}.json`)).default;
  } catch (e) {}

  return (
    <html lang={locale}>
      <body className="flex h-screen flex-col">
        <NextIntlClientProvider locale={locale} messages={translations}>
          <Header locale={locale}></Header>
          <main className="flex-1 bg-blue-500">{children}</main>
          <Footer></Footer>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
