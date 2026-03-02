import React from 'react'



const cards = ({label , count , color}) => {
  return (
    
        <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
            <h3 className={`text-2xl font-bold ${color}`}>{count}</h3>
            <p className="text-gray-500 text-sm font-medium">{label}</p>
        </div>
       

  )
}

export default cards;