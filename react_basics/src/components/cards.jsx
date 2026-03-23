import React from 'react'



const cards = ({ label, count, color }) => {
  return (

    <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 transition-colors duration-200">
      <h3 className={`text-2xl font-bold ${color} transition-colors duration-200`}>{count}</h3>
      <p className="text-gray-500 dark:text-gray-400 text-sm font-medium transition-colors duration-200">{label}</p>
    </div>


  )
}

export default cards;