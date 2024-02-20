import type { Metadata } from "next";
import { Exo_2, Lato } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";
import { cn } from "@/lib/utils";

const openSans = Lato({
  weight: ["300", "400", "700"],
  variable: "--font-sans",
  subsets: ["latin"],
  display: "block",
});

const exo = Exo_2({
  variable: "--font-exo",
  subsets: ["latin"],
});

const mona = localFont({
  src: [
    {
      path: "../assets/fonts/MonaSans-Light.woff2",
      weight: "400",
      style: "light",
    },
    {
      path: "../assets/fonts/MonaSans-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/fonts/MonaSans-Medium.woff2",
      weight: "500",
      style: "medium",
    },
    {
      path: "../assets/fonts/MonaSans-SemiBold.woff2",
      weight: "600",
      style: "semibold",
    },
    {
      path: "../assets/fonts/MonaSans-Bold.woff2",
      weight: "700",
      style: "bold",
    },
  ],
  variable: "--font-mona",
  display: "block",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          ` ${openSans.variable} ${mona.variable}  ${exo.variable}  font-mona`
        )}
      >
        {children}
      </body>
    </html>
  );
}
