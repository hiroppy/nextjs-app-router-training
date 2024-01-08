"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { convertURLParamToFilePath } from "../_utils/filePath";
import { Code } from "./code";
import { FolderIcon } from "./icons/folder";

export type Props = {
  exampleName: string;
  filePaths: string[];
  code: Record<string, string>;
};

const basePath = "src/app/examples/";

export function FileTree({ exampleName, filePaths, code }: Props) {
  const params = useSearchParams();
  const filePathFromParams = params.get("file-path");
  const paths = filePaths
    .map((path) => `${basePath}${path}`)
    .sort((a) => {
      if (a.includes("_components") || a.includes("_utils")) {
        return 1;
      }

      return -1;
    });
  const initialPath = filePathFromParams
    ? convertURLParamToFilePath(filePathFromParams)
    : paths[0]?.replace(basePath, "") ?? "";
  const [selectedPath, setSelectedPath] = useState(initialPath);
  const tree = createTree(exampleName, paths);
  const renderTree = (node: Tree, path = "") => {
    return Object.keys(node).map((key) => {
      const newPath = path ? `${path}/${key}` : key;
      const hasChildren = Object.keys(node[key]).length > 0;
      const basePathWithName = `${basePath}${exampleName}/`;

      return (
        <summary key={newPath} className="list-none">
          <div className="flex gap-1 items-center">
            {hasChildren && <FolderIcon />}
            <button
              type="button"
              className={[
                !hasChildren
                  ? "hover:text-blue-300 cursor-pointer"
                  : "text-gray-400",
                newPath.replace(basePathWithName, "") === selectedPath
                  ? "text-blue-300"
                  : "",
              ].join(" ")}
              onClick={() => {
                if (!hasChildren) {
                  setSelectedPath(newPath.replace(basePathWithName, ""));
                }
              }}
            >
              {`${key} ${hasChildren ? "/" : ""}`.trim()}
            </button>
          </div>
          <ul className="border-l border-l-gray-600 mt-1 ml-2">
            {hasChildren && (
              <li className="ml-6">{renderTree(node[key], newPath)}</li>
            )}
          </ul>
        </summary>
      );
    });
  };

  useEffect(() => {
    setSelectedPath(initialPath);
  }, [initialPath]);

  return (
    <div className="text-gray-100 md:h-96 flex flex-col md:flex-row">
      <div className="min-w-max overflow-y-auto pr-10 h-64 md:h-auto">
        {renderTree(tree)}
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
      pathParts = [`src/app/examples/${name}`, ...pathParts.slice(3)];
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
