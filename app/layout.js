// app/layout.js
import './globals.css'
import { Inter, Space_Grotesk } from 'next/font/google'

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' })
const grotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-heading' })

export const metadata = {
  title: 'Nagesh Shelke — Developer',
  description: 'I am A Frontend Engineer',
   icons: {
    icon: 'ns-logo1.png',
  },
  
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${grotesk.variable}`}>
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  )
}
