import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";

import Image from "next/image";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";


const inter = Inter({ subsets: ["latin"] });

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
      <body className=" overflow-x-hidden">
        {/* <Providers> */}
        <div className="flex flex-col bg-yellow w-screen min-h-screen">
          <Header />
          <div
            className="flex flex-1 bg-no-repeat bg-center bg-cover object-cover"
            style={{ backgroundImage: "url('/darkbluebg.png')" }}
          >
            {children}
          </div>
          <Footer />
        </div>
        {/* { children } */}
        {/* </Providers> */}
      </body>
    </html>
  );
}
