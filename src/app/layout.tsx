import type { Metadata } from "next";
import { Poppins, Tajawal } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const tajawal = Tajawal({
  variable: "--font-tajawal",
  subsets: ["arabic"],
  weight: ["300", "400", "500", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Glow Wave — Marine Collagen Gummies",
  description: "Sustainable Saudi marine collagen gummies made from recycled fish scales. Fast absorption, skin glow, and beauty from within.",
  icons: {
    icon: "/logo-glowwave.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <body
        className={`${poppins.variable} ${tajawal.variable} antialiased`}
        style={{ background: '#F8FBFF' }}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
