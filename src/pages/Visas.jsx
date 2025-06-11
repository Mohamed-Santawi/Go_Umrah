import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import visa1 from "../assets/visas/visa1.jpg"
import visa2 from "../assets/visas/visa2.jpg"
import visa3 from "../assets/visas/visa3.jpg"
import visa4 from "../assets/visas/visa4.jpg"
import kaabaImage from "../assets/kaaba.jpg";
import {
  FaBolt,
  FaCheckCircle,
  FaHeadset,
  FaFileAlt,
  FaHandHoldingUsd,
  FaShieldAlt,
  FaPassport,
  FaImage,
  FaPlaneDeparture,
  FaHotel,
  FaFileMedical,
  FaInfoCircle,
} from "react-icons/fa";
import Hero from "../components/Hero";

const Visas = () => {
  const visaTypes = [
    {
      id: 1,
      title: "تأشيرة العمرة الإلكترونية",
      description:
        "تأشيرة إلكترونية لأداء مناسك العمرة في المملكة العربية السعودية",
      image: visa1,
      detailsLink: "/visa-umrah",
      applyLink: "/visa-umrah-apply",
    },
    {
      id: 2,
      title: "تأشيرة الترانزيت",
      description: "تأشيرة للمسافرين العابرين عبر المملكة العربية السعودية",
      image: visa2,
      detailsLink: "/visa-transit",
      applyLink: "/visa-transit-apply",
    },
    {
      id: 3,
      title: "تأشيرة السياحة",
      description: "تأشيرة للسياحة والزيارة في المملكة العربية السعودية",
      image: visa3,
      detailsLink: "/visa-tourism",
      applyLink: "/visa-tourism-apply",
    },
  ];

  const features = [
    {
      icon: <FaBolt className="text-4xl" />,
      title: "سرعة الإنجاز",
      description: "استخراج التأشيرات في أسرع وقت ممكن",
    },
    {
      icon: <FaCheckCircle className="text-4xl" />,
      title: "ضمان القبول",
      description: "نضمن لكم قبول طلب التأشيرة أو استرداد الرسوم",
    },
    {
      icon: <FaHeadset className="text-4xl" />,
      title: "دعم على مدار الساعة",
      description: "فريق دعم متخصص لمساعدتكم في جميع الاستفسارات",
    },
    {
      icon: <FaFileAlt className="text-4xl" />,
      title: "متابعة الطلب",
      description: "إمكانية متابعة حالة طلب التأشيرة بشكل مباشر",
    },
    {
      icon: <FaHandHoldingUsd className="text-4xl" />,
      title: "أسعار تنافسية",
      description: "أسعار مناسبة لجميع الميزانيات مع خدمة ممتازة",
    },
    {
      icon: <FaShieldAlt className="text-4xl" />,
      title: "خصوصية وأمان",
      description: "نضمن خصوصية وأمان بياناتكم الشخصية",
    },
  ];

  const requirements = [
    {
      icon: <FaPassport />,
      text: "جواز سفر ساري المفعول لمدة لا تقل عن 6 أشهر",
    },
    {
      icon: <FaImage />,
      text: "صورة شخصية بخلفية بيضاء",
    },
    {
      icon: <FaPlaneDeparture />,
      text: "تذاكر السفر ذهاباً وإياباً",
    },
    {
      icon: <FaHotel />,
      text: "حجز الفندق المؤكد",
    },
    {
      icon: <FaFileMedical />,
      text: "شهادة التطعيم ضد الأمراض المعدية",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Hero
        title="تأشيرات جو عمرة "
        description="استخراج التأشيرات في اسرع وقت ممكن"
        image={kaabaImage}
        isLink={true}
        linkText="تقدم بطلب التأشيرة الآن"
        linkURL={"/visa-apply"}
      />


      {/* Visa Types Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              أنواع التأشيرات
            </h2>
            <p className="text-xl text-gray-600">
              نقدم لكم خدمات استخراج مختلف أنواع التأشيرات
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {visaTypes.map((visa) => (
              <div
                key={visa.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <img
                  src={visa.image}
                  alt={visa.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {visa.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{visa.description}</p>
                  <div className="flex justify-between items-center">
                    <Link
                      to={visa.detailsLink}
                      className="text-[#0c8a4d] hover:text-[#0a6e3d] font-semibold"
                    >
                      المزيد من التفاصيل
                    </Link>
                    <Link
                      to={visa.applyLink}
                      className="bg-[#0c8a4d] text-white px-4 py-2 rounded-lg hover:bg-[#0a6e3d] transition-colors duration-300"
                    >
                      طلب التأشيرة
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              لماذا تختار خدمات تأشيرات جو عمرة؟
            </h2>
            <p className="text-xl text-gray-600">
              نقدم لكم خدمات متميزة لاستخراج التأشيرات
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="text-center p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow duration-300"
              >
                <div className="text-[#0c8a4d] mb-4 flex justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              متطلبات التأشيرة
            </h2>
            <p className="text-xl text-gray-600">
              المستندات المطلوبة للحصول على التأشيرة
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h4 className="text-xl font-semibold text-gray-900 mb-6">
                المستندات الأساسية المطلوبة:
              </h4>
              <ul className="space-y-4">
                {requirements.map((req, index) => (
                  <li key={index} className="flex items-center text-gray-700">
                    <span className="text-[#0c8a4d] ml-3">{req.icon}</span>
                    {req.text}
                  </li>
                ))}
              </ul>
              <div className="mt-6 p-4 bg-blue-50 rounded-lg flex items-start">
                <FaInfoCircle className="text-blue-500 mt-1 ml-2" />
                <p className="text-blue-700">
                  قد تختلف المتطلبات حسب نوع التأشيرة وجنسية المتقدم. يرجى
                  مراجعة صفحة التفاصيل الخاصة بكل نوع من أنواع التأشيرات.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#0c8a4d]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-3xl font-bold text-white mb-4">
              احصل على تأشيرتك الآن بكل سهولة
            </h3>
            <p className="text-xl text-white mb-8">
              نقدم لكم خدمة استخراج التأشيرات بأسرع وقت وأقل تكلفة
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/visa-umrah-apply"
                className="bg-white text-[#0c8a4d] px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
              >
                تأشيرة العمرة
              </Link>
              <Link
                to="/visa-transit-apply"
                className="bg-white text-[#0c8a4d] px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
              >
                تأشيرة الترانزيت
              </Link>
              <Link
                to="/visa-tourism-apply"
                className="bg-white text-[#0c8a4d] px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
              >
                تأشيرة السياحة
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Visas;
