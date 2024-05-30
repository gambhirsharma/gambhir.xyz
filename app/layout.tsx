import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import TopNav from "./components/TopNav";
import Footer from "./components/Footer";
import { Analytics } from '@vercel/analytics/react';
import GoogleAnalytics from "./about/utils/GoogleAnalytics";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "gambhir.xyz",
  description: "web-developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <GoogleAnalytics/>
      <body className={inter.className}>
        <div className="lg:mx-40 lg:mt-8 md:mx-32 md:mt-4 mx-4 mt-3">
          <TopNav />
          {children}
          <Analytics />
          <Footer />
        </div>
        {/* <div className="bg-[url('../public/gradient.png')] bg-contain w-full h-10"></div> */}
      </body>
    </html>
  );
}
