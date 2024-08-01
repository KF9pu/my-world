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
        equals: "thisProject", // notion db에서 thisProject만 가져옴
      },
    },
    sorts: [
      {
        property: "idx",
        direction: "ascending", //오름차순(ascending), 내림차순(descending)
      },
    ],
  });

  return NextResponse.json({ data });
}
