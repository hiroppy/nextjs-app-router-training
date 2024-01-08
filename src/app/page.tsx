import Link from "next/link";
import { meta, type Meta } from "./examples/data";

export default function Home() {
  const kindMap = groupMetaByKind(meta);

  return (
    <div className="flex flex-col gap-10 py-8 px-5">
      <h1 className="text-center text-4xl font-semibold text-gray-50">
        Next.js App Router Training
      </h1>
      <p className="text-center text-lg text-gray-400">
        Introducing various patterns of app router with{" "}
        <span className="text-orange-300">simplified code</span>.
      </p>
      <hr className="h-px my-8 border-0 bg-gray-700" />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-5">
        {Array.from(kindMap).map(([key, value]) => (
          <div key={key}>
            <h2 className="text-2xl font-semibold text-gray-200">
              {capitalizeWords(key)}
            </h2>
            <ul className="mt-2 text-gray-300">
              {value.map(({ path, title }) => (
                <li
                  key={path}
                  className="ml-4 flex gap-1 items-center hover:text-gray-400"
                >
                  <svg
                    width="3"
                    height="24"
                    viewBox="0 -9 3 24"
                    className="mr-1 overflow-visible"
                  >
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
      {/* <hr className="h-px my-8 border-0 bg-gray-700" /> */}
      <div>if you want to add a new example, please read ...</div>
    </div>
  );
}

function groupMetaByKind(b: typeof meta) {
  const kindMap = new Map<Meta["kind"], Meta[]>();

  Object.values(b).forEach((meta) => {
    const kind = meta.kind;

    if (!kindMap.has(kind)) {
      kindMap.set(kind, []);
    }

    kindMap.get(kind)?.push(meta);
  });

  return kindMap;
}

function capitalizeWords(str: string) {
  return str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
}
