import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Banana for scale",
  description: "Measure with bananas and other random scales",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex h-screen flex-col">
        <Header></Header>
        <main className="flex-1 bg-blue-500">{children}</main>
        <Footer></Footer>
      </body>
    </html>
  );
}
