import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/header/Header";
import styles from "./root.module.css";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shurms",
  description: "Shurms website",
  icons: {
    icon: "/icon.png",
    shortcut: "/shortcut-icon.png",
    apple: "/apple-icon.png",

    other: {
      rel: "apple-touch-icon-precomposed",
      url: "/apple-touch-icon-precomposed.png",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <div className={styles.layout}>
          <div className={styles.header}>
            <Header />
          </div>
          {children}
          <footer className="footer">&copy; 2025 Mark Shurmer</footer>
        </div>
      </body>
    </html>
  );
}
