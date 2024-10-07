// import { NextRequest } from "next/server";
// import { updateSession } from "../utils/libs/libs";

// export async function middleware(request: NextRequest) {
//   console.log("olaaaaaaaaaaaaaaaaaaaaaaaa")
//   return await updateSession(request);
// }

import { getSession } from '../utils/libs/libs';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { redirect } from 'next/navigation'

const protectedRoutes = ['/api'];

export async function middleware(request: NextRequest) {

  // console.log("hello from the other sideeee:", request.nextUrl.pathname)
  if (protectedRoutes.some(route => request.nextUrl.pathname.startsWith(route))) {
    console.log("api yo")
    const session = await getSession();
    console.log(session)
    if (session === null)
      return NextResponse.json({ redirect: 1 });
  }

  return NextResponse.next();
}

// export const config = {
//   matcher: ['/'],
// };
