import pool from "../../../config/db";
import { NextResponse } from "next/server";
import { getSession } from "../../../../utils/libs/libs"
import type { NextApiRequest, NextApiResponse } from 'next'

export async function POST(req) {

  try {
    console.log("in post yeahhhhhhh")
    const session = await getSession();
    console.log(session)
    if (session && session.oks.role === "admin") {
      // Example query using parameters (prevent SQL injection with placeholders)
      // const [rows] = await connection.execute(
      //   'SELECT * FROM users WHERE username = ? AND password = ?',
      //   [user, password]
      // );
      const [rows] = await pool.query(
        'SELECT * FROM users'
      );

      // Send result back to the client
      return NextResponse.json({ data: rows });
    } else {
      return NextResponse.json({ message: "you are not authorized" });
    }
  } catch (error) {
    console.error('Database query error:', error);
    return NextResponse.json({ message: 'Internal Server Error' });
  }
}

// Only POST requests are allowed, so return 405 for other methods
export async function GET() {
  return NextResponse.json({ message: 'Only POST requests are allowed' }, { status: 405 });
}
