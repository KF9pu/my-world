// app/api/hello/route.js
import { getNotionKeyContentData as getDatabase } from "@/libs";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const database_id = process.env.NOTION_KEY_CONTENT_DB_ID!;
  const data: any = await getDatabase({
    database_id,
    filter: {
      property: "분류",
      select: {
        equals: "DeckCard",
      },
    },
  });

  return NextResponse.json({ data });
}

export async function POST(request: Request) {
  const body = await request.json();
  return NextResponse.json({ message: `Hello, ${body.name}!` });
}
