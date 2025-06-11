import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HotelCard from "../components/HotelCard";
import { FaWifi, FaParking, FaSwimmingPool, FaUtensils } from "react-icons/fa";
import makkah1 from "../assets/hotels/makkah1.jpg";
import makkah2 from "../assets/hotels/makkah2.jpg";
import makkah3 from "../assets/hotels/makkah3.jpg";
import makkah4 from "../assets/hotels/makkah4.jpg";
import makkah5 from "../assets/hotels/makkah5.webp";
import makkah6 from "../assets/hotels/makkah6.jpg";

const MakkahHotels = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [priceRange, setPriceRange] = useState("all");

  const hotels = [
    {
      id: 1,
      name: "فندق مكة هيلتون",
      location: "مكة المكرمة - حي العزيزية",
      rating: 4.8,
      price: "1,200 ريال",
      image: makkah1,
      amenities: [
        { name: "واي فاي", icon: <FaWifi /> },
        { name: "موقف سيارات", icon: <FaParking /> },
        { name: "مسبح", icon: <FaSwimmingPool /> },
        { name: "مطعم", icon: <FaUtensils /> },
      ],
    },
    {
      id: 2,
      name: "فندق مكة روتانا",
      location: "مكة المكرمة - حي العزيزية",
      rating: 4.7,
      price: "1,500 ريال",
      image: makkah2,
      amenities: [
        { name: "واي فاي", icon: <FaWifi /> },
        { name: "موقف سيارات", icon: <FaParking /> },
        { name: "مسبح", icon: <FaSwimmingPool /> },
        { name: "مطعم", icon: <FaUtensils /> },
      ],
    },
    {
      id: 3,
      name: "فندق مكة شيراتون",
      location: "مكة المكرمة - حي العزيزية",
      rating: 4.6,
      price: "1,800 ريال",
      image: makkah3,
      amenities: [
        { name: "واي فاي", icon: <FaWifi /> },
        { name: "موقف سيارات", icon: <FaParking /> },
        { name: "مسبح", icon: <FaSwimmingPool /> },
        { name: "مطعم", icon: <FaUtensils /> },
      ],
    },
    {
      id: 4,
      name: "فندق مكة ماريوت",
      location: "مكة المكرمة - حي العزيزية",
      rating: 4.9,
      price: "2,000 ريال",
      image: makkah4,
      amenities: [
        { name: "واي فاي", icon: <FaWifi /> },
        { name: "موقف سيارات", icon: <FaParking /> },
        { name: "مسبح", icon: <FaSwimmingPool /> },
        { name: "مطعم", icon: <FaUtensils /> },
      ],
    },
    {
      id: 5,
      name: "فندق مكة ميلينيوم",
      location: "مكة المكرمة - حي العزيزية",
      rating: 4.8,
      price: "2,500 ريال",
      image: makkah5,
      amenities: [
        { name: "واي فاي", icon: <FaWifi /> },
        { name: "موقف سيارات", icon: <FaParking /> },
        { name: "مسبح", icon: <FaSwimmingPool /> },
        { name: "مطعم", icon: <FaUtensils /> },
      ],
    },
    {
      id: 6,
      name: "فندق مكةابراج الكسوة",
      location: "مكة المكرمة - حي العزيزية",
      rating: 4.9,
      price: "3,000 ريال",
      image: makkah6,
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
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-12">
          فنادق مكة المكرمة
        </h1>

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

export default MakkahHotels;
