import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';
import ScrollToTopButton from './ScrollToTopButton';

const BodyWrapper = () => {
  return (
    <div className="relative w-full">
      <Header />
      <Outlet />
      <ScrollToTopButton />
      <Footer />
    </div>
  );
};

export default BodyWrapper;
