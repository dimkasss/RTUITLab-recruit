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
    <div>
      <h1>
        [{article.category}]:{article.name}
      </h1>
      <div>{article.description}</div>
    </div>
  );
};

export default NewsItem;
