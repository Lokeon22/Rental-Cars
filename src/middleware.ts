import { NextRequest, NextResponse } from "next/server";

export const user_route = ["/home", "/profile", "/details", "/rent", "/mycar"];

export default function middleware(req: NextRequest) {
  let verify = req.cookies.get("rentals.user");
  const { pathname, href } = req.nextUrl;

  if (!verify && user_route.some((prefix) => pathname.startsWith(prefix))) {
    return NextResponse.redirect(`${process.env.NEXT_PUBLIC_POMBAL}`);
  }

  if (verify && href === `${process.env.NEXT_PUBLIC_POMBAL}/`)
    return NextResponse.redirect(`${process.env.NEXT_PUBLIC_POMBAL}/home`);
}
