/* eslint-disable no-unused-vars */
import { useDispatch, useSelector } from "react-redux"
import emptyCart from '../assets/images/emptyCart.jpg'
import { FaTrashAlt } from "react-icons/fa"
import { useState } from "react"
import Modal from "../Components/Modal"
import ChangeAddress from "../Components/ChangeAddress"
import { decreaseQuantity, increaseQuantity, removeFromCart } from "../redux/CartSlice"
import { useNavigate } from "react-router-dom"
function Cart() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const products = useSelector((state)=> state.cart.products)
    const [address,setAddress] = useState('cairo')
    const [isModalOpen,setIsModalOpen] = useState(false)
  return (
    <div className="container mx-auto py-8 min-h-96 px-4 md:px-16 lg:px-24">
        {products.length > 0 ?
        <div>
            <h3 className="text-2xl font-semibold mb-4">SHOPPING CART</h3>
            <div className="flex flex-col md:flex-row justify-between space-x-10 mt-8">
                <div className="md:w-2/3">
                    <div className="flex justify-between border-b items-center mb-4 text-xs font-bold">
                        <p>PRODUCTS</p>
                        <div className="flex space-x-8">
                            <p>PRICE</p>
                            <p>QUANTITY</p>
                            <p>SUBTOTAL</p>
                            <p>REMOVE</p>
                        </div>
                    </div>
                    <div>
                        {products.map((product) => (
                            <div key={product.id} className="flex items-center justify-between p-3 border-b">
                                <div className="md:flex items-center space-x-4">
                                    <img src={product.image} alt={product.name} className="w-16 h-16 object-contain rounded"/>
                                    <div className="flex-1 ml-4">
                                        <h3 className="text-lg font-semibold">{product.name}</h3>
                                    </div>
                                </div>
                                <div className="flex space-x-12 items-center">
                                    <p>${product.price}</p>
                                    <div className="flex">
                                        <button className="text-xl px-1 border" onClick={() => dispatch(decreaseQuantity(product.id))}>-</button>
                                        <p className="px-2 text-xl">{product.quantity}</p>
                                        <button className="text-xl px-1 border" onClick={() => dispatch(increaseQuantity(product.id))}>+</button>
                                    </div>
                                    <p>${(product.price * product.quantity).toFixed(2)}</p>
                                    <button className="text-red-500 hover:text-red-700">
                                        <FaTrashAlt onClick={()=> dispatch(removeFromCart(product.id))}/>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
                <div className="md:w-1/3 bg-white p-6 rounded-lg shadow border">
                        <h3 className="text-sm font-semibold mb-5">Cart Total</h3>
                        <div className="mb-5 flex justify-between border-b pb-1">
                            <span className="text-sm">Total Items:</span>
                            <span>{products.totalQuantity}</span>
                        </div>
                        <div className="mb-4 border-b pb-2">
                            <p>Shipping:</p>
                            <p className="">Shipping to:</p>
                            <span className="text-xs font-bold">{address}</span>
                            <button className="text-blue-500 hover:underline mt-1 ml-2"
                            onClick={() => setIsModalOpen(true)}
                            >Change address</button>
                        </div>
                        <div className="flex justify-between mb-4">
                            <span>Total Price:</span>
                            <span>${products.totalPrice}</span>
                        </div>
                        <button 
                        onClick={()=> navigate("/checkout")}
                        className="bg-red-600 w-full text-white py-2 hover:bg-red-800">Proceed to checkout</button>
                </div>
            </div>
            <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
                <ChangeAddress setIsModalOpen={setIsModalOpen} address={address} setAddress={setAddress}/>
            </Modal>
        </div>:
        <div className="flex justify-center">
            <img src={emptyCart} alt="cart" className="h-96"/>
        </div>}
    </div>
  )
}

export default Cart