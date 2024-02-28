import { useQuery, keepPreviousData } from "@tanstack/react-query";
import { getNews } from "../utils/getNews";
import NewsItem from "../components/NewsItem";
import SearchBar from "../components/SearchBar";

const NewsPage = () => {
  const { isPending, error, data } = useQuery({
    queryKey: ["news"],
    queryFn: () => getNews(),
    placeholderData: keepPreviousData,
  });

  if (error) return <div>Error: news service is not reachable</div>;
  if (isPending) return <div>Loading...</div>;

  return (
    <>
      <div>
        <SearchBar data={data} />
        {data.sources.map((article) => (
          <NewsItem key={article.id} article={article} />
        ))}
      </div>
    </>
  );
};

export default NewsPage;
