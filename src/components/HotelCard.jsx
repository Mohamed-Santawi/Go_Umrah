import {
  FaStar,
  FaWifi,
  FaParking,
  FaSwimmingPool,
  FaUtensils,
} from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const HotelCard = ({ hotel }) => {
  const navigate = useNavigate();

  const handleDetailsClick = () => {
    navigate(`/hotel-details/${hotel.id}`);
  };

  const handleBookNowClick = () => {
    navigate(`/booking/${hotel.id}`);
  };

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="relative">
        <img
          src={hotel.image}
          alt={hotel.name}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-4 right-4 bg-[#0c8a4d] text-white px-3 py-1 rounded-full">
          {hotel.rating} <FaStar className="inline-block ml-1" />
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{hotel.name}</h3>
        <div className="flex items-center text-gray-600 mb-4">
          <MdLocationOn className="ml-1" />
          <span>{hotel.location}</span>
        </div>

        <div className="flex flex-wrap gap-4 mb-4">
          {hotel.amenities.map((amenity, index) => (
            <div key={index} className="flex items-center text-gray-600">
              {amenity.icon}
              <span className="mr-1">{amenity.name}</span>
            </div>
          ))}
        </div>

        <div className="flex justify-between items-center">
          <div>
            <span className="text-2xl font-bold text-[#0c8a4d]">
              {hotel.price}
            </span>
            <span className="text-gray-600 mr-1">/ ليلة</span>
          </div>
          <div className="flex gap-2">
            <button
              onClick={handleDetailsClick}
              className="px-4 py-2 text-[#0c8a4d] border border-[#0c8a4d] rounded-lg hover:bg-[#0c8a4d] hover:text-white transition-colors duration-300"
            >
              عرض التفاصيل
            </button>
            <button
              onClick={handleBookNowClick}
              className="px-4 py-2 bg-[#0c8a4d] text-white rounded-lg hover:bg-[#0a6e3d] transition-colors duration-300"
            >
              احجز الآن
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelCard;
