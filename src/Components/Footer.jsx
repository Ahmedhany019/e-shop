import { FaFacebook, FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa"
import { Link } from "react-router-dom"

function Footer() {
  return (
  <footer className="bg-gray-800 text-white py-8 px-4 md:px-16">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 container mx-auto">
      <div>
        <h3 className="text-xl font-semibold">e-Shop</h3>
        <p className="mt-4">Your one-step fot all your needs shop with use and experience the best online shopping experience</p>
      </div>
      <div className="flex flex-col md:items-center">
        <h4 className="text-lg font-semibold">Quick Links</h4>
        <ul className="mt-4 space-y-2">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/shop">Shop</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/">About</Link></li>
        </ul>
      </div>
      <div>
        <h4 className="text-lg font-semibold">Follow Us</h4>
        <div className="flex mt-4 space-x-4">
          <a href="http://facebook.com" className="hover:text-gray-400" target="_blank"><FaFacebook/></a>
          <a href="http://twitter.com" className="hover:text-gray-400" target="_blank"><FaTwitter/></a>
          <a href="http://github.com" className="hover:text-gray-400" target="_blank"><FaGithub/></a>
          <a href="http://linkedin.com" className="hover:text-gray-400" target="_blank"><FaLinkedinIn/></a>
        </div>
        <form className="flex items-center justify-center mt-8">
          <input type="email" placeholder="Enter your email" className="w-full p-2 rounded-l-lg ng-gray-800 border border-gray-600"/>
          <button type="submit" className="bg-red-600 px-4 text-white py-2 rounded-r-lg">Subscribe</button>
        </form>
      </div>
    </div>
    <div className="border-t border-gray-600 pt-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <p className="text-center mt-8">Copyright &copy; 2024 e-Shop. All rights reserved.</p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="#" className="hover:underline">Privacy Policy</a>
          <a href="#" className="hover:underline">Terms & Conditions</a>
        </div>
      </div>
    </div>
  </footer>
  )
}

export default Footer