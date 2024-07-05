import Logo from '../assets/Logo.svg';
import { Link, useLocation } from 'react-router-dom';
import { PATH } from '../utils/path-constants';
import { NAVLINKS } from '../utils/navbar-constants';

interface NavbarProps {
  isSideNavOpen: boolean;
  setIsSideNavOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Navbar = ({ isSideNavOpen, setIsSideNavOpen }: NavbarProps) => {
  const { pathname, hash } = useLocation();

  const checkActive = (path: string) => {
    let active = false;
    if ((hash.length && hash === path) || pathname + hash === path) {
      active = true;
    }
    return active;
  };

  const toggleMenu = () => {
    setIsSideNavOpen(!isSideNavOpen);
  };

  return (
    <header className="bg-white flex items-center justify-between fixed inset-y-0 w-full px-6 py-4 sm:px-8 sm:py-4 lg:px-24 lg:py-4 h-24 md:h-32 z-40">
      <Link to={PATH.HOME} className="w-20 h-24  md:w-28 md:h-32">
        <img src={Logo} alt="Q & M Logo" className="w-full h-full" />
      </Link>
      <nav>
        <div className="flex md:hidden">
          <button
            onClick={toggleMenu}
            className="text-black focus:outline-none group"
          >
            <svg
              className="w-6 h-6 group-hover:text-[#282491]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
        <ul
          className={`hidden md:flex md:flex-row gap-6 md:gap-8 lg:gap-12 text-base font-bold absolute md:static top-16 left-0 w-full md:w-auto bg-gray-50 md:bg-transparent p-4 md:p-0`}
        >
          {NAVLINKS.map((link) => {
            // if (link.title === 'Contact') {
            //   return (
            //     <a
            //       className={`hover-link block md:inline hover:text-blue-500 ${
            //         checkActive('#contact') ? 'text-blue-500' : ''
            //       }`}
            //       href="#contact"
            //     >
            //       {link.title}
            //     </a>
            //   );
            // }
            return (
              <Link
                key={link.title}
                to={link.linkedTo}
                className={`hover-link block md:inline hover:text-blue-500 ${
                  checkActive(link.linkedTo) ? 'text-blue-500' : ''
                }`}
              >
                {link.title}
              </Link>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
