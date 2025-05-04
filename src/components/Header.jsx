import React from 'react'

const Header = () => {
  return (
    <div className='w-full text-xl font-black flex justify-around items-center py-6 px-4'>
      <h1 className=' cursor-pointer  ' >Home</h1>
      <h1 className=' cursor-pointer  ' >Contact Us</h1>
      <h1 className=' cursor-pointer  ' >About Us</h1>
    </div>
  )
}

export default Header
