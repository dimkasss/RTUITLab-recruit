import { useEffect, useState } from "react";

const useDebounce = (
  searchInput: string,
  delay: number
): { debouncedSearchInput: string } => {
  const [debouncedSearchInput, setDebouncedSearchInput] = useState("");

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebouncedSearchInput(searchInput);
    }, delay);
    return () => clearTimeout(timeoutId);
  }, [delay, searchInput]);
  return { debouncedSearchInput };
};

export { useDebounce };
