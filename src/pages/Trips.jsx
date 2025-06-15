import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import tripsHero from "../assets/islamic/trips_hero.jpg";
import Hero from "../components/Hero";
import trip1 from "../assets/trips/trip1.jpg";
import trip2 from "../assets/trips/trip2.jpg";
import trip3 from "../assets/trips/trip3.jpg";
import {
  FaHotel,
  FaPlane,
  FaBusAlt,
  FaUtensils,
  FaMapMarkedAlt,
  FaHeadset,
  FaStar,
  FaStarHalfAlt,
} from "react-icons/fa";

const Trips = () => {
  return (
    <>
      <Header />
      <Hero
        title="العمرات السياحية"
        description="افضل العمرات السياحية في مكة المكرمة والمدينة المنورة"
        image={tripsHero}
      />

      {/* Types of Trips Section */}
      <section className="py-5">
        <div className="container">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-2 relative inline-block">
              أنواع الرحلات
              <span className="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 w-20 h-[3px] bg-[#0c8a4d]"></span>
            </h2>
            <p className="text-gray-600 mt-6">
              نقدم لكم مجموعة متنوعة من باقات العمرة
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Complete Umrah Trip Card */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden p-3">
              <img
                src={trip1}
                alt="رحلات عمرة كاملة"
                className="w-full h-48 object-cover rounded-md"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">رحلات عمرة كاملة</h3>
                <p className="text-gray-600 mb-4">
                  باقات شاملة تتضمن التأشيرة والطيران والإقامة والمواصلات وزيارة
                  المعالم
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-[#0c8a4d] font-bold">
                    تبدأ من 5000 ريال
                  </span>
                  <Link
                    to="/trips-complete"
                    className="bg-[#0c8a4d] text-white px-4 py-2 rounded-md hover:bg-green-800 transition-colors"
                  >
                    عرض الباقات
                  </Link>
                </div>
              </div>
            </div>

            {/* Transit Umrah Trip Card */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden p-3">
              <img
                src={trip2}
                alt="رحلات عمرة ترانزيت"
                className="w-full h-48 object-cover rounded-md"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">
                  رحلات عمرة ترانزيت
                </h3>
                <p className="text-gray-600 mb-4">
                  باقات مخصصة للمسافرين العابرين عبر المملكة العربية السعودية
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-[#0c8a4d] font-bold">
                    تبدأ من 3000 ريال
                  </span>
                  <Link
                    to="/trips-transit"
                    className="bg-[#0c8a4d] text-white px-4 py-2 rounded-md hover:bg-green-800 transition-colors"
                  >
                    عرض الباقات
                  </Link>
                </div>
              </div>
            </div>

            {/* Flexible Umrah Trip Card */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden p-3">
              <img
                src={trip3}
                alt="رحلات عمرة مرنة"
                className="w-full h-48 object-cover rounded-md"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">رحلات عمرة مرنة</h3>
                <p className="text-gray-600 mb-4">
                   عمرة مرنة يمكنك تخصيصها حسب رغبتك من حيث المدة، الفندق،
                  والخدمات، بما يتناسب مع ميزانيتك.{" "}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-[#0c8a4d] font-bold">
                    تبدأ من 4000 ريال
                  </span>
                  <Link
                    to="/trips-flexible"
                    className="bg-[#0c8a4d] text-white px-4 py-2 rounded-md hover:bg-green-800 transition-colors"
                  >
                    عرض الباقات
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 bg-gray-50">
        <div className="container">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-2 relative inline-block">
              لماذا تختار رحلات جو عمرة؟
              <span className="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 w-20 h-[3px] bg-[#0c8a4d]"></span>
            </h2>
            <p className="text-gray-600 mt-6">نقدم لكم تجربة عمرة لا تُنسى</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow duration-300">
              <div className="flex justify-center items-center mb-4">
                <div className="text-4xl text-[#0c8a4d]">
                  <FaHotel />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3">فنادق فاخرة</h3>
              <p className="text-gray-600">
                إقامة في فنادق فاخرة قريبة من الحرمين الشريفين
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow duration-300">
              <div className="flex justify-center items-center mb-4">
                <div className="text-4xl text-[#0c8a4d]">
                  <FaPlane />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3">رحلات طيران مريحة</h3>
              <p className="text-gray-600">
                رحلات طيران مباشرة على أفضل شركات الطيران
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow duration-300">
              <div className="flex justify-center items-center mb-4">
                <div className="text-4xl text-[#0c8a4d]">
                  <FaBusAlt />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3">مواصلات متميزة</h3>
              <p className="text-gray-600">
                خدمات نقل متميزة بين المطار والفنادق والحرمين الشريفين
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow duration-300">
              <div className="flex justify-center items-center mb-4">
                <div className="text-4xl text-[#0c8a4d]">
                  <FaUtensils />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3">وجبات شهية</h3>
              <p className="text-gray-600">وجبات متنوعة تناسب جميع الأذواق</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow duration-300">
              <div className="flex justify-center items-center mb-4">
                <div className="text-4xl text-[#0c8a4d]">
                  <FaMapMarkedAlt />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3">زيارة المعالم</h3>
              <p className="text-gray-600">
                جولات سياحية لزيارة أهم المعالم الإسلامية
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow duration-300">
              <div className="flex justify-center items-center mb-4">
                <div className="text-4xl text-[#0c8a4d]">
                  <FaHeadset />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3">مرشدين متخصصين</h3>
              <p className="text-gray-600">
                مرشدين ذوي خبرة لمساعدتكم في أداء مناسك العمرة
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12">
        <div className="container">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-2 relative inline-block">
              آراء عملائنا
              <span className="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 w-20 h-[3px] bg-[#0c8a4d]"></span>
            </h2>
            <p className="text-gray-600 mt-6">
              ماذا يقول عملاؤنا عن تجربتهم مع جو عمرة
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="flex justify-center mb-4 text-yellow-400">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <p className="text-gray-600 mb-4">
                "تجربة رائعة مع جو عمرة، خدمة ممتازة وفنادق فاخرة قريبة من
                الحرم. أنصح الجميع بالتعامل معهم."
              </p>
              <h5 className="font-semibold">أحمد محمد</h5>
              <p className="text-gray-500">الرياض، السعودية</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="flex justify-center mb-4 text-yellow-400">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <p className="text-gray-600 mb-4">
                "استمتعت كثيراً برحلة العمرة مع جو عمرة، كل شيء كان منظماً بشكل
                رائع من لحظة وصولنا وحتى المغادرة."
              </p>
              <h5 className="font-semibold">فاطمة علي</h5>
              <p className="text-gray-500">القاهرة، مصر</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="flex justify-center mb-4 text-yellow-400">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStarHalfAlt />
              </div>
              <p className="text-gray-600 mb-4">
                "خدمة ممتازة وفريق عمل محترف، الفنادق كانت رائعة والمواصلات
                مريحة. سأختار جو عمرة مرة أخرى بالتأكيد."
              </p>
              <h5 className="font-semibold">عبدالله خالد</h5>
              <p className="text-gray-500">دبي، الإمارات</p>
            </div>
          </div>
        </div>
      </section>

      {/* Promotion Section */}
      <section className="py-12 bg-gray-50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <h3 className="text-2xl font-bold mb-4 relative inline-block">
                احجز رحلة عمرتك الآن واحصل على خصم 15%
              </h3>
              <p className="text-gray-600 mb-6 mt-6">
                استفد من عروضنا الحصرية على باقات العمرة المتنوعة
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  to="/trips-complete"
                  className="bg-[#0c8a4d] text-white px-6 py-3 rounded-md hover:bg-green-800 transition-colors"
                >
                  رحلات عمرة كاملة
                </Link>
                <Link
                  to="/trips-transit"
                  className="bg-[#0c8a4d] text-white px-6 py-3 rounded-md hover:bg-green-800 transition-colors"
                >
                  رحلات عمرة ترانزيت
                </Link>
                <Link
                  to="/trips-flexible"
                  className="bg-[#0c8a4d] text-white px-6 py-3 rounded-md hover:bg-green-800 transition-colors"
                >
                  رحلات عمرة مرنة
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Trips;
