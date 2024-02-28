import { IArticle } from "../components/NewsItem";

export interface ResponseData {
  status: string;
  sources: IArticle[];
}

const getNews = async (): Promise<ResponseData> => {
  const res = await fetch(
    `https://newsapi.org/v2/top-headlines/sources?apiKey=e4e3e1684c864397a7c83f49405f6ee0`
  );
  return res.json();
};

const getFilteredNews = (articles: IArticle[], filter: string): IArticle[] => {
  const res: IArticle[] = [];
  articles.filter((article) => {
    if (
      article.category.includes(filter) ||
      article.country.includes(filter) ||
      article.description.includes(filter) ||
      article.id.includes(filter) ||
      article.language.includes(filter) ||
      article.name.includes(filter) ||
      article.url.includes(filter)
    ) {
      res.push(article);
    }
  });
  return res;
};

export { getNews, getFilteredNews };
