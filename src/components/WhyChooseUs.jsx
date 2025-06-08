import React from "react";
import { FaShieldAlt, FaMoneyBillWave, FaHeadset } from "react-icons/fa";

const WhyChooseUs = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title font-bold text-3xl text-gray-800 relative inline-block mb-4">
            لماذا تختار جو عمرة؟
            <span className="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 w-20 h-[3px] bg-[#0c8a4d]"></span>
          </h2>
          <p className="text-gray-600 text-lg">
            نسعى دائماً لتقديم أفضل الخدمات لضيوف الرحمن
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="why-us-icon mb-4">
              <FaShieldAlt className="w-12 h-12 mx-auto text-[#0c8a4d]" />
            </div>
            <h3 className="why-us-title text-xl font-semibold mb-3 text-gray-800">
              حجز آمن
            </h3>
            <p className="why-us-text text-gray-600">
              نضمن لكم حجز آمن وموثوق لجميع الخدمات مع إمكانية الدفع الإلكتروني
            </p>
          </div>

          <div className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="why-us-icon mb-4">
              <FaMoneyBillWave className="w-12 h-12 mx-auto text-[#0c8a4d]" />
            </div>
            <h3 className="why-us-title text-xl font-semibold mb-3 text-gray-800">
              أسعار تنافسية
            </h3>
            <p className="why-us-text text-gray-600">
              نوفر باقات وخدمات بأسعار تنافسية تناسب جميع الميزانيات
            </p>
          </div>

          <div className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="why-us-icon mb-4">
              <FaHeadset className="w-12 h-12 mx-auto text-[#0c8a4d]" />
            </div>
            <h3 className="why-us-title text-xl font-semibold mb-3 text-gray-800">
              خدمة متميزة
            </h3>
            <p className="why-us-text text-gray-600">
              فريق خدمة عملاء على مدار الساعة لضمان راحتكم
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;