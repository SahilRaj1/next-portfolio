import Navbar from "@/components/Navbar";
import "./../styles/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Sahil Raj Portfolio",
    description: "A developer portfolio app made using nextjs",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <Navbar />
                <div>{children}</div>
                <Footer />
            </body>
        </html>
    );
}
