import { FaHeadset, FaLock, FaMoneyBillWave, FaShippingFast, FaTag } from "react-icons/fa"



function InfoSection() {

    const InfoSection = [
        {
            icon:<FaShippingFast className="text-3xl text-red-600"/>,
            title:"Free Shipping",
            desc:"Get your orders delivered with no extra cost",
        },
        {
            icon:<FaHeadset className="text-3xl text-red-600"/>,
            title:"Support 24/7",
            desc:"We are here to assist you anytime",
        },
        {
            icon:<FaMoneyBillWave className="text-3xl text-red-600"/>,
            title:"100% Money Back",
            desc:"Fully refund if you are not satisfied",
        },
        {
            icon:<FaLock className="text-3xl text-red-600"/>,
            title:"Payment Security",
            desc:"Your payment is safe with us",
        },
        {
            icon:<FaTag className="text-3xl text-red-600"/>,
            title:"Discount",
            desc:"Enjoy the best prices on our products",
        },
    ]
  return (
    <div className="bg-white pb-8 pt-12">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {InfoSection.map((item,index) => (
                <div key={index} className="flex items-center flex-col p-4 border rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105 cursor-pointer text-center">
                        {item.icon}
                        <h3 className="text-xl mt-4 font-semibold">{item.title}</h3>
                        <p className="mt-2 text-gray-600">{item.desc}</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default InfoSection