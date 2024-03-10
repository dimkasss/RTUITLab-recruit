import { useQuery, keepPreviousData } from "@tanstack/react-query";
import {
  getFilteredNews,
  getNews,
  getNewsCategories,
} from "../utils/newsHandler";
import NewsItem, { IArticle } from "../components/NewsItem";
import { ChangeEvent, useEffect, useMemo, useState } from "react";
import { useDebounce } from "../utils/useDebounce";
import DropDownNewsFilter from "../components/DropDownNewsFilter/DropDownNewsFilter";

const NewsPage = () => {
  const { isPending, error, data } = useQuery({
    queryKey: ["news"],
    queryFn: getNews,
    placeholderData: keepPreviousData,
  });

  const [filteredNews, setFilteredNews] = useState<IArticle[]>(
    data?.sources ?? []
  );
  const [category, setCategory] = useState<string>("");
  const [searchInput, setSearchInput] = useState("");
  const { debouncedSearchInput } = useDebounce(searchInput, 500);

  const newsCategories = useMemo(
    () => getNewsCategories(data?.sources),
    [data?.sources]
  );

  const changeCategory = (category: string) => {
    setCategory(category);
  };

  const handleSearchInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };

  useEffect(() => {
    setFilteredNews(
      getFilteredNews(data?.sources, debouncedSearchInput, category)
    );
  }, [debouncedSearchInput, data?.sources, category]);

  if (error) return <div>Error: news service is not reachable</div>;
  if (isPending)
    return (
      <div className="flex justify-center items-center py-5">
        <h1 className="text-2xl">Loading...</h1>
      </div>
    );

  return (
    <>
      <section>
        <div className="flex">
          <input
            className="text-black p-2 focus:outline-none rounded-md w-1/3 bg-[--bg] text-[--text] border border-[--text] focus:text-[--text]"
            type="text"
            placeholder="Find news here"
            onChange={handleSearchInputChange}
          />
          <DropDownNewsFilter
            categories={newsCategories}
            changeCategory={changeCategory}
          />
        </div>

        {filteredNews.length > 0 ? (
          filteredNews.map((article) => (
            <NewsItem key={article.id} article={article} />
          ))
        ) : (
          <div className="flex justify-center items-center py-5">
            <h1 className="text-2xl">No news found!</h1>
          </div>
        )}
      </section>
    </>
  );
};

export default NewsPage;
