import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const DataDeletion = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    reason: "",
    additionalInfo: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [isFacebookRequest, setIsFacebookRequest] = useState(false);

  useEffect(() => {
    // Check if this is a Facebook data deletion request
    const urlParams = new URLSearchParams(window.location.search);
    const fbId = urlParams.get("fb_user_id");
    if (fbId) {
      setIsFacebookRequest(true);
    }
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Here you would typically send this data to your backend
    // For now, we'll just show the success message
    setSubmitted(true);
  };

  if (isFacebookRequest) {
    return (
      <div className="min-h-screen bg-gray-50 pt-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto py-12">
          <div className="bg-white shadow rounded-lg p-8">
            <h1 className="text-2xl font-bold text-gray-900 mb-6">
              Facebook Data Deletion Request
            </h1>
            <p className="text-gray-600 mb-4">
              To request deletion of your data from Go Umrah, please follow
              these steps:
            </p>
            <ol className="list-decimal list-inside text-gray-600 space-y-2 mb-6">
              <li>Send an email to privacy@go-umrah.com</li>
              <li>
                Include "Facebook Data Deletion Request" in the subject line
              </li>
              <li>Provide your Facebook User ID in the email</li>
              <li>We will process your request within 30 days</li>
            </ol>
            <p className="text-gray-600">
              For more information about our data deletion process, please visit
              our{" "}
              <a
                href="/privacy-policy"
                className="text-[#0c8a4d] hover:underline"
              >
                Privacy Policy
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-50 pt-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto py-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">
            طلب حذف البيانات
          </h1>

          {submitted ? (
            <div className="bg-green-50 border border-green-200 text-green-600 px-4 py-3 rounded-lg">
              <p className="font-medium">تم استلام طلبك بنجاح</p>
              <p className="mt-2">
                سنقوم بمراجعة طلبك والرد عليك خلال 30 يوم عمل. سيتم إرسال تأكيد
                إلى بريدك الإلكتروني.
              </p>
            </div>
          ) : (
            <div className="bg-white shadow rounded-lg p-8">
              <div className="mb-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">
                  معلومات مهمة
                </h2>
                <p className="text-gray-600">
                  عند تقديم طلب حذف البيانات، يرجى ملاحظة ما يلي:
                </p>
                <ul className="list-disc list-inside text-gray-600 mt-2 space-y-2">
                  <li>سيتم حذف جميع بياناتك الشخصية من أنظمتنا</li>
                  <li>قد يستغرق الحذف الكامل حتى 30 يوم عمل</li>
                  <li>قد نحتفظ ببعض البيانات لأغراض قانونية أو تنظيمية</li>
                  <li>
                    سيتم إرسال تأكيد بالبريد الإلكتروني عند اكتمال عملية الحذف
                  </li>
                </ul>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="fullName"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    الاسم الكامل
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#0c8a4d] focus:border-transparent"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    البريد الإلكتروني
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#0c8a4d] focus:border-transparent"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    رقم الهاتف
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#0c8a4d] focus:border-transparent"
                  />
                </div>

                <div>
                  <label
                    htmlFor="reason"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    سبب طلب الحذف
                  </label>
                  <select
                    id="reason"
                    name="reason"
                    required
                    value={formData.reason}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#0c8a4d] focus:border-transparent"
                  >
                    <option value="">اختر السبب</option>
                    <option value="privacy">مخاوف الخصوصية</option>
                    <option value="no_longer_use">لم أعد أستخدم الخدمة</option>
                    <option value="data_accuracy">دقة البيانات</option>
                    <option value="other">سبب آخر</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="additionalInfo"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    معلومات إضافية
                  </label>
                  <textarea
                    id="additionalInfo"
                    name="additionalInfo"
                    rows="4"
                    value={formData.additionalInfo}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#0c8a4d] focus:border-transparent"
                  />
                </div>

                <div>
                  <button
                    type="submit"
                    className="w-full bg-[#0c8a4d] text-white py-2 px-4 rounded-md hover:bg-green-700 transition-colors duration-300"
                  >
                    تقديم طلب الحذف
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default DataDeletion;

//  https://your-domain.com/data-deletion
