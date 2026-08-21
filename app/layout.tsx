import type { Metadata } from "next";
import { Cinzel, Josefin_Sans } from "next/font/google";
import "./globals.css";

const cinzel = Cinzel({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

const josefin = Josefin_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "EstateCore | Commercial Real Estate",
  description:
    "Premium commercial real estate solutions for ambitious businesses and investors.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${cinzel.variable} ${josefin.variable} h-full antialiased`}
    >
      <body className="min-h-full">{children}</body>
    </html>
  );
}