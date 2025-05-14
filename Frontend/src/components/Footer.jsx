import React from 'react'
import { RiFacebookBoxFill,RiInstagramFill,RiTwitterFill } from '@remixicon/react';

const Footer = () => {
  return (
    <div  className='flex items-center justify-between gap-4 py-3 mt-20 '>

      <p
      className='flex-1'
      >Copyright 2025 @ Image - All Right Reserved.</p>
      <div className='flex gap-2 items-center'>
        <RiFacebookBoxFill />
        <RiTwitterFill/>
        <RiInstagramFill/>
      </div>
    </div>
  )
}

export default Footer