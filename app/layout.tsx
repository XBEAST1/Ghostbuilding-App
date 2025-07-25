import type { Metadata } from "next";
import { Inter, Jersey_20, Poppins } from "next/font/google";
import localFont from "next/font/local";
import LayoutWrapper from "@/components/LayoutWrapper";
import "./globals.css";

const otomanopee = localFont({
  src: "./fonts/OtomanopeeOne.ttf",
  variable: "--font-otomanopee",
  weight: "400",
});

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["400", "500" , "800"],
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jersey = Jersey_20({
  variable: "--font-jersey",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ghost Builder",
  description: "Ghost Builder",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${jersey.variable} ${otomanopee.variable} ${poppins.variable} antialiased`}>
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  );
}
