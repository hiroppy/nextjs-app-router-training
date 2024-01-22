import Link from "next/link";
import { meta } from "./examples/data";

export default function Page() {
  return (
    <div className="flex flex-col gap-10 py-6">
      <h1 className="text-center text-4xl font-semibold text-gray-50 leading-normal">
        Next.js App Router Training
      </h1>
      <p className="text-center text-lg text-gray-400">
        Introducing various basic patterns of app router with{" "}
        <span className="text-gray-50 font-semibold">simplified code</span>.
      </p>
      <hr className="h-px my-6 border-0 bg-gray-700" />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-5 max-w-screen-xl md:mx-auto w-[90%]">
        {Object.entries(meta).map(([kind, examples]) => (
          <div key={kind}>
            <h2 className="text-2xl font-semibold text-gray-100">
              {capitalizeWords(kind)}
            </h2>
            <ul className="mt-2 text-gray-300">
              {Object.values(examples).map(({ path, title }) => (
                <li
                  key={path}
                  className="ml-4 flex gap-1 items-center hover:text-gray-400 w-fit"
                >
                  <svg
                    width="3"
                    height="24"
                    viewBox="0 -9 3 24"
                    className="mr-1 overflow-visible"
                  >
                    <title>arrow</title>
                    <path
                      d="M0 0L3 3L0 6"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={1.5}
                      strokeLinecap="round"
                    />
                  </svg>
                  <Link href={`examples/${path}`}>{title}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

function capitalizeWords(str: string) {
  return str
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
}
