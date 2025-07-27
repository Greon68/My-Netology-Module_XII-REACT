import { useState } from "react";
import { usePolling } from "./usePolling";

export const LatestNews3 = () => {
  const [pollingInterval, setPollingInterval] = useState(5 * 1000);

  const [{ data: news, isLoading }] = usePolling(
    "http://localhost:7070/news/latest",
    pollingInterval,
    []
  );

  return (
    <>
      <h3>Latest news with hook</h3>
      <button onClick={() => setPollingInterval((p) => p - 1000)}>
        Faster
      </button>
      <p>{`interval: ${pollingInterval}`}</p>
      {isLoading && <p>Loading...</p>}
      <ul>
        {news.map((o) => (
          <li key={o.id}>{o.content}</li>
        ))}
      </ul>
    </>
  );
};
