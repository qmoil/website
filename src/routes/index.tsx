import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import { PATH } from '../utils/path-constants';
import { useEffect } from 'react';
import BodyWrapper from '../components/BodyWrapper';
import { About, Contact, Home, Services } from '../pages';

const MainRoutes = () => {
  const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    return null;
  };

  return (
    <div className="bg-white min-h-screen text-black font-grotesk">
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path={PATH.HOME} element={<BodyWrapper />}>
            <Route index element={<Home />} />
            <Route path={PATH.ABOUT} element={<About />} />
            <Route path={PATH.SERVICE} element={<Services />} />
            <Route path={PATH.CONTACT} element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default MainRoutes;
