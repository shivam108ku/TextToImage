import React, {useContext} from 'react';
import Header from './components/Header';
import {AppContext} from './context/AppContext'
import {Routes,Route} from 'react-router';
import Home from './components/Home';
import Footer from './components/Footer';
import Result from './pages/Result';
import BuyCredits from './pages/BuyCredits';
import Login from './components/Login';
import { ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";
 import ThreeBackground from './components/ThreeBackground'; // ✅ Import background
const App = () => {

   const {showLogin} = useContext(AppContext)
  return (

    <div className='relative h-screen w-full font-arial bg-zinc-900
    text-white flex flex-col items-center overflow-x-hidden'>
       <ThreeBackground/>
       <ToastContainer />
       <Header/>
        {showLogin && <Login />}
       <Routes>

        <Route path='/' element={ <Home/>} />
        <Route path='/result' element={ <Result/>} />
        <Route path='/buy' element={ <BuyCredits />} />

       </Routes>

        <Footer/>
    </div>

  );
};

export default App;



