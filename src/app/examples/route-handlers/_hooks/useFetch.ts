import { useEffect, useState } from "react";

export function useFetch<T = unknown>(path: string) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);

        const data = await (await fetch(path)).json();

        setData(data);
      } catch (e) {
        if (e instanceof Error) {
          setError(e);
        }
      } finally {
        setLoading(false);
      }
    })();
  }, [path]);

  return <const>{ data, loading, error };
}
