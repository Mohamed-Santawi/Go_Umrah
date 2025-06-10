import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { FaTrashAlt } from "react-icons/fa";

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "ثوب إحرام للرجال",
      price: 80,
      quantity: 1,
      image: "/img/islamic/ihram_men.jpg",
    },
    {
      id: 2,
      name: "سجادة صلاة فاخرة",
      price: 60,
      quantity: 2,
      image: "/img/islamic/prayer_rug.jpg",
    },
  ]);

  const removeFromCart = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const shipping = 20; // Example shipping cost
  const total = subtotal + shipping;

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50 pt-16 md:pt-20 py-8 sm:py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8">
            سلة المشتريات
          </h1>

          {cartItems.length === 0 ? (
            <div className="text-center py-10 bg-white rounded-lg shadow-md p-6">
              <p className="text-lg text-gray-700 mb-4">سلة المشتريات فارغة.</p>
              <Link
                to="/store"
                className="inline-block bg-[#0c8a4d] text-white px-6 py-3 rounded-md hover:bg-[#0a6e3d] transition-colors duration-300"
              >
                تصفح المتجر
              </Link>
            </div>
          ) : (
            <div className="lg:flex lg:space-x-8 lg:space-x-reverse">
              {/* Cart Items List */}
              <div className="lg:w-2/3 bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl sm:text-2xl font-semibold mb-6">
                  المنتجات في السلة
                </h2>
                <div className="space-y-4">
                  {cartItems.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center border-b border-gray-200 pb-4 last:border-b-0 last:pb-0"
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-24 h-24 sm:w-28 sm:h-28 object-cover rounded-md ml-4 flex-shrink-0"
                      />
                      <div className="flex-1 mr-4">
                        <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-1">
                          {item.name}
                        </h3>
                        <p className="text-gray-600 text-sm sm:text-base">
                          الكمية: {item.quantity}
                        </p>
                        <p className="text-[#0c8a4d] font-bold text-base sm:text-lg">
                          {item.price * item.quantity} ريال
                        </p>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-red-500 hover:text-red-700 transition-colors duration-300 p-2"
                        title="حذف المنتج"
                      >
                        <FaTrashAlt className="w-5 h-5" />
                      </button>
                    </div>
                  ))}
                </div>
                <div className="mt-8 text-center">
                  <Link
                    to="/store"
                    className="inline-block text-[#0c8a4d] hover:text-[#0a6e3d] transition-colors duration-300 text-base sm:text-lg"
                  >
                    &larr; متابعة التسوق
                  </Link>
                </div>
              </div>

              {/* Cart Summary */}
              <div className="lg:w-1/3 mt-8 lg:mt-0 bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl sm:text-2xl font-semibold mb-6">
                  ملخص السلة
                </h2>
                <div className="space-y-3 text-gray-700 text-base sm:text-lg">
                  <div className="flex justify-between">
                    <span>المجموع الفرعي:</span>
                    <span>{subtotal} ريال</span>
                  </div>
                  <div className="flex justify-between">
                    <span>الشحن:</span>
                    <span>{shipping} ريال</span>
                  </div>
                  <div className="flex justify-between font-bold text-lg sm:text-xl border-t border-gray-200 pt-3 mt-3">
                    <span>الإجمالي:</span>
                    <span>{total} ريال</span>
                  </div>
                </div>
                <Link
                  to="/payment"
                  className="mt-8 block w-full text-center bg-[#0c8a4d] text-white px-6 py-3 rounded-md hover:bg-[#0a6e3d] transition-colors duration-300 text-lg sm:text-xl font-semibold"
                >
                  المتابعة للدفع
                </Link>
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Cart;
