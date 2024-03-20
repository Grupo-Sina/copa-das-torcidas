import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";

import Image from "next/image";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

export default function MissionsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col bg-yellow w-screen min-h-screen">
      <Header />
      <div
        className="flex flex-1 bg-no-repeat bg-center bg-cover object-cover"
        style={{ backgroundImage: "url('/lightbluebg.png')" }}
      >
        {children}
      </div>
      <Footer />
    </div>
  );
}
