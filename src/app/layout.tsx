import type { Metadata } from "next";
import { Patrick_Hand, Caveat } from 'next/font/google';
import { ThemeProvider } from "@/components/theme-provider";
import { Sidebar } from "@/app/components/sidebar"

import "./globals.css";

const patrickHand = Patrick_Hand({
  subsets: ['latin'],
  variable: '--font-patrick-hand',
  weight: ['400'],
});

const caveat = Caveat({
  subsets: ['latin'],
  variable: '--font-caveat',
  weight: ['400', '700'],
});

export const metadata: Metadata = {
  title: "Mis Apuntes de Tiempos Verbales",
  description: "Una aplicación para aprender y repasar los tiempos verbales",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning className={`${patrickHand.variable} ${caveat.variable}`}>
      <body>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} disableTransitionOnChange>
          <div className="flex">
            <Sidebar />
            <main className="flex-1 md:ml-0">{children}</main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
