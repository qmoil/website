import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Navbar from './Navbar';
import ScrollToTopButton from './ScrollToTopButton';

const BodyWrapper = () => {
  return (
    <div className="relative w-full">
      <Navbar />
      <ScrollToTopButton />
      <Outlet />
      <Footer />
    </div>
  );
};

export default BodyWrapper;
