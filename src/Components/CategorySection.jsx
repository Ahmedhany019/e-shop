
import menCategory from "../assets/images/mens-banner.jpg"
import womanCategory from "../assets/images/blog-3.jpg"
import kidsCategory from "../assets/images/kids.jpg"

const categories =[
    {
        title:"Men",
        imageUrl:menCategory,
    },
    {
        title:"Woman",
        imageUrl:womanCategory,
    },
    {
        title:"Kids",
        imageUrl:kidsCategory,
    },
]
function CategorySection() {


  return (
    <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 cursor-pointer">
        {categories.map((category,index) => (
            <div key={index} className="relative h-64 transform transition-transform duration-300 hover:scale-105">
                <img src={category.imageUrl} alt="category" className="w-full h-full object-cover rounded-lg shadow-md"/>
                <div className="absolute top-20 left-12">
                    <p className="text-xl font-bold">{category.title}</p>
                    <p>View All</p>
                </div>
            </div>
        ))}
    </div>
  )
}

export default CategorySection