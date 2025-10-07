import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
// import BG-img from '../assets/BG_img';

const Home = () => {
  return (
    <>
        <Navbar/>
        <div className='h-screen bg-[url(/BG_img.png)] bg-no-repeat bg-center bg-cover'></div>
        <Footer/>
    </>
  )
}

export default Home
