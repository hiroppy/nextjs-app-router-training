import { join } from "node:path";
import algoliasearch from "algoliasearch";
import { glob } from "glob";

(async () => {
  if (
    !process.env.NEXT_PUBLIC_ALGOLIA_APPLICATION_ID ||
    !process.env.ALGOLIA_ADMIN_KEY
  ) {
    throw new Error(
      "Please set NEXT_PUBLIC_ALGOLIA_APPLICATION_ID and ALGOLIA_ADMIN_KEY env vars",
    );
  }

  const list = glob.sync(
    join(__dirname, "../src/app/examples/_generated/*.json"),
    {
      // too huge size
      ignore: ["**/service-e-commerce.json"],
    },
  );
  const contents = await Promise.all(
    list.map(async (path) => {
      const res = await import(path).then((v) => v.default);

      return {
        ...res,
        _tags: [res.meta.kind],
      };
    }),
  );
  const client = algoliasearch(
    process.env.NEXT_PUBLIC_ALGOLIA_APPLICATION_ID,
    process.env.ALGOLIA_ADMIN_KEY,
  );
  const index = client.initIndex("examples");

  try {
    await index.saveObjects(contents, {
      autoGenerateObjectIDIfNotExist: true,
    });
  } catch (e) {
    console.error(e);
  }
})();
