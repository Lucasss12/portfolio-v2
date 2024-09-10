import type { Metadata } from "next";
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
      <body className={`${inter.className} sm:mx-auto mx-5 max-w-screen-sm sm:mt-24 mt-16 mb-24`}>
        <NextUIProvider>
          {children}
          <DockDemo />
        </NextUIProvider>
        <Footer/>
      </body>
    </html>
  );
}
