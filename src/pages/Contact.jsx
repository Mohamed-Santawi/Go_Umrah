import React, { useState } from "react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50 pt-16 md:pt-20">
        {/* Hero Section */}
        <section className="bg-[#0c8a4d] text-white py-8 sm:py-12">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
              تواصل معنا
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-white/90">
              نحن هنا لمساعدتك في كل ما تحتاجه
            </p>
          </div>
        </section>

        {/* Contact Information and Form */}
        <section className="py-8 sm:py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
              {/* Contact Information */}
              <div className="bg-white rounded-lg shadow-md p-6 sm:p-8">
                <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-6">
                  معلومات التواصل
                </h2>
                <div className="space-y-4 sm:space-y-6">
                  <div className="flex items-start space-x-3 sm:space-x-4 space-x-reverse">
                    <FaMapMarkerAlt className="text-[#0c8a4d] mt-1 flex-shrink-0 text-lg sm:text-xl" />
                    <div>
                      <h3 className="font-semibold text-gray-900 text-base sm:text-lg">
                        العنوان
                      </h3>
                      <p className="text-gray-600 text-sm sm:text-base">
                        المملكة العربية السعودية، مكة المكرمة
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 sm:space-x-4 space-x-reverse">
                    <FaPhoneAlt className="text-[#0c8a4d] mt-1 flex-shrink-0 text-lg sm:text-xl" />
                    <div>
                      <h3 className="font-semibold text-gray-900 text-base sm:text-lg">
                        الهاتف
                      </h3>
                      <p className="text-gray-600 text-sm sm:text-base">
                        +966 12 345 6789
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 sm:space-x-4 space-x-reverse">
                    <FaEnvelope className="text-[#0c8a4d] mt-1 flex-shrink-0 text-lg sm:text-xl" />
                    <div>
                      <h3 className="font-semibold text-gray-900 text-base sm:text-lg">
                        البريد الإلكتروني
                      </h3>
                      <p className="text-gray-600 text-sm sm:text-base">
                        info@goumrah.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 sm:space-x-4 space-x-reverse">
                    <FaClock className="text-[#0c8a4d] mt-1 flex-shrink-0 text-lg sm:text-xl" />
                    <div>
                      <h3 className="font-semibold text-gray-900 text-base sm:text-lg">
                        ساعات العمل
                      </h3>
                      <p className="text-gray-600 text-sm sm:text-base">
                        متاح على مدار الساعة
                      </p>
                    </div>
                  </div>
                </div>

                {/* Social Media Links */}
                <div className="mt-8">
                  <h3 className="font-semibold text-gray-900 text-base sm:text-lg mb-4">
                    تابعنا على
                  </h3>
                  <div className="flex gap-3">
                    <a
                      href="#"
                      className="w-10 h-10 rounded-full bg-[#0c8a4d] flex items-center justify-center hover:bg-[#0a6e3d] transition-colors duration-300"
                    >
                      <i className="fab fa-facebook-f text-white"></i>
                    </a>
                    <a
                      href="#"
                      className="w-10 h-10 rounded-full bg-[#0c8a4d] flex items-center justify-center hover:bg-[#0a6e3d] transition-colors duration-300"
                    >
                      <i className="fab fa-twitter text-white"></i>
                    </a>
                    <a
                      href="#"
                      className="w-10 h-10 rounded-full bg-[#0c8a4d] flex items-center justify-center hover:bg-[#0a6e3d] transition-colors duration-300"
                    >
                      <i className="fab fa-instagram text-white"></i>
                    </a>
                    <a
                      href="#"
                      className="w-10 h-10 rounded-full bg-[#0c8a4d] flex items-center justify-center hover:bg-[#0a6e3d] transition-colors duration-300"
                    >
                      <i className="fab fa-youtube text-white"></i>
                    </a>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-white rounded-lg shadow-md p-6 sm:p-8">
                <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-6">
                  أرسل لنا رسالة
                </h2>
                <form
                  onSubmit={handleSubmit}
                  className="space-y-4 sm:space-y-6"
                >
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      الاسم
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#0c8a4d] focus:border-transparent text-sm sm:text-base"
                      placeholder="أدخل اسمك"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      البريد الإلكتروني
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#0c8a4d] focus:border-transparent text-sm sm:text-base"
                      placeholder="أدخل بريدك الإلكتروني"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      الموضوع
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#0c8a4d] focus:border-transparent text-sm sm:text-base"
                      placeholder="أدخل موضوع الرسالة"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      الرسالة
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="4"
                      className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#0c8a4d] focus:border-transparent text-sm sm:text-base"
                      placeholder="أدخل رسالتك"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#0c8a4d] text-white py-2 px-4 rounded-md hover:bg-[#0a6e3d] transition-colors duration-300 text-sm sm:text-base"
                  >
                    إرسال الرسالة
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-8 sm:py-12 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-6 text-center">
              موقعنا
            </h2>
            <div className="rounded-lg overflow-hidden shadow-md h-[300px] sm:h-[400px] md:h-[500px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3624.6504900090997!2d39.1584!3d21.4225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjHCsDI1JzIxLjAiTiAzOcKwMDknMzAuMiJF!5e0!3m2!1sen!2ssa!4v1623456789012!5m2!1sen!2ssa"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Contact;
