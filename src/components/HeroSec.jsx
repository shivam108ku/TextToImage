import React from 'react'

const HeroSec = () => {
  return (
    <div className='mt-16 flex justify-center items-center
     w-full '>
        <div className='w-[50%] flex flex-col justify-center items-center text-center'>
            <h1 className='my-text capitalize'>
             type your imagination and turn it into reality with us
            </h1>
            <p className='text-sm font-medium text-zinc-300 mt-1 w-[80%]'>
            Unleash your creativity with our powerful text-to-image generator. It's fast, simple, and built to turn imagination into reality.
            </p>
            <button className='mt-5 p-2 pl-15 
            pr-15 text-md font-bold bg-gradient-to-b
            rounded-[5px] cursor-pointer hover:scale-105 transition-all ease-in
            from-zinc-800 via-white/40 to-zinc-800'>
                 Go Ahead
            </button>
        </div>
    </div>
  )
}

export default HeroSec