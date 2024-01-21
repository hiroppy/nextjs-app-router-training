// ** don't add system code like this component to samples **

// this template uses a client component
// since this component never knows the current sample path
// (if we pass the path via middleware, the first rendering will know only the current path)
"use client";

import {
  FileTree,
  type Props as FileTreeProps,
} from "@/app/_components/fileTree";
import Link from "next/link";
import { notFound, usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { type PropsWithChildren, Suspense, useEffect, useState } from "react";
import { GitHubIcon } from "../_components/icons/github";
import { Reload } from "../_components/icons/reload";
import { SkeletonBox } from "../_components/skeleton";
import type { Meta } from "./data";

export default function Template({ children }: PropsWithChildren) {
  const router = useRouter();
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
  const exampleName = (() => {
    const parts = pathname.split("/");
    // always flat
    return parts[2];
  })();

  // don't use Route Handlers in this case
  // since the sample directory has various cases which mean,
  // the route handler can't store data as cache
  useEffect(() => {
    (async () => {
      setLoading(true);

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
  }, [exampleName]);

  useEffect(() => {
    if (process.env.NODE_ENV === "production") {
      window.addEventListener("load", () => {
        if ("serviceWorker" in navigator) {
          navigator.serviceWorker.register("/service-worker.js");
        }
      });
    }
  }, []);

  if (hasError) {
    return notFound();
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col-reverse sm:flex-row justify-between items-end sm:items-center gap-2">
        {loading ? (
          <SkeletonBox>
            <div className="h-8 bg-gray-700 w-72 rounded-md self-start" />
          </SkeletonBox>
        ) : (
          <h2 className="text-2xl text-gray-50 self-start">{meta?.title}</h2>
        )}
        <Link
          href={meta?.doc ?? "https://nextjs.org/docs"}
          target="_blank"
          className="border border-gray-600 py-1 px-2 rounded-md hover:text-blue-300 hover:border-blue-300"
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
          type="button"
          className={[
            "w-fit self-end",
            loading ? "text-gray-600" : "text-gray-400 hover:text-blue-300",
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
          <Section
            title="Preview"
            action={
              <button
                type="button"
                onClick={() => router.refresh()}
                className="text-gray-400"
              >
                <Reload />
              </button>
            }
          >
            {children}
          </Section>
        </div>
        <div className="flex-1 overflow-auto">
          <Section
            title="Code"
            action={
              <Link
                href={`https://github.com/hiroppy/nextjs-app-router-training/tree/main/src/app/examples/(${meta?.kind})/${exampleName}`}
                target="_blank"
                className="flex gap-2 items-center text-gray-400 hover:text-blue-300"
              >
                <GitHubIcon size="small" />
                Edit
              </Link>
            }
          >
            <Suspense>
              <FileTree {...code} />
            </Suspense>
          </Section>
        </div>
      </div>
    </div>
  );
}

function Section({
  title,
  action,
  children,
}: PropsWithChildren<{ title: string; action?: React.ReactNode }>) {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between items-center">
        <h3 className="text-xl">{title}</h3>
        {action}
      </div>
      <div className="border border-gray-500 rounded-md p-4 overflow-auto">
        {children}
      </div>
    </div>
  );
}
