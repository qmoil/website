import Logo from '../assets/Logo.svg';
import Arrow from '../assets/Arrow-left.svg';
import { PATH } from '../utils/path-constants';
import { Link } from 'react-router-dom';

const pages = [
  {
    title: 'About',
    linkedTo: PATH.ABOUT,
  },
  {
    title: 'Contact Us',
    linkedTo: PATH.HOME + '#contact',
  },
  // {
  //   title: 'Blog',
  //   linkedTo: '',
  // },
  // {
  //   title: 'Partners',
  //   linkedTo: '',
  // },
  {
    title: 'Services',
    linkedTo: PATH.SERVICE,
  },
];

const Footer = () => {
  const scrollToTop = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="text-xs bottom-0 w-full bg-gray-800 text-white py-4 md:py-10 px-4 md:px-32">
      <div className="flex flex-col md:flex-row justify-between  md:items-center">
        <div className="w-20 mb-4 md:mb-0">
          <a href="#">
            <img src={Logo} alt="Q and M Logo" className="max-w-full h-auto" />
          </a>
        </div>
        <div className="flex flex-col md:flex-row flex-1 justify-center gap-6 md:gap-12 text-left">
          <div className="md:w-[500px]">
            <p className="text-base font-bold not-italic mb-4 md:mb-8">
              2, Alexander road, Ikoyi, Lagos
            </p>
            <div className="flex flex-col gap-2 md:gap-5">
              <p>
                <a href="tel:+2349037890629" className="underline">
                  09037890629
                </a>
              </p>
              <p>
                <a href="mailto:dev.qandmoil@gmail.com" className="underline">
                  dev.qandmoil@gmail.com
                </a>
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-start gap-5">
            <nav className="flex justify-between  w-full gap-6 md:gap-12">
              <ul className="flex flex-col text-left text-xs space-y-2">
                {pages.map((page) => {
                  if (page.title === 'Contact Us') {
                    return (
                      <a className="hover:hover:text-blue-500" href="#contact">
                        {page.title}
                      </a>
                    );
                  }
                  return (
                    <Link
                      className="hover:hover:text-blue-500"
                      to={page.linkedTo}
                    >
                      {page.title}
                    </Link>
                  );
                })}
              </ul>
              <ul className="flex flex-col text-xs space-y-2">
                <li>
                  <a href="#" className="hover:hover:text-blue-500">
                    Facebook
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:hover:text-blue-500">
                    Twitter
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:hover:text-blue-500">
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:hover:text-blue-500">
                    Instagram
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
      <div className="text-center mt-4 md:mt-8">
        <p>
          © {new Date().getFullYear()} Q & M Oil and Gas. All rights reserved.
        </p>
      </div>
      <div className="flex justify-center">
        <div className="md:hidden flex justify-center items-center bg-white w-12 h-12 md:w-16 md:h-16 rounded-full mt-4 md:mt-0 ml-4">
          <a href="#" onClick={scrollToTop}>
            <img src={Arrow} alt="Arrow" className="max-w-full h-auto" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
