// app/api/hello/route.js
import { getNotionKeyContentData as getDatabase } from "@/features";
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
