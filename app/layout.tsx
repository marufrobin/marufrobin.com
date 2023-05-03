import "./global.css";
import clsx from "clsx";
import type { Metadata } from "next";
import localFont from "next/font/local";
import Sidebar from "../components/sidebar";
import { Analytics } from "@vercel/analytics/react";

const kaisei = localFont({
  src: "../public/fonts/kaisei-tokumin-latin-700-normal.woff2",
  weight: "700",
  variable: "--font-kaisei",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Maruf Ahmed Robin",
    template: "%s | Maruf Ahmed Robin",
  },
  description: "Flutter Developer",
  openGraph: {
    title: "Maruf Ahmed Robin",
    description: "Developer, writer, and creator.",
    url: "https://leerob.io",
    siteName: "Maruf Ahmed Robin",
    images: [
      {
        url: "https://leerob.io/og.jpg",
        width: 1920,
        height: 1080,
      },
    ],
    locale: "en-US",
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
  twitter: {
    title: "Lee Robinson",
    card: "summary_large_image",
  },
  icons: {
    shortcut: "/favicon.ico",
  },
  verification: {
    google: "eZSdmzAXlLkKhNJzfgwDqWORghxnJ8qR9_CHdAh5-xw",
    yandex: "14d2e73487fa6c71",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={clsx(
        "text-black bg-white dark:text-white dark:bg-[#111010]",
        kaisei.variable
      )}
    >
      <body className="flex flex-col max-w-4xl mx-4 mt-8 mb-40 antialiased md:flex-row md:mt-20 lg:mt-32 lg:mx-auto">
        <Sidebar />
        <main className="flex flex-col flex-auto min-w-0 px-2 mt-6 md:mt-0 md:px-0">
          {children}
          <Analytics />
        </main>
      </body>
    </html>
  );
}
