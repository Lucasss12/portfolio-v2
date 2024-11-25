import type { Metadata } from "next";
import { NextUIProvider } from "@nextui-org/react";
import { Rubik } from "next/font/google";
import "./globals.css";

import {DockDemo} from "../components/layout/dock/dock";
import Footer from "@/components/layout/footer/footer";

const inter = Rubik({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lucas Méné • Portfolio",
  description: "Bonjour 👋, moi c’est Lucas, développeur web front-end",
  metadataBase: new URL("https://lucas-mene.vercel.app"), 
  openGraph: {
    title: "Lucas Méné • Portfolio",
    description: "Bonjour 👋 moi c’est Lucas, développeur web front-end",
    type: "website",
    locale: "fr_FR",
    images: [
      {
        url: "/images/OG.png",
        width: 1200,
        height: 630,
        alt: "Lucas",
      },
    ],
    url: "https://lucas-mene.vercel.app/",
    siteName: "Lucas Méné • Portfolio",
  },
};


export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="fr">
      <head>
        <meta name="description" content="Bonjour 👋, moi c’est Lucas, développeur web front-end" />
        <meta name="google-site-verification" content="kvmHWGV2PSE7k3xh2yjet5KncWHxQOw-3Lop8OEfadk" />
        <title>Lucas Méné | Développeur web front-end</title>
      </head>
      <body className={`${inter.className} sm:mt-24 mt-16 mb-24`}>
        <NextUIProvider>
          {children}
          <DockDemo />
        </NextUIProvider>
        <Footer/>
      </body>
    </html>
  );
}
