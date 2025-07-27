import { useState, useEffect } from "react";
import { INews } from "../../models;

export const LatestNews = () => {
  const [news, setNews] = useState<INews[]>([]);
  console.log(news);

  useEffect(() => {
    const intervalId = setInterval(async () => {
      try {
        const response = await fetch('http://localhost:7070/news/latest');
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        const news = await response.json();
        setNews(news);
      } catch (e) {
        console.error(e);
      }
    }, 5 * 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <h2>Latest news</h2>
      <ul>
        {news.map((o) => (
          <li key={o.id}>{o.content}</li>
        ))}
      </ul>
    </>
  );
};
