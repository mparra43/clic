import type { Metadata } from "next";
import '@/styles/globals.css'
import { Transversal } from "@/components/transversal/sections";


export const metadata: Metadata = {
  title: "Click",
  description: "G",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Transversal.Header/>
        {children}
        <Transversal.Footer/>
      </body>
    </html>
  );
}
