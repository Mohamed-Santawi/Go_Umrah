import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import tripsHero from "../assets/islamic/trips_hero.jpg";
import Hero from "../components/Hero";
import trip from "../assets/islamic/trip.jpg";
import transitTrip from "../assets/islamic/transit_trip.jpg";
import tripNew from "../assets/islamic/tripNew.jpg";
const Trips = () => {
  const trips = [
    {
      id: 1,
      name: "عمرة رمضان",
      duration: "15 يوم",
      price: "5000 ريال",
      image: trip,
      description: "عمرة في شهر رمضان مع إقامة في فنادق فاخرة",
      features: ["إقامة فندقية", "مواصلات", "وجبات", "دليل سياحي"],
    },
    {
      id: 2,
      name: "عمرة العيد",
      duration: "10 أيام",
      price: "4000 ريال",
      image: transitTrip,
      description: "عمرة في أيام العيد مع برنامج متكامل للزيارة",
      features: ["إقامة فندقية", "مواصلات", "وجبات", "دليل سياحي"],
    },
    {
      id: 3,
      name: "عمرة اقتصادية",
      duration: "7 أيام",
      price: "3000 ريال",
      image: tripNew,
      description: "عمرة اقتصادية مع خدمات أساسية",
      features: ["إقامة فندقية", "مواصلات", "دليل سياحي"],
    },
  ];

  return (
    <>
      <Header />
      <Hero
        title="العمرات السياحية"
        description="افضل العمرات السياحية في مكة المكرمة والمدينة المنورة"
        image={tripsHero}
      />
      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trips.map((trip) => (
            <div
              key={trip.id}
              className="p-3 bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <img
                src={trip.image}
                alt={trip.name}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {trip.name}
                  </h3>
                  <span className="bg-[#0c8a4d] text-white px-3 py-1 rounded-full text-sm">
                    {trip.duration}
                  </span>
                </div>
                <p className="text-gray-600 mb-4">{trip.description}</p>
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    المميزات:
                  </h4>
                  <ul className="list-disc list-inside text-gray-600">
                    {trip.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[#0c8a4d] font-semibold">
                    {trip.price}
                  </span>
                  <Link to="/payment" className="cursor-pointer hover:bg-green-800 bg-[#0c8a4d] text-white px-4 py-2 rounded-md transition-colors duration-300">
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

export default Trips;
