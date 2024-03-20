import { IArticle } from "../components/NewsItem";

export interface ResponseNewsData {
  status: string;
  totalResults: number;
  articles: IArticle[];
}

const getNews = async (): Promise<ResponseNewsData> => {
  const res = await fetch(
    `https://newsapi.org/v2/top-headlines/?country=us&apiKey=e4e3e1684c864397a7c83f49405f6ee0`
  );
  return res.json();
};

const getFilteredNews = (
  articles: IArticle[] | undefined,
  filter: string,
  author: string,
  isFavOnly: boolean,
  fav: IArticle[]
): IArticle[] => {
  filter = filter.toLowerCase();
  const res: IArticle[] = [];
  articles?.filter((article) => {
    if (
      (article.author?.includes(filter) ||
        article.title.includes(filter) ||
        article.description?.includes(filter) ||
        article.content?.includes(filter) ||
        article.publishedAt.includes(filter)) &&
      (article.author == author ||
        author == "" ||
        author == "No specified author")
    ) {
      if (!isFavOnly) res.push(article);
      else if (
        fav.filter((f) => JSON.stringify(f) == JSON.stringify(article)).length >
        0
      ) {
        res.push(article);
      }
    }
  });
  return res;
};

const getNewsAuthors = (articles?: IArticle[]) => {
  const authors = new Set<string>();
  authors.add("No specified author");
  articles?.map((article) => {
    if (article.author != null) authors.add(article.author);
  });
  return authors;
};

export { getNews, getFilteredNews, getNewsAuthors };
