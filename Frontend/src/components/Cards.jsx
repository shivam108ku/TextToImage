import React from 'react';
import { motion } from 'framer-motion';
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
    <div className="mt-10 grid-cols-2 w-full marquee-wrapper">
      <div className="w-[90%] mx-auto flex justify-center gap-10 items-center flex-wrap h-full">
        {data.map((item, index) => (
          <motion.div
            key={index}
            className="relative h-50 border border-zinc-800 shadow-black shadow-2xl rounded-xl overflow-hidden"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <img
              className="h-full overflow-hidden w-80 object-cover"
              src={item.url}
              alt="img"
            />
            <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.0),rgba(0,0,0,0.1),rgba(0,0,0,0.9))]" />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
