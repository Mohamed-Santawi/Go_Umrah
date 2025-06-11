import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HotelCard from "../components/HotelCard";
import { FaWifi, FaParking, FaSwimmingPool, FaUtensils } from "react-icons/fa";
import { Link } from "react-router-dom";
import {
  FaStar,
  FaMapMarkerAlt,
  FaSpa,
  FaDumbbell,
  FaConciergeBell,
  FaBusAlt,
} from "react-icons/fa";
import madinah1 from "../assets/hotels/madinah1.avif";
import madinah2 from "../assets/hotels/madinah2.jpg";
import madinah3 from "../assets/hotels/madinah3.jpg";
import madinah4 from "../assets/hotels/madinah4.jpg";
import madinah5 from "../assets/hotels/madinah5.avif";
import madinah6 from "../assets/hotels/madinah6.jpg";

const MadinahHotels = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [priceRange, setPriceRange] = useState("all");
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
  const hotels = [
    {
      id: 1,
      name: "فندق المدينة هيلتون",
      location: "المدينة المنورة - حي العوالي",
      rating: 4.8,
      price: "1,100 ريال",
      image: madinah1,
      amenities: [
        { name: "واي فاي", icon: <FaWifi /> },
        { name: "موقف سيارات", icon: <FaParking /> },
        { name: "مسبح", icon: <FaSwimmingPool /> },
        { name: "مطعم", icon: <FaUtensils /> },
      ],
    },
    {
      id: 2,
      name: "فندق المدينة روتانا",
      location: "المدينة المنورة - حي العوالي",
      rating: 4.7,
      price: "1,400 ريال",
      image: madinah2,
      amenities: [
        { name: "واي فاي", icon: <FaWifi /> },
        { name: "موقف سيارات", icon: <FaParking /> },
        { name: "مسبح", icon: <FaSwimmingPool /> },
        { name: "مطعم", icon: <FaUtensils /> },
      ],
    },
    {
      id: 3,
      name: "فندق المدينة انتركونتينتال",
      location: "المدينة المنورة - حي العوالي",
      rating: 4.6,
      price: "1,700 ريال",
      image: madinah3,
      amenities: [
        { name: "واي فاي", icon: <FaWifi /> },
        { name: "موقف سيارات", icon: <FaParking /> },
        { name: "مسبح", icon: <FaSwimmingPool /> },
        { name: "مطعم", icon: <FaUtensils /> },
      ],
    },
    {
      id: 4,
      name: "فندق المدينة ماريوت",
      location: "المدينة المنورة - حي العوالي",
      rating: 4.9,
      price: "1,900 ريال",
      image: madinah4,
      amenities: [
        { name: "واي فاي", icon: <FaWifi /> },
        { name: "موقف سيارات", icon: <FaParking /> },
        { name: "مسبح", icon: <FaSwimmingPool /> },
        { name: "مطعم", icon: <FaUtensils /> },
      ],
    },
    {
      id: 5,
      name: "فندق المدينة موفنبيك",
      location: "المدينة المنورة - حي العوالي",
      rating: 4.8,
      price: "2,400 ريال",
      image: madinah5,
      amenities: [
        { name: "واي فاي", icon: <FaWifi /> },
        { name: "موقف سيارات", icon: <FaParking /> },
        { name: "مسبح", icon: <FaSwimmingPool /> },
        { name: "مطعم", icon: <FaUtensils /> },
      ],
    },
    {
      id: 6,
      name: "فندق المدينة دار التقوي",
      location: "المدينة المنورة - حي العوالي",
      rating: 4.9,
      price: "2,800 ريال",
      image: madinah6,
      amenities: [
        { name: "واي فاي", icon: <FaWifi /> },
        { name: "موقف سيارات", icon: <FaParking /> },
        { name: "مسبح", icon: <FaSwimmingPool /> },
        { name: "مطعم", icon: <FaUtensils /> },
      ],
    },
  ];

  const filteredHotels = hotels.filter((hotel) => {
    const matchesSearch =
      hotel.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      hotel.location.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesPrice =
      priceRange === "all"
        ? true
        : priceRange === "low"
        ? parseInt(hotel.price) <= 1500
        : priceRange === "medium"
        ? parseInt(hotel.price) > 1500 && parseInt(hotel.price) <= 2500
        : parseInt(hotel.price) > 2500;

    return matchesSearch && matchesPrice;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 mt-12">
        <div className="flex justify-between items-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900">
            فنادق المدينة المنورة
          </h1>
          <Link
            to="/makkah-hotels"
            className="inline-flex items-center px-6 py-3 bg-[#0c8a4d] text-white rounded-lg hover:bg-[#0a6e3d] transition-colors duration-300 shadow-md hover:shadow-lg"
          >
            <span className="ml-2">فنادق مكة المكرمة</span>
            <FaMapMarkerAlt className="text-xl" />
          </Link>
        </div>

        {/* Search Section */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <input
                type="text"
                placeholder="ابحث عن فندق..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0c8a4d] focus:border-transparent"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div>
              <select
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0c8a4d] focus:border-transparent"
                value={priceRange}
                onChange={(e) => setPriceRange(e.target.value)}
              >
                <option value="all">جميع الأسعار</option>
                <option value="low">اقتصادي (حتى 1500 ريال)</option>
                <option value="medium">متوسط (1500 - 2500 ريال)</option>
                <option value="high">فاخر (أكثر من 2500 ريال)</option>
              </select>
            </div>
          </div>
        </div>

        {/* Amenities Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            خدمات الفنادق
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {amenities.map((amenity, index) => (
              <div
                key={index}
                className="text-center p-6 bg-white rounded-lg hover:shadow-lg transition-shadow border border-gray-100"
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

        {/* Hotels Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredHotels.map((hotel) => (
            <HotelCard key={hotel.id} hotel={hotel} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MadinahHotels;
