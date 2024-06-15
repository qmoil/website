import Logo from "../assets/Logo.svg";
import Arrow from "../assets/Arrow-left.svg";

const Footer = () => {
  return (
    <footer className="text-xs bottom-0 w-full bg-gray-800 text-white py-4 px-4 md:px-32">
      <div className="flex flex-col md:flex-row justify-between justify-start md:items-center">
        <div className="w-20 mb-4 md:mb-0">
          <img src={Logo} alt="Q and M Logo" className="max-w-full h-auto" />
        </div>
        <div className="flex flex-col md:flex-row flex-1 justify-center gap-6 md:gap-12 text-left">
          <div className="md:w-[500px]">
            <p className="text-base font-bold not-italic mb-4 md:mb-8">
              123 Market St. #22B, Charlottesville, California 44635
            </p>
            <div className="flex flex-col gap-2 md:gap-5">
              <p><a href="#" className="underline">(434) 546-4356</a></p>
              <p><a href="#" className="underline">contact@lift.agency</a></p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-start gap-5">
            <nav className="flex justify-between  w-full gap-6 md:gap-12">
              <ul className="flex flex-col text-left text-xs space-y-2">
                <li><a href="#" className="hover:underline">About</a></li>
                <li><a href="#" className="hover:underline">Contact Us</a></li>
                <li><a href="#" className="hover:underline">Blog</a></li>
                <li><a href="#" className="hover:underline">Partners</a></li>
                <li><a href="#" className="hover:underline">Services</a></li>
              </ul>
              <ul className="flex flex-col text-xs space-y-2">
                <li><a href="#" className="hover:underline">Facebook</a></li>
                <li><a href="#" className="hover:underline">Twitter</a></li>
                <li><a href="#" className="hover:underline">LinkedIn</a></li>
                <li><a href="#" className="hover:underline">Instagram</a></li>
              </ul>
            </nav>
          </div>
        </div>
        <div className="hidden md:block">
        <div className="flex justify-center items-center bg-white w-12 h-12 md:w-16 md:h-16 rounded-full mt-4 md:mt-0 ml-4">
          <img src={Arrow} alt="Arrow" className="max-w-full" />
        </div>
        </div>
        
      </div>
      <div className="text-center mt-4 md:mt-8">
        <p>© 2020 Lift Media. All rights reserved.</p>
      </div>
      <div className="flex justify-center">
        <div className="block md:hidden flex justify-center items-center bg-white w-12 h-12 md:w-16 md:h-16 rounded-full mt-4 md:mt-0 ml-4">
          <img src={Arrow} alt="Arrow" className="max-w-full h-auto" />
        </div>
      </div>

    </footer>
  );
};

export default Footer;
