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
      name: "فنادق مكة المكرمة",
      location: "مكة المكرمة",
      rating: 4.8,
      image: makaHotels,
    },
    {
      id: 2,
      name: "فنادق المدينة المنورة",
      location: "المدينة المنورة",
      rating: 4.8,
      image: madinaHotels,
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
      <div className="min-h-screen bg-gray-50 pt-28 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2  gap-8">
          {hotels.map((hotel) => (
            <div
              key={hotel.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 p-3"
            >
              <img
                src={hotel.image}
                alt={hotel.name}
                className="w-full h-60 object-cover rounded-md"
              />
              <div className="p-6">
                <div className="flex justify-between items-start mb-8">
                  <h1 className="text-3xl font-semibold text-gray-900 text-center">
                    {hotel.name}
                  </h1>
                  <span className="bg-[#0c8a4d] text-white px-4 py-2 rounded-full text-sm">
                    {hotel.rating} ⭐
                  </span>
                </div>
                <div className="flex justify-center items-center w-full">
                  <Link
                    to={`${
                      hotel.name === "فنادق مكة المكرمة"
                        ? "/makkah-hotels"
                        : "/madina-hotels"
                    }`}
                    className="bg-[#0c8a4d] w-full max-w-[80%] mx-auto text-center text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors duration-300"
                  >
                    عرض الفنادق
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
