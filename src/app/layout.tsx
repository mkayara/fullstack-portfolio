import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Fullstack Portfolio | Workshop Milestone",
  description:
    "A portfolio celebrating hands-on experience with Next.js, Tailwind CSS, and Firebase at Taylor's University.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
