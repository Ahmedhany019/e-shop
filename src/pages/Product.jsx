/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react"
import { FaCarSide } from "react-icons/fa"
import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"

function Product() {
    const {id} = useParams()
    const products = useSelector((state)=>state.products.products)
    const [product, setProduct] = useState()

    useEffect(()=>{
        const newProduct = products.find((item)=>item.id === parseInt(id))
        setProduct(newProduct)
    },[id,products])
    if (!product) {
        return <h1>Loading...</h1>;
    }
  return (
    <div className="container mx-auto py-8 px-4 md:px-16 lg:px-24">
        <div className="flex flex-col md:flex-row gap-x-16">
            <div className="md:w-1/2 p-4 shadow-md md:p-16 flex flex-col items-center gap-y-2">
            <img src={product.image} alt={product.name} className="h-full"/>
            </div>

            <div className="md:w-1/2 p-4 shadow-md md:p-16 flex flex-col items-center gap-y-2">
            <h2 className="text-3xl font-bold">{product.name}</h2>  
            <p className="text-gray-800 mb-4 font-semibold text-xl">${product.price}</p>

            <div className="flex items-center mb-4 gap-x-2">
                <input min={0} type="number" id="quantity"className="w-16 px-2 py-1 border"/>
                <button className="bg-red-600 text-white px-4 py-1.5 hover:bg-red-800">Add to Cart</button>
            </div>
            <div className="flex flex-col gap-y-4 mt-4">
                <p className="flex items-center">
                    <FaCarSide className="mr-1"/>
                    Delivery & Return
                </p>
                <p className="flex items-center">
                    <FaCarSide className="mr-1"/>
                    Ask & Question
                </p>
            </div>
            </div>
        </div>
        <div className="mt-8">
            <h3 className="text-2xl font-bold mb-2">Product Description</h3>
            <p>Product description will goes here.</p>
        </div>
    </div>
  )
}

export default Product