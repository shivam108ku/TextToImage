import React from 'react'
import { useNavigate } from 'react-router'

const GenerateBtn = () => {
  const navigate = useNavigate();

  return (
    <div className='flex flex-col justify-center items-center'>
      <h1 className='mt-10 
      my-text
      '>See the Magic. Try Now</h1>
      <button 
      className='px-8 border font-[arial] font-bold cursor-pointer hover:bg-black border-green-500 py-3 rounded-xs m-3'
      onClick={()=>navigate('/buy')}  >
        Try For Free
      </button>
    </div>
  )
}

export default GenerateBtn