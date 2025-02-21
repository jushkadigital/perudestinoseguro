// import { dir } from 'i18next';
// import React, { Suspense } from 'react';
// import type { Metadata, ResolvingMetadata } from 'next';
// import { Manrope, Montserrat, Poppins } from 'next/font/google';
// import { LocaleType, availableLocales } from '../../../i18next/settings';
// import { Footer } from '@/components/footer';
// import { NavbarDefault } from '@/components/navbar';
// import Script from 'next/script';
// import { getDataGeneral, getDestinos } from '../lib/wp';
// import localFont from 'next/font/local'
// import { myFetch } from '@/lib/utils';
// // import { getDefaultMetaData } from '@/lib/helpers';
// // import AuthProvider from '@/app/[lng]/components/providers/auth/AuthProvider';
// // import Footer from '@/app/[lng]/components/layout/footer/Footer';

// // export const revalidate = 60 // seconds
// // export const dynamic = 'force-dynamic'


// export type SharedPageProps = {
//   params: { lng: LocaleType };
// };

// type LocaleRouteLayout = SharedPageProps & {
//   children: React.ReactNode;
// };

// const myFont = localFont({ src: [{path:'../../../public/CoreBoriW01-Regular.ttf'}] ,display: 'swap',variable: '--font-Custom',preload:true})
// const font = Poppins({weight:["100","200","300","400","500","600","700","800","900"],subsets: ['latin-ext'],display:"swap",variable: '--font-Poppins',preload:true})
// const font2 = Montserrat({weight:["100","200","300","400","500","600","700","800","900"],subsets: ['latin-ext'],display:"swap",variable: '--font-Monserrat',preload:true})


// export default async function Layout(props: LocaleRouteLayout) {
//   const params = await props.params;

//   const {
//     lng
//   } = params;

//   const {
//     children
//   } = props;



//   const [destinos,dataGeneralInfo] = await Promise.all([myFetch("destinos",{populate: "*"},{}),myFetch("informacion-general",{populate:"*"},{})])

//   console.log(destinos)
//   console.log(dataGeneralInfo)
//   const destinosObject = destinos.data.map((ele)=>(ele.name))


//   return (
//     <html lang={lng} suppressHydrationWarning className="!scroll-smooth">
//       <body
//         className={`${font.variable} ${font2.variable} ${myFont.variable} font-sans`}
//       >
//         <NavbarDefault lng={lng} destinos={destinosObject} />
//         <main>
//         {/*   <Script dangerouslySetInnerHTML={{ */}
//         {/*     __html: `(function(w,d,u){ */}
//         {/*         var s=d.createElement('script');s.async=true;s.src=u+'?'+(Date.now()/60000|0); */}
//         {/*         var h=d.getElementsByTagName('script')[0];h.parentNode.insertBefore(s,h); */}
//         {/* })(window,document,'https://cdn.bitrix24.es/b15344011/crm/site_button/loader_7_qznmsh.js');`}} /> */}
//           {children}
//           <Script dangerouslySetInnerHTML={{ __html: `function loadScript(a){var b=document.getElementsByTagName("head")[0],c=document.createElement("script");c.type="text/javascript",c.src="https://tracker.metricool.com/resources/be.js",c.onreadystatechange=a,c.onload=a,b.appendChild(c)}loadScript(function(){beTracker.t({hash:"2ee835c433b36ed62861f1b5ba0aa7c8"})});` }} />
//         </main>

//         {/* <Suspense fallback={<div>Loading footer...</div>}> */}
//           <Footer data={dataGeneralInfo.data} />
//         {/* </Suspense> */}
//       </body>
//     </html>
//   );
// }

// // export async function generateMetadata({ params }: SharedPageProps, parent: ResolvingMetadata) {
// //   return getDefaultMetaData(params.lng, parent);
// // }


// export const metadata: Metadata = {
//   description: 'Peru Destino Seguro B2B',
//   robots: {
//     index: false,
//     follow: false
//   },
//   title: 'Peru Destino Seguro',
//   verification: {
//     google: "lPNLi9cxaLWnYzIQxDt4M4W1RlPbTqZy7_46teJxqiA"
//   }
// }
// export async function generateStaticParams() {
//   // generates default paths for each locale domain/locale1, domain/locale2, etc.
//   console.log(availableLocales)
//   return availableLocales.map((lng) => ({ lng }));
// }



export default function Layout({children}:{children:React.ReactNode}){
  
  return children
}
