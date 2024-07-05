import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';

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
      <ScrollToTopButton />
      <Footer />
    </div>
  );
};

export default BodyWrapper;
