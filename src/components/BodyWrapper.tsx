import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';

const BodyWrapper = () => {
  return (
    <div className="relative w-full">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default BodyWrapper;
