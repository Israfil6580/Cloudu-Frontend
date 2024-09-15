import { Outlet, ScrollRestoration } from "react-router-dom";
import GetStartedToday from "../../components/GetStartedToday";

const Blog = () => {
  return (
    <div className="max-w-custom mx-auto">
      <Outlet />
      <GetStartedToday />
      <ScrollRestoration />
    </div>
  );
};

export default Blog;
