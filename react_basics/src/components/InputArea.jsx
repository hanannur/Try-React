import React, { useState } from 'react'

const InputArea= ({onAdd}) => {
  const [inputText , setInputText]=useState("")

  const handleClick=()=>{
    onAdd(inputText);
    setInputText("")
  }
  return (
    <div className="item-center flex items-center mb-4">
        <input  type="text" placeholder="Add your task" onChange={(e)=>setInputText(e.target.value)} className=" bg-whiteshadow-md item-center border border-gray-300 w-1/2 rounded-lg p-2 gap-3px" />
        <button onClick={handleClick} className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-2m ml-2">Add</button>
    </div>
  )
}

export default InputArea