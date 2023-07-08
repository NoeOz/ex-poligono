const normalizeId = (id) => {
  if (!id) return id;
  if (id.length === 36) return id;
  if (id.length !== 32) {
    throw new Error(
      `Invalid blog-index-id: ${id} should be 32 characters long. Info here https://github.com/ijjk/notion-blog#getting-blog-index-and-token`
    );
  }
  return `${id.substr(0, 8)}-${id.substr(8, 4)}-${id.substr(12, 4)}-${id.substr(
    16,
    4
  )}-${id.substr(20)}`;
};

const NOTION_TOKEN = process.env.NEXT_PUBLIC_NOTION_TOKEN;
const NOTION_DATABASE = normalizeId(process.env.NEXT_PUBLIC_NOTION_DATABASE);
const API_ENDPOINT = "https://www.notion.so/api/v3";

module.exports = {
  NOTION_TOKEN,
  NOTION_DATABASE,
  API_ENDPOINT,
  normalizeId,
};
