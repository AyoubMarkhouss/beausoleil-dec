import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import { ClerkProvider } from "@clerk/nextjs";
import type { Metadata } from "next";
import "./globals.css";
import WhatsAppIcon from "@/components/icons/whatsappIcon";

export const metadata: Metadata = {
  title: "Beausoleil",
  description: "more info to come soon",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <Header />
          {children}
          <WhatsAppIcon />
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
