import React from "react";

const Transportation = () => {
  const services = [
    {
      id: 1,
      name: "سيارات فاخرة",
      description: "سيارات فاخرة مع سائق خاص للتنقل بين المشاعر المقدسة",
      image: "https://via.placeholder.com/300x200",
      price: "300 ريال/يوم",
      features: ["سائق محترف", "سيارات مكيفة", "خدمة 24/7"],
    },
    {
      id: 2,
      name: "باصات مكيفة",
      description: "باصات مكيفة ومريحة للتنقل الجماعي بين المشاعر المقدسة",
      image: "https://via.placeholder.com/300x200",
      price: "50 ريال/رحلة",
      features: ["مكيف", "مقاعد مريحة", "مواعيد منتظمة"],
    },
    {
      id: 3,
      name: "سيارات اقتصادية",
      description: "سيارات اقتصادية للتنقل الفردي أو العائلي",
      image: "https://via.placeholder.com/300x200",
      price: "150 ريال/يوم",
      features: ["اقتصادية", "سهلة القيادة", "متوفرة دائماً"],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">مواصلات جو عمرة</h1>
          <p className="text-xl text-gray-600">خدمات نقل مريحة وآمنة بين المشاعر المقدسة</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <img
                src={service.image}
                alt={service.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.name}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">المميزات:</h4>
                  <ul className="list-disc list-inside text-gray-600">
                    {service.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[#0c8a4d] font-semibold">{service.price}</span>
                  <button className="bg-[#0c8a4d] text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors duration-300">
                    احجز الآن
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Transportation;
