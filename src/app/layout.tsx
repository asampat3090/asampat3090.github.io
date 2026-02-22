import type { Metadata } from "next";
import "./globals.css";
import "katex/dist/katex.min.css";

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
      <body className="antialiased">{children}</body>
    </html>
  );
}
