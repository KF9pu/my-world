import { Client, iteratePaginatedAPI } from "@notionhq/client";
const notion = new Client({
  auth: process.env.NOTION_API_KEY,
});

async function getNotionDBData(database_id: any) {
  try {
    // url : qNqR
    // key : title
    // const response = await notion.databases.retrieve({
    //   database_id,
    // });
    const response = await notion.databases.query({
      database_id,
      filter_properties: ["title", "qNqR"],
    });
    console.log("🚀 ~ getPage ~ response:", response.results);
    return response.results.map((items: any, idx: number) => {
      console.log("🚀 ~ data ~ items:", items.properties);
      return {
        key: items.properties.key.title[0].text.content,
        url: items.properties.url.rich_text[0].text.content,
      };
    });
  } catch (error) {
    return [];
  }
}

export default getNotionDBData;
