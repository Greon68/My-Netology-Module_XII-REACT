import { useState, useEffect, useRef } from "react";

import { INews } from "../../models";

export const LatestNews2 = () => {
  const [news, setNews] = useState<INews[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const timestampRef = useRef<number>();

  //   useEffect(() => {
  //     const intervalId = setInterval(async () => {
  //       const timestamp = Date.now();
  //       timestampRef.current = timestamp;
  //       try {
  //         const response = await fetch(import.meta.env.VITE_NEWS_URL);
  //         if (!response.ok) {
  //           throw new Error(response.statusText);
  //         }
  //         const news = await response.json();
  //         if (timestampRef.current === timestamp) {
  //           setNews(news);
  //         }
  //       } catch (e) {
  //         console.error(e);
  //       }
  //     }, 5 * 1000);
  //     return () => clearInterval(intervalId);
  //   }, []);

  useEffect(() => {
    const fetchNews = async () => {
      const timestamp = Date.now();
      timestampRef.current = timestamp;

      setLoading(true);
      try {
        const response = await fetch("http://localhost:7070/news/latest");
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        const news = await response.json();
        if (timestampRef.current === timestamp) {
          setNews(news);
        }
        setError(false);
      } catch (e) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();

    const intervalId = setInterval(fetchNews, 5 * 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <h3>LatestNews</h3>
      {loading && <p>Loading...</p>}
      {error && <p>Something went wrong...</p>}
      <ul>
        {news.map((o) => (
          <li key={o.id}>{o.content}</li>
        ))}
      </ul>
    </>
  );
};
