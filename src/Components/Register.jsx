/* eslint-disable react/prop-types */

import { Link } from "react-router-dom"

function Register({setIsLogin}) {
  return (
    <div>
        <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
        <form>
            <div className="mb-4">
                <label className="block text-gray-700">Name</label>
                <input type="text" name="name" placeholder="Enter Name" className="w-full px-3 py-2 border"/>
            </div>
            <div className="mb-4">
                <label className="block text-gray-700">Email</label>
                <input type="email" name="email" placeholder="Enter Email" className="w-full px-3 py-2 border"/>
            </div>
            <div className="mb-4">
                <label className="block text-gray-700">Password</label>
                <input type="password" name="password" placeholder="Enter Password" className="w-full px-3 py-2 border"/>
            </div>
            <Link to="/" className="mb-4">
                <button className="w-full bg-red-600 text-white py-2">Sign Up</button>
            </Link>
        </form>
        <div className="flex items-center justify-between">
            <span className="text-gray-700">Already have an account?</span>
            <button className="text-gray-800" onClick={()=>setIsLogin(true)}>Login</button>
        </div>
    </div>
  )
}

export default Register