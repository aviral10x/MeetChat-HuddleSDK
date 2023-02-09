// import { NextPage } from 'next'
// import Head from 'next/head'
// import Image from 'next/image'
import React from 'react'
import Header from './components/header'
import Matching from './components/matching'
// import Hero from './components/hero'

const Home = () => {
    return (
        <div className='h-screen bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-900 via-gray-900 to-black'>
        {/* <Header /> */}
        <Matching />
      
    </div>
    )
}

export default Home
