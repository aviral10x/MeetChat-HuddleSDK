import React from "react";
import Logo from '../static/meet3club.png'
import Image from "next/image";
import Gif from '../static/meet3club.gif'

export default function Hero() {
    return <>
        <div className="grid mb-10 pt-10 mt-10 md:mb-12 md:grid-cols-2">
            <figure className="flex flex-col items-center justify-center  p-5 m-5">

                <div className="max-w-sm p-10  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <a href="#">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Welcome To Meet3Club</h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Let's Start To Connect With People</p>
                    <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Read more
                        <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </a>
                </div>

            </figure>

            <figure className="flex flex-col items-center justify-center ">
                <Image
                    src={Gif}
                    alt="Picture of the author"
                    width={450}
                    height={100}
                />
            </figure>
    </div>

    </>
}
