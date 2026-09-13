import logo from "../assets/logo-text.png";

const Footer = () => {
  return (
    <footer className="border-t border-gray-100 bg-white">
      <div className="container-main py-10">

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12">

          <div>
            <img
              src={logo}
              alt="Dev Stack"
              className="w-[120px]"
            />

            <p className="mt-4 text-[12px] font-medium leading-5 text-[#64748B]">
              Curated tools, technologies, and resources for developers building
              modern software.
            </p>

            <div className="mt-5 flex items-center gap-5 text-[12px] font-medium text-[#0F172A]">
              <a href="#" className="hover:text-[#DB2777]">
                GitHub
              </a>

              <a href="#" className="hover:text-[#DB2777]">
                Twitter
              </a>

              <a href="#" className="hover:text-[#DB2777]">
                LinkedIn
              </a>
            </div>
          </div>

          <div className="lg:pl-8">
            <h3 className="text-[12px] font-bold uppercase text-[#0F172A]">
              Product
            </h3>

            <div className="mt-4 flex flex-col gap-3 text-[12px] font-medium text-[#64748B]">
              <a href="#home" className="hover:text-[#DB2777]">
                Home
              </a>

              <a href="#technologies" className="hover:text-[#DB2777]">
                Technologies
              </a>

              <a href="#projects" className="hover:text-[#DB2777]">
                Projects
              </a>
            </div>
          </div>

          <div className="lg:pl-8">
            <h3 className="text-[12px] font-bold uppercase text-[#0F172A]">
              Company
            </h3>

            <div className="mt-4 flex flex-col gap-3 text-[12px] font-medium text-[#64748B]">
              <a href="#about" className="hover:text-[#DB2777]">
                About
              </a>

              <a href="#contact" className="hover:text-[#DB2777]">
                Contact
              </a>

              <a href="#" className="hover:text-[#DB2777]">
                Careers
              </a>
            </div>
          </div>

          <div className="lg:pl-8">
            <h3 className="text-[12px] font-bold uppercase text-[#0F172A]">
              Legal
            </h3>

            <div className="mt-4 flex flex-col gap-3 text-[12px] font-medium text-[#64748B]">
              <a href="#" className="hover:text-[#DB2777]">
                Privacy Policy
              </a>

              <a href="#" className="hover:text-[#DB2777]">
                Terms of Service
              </a>
            </div>
          </div>

        </div>

        <div className="mt-12 border-t border-gray-200 pt-6">
          <div className="flex flex-col gap-4 text-[11px] font-medium text-[#94A3B8] sm:flex-row sm:items-center sm:justify-between">

            <p>© 2026 Dev Stack. All rights reserved.</p>

            <div className="flex gap-6">
              <a href="#" className="hover:text-[#DB2777]">
                Privacy
              </a>

              <a href="#" className="hover:text-[#DB2777]">
                Terms
              </a>
            </div>

          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
