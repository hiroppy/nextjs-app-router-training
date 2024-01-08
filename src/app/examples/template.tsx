// ** don't add system code like this component to samples **

// this template uses a client component
// since this component never knows the current sample path
// (if we pass the path via middleware, the first rendering will know only the current path)
"use client";

import { notFound, usePathname } from "next/navigation";
import { useEffect, type PropsWithChildren, useState } from "react";
import {
  FileTree,
  type Props as FileTreeProps,
} from "@/app/_components/fileTree";
import type { Meta } from "./data";
import Link from "next/link";
import { SkeletonBox } from "../_components/skeleton";

export default function Template({ children }: PropsWithChildren) {
  const pathname = usePathname();
  const [loading, setLoading] = useState(true);
  const [meta, setMeta] = useState<Meta | null>(null);
  const [code, setCode] = useState<FileTreeProps>({
    exampleName: "",
    filePaths: [],
    code: {},
  });
  const [isOpenDescription, setIsOpenDescription] = useState(false);
  const [hasError, setHasError] = useState(false);

  // don't use Route Handlers in this case
  // since the sample directory has various cases which mean,
  // the route handler can't store data as cache
  useEffect(() => {
    (async () => {
      setLoading(true);
      const exampleName = (() => {
        const parts = pathname.split("/");
        // always flat
        const name = parts[2];

        // for grouping
        if (name === "grouping-2") {
          return "(grouping)";
        }

        return name;
      })();

      try {
        const data = await import(
          /* webpackPreload: true */ `./_generated/${exampleName}.json`
        );

        setMeta(data.meta);
        setCode({
          exampleName,
          filePaths: Object.keys(data.codes),
          code: data.codes,
        });
      } catch {
        // basically, unexpected since next.js prevents mismatching paths
        setHasError(true);
      } finally {
        setLoading(false);
      }
    })();
  }, [pathname]);

  if (hasError) {
    return notFound();
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between items-center">
        {loading ? (
          <SkeletonBox>
            <div className="h-8 bg-gray-700 w-64 rounded-md" />
          </SkeletonBox>
        ) : (
          <h2 className="text-2xl text-gray-50">{meta?.title}</h2>
        )}
        <Link
          href={meta?.doc ?? ""}
          target="_blank"
          className="border border-gray-600 py-1 px-2 rounded-md"
        >
          Documentation
        </Link>
      </div>
      <div className="flex flex-col gap-2">
        {loading ? (
          <SkeletonBox>
            <div className="h-4 rounded-full bg-gray-700 mb-2" />
            <div className="h-4 rounded-full bg-gray-700 mb-2" />
          </SkeletonBox>
        ) : (
          <pre
            className={[
              "text-gray-300 whitespace-pre-wrap overflow-hidden",
              isOpenDescription ? "max-h-full" : "h-12",
            ].join(" ")}
          >
            {meta?.description.trim()}
          </pre>
        )}
        <button
          className={[
            "w-fit self-end",
            loading ? "text-gray-600" : "text-gray-400",
          ].join(" ")}
          onClick={() => {
            if (!loading) {
              setIsOpenDescription(!isOpenDescription);
            }
          }}
        >
          {isOpenDescription ? "read less" : "read more"}
        </button>
      </div>
      <div className="flex gap-4 flex-col lg:flex-row">
        <div className="lg:w-96 lg:min-w-96">
          <Section title="Preview">{children}</Section>
        </div>
        <div className="flex-1 overflow-auto">
          <Section title="Code">
            <FileTree {...code} />
          </Section>
        </div>
      </div>
    </div>
  );
}

function Section({ title, children }: PropsWithChildren<{ title: string }>) {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-xl">{title}</h3>
      <div className="border border-gray-500 rounded-md p-4 overflow-auto">
        {children}
      </div>
    </div>
  );
}
