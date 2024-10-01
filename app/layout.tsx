import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next"
import {NextUIProvider} from "@nextui-org/react";
import { Rubik } from "next/font/google";
import Head from "next/head";
import "./globals.css";

import {DockDemo} from "../components/dock/dock";
import Footer from "@/components/footer/footer";

const inter = Rubik({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lucas Méné | Développeur web front-end",
  description: "Bonjour 👋, moi c’est Lucas, développeur web front-end",
};

export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="fr">
      <Head>
        <meta name="description" content="Bonjour 👋, moi c’est Lucas, développeur web front-end" />
        <meta name="google-site-verification" content="orp_ncebSfcvhoEocsG4L6QNgXyGAFtJdWkaMsG6VNk" />
        <title>Lucas Méné | Développeur web front-end</title>
      </Head>
      <body className={`${inter.className} sm:mt-24 mt-16 mb-24`}>
        <NextUIProvider>
          {children}
          <SpeedInsights />
          <DockDemo />
        </NextUIProvider>
        <Footer/>
      </body>
    </html>
  );
}
