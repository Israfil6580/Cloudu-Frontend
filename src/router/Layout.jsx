import { Suspense } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Header from "../pages/Home/Header";

const Layout = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        {isHomePage ? <Header /> : <Navbar />}
        <main>
          <Outlet />
        </main>
        <Footer />
      </Suspense>
    </div>
  );
};

export default Layout;
