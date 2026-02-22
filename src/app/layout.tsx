import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import "katex/dist/katex.min.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://pianomixtape.com"),
  title: {
    default: "Anand Sampat",
    template: "%s | Anand Sampat",
  },
  description:
    "Music-focused portfolio blending composition, code, and research experiments.",
  openGraph: {
    title: "Anand Sampat",
    description:
      "Music-focused portfolio blending composition, code, and research experiments.",
    url: "https://pianomixtape.com",
    siteName: "Anand Sampat",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Anand Sampat",
    description:
      "Music-focused portfolio blending composition, code, and research experiments.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${poppins.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
