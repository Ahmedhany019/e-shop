 import categories, { mockData } from "../assets/mockData"
 import heroImage from "../assets/images/product4.jpg"
import InfoSection from "../Components/InfoSection"
import CategorySection from "../Components/CategorySection"
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { setProducts } from "../redux/ProductSlice";
import ProductCard from "../Components/ProductCard";
function Home() {

const dispatch = useDispatch();
const products = useSelector((state) => state.products);

useEffect(()=>{
dispatch(setProducts(mockData))
},[])

  return (
    <section className="px-4 md:px-16 lg:px-24 py-4 bg-white">
        <div className="container mx-auto py-4 flex flex-col md:flex-row space-x-2">
            {/* Categories */}
            <div className="w-full md:w-3/12">
                <div className="uppercase bg-red-600 text-xs font-bold py-2.5 px-2 text-white">
                    Shop By categories
                </div>
                <ul className="space-y-4 bg-gray-100 p-3 border">
                    {categories.map((category,index) => (
                        <li key={index} className="flex items-center text-sm font-medium">
                        <div className="w-2 h-2 rounded-full border border-red-500 mr-2"></div>
                        {category}</li>
                    ))}
                </ul>
            </div>
            {/* Banner */}
            <div className="w-full md:w-9/12 mt-8 md:mt-0 h-96 relative">
                <img src={heroImage} alt="product" className="h-full w-full object-cover object-center"/>
                <div className="absolute top-16 left-8">
                    <p className="text-gray-600 mb-4">Code With Ahmed</p>
                    <h2 className="text-3xl font-bold">WELCOME TO E-SHOP</h2>
                    <p className="text-xl mt-2.5 font-bold text-gray-500">MILLIONS+ PRODUCTS</p>
                    <button className="bg-red-600 px-8 py-1.5 text-white mt-4 hover:bg-red-700 transform transition-transform duration-300 hover:scale-105">SHOP NOW</button>
                </div>
            </div>
        </div>
        <InfoSection/>
        <CategorySection/>
        <div className="container mx-auto py-12">
            <h2 className="text-2xl font-bold mb-6 text-center">Top Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {products.products.slice(0,4).map((product) => (
                <ProductCard key={product.id} product={product}/>
            ))}
            </div>
        </div>
    </section>
  )
}

export default Home