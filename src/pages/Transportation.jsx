import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import transportationHero from "../assets/islamic/transportation_hero.jpg";
import Hero from "../components/Hero";
const Transportation = () => {
  const services = [
    {
      title: "نقل من المطار",
      description: "خدمة نقل مريحة من المطار إلى الفندق مع سائقين محترفين",
      icon: "fas fa-plane-arrival",
    },
    {
      title: "نقل داخلي",
      description: "تنقلات داخلية مريحة بين المواقع المقدسة",
      icon: "fas fa-car",
    },
    {
      title: "رحلات يومية",
      description: "رحلات منظمة إلى المواقع المقدسة والمزارات",
      icon: "fas fa-route",
    },
    {
      title: "سائق خاص",
      description: "خدمة سائق خاص مع مركبات فاخرة",
      icon: "fas fa-user-tie",
    },
  ];

  const vehicles = [
    {
      type: "سيارات فاخرة",
      description: "سيارات حديثة ومريحة للعائلات الصغيرة",
      capacity: "4-6 أشخاص",
      features: ["تكييف", "وسائد مريحة", "مساحة للأمتعة"],
      image: "/img/luxury-car.jpg",
    },
    {
      type: "فانات",
      description: "فانات مريحة للعائلات المتوسطة",
      capacity: "8-12 شخص",
      features: ["تكييف", "مساحة واسعة", "تلفاز", "مقاعد مريحة"],
      image: "/img/van.jpg",
    },
    {
      type: "باصات",
      description: "باصات حديثة للجماعات الكبيرة",
      capacity: "30-45 شخص",
      features: ["تكييف مركزي", "حمام", "تلفاز", "مقاعد مريحة"],
      image: "/img/bus.jpg",
    },
  ];

  return (
    <>
      <Header />
      <main className="pt-16 md:pt-20">
        <Hero
          title="خدمات النقل"
          description="خدمات النقل في جو عمرة"
          image={transportationHero}
        />

        {/* Services Section */}
        <section className="py-12 sm:py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">
              خدماتنا
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-white p-4 sm:p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="text-[#0c8a4d] text-2xl sm:text-3xl mb-3 sm:mb-4">
                    <i className={service.icon}></i>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Vehicles Section */}
        <section className="py-12 sm:py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">
              أسطولنا
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {vehicles.map((vehicle, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <img
                    src={vehicle.image}
                    alt={vehicle.type}
                    className="w-full h-40 sm:h-48 object-cover"
                  />
                  <div className="p-4 sm:p-6">
                    <h3 className="text-lg sm:text-xl font-bold mb-2">
                      {vehicle.type}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">
                      {vehicle.description}
                    </p>
                    <p className="text-[#0c8a4d] font-semibold mb-3 sm:mb-4 text-sm sm:text-base">
                      السعة: {vehicle.capacity}
                    </p>
                    <ul className="space-y-1 sm:space-y-2">
                      {vehicle.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="flex items-center text-gray-600 text-sm sm:text-base"
                        >
                          <i className="fas fa-check text-[#0c8a4d] ml-2"></i>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-12 sm:py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">
              مميزاتنا
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
              <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md">
                <div className="text-[#0c8a4d] text-2xl sm:text-3xl mb-3 sm:mb-4">
                  <i className="fas fa-shield-alt"></i>
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-2">
                  سائقين محترفين
                </h3>
                <p className="text-sm sm:text-base text-gray-600">
                  سائقين ذوي خبرة عالية ومعرفة جيدة بالطرق والمواقع المقدسة
                </p>
              </div>
              <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md">
                <div className="text-[#0c8a4d] text-2xl sm:text-3xl mb-3 sm:mb-4">
                  <i className="fas fa-clock"></i>
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-2">خدمة 24/7</h3>
                <p className="text-sm sm:text-base text-gray-600">
                  خدمة متواصلة على مدار الساعة لضمان راحة وسلامة ضيوفنا
                </p>
              </div>
              <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md">
                <div className="text-[#0c8a4d] text-2xl sm:text-3xl mb-3 sm:mb-4">
                  <i className="fas fa-hand-holding-usd"></i>
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-2">
                  أسعار تنافسية
                </h3>
                <p className="text-sm sm:text-base text-gray-600">
                  أسعار مناسبة مع ضمان أفضل جودة للخدمة
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 sm:py-16 bg-[#0c8a4d] text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">
              احجز خدمة النقل الآن
            </h2>
            <p className="text-lg sm:text-xl mb-6 sm:mb-8 px-4">
              نقدم أفضل خدمات النقل لضيوف الرحمن بأسعار مناسبة
            </p>
            <button className="bg-white text-[#0c8a4d] px-6 sm:px-8 py-2 sm:py-3 rounded-md hover:bg-gray-100 transition-colors duration-300 text-sm sm:text-base">
              تواصل معنا
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Transportation;
