import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Layout from "./Layout";
import AboutUs from "../pages/About-Us/AboutUs";
import Feature from "../pages/Feature/Feature"; // Ensure correct import
import Pricing from "../pages/Pricing/Pricing";
import Blog from "../pages/Blog/Blog";
import ArticleBlogs from "../pages/Blog/ArticleBlogs";
import BlogDetails from "../pages/Blog/BlogDetails";
import Changelog from "../pages/ChangeLog/Changelog";
import GetInTouch from "../pages/Get-In-Touch/GetInTouch";
import Privacy from "../pages/Privacy/Privacy";
import TermsCondition from "../pages/TermsConditon/TermsCondition";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about-us",
        element: <AboutUs />,
      },
      {
        path: "features",
        element: <Feature />,
      },
      {
        path: "pricing-plans",
        element: <Pricing />,
      },
      {
        path: "blog",
        element: <Blog />,
        children: [
          {
            index: true,
            element: <ArticleBlogs />,
          },
          {
            path: ":title",
            element: <BlogDetails />,
          },
        ],
      },
      {
        path: "changelog",
        element: <Changelog />,
      },
      {
        path: "contact",
        element: <GetInTouch />,
      },
      {
        path: "privacy-policy",
        element: <Privacy />,
      },
      {
        path: "terms-conditions",
        element: <TermsCondition />,
      },
    ],
  },
  {
    path: "/login",
    element: (
      <>
        <div className="text-4xl">Login</div>
      </>
    ),
  },
  {
    path: "/register",
    element: (
      <>
        <div className="text-4xl">Register</div>
      </>
    ),
  },
]);

export default router;
