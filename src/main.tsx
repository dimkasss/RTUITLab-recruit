import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage.tsx";
import NewsPage from "./pages/NewsPage.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import "./index.css";
import { ThemeProvider } from "./components/ThemeProvider.tsx";
import Layout from "./components/Layout.tsx";
import WeatherPage from "./pages/WeatherPage.tsx";
import ClockPage from "./pages/ClockPage.tsx";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<MainPage />} />
            <Route path="news" element={<NewsPage />} />
            <Route path="weather" element={<WeatherPage />} />
            <Route path="clock" element={<ClockPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </QueryClientProvider>
);
