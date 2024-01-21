import { useEffect, useState } from "react";

type Meta = Record<string, string | null>;

export function useGetMeta(path: string) {
  const [meta, setMeta] = useState<Meta | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    let ignore = false;

    if (ignore) {
      return;
    }

    (async () => {
      setLoading(true);
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_SITE_URL}/examples/${path}`,
        );
        const parser = new DOMParser();
        const doc = parser.parseFromString(await res.text(), "text/html");
        const data: Meta = {
          title: doc.title,
          description:
            doc.querySelector<HTMLMetaElement>('meta[name="description"]')
              ?.content ?? "",
        };

        for (const meta of doc.head.children) {
          const prop = meta.getAttribute("property");

          if (prop) {
            data[prop] = meta.getAttribute("content");
          }
        }
        setMeta(data);
      } catch (e) {
        if (e instanceof Error) {
          setError(e);
        }
      } finally {
        setLoading(false);
      }
    })();

    return () => {
      ignore = true;
    };
  }, [path]);

  return <const>{ meta, loading, error };
}
