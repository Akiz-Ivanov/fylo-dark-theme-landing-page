import logo from "../assets/images/logo.svg";

const Header = () => {
  return (
    <header className="flex justify-between items-center p-6 mb-6">
      <img src={logo} alt="Fylo" className="w-22" />
      <nav className="flex gap-6">
        <a href="#">Features</a>
        <a href="#">Team</a>
        <a href="#">Sign In</a>
      </nav>
    </header>
  );
};

export default Header;
