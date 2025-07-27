import { useState, useEffect, useRef } from "react";
import { INews } from "../../models";

type PollingResult = {
  data: INews[];
  isLoading: boolean;
  hasError: Error | null;
};

export const usePolling = (
  url: string,
  interval: number,
  initialData: INews[]
): [PollingResult] => {
  const [data, setData] = useState<INews[]>(initialData);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [hasError, setError] = useState<Error | null>(null);
  const timestampRef = useRef<number>();

  useEffect(() => {
    const fetchData = async () => {
      const timestamp = Date.now();
      timestampRef.current = timestamp;
      setLoading(true);

      try {
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error(response.statusText);
        }

        const news: INews[] = await response.json();

        if (timestampRef.current === timestamp) {
          setData(news);
        }

        setError(null);
      } catch (e) {
        if (e instanceof Error) setError(e);
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    const intervalId = setInterval(fetchData, interval);
    return () => clearInterval(intervalId);
  }, [url, interval]);

  return [{ data, isLoading, hasError }];
};
