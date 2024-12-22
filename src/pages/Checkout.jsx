/* eslint-disable react/prop-types */
import { useState } from "react"
import { FaAngleDown, FaAngleUp } from "react-icons/fa"
import { useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom"

function Checkout({setOrder}) {
  const cart = useSelector((state)=>state.cart)
  const [billing, setBilling] = useState(false)
  const [shipping, setShipping] = useState(false)
  const [payment, setPayment] = useState(false)
  const [paymentMethod, setPaymentMethod] = useState('cod')
  const [shippingInfo, setShippingInfo] = useState({
    address: '',
    city: '',
    zip: ''
  })
  const navigate =useNavigate()
  const handelPlaceOrder =()=>{
    const newOrder ={
      shippingInfo:shippingInfo,
      orderNumber: '1234',
      products: cart.products,
      totalPrice: cart.totalPrice,
    }
    setOrder(newOrder)
    navigate('/order-confirmation')
  }

  return (
    <div className="container mx-auto py-8 min-h-96 px-4 md:px-16 lg:px-24">
            <h3 className="text-2xl font-semibold mb-4">CHECKOUT</h3>
            <div className="flex flex-col md:flex-row justify-between space-x-10 mt-8">
                <div className="md:w-2/3">
                  <div className="border p-2 mb-6">
                    
                    <div className="flex items-center justify-between"
                    onClick={()=> setBilling(!billing)}>
                      <h3 className="text-lg font-semibold mb-2">Billing Information</h3>
                      {billing ?<FaAngleDown /> : <FaAngleUp />}
                    </div>

                    <div className={`space-y-4 ${billing ? '' : 'hidden'}`}>
                      <div>
                        <label className="block text-gray-700">Name</label>
                        <input type="text" name="name" className="w-full px-3 py-2 border" placeholder="Enter Name"/>
                      </div>
                    </div>

                    <div className={`space-y-4 ${billing ? '' : 'hidden'}`}>
                      <div>
                        <label className="block text-gray-700">Email</label>
                        <input type="email" name="name" className="w-full px-3 py-2 border" placeholder="Enter Name"/>
                      </div>
                    </div>

                    <div className={`space-y-4 ${billing ? '' : 'hidden'}`}>
                      <div>
                        <label className="block text-gray-700">Phone</label>
                        <input type="number" name="name" className="w-full px-3 py-2 border" placeholder="Enter Name"/>
                      </div>
                    </div>

                  </div>
                  <div className="border p-2 mb-6">
                    
                    <div className="flex items-center justify-between"
                    onClick={()=> setShipping(!shipping)}>
                      <h3 className="text-lg font-semibold mb-2">Shipping Information</h3>
                      {shipping ?<FaAngleDown /> : <FaAngleUp />}
                    </div>

                    <div className={`space-y-4 ${shipping ? '' : 'hidden'}`}>
                      <div>
                        <label className="block text-gray-700">Address</label>
                        <input type="text" name="name" onChange={(e)=>setShippingInfo({...shippingInfo, address:e.target.value})} className="w-full px-3 py-2 border" placeholder="Enter Name"/>
                      </div>
                    </div>

                    <div className={`space-y-4 ${shipping ? '' : 'hidden'}`}>
                      <div>
                        <label className="block text-gray-700">City</label>
                        <input type="text" name="name" onChange={(e)=>setShippingInfo({...shippingInfo, city:e.target.value})} className="w-full px-3 py-2 border" placeholder="Enter Name"/>
                      </div>
                    </div>

                    <div className={`space-y-4 ${shipping ? '' : 'hidden'}`}>
                      <div>
                        <label className="block text-gray-700">Zip code</label>
                        <input type="text" name="name" onChange={(e)=>setShippingInfo({...shippingInfo, zip:e.target.value})} className="w-full px-3 py-2 border" placeholder="Enter Name"/>
                      </div>
                    </div>

                  </div>

                  <div className="border p-2 mb-6">
                    
                    <div className="flex items-center justify-between"
                    onClick={()=> setPayment(!payment)}>
                      <h3 className="text-lg font-semibold mb-2">Payment Method</h3>
                      {payment ?<FaAngleDown /> : <FaAngleUp />}
                    </div>

                    <div className={`space-y-4 ${payment ? '' : 'hidden'}`}>
                      <div className="flex items-center mb-2">
                        <input type="radio" name="payment" checked={paymentMethod === 'cod'} onChange={() => setPaymentMethod('cod')}className="mr-2" />
                        <label className="block text-gray-700">Cash on delivery</label>
                      </div>

                      <div className="flex items-center mb-2">
                        <input type="radio" name="payment" checked={paymentMethod === 'dc'} onChange={() => setPaymentMethod('dc')}className="mr-2" />
                        <label className="block text-gray-700">Debit card</label>
                      </div>
                        {paymentMethod === 'dc' && (
                          <div className="bg-gray-100 mb-4 p-4 rounded-lg">
                            <h3 className="text-xl font-semibold mb-4">Debit Card Information</h3>
                            <div className="mb-4">
                              <label className="block font-semibold mb-2 text-gray-700">Card Number</label>
                              <input type="text" name="name" className="w-full rounded p-2 border"/>
                            </div>
                            <div>
                              <label className="block font-semibold mb-2 text-gray-700">Card Holder Name</label>
                              <input type="text" name="name" className="w-full rounded p-2 border"/>
                            </div>
                            <div className="flex gap-4 mt-2 justify-between">
                            <div className="flex-1">
                              <label className="block font-semibold mb-2 text-gray-700">Expiry Date</label>
                              <input type="text" name="name" className="w-full rounded p-2 border"/>
                            </div>
                            <div className="flex-1">
                              <label className="block font-semibold mb-2 text-gray-700">CVV</label>
                              <input type="text" name="name" className="w-full rounded p-2 border"/>
                            </div>
                            </div>
                          </div>
                        )}
                      </div>

                  </div>

                </div>
                {/* Order Summary */}
                <div className="md:w-1/3 bg-white p-6 rounded-lg shadow border">
                  <h3>Order Summary</h3>
                  <div className="mb-4">
                      {cart.products.map((product) => (
                        <div key={product.id} className="flex items-center justify-between mb-4">
                          <div className="flex items-center">
                            <img src={product.image} alt={product.name} className="w-12 h-12 object-contain mr-4"/>
                            <div>
                              <h4 className="font-semibold">{product.name}</h4>
                              <p className="text-gray-600">${product.price}</p>
                            </div>
                          </div>
                          <p className="font-semibold">${product.price * product.quantity}</p>
                          <p className="font-semibold">{product.quantity}</p>
                        </div>
                      ))}
                  </div>
                  <div className="mb-4 border-t pt-4">
                    <div className="flex justify-between">
                      <span>Total Price:</span>
                      <span className="font-semibold">${cart.totalPrice.toFixed(2)}</span>
                    </div>
                    <Link to={"/order-confirmation"}>
                    <button className="bg-red-500 text-white mt-4 w-full py-2 px-4 rounded" onClick={handelPlaceOrder}>Place Order</button>
                    </Link>
                  </div>
                </div>
            </div>
    </div>
  )
}

export default Checkout