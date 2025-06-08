import React, { useState } from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock } from "react-icons/fa";

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
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">تواصل معنا</h1>
          <p className="text-xl text-gray-600">نحن هنا لمساعدتك في كل ما تحتاجه</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">معلومات التواصل</h2>
            <div className="space-y-6">
              <div className="flex items-start space-x-4 space-x-reverse">
                <FaMapMarkerAlt className="text-[#0c8a4d] mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900">العنوان</h3>
                  <p className="text-gray-600">المملكة العربية السعودية، مكة المكرمة</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 space-x-reverse">
                <FaPhoneAlt className="text-[#0c8a4d] mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900">الهاتف</h3>
                  <p className="text-gray-600">+966 12 345 6789</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 space-x-reverse">
                <FaEnvelope className="text-[#0c8a4d] mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900">البريد الإلكتروني</h3>
                  <p className="text-gray-600">info@goumrah.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 space-x-reverse">
                <FaClock className="text-[#0c8a4d] mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900">ساعات العمل</h3>
                  <p className="text-gray-600">متاح على مدار الساعة</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">أرسل لنا رسالة</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  الاسم
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#0c8a4d] focus:border-transparent"
                  placeholder="أدخل اسمك"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  البريد الإلكتروني
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#0c8a4d] focus:border-transparent"
                  placeholder="أدخل بريدك الإلكتروني"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  الموضوع
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#0c8a4d] focus:border-transparent"
                  placeholder="أدخل موضوع الرسالة"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  الرسالة
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#0c8a4d] focus:border-transparent"
                  placeholder="أدخل رسالتك"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-[#0c8a4d] text-white py-2 px-4 rounded-md hover:bg-green-700 transition-colors duration-300"
              >
                إرسال الرسالة
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
