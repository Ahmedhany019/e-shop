import { useSelector } from "react-redux"
import ProductCard from "../Components/ProductCard"

function Shop() {
    const products = useSelector((state) => state.products)
  return (
    <div className="mx-auto py-12 px-4 md:px-16 lg:px-24">
    <h2 className="text-2xl font-bold mb-6 text-center">Shop</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
    {products.products.map((product) => (
        <ProductCard key={product.id} product={product}/>
    ))}
    </div>
</div>
  )
}

export default Shop