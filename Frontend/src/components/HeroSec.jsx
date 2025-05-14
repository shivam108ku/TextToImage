import React, { useContext } from 'react';
import { RiBardFill } from '@remixicon/react';
import { useNavigate } from 'react-router';
import { motion } from 'framer-motion';
import { AppContext } from '../context/AppContext';

const HeroSec = () => {

   const {user, setShowLogin} = useContext(AppContext)
  const navigate = useNavigate();

  const onClickHandler =() => {
    if (user) {
      navigate('/result')
    }else{
      setShowLogin(true)
    }
  }

  return (
    <motion.div 
      initial={{ opacity: 0.3, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2 }}
      viewport={{ once: true }}
      className="mt-16 flex justify-center items-center w-full px-4"
    >
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        viewport={{ once: true }}
        className="w-full sm:w-[80%] md:w-[70%] lg:w-[50%] flex flex-col justify-center items-center text-center"
      >
        <motion.h1 
          className="my-text select-none capitalize text-xl sm:text-2xl md:text-3xl lg:text-4xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
        >
          type your imagination and turn it into reality with us
        </motion.h1>

        <motion.p 
          className="text-sm select-none font-medium text-zinc-300 mt-2 w-[90%] sm:w-[80%]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          viewport={{ once: true }}
        >
          Unleash your creativity with our powerful text-to-image generator. It's fast, simple, and built to turn imagination into reality.
        </motion.p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.2 }}
          transition={{ type: 'spring', stiffness: 300 }}
          className="mt-5 text-white font-[arial] tracking-tight flex items-center gap-2 px-7 py-3 text-md font-bold bg-gradient-to-b
            from-zinc-800 via-white/20 to-zinc-800 rounded-full cursor-pointer 
            hover:scale-102 transition ease-in"
             onClick={onClickHandler}
        >
          Generate Image <RiBardFill color="yellow" />
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default HeroSec;
