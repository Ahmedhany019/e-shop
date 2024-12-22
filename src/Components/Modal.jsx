/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

function Modal({isModalOpen, setIsModalOpen,children}) {
    if(!isModalOpen) return null
  return (
    <div className="fixed inset-0 z-50 bg-gray-800 bg-opacity-75 flex items-center justify-center">
        <div className="bg-white p-6 rounded-lg w-full max-w-md">
            <button className="absolute top-4 right-4 text-gray-300 text-3xl" 
            onClick={() => setIsModalOpen(false)}>
                &times;
            </button>
            {children}
        </div>
    </div>
  )
}

export default Modal