import { Client } from "@notionhq/client";
import { GetDatabaseResponse } from "@notionhq/client/build/src/api-endpoints";

interface I_NotionDBprops {
  database_id: string;
  filter?: any;
  sorts?: any;
}

const notion = new Client({
  auth: process.env.NOTION_API_KEY,
});

async function getNotionDBKey(database_id: any) {
  try {
    const response: GetDatabaseResponse = await notion.databases.retrieve({
      database_id,
    });
    const result = Object.entries(response.properties).map(
      (items: any) => items[1].id
    );
    console.log("🚀 ~ getNotionDBKey ~ result:", result);
    return result;
  } catch (error) {
    return [];
  }
}

async function getNotionKeyContentData({
  database_id,
  filter,
  sorts,
}: I_NotionDBprops) {
  try {
    const queryOptions: any = {
      database_id,
      filter_properties: await getNotionDBKey(database_id),
    };

    // 필터 조건이 주어졌을 때만 필터를 추가
    if (filter) {
      queryOptions.filter = filter;
    }
    // 필터 조건이 주어졌을 때만 필터를 추가
    if (sorts) {
      queryOptions.sorts = sorts;
    }

    const response = await notion.databases.query(queryOptions);
    // console.log("🚀 ~ getNotionKeyContentData ~ response:", response.results);

    return response.results.map((items: any, idx: number) => {
      const result = {
        key: items.properties.key.title[0].text.content,
        content: items.properties.content.rich_text[0].text.content,
      };
      // console.log("🚀 ~ returnresponse.results.map ~ result:", result);
      return result;
    });
  } catch (error) {
    return [];
  }
}

export default getNotionKeyContentData;
