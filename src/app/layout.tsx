import type { Metadata } from "next";
import { displayFont, bodyFont, monoFont } from "@/lib/fonts";
import SmoothScroll from "@/components/providers/SmoothScroll";
import Nav from "@/components/layout/Nav";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://castilloquesada.com"),
  title: "Andrés Castillo Quesada — Creative Technologist",
  description:
    "Senior Frontend Engineer & Architect. 13 years bridging design and engineering: interactive 3D, animation, design systems, and full-stack architecture.",
  openGraph: {
    title: "Andrés Castillo Quesada — Creative Technologist",
    description:
      "Senior Frontend Engineer & Architect. Interactive 3D, GSAP animation, design systems, full-stack architecture.",
    url: "https://castilloquesada.com",
    siteName: "Andrés Castillo Quesada",
    locale: "en_US",
    type: "website",
    // TODO: add og image once designed → images: [{ url: "/og.png", width: 1200, height: 630 }]
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${displayFont.variable} ${bodyFont.variable} ${monoFont.variable}`}
    >
      <body className="bg-base text-primary antialiased">
        {/* Nav is site-wide chrome; the page owns its own <main>. */}
        <SmoothScroll>
          <Nav />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
