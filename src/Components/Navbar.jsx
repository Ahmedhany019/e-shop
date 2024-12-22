/* eslint-disable no-unused-vars */
import { FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Modal from "./Modal";
import { useState } from "react";
import Login from "./Login";
import Register from "./Register";
import { setSearchTerms } from "../redux/ProductSlice";

export default function Navbar() {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [isLogin, setIsLogin] = useState(true)
    const products = useSelector((state)=>state.cart.products)
    const [search, setSearch] = useState("")
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleChange = (e)=>{
        e.preventDefault()
        dispatch(setSearchTerms(search))
        navigate("/filtered-data")
    }
  return (
    <nav className="bg-white shadow-md">
        <div className="container mx-auto px-4 md:px-16 lg:px-24 py-4 flex justify-between items-center">
            <div className="text-lg font-bold">
                <Link to="/">e-SHOP</Link>
            </div>
            <div className="relative flex-1 mx-4">
                <form onSubmit={(e)=>handleChange(e)}>
                    <input type="text" placeholder="Search Products" className="w-full p-2 border border-gray-300 rounded-md"
                    onChange={(e)=>setSearch(e.target.value)}/>
                    <FaSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"/>
                </form>
            </div>
            <div className="flex items-center space-x-4">
                <Link to={"/cart"} className="relative">
                    <FaShoppingCart/>
                    {products.length > 0 && 
                    <span className="absolute -top-3 left-3 w-4 h-4 bg-red-600 text-white text-xs rounded-full flex items-center justify-center">
                    {products.length}</span>}
                </Link>
                <button className="md:block hidden" onClick={() => setIsModalOpen(true)}>Login | register</button>
                <button className="md:hidden block">
                    <FaUser className="text-2xl"/>
                </button>
            </div>
        </div>
        <div className="flex justify-center space-x-10 py-4 text-sm font-bold">
            <Link to={"/"} className="hover:underline">Home</Link>
            <Link to={"/shop"} className="hover:underline">Shop</Link>
            <Link to={"/contact"} className="hover:underline">Contact</Link>
            <Link to={"/"} className="hover:underline">About</Link>
        </div>
        <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
            {isLogin ? <Login setIsLogin={setIsLogin}/> : <Register setIsLogin={setIsLogin} />}
        </Modal>
    </nav>
  )
}
