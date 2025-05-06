import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { Service } from "./pages/ServicePage/Service";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import { Contact } from "./pages/ContactPage/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/services",
        element: <Service />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

export default router;
