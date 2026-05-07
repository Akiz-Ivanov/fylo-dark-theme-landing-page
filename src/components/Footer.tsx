import logo from "../assets/images/logo.svg";
import location from "../assets/images/icon-location.svg";
import phone from "../assets/images/icon-phone.svg";
import email from "../assets/images/icon-email.svg";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="flex flex-col gap-16 bg-navy-950 p-6 pt-72 pb-14 md:pt-54">
      <img src={logo} alt="Fylo" className="w-52" />

      <div className="flex flex-col gap-16 lg:flex-row lg:justify-between">
        <div className="flex flex-col gap-6 md:flex-row">
          <div className="flex gap-6 items-baseline">
            <img src={location} alt="" className="width-5" />
            <p className="leading-relaxed md:max-w-[40ch]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
          </div>

          <div className="flex flex-col gap-6">
            <div className="flex gap-6 items-center">
              <img src={phone} alt="" />
              <p>+1-543-123-4567</p>
            </div>

            <div className="flex gap-6 items-center">
              <img src={email} alt="" />
              <p>example@fylo.com</p>
            </div>
          </div>
        </div>

        <nav
          aria-label="Footer navigation"
          className="mt-6 md:mt-0 flex flex-col gap-20 md:flex-row"
        >
          <div className="flex flex-col gap-6">
            <a href="#">About Us</a>
            <a href="#">Jobs</a>
            <a href="#">Press</a>
            <a href="#">Blog</a>
          </div>
          <div className="flex flex-col gap-6">
            <a href="#">Contact Us</a>
            <a href="#">Terms</a>
            <a href="#">Privacy</a>
          </div>
        </nav>

        <div className="flex justify-center h-fit">
          <div className="flex gap-4">
            <a
              href="#"
              className="outline-1 outline-white rounded-full p-2 hover:text-teal-200 hover:outline-teal-200 transition-colors"
            >
              <FaFacebookF className="size-4" />
            </a>
            <a
              href="#"
              className="outline-1 outline-white rounded-full p-2 hover:text-teal-200 hover:outline-teal-200 transition-colors"
            >
              <FaTwitter className="size-4" />
            </a>
            <a
              href="#"
              className="outline-1 outline-white rounded-full p-2 hover:text-teal-200 hover:outline-teal-200 transition-colors"
            >
              <FaInstagram className="size-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
