import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { useAuth } from "../context/AuthContext";
import { useCart } from "../context/CartContext";
import logo from "../assets/navbar-logo.png";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { currentUser, logout } = useAuth();
  const { cartItems } = useCart();

  const cartItemCount = cartItems.length;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path) => {
    return location.pathname === path;
  };

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/home");
    } catch (error) {
      console.error("Failed to log out:", error);
    }
  };

  const getUserInitial = () => {
    if (currentUser?.displayName) {
      return currentUser.displayName.charAt(0).toUpperCase();
    }
    return "U";
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
              فنادقنا
              <span
                className={`absolute bottom-[-1px] left-1/2 transform -translate-x-1/2 w-14 h-[3px] bg-[#0c8a4d] ${
                  isActive("/hotels")
                    ? "scale-x-100"
                    : "scale-x-0 group-hover:scale-x-100"
                } transition-transform duration-300 origin-center`}
              ></span>
            </Link>
            <Link
              to="/trips"
              className={`text-gray-700 hover:text-green-800 px-3 py-2 relative group ${
                isActive("/trips") ? "text-green-800" : ""
              }`}
            >
              رحلاتنا
              <span
                className={`absolute bottom-[-1px] left-1/2 transform -translate-x-1/2 w-14 h-[3px] bg-[#0c8a4d] ${
                  isActive("/trips")
                    ? "scale-x-100"
                    : "scale-x-0 group-hover:scale-x-100"
                } transition-transform duration-300 origin-center`}
              ></span>
            </Link>
            <Link
              to="/visa"
              className={`text-gray-700 hover:text-green-800 px-3 py-2 relative group ${
                isActive("/visa") ? "text-green-800" : ""
              }`}
            >
              تأشيراتنا
              <span
                className={`absolute bottom-[-1px] left-1/2 transform -translate-x-1/2 w-16 h-[3px] bg-[#0c8a4d] ${
                  isActive("/visa")
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
              مواصلاتنا
              <span
                className={`absolute bottom-[-1px] left-1/2 transform -translate-x-1/2 w-16 h-[3px] bg-[#0c8a4d] ${
                  isActive("/transportation")
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
              مزاراتنا
              <span
                className={`absolute bottom-[-1px] left-1/2 transform -translate-x-1/2 w-16 h-[3px] bg-[#0c8a4d] ${
                  isActive("/attractions")
                    ? "scale-x-100"
                    : "scale-x-0 group-hover:scale-x-100"
                } transition-transform duration-300 origin-center`}
              ></span>
            </Link>
            <Link
              to="/store"
              className={`text-gray-700 hover:text-green-800 px-3 py-2 relative group ${
                isActive("/store") ? "text-green-800" : ""
              }`}
            >
              متجرنا
              <span
                className={`absolute bottom-[-1px] left-1/2 transform -translate-x-1/2 w-16 h-[3px] bg-[#0c8a4d] ${
                  isActive("/store")
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
          <div className="hidden md:flex ml-8 gap-6 items-center space-x-4 space-x-reverse">
            {currentUser ? (
              <div className="flex items-center gap-4">
                <Link
                  to="/cart"
                  className="relative text-gray-700 hover:text-green-800 transition-colors duration-300"
                >
                  <FaShoppingCart className="h-6 w-6" />
                  {cartItemCount > 0 && (
                    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                      {cartItemCount}
                    </span>
                  )}
                </Link>
                <div className="relative group">
                  <button className="cursor-pointer w-10 h-10 rounded-full bg-[#0c8a4d] text-white flex items-center justify-center hover:bg-green-700 transition-colors duration-300">
                    {getUserInitial()}
                  </button>
                  <div className="absolute right-0 w-48 bg-white rounded-md shadow-lg py-1 hidden group-hover:block">
                    <button
                      onClick={handleLogout}
                      className="cursor-pointer block w-full text-right px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      تسجيل الخروج
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <>
                <div className="flex items-center justify-center gap-3">
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
                <Link
                  to="/cart"
                  className="relative text-gray-700 hover:text-green-800 transition-colors duration-300"
                >
                  <FaShoppingCart className="h-6 w-6" />
                  {cartItemCount > 0 && (
                    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                      {cartItemCount}
                    </span>
                  )}
                </Link>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#0c8a4d]"
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/hotels"
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                isActive("/hotels")
                  ? "text-[#0c8a4d] bg-gray-50"
                  : "text-gray-700 hover:text-[#0c8a4d] hover:bg-gray-50"
              }`}
            >
              فنادقنا
            </Link>
            <Link
              to="/trips"
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                isActive("/trips")
                  ? "text-[#0c8a4d] bg-gray-50"
                  : "text-gray-700 hover:text-[#0c8a4d] hover:bg-gray-50"
              }`}
            >
              رحلاتنا
            </Link>
            <Link
              to="/visa"
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                isActive("/visa")
                  ? "text-[#0c8a4d] bg-gray-50"
                  : "text-gray-700 hover:text-[#0c8a4d] hover:bg-gray-50"
              }`}
            >
              تأشيراتنا
            </Link>
            <Link
              to="/transportation"
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                isActive("/transportation")
                  ? "text-[#0c8a4d] bg-gray-50"
                  : "text-gray-700 hover:text-[#0c8a4d] hover:bg-gray-50"
              }`}
            >
              مواصلاتنا
            </Link>
            <Link
              to="/attractions"
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                isActive("/attractions")
                  ? "text-[#0c8a4d] bg-gray-50"
                  : "text-gray-700 hover:text-[#0c8a4d] hover:bg-gray-50"
              }`}
            >
              مزاراتنا
            </Link>
            <Link
              to="/store"
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                isActive("/store")
                  ? "text-[#0c8a4d] bg-gray-50"
                  : "text-gray-700 hover:text-[#0c8a4d] hover:bg-gray-50"
              }`}
            >
              متجرنا
            </Link>
            <Link
              to="/contact"
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                isActive("/contact")
                  ? "text-[#0c8a4d] bg-gray-50"
                  : "text-gray-700 hover:text-[#0c8a4d] hover:bg-gray-50"
              }`}
            >
              تواصل معنا
            </Link>
          </div>

          <div className="pt-4 pb-3 border-t border-gray-200">
            {currentUser ? (
              <div className="space-y-1">
                <div className="px-4 py-2 text-base font-medium text-gray-800">
                  {currentUser.displayName || currentUser.email}
                </div>
                <button
                  onClick={handleLogout}
                  className="block w-full text-right px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100"
                >
                  تسجيل الخروج
                </button>
              </div>
            ) : (
              <div className="pt-4 space-y-4">
                <Link
                  to="/login"
                  className="block max-w-[90%] mx-auto px-4 py-2 text-center border border-green-600 text-green-600 rounded-md hover:bg-green-700 hover:text-white transition-all duration-300"
                >
                  تسجيل الدخول
                </Link>
                <Link
                  to="/register"
                  className="block max-w-[90%] mx-auto px-4 py-2 text-center bg-green-600 text-white rounded-md hover:bg-green-700 transition-all duration-300"
                >
                  إنشاء حساب
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
