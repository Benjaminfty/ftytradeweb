import { NextResponse, type NextRequest } from "next/server";

// ftytrade.com      -> se sirve app/[lang] con lang=en (URL se queda en "/")
// ftytrade.com/es   -> lang=es
// ftytrade.com/en   -> redirige a "/"
export function proxy(req: NextRequest) {
  const { pathname } = req.nextUrl;

  if (pathname === "/en" || pathname.startsWith("/en/")) {
    const url = req.nextUrl.clone();
    url.pathname = pathname.replace(/^\/en/, "") || "/";
    return NextResponse.redirect(url, 308);
  }
  if (pathname === "/es" || pathname.startsWith("/es/")) return NextResponse.next();

  const url = req.nextUrl.clone();
  url.pathname = "/en" + (pathname === "/" ? "" : pathname);
  return NextResponse.rewrite(url);
}

export default proxy;

export const config = {
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
