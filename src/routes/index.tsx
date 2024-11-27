import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainLayout from "@Layouts/MainLayout";
import AboutMe from "@pages/AboutMe";
import Resume from "@pages/Resume";
import Tldr from "@pages/Tldr";
import Projects from "@pages/Projects";
import NotFound from "@pages/NotFound";

const Routers = () => {
  const allRoutes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          path: "",
          element: <Tldr />,
        },
        {
          path: "projects",
          element: <Projects />,
        },
        {
          path: "about-me",
          element: <AboutMe />,
        },
        {
          path: "resume",
          element: <Resume />,
        },
        {
          path: "*",
          element: <NotFound />,
        },
      ],
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);

  return <RouterProvider router={allRoutes} />;
};

export default Routers;
