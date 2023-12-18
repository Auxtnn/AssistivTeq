import { Inter } from 'next/font/google'
import '../globals.css'
import Nav from '@/components/communityWebsite/Nav'


export const metadata = {
  title: 'AssistivTeq Community',
  description: '...Breaking Barriers',
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
