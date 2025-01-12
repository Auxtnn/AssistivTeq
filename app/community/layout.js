import "../globals.css";

export const metadata = {
  metadataBase: new URL('https://assistivteq.com'),
  title: "Assistivteq | Empowering Through Assistive Technology",
  description:
    "Breaking Barriers: Assistivteq provides innovative assistive technology solutions, including mobility assistance, vision devices, hearing aids, and specialized apps like Trarrk, empowering individuals with disabilities to live independently.",
  keywords: [
    "assistive technology",
    "assistivteq",
    "accessibility solutions",
    "mobility assistance",
    "vision devices",
    "hearing aids",
    "cognitive support",
    "speech devices",
    "assistive apps",
    "Trarrk",
    "disability support",
    "inclusive technology",
    "adaptive equipment",
  ],
  openGraph: {
    title: "Assistivteq | Empowering Through Assistive Technology",
    description:
      "Breaking Barriers: Discover innovative assistive technology solutions for enhanced independence and accessibility.",
    type: "website",
    locale: "en_US",
    siteName: "Assistivteq",
  },
  twitter: {
    card: "summary_large_image",
    title: "Assistivteq | Empowering Through Assistive Technology",
    description:
      "Breaking Barriers: Discover innovative assistive technology solutions for enhanced independence and accessibility.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  verification: {
    google: "BbZhHinU980NE7hrPxZ0nlMuaufygFFkRkzKUxSuB98",
  },
  alternates: {
    canonical: "https://assistivteq.com",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <section>{children}</section>
      </body>
    </html>
  );
}
