import { Inter } from 'next/font/google'
import './globals.css'
import Nav from '@/components/mainWebsite/Nav'


export const metadata = {
  title: 'AssistivTeq',
  description: '...Redefining Technologies',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
        <Nav />
        {children}
      </body>
    </html>
  )
}
