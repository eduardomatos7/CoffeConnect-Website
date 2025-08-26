import { NextResponse } from "next/server";
import { getCurrentUser } from "@/lib/get-current-user";

export async function GET() {
  const user = await getCurrentUser();
  if (!user) return NextResponse.json({ user: null }, { status: 200 });
  return NextResponse.json({ user }, { status: 200 });
}
