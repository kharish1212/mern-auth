import React from 'react'
import Navbar from '../componets/Navbar'
import Header from '../componets/Header'

const Home = () => {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-[url("bg_img.png")] ng-cover bg-center'>
     <Navbar />
     <Header />
    </div>
  )
}

export default Home
