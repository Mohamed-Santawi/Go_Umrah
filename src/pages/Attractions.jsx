import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import attractionHero from "../assets/islamic/attractions_hero.jpg";
const Attractions = () => {
  const attractions = [
    {
      id: 1,
      name: "المسجد الحرام",
      location: "مكة المكرمة",
      description: "أعظم مسجد في الإسلام، ويقع في قلب مكة المكرمة",
      image: "https://via.placeholder.com/300x200",
      category: "مساجد",
    },
    {
      id: 2,
      name: "المسجد النبوي",
      location: "المدينة المنورة",
      description: "ثاني أقدس مسجد في الإسلام، وثاني أكبر مسجد في العالم",
      image: "https://via.placeholder.com/300x200",
      category: "مساجد",
    },
    {
      id: 3,
      name: "جبل عرفة",
      location: "مكة المكرمة",
      description: "جبل عرفة هو أهم مشاعر الحج، حيث يقف الحجاج في يوم عرفة",
      image: "https://via.placeholder.com/300x200",
      category: "معالم تاريخية",
    },
  ];

  return (
    <>
      <Header />
      <Hero
        title={"مزارات جو عمرة"}
        description={
          "استكشف أهم المزارات الإسلامية والتاريخية في مكة المكرمة والمدينة المنورة"
        }
        image={attractionHero}
      />
      <div className="min-h-screen bg-gray-50 pt-24 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {attractions.map((attraction) => (
            <div
              key={attraction.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <img
                src={attraction.image}
                alt={attraction.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {attraction.name}
                  </h3>
                  <span className="bg-[#0c8a4d] text-white px-3 py-1 rounded-full text-sm">
                    {attraction.category}
                  </span>
                </div>
                <p className="text-gray-600 mb-4">{attraction.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-gray-500">{attraction.location}</span>
                  <button className="bg-[#0c8a4d] text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors duration-300">
                    اقرأ المزيد
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Attractions;
