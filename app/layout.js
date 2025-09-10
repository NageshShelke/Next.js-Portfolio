// app/layout.js
import Navbar from '@/components/Navbar'
import './styles/globals.css'
import {
  outfit,
  instrumentSerif,
  instrumentSerifItalic,
  nyghtSerifBoldItalic,
  nyghtSerifMediumItalic,
} from "@/lib/font";
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Nagesh Shelke — Developer',
  description: 'I am A Frontend Engineer',
  icons: {
    icon: 'ns-logo.svg',
  },

}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${outfit.variable} ${instrumentSerif.variable} ${instrumentSerifItalic.variable} ${nyghtSerifBoldItalic.variable} ${nyghtSerifMediumItalic.variable}`}>
      <body className="min-h-screen antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
