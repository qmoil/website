import { useLocation, useNavigate } from 'react-router-dom';
import { NAVLINKS } from '../utils/navbar-constants';

interface SideNavbarProps {
  isSideNavOpen: boolean;
  setIsSideNavOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const SideNavbar = ({ isSideNavOpen, setIsSideNavOpen }: SideNavbarProps) => {
  const { pathname, hash } = useLocation();
  const navigate = useNavigate();

  const checkActive = (path: string) => {
    let active = false;
    if ((hash.length && hash === path) || pathname + hash === path) {
      active = true;
    }
    return active;
  };

  const goToPage = (path: string) => {
    toggleNavbar();
    navigate(path);
  };

  const toggleNavbar = () => {
    setIsSideNavOpen(!isSideNavOpen);
  };

  return (
    <>
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 z-50 ${
          isSideNavOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => toggleNavbar()}
      />
      <aside
        className={`fixed right-0 top-0 h-screen w-64 lg:w-1/5 bg-[#191919] py-8 shadow-lg transform transition-transform duration-300 z-50 ${
          isSideNavOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <button
          onClick={() => toggleNavbar()}
          className="text-[#A6A6A6] float-right focus:outline-none group pr-5"
        >
          <svg
            className="w-6 h-6 group-hover:text-[#A6A6A6]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </button>
        <div className="text-white text-sm my-24 flex flex-col">
          {NAVLINKS.map((link) => {
            if (link.title === 'Contact') {
              return (
                <a
                  className={`px-5 hover-link block md:inline hover:text-white py-2.5 ${
                    checkActive('#contact') ? 'text-white' : 'text-gray-400'
                  }`}
                  href="#contact"
                  onClick={() => toggleNavbar()}
                >
                  {link.title}
                </a>
              );
            }
            return (
              <div
                key={link.title}
                onClick={() => goToPage(link.linkedTo)}
                className={`px-5 hover-link block md:inline hover:text-white py-2.5 ${
                  checkActive(link.linkedTo) ? 'text-white' : 'text-gray-400'
                }`}
              >
                {link.title}
              </div>
            );
          })}
        </div>
      </aside>
    </>
  );
};

export default SideNavbar;
