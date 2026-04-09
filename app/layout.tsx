import type { Metadata } from "next";
import { Barlow, Inter } from "next/font/google";
import "./globals.css";

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-barlow",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tasmed — Committed Towards Healthier Life",
  description:
    "Tasmed leverages advanced molecular diagnostics and world-class manufacturing to redefine patient care across Himachal Pradesh and beyond.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${barlow.variable} ${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
