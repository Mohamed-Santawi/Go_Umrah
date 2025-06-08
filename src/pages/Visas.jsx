import React from "react";

const Visas = () => {
  const visaServices = [
    {
      id: 1,
      name: "تأشيرة عمرة",
      duration: "30 يوم",
      price: "500 ريال",
      processingTime: "3-5 أيام",
      requirements: ["جواز سفر ساري", "صور شخصية", "إثبات إقامة", "حجز فندقي"],
    },
    {
      id: 2,
      name: "تأشيرة حج",
      duration: "45 يوم",
      price: "1000 ريال",
      processingTime: "5-7 أيام",
      requirements: [
        "جواز سفر ساري",
        "صور شخصية",
        "إثبات إقامة",
        "حجز فندقي",
        "شهادة صحية",
      ],
    },
    {
      id: 3,
      name: "تأشيرة زيارة",
      duration: "90 يوم",
      price: "800 ريال",
      processingTime: "7-10 أيام",
      requirements: ["جواز سفر ساري", "صور شخصية", "إثبات إقامة", "دعوة رسمية"],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            تأشيرات جو عمرة
          </h1>
          <p className="text-xl text-gray-600">خدمات تأشيرات سريعة وموثوقة</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visaServices.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {service.name}
                  </h3>
                  <span className="bg-[#0c8a4d] text-white px-3 py-1 rounded-full text-sm">
                    {service.duration}
                  </span>
                </div>

                <div className="mb-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-600">مدة المعالجة:</span>
                    <span className="font-semibold text-gray-900">
                      {service.processingTime}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">السعر:</span>
                    <span className="text-[#0c8a4d] font-semibold">
                      {service.price}
                    </span>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    المتطلبات:
                  </h4>
                  <ul className="list-disc list-inside text-gray-600">
                    {service.requirements.map((requirement, index) => (
                      <li key={index}>{requirement}</li>
                    ))}
                  </ul>
                </div>

                <button className="w-full bg-[#0c8a4d] text-white py-2 px-4 rounded-md hover:bg-green-700 transition-colors duration-300">
                  تقدم بطلب التأشيرة
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            معلومات إضافية
          </h2>
          <div className="prose max-w-none">
            <p className="text-gray-600 mb-4">
              نحن نقدم خدمات تأشيرات سريعة وموثوقة لجميع أنواع التأشيرات. فريقنا
              من الخبراء سيساعدك في الحصول على التأشيرة المناسبة لاحتياجاتك.
            </p>
            <p className="text-gray-600">
              للحصول على مزيد من المعلومات أو المساعدة، يرجى التواصل معنا عبر
              صفحة
              <a
                href="/contact"
                className="text-[#0c8a4d] hover:text-green-700"
              >
                {" "}
                تواصل معنا
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Visas;
