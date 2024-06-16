import { useState, useEffect, useCallback, useRef } from 'react';
import Arrow from '../assets/Arrow-left.svg'; 

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const scrollTimeout = useRef(null);

  const scrollToTop = (event) => {
    event.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleScroll = useCallback(() => {
    if (window.scrollY > 0) {
      setIsVisible(true);
      clearTimeout(scrollTimeout.current);
      scrollTimeout.current = setTimeout(() => {
        setIsVisible(false);
      }, 2000); 
    } else {
      setIsVisible(false);
    }
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeout.current);
    };
  }, [handleScroll]);

  return (
    <div className="fixed bottom-4 right-4">
      {isVisible && (
        <div className="flex justify-center items-center bg-white w-12 h-12 md:w-16 md:h-16 rounded-full transition-opacity duration-500 opacity-75 hover:opacity-100">
          <a href="#" onClick={scrollToTop} aria-label="Scroll to top">
            <img src={Arrow} alt="Arrow" className="max-w-full" />
          </a>
        </div>
      )}
    </div>
  );
};

export default ScrollToTopButton;
