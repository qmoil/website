import Logo from "../assets/Logo.svg";

const Header = () => {
  return (
    <header className="flex justify-between items-center px-28 py-11 border-b">
      <div className="w-28">
        <img src={Logo} alt="Q and M Logo" />
      </div>
      <nav>
        <ul className="flex gap-16 text-xl font-bold">
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
