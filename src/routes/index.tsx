import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import { Home } from '../pages';
import { PATH } from '../utils/path-constants';
import { useEffect } from 'react';

const MainRoutes = () => {
  const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    return null;
  };

  return (
    <div className="bg-white min-h-screen text-black">
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path={PATH.HOME} element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default MainRoutes;
