import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainPage from "./pages/MainPage.tsx";
import NewsPage from "./pages/NewsPage.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import "./index.css";
import { ThemeProvider } from "./components/ThemeProvider.tsx";
import Layout from "./components/Layout.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "/news",
    element: <NewsPage />,
  },
]);

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <Layout>
        <div className="flex justify-center">
          <div className="w-full p-3 lg:w-1/2 bg-[--bg]">
            <RouterProvider router={router}></RouterProvider>
          </div>
        </div>
      </Layout>
    </ThemeProvider>
  </QueryClientProvider>
);
