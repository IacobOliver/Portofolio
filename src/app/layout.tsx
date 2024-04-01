import type { Metadata } from "next";
import { Inter, Ultra } from "next/font/google";
import "./globals.css";

// const ultra = Ultra({
//   subsets: ['latin'],
//   variable : '--font-sans'

// })

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
          <script src="https://kit.fontawesome.com/5509a13330.js" ></script>

      </head>
      <body className="select-none">{children}</body>
    </html>
  );
}
