import type { Metadata } from "next";
import "./globals.css";
import { BackgroundAudio } from "@/components/background-audio";

export const metadata: Metadata = {
  metadataBase: new URL("https://anandsampat.com"),
  title: {
    default: "Anand Sampat",
    template: "%s | Anand Sampat",
  },
  description: "Music, about, and writing by Anand Sampat.",
  openGraph: {
    title: "Anand Sampat",
    description: "Music, about, and writing by Anand Sampat.",
    url: "https://anandsampat.com",
    siteName: "Anand Sampat",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Anand Sampat",
    description: "Music, about, and writing by Anand Sampat.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
        <BackgroundAudio />
      </body>
    </html>
  );
}
