import { createBrowserRouter } from "react-router-dom";
import { pages } from "./routes";

export const router = createBrowserRouter([
  {
    path: pages.root.path,
    element: <h1>Root</h1>,
    children: [
      { index: true, element: <h1>Home</h1> },
      {
        path: pages.about.path,
        element: <h1>About</h1>,
      },
      {
        path: pages.contact.path,
        element: <h1>Contact</h1>,
      },
      {
        path: pages.newsletter.path,
        element: <h1>Newsletter</h1>,
      },
      {
        path: pages.activities.path,
        element: <h1>Activities</h1>,
      },
    ],
  },
]);
