import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Navbar from './Navbar';
import ScrollToTopButton from './ScrollToTopButton';
import { useState } from 'react';
import SideNavbar from './SideNavBar';

const BodyWrapper = () => {
  const [isSideNavOpen, setIsSideNavOpen] = useState<boolean>(false);
  return (
    <div className="relative w-full">
      <Navbar
        isSideNavOpen={isSideNavOpen}
        setIsSideNavOpen={setIsSideNavOpen}
      />
      <SideNavbar
        isSideNavOpen={isSideNavOpen}
        setIsSideNavOpen={setIsSideNavOpen}
      />
      <ScrollToTopButton />
      <Outlet />
      <Footer />
    </div>
  );
};

export default BodyWrapper;
