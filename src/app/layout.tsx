import type {Metadata} from "next";
import {Be_Vietnam_Pro} from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NextTopLoader from "nextjs-toploader";

const inter = Be_Vietnam_Pro({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Education learning",
  description: "Education learning for website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextTopLoader color="#FF9500" height={4} />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
