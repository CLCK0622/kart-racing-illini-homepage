import type { Metadata } from "next";
import "./globals.css";

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
        <body className={`bg-illini-dark text-white font-sans antialiased`}>
        {children}
        </body>
        </html>
    );
}