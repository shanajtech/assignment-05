import logo from "../assets/logo-text.png";
import { FaBars } from "react-icons/fa6";

const Navbar = () => {
  const navLinks = (
    <>
      <li>
        <a
          href="#home"
          className="font-medium hover:font-semibold hover:text-[#DB2777]"
        >
          Home
        </a>
      </li>

      <li>
        <a
          href="#technologies"
          className="font-medium hover:font-semibold hover:text-[#DB2777]"
        >
          Technologies
        </a>
      </li>

      <li>
        <a
          href="#projects"
          className="font-medium duration-200 hover:font-semibold hover:text-[#DB2777]"
        >
          Projects
        </a>
      </li>

      <li>
        <a
          href="#about"
          className="font-medium hover:font-semibold hover:text-[#DB2777]"
        >
          About
        </a>
      </li>

      <li>
        <a
          href="#contact"
          className="font-medium hover:font-semibold hover:text-[#DB2777]"
        >
          Contact
        </a>
      </li>
    </>
  );

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="mx-auto max-w-[1170px] px-4">

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
            <button className="whitespace-nowrap transition-all duration-200 hover:font-semibold hover:text-[#DB2777]">
              Sign In
            </button>

            <button className="whitespace-nowrap rounded-full bg-[#D91B7E] px-5 py-2 text-white">
              Sign Up
            </button>
          </div>
        </div>

     
        <div className="relative flex h-[64px] items-center justify-between md:hidden">


          <div>
            <details className="dropdown">
              <summary className="cursor-pointer list-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                >
                  <path d="M4 6h16" />
                  <path d="M4 12h16" />
                  <path d="M4 18h16" />
                </svg>
              </summary>

              <ul className="menu dropdown-content z-50 mt-4 w-52 rounded-lg bg-white p-3 text-[14px] shadow">
                {navLinks}
              </ul>
            </details>
          </div>


          <div className="absolute left-1/2 -translate-x-1/2">
            <img
              src={logo}
              alt="Dev Stack"
              className="w-[90px] sm:w-[105px]"
            />
          </div>


          <div>
            <details className="dropdown dropdown-end">
           <summary className="flex h-8 w-8 cursor-pointer list-none items-center justify-center
            rounded-full bg-[#D91B7E] text-white">
            <FaBars className="text-[16px]" />
              </summary>

              <ul className="menu dropdown-content z-50 mt-3 w-32 rounded-lg  p-2 text-[14px] font-medium shadow">
                <li>
                  <button className="hover:font-semibold hover:text-[#DB2777]">
                    Sign In
                  </button>
                </li>

                <li>
                  <button className="hover:font-semibold hover:text-[#DB2777]">
                    Sign Up
                  </button>
                </li>
              </ul>
            </details>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;