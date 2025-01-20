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
      <Script dangerouslySetInnerHTML={{ 
            __html: ` (function(w,d,u){
                var s=d.createElement('script');s.async=true;s.src=u+'?'+(Date.now()/60000|0);
                var h=d.getElementsByTagName('script')[0];h.parentNode.insertBefore(s,h);
        })(window,document,'https://cdn.bitrix24.es/b15344011/crm/site_button/loader_7_qznmsh.js');`}} /> 

      {children}
      </body>
    </html>
  )
}


