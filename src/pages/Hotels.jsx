import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import hotelsHero from "../assets/islamic/hotels_hero.jpg";
import makaHotels from "../assets/islamic/makkah_hotels.jpg";
import madinaHotels from "../assets/islamic/madinah_hotels.jpg";
import Hero from "../components/Hero";
import { Link } from "react-router-dom";
const Hotels = () => {
  const hotels = [
    {
      id: 1,
      name: "فندق مكة المكرمة",
      location: "مكة المكرمة",
      rating: 4.5,
      price: "500 ريال",
      image: makaHotels,
      description: "فندق فاخر يقع على بعد 5 دقائق من المسجد الحرام",
    },
    {
      id: 2,
      name: "فندق المدينة المنورة",
      location: "المدينة المنورة",
      rating: 4.8,
      price: "600 ريال",
      image: madinaHotels,
      description: "فندق متميز بالقرب من المسجد النبوي",
    },
    // Add more hotels as needed
  ];

  return (
    <>
      <Header />
      <Hero
        title="فنادق جو عمرة"
        description="أفضل الفنادق في مكة المكرمة والمدينة المنورة بأسعار تنافسية"
        image={hotelsHero}
      />
      <div className="min-h-screen bg-gray-50 pt-24 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {hotels.map((hotel) => (
            <div
              key={hotel.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 p-3"
            >
              <img
                src={hotel.image}
                alt={hotel.name}
                className="w-full h-48 object-cover rounded-md"
              />
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {hotel.name}
                  </h3>
                  <span className="bg-[#0c8a4d] text-white px-3 py-1 rounded-full text-sm">
                    {hotel.rating} ⭐
                  </span>
                </div>
                <p className="text-gray-600 mb-4">{hotel.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-[#0c8a4d] font-semibold">
                    {hotel.price}
                  </span>
                  <Link
                    to="/cart"
                    className="bg-[#0c8a4d] text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors duration-300"
                  >
                    احجز الآن
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Hotels;
