import React from 'react'

const InputArea = () => {
  return (
    <div className="item-center flex items-center mb-4">
        <input  type="text" placeholder="Add your task" className=" bg-whiteshadow-md item-center border border-gray-300 w-1/2 rounded-lg p-2 gap-3px" />
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-2m ml-2">Add</button>
    </div>
  )
}

export default InputArea