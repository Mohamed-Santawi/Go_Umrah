import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {
  FaTshirt,
  FaSuitcase,
  FaBook,
  FaGift,
  FaMobileAlt,
  FaTags,
} from "react-icons/fa";
import ProductCard from "../components/ProductCard";
import Hero from "../components/Hero";
import storeHero from "../assets/islamic/store_hero.jpg";

const Store = () => {
  const [filters, setFilters] = useState({
    category: "all",
    priceRange: "all",
    sortBy: "popularity",
  });

  const handleFilterChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value,
    });
  };

  const categories = [
    {
      icon: <FaTshirt className="text-4xl text-[#0c8a4d]" />,
      title: "ملابس الإحرام",
      description: "ملابس إحرام للرجال والنساء بأفضل الخامات",
      link: "#ihram-clothing",
    },
    {
      icon: <FaSuitcase className="text-4xl text-[#0c8a4d]" />,
      title: "إكسسوارات",
      description: "إكسسوارات وأدوات ضرورية لرحلة العمرة",
      link: "#accessories",
    },
    {
      icon: <FaBook className="text-4xl text-[#0c8a4d]" />,
      title: "كتب ومطبوعات",
      description: "كتب ومطبوعات دينية وأدعية للعمرة والحج",
      link: "#books",
    },
    {
      icon: <FaGift className="text-4xl text-[#0c8a4d]" />,
      title: "هدايا وتذكارات",
      description: "هدايا وتذكارات من الحرمين الشريفين",
      link: "#gifts",
    },
    {
      icon: <FaMobileAlt className="text-4xl text-[#0c8a4d]" />,
      title: "إلكترونيات",
      description: "أجهزة إلكترونية وملحقاتها لرحلة العمرة",
      link: "#electronics",
    },
    {
      icon: <FaTags className="text-4xl text-[#0c8a4d]" />,
      title: "عروض خاصة",
      description: "منتجات بخصومات خاصة لفترة محدودة",
      link: "#special-offers",
    },
  ];

  const ihramProducts = [
    {
      image: "/img/islamic/ihram_men.jpg",
      title: "ثوب إحرام للرجال",
      description: "ثوب إحرام للرجال من القطن عالي الجودة، مريح وسهل الارتداء",
      price: 80,
      rating: 4.5,
      badge: "الأكثر مبيعاً",
      badgeType: "bestseller",
    },
    {
      image: "/img/islamic/ihram_women.jpg",
      title: "ملابس إحرام للنساء",
      description: "ملابس إحرام للنساء من القطن عالي الجودة، مريحة وعملية",
      price: 102,
      originalPrice: 120,
      rating: 4,
      badge: "خصم 15%",
      badgeType: "discount",
    },
    {
      image: "/img/islamic/ihram_premium.jpg",
      title: "طقم إحرام فاخر",
      description: "طقم إحرام فاخر يشمل ثوبين وحزام وحقيبة تخزين",
      price: 150,
      rating: 5,
    },
  ];

  const accessoriesProducts = [
    {
      image: "/img/islamic/prayer_rug.jpg",
      title: "سجادة صلاة فاخرة",
      description:
        "سجادة صلاة فاخرة مصنوعة من أجود أنواع القطن، خفيفة الوزن وسهلة الحمل",
      price: 60,
      rating: 4.5,
    },
    {
      image: "/img/islamic/prayer_beads.jpg",
      title: "مسبحة خشبية فاخرة",
      description: "مسبحة خشبية فاخرة مصنوعة يدوياً من خشب الزيتون",
      price: 45,
      rating: 4,
      badge: "جديد",
      badgeType: "new",
    },
    {
      image: "/img/islamic/travel_bag.jpg",
      title: "حقيبة سفر للعمرة",
      description:
        "حقيبة سفر عملية مصممة خصيصاً لرحلات العمرة، مقاومة للماء ومتينة",
      price: 120,
      rating: 5,
    },
  ];

  const booksProducts = [
    {
      image: "/img/islamic/umrah_guide.jpg",
      title: "دليل العمرة المصور",
      description: "دليل شامل ومصور لمناسك العمرة خطوة بخطوة",
      price: 35,
      rating: 5,
      badge: "الأكثر مبيعاً",
      badgeType: "bestseller",
    },
    {
      image: "/img/islamic/quran.jpg",
      title: "مصحف مدينة (حجم متوسط)",
      description: "مصحف مدينة بحجم متوسط، طباعة واضحة وجودة عالية",
      price: 25,
      rating: 5,
    },
    {
      image: "/img/islamic/dua_book.jpg",
      title: "كتاب الأدعية والأذكار",
      description: "كتاب شامل للأدعية والأذكار اليومية وأدعية العمرة والحج",
      price: 30,
      rating: 4.5,
    },
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50 pt-16 md:pt-20">
        {/* Hero Section */}
        <Hero
          title="متجر جو عمرة"
          description="كل ما تحتاجه لرحلة عمرة مميزة"
          image={storeHero}
        />

        {/* Filter Section */}
        <section className="py-8 sm:py-12">
          <div className="container mx-auto px-4">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl sm:text-2xl font-semibold mb-6">
                ابحث عن المنتجات
              </h2>
              <form>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div>
                    <label
                      htmlFor="product-category"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      الفئة
                    </label>
                    <select
                      id="product-category"
                      name="category"
                      value={filters.category}
                      onChange={handleFilterChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#0c8a4d] focus:border-transparent"
                    >
                      <option value="all">جميع الفئات</option>
                      <option value="clothing">ملابس الإحرام</option>
                      <option value="accessories">إكسسوارات</option>
                      <option value="books">كتب ومطبوعات</option>
                      <option value="gifts">هدايا وتذكارات</option>
                      <option value="electronics">إلكترونيات</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="price-range"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      نطاق السعر
                    </label>
                    <select
                      id="price-range"
                      name="priceRange"
                      value={filters.priceRange}
                      onChange={handleFilterChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#0c8a4d] focus:border-transparent"
                    >
                      <option value="all">جميع الأسعار</option>
                      <option value="0-50">0 - 50 ريال</option>
                      <option value="50-100">50 - 100 ريال</option>
                      <option value="100-200">100 - 200 ريال</option>
                      <option value="200+">أكثر من 200 ريال</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="sort-by"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      ترتيب حسب
                    </label>
                    <select
                      id="sort-by"
                      name="sortBy"
                      value={filters.sortBy}
                      onChange={handleFilterChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#0c8a4d] focus:border-transparent"
                    >
                      <option value="popularity">الأكثر شعبية</option>
                      <option value="price-asc">
                        السعر: من الأقل إلى الأعلى
                      </option>
                      <option value="price-desc">
                        السعر: من الأعلى إلى الأقل
                      </option>
                      <option value="newest">الأحدث</option>
                    </select>
                  </div>

                  <div className="flex items-end">
                    <button
                      type="submit"
                      className="w-full bg-[#0c8a4d] text-white py-2 px-4 rounded-md hover:bg-[#0a6e3d] transition-colors duration-300"
                    >
                      بحث
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="py-8 sm:py-12">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold mb-3">
                فئات المنتجات
              </h2>
              <p className="text-gray-600">تصفح منتجاتنا حسب الفئة</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {categories.map((category, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="mb-4">{category.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">
                    {category.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{category.description}</p>
                  <a
                    href={category.link}
                    className="inline-block px-4 py-2 border-2 border-[#0c8a4d] text-[#0c8a4d] rounded-md hover:bg-[#0c8a4d] hover:text-white transition-colors duration-300"
                  >
                    عرض المنتجات
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Products Section */}
        <section className="py-8 sm:py-12 bg-gray-100" id="ihram-clothing">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold mb-3">
                ملابس الإحرام
              </h2>
              <p className="text-gray-600">
                ملابس إحرام عالية الجودة للرجال والنساء
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {ihramProducts.map((product, index) => (
                <ProductCard key={index} {...product} />
              ))}
            </div>

            <div className="text-center mt-8">
              <a
                href="#"
                className="inline-block px-6 py-3 border-2 border-[#0c8a4d] text-[#0c8a4d] rounded-md hover:bg-[#0c8a4d] hover:text-white transition-colors duration-300"
              >
                عرض المزيد من ملابس الإحرام
              </a>
            </div>
          </div>
        </section>

        {/* Accessories Section */}
        <section className="py-8 sm:py-12" id="accessories">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold mb-3">إكسسوارات</h2>
              <p className="text-gray-600">
                إكسسوارات وأدوات ضرورية لرحلة العمرة
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {accessoriesProducts.map((product, index) => (
                <ProductCard key={index} {...product} />
              ))}
            </div>

            <div className="text-center mt-8">
              <a
                href="#"
                className="inline-block px-6 py-3 border-2 border-[#0c8a4d] text-[#0c8a4d] rounded-md hover:bg-[#0c8a4d] hover:text-white transition-colors duration-300"
              >
                عرض المزيد من الإكسسوارات
              </a>
            </div>
          </div>
        </section>

        {/* Books Section */}
        <section className="py-8 sm:py-12 bg-gray-100" id="books">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold mb-3">
                كتب ومطبوعات
              </h2>
              <p className="text-gray-600">
                كتب ومطبوعات دينية وأدعية للعمرة والحج
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {booksProducts.map((product, index) => (
                <ProductCard key={index} {...product} />
              ))}
            </div>

            <div className="text-center mt-8">
              <a
                href="#"
                className="inline-block px-6 py-3 border-2 border-[#0c8a4d] text-[#0c8a4d] rounded-md hover:bg-[#0c8a4d] hover:text-white transition-colors duration-300"
              >
                عرض المزيد من الكتب والمطبوعات
              </a>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-8 sm:py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="bg-white rounded-lg shadow-lg p-8 text-center">
                <h3 className="text-2xl font-semibold mb-4">
                  اشترك في نشرتنا البريدية
                </h3>
                <p className="text-gray-600 mb-6">
                  اشترك ليصلك كل جديد عن منتجاتنا وعروضنا الحصرية
                </p>
                <form className="flex flex-col sm:flex-row gap-4 justify-center">
                  <input
                    type="email"
                    placeholder="البريد الإلكتروني"
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#0c8a4d] focus:border-transparent"
                  />
                  <button
                    type="submit"
                    className="px-6 py-2 bg-[#0c8a4d] text-white rounded-md hover:bg-[#0a6e3d] transition-colors duration-300"
                  >
                    اشترك
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Store;
