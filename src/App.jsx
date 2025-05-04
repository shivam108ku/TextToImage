import React from 'react';
import Header from './components/Header';
import Cards from './components/Cards';
import GeneratorApp from './components/GeneratorApp';
import ThreeBackground from './components/ThreeBackground'; // ✅ Import background
import HeroSec from './components/HeroSec';

const App = () => {
  return (
    <div className='relative h-screen w-full font-arial bg-black text-white flex flex-col items-center overflow-x-hidden'>
      
      {/* Rainfall effect in background */}
     <ThreeBackground />  

      {/* Main UI */}
      <Header />
      <HeroSec/>
      {/* <Cards />
      <GeneratorApp /> */}
      
    </div>
  );
};

export default App;
