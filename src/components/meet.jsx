import React from "react";


export default function Meet() {
    return <>

        <div className=" w-screen items-center mb-10 pt-10 mt-10 md:mb-12 md:grid-cols-2 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-900 via-gray-900 to-black">
            <figure className="flex flex-col items-center justify-center  p-5 m-5">

                <div className="max-w-l p-10 align-middle text-center bg-purple-700 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <div>
                        <div className="md:mt-4 md:mb-8 mb-6 md:pb-2 bg-gradient-to-r from-[#fff] via-[#fff]/80 to-[#9d9ea1]/50 bg-clip-text 
text-transparent xl:text-[5rem] md:text-6xl font-extrabold font-polySans md:max-w-5xl text-center text-[28px] max-w-[375px]">
                            Click On Your NFT Holdings To Make A Call</div>
                        {/* <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Click On Your NFT Holdings To Make A Call</h5> */}
                    </div>
                    <p className="mb-3 font-normal text-center text-gray-300 dark:text-gray-400">Let's Start To Connect With People</p>
                    <a href="/match" className="inline-flex justify-center align-middle items-center p-5 text-sm font-medium text-center text-white bg-black rounded-lg hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Jump Singapore Exclusive Chat Room
                        <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </a>
                </div>

            </figure>
        </div>
    </>
}
