import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next"
import {NextUIProvider} from "@nextui-org/react";
import { Rubik } from "next/font/google";
import "./globals.css";

import {DockDemo} from "../components/dock/dock";
import Footer from "@/components/footer/footer";

const inter = Rubik({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lucas • Méné",
  description: "Lucas • Méné",
};

export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="fr">
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
