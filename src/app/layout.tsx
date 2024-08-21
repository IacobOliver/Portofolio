import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";
import { ModalProvider } from "./_components/Modal";

export const metadata: Metadata = {
  title: "Iacob Oliver Portofolio",
  description: "Let's discuss business",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
        <Script src="https://kit.fontawesome.com/5509a13330.js" />

      </head>
      <body className="">
        <ModalProvider>
          {children}
        </ModalProvider></body>
    </html>
  );
}
