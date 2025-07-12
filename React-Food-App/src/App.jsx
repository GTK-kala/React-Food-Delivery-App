import NavBar from "./Components/NavBar/NavBar";
import Home from "./Pages/Home/Home.jsx";
import Cart from "./Pages/Cart/Cart.jsx";
import PlaceOrder from "./Pages/PlaceOrder/PlaceOrder.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import LoginPopu from "./Components/LoginPopu/LoginPopu.jsx";
const App = () => {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>

      {showLogin ? <LoginPopu setShowLogin={setShowLogin}/> : <></>}

      <div className="app">
        <NavBar setShowLogin={setShowLogin}/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<PlaceOrder />} />
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
