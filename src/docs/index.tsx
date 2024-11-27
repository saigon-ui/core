// export { default as DocMarkdowns } from "./v0.01";
import "@build_lib/saigon-ui.css";
import { RouteObject } from "react-router-dom";
import "../asset/scss/docs.scss";
import DocsSkeleton from "./pages/DocsSkeleton";
import HomePage from "./pages/home/HomePage";
import MarkdownRenderer from "./pages/MarkdownRenderer";
import DocMarkdowns from "./v0.01";

export type DocPage = {
  path: string;
  md: string;
};

const DocsPageRoute: RouteObject[] = [
  {
    path: "",
    element: <HomePage />,
  },
  {
    path: "docs/*",
    element: <DocsSkeleton />,
    children: DocMarkdowns.map(({ path, md }, key) => ({
      path,
      element: <MarkdownRenderer key={key} md={md} />,
    })),
  },
];

export default DocsPageRoute;
