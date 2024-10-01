import { NextRequest } from "next/server";
import { updateSession } from "../utils/libs/libs";

export async function middleware(request: NextRequest) {
  return await updateSession(request);
}