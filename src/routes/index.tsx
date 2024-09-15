import { RouterProvider, createBrowserRouter } from "react-router-dom";
import TempPage from "../pages/TempPage";
import LandingPage from "@pages/LandingPage";
import MainLayout from "@Layouts/MainLayout";
import AboutMe from "@pages/AboutMe";
import Resume from "@pages/Resume";
import Tldr from "@pages/Tldr";
import MyJourney from "@pages/MyJourney";

const Routers = () => {
  const allRoutes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          path: "",
          element: <LandingPage />,
        },
        {
          path: "too-long-dont-read",
          element: <Tldr />,
        },
        {
          path: "my-journey",
          element: <MyJourney />,
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
          path: "temp",
          element: <TempPage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={allRoutes} />;
};

export default Routers;
