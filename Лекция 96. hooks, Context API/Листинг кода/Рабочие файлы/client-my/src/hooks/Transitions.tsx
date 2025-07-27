import { useState, useTransition, useDeferredValue } from "react";

const SearchResults = ({ searchResult }: { searchResult: string[] }) => {
  // const deferredSearchResult = useDeferredValue(searchResult);
  return (
    <ul>
      {searchResult.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
};

export const Transitions = () => {
  const [searchResult, setSearchResult] = useState<string[]>([]);
  const [searchCount, setSearchCount] = useState(0);
  // const [isPending, startTransition] = useTransition();

  const makeSearch = () => {
    setSearchCount((prevCount) => prevCount + 1);
    // startTransition(() => {
    setSearchResult(
      Array(20000)
        .fill("")
        .map((_, i) => `ListItem ${i + 1}`)
    );
    // });
  };

  return (
    <div>
      <button onClick={makeSearch}>
        {searchCount === 0 ? "Search" : `Search ${searchCount} times`}
      </button>
      <section>
        {/* {isPending ? "Loading..." : null} */}
        <SearchResults searchResult={searchResult} />
      </section>
    </div>
  );
};
