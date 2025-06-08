import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/navbar-logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo Section */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link to="/home">
                <img
                  src={logo}
                  alt="Logo"
                  className="h-8 w-8 md:h-16 md:w-16 cursor-pointer transform hover:scale-105 transition-transform duration-300"
                />
              </Link>
            </div>
          </div>

          {/* Navigation Links Section */}
          <div className="hidden md:flex items-center space-x-4 space-x-reverse md:text-xl text-base md:font-medium">
            <Link
              to="/home"
              className={`text-gray-700 hover:text-green-800 px-3 py-2 relative group ${
                isActive("/home") ? "text-green-800" : ""
              }`}
            >
              الرئيسية
              <span
                className={`absolute bottom-[-1px] left-1/2 transform -translate-x-1/2 w-16 h-[3px] bg-[#0c8a4d] ${
                  isActive("/home")
                    ? "scale-x-100"
                    : "scale-x-0 group-hover:scale-x-100"
                } transition-transform duration-300 origin-center`}
              ></span>
            </Link>
            <Link
              to="/hotels"
              className={`text-gray-700 hover:text-green-800 px-3 py-2 relative group ${
                isActive("/hotels") ? "text-green-800" : ""
              }`}
            >
              فنادق جو عمرة
              <span
                className={`absolute bottom-[-1px] left-1/2 transform -translate-x-1/2 w-16 h-[3px] bg-[#0c8a4d] ${
                  isActive("/hotels")
                    ? "scale-x-100"
                    : "scale-x-0 group-hover:scale-x-100"
                } transition-transform duration-300 origin-center`}
              ></span>
            </Link>
            <Link
              to="/attractions"
              className={`text-gray-700 hover:text-green-800 px-3 py-2 relative group ${
                isActive("/attractions") ? "text-green-800" : ""
              }`}
            >
              مزارات جو عمرة
              <span
                className={`absolute bottom-[-1px] left-1/2 transform -translate-x-1/2 w-16 h-[3px] bg-[#0c8a4d] ${
                  isActive("/attractions")
                    ? "scale-x-100"
                    : "scale-x-0 group-hover:scale-x-100"
                } transition-transform duration-300 origin-center`}
              ></span>
            </Link>
            <Link
              to="/transportation"
              className={`text-gray-700 hover:text-green-800 px-3 py-2 relative group ${
                isActive("/transportation") ? "text-green-800" : ""
              }`}
            >
              مواصلات جو عمرة
              <span
                className={`absolute bottom-[-1px] left-1/2 transform -translate-x-1/2 w-16 h-[3px] bg-[#0c8a4d] ${
                  isActive("/transportation")
                    ? "scale-x-100"
                    : "scale-x-0 group-hover:scale-x-100"
                } transition-transform duration-300 origin-center`}
              ></span>
            </Link>
            <Link
              to="/contact"
              className={`text-gray-700 hover:text-green-800 px-3 py-2 relative group ${
                isActive("/contact") ? "text-green-800" : ""
              }`}
            >
              تواصل معنا
              <span
                className={`absolute bottom-[-1px] left-1/2 transform -translate-x-1/2 w-16 h-[3px] bg-[#0c8a4d] ${
                  isActive("/contact")
                    ? "scale-x-100"
                    : "scale-x-0 group-hover:scale-x-100"
                } transition-transform duration-300 origin-center`}
              ></span>
            </Link>
          </div>

          {/* Auth Buttons Section */}
          <div className="hidden md:flex gap-6 items-center space-x-4 space-x-reverse">
            <Link
              to="/login"
              className="px-2 py-2 border border-green-600 text-green-600 rounded-md hover:bg-green-700 hover:text-white transition-all duration-300 transform hover:scale-105 text-sm"
            >
              تسجيل الدخول
            </Link>
            <Link
              to="/register"
              className="text-sm px-2 py-2 bg-green-600 text-white rounded-md border border-transparent hover:bg-white hover:text-green-700 hover:border-green-700 transition-all duration-300 transform hover:scale-105"
            >
              إنشاء حساب
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-green-600 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/home"
              className={`block text-gray-700 hover:text-green-800 px-3 py-2 relative group ${
                isActive("/home") ? "text-green-800" : ""
              }`}
            >
              الرئيسية
              <span
                className={`absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 w-16 h-[3px] bg-[#0c8a4d] ${
                  isActive("/home")
                    ? "scale-x-100"
                    : "scale-x-0 group-hover:scale-x-100"
                } transition-transform duration-300 origin-center`}
              ></span>
            </Link>
            <Link
              to="/hotels"
              className={`block text-gray-700 hover:text-green-800 px-3 py-2 relative group ${
                isActive("/hotels") ? "text-green-800" : ""
              }`}
            >
              فنادق جو عمرة
              <span
                className={`absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 w-16 h-[3px] bg-[#0c8a4d] ${
                  isActive("/hotels")
                    ? "scale-x-100"
                    : "scale-x-0 group-hover:scale-x-100"
                } transition-transform duration-300 origin-center`}
              ></span>
            </Link>
            <Link
              to="/attractions"
              className={`block text-gray-700 hover:text-green-800 px-3 py-2 relative group ${
                isActive("/attractions") ? "text-green-800" : ""
              }`}
            >
              مزارات جو عمرة
              <span
                className={`absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 w-16 h-[3px] bg-[#0c8a4d] ${
                  isActive("/attractions")
                    ? "scale-x-100"
                    : "scale-x-0 group-hover:scale-x-100"
                } transition-transform duration-300 origin-center`}
              ></span>
            </Link>
            <Link
              to="/transportation"
              className={`block text-gray-700 hover:text-green-800 px-3 py-2 relative group ${
                isActive("/transportation") ? "text-green-800" : ""
              }`}
            >
              مواصلات جو عمرة
              <span
                className={`absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 w-16 h-[3px] bg-[#0c8a4d] ${
                  isActive("/transportation")
                    ? "scale-x-100"
                    : "scale-x-0 group-hover:scale-x-100"
                } transition-transform duration-300 origin-center`}
              ></span>
            </Link>
            <Link
              to="/contact"
              className={`block text-gray-700 hover:text-green-800 px-3 py-2 relative group ${
                isActive("/contact") ? "text-green-800" : ""
              }`}
            >
              تواصل معنا
              <span
                className={`absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 w-16 h-[3px] bg-[#0c8a4d] ${
                  isActive("/contact")
                    ? "scale-x-100"
                    : "scale-x-0 group-hover:scale-x-100"
                } transition-transform duration-300 origin-center`}
              ></span>
            </Link>
            <div className="pt-4 space-y-2">
              <Link
                to="/login"
                className="block w-full px-4 py-2 text-center border border-green-600 text-green-600 rounded-md hover:bg-green-700 hover:text-white transition-all duration-300"
              >
                تسجيل الدخول
              </Link>
              <Link
                to="/register"
                className="block w-full px-4 py-2 text-center bg-green-600 text-white rounded-md hover:bg-green-700 transition-all duration-300"
              >
                إنشاء حساب
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
