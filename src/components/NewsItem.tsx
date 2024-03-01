export interface IArticle {
  id: string;
  name: string;
  description: string;
  url: string;
  category: string;
  language: string;
  country: string;
}

interface INewsItem {
  article: IArticle;
  key: string;
}

const NewsItem: React.FC<INewsItem> = ({ article }) => {
  return (
    <div className="py-5">
      <h1 className="underline font-bold text-xl">{article.name}</h1>
      <span className="text-sm">sup homies</span>
      <div>{article.description}</div>
    </div>
  );
};

export default NewsItem;
