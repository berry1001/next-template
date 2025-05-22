import type { Metadata } from "next";
import { Inter_Tight } from "next/font/google";
import "./globals.css";

const interTightSans = Inter_Tight({
  variable: "--font-inter-tight-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Scout Next Template",
  description: "Next.js + TailwindCSS + ShadCN UI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${interTightSans.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
