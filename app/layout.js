import { Outfit, Inter } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "Clarity Estimates LLC | Expert Construction Estimating & Material Takeoffs",
    template: "%s | Clarity Estimates LLC",
  },
  description: "Professional material takeoff and construction cost estimating services. We provide accurate, detailed, and data-driven estimates to help you bid with confidence and maximize profitability.",
  keywords: [
    "construction estimating",
    "material takeoff",
    "cost estimating services",
    "construction cost analysis",
    "residential estimating",
    "commercial estimating",
    "industrial estimating",
    "construction consultant",
    "Clarity Estimates LLC",
  ],
  authors: [{ name: "Clarity Estimates LLC" }],
  creator: "Clarity Estimates LLC",
  metadataBase: new URL("https://www.clarityestimates.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.clarityestimates.com",
    siteName: "Clarity Estimates LLC",
    title: "Clarity Estimates LLC | Expert Construction Estimating & Material Takeoffs",
    description: "Professional material takeoff and construction cost estimating services. Accurate, detailed, and data-driven estimates to help you bid with confidence.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Clarity Estimates LLC",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Clarity Estimates LLC | Expert Construction Estimating",
    description: "Professional material takeoff and construction cost estimating services.",
    images: ["/og-image.png"],
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
  icons: {
    icon: "/logo3.png",
    shortcut: "/logo3.png",
    apple: "/logo3.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="font-inter bg-dark min-h-full flex flex-col tracking-tight">
        {children}
      </body>
    </html>
  );
}
