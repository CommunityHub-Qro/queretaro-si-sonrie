import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";

import { TRPCReactProvider } from "~/trpc/react";
import Navbar from "./_components/molecules/Navbar";
import Footer from "./_components/organisms/footer";
import ClientSessionProvider from "./_components/scripts/clientProvider";

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
      <body className="inter grid min-h-screen grid-rows-[auto_1fr_auto] overflow-x-hidden">
        <ClientSessionProvider>
          <Navbar />
          <div className="overflow-auto">
            <TRPCReactProvider>{children}</TRPCReactProvider>
          </div>
          <Footer />
        </ClientSessionProvider>
      </body>
    </html>
  );
}
