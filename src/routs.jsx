import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { Service } from "./pages/ServicePage/Service";
import Home from "./pages/Home/Home";

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
        path: "/services",
        element: <Service />,
      },
    ],
  },
]);

export default router;
