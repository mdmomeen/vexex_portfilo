import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "VEXEX | Building Intelligent Digital Experiences",
  description: "We create AI-powered software, business automation systems, web platforms, mobile applications, and SaaS products that help businesses scale faster.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased scroll-smooth`}>
      <body className="bg-white text-navy selection:bg-navy selection:text-white">
        {children}
      </body>
    </html>
  );
}
