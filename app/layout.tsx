import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Apartment Hotel 11 | Osaka & Kansai Packages",
    template: "%s | Apartment Hotel 11",
  },
  description:
    "Three HIWIN-led journey packages and destination directions connecting stays, dining, transport, relaxation, and experiences across Osaka and Kansai.",
  metadataBase: new URL("https://apartment-hotel-11-kansai.cnai5002.chatgpt.site"),
  openGraph: {
    title: "Apartment Hotel 11 | Three Ways Through Kansai",
    description: "Essential, Signature, and Prestige journeys by HIWIN.",
    images: ["/og.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Apartment Hotel 11 | Three Ways Through Kansai",
    description: "Essential, Signature, and Prestige journeys by HIWIN.",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
