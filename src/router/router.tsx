import { createBrowserRouter } from "react-router-dom";
import { pages } from "./routes";
import Root from "../features/Root";
import Home from "../features/Home";
import Activities from "../features/Activities";
import About from "../features/About";
import Contact from "../features/Contact";

export const router = createBrowserRouter([
  {
    path: pages.root.path,
    element: <Root />,
    children: [
      { index: true, element: <Home /> },
      {
        path: pages.about.path,
        element: <About />,
      },
      {
        path: pages.contact.path,
        element: <Contact />,
      },
      {
        path: pages.newsletter.path,
        element: <h1>Newsletter</h1>,
      },
      {
        path: pages.activities.path,
        element: <Activities />,
      },
    ],
  },
]);
