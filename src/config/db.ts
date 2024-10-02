// lib/db.js
import mysql from 'mysql2/promise';

//host, user, password, database
export async function createConnection() {
  const connection = await mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE_NAME,
  });
  return connection;
}
