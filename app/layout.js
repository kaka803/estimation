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
  title: "Clarity Estimates LLC | Expert Construction Estimating & Material Takeoffs",
  description: "Professional material takeoff and construction cost estimating services. We provide accurate, detailed, and data-driven estimates to help you bid with confidence and maximize profitability.",
  icons: {
    icon: "/logo3.png",
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
