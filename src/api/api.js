import { NOTION_DATABASE, NOTION_TOKEN } from "@/lib/server-constants";

export const loadNotes = {
  getlistTitles: async (direction) => {
    const res = await fetch(
      `https://api.notion.com/v1/databases/${NOTION_DATABASE}/query`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${NOTION_TOKEN}`,
          "Notion-Version": "2022-06-28",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          sorts: [
            {
              property: "N",
              direction: direction,
            },
          ],
          filter: {
            and: [
              {
                property: "Tags",
                multi_select: { does_not_contain: "undefined" },
              },
            ],
          },
        }),
      }
    );
    const repo = await res.json();
    return repo.results ?? [];
  },
  getNoteById: async (pageId) => {
    const res = await fetch(
      `https://api.notion.com/v1/blocks/${pageId}/children`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${NOTION_TOKEN}`,
          "Notion-Version": "2022-06-28",
        },
      }
    );
    const repo = await res.json();
    return repo.results ?? [];
  },
};
