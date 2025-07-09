import NavBar from "./Components/NavBar/NavBar"
import Home from "./Pages/Home/Home.jsx"
import Cart from "./Pages/Cart/Cart.jsx"
import PlaceOrder from "./Pages/PlaceOrder/PlaceOrder.jsx"
import Footer from "./Components/Footer/Footer.jsx"
import {Route, Routes} from "react-router-dom"
const App = () => {
  
  return (
    <>
      <div className="app">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<PlaceOrder />} />
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
    </div>
      <Footer />
   </>
  )
}

export default App
