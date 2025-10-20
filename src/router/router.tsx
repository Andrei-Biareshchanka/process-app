import { createBrowserRouter } from "react-router";
import { App } from "../app";
import { ProcessPage } from "../pages/proces";
import { ProcessListPage } from "../pages/process-list";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <ProcessListPage />,
      },
      {
        path: "/process/:id",
        element: <ProcessPage />,
      },
    ],
  },
]);
