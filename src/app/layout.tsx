import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Image from "next/image";

export const metadata: Metadata = {
    title: "Kart Racing Illini",
    description: "Official website of the Kart Racing Illini club.",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <head>
            <style>
                @import url(&#39;https://fonts.googleapis.com/css2?family=Allura&family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap&#39;);
            </style>
        </head>
        <body className={`bg-illini-dark text-white font-sans antialiased relative min-h-screen pb-0`}>
        <div className="absolute bottom-0 left-0 w-full h-[600px] md:h-[800px] z-0 pointer-events-none">
            <Image
                src="/bottom-bg.jpg"
                alt="Footer Background"
                fill
                className="object-cover object-bottom opacity-30"
                priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-transparent via-illini-dark/50 to-illini-dark"></div>
        </div>
        <Navbar />
        {children}
        <Footer />
        </body>
        </html>
    );
}