import { createBrowserRouter } from "react-router-dom";
import Skills from "../Components/Skills";
import Slider from "../Components/Slider";
import ProductsData from "../Components/Products";
import Projects from "../Components/Projects";
import Fotter2 from "../Components/Fotter2";
import Footer from "../Components/footer";
import App from "../App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Skills />,
      },
      {
        path: "/slides",
        element: <Slider />,
      },
      {
        path: "/products",
        element: <ProductsData />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
      {
        path: "/fotters",
        element: <Fotter2 />,
      },
      {
        path: "/fotter",
        element: <Footer />,
      },
    ],
  },
]);

export default router;
