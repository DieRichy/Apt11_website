import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Apartment Hotel 11 | Tailor-made Osaka Journeys",
    template: "%s | Apartment Hotel 11",
  },
  description:
    "A calm apartment base and a human planning conversation for tailor-made journeys across Osaka and Kansai.",
  metadataBase: new URL("https://apartment-hotel-11-journeys.cherry-swift-1901.chatgpt.site"),
  openGraph: {
    title: "Apartment Hotel 11",
    description: "Tailor-made Osaka Journeys",
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
