import React from 'react'
import Cards from './components/cards'
import Tasks from './components/Tasks'
import InputArea from './components/InputArea'

function App(){

  return(
    <div className="items-center m-0 bg-blue-100 justify-center">
      <h1 className='text-3xl m-20 font-bold underline text-center text-gray-700'>
        To-Do list
      </h1>
      <div className="w-full mx-100 item-center">
      <InputArea />
      </div>
      <div className="container mx-100 flex">
      <Cards />
      <Cards />
      <Cards />
      </div>
      <div className="mx-100">
        <Tasks />
        <Tasks/>
        <Tasks/>
      </div>

    </div>
  )

}

export default App; 