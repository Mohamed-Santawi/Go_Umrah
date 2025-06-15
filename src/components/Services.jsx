import hotelCard from "../assets/islamic/hotels-card.jpg";
import trips from "../assets/islamic/trips-card.jpg";
import visa from "../assets/islamic/visa-card.jpg";
import transportation from "../assets/islamic/transp.jpg";
import trip from "../assets/islamic/trip.jpg";
import store from "../assets/islamic/store-card.jpg";
import { Link } from "react-router-dom";
const Services = () => {
  const services = [
    {
      title: "رحلات جو عمرة",
      description:
        "باقات متنوعة لرحلات العمرة تناسب جميع الاحتياجات والميزانيات",
      link: "/trips",
      linkText: "عرض الرحلات",
      image: trips,
    },
    {
      title: "فنادق جو عمرة",
      description:
        "مجموعة متنوعة من الفنادق في مكة المكرمة والمدينة المنورة بأسعار تنافسية",
      link: "/makkah-hotels",
      linkText: "حجز فندق",
      image: hotelCard,
    },

    {
      title: "تأشيرات جو عمرة",
      description:
        "خدمة استخراج تأشيرات العمرة والزيارة بسهولة وسرعة لجميع الجنسيات",
      link: "/visa",
      linkText: "طلب تأشيرة",
      image: visa,
    },
    {
      title: "مواصلات جو عمرة",
      description: "خدمات نقل متميزة بين المطارات والفنادق والحرمين الشريفين",
      link: "/transportation",
      linkText: "حجز مواصلات",
      image: transportation,
    },
    {
      title: "مزارات جو عمرة",
      description:
        "جولات سياحية لزيارة أهم المزارات الإسلامية والتاريخية في مكة المكرمة والمدينة المنورة",
      link: "/trips",
      linkText: "عرض المزارات",
      image: trip,
    },
    {
      title: "متجر جو عمرة",
      description: "مستلزمات العمرة والهدايا بأسعار مناسبة وجودة عالية",
      link: "/store",
      linkText: "تسوق الآن",
      image: store,
    },
  ];

  return (
    <div className="bg-[#f9fafb] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className=" section-title font-bold text-center my-8 w-full text-4xl text-[#212529] relative inline-block">
            خدماتنا
            <span className="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 w-20 h-[3px] bg-[#0c8a4d]"></span>
          </h2>

          <p className="mt-4 text-xl text-gray-500">
            نقدم لكم مجموعة متكاملة من الخدمات لتسهيل رحلة العمرة
          </p>
        </div>

        <div className="mt-12 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="text-center cursor-pointer p-4 hover:-translate-y-1 hover:shadow-2xl rounded-[15px] overflow-hidden shadow-lg transition-all duration-300 ease-in-out h-full"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-64 object-cover rounded-lg"
              />
              <div>
                <h3 className="text-2xl font-bold text-[#0c8a4d] my-3">
                  {service.title}
                </h3>
                <p className="mt-2 text-[#6c757d] text-[17px] font-meduim ">
                  {service.description}
                </p>
              </div>
              <div className="my-8">
                <Link
                  to={service.link}
                  className="px-5 py-2 text-sm font-semibold bg-[#0c8a4d] text-white rounded-full transition-all duration-300 ease-in-out hover:bg-[#0a6e3d]"
                >
                  {service.linkText}
                  <span className="mr-2" aria-hidden="true">
                    &rarr;
                  </span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
