import React from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const ProductCard = ({
  image,
  title,
  description,
  price,
  originalPrice,
  rating,
  badge,
  badgeType = "bestseller", // bestseller, discount, new
}) => {
  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(<FaStar key={i} className="text-yellow-400" />);
      } else if (i === fullStars && hasHalfStar) {
        stars.push(<FaStarHalfAlt key={i} className="text-yellow-400" />);
      } else {
        stars.push(<FaRegStar key={i} className="text-yellow-400" />);
      }
    }

    return stars;
  };

  const getBadgeStyle = () => {
    switch (badgeType) {
      case "bestseller":
        return "bg-[#0c8a4d] text-white";
      case "discount":
        return "bg-red-500 text-white";
      case "new":
        return "bg-blue-500 text-white";
      default:
        return "bg-[#0c8a4d] text-white";
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="w-full h-48 sm:h-56 md:h-64 object-cover"
        />
        {badge && (
          <span
            className={`absolute top-2 right-2 px-3 py-1 rounded-full text-sm font-semibold ${getBadgeStyle()}`}
          >
            {badge}
          </span>
        )}
      </div>
      <div className="p-4">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
          <div className="flex">{renderStars(rating)}</div>
        </div>
        <p className="text-gray-600 text-sm mb-4">{description}</p>
        <div className="flex justify-between items-center">
          <div>
            {originalPrice ? (
              <div className="flex items-center gap-2">
                <span className="text-gray-500 line-through text-sm">
                  {originalPrice} ريال
                </span>
                <span className="text-[#0c8a4d] font-bold">{price} ريال</span>
              </div>
            ) : (
              <span className="text-[#0c8a4d] font-bold">{price} ريال</span>
            )}
          </div>
          <button className="bg-[#0c8a4d] text-white px-4 py-2 rounded-md hover:bg-[#0a6e3d] transition-colors duration-300">
            أضف إلى السلة
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
