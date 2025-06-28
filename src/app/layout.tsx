import type { Metadata } from "next";
import {   Comforter } from "next/font/google";
import "./globals.css";

const comforter = Comforter({
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Miduo Wallpapers",
  description: "壁纸分享",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${comforter.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
