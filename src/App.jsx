import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { CartProvider } from "./context/CartContext";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Hotels from "./pages/Hotels";
import Attractions from "./pages/Attractions";
import Cart from "./pages/Cart";
import Intro from "./components/Intro";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";
import Register from "./pages/Register";
import Trips from "./pages/Trips";
import Visas from "./pages/Visas";
import Transportation from "./pages/Transportation";

function App() {
  return (
    <Router>
      <AuthProvider>
        <CartProvider>
          <div className="flex flex-col min-h-screen">
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<Intro />} />
                <Route path="/home" element={<Home />} />
                <Route path="/hotels" element={<Hotels />} />
                <Route path="/attractions" element={<Attractions />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/footer" element={<Footer />} />
                <Route path="/register" element={<Register />} />
                <Route path="/trips" element={<Trips />} />
                <Route path="/visas" element={<Visas />} />
                <Route path="/login" element={<Login />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/transportation" element={<Transportation />} />
              </Routes>
            </main>
          </div>
        </CartProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;
