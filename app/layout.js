import { Inter } from "next/font/google";
import "./globals.css";

export const metadata = {
  title: "AssistivTeq",
  description:
    "...Redefining Technologies: Tech for empowerment: building inclusive futures. Your journey to independence starts here",
  other: {
    "google-site-verification": "BbZhHinU980NE7hrPxZ0nlMuaufygFFkRkzKUxSuB98",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
