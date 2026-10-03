import type { Metadata } from "next";
import { Montserrat, Playfair_Display } from "next/font/google";
import "./globals.css";
import ThemeScript from "@/components/ThemeScript";
import TopBanner from "@/components/TopBanner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFab from "@/components/WhatsAppFab";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-montserrat",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-playfair",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.rentworx.co.nz";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Rent Worx | Property Management",
  description:
    "Boutique residential property management across Auckland, New Zealand. Rigorous tenant selection, Healthy Homes compliance, and transparent reporting. Led by Rajiv Kumar.",
  openGraph: {
    type: "website",
    siteName: "Rent Worx",
    title: "Rent Worx | Property Management",
    description:
      "Boutique residential property management across Auckland — rigorous tenant selection, Healthy Homes compliance, and transparent reporting.",
    url: siteUrl,
    images: ["/media/common/Rentworx_full_logo_dark.avif"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rent Worx | Property Management",
    description:
      "Boutique residential property management across Auckland — rigorous tenant selection, Healthy Homes compliance, and transparent reporting.",
    images: ["/media/common/Rentworx_full_logo_dark.avif"],
  },
  icons: {
    icon: [
      { url: "/media/common/favicon.ico", sizes: "any" },
      { url: "/media/common/favicon.svg", type: "image/svg+xml" },
      { url: "/media/common/favicon-32x32.png", type: "image/png", sizes: "32x32" },
      { url: "/media/common/favicon-16x16.png", type: "image/png", sizes: "16x16" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${montserrat.variable} ${playfair.variable}`} suppressHydrationWarning>
      <body>
        <ThemeScript />
        <TopBanner />
        <Navbar />
        <WhatsAppFab />
        <main id="app-root">{children}</main>
        <Footer />
        <div id="toast-container" />
      </body>
    </html>
  );
}
