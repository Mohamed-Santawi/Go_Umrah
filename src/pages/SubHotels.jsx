import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {
  FaStar,
  FaMapMarkerAlt,
  FaWifi,
  FaUtensils,
  FaParking,
  FaSwimmingPool,
  FaSpa,
  FaDumbbell,
  FaConciergeBell,
  FaBusAlt,
} from "react-icons/fa";

const SubHotels = () => {
  const hotels = [
    {
      id: 1,
      name: "فندق أبراج الصفوة",
      image: "/src/assets/hotels/hotel1.jpg",
      rating: 5,
      location: "مكة المكرمة",
      features: ["واي فاي مجاني", "مطعم", "موقف سيارات"],
      description:
        "يقع فندق أبراج الصفوة على بعد خطوات قليلة من الحرم المكي الشريف، ويوفر إطلالات رائعة على الكعبة المشرفة.",
      price: 800,
    },
    {
      id: 2,
      name: "فندق هيلتون مكة",
      image: "/src/assets/hotels/hotel2.jpg",
      rating: 5,
      location: "مكة المكرمة",
      features: ["واي فاي مجاني", "مطعم", "مسبح"],
      description:
        "يقع فندق هيلتون مكة في قلب مكة المكرمة، ويوفر غرفاً فاخرة وإطلالات رائعة على الحرم المكي الشريف.",
      price: 1200,
    },
    // Add more hotels here
  ];

  const amenities = [
    { icon: <FaWifi />, title: "واي فاي مجاني" },
    { icon: <FaUtensils />, title: "مطاعم متنوعة" },
    { icon: <FaConciergeBell />, title: "خدمة الغرف" },
    { icon: <FaParking />, title: "موقف سيارات" },
    { icon: <FaDumbbell />, title: "صالة رياضية" },
    { icon: <FaSwimmingPool />, title: "مسبح" },
    { icon: <FaSpa />, title: "سبا" },
    { icon: <FaBusAlt />, title: "خدمة النقل" },
  ];

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-50">
        {/* Featured Hotels Section */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                فنادق مميزة
              </h2>
              <p className="text-gray-600 text-lg">
                اختيارات مميزة من أفضل الفنادق في مكة المكرمة والمدينة المنورة
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {hotels.map((hotel) => (
                <div
                  key={hotel.id}
                  className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:-translate-y-2"
                >
                  <div className="relative">
                    <img
                      src={hotel.image}
                      alt={hotel.name}
                      className="w-full h-64 object-cover"
                    />
                    <div className="absolute top-4 right-4 flex text-yellow-400">
                      {[...Array(hotel.rating)].map((_, i) => (
                        <FaStar key={i} />
                      ))}
                    </div>
                    <div className="absolute bottom-4 right-4 bg-white/90 px-3 py-1 rounded-full text-sm flex items-center">
                      <FaMapMarkerAlt className="text-[#0c8a4d] mr-1" />
                      {hotel.location}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {hotel.name}
                    </h3>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {hotel.features.map((feature, index) => (
                        <span
                          key={index}
                          className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                    <p className="text-gray-600 mb-4">{hotel.description}</p>
                    <div className="flex justify-between items-center">
                      <div>
                        <span className="text-2xl font-bold text-[#0c8a4d]">
                          {hotel.price} ريال
                        </span>
                        <span className="text-gray-500">/ الليلة</span>
                      </div>
                      <button className="bg-[#0c8a4d] text-white px-6 py-2 rounded-full hover:bg-green-700 transition-colors">
                        عرض التفاصيل
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Search Section */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                ابحث عن فندق
              </h2>
              <p className="text-gray-600 text-lg">
                استخدم محرك البحث للعثور على الفندق المناسب لك
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <form className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div>
                  <label className="block text-gray-700 mb-2">المدينة</label>
                  <select className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0c8a4d] focus:border-transparent">
                    <option value="">اختر المدينة</option>
                    <option value="makkah">مكة المكرمة</option>
                    <option value="madinah">المدينة المنورة</option>
                  </select>
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">
                    تاريخ الوصول
                  </label>
                  <input
                    type="date"
                    className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0c8a4d] focus:border-transparent"
                    min="2024-03-10"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">
                    تاريخ المغادرة
                  </label>
                  <input
                    type="date"
                    className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0c8a4d] focus:border-transparent"
                    min="2024-03-11"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">عدد الضيوف</label>
                  <select className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0c8a4d] focus:border-transparent">
                    <option value="1">1 شخص</option>
                    <option value="2">2 أشخاص</option>
                    <option value="3">3 أشخاص</option>
                    <option value="4">4 أشخاص</option>
                  </select>
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">نطاق السعر</label>
                  <select className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0c8a4d] focus:border-transparent">
                    <option value="">جميع الأسعار</option>
                    <option value="economy">اقتصادي (أقل من 500 ريال)</option>
                    <option value="mid-range">متوسط (500 - 1000 ريال)</option>
                    <option value="luxury">فاخر (أكثر من 1000 ريال)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">التقييم</label>
                  <select className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0c8a4d] focus:border-transparent">
                    <option value="">جميع التقييمات</option>
                    <option value="5">5 نجوم</option>
                    <option value="4">4 نجوم وأعلى</option>
                    <option value="3">3 نجوم وأعلى</option>
                  </select>
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">
                    المسافة من الحرم
                  </label>
                  <select className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0c8a4d] focus:border-transparent">
                    <option value="">جميع المسافات</option>
                    <option value="close">قريب (أقل من 500 متر)</option>
                    <option value="medium">متوسط (500 - 1000 متر)</option>
                    <option value="far">بعيد (أكثر من 1000 متر)</option>
                  </select>
                </div>
                <div className="flex items-end">
                  <button
                    type="submit"
                    className="w-full bg-[#0c8a4d] text-white py-2 px-6 rounded-lg hover:bg-green-700 transition-colors"
                  >
                    بحث
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>

        {/* Amenities Section */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                مميزات فنادقنا
              </h2>
              <p className="text-gray-600 text-lg">
                نوفر لكم أفضل الخدمات والمرافق في فنادقنا
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {amenities.map((amenity, index) => (
                <div
                  key={index}
                  className="text-center p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow"
                >
                  <div className="text-4xl text-[#0c8a4d] mb-4 flex justify-center">
                    {amenity.icon}
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900">
                    {amenity.title}
                  </h4>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-[#0c8a4d] text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">
              احجز فندقك الآن واستمتع بإقامة مريحة
            </h2>
            <p className="text-lg mb-8">
              نوفر لك أفضل الفنادق في مكة المكرمة والمدينة المنورة بأسعار
              تنافسية وخدمات متميزة
            </p>
            <button className="bg-white text-[#0c8a4d] px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors">
              احجز الآن
            </button>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default SubHotels;
