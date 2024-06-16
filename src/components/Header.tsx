import { useState } from 'react';
import Logo from '../assets/Logo.svg';
import { Link } from 'react-router-dom';
import { PATH } from '../utils/path-constants';

const links = [
  {
    title: 'About',
    linkedTo: PATH.ABOUT,
  },
  {
    title: 'Services',
    linkedTo: PATH.SERVICE,
  },
  {
    title: 'Contact',
    linkedTo: PATH.CONTACT,
  },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-white flex items-center justify-between fixed inset-y-0 w-full px-6 py-4 sm:px-8 sm:py-4 lg:px-24 lg:py-4 h-20 sm:h-24 xs:h-20 md:h-28 z-50">
      <Link to={PATH.HOME} className="w-16 sm:w-20">
        <img src={Logo} alt="Q and M Logo" />
      </Link>
      <nav>
        <div className="flex md:hidden">
          <button
            onClick={toggleMenu}
            className="text-black focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
              ></path>
            </svg>
          </button>
        </div>
        <ul
          className={`${
            isOpen ? 'flex' : 'hidden'
          } flex-col md:flex md:flex-row gap-6 md:gap-8 lg:gap-12 text-base font-bold absolute md:static top-16 left-0 w-full md:w-auto bg-gray-50 md:bg-transparent p-4 md:p-0`}
        >
          {links.map((link) => (
            <Link
              to={link.linkedTo}
              className="hover:underline block md:inline"
            >
              {link.title}
            </Link>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
