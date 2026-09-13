import { useState } from "react";
import { FaBars, FaUser } from "react-icons/fa6";
import logo from "../assets/logo-text.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [userOpen, setUserOpen] = useState(false);

  const navLinks = (
    <>
      <li>
        <a
          href="#home"
          className="font-medium transition-all duration-200 hover:font-semibold hover:text-[#DB2777]"
        >
          Home
        </a>
      </li>

      <li>
        <a
          href="#technologies"
          className="font-medium transition-all duration-200 hover:font-semibold hover:text-[#DB2777]"
        >
          Technologies
        </a>
      </li>

      <li>
        <a
          href="#projects"
          className="font-medium transition-all duration-200 hover:font-semibold hover:text-[#DB2777]"
        >
          Projects
        </a>
      </li>

      <li>
        <a
          href="#about"
          className="font-medium transition-all duration-200 hover:font-semibold hover:text-[#DB2777]"
        >
          About
        </a>
      </li>

      <li>
        <a
          href="#contact"
          className="font-medium transition-all duration-200 hover:font-semibold hover:text-[#DB2777]"
        >
          Contact
        </a>
      </li>
    </>
  );

  const handleMenu = () => {
    setMenuOpen(!menuOpen);
    setUserOpen(false);
  };

  const handleUserMenu = () => {
    setUserOpen(!userOpen);
    setMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container-main">

        <div className="hidden h-[72px] items-center justify-between md:flex">
          <img
            src={logo}
            alt="Dev Stack"
            className="w-[135px]"
          />

          <ul className="flex items-center gap-8 text-[14px] text-[#4B5563]">
            {navLinks}
          </ul>

          <div className="flex items-center gap-4 text-[14px] font-medium">
            <button className="hover:font-semibold hover:text-[#DB2777]">
              Sign In
            </button>

            <button className="rounded-full bg-[#D91B7E] px-5 py-2 text-white">
              Sign Up
            </button>
          </div>
        </div>

        <div className="relative flex h-[64px] items-center justify-between md:hidden">

          <button
            onClick={handleMenu}
            className="flex h-8 w-8 items-center justify-center"
          >
            <FaBars className="text-[20px]" />
          </button>

          <img
            src={logo}
            alt="Dev Stack"
            className="absolute left-1/2 w-[105px] -translate-x-1/2"
          />

          <button
            onClick={handleUserMenu}
            className="flex h-8 w-8 items-center justify-center rounded-full bg-[#D91B7E] text-white"
          >
            <FaUser className="text-[14px]" />
          </button>

          {menuOpen && (
            <ul className="absolute left-0 top-[58px] w-[210px] space-y-1 rounded-lg bg-white p-3 text-[14px] shadow-lg">
              {navLinks}
            </ul>
          )}

          {userOpen && (
            <div className="absolute right-0 top-[58px] w-[130px] rounded-lg bg-white p-2 text-[14px] font-medium shadow-lg">
              <button className="block w-full rounded-md px-3 py-2 text-left hover:bg-gray-50 hover:text-[#DB2777]">
                Sign In
              </button>

              <button className="block w-full rounded-md px-3 py-2 text-left hover:bg-gray-50 hover:text-[#DB2777]">
                Sign Up
              </button>
            </div>
          )}

        </div>
      </div>
    </nav>
  );
};

export default Navbar;