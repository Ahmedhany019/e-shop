/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { useState } from "react"

function ChangeAddress({address,setAddress, setIsModalOpen}) {
    const [updateAddress,setUpdateAddress] = useState(address)
    const handleChangeAddress = ()=>{
        setAddress(updateAddress)
        setIsModalOpen()
    }
  return (
    <div>
        <input type="text" placeholder="Enter your address" className="border p-2 w-full mb-4"
        value={updateAddress} onChange={(e) => setUpdateAddress(e.target.value)}/>
        <div className="flex justify-end">
            <button className="bg-gray-600 text-white px-4 py-2 rounded mr-2"
            onClick={() => setIsModalOpen(false)}
            >Cancel</button>
            <button className="bg-blue-600 text-white px-4 py-2 rounded mr-2"
            onClick={handleChangeAddress}
            >Save Address</button>
        </div>
    </div>
  )
}

export default ChangeAddress