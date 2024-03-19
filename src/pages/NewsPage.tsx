import { useQuery, keepPreviousData } from "@tanstack/react-query";
import { getFilteredNews, getNews, getNewsAuthors } from "../utils/newsHandler";
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

  const [isFavOnly, setFavOnly] = useState(false);

  const [filteredNews, setFilteredNews] = useState<IArticle[]>(
    data?.articles ?? []
  );

  const [fav, setFav] = useState<IArticle[]>(
    localStorage.getItem("fav") ? JSON.parse(localStorage.getItem("fav")!) : []
  );

  const [category, setCategory] = useState<string>("");
  const [searchInput, setSearchInput] = useState("");
  const { debouncedSearchInput } = useDebounce(searchInput, 500);

  const newsCategories = useMemo(
    () => getNewsAuthors(data?.articles),
    [data?.articles]
  );

  const changeCategory = (category: string) => {
    setCategory(category);
  };

  const handleSearchInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };

  useEffect(() => {
    setFilteredNews(
      getFilteredNews(
        data?.articles,
        debouncedSearchInput,
        category,
        isFavOnly,
        fav
      )
    );
  }, [debouncedSearchInput, data, category, isFavOnly, fav]);

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
        <div className="flex w-full justify-between">
          <div className="flex w-2/3">
            <input
              className="text-black p-2 focus:outline-none rounded-md w-1/3 md:w-2/3 bg-[--bg] text-[--text] border border-[--text] focus:text-[--text]"
              type="text"
              placeholder="Find news here"
              onChange={handleSearchInputChange}
            />
            <DropDownNewsFilter
              label={category == "" ? "Categories" : category}
              data={newsCategories}
              onPick={changeCategory}
            />
          </div>
          <label className="*:px-2 flex items-center">
            <input
              onClick={() => setFavOnly(!isFavOnly)}
              type="checkbox"
              className="scale-110"
            />
            <span>Favorite only</span>
          </label>
        </div>
        {filteredNews.length > 0 ? (
          filteredNews.map((article) => (
            <NewsItem
              setFav={setFav}
              fav={fav}
              key={article.title}
              article={article}
            />
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
