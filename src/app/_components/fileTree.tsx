"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Code } from "./code";
import { FolderIcon } from "./icons/folder";

export type Props = {
  exampleName: string;
  filePaths: string[];
  code: Record<string, string>;
};

const basePath = "src/app/examples/";

// https://nextjs.org/docs/getting-started/project-structure
const reservedFiles = [
  "layout.tsx",
  "template.tsx",
  "page.tsx",
  "default.tsx",
  "loading.tsx",
  "not-found.tsx",
  "error.tsx",
  "route.ts",
  "opengraph-image.tsx",
];

export function FileTree({ exampleName, filePaths, code }: Props) {
  const params = useSearchParams();
  const filePathFromParams = params.get("file-path");
  const paths = filePaths
    .map((path) => `${basePath}${path}`)
    .sort((a, b) => {
      if (
        b.includes("_components") ||
        b.includes("_utils") ||
        b.includes("_hooks")
      ) {
        return -1;
      }

      return 1;
    });
  const initialPath =
    filePathFromParams ?? paths[0]?.replace(basePath, "") ?? "";
  const [selectedPath, setSelectedPath] = useState(initialPath);
  const tree = createTree(exampleName, paths);
  const renderTree = (node: Tree, i: number, path = "") => {
    return Object.keys(node).map((key) => {
      const newPath = path ? `${path}/${key}` : `src/${key}`;
      const hasChildren = Object.keys(node[key]).length > 0;
      const basePathWithName = `${basePath}${exampleName}/`;
      const position = i === 0 ? 0 : 24;

      console.log(key);
      if (!hasChildren) {
        return (
          <li
            key={newPath}
            style={{
              marginLeft: position,
            }}
            className={[
              "mt-1 hover:text-blue-300 cursor-pointer",
              newPath.replace(basePathWithName, "") === selectedPath
                ? "text-blue-300"
                : "",
            ].join(" ")}
          >
            <button
              type="button"
              onClick={() => {
                setSelectedPath(newPath.replace(basePathWithName, ""));
              }}
              className="flex items-center gap-2 justify-center"
            >
              {key}
              {reservedFiles.includes(key) && (
                <div className="relative rounded-full bg-gray-500 w-2 h-2 group text-gray-100">
                  <span className="absolute group-hover:block hidden bg-gray-600 bg-opacity-90 py-1 px-2 rounded-md w-max -top-9 -right-14 text-sm">
                    reserved file name
                  </span>
                </div>
              )}
            </button>
          </li>
        );
      }

      return (
        <details
          key={newPath}
          className="list-none"
          style={{
            marginLeft: position,
          }}
          open
        >
          <summary
            className={[
              "flex gap-1 items-center list-none cursor-pointer text-gray-400 select-none",
              i !== 0 ? "mt-1" : "",
            ].join(" ")}
          >
            <FolderIcon />
            {`${key} /`}
          </summary>
          <ul className="ml-2 t-1 border-l border-l-gray-600">
            {renderTree(node[key], i + 1, newPath)}
          </ul>
        </details>
      );
    });
  };

  useEffect(() => {
    setSelectedPath(initialPath);
  }, [initialPath]);

  return (
    <div className="text-gray-100 flex flex-col md:flex-row md:h-[calc(100vh_-_360px)]">
      <div className="min-w-max overflow-y-auto pr-10 max-h-48 md:max-h-none mb-2 md:mb-0">
        {renderTree(tree, 0)}
      </div>
      {Object.keys(code).length !== 0 && (
        <div className="border-gray-600 overflow-auto flex-1 border-t md:border-l md:border-t-0 h-2 md:h-auto">
          <Code code={code[selectedPath] ?? ""} />
        </div>
      )}
    </div>
  );
}

type Tree = {
  [key: string]: Tree;
};

function createTree(name: string, paths: Props["filePaths"]) {
  const tree: Tree = {};

  for (const path of paths) {
    let pathParts = path.split("/");
    let currentPart = tree;

    // If the path starts with "src/app/examples", treat it as a single key
    if (pathParts.slice(0, 3).join("/") === "src/app/examples") {
      pathParts = [`app/examples/${name}`, ...pathParts.slice(3)];
    }

    for (const part of pathParts) {
      if (!currentPart[part]) {
        currentPart[part] = {};
      }

      currentPart = currentPart[part];
    }
  }

  return tree;
}
