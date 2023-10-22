import Header from '@/component/Header'
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/component/Footer'
// import 'tailwindcss/tailwind.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
          
            <Header></Header>
            {children}
            <Footer></Footer>
         
      </body>
    </html>
  )
}
