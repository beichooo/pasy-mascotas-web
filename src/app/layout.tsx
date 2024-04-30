import type { Metadata } from "next";
import { Fredoka, Rubik } from "next/font/google";
import "./globals.css";
import { Providers } from "@/app/Providers";

const fredoka = Fredoka({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-fredoka",
});
const rubik = Rubik({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-rubik",
});

export const metadata: Metadata = {
  title: "PASY - Adopta una mascota",
  description: "Encuentra la mascota perfecta para ti",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${rubik.variable} ${fredoka.variable}`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
