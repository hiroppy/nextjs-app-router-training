import algoliasearch from "algoliasearch/lite";

export const client = algoliasearch(
  process.env.NEXT_PUBLIC_ALGOLIA_APPLICATION_ID,
  process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_ONLY_API_KEY,
);

export function buildFilters(
  queries: Record<string, string | string[] | undefined>,
) {
  const items: string[] = [];

  function item(key: string, value: string) {
    return `${key}:${value}`;
  }

  for (const [key, value] of Object.entries(queries)) {
    if (typeof value === "string") {
      items.push(item(key, value));
    }

    if (Array.isArray(value)) {
      items.push(`${value.map((v) => item(key, v)).join(" OR ")}`);
    }
  }

  return items.join(" AND ");
}
