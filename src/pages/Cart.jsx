import React from "react";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
// import cartHero from "../assets/islamic/cart_hero.jpg";

const Cart = () => {
  const { cartItems, total, removeFromCart, updateQuantity, clearCart } =
    useCart();
  const { currentUser } = useAuth();

  const handleCheckout = () => {
    if (!currentUser) {
      // Redirect to login page or show login modal
      return;
    }
    // Implement checkout logic here
    console.log("Proceeding to checkout...");
  };

  return (
    <>
      <Header />
      {/* <Hero
        title="سلة المشتريات"
        description="راجع مشترياتك وأكمل عملية الدفع"
        image={cartHero}
      /> */}
      <div className="min-h-screen bg-gray-50 pt-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {cartItems.length === 0 ? (
            <div className="text-center py-12">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                سلة المشتريات فارغة
              </h2>
              <p className="text-gray-600">
                قم بإضافة بعض المنتجات إلى سلة المشتريات
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="bg-white rounded-lg shadow-md p-6 mb-4"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-20 h-20 object-cover rounded-md"
                        />
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900">
                            {item.name}
                          </h3>
                          <p className="text-gray-600">{item.description}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center border rounded-md">
                          <button
                            onClick={() =>
                              updateQuantity(item.id, item.quantity - 1)
                            }
                            className="px-3 py-1 text-gray-600 hover:bg-gray-100"
                          >
                            -
                          </button>
                          <span className="px-3 py-1">{item.quantity}</span>
                          <button
                            onClick={() =>
                              updateQuantity(item.id, item.quantity + 1)
                            }
                            className="px-3 py-1 text-gray-600 hover:bg-gray-100"
                          >
                            +
                          </button>
                        </div>
                        <span className="text-lg font-semibold text-[#0c8a4d]">
                          {item.price * item.quantity} ريال
                        </span>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-red-500 hover:text-red-700"
                        >
                          حذف
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="lg:col-span-1">
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">
                    ملخص الطلب
                  </h2>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-gray-600">المجموع</span>
                      <span className="font-semibold">{total} ريال</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">الضريبة</span>
                      <span className="font-semibold">
                        {(total * 0.15).toFixed(2)} ريال
                      </span>
                    </div>
                    <div className="border-t pt-4">
                      <div className="flex justify-between">
                        <span className="text-lg font-semibold">الإجمالي</span>
                        <span className="text-lg font-semibold text-[#0c8a4d]">
                          {(total * 1.15).toFixed(2)} ريال
                        </span>
                      </div>
                    </div>
                    <button
                      onClick={handleCheckout}
                      className="w-full bg-[#0c8a4d] text-white py-3 rounded-md hover:bg-green-700 transition-colors duration-300"
                    >
                      متابعة الدفع
                    </button>
                    <button
                      onClick={clearCart}
                      className="w-full border border-red-500 text-red-500 py-3 rounded-md hover:bg-red-50 transition-colors duration-300"
                    >
                      إفراغ السلة
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Cart;
