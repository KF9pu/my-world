// app/api/hello/route.js
import { getNotionDBData as getDatabase } from "@/features";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const database_id = process.env.NOTION_MY_IMAGE_DB_ID;
  const data: any = await getDatabase(database_id);

  return NextResponse.json({ data });
}

export async function POST(request: Request) {
  const body = await request.json();
  return NextResponse.json({ message: `Hello, ${body.name}!` });
}
