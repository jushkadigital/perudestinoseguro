
import { NextRequest, NextResponse } from 'next/server';
import Negotiator from "negotiator";
import { match } from "@formatjs/intl-localematcher";





// export default async function middleware(req: NextRequest) {
//   const path = req.nextUrl.pathname;
//   const session = !!req.cookies.get("next-auth.session-token")
//   console.log(session)

//   if (!session) {
//     return NextResponse.redirect(new URL(`/api/auth/signin?callbackUrl=${path}`, req.url));
//   }
//   return NextResponse.next();
// }


// // export const config = {
// //   matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)','/boards', '/workspace/:path*']
// // }



const locales = ["es", "en"];
const defaultLocale = "es";
const cookieName = "i18nlang";

// Get the preferred locale, similar to the above or using a library
function getLocale(request: NextRequest): string {
  // Get locale from cookie
  if (request.cookies.has(cookieName))
    return request.cookies.get(cookieName)!.value;
  // Get accept language from HTTP headers
  const acceptLang = request.headers.get("Accept-Language");
  if (!acceptLang) return defaultLocale;
  // Get match locale
  const headers = { "accept-language": acceptLang };
  const languages = new Negotiator({ headers }).languages();
  return match(languages, locales, defaultLocale);
}

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith("/_next")) return NextResponse.next();
  // Check if there is any supported locale in the pathname
  const { pathname } = request.nextUrl;
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );
  if (pathnameHasLocale) return;

  // Redirect if there is no locale
  const locale = getLocale(request);
  request.nextUrl.pathname = `/${locale}${pathname}`;
  // e.g. incoming request is /products
  // The new URL is now /en-US/products
  const response = NextResponse.redirect(request.nextUrl);
  // Set locale to cookie
  response.cookies.set(cookieName, locale);
  return response;
}

export const config = {
  // matcher : ["/oaeu"],
  matcher : ["/","/dashboard/:path*"]
}

