import React from "react";
import ReactDOM from "react-dom/client";
import App from "./routes/App.tsx";
import Docs from "./routes/Docs.tsx";
import DocsPage from "./routes/DocsPage.tsx";
import NotFound from "./routes/NotFound.tsx";
import Header from "./components/Header.tsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ThemeProvider } from "substruct-ui";
import "substruct-ui/dist/css/styles.css";
import "./index.css";
import Layout from "./Layout.tsx";

const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/docs",
        element: <Docs />,
        children: [
          {
            path: "/docs/:group?/:page?",
            element: <DocsPage />,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme="default">
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>,
);
