import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import { Link } from "react-router-dom";
import visa1 from "../assets/visas/visa1.jpg";
import {
  FaPassport,
  FaImage,
  FaPlaneDeparture,
  FaHotel,
  FaCheckCircle,
  FaInfoCircle,
} from "react-icons/fa";
import VisaData from "../components/VisaData";

const VisaApply = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="mt-10">
        <Hero
          title="تفاصيل تأشيرة العمرة الإلكترونية"
          description="معلومات شاملة عن تأشيرة العمرة الإلكترونية وكيفية الحصول عليها"
          image={visa1}
          isLink={false}
        />
      </div>

      {/* Detailed Information Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            {/* Overview Card */}
            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                نظرة عامة على تأشيرة العمرة الإلكترونية
              </h2>
              <div className="space-y-4">
                <p className="text-gray-600">
                  تأشيرة العمرة الإلكترونية هي تأشيرة رسمية تصدر من وزارة
                  الخارجية السعودية، وتتيح لحاملها دخول المملكة العربية السعودية
                  بغرض أداء مناسك العمرة وزيارة المسجد النبوي الشريف.
                </p>
                <p className="text-gray-600">
                  تم إطلاق نظام التأشيرة الإلكترونية في عام 2019 كجزء من رؤية
                  المملكة 2030 لتسهيل إجراءات الحصول على تأشيرة العمرة وتقليل
                  الوقت والجهد المطلوبين للحصول عليها.
                </p>

                <h4 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
                  خصائص تأشيرة العمرة الإلكترونية:
                </h4>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>صالحة لمدة 90 يوماً من تاريخ الإصدار</li>
                  <li>تسمح بإقامة تصل إلى 30 يوماً في المملكة</li>
                  <li>تسمح بدخول متعدد خلال فترة صلاحيتها</li>
                  <li>تشمل تأمين طبي أساسي</li>
                  <li>
                    يمكن التقديم عليها مباشرة عبر الإنترنت دون الحاجة لزيارة
                    السفارة أو القنصلية
                  </li>
                  <li>يتم إصدارها خلال 24-48 ساعة في معظم الحالات</li>
                </ul>

                <h4 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
                  من يمكنه التقديم على تأشيرة العمرة الإلكترونية؟
                </h4>
                <p className="text-gray-600">
                  يمكن لمواطني معظم دول العالم التقديم على تأشيرة العمرة
                  الإلكترونية، باستثناء بعض الدول التي تتطلب إجراءات خاصة. يجب
                  على المتقدمين استيفاء الشروط والمتطلبات المذكورة أدناه.
                </p>
              </div>
            </div>

            {/* Requirements Card */}
            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                متطلبات الحصول على تأشيرة العمرة
              </h2>
              <div className="space-y-6">
                <h4 className="text-xl font-semibold text-gray-900">
                  المستندات المطلوبة:
                </h4>

                <div className="flex items-start space-x-4 rtl:space-x-reverse">
                  <div className="text-[#0c8a4d] mt-1">
                    <FaPassport className="text-2xl" />
                  </div>
                  <div>
                    <h5 className="text-lg font-semibold text-gray-900">
                      جواز سفر ساري المفعول
                    </h5>
                    <p className="text-gray-600">
                      يجب أن يكون جواز السفر ساري المفعول لمدة لا تقل عن 6 أشهر
                      من تاريخ الدخول المتوقع للمملكة، وأن يحتوي على صفحتين
                      فارغتين على الأقل.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 rtl:space-x-reverse">
                  <div className="text-[#0c8a4d] mt-1">
                    <FaImage className="text-2xl" />
                  </div>
                  <div>
                    <h5 className="text-lg font-semibold text-gray-900">
                      صورة شخصية
                    </h5>
                    <p className="text-gray-600">
                      صورة شخصية حديثة بخلفية بيضاء، مقاس 4×6 سم، ويجب أن تكون
                      الصورة ملونة وواضحة وبدون نظارات شمسية.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 rtl:space-x-reverse">
                  <div className="text-[#0c8a4d] mt-1">
                    <FaPlaneDeparture className="text-2xl" />
                  </div>
                  <div>
                    <h5 className="text-lg font-semibold text-gray-900">
                      تذاكر الطيران
                    </h5>
                    <p className="text-gray-600">
                      تأكيد حجز تذاكر الطيران ذهاباً وإياباً، أو تأكيد حجز وسيلة
                      النقل المستخدمة للدخول والخروج من المملكة.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 rtl:space-x-reverse">
                  <div className="text-[#0c8a4d] mt-1">
                    <FaHotel className="text-2xl" />
                  </div>
                  <div>
                    <h5 className="text-lg font-semibold text-gray-900">
                      حجز الفندق
                    </h5>
                    <p className="text-gray-600">
                      تأكيد حجز الإقامة في المملكة خلال فترة العمرة، سواء كان
                      فندقاً أو شقة مفروشة أو سكناً خاصاً.
                    </p>
                  </div>
                </div>

                <h4 className="text-xl font-semibold text-gray-900 mt-8 mb-4">
                  الشروط العامة:
                </h4>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>
                    أن يكون المتقدم من مواطني الدول المؤهلة للحصول على تأشيرة
                    العمرة الإلكترونية
                  </li>
                  <li>
                    أن يكون الغرض من الزيارة هو أداء العمرة أو زيارة المسجد
                    النبوي الشريف
                  </li>
                  <li>أن يكون لديه تأمين صحي يغطي فترة الإقامة في المملكة</li>
                  <li>أن يكون لديه وسيلة دفع إلكترونية لسداد رسوم التأشيرة</li>
                  <li>ألا يكون ممنوعاً من دخول المملكة لأي سبب من الأسباب</li>
                </ul>
              </div>
            </div>

            {/* Application Steps Card */}
            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">
                خطوات التقديم على تأشيرة العمرة
              </h2>
              <div className="space-y-10">
                <div className="relative pl-8 border-r-2 border-[#0c8a4d] rtl:border-l-2 rtl:border-r-0 rtl:pl-0 rtl:pr-8">
                  <div className="absolute w-4 h-4 bg-[#0c8a4d] rounded-full -right-[9px] top-0 rtl:right-auto rtl:-left-[9px]"></div>
                  <div className="pr-4">
                    <h4 className="text-lg font-semibold text-gray-900">
                      إنشاء حساب
                    </h4>
                    <p className="text-gray-600 mt-2">
                      قم بإنشاء حساب على منصة جو عمرة وتسجيل بياناتك الشخصية.
                    </p>
                  </div>
                </div>

                <div className="relative pl-8 border-r-2 border-[#0c8a4d] rtl:border-l-2 rtl:border-r-0 rtl:pl-0 rtl:pr-8">
                  <div className="absolute w-4 h-4 bg-[#0c8a4d] rounded-full -right-[9px] top-0 rtl:right-auto rtl:-left-[9px]"></div>
                  <div className="pr-4">
                    <h4 className="text-lg font-semibold text-gray-900">
                      اختيار نوع التأشيرة
                    </h4>
                    <p className="text-gray-600 mt-2">
                      اختر تأشيرة العمرة الإلكترونية من قائمة أنواع التأشيرات
                      المتاحة.
                    </p>
                  </div>
                </div>

                <div className="relative pl-8 border-r-2 border-[#0c8a4d] rtl:border-l-2 rtl:border-r-0 rtl:pl-0 rtl:pr-8">
                  <div className="absolute w-4 h-4 bg-[#0c8a4d] rounded-full -right-[9px] top-0 rtl:right-auto rtl:-left-[9px]"></div>
                  <div className="pr-4">
                    <h4 className="text-lg font-semibold text-gray-900">
                      تعبئة النموذج
                    </h4>
                    <p className="text-gray-600 mt-2">
                      قم بتعبئة نموذج طلب التأشيرة بدقة وتأكد من صحة جميع
                      البيانات المدخلة.
                    </p>
                  </div>
                </div>

                <div className="relative pl-8 border-r-2 border-[#0c8a4d] rtl:border-l-2 rtl:border-r-0 rtl:pl-0 rtl:pr-8">
                  <div className="absolute w-4 h-4 bg-[#0c8a4d] rounded-full -right-[9px] top-0 rtl:right-auto rtl:-left-[9px]"></div>
                  <div className="pr-4">
                    <h4 className="text-lg font-semibold text-gray-900">
                      تحميل المستندات
                    </h4>
                    <p className="text-gray-600 mt-2">
                      قم بتحميل المستندات المطلوبة (صورة جواز السفر، الصورة
                      الشخصية، تأكيد حجز تذاكر الطيران، تأكيد حجز الفندق).
                    </p>
                  </div>
                </div>

                <div className="relative pl-8 border-r-2 border-[#0c8a4d] rtl:border-l-2 rtl:border-r-0 rtl:pl-0 rtl:pr-8">
                  <div className="absolute w-4 h-4 bg-[#0c8a4d] rounded-full -right-[9px] top-0 rtl:right-auto rtl:-left-[9px]"></div>
                  <div className="pr-4">
                    <h4 className="text-lg font-semibold text-gray-900">
                      دفع الرسوم
                    </h4>
                    <p className="text-gray-600 mt-2">
                      قم بدفع رسوم التأشيرة عبر وسائل الدفع الإلكتروني المتاحة
                      (بطاقة ائتمانية، محفظة إلكترونية، تحويل بنكي).
                    </p>
                  </div>
                </div>

                <div className="relative pl-8 border-r-2 border-[#0c8a4d] rtl:border-l-2 rtl:border-r-0 rtl:pl-0 rtl:pr-8">
                  <div className="absolute w-4 h-4 bg-[#0c8a4d] rounded-full -right-[9px] top-0 rtl:right-auto rtl:-left-[9px]"></div>
                  <div className="pr-4">
                    <h4 className="text-lg font-semibold text-gray-900">
                      استلام التأشيرة
                    </h4>
                    <p className="text-gray-600 mt-2">
                      بعد الموافقة على الطلب، ستتلقى التأشيرة عبر البريد
                      الإلكتروني خلال 24-48 ساعة في معظم الحالات.
                    </p>
                  </div>
                </div>

                <div className="text-center mt-12">
                  <Link
                    to="/visa-application"
                    className="inline-block bg-[#0c8a4d] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#0a6e3d] transition-colors duration-300"
                  >
                    تقديم طلب تأشيرة العمرة
                  </Link>
                </div>
              </div>
            </div>

            {/* Pricing Card */}
            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">
                أسعار تأشيرة العمرة
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="border rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-semibold text-gray-900">
                      تأشيرة العمرة الفردية
                    </h3>
                    <p className="text-gray-600">للأفراد</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#0c8a4d] mb-6">
                      300 ريال
                    </div>
                    <VisaData />
                    <Link
                      to="/visa-application"
                      className="inline-block w-full bg-[#0c8a4d] text-white px-4 py-2 rounded-lg font-semibold hover:bg-[#0a6e3d] transition-colors duration-300"
                    >
                      طلب التأشيرة
                    </Link>
                  </div>
                </div>

                <div className="border rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-semibold text-gray-900">
                      تأشيرة العمرة العائلية
                    </h3>
                    <p className="text-gray-600">للعائلات</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#0c8a4d] mb-6">
                      300 ريال
                    </div>
                    <VisaData />
                    <Link
                      to="/visa-application"
                      className="inline-block w-full bg-[#0c8a4d] text-white px-4 py-2 rounded-lg font-semibold hover:bg-[#0a6e3d] transition-colors duration-300"
                    >
                      طلب التأشيرة
                    </Link>
                  </div>
                </div>

                <div className="border rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-semibold text-gray-900">
                      تأشيرة العمرة للمجموعات
                    </h3>
                    <p className="text-gray-600">للمجموعات</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#0c8a4d] mb-6">
                      300 ريال
                    </div>
                    <VisaData />
                    <Link
                      to="/visa-application"
                      className="inline-block w-full bg-[#0c8a4d] text-white px-4 py-2 rounded-lg font-semibold hover:bg-[#0a6e3d] transition-colors duration-300"
                    >
                      طلب التأشيرة
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ Card */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                الأسئلة الشائعة
              </h2>
              <div className="space-y-6">
                <div className="border-b pb-4">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    ما هي مدة صلاحية تأشيرة العمرة الإلكترونية؟
                  </h4>
                  <p className="text-gray-600">
                    تأشيرة العمرة الإلكترونية صالحة لمدة 90 يوماً من تاريخ
                    إصدارها، وتسمح بإقامة تصل إلى 30 يوماً في المملكة.
                  </p>
                </div>

                <div className="border-b pb-4">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    هل يمكنني زيارة مدن أخرى غير مكة المكرمة والمدينة المنورة
                    بتأشيرة العمرة؟
                  </h4>
                  <p className="text-gray-600">
                    نعم، يمكنك زيارة جميع مدن المملكة المفتوحة للسياحة بتأشيرة
                    العمرة الإلكترونية.
                  </p>
                </div>

                <div className="border-b pb-4">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    هل يمكنني تمديد تأشيرة العمرة الإلكترونية؟
                  </h4>
                  <p className="text-gray-600">
                    نعم، يمكن تمديد تأشيرة العمرة الإلكترونية لفترة إضافية من
                    داخل المملكة عبر منصة أبشر أو مكاتب الجوازات.
                  </p>
                </div>

                <div className="border-b pb-4">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    هل يمكنني التقديم على تأشيرة العمرة الإلكترونية بنفسي؟
                  </h4>
                  <p className="text-gray-600">
                    نعم، يمكنك التقديم على تأشيرة العمرة الإلكترونية بنفسك عبر
                    منصة جو عمرة أو عبر وكالات العمرة المعتمدة.
                  </p>
                </div>

                <div className="border-b pb-4">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    ما هي المدة المطلوبة للحصول على تأشيرة العمرة الإلكترونية؟
                  </h4>
                  <p className="text-gray-600">
                    عادة ما يتم إصدار تأشيرة العمرة الإلكترونية خلال 24-48 ساعة
                    من تقديم الطلب واستيفاء جميع المتطلبات.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    هل يمكنني أداء العمرة في موسم الحج بتأشيرة العمرة
                    الإلكترونية؟
                  </h4>
                  <p className="text-gray-600">
                    لا، لا يمكن استخدام تأشيرة العمرة الإلكترونية لدخول المملكة
                    خلال موسم الحج. يجب الحصول على تأشيرة حج خاصة لأداء مناسك
                    الحج.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#0c8a4d]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              هل أنت مستعد للحصول على تأشيرة العمرة الإلكترونية؟
            </h2>
            <p className="text-xl text-white mb-8">
              قدم طلبك الآن واحصل على تأشيرة العمرة بكل سهولة ويسر.
            </p>
            <Link
              to="/visa-application"
              className="inline-block bg-white text-[#0c8a4d] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
            >
              طلب التأشيرة الآن
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default VisaApply;
