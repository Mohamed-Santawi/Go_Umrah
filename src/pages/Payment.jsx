import React, { useState, useEffect, useRef } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import applePay from "../assets/payment/apple-pay.png";
import visaCard from "../assets/payment/visa.png";
import masterCard from "../assets/payment/mastercard.png";

const Payment = () => {
  const [paymentMethod, setPaymentMethod] = useState("creditCard");
  const [cardDetails, setCardDetails] = useState({
    cardNumber: "",
    cardName: "",
    expiryDate: "",
    cvv: "",
  });

  const paypalRef = useRef();

  const handleCardChange = (e) => {
    setCardDetails({
      ...cardDetails,
      [e.target.name]: e.target.value,
    });
  };

  const handleDirectPaymentSubmit = (e) => {
    e.preventDefault();
    console.log("Direct Payment Submitted:", cardDetails);
    alert("تم استلام طلب الدفع المباشر بنجاح!");
    // In a real application, you'd send this data to your backend for secure processing.
  };

  // Dummy total for demonstration
  const totalAmount = 140;

  useEffect(() => {
    if (paymentMethod === "paypal") {
      const checkPayPalReady = setInterval(() => {
        // Check if window.paypal exists and Buttons is a function, and the ref is available
        if (
          window.paypal &&
          typeof window.paypal.Buttons === "function" &&
          paypalRef.current
        ) {
          clearInterval(checkPayPalReady);
          // Clear any existing buttons to prevent duplicates on re-renders
          paypalRef.current.innerHTML = "";

          console.log("Attempting to render PayPal button...");
          window.paypal
            .Buttons({
              createOrder: (data, actions) => {
                return actions.order.create({
                  purchase_units: [
                    {
                      amount: {
                        value: totalAmount.toFixed(2), // Ensure two decimal places
                        currency_code: "SAR",
                      },
                    },
                  ],
                });
              },
              onApprove: (data, actions) => {
                return actions.order.capture().then((details) => {
                  alert("تم الدفع بنجاح من خلال باي بال!");
                  console.log("PayPal Payment Details:", details);
                  // Here, you would typically send `details` to your backend to verify the payment and fulfill the order.
                });
              },
              onError: (err) => {
                console.error("PayPal Error:", err);
                alert("حدث خطأ أثناء معالجة الدفع عبر باي بال.");
              },
            })
            .render(paypalRef.current);
        } else {
          console.log(
            "PayPal SDK not ready or ref not available. window.paypal:",
            !!window.paypal,
            "window.paypal.Buttons type:",
            typeof window.paypal.Buttons,
            "paypalRef.current:",
            !!paypalRef.current
          );
        }
      }, 100); // Check every 100ms

      return () => clearInterval(checkPayPalReady); // Cleanup on component unmount
    }
  }, [paymentMethod, totalAmount]);

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50 pt-16 md:pt-20 py-8 sm:py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8">
            إتمام عملية الدفع
          </h1>

          <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-6 sm:p-8">
            <div className="mb-6">
              <h2 className="text-xl sm:text-2xl font-semibold mb-4">
                اختر طريقة الدفع
              </h2>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  className={`cursor-pointer flex-1 px-6 py-3 rounded-md text-lg font-medium transition-colors duration-300 ${
                    paymentMethod === "creditCard"
                      ? "bg-[#0c8a4d] text-white hover:bg-[#0a6e3d]"
                      : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                  }`}
                  onClick={() => setPaymentMethod("creditCard")}
                >
                  <i className="fas fa-credit-card ml-2"></i> بطاقة ائتمان / خصم
                </button>
                <button
                  className={`cursor-pointer flex-1 px-6 py-3 rounded-md text-lg font-medium transition-colors duration-300 ${
                    paymentMethod === "paypal"
                      ? "bg-[#0c8a4d] text-white hover:bg-[#0a6e3d]"
                      : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                  }`}
                  onClick={() => setPaymentMethod("paypal")}
                >
                  <i className="fab fa-paypal ml-2"></i> باي بال
                </button>
              </div>
            </div>

            {paymentMethod === "creditCard" && (
              <div className="border-t border-gray-200 pt-6 mt-6">
                <h3 className="text-lg sm:text-xl font-semibold mb-4">
                  الدفع ببطاقة ائتمان / خصم
                </h3>
                <div className="gap-4 flex justify-center mb-6 space-x-2 space-x-reverse">
                  <img src={visaCard} alt="Visa" className="h-8 w-auto" />
                  <img
                    src={masterCard}
                    alt="Mastercard"
                    className="h-8 w-auto"
                  />
                  <img src={applePay} alt="Apple Pay" className="h-8 w-auto" />
                </div>
                <form
                  onSubmit={handleDirectPaymentSubmit}
                  className="space-y-4"
                >
                  <div>
                    <label
                      htmlFor="cardNumber"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      رقم البطاقة
                    </label>
                    <input
                      type="text"
                      id="cardNumber"
                      name="cardNumber"
                      value={cardDetails.cardNumber}
                      onChange={handleCardChange}
                      placeholder="XXXX XXXX XXXX XXXX"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#0c8a4d] focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="cardName"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      الاسم على البطاقة
                    </label>
                    <input
                      type="text"
                      id="cardName"
                      name="cardName"
                      value={cardDetails.cardName}
                      onChange={handleCardChange}
                      placeholder="الاسم الكامل كما يظهر على البطاقة"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#0c8a4d] focus:border-transparent"
                      required
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="expiryDate"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        تاريخ الانتهاء (MM/YY)
                      </label>
                      <input
                        type="text"
                        id="expiryDate"
                        name="expiryDate"
                        value={cardDetails.expiryDate}
                        onChange={handleCardChange}
                        placeholder="MM/YY"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#0c8a4d] focus:border-transparent"
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="cvv"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        CVV
                      </label>
                      <input
                        type="text"
                        id="cvv"
                        name="cvv"
                        value={cardDetails.cvv}
                        onChange={handleCardChange}
                        placeholder="XXX"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#0c8a4d] focus:border-transparent"
                        required
                      />
                    </div>
                  </div>
                  <div className="text-center mt-6">
                    <button
                      type="submit"
                      className="bg-[#0c8a4d] cursor-pointer text-white px-8 py-3 rounded-md hover:bg-[#0a6e3d] transition-colors duration-300 font-semibold text-lg"
                    >
                      دفع {totalAmount} ريال
                    </button>
                  </div>
                </form>
              </div>
            )}

            {paymentMethod === "paypal" && (
              <div className="border-t border-gray-200 pt-6 mt-6 text-center">
                <h3 className="text-lg sm:text-xl font-semibold mb-6">
                  الدفع عبر باي بال
                </h3>
                <p className="text-gray-700 mb-6">
                  انقر على الزر أدناه لإتمام عملية الدفع بشكل آمن عبر باي بال.
                </p>
                <div ref={paypalRef} className="flex justify-center"></div>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Payment;
