import { Button } from "flowbite-react";
import { useContext } from "react";
import { ThemeContext } from "./ThemeProvider";

export interface IArticle {
  source: {
    id: string;
    name: string;
  };
  author?: string;
  title: string;
  description: string | null;
  url: string;
  urlToImage: string | null;
  publishedAt: string;
  content: string | null;
}

interface INewsItem {
  article: IArticle;
  key: string;
  fav: IArticle[];
  setFav: React.Dispatch<React.SetStateAction<IArticle[]>>;
}

const NewsItem: React.FC<INewsItem> = ({ article, fav, setFav }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="py-5">
      <h1 className="font-bold text-xl">{article.title}</h1>
      <div className="text-sm text-[--text-minor]">
        {article.author ?? "Unknown author"} /
        {new Date(article.publishedAt).toLocaleString("ru-RU", {
          hour: "2-digit",
          minute: "2-digit",
          day: "2-digit",
          month: "2-digit",
          year: "numeric",
        })}
      </div>
      <div>{article.content}</div>
      <a
        onClick={() => {
          window.open(article.url);
        }}
        href="#"
        className="text-[--link] hover:underline"
      >
        Source
      </a>
      <Button
        onClick={() =>
          setFav((fav) => {
            let updatedFav;
            if (
              fav.filter((f) => JSON.stringify(f) == JSON.stringify(article))
                .length > 0
            ) {
              updatedFav = fav.filter(
                (f) => JSON.stringify(f) != JSON.stringify(article)
              );
            } else {
              updatedFav = [...fav, article];
            }
            localStorage.setItem("fav", JSON.stringify(updatedFav));
            return updatedFav;
          })
        }
        className="rounded-md p-0 border-[--border-half-opacity]"
      >
        {fav.filter((f) => JSON.stringify(f) == JSON.stringify(article))
          .length > 0 ? (
          <img src="src\assets\fav.svg" width="20px"></img>
        ) : theme === "light" ? (
          <img src="src\assets\not-fav.svg" width="20px"></img>
        ) : (
          <img src="src\assets\not-fav-dark.svg" width="20px"></img>
        )}
      </Button>
    </div>
  );
};

export default NewsItem;
