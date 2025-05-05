import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { Service } from "./pages/ServicePage/Service";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <div>Home</div>,
      },
      {
        path: "/services",
        element: <Service />,
      },
    ],
  },
]);

export default router;
