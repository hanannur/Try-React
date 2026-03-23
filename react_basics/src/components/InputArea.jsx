import React, { useState } from 'react'

const InputArea = ({ onAdd }) => {
  const [inputText, setInputText] = useState("")

  const handleClick = () => {
    onAdd(inputText);
    setInputText("")
  }
  return (
    <div className="item-center flex items-center mb-4">
      <input type="text" placeholder="Add your task" value={inputText} onChange={(e) => setInputText(e.target.value)} className=" bg-white dark:bg-gray-800 shadow-md item-center border border-gray-300 dark:border-gray-700 dark:text-gray-100 dark:placeholder-gray-400 w-1/2 rounded-lg p-2 gap-3px transition-colors duration-200" />
      <button onClick={handleClick} className="bg-blue-500 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700 text-white px-4 py-2 rounded-lg mt-2m ml-2 transition-colors duration-200">Add</button>
    </div>
  )
}

export default InputArea