import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

// මෙතනින් තමයි බ්‍රවුසර් ටැබ් එකේ නම හැදෙන්නේ
export const metadata: Metadata = {
  title: "Queen Bee Digital Marketing",
  description: "Empowering businesses worldwide with state-of-the-art digital marketing solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}