import type { Metadata } from "next";
import { M_PLUS_Rounded_1c } from "next/font/google";
import "./globals.css";

const plusRounded = M_PLUS_Rounded_1c({
  weight: ['400', '500'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: "Takuya Matsuyama - Homepage",
  description: "My copy of Takuya's-sensei homepage",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${plusRounded.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
