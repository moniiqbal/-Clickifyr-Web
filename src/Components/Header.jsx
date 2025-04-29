import { useState } from "react";
import { HashLink } from "react-router-hash-link";
import "../App.css";

const Header = () => {
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuVisible(!mobileMenuVisible);
  };

  const closeMobileMenu = () => {
    setMobileMenuVisible(false);
  };

  return (
    <header className="bg-white py-3 scroll-smooth">
      <nav className="flex relative mx-10 items-center justify-between">
        <HashLink smooth to="#slider">
          <img
            src="/images/clickifyr.png"
            className="lg:w-36 w-36 mt-1 -ml-3 lg:mx-6"
            alt=""
          />
        </HashLink>
        <div className="flex flex-col items-center text-slateblue lg:flex-row lg:justify-between">
          <ul className="hidden lg:flex text-lg font-Poppins font-bold items-center lg:flex-row gap-12">
            <li>
              <HashLink
                smooth
                to="/#Home"
                className="block py-2 pr-4 pl-3 text-slateblue border-b lg:hover:bg-transparent lg:border-0 hover:text-amber-300 lg:p-0 relative transition duration-300 ease-in-out group"
                onClick={closeMobileMenu}
              >
                Home
                <div className="absolute w-full h-1 bg-amber-300 -bottom-5 transform origin-bottom transition-all duration-300 ease-out scale-x-0 group-hover:scale-x-100"></div>
              </HashLink>
            </li>
            <li>
              <HashLink
                smooth
                to="#services"
                className="py-2 pr-4 pl-3 text-slateblue hover:text-amber-300 relative transition duration-300 ease-in-out group"
                onClick={closeMobileMenu}
              >
                Services
                <div className="absolute w-full h-1 bg-amber-300 -bottom-5 transform origin-bottom transition-all duration-300 ease-out scale-x-0 group-hover:scale-x-100"></div>
              </HashLink>
            </li>
            <li>
              <HashLink
                smooth
                to="#Gallery"
                className="py-2 pr-4 pl-3 text-slateblue hover:text-amber-300 relative transition duration-300 ease-in-out group"
                onClick={closeMobileMenu}
              >
                Portfolio
                <div className="absolute w-full h-1 bg-amber-300 -bottom-5 transform origin-bottom transition-all duration-300 ease-out scale-x-0 group-hover:scale-x-100"></div>
              </HashLink>
            </li>
            <li>
              <HashLink
                smooth
                to="#Footer"
                className="py-2 pr-4 pl-3 text-slateblue hover:text-amber-300 relative transition duration-300 ease-in-out group"
                onClick={closeMobileMenu}
              >
                Contact us
                <div className="absolute w-full h-1 bg-amber-300 -bottom-5 transform origin-bottom transition-all duration-300 ease-out scale-x-0 group-hover:scale-x-100"></div>
              </HashLink>
            </li>
            <div className="relative flex items-center text-slateblue">
              <input
                type="text"
                placeholder="Search"
                className="border border-slateblue px-5 py-1 rounded-full focus:outline-none focus:border-blue-500 opacity-75"
              />
              <div className="absolute right-3">
                <i className="fas fa-search text-slateblue"></i>
              </div>
            </div>
          </ul>
        </div>
        <button
          id="toggleButton"
          className="lg:hidden text-2xl focus:outline-none"
          onClick={toggleMobileMenu}
        >
          <i className="fa-solid fa-bars-staggered color"></i>
        </button>
      </nav>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${
          mobileMenuVisible ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4">
          <button
            onClick={closeMobileMenu}
            className="text-2xl focus:outline-none"
          >
            <i className="fas fa-times"></i>
          </button>
        </div>
        <ul className="p-4 space-y-4">
          <li>
            <HashLink
              smooth
              to="#Home"
              className="block py-2 text-slateblue hover:text-amber-400 text-lg font-Poppins"
              onClick={closeMobileMenu}
            >
              Home
            </HashLink>
          </li>
          <li>
            <HashLink
              smooth
              to="#services"
              className="block py-2 text-slateblue hover:text-amber-400 text-lg font-Poppins"
              onClick={closeMobileMenu}
            >
              Services
            </HashLink>
          </li>
          <li>
            <HashLink
              smooth
              to="#Gallery"
              className="block py-2 text-slateblue hover:text-amber-400 text-lg font-Poppins"
              onClick={closeMobileMenu}
            >
              Portfolio
            </HashLink>
          </li>
          <li>
            <HashLink
              smooth
              to="#Footer"
              className="block py-2 text-slateblue hover:text-amber-400 text-lg font-Poppins"
              onClick={closeMobileMenu}
            >
              Contact us
            </HashLink>
          </li>
        </ul>
      </div>

      {/* Overlay when sidebar is open */}
      {mobileMenuVisible && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={closeMobileMenu}
        ></div>
      )}
    </header>
  );
};

export default Header;
