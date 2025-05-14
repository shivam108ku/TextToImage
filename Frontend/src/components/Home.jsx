import React from 'react'
import Cards from './Cards'
import HeroSec from './HeroSec'
import GenerateBtn from './GenerateBtn';
 

const Home = () => {
  return (
    <div> 
        <HeroSec/>
        <Cards/>
        <GenerateBtn/>
    </div>
  )
}

export default Home