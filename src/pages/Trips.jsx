import React from "react";

const Trips = () => {
  const trips = [
    {
      id: 1,
      name: "عمرة رمضان",
      duration: "15 يوم",
      price: "5000 ريال",
      image: "https://via.placeholder.com/300x200",
      description: "عمرة مميزة في شهر رمضان المبارك مع إقامة في فنادق فاخرة",
      features: ["إقامة فندقية", "مواصلات", "وجبات", "دليل سياحي"],
    },
    {
      id: 2,
      name: "عمرة العيد",
      duration: "10 أيام",
      price: "4000 ريال",
      image: "https://via.placeholder.com/300x200",
      description: "عمرة في أيام العيد مع برنامج متكامل للزيارة",
      features: ["إقامة فندقية", "مواصلات", "وجبات", "دليل سياحي"],
    },
    {
      id: 3,
      name: "عمرة اقتصادية",
      duration: "7 أيام",
      price: "3000 ريال",
      image: "https://via.placeholder.com/300x200",
      description: "عمرة اقتصادية مع خدمات أساسية",
      features: ["إقامة فندقية", "مواصلات", "دليل سياحي"],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">رحلات جو عمرة</h1>
          <p className="text-xl text-gray-600">اختر رحلة العمرة المناسبة لك</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trips.map((trip) => (
            <div key={trip.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <img
                src={trip.image}
                alt={trip.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">{trip.name}</h3>
                  <span className="bg-[#0c8a4d] text-white px-3 py-1 rounded-full text-sm">
                    {trip.duration}
                  </span>
                </div>
                <p className="text-gray-600 mb-4">{trip.description}</p>
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">المميزات:</h4>
                  <ul className="list-disc list-inside text-gray-600">
                    {trip.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[#0c8a4d] font-semibold">{trip.price}</span>
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

export default Trips;