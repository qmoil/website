import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Navbar from './Navbar';

const BodyWrapper = () => {
  return (
    <div className="relative w-full">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default BodyWrapper;
