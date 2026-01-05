import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BookDownloadPopup from "@/components/BookDownloadPopup";

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-playfair',
  display: 'swap',
});

const jakarta = Plus_Jakarta_Sans({ 
  subsets: ["latin"],
  variable: '--font-jakarta',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Via New - Delivering Value Via New Path",
  description: "Delivering value via new path - data driven and AI embedded in process workflows. Transform your business with intelligent automation and strategic data solutions.",
  keywords: "AI automation, data workflows, process optimization, intelligent automation, data-driven business, AI integration",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${jakarta.variable}`}>
      <body className={jakarta.className}>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <BookDownloadPopup />
      </body>
    </html>
  );
}

