import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MESH — Where creative work finds the right people",
  description:
    "MESH is a creative marketplace that matches clients with independent designers, developers, and studios. Post structured briefs, review portfolios, and let Creative Match score fit.",
  metadataBase: new URL("https://mesh.app"),
  openGraph: {
    title: "MESH — Creative marketplace",
    description:
      "Match clients with independent designers, developers, and studios. Briefs, portfolios, and Creative Match in one product.",
    type: "website",
  },
};

export const viewport = {
  themeColor: "#0f0f17",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}
