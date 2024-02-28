import { ChangeEvent, useEffect, useState } from "react";
import { ResponseData, getFilteredNews } from "../utils/getNews";
import { useDebounce } from "../utils/useDebounce";

interface ISearchBar {
  data: ResponseData;
}

const SearchBar: React.FC<ISearchBar> = ({ data }) => {
  const [searchInput, setSearchInput] = useState("");
  const { debouncedSearchInput } = useDebounce(searchInput, 500);

  const handleSearchInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };

  useEffect(() => {
    const filteredNews = getFilteredNews(data.sources, debouncedSearchInput);
    console.log(filteredNews);
  }, [debouncedSearchInput, data.sources]);

  return (
    <input
      type="text"
      placeholder="Find news here"
      onChange={handleSearchInputChange}
    />
  );
};

export default SearchBar;
