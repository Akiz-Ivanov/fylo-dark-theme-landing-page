import logo from "../assets/images/logo.svg";

const Header = () => {
  return (
    <header className="flex justify-between items-center p-6 mb-6 max-w-360 mx-auto">
      <img src={logo} alt="Fylo" className="w-22 md:w-34" />
      <nav className="flex gap-6 sm:gap-12">
        <a href="#features">Features</a>
        <a href="#team">Team</a>
        <a href="#early-access">Sign In</a>
      </nav>
    </header>
  );
};

export default Header;
