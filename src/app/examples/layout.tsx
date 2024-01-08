// ** don't add system code like this component to samples **

// this layout uses a client component
// since this component never knows the current sample path
// (if we pass the path via middleware, the first rendering will know only the current path)
"use client";

import { usePathname } from "next/navigation";
import { useEffect, type PropsWithChildren, useState } from "react";
import {
  FileTree,
  type Props as FileTreeProps,
} from "@/app/_components/fileTree";
import type { Meta } from "./data";
import Link from "next/link";

export default function Layout({ children }: PropsWithChildren) {
  const pathname = usePathname();
  const [loading, setLoading] = useState(true);
  const [meta, setMeta] = useState<Meta | null>(null);
  const [code, setCode] = useState<FileTreeProps>({
    exampleName: "",
    filePaths: [],
    code: {},
  });
  const [isOpenDescription, setIsOpenDescription] = useState(false);

  // don't use Route Handlers in this case
  // since the sample directory has various cases which mean,
  // the route handler can't store data as cache
  useEffect(() => {
    (async () => {
      setLoading(true);
      const exampleName = (() => {
        // for grouping
        if (pathname === "/examples/grouping-2") {
          return "(grouping)";
        }
        // dynamic routes
        if (pathname.includes("/examples/dynamic-required-single")) {
          return "dynamic-required-single";
        }
        if (pathname.includes("/examples/dynamic-required-multiple")) {
          return "dynamic-required-multiple";
        }
        if (pathname.includes("/examples/dynamic-optional-multiple")) {
          return "dynamic-optional-multiple";
        }
        // intercepting
        if (pathname.includes("/examples/intercepting")) {
          return "intercepting";
        }
        // service
        if (pathname.includes("/examples/service-e-commerce")) {
          return "service-e-commerce";
        }

        return pathname.replace("/examples/", "");
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
      } finally {
        setLoading(false);
      }
    })();
  }, [pathname]);

  if (loading) {
    return null;
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl text-gray-50">{meta?.title}</h2>
        {meta?.doc && (
          <Link
            href={meta?.doc}
            target="_blank"
            className="border border-gray-600 py-1 px-2 rounded-md"
          >
            Documentation
          </Link>
        )}
      </div>
      <div className="flex flex-col gap-2">
        <pre
          className={[
            "text-gray-300 whitespace-pre-wrap overflow-hidden",
            isOpenDescription ? "max-h-full" : "h-12",
          ].join(" ")}
        >
          {meta?.description.trim()}
        </pre>
        <button
          className="text-gray-400 w-fit m-auto"
          onClick={() => setIsOpenDescription(!isOpenDescription)}
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
