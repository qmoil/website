import Logo from "../assets/Logo.svg";

const Header = () => {
  return (
    <header className="bg-white flex inset-y-0 w-full fixed justify-between items-center px-24 py-4 h-28">
      <div className="w-20">
        <img src={Logo} alt="Q and M Logo" />
      </div>
      <nav>
        <ul className="flex gap-12 text-base font-bold">
          <li>
            <a href="#" className="hover:underline">About</a>
          </li>
          <li>
            <a href="#" className="hover:underline">Services</a>
          </li>
          <li>
            <a href="#" className="hover:underline">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
