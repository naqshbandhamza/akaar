import { createConnection } from "../../../config/db";
import { NextResponse } from "next/server";

export async function POST(req) {

  try {
    // Get parameters from the request body
    // const { user, password } = req.body;

    // const connection = await createConnection(process.env.HOST, process.env.USER, process.env.PASSWORD, process.env.DATABASE_NAME);
    const connection = await createConnection();

    // Example query using parameters (prevent SQL injection with placeholders)
    // const [rows] = await connection.execute(
    //   'SELECT * FROM users WHERE username = ? AND password = ?',
    //   [user, password]
    // );
    const [rows] = await connection.execute(
      'SELECT * FROM users'
    );

    // Send result back to the client
    return NextResponse.json({ data: rows });
  } catch (error) {
    console.error('Database query error:', error);
    return NextResponse.json({ message: 'Internal Server Error' });
  }
}

// Only POST requests are allowed, so return 405 for other methods
export async function GET() {
  return NextResponse.json({ message: 'Only POST requests are allowed' }, { status: 405 });
}
