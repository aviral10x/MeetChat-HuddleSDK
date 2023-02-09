// import { NextPage } from 'next'
// import Head from 'next/head'
// import Image from 'next/image'
import React from 'react'
import Header from './components/header'
import Hero from './components/hero'

const Home = () => {
    return (
        <div className=" bg-black" >
            <Header />
            <Hero />
            <div className="w-full items-center justify-center bg-black text-white">
                <title>Meet3Club</title>
                <link rel="icon" href="/favicon.ico" />
            </div>

            <footer className="flex h-25 p-5 w-full items-center justify-center bg-black text-white">
                <a
                    className="flex items-center justify-center gap-2"
                    href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                    
                >
                    Powered by <b>Meet3Club</b>

                </a>
            </footer>
        </div>
    )
}

export default Home
