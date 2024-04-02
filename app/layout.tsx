import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import TopNav from "./components/TopNav";

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
      <body className={inter.className}>
        <div className="mx-40 my-8">
        <TopNav />
        {children}
      </div> 
      </body>
    </html>
  );
}
