import { readFile, writeFile } from "node:fs/promises";
import { join, parse } from "node:path";
import { glob } from "glob";
import { Kind, meta } from "../src/app/examples/data";

(async () => {
  const base = join(__dirname, "../src/app/examples");
  const paths = (await glob(join(base, "**/*.{ts,tsx}"))).sort();
  const pathMap: Record<
    string,
    {
      kind: Kind;
      paths: string[];
    }
  > = {};

  for (const path of paths) {
    const parsed = parse(path);
    const parts = parsed.dir.split("/");
    const index = parts.indexOf("examples");
    const key = parts[index + /* 1 + (grouping) */ 2];

    if (
      /* ignore root */ !key ||
      key === "_hooks" ||
      key === "_generated" ||
      path.includes("data.ts")
    ) {
      continue;
    }

    if (!pathMap[key]) {
      pathMap[key] = {
        kind: parts[index + 1].replace("(", "").replace(")", "") as Kind,
        paths: [],
      };
    }

    pathMap[key].paths.push(path);
  }

  await Promise.all(
    Object.entries<{ kind: Kind; paths: string[] }>(pathMap).map(
      async ([key, { kind, paths }]) => {
        const codeMap: Record<string, string> = {};
        const code = await Promise.all(
          paths.map((path) => readFile(path, "utf-8")),
        );

        for (const [index, path] of paths.entries()) {
          const name = path.replace(join(base, `(${kind})`, key, "/"), "");

          codeMap[name] = code[index];
        }

        await writeFile(
          join(base, "_generated", `${key}.json`),
          JSON.stringify(
            {
              meta: {
                kind,
                // @ts-expect-error
                ...meta[kind][key],
              },
              codes: codeMap,
            },
            null,
            2,
          ),
        );
      },
    ),
  );
})();
