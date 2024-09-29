import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";

import { TRPCReactProvider } from "~/trpc/react";
import Footer from "./_components/templates/Footer";
import Navbar from "./_components/templates/Navbar";

export const metadata: Metadata = {
  title: "Querétaro Sí Sonríe",
  description: "Página web de Querétaro Sí Sonríe",
  icons: [{ rel: "icon", url: "/icons/logoicon.png" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body className="inter h-full overflow-x-hidden">
        <Navbar />
        <TRPCReactProvider>{children}</TRPCReactProvider>
        <Footer />
      </body>
    </html>
  );
}
