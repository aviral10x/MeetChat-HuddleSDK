import React from "react";
// import Logo from '../static/meet3club.png'
import Image from "next/image";
// import Gif from '../static/meet3club.gif'
import NFTimage from '../static/nft-yacht.png'


export default function Match() {
    return <>

        <div className="items-center mb-10 pt-10 mt-10 md:mb-12 md:grid-cols-2">
            <div className="items-center mt-2 md:mb-12 md:grid-cols-2">
                <figure className="flex flex-col items-center justify-center  p-5 m-5">

                    <div className="max-w-l ">
                        <a href="#">
                            <h5 className="mb-1 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">Your Match</h5>
                        </a>

                        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-1 sm:gap-16 lg:grid-cols-2">

                            <article
                                className="rounded-xl bg-gradient-to-r  from-green-300 via-blue-500 to-purple-600 p-2 shadow-xl transition hover:animate-background hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s]"
                            >
                                <div className=" bg-white sm:p-6">

                                    <Image
                                        src={NFTimage}
                                        alt="Picture of the author"
                                        width={450}
                                        height={200}
                                    />
                                    <a href="#">
                                        <h3 className="mt-4 text-center text-lg font-medium text-gray-900">
                                            User 1
                                        </h3>
                                    </a>


                                </div>
                            </article>

                            <article
                                className="rounded-xl bg-gradient-to-r  from-green-300 via-blue-500 to-purple-600 p-2 shadow-xl transition hover:animate-background hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s]"
                            >
                                <div className=" bg-white sm:p-6">

                                    <Image
                                        src={NFTimage}
                                        alt="Picture of the author"
                                        width={450}
                                        height={200}
                                    />
                                    <a href="#">
                                        <h3 className="mt-4  text-center  text-lg font-medium text-gray-900">
                                            User 2
                                        </h3>

                                    </a>


                                </div>
                            </article>

                        </div>

                        <div className="mt-8 text-center align-middle">
                            <a href="#_" class="relative m-1 inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out rounded-full shadow-xl group hover:ring-1 hover:ring-purple-500">
                                <span class="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-600 via-purple-600 to-violet-400"></span>
                                <span class="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-pink-500 rounded-full opacity-30 group-hover:rotate-90 ease"></span>
                                <span class="relative text-white">Join Room</span>
                            </a>

                            <a href="#_" class="relative m-1 inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out rounded-full shadow-xl group hover:ring-1 hover:ring-purple-500">
                                <span class="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-600 via-purple-600 to-violet-400"></span>
                                <span class="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-pink-500 rounded-full opacity-30 group-hover:rotate-90 ease"></span>
                                <span class="relative text-white">Enable Cam</span>
                            </a>

                            <a href="#_" class="relative m-1 inline-flex items-center justify-center p-4 px-10 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out rounded-full shadow-xl group hover:ring-1 hover:ring-purple-500">
                                <span class="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-600 via-purple-600 to-violet-400"></span>
                                <span class="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-pink-500 rounded-full opacity-30 group-hover:rotate-90 ease"></span>
                                <span class="relative text-white">Skip</span>
                            </a>
                        </div>
                    </div>
                </figure>
            </div>
        </div>
    </>
}
