import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div className="space-y-4">
            <h4 className="text-xl font-bold mb-4 relative inline-block">
              عن جو عمرة
              <span className="absolute bottom-[-8px] left-8 w-12 h-[2px] bg-[#0c8a4d]"></span>
            </h4>
            <p className="text-gray-400 leading-relaxed">
              منصة جو عمرة هي منصة متكاملة لخدمات العمرة والحج، نسعى لتقديم أفضل
              الخدمات لضيوف الرحمن بأسعار مناسبة وجودة عالية.
            </p>
            <div className="flex gap-3 space-x-2 space-x-reverse pt-4">
              <a
                href="https://www.facebook.com/share/p/1Ad59t1RMU/"
                target="_blank"
                className="w-10 h-10 rounded-full bg-[#0c8a4d] flex items-center justify-center hover:bg-green-700 transition-colors duration-300"
              >
                <FaFacebookF className="text-white" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-[#0c8a4d] flex items-center justify-center hover:bg-green-700 transition-colors duration-300"
              >
                <FaTwitter className="text-white" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-[#0c8a4d] flex items-center justify-center hover:bg-green-700 transition-colors duration-300"
              >
                <FaInstagram className="text-white" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-[#0c8a4d] flex items-center justify-center hover:bg-green-700 transition-colors duration-300"
              >
                <FaYoutube className="text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links Section */}
          <div className="space-y-4">
            <h4 className="text-xl font-bold mb-4 relative inline-block">
              روابط سريعة
              <span className="absolute bottom-[-8px] left-8 w-12 h-[2px] bg-[#0c8a4d]"></span>
            </h4>
            <ul className="space-y-2 mt-1">
              <li>
                <Link
                  to="/home"
                  className="text-gray-400 hover:text-[#0c8a4d] transition-colors duration-300"
                >
                  الرئيسية
                </Link>
              </li>
              <Link
                to="/trips"
                className="text-gray-400 hover:text-[#0c8a4d] transition-colors duration-300"
              >
                رحلات جو عمرة
              </Link>
              <li>
                <Link
                  to="/hotels"
                  className="text-gray-400 hover:text-[#0c8a4d] transition-colors duration-300"
                >
                  فنادق جو عمرة
                </Link>
              </li>
              <li>
                <Link
                  to="/attractions"
                  className="text-gray-400 hover:text-[#0c8a4d] transition-colors duration-300"
                >
                  مزارات جو عمرة
                </Link>
              </li>
              <li>
                <Link
                  to="/transportation"
                  className="text-gray-400 hover:text-[#0c8a4d] transition-colors duration-300"
                >
                  مواصلات جو عمرة
                </Link>
              </li>
              <li></li>
              <li>
                <Link
                  to="/visas"
                  className="text-gray-400 hover:text-[#0c8a4d] transition-colors duration-300"
                >
                  تأشيرات جو عمرة
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="space-y-4">
            <h4 className="text-xl font-bold mb-4 relative inline-block">
              تواصل معنا
              <span className="absolute bottom-[-8px] left-8 w-12 h-[2px] bg-[#0c8a4d]"></span>
            </h4>
            <ul className="space-y-3 mt-1 -mr-4">
              <li className="flex gap-2 items-start space-x-3 space-x-reverse">
                <FaMapMarkerAlt className="text-[#0c8a4d] mt-1 flex-shrink-0" />
                <span className="text-gray-400">
                  المملكة العربية السعودية، مكة المكرمة
                </span>
              </li>
              <li className="flex gap-2 items-start space-x-3 space-x-reverse">
                <FaPhoneAlt className="text-[#0c8a4d] mt-1 flex-shrink-0" />
                <span className="text-gray-400">0557123435</span>
              </li>
              <li className="flex gap-2 items-start space-x-3 space-x-reverse">
                <FaEnvelope className="text-[#0c8a4d] mt-1 flex-shrink-0" />
                <span className="text-gray-400">taw3iaaa@gmail.com</span>
              </li>
              <li className="flex gap-2 items-start space-x-3 space-x-reverse">
                <FaClock className="text-[#0c8a4d] mt-1 flex-shrink-0" />
                <span className="text-gray-400">متاح على مدار الساعة</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="text-center">
            <p className="text-gray-400">
              جميع الحقوق محفوظة © {new Date().getFullYear()} منصة جو عمرة
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
