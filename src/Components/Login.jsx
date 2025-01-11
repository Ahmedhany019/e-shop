/* eslint-disable react/prop-types */

import { Link } from "react-router-dom"

function Login({setIsLogin}) {
  return (
    <div>
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <form>
            <div className="mb-4">
                <label className="block text-gray-700">Email</label>
                <input type="email" name="email" placeholder="Enter Email" className="w-full px-3 py-2 border"/>
            </div>
            <div className="mb-4">
                <label className="block text-gray-700">Password</label>
                <input type="password" name="password" placeholder="Enter Password" className="w-full px-3 py-2 border"/>
            </div>
            <div className="mb-4 flex justify-between items-center">
                <label htmlFor="" className="inline-flex items-center">
                    <input type="checkbox" className="form-checkbox"/>
                    <span className="ml-2">Remember Me</span>
                </label>
                <a href="#" className="text-red-800">Forgot Password</a>
            </div>
            <Link to="/" className="mb-4">
                <button className="w-full bg-red-600 text-white py-2">Login</button>
            </Link>
        </form>
        <div className="flex items-center justify-between">
            <span className="text-gray-700">Don&apos;t have an account?</span>
            <button className="text-gray-800" onClick={()=>setIsLogin(false)}>Sign Up</button>
        </div>
    </div>
  )
}

export default Login