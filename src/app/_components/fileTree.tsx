"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Code } from "./code";
import { FolderIcon } from "./icons/folder";

export type Props = {
  exampleName: string;
  isIframe: boolean;
  filePaths: string[];
  code: Record<string, string>;
};

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

export function FileTree({ exampleName, filePaths, code, isIframe }: Props) {
  const params = useSearchParams();
  const filePathFromParams = params.get("file-path");
  const paths = filePaths
    .map((path) => `${exampleName}/${path}`)
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
  const initialCandidate = `${exampleName}/page.tsx`;
  const initialPath =
    filePathFromParams ??
    (paths.includes(initialCandidate) ? initialCandidate : (paths[0] ?? ""));
  const [selectedPath, setSelectedPath] = useState(initialPath);
  const tree = createTree(paths);

  const renderTree = (node: Tree, i: number, path = "") => {
    return Object.keys(node).map((key) => {
      const newPath = path ? `${path}/${key}` : `${key}`;
      const hasChildren = Object.keys(node[key]).length > 0;
      const basePathWithName = `${exampleName}/`;
      const position = i === 0 ? 0 : 24;

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
    setSelectedPath(initialPath.replace(`${exampleName}/`, ""));
  }, [initialPath, exampleName]);

  return (
    <div
      className={[
        "text-gray-100 flex flex-col lg:flex-row",
        isIframe ? "lg:max-h-96" : "lg:h-[calc(100vh_-_340px)]",
      ].join(" ")}
    >
      <div className="min-w-max overflow-y-auto pr-6 max-h-48 lg:max-h-none mb-2 lg:mb-0">
        {renderTree(tree, 0)}
      </div>
      {Object.keys(code).length !== 0 && (
        <div className="border-gray-600 overflow-auto flex-1 border-t lg:border-l lg:border-t-0 h-2 lg:h-auto">
          <Code code={code[selectedPath] ?? ""} />
        </div>
      )}
    </div>
  );
}

type Tree = {
  [key: string]: Tree;
};

function createTree(paths: Props["filePaths"]) {
  const tree: Tree = {};

  for (const path of paths) {
    const pathParts = path.split("/");
    let currentPart = tree;

    for (const part of pathParts) {
      if (!currentPart[part]) {
        currentPart[part] = {};
      }

      currentPart = currentPart[part];
    }
  }

  return tree;
}
