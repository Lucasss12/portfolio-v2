import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";

import {DockDemo} from "../components/dock/dock";
const inter = Rubik({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lucas Méné Développeur front-end - UI/UX Designer",
  description: "Lucas Méné Développeur front-end - UI/UX Designer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
    <body className={`${inter.className} max-sm:mx-5`}>
      {children}
      <DockDemo />
    </body>
  </html>
  );
}
