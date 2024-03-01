import { useQuery, keepPreviousData } from "@tanstack/react-query";
import { getFilteredNews, getNews } from "../utils/getNews";
import NewsItem, { IArticle } from "../components/NewsItem";
import { ChangeEvent, useEffect, useState } from "react";
import { useDebounce } from "../utils/useDebounce";

const NewsPage = () => {
  const { isPending, error, data } = useQuery({
    queryKey: ["news"],
    queryFn: () => getNews(),
    placeholderData: keepPreviousData,
  });

  const [filteredNews, setFilteredNews] = useState<IArticle[]>(
    data?.sources ?? []
  );
  const [searchInput, setSearchInput] = useState("");
  const { debouncedSearchInput } = useDebounce(searchInput, 500);

  const handleSearchInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };

  useEffect(() => {
    setFilteredNews(getFilteredNews(data?.sources, debouncedSearchInput));
  }, [debouncedSearchInput, data?.sources]);

  if (error) return <div>Error: news service is not reachable</div>;
  if (isPending) return <div>Loading...</div>;

  return (
    <>
      <div>
        <input
          className="text-black"
          type="text"
          placeholder="Find news here"
          onChange={handleSearchInputChange}
        />
        {filteredNews.map((article) => (
          <NewsItem key={article.id} article={article} />
        ))}
      </div>
    </>
  );
};

export default NewsPage;
