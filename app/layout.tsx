import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import FacebookPixel from "./components/FacebookPixel";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Club Aria",
  description: "Ruleta en vivo, Slots, apuestas deportivas y mucho mas.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <div className="flex min-h-screen flex-col items-center justify-between p-24">
        {children}
        <FacebookPixel />
      </div>
      </body>
    </html>
  );
}
