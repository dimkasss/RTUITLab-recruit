const MainPage = () => {
  return (
    <div className="py-5 flex flex-col">
      <h1 className="text-2xl font-semibold">Hi there</h1>
      <div>
        <p>
          RTUITInfo - look for the latest news, get weather forecast and never
          get late - with our innovational clock, which supports multiple
          timezones etc.
        </p>
        <br />
        <p>
          Website for RTUITLab 2024 /{" "}
          <a
            target="_blank"
            onClick={() =>
              window.open(
                "https://github.com/RTUITLab/Recruit/blob/master/requirements/front/README.md"
              )
            }
            className="text-cyan-600 hover:underline dark:text-cyan-500 cursor-pointer"
          >
            тык
          </a>
        </p>
      </div>
      <div>
        <p>
          lvl 3 slider & lvl 3 sport matches are not implemented due to lack of
          time D:
        </p>
        <p>Other topics were covered (hope so)</p>
        <p>
          Asynchronus state management tool:{" "}
          <a
            target="_blank"
            onClick={() =>
              window.open(
                "https://tanstack.com/query/latest/docs/framework/react/overview"
              )
            }
            className="text-cyan-600 hover:underline dark:text-cyan-500 cursor-pointer"
          >
            Tanstack Query
          </a>
        </p>
      </div>
      <br />
      <h1 className="font-semibold">References:</h1>
      <div>
        <a
          target="_blank"
          onClick={() => window.open("https://newsapi.org/docs/endpoints")}
          className="text-cyan-600 hover:underline dark:text-cyan-500 cursor-pointer"
        >
          API for News page
        </a>
      </div>
      <div>
        <a
          target="_blank"
          onClick={() => window.open("https://www.weatherapi.com/docs/")}
          className="text-cyan-600 hover:underline dark:text-cyan-500 cursor-pointer"
        >
          API for Weather page
        </a>
      </div>
      <br />
      <div>
        <a
          target="_blank"
          onClick={() =>
            window.open("https://github.com/dimkasss/RTUITLab-recruit")
          }
          className="text-cyan-600 hover:underline dark:text-cyan-500 cursor-pointer"
        >
          Repo link
        </a>
      </div>
    </div>
  );
};

export default MainPage;
