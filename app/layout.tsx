import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Table Tally",
  description: "Organize your board game group",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
