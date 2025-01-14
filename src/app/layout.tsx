import type { Metadata } from 'next'
import { Montserrat,Poppins } from 'next/font/google'
import './globals.css'
import NextAuthProvider from "@/app/context/NextAuthProvider"
import { NavbarDefault } from '@/components/navbar';
import { Footer } from '@/components/footer';
import Script from 'next/script'
import localFont from 'next/font/local'



const myFont = localFont({ src: [{path:'../../public/POORICH.woff'}] ,display: 'swap',variable: '--font-Custom',preload:true})

const font = Poppins({weight:["100","200","300","400","500","600","700","800","900"],subsets: ['latin-ext'],display:"swap",variable: '--font-Poppins',preload:true})
export const metadata: Metadata = {
  description: 'Peru Destino Seguro B2B',
  robots:{
    index:false,
    follow:false
  },
  title: 'Peru Destino Seguro',
  verification:{
    google: "lPNLi9cxaLWnYzIQxDt4M4W1RlPbTqZy7_46teJxqiA"
  }
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <head/>
      <body className={`${font.variable} ${myFont.variable} font-sans`}>
      {children}
      </body>
    </html>
  )
}


