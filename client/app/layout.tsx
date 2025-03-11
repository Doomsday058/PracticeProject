// app/layout.tsx

import './styles/globals.css'
import { ReactNode } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'


export const metadata = {
  title: 'VOSTOK TRADE COMPANY',
  description: 'Оптовая продажа напитков'
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ru">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
