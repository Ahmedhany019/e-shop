import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./Components/Navbar"
import Footer from "./Components/Footer"
import Home from "./pages/Home"
import Shop from "./pages/Shop"
import Cart from "./pages/Cart"
import Checkout from "./pages/Checkout"
import FilterData from "./pages/FilterData"
import Product from "./pages/Product"
import Contact from "./pages/Contact"
import { useState } from "react"
import Order from "./pages/Order"
// import ConfirmationOrder from "./pages/ConfirmationOrder"


function App() {

  const [order, setOrder] = useState()

  return (
    <div className="min-h-screen flex flex-col justify-between">
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/shop" element={<Shop/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/checkout" element={<Checkout setOrder={setOrder}/>}/>
          <Route path="/order-confirmation" element={<Order order={order}/>}/>
          <Route path="/filtered-data" element={<FilterData/>}/>
          <Route path="/product/:id" element={<Product/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App
