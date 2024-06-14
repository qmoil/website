import Logo from "../assets/Logo.svg";
import Arrow from "../assets/Arrow-left.svg";

const Footer = () => {
  return (
    <footer className="fixed bottom-0 w-full bg-gray-800 text-white py-8 px-32">
      <div className="flex justify-between items-center">
        <div className="w-28">
          <img src={Logo} alt="Q and M Logo" />
        </div>
        <div className="flex flex-1 justify-center gap-12">
          <div className="w-[500px]">
          <p className="max-w-4xl text-2xl font-bold not-italic mb-8">
            123 Market St. #22B, Charlottesville, California 44635
          </p>
          <div className=" flex-col gap-5 text-sm">
            <p><a href="#" className="underline">(434) 546-4356</a></p>
            <p><a href="#" className="underline">contact@lift.agency</a></p>            
          </div>
          </div>
          
          <div className="flex flex-col items-start gap-5">

            <nav className="flex gap-12">
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
        <div className="flex justify-center items-center bg-white w-16 h-16 rounded-full">
          <img src={Arrow} alt="Arrow" />
        </div>
      </div>
      <div className="text-center mt-4">
        <p className="text-sm">© 2020 Lift Media. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
