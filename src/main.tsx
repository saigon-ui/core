import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import App from "./app/App.tsx";
import ResponsiveBox from "./app/ResponsiveBox.tsx";
import DocsPageRoute from "./docs/index.tsx";
import AppSkeleton from "./docs/layout/AppSkeleton.tsx";
import MaintenancePage from "./docs/layout/MaintenancePage.tsx";

const router = createBrowserRouter([
  // {
  //   path: "/",
  //   element: <AppSkeleton />,
  //   children: DocsPageRoute,
  // },
  // {
  //   path: "/app",
  //   element: <App />,
  // },
  // {
  //   path: "/responsive",
  //   element: <ResponsiveBox />,
  // },
  {
    path: "/coming-soon",
    element: <MaintenancePage />,
    children: DocsPageRoute,
  },
  {
    path: "*",
    element: <Navigate to="/coming-soon" replace />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
