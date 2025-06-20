import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | Lit Phansiri",
    default: "Lit Phansiri: Full Stack Data Scientist",
  },
  description: "The portfolio of Lit Phansiri, a Full Stack Data Scientist specializing in Generative AI, with experience as a U.S. Marine and a degree from UC Berkeley.",
  openGraph: {
    title: "Lit Phansiri: Full Stack Data Scientist",
    description: "The portfolio of Lit Phansiri, a Full Stack Data Scientist specializing in Generative AI.",
    url: "https://phansiri.com", // TODO: Replace with your actual domain
    siteName: "Lit Phansiri Portfolio",
    images: [
      {
        url: "https://phansiri.com/og-image.png", // TODO: Replace with your actual domain and a proper OG image
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  // TODO: Add twitter metadata if you have a twitter account
  twitter: {
    card: "summary_large_image",
    title: "Lit Phansiri: Full Stack Data Scientist",
    creator: "@lphansiri",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
