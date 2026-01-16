import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer/footer"; 

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "Built with Vibe Coding",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-900 flex flex-col min-h-screen`}>
        {/* We place the Navbar at the top */}
        <Navbar /> 
        
        {/* The page content goes here */}
        <main className="flex-1">
          {children}
        </main>
        
        {/* Footer at the bottom */}
        <Footer />
      </body>
    </html>
  );
}