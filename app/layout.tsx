import type { Metadata } from "next";
import {NextUIProvider} from "@nextui-org/react";
import { Rubik } from "next/font/google";
import "./globals.css";

import {DockDemo} from "../components/dock/dock";
const inter = Rubik({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lucas Méné Développeur front-end",
  description: "Lucas Méné Développeur front-end",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${inter.className} md:mx-auto mx-5 max-w-screen-md border-x mt-10`}>
        <NextUIProvider>
          {children}
          <DockDemo />
        </NextUIProvider>
      </body>
    </html>
  );
}
