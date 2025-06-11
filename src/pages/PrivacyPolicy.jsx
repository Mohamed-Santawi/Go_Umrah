import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const PrivacyPolicy = () => {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-50 pt-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto py-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">
            سياسة الخصوصية
          </h1>

          <div className="bg-white shadow rounded-lg p-8 space-y-6">
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                مقدمة
              </h2>
              <p className="text-gray-600">
                نحن في منصة جو عمرة نلتزم بحماية خصوصية مستخدمينا. توضح سياسة
                الخصوصية هذه كيفية جمع واستخدام وحماية معلوماتك الشخصية.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                المعلومات التي نجمعها
              </h2>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>معلومات الحساب (الاسم، البريد الإلكتروني، رقم الهاتف)</li>
                <li>معلومات الحجز والخدمات</li>
                <li>معلومات الدفع</li>
                <li>بيانات التصفح والاستخدام</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                كيف نستخدم معلوماتك
              </h2>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>توفير وإدارة خدماتنا</li>
                <li>معالجة الحجوزات والمدفوعات</li>
                <li>تحسين تجربة المستخدم</li>
                <li>إرسال تحديثات وإشعارات مهمة</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                حماية البيانات
              </h2>
              <p className="text-gray-600">
                نستخدم تقنيات تشفير متقدمة لحماية بياناتك الشخصية. نحن نتبع أفضل
                الممارسات الأمنية لضمان أمان معلوماتك.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                حقوق المستخدم
              </h2>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>الوصول إلى بياناتك الشخصية</li>
                <li>تصحيح البيانات غير الدقيقة</li>
                <li>طلب حذف بياناتك</li>
                <li>الاعتراض على معالجة بياناتك</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                حذف البيانات
              </h2>
              <p className="text-gray-600">
                يمكنك طلب حذف بياناتك الشخصية في أي وقت. سيتم معالجة طلبك خلال
                30 يوم عمل. للقيام بذلك، يرجى:
              </p>
              <ul className="list-disc list-inside text-gray-600 mt-2 space-y-2">
                <li>إرسال بريد إلكتروني إلى privacy@go-umrah.com</li>
                <li>تضمين "طلب حذف البيانات" في عنوان البريد الإلكتروني</li>
                <li>توفير معلومات الحساب المراد حذفه</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                التواصل معنا
              </h2>
              <p className="text-gray-600">
                إذا كان لديك أي أسئلة حول سياسة الخصوصية أو ممارساتنا، يرجى
                التواصل معنا عبر:
              </p>
              <ul className="list-disc list-inside text-gray-600 mt-2 space-y-2">
                <li>البريد الإلكتروني: privacy@go-umrah.com</li>
                <li>الهاتف: +966 XX XXX XXXX</li>
                <li>العنوان: المملكة العربية السعودية</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                تحديثات سياسة الخصوصية
              </h2>
              <p className="text-gray-600">
                قد نقوم بتحديث سياسة الخصوصية من وقت لآخر. سيتم إخطارك بأي
                تغييرات جوهرية عبر البريد الإلكتروني أو إشعار على المنصة.
              </p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PrivacyPolicy;

//  https://your-domain.com/privacy-policy