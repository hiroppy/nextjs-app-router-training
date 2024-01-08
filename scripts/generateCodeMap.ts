import { readFile, writeFile } from "node:fs/promises";
import { join, parse } from "node:path";
import { glob } from "glob";
import { type ExampleName, meta } from "../src/app/examples/data";

(async () => {
  const base = join(__dirname, "../src/app/examples");
  const paths = await glob(join(base, "**/*.{ts,tsx}"));
  const pathMap: Record<string, string[]> = {};

  for (const path of paths) {
    const parsed = parse(path);
    const parts = parsed.dir.split("/");
    const index = parts.indexOf("examples");
    const key = parts[index + 1];

    if (
      /* ignore root */ !key ||
      key === "_hooks" ||
      key === "_generated" ||
      path.includes("data.ts")
    ) {
      continue;
    }

    if (!pathMap[key]) {
      pathMap[key] = [];
    }

    pathMap[key].push(path);
  }

  await Promise.all(
    Object.entries<string[]>(pathMap).map(async ([key, value]) => {
      const codeMap: Record<string, string> = {};
      const code = await Promise.all(
        value.map((path) => readFile(path, "utf-8")),
      );

      for (const [index, path] of value.entries()) {
        const name = path.replace(join(base, key, "/"), "");

        codeMap[name] = code[index];
      }

      await writeFile(
        join(base, "_generated", `${key}.json`),
        JSON.stringify(
          {
            meta: meta[key as ExampleName],
            codes: codeMap,
          },
          null,
          2,
        ),
      );
    }),
  );
})();
