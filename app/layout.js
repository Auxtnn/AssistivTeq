import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/mainWebsite/Nav";

export const metadata = {
  title: "AssistivTeq",
  description:
    "...Redefining Technologies: Tech for empowerment: building inclusive futures. Your journey to independence starts here",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
