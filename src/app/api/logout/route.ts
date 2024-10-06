import { NextResponse } from "next/server";
import { logout } from "../../../../utils/libs/libs"
import type { NextApiRequest, NextApiResponse } from 'next'
import { redirect } from "next/navigation"

// Only POST requests are allowed, so return 405 for other methods
export async function GET() {
    await logout();
    return NextResponse.json({ message: 'ok' }, { status: 200 });
    // return redirect("/login-by-akaar-admin576");
}
