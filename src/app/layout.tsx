import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lytix Biopharma | Oncolytic Immunotherapy",
  description:
    "Lytix Biopharma is developing first-in-class oncolytic molecule therapies that kill cancer and prevent recurrence. Redefining the standard of care in the neoadjuvant setting.",
  keywords: [
    "oncology",
    "immunotherapy",
    "cancer treatment",
    "ruxotemitide",
    "LTX-315",
    "neoadjuvant",
    "biopharma",
    "oncolytic",
  ],
  authors: [{ name: "Lytix Biopharma" }],
  openGraph: {
    title: "Lytix Biopharma | Oncolytic Immunotherapy",
    description:
      "Developing first-in-class oncolytic molecule therapies that kill cancer and prevent recurrence.",
    type: "website",
    locale: "en_US",
    siteName: "Lytix Biopharma",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="font-sans antialiased">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
