import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = () => {
  return (
    <div className='min-h-screen bg-background font-geist text-gray-900 dark:bg-darkBg dark:text-white transition-colors'>
      <Navbar />
      <main className='max-w-full mx-auto pt-6'>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
