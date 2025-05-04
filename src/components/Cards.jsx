import React from 'react'
import Img1 from '../assets/1.jpeg';
import Img2 from '../assets/2.jpeg';
import Img4 from '../assets/4.jpeg';
import Img5 from '../assets/5.jpeg';
import Img6 from '../assets/6.jpeg';
import Img7 from '../assets/7.jpeg';
import Img8 from '../assets/8.jpeg';
import Img9 from '../assets/9.jpeg';
 

const Cards = () => {
  const data = [
    { url: Img1 },
    { url: Img2 },
    { url: Img4 },
    { url: Img5 },
    { url: Img6 },
    { url: Img7 },
    { url: Img8 },
    { url: Img9 },
  ];

  return (
    <div className="   mt-10 grid-cols-2 w-full marquee-wrapper">
      <div className='w-[90%] mx-auto flex justify-center gap-10 items-center flex-wrap h-full'>
        {
          data.map((item,index)=>(
            <img 
            key={index}
            className='h-50 rounded-xl object-cover'
            src={item.url}/>
          ))
        }
      </div>
    </div>

  );
}

export default Cards;
