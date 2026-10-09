import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Birthday.exe — Version 23.0",
  description: "A little digital birthday card for someone special.",
  icons: {
    icon: "/favicon.svg"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
