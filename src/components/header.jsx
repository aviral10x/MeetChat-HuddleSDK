import React, { useEffect, useState } from "react";
import { Outlet, Link } from "react-router-dom";
import Logo from '../static/meet3club.png'
// import { ethers } from 'ethers';
// import { Contract, providers } from "ethers";
// import wallet from "./wallet";


export default function Header() {
    // const [errorMessage, setErrorMessage] = useState(null);
    // const [account, setAccount] = useState(null);
    // const [balance, setBalance] = useState(null);

    // useEffect(() => {
    //     if (window.ethereum) {
    //         window.ethereum.on("accountsChanged", accountsChanged);
    //         window.ethereum.on("chainChanged", chainChanged);
    //     }
    // }, []);

    // const connectWallet = async () => {
    //     if (window.ethereum) {
    //         try {
    //             const res = await window.ethereum.request({
    //                 method: "eth_requestAccounts",
    //             });
    //             await accountChange(res[0]);
    //         } catch (err) {
    //             console.error(err);
    //             setErrorMessage("There was a problem connecting to MetaMask");
    //         }
    //     } else {
    //         setErrorMessage("Install MetaMask");
    //     }
    // };

    // const accountsChanged = async (newAccount) => {
    //     setAccount(newAccount);
    //     try {
    //         const balance = await window.ethereum.request({
    //             method: "eth_getBalance",
    //             params: [newAccount.toString(), "latest"],
    //         });
    //         setBalance(ethers.utils.formatEther(balance));
    //     } catch (err) {
    //         console.error(err);
    //         setErrorMessage("There was a problem connecting to MetaMask");
    //     }
    // };

    // const chainChanged = () => {
    //     setErrorMessage(null);
    //     setAccount(null);
    //     setBalance(null);
    // };


    // const [currentAccount, setCurrentAccount] = useState('');
    // const [network, setNetwork] = useState('');
    // // Implement connectWallet method
    // const connectWallet = async () => {
    //     try {
    //         const { ethereum } = window;

    //         if (!ethereum) {
    //             alert("Get MetaMask -> https://metamask.io/");
    //             return;
    //         }
    //         const accounts = await ethereum.request({ method: "eth_requestAccounts" });

    //         // Boom! This should print out public address once we authorize Metamask.
    //         console.log("Connected", accounts[0]);
    //         setCurrentAccount(accounts[0]);
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }

    // const checkIfWalletIsConnected = async () => {
    //     const { ethereum } = window;

    //     if (!ethereum) {
    //         console.log('Make sure you have metamask!');
    //         return;
    //     } else {
    //         console.log('We have the ethereum object', ethereum);
    //     }

    //     const accounts = await ethereum.request({ method: 'eth_accounts' });

    //     if (accounts.length !== 0) {
    //         const account = accounts[0];
    //         console.log('Found an authorized account:', account);
    //         setCurrentAccount(account);
    //     } else {
    //         console.log('No authorized account found');
    //     }

    //     // This is the new part, we check the user's network chain ID
    //     const chainId = await ethereum.request({ method: 'eth_chainId' });
    //     setNetwork(networks[chainId]);

    //     ethereum.on('chainChanged', handleChainChanged);

    //     // Reload the page when they change networks
    //     function handleChainChanged(_chainId) {
    //         window.location.reload();
    //     }
    // };

    // const switchNetwork = async () => {
    //     if (window.ethereum) {
    //         try {
    //             // Try to switch to the Mumbai testnet
    //             await window.ethereum.request({
    //                 method: 'wallet_switchEthereumChain',
    //                 params: [{ chainId: '0x13881' }], // Check networks.js for hexadecimal network ids
    //             });
    //         } catch (error) {
    //             // This error code means that the chain we want has not been added to MetaMask
    //             // In this case we ask the user to add it to their MetaMask
    //             if (error.code === 4902) {
    //                 try {
    //                     await window.ethereum.request({
    //                         method: 'wallet_addEthereumChain',
    //                         params: [
    //                             {
    //                                 chainId: '0x13881',
    //                                 chainName: 'Polygon Mumbai Testnet',
    //                                 rpcUrls: ['https://rpc-mumbai.maticvigil.com/'],
    //                                 nativeCurrency: {
    //                                     name: "Mumbai Matic",
    //                                     symbol: "MATIC",
    //                                     decimals: 18
    //                                 },
    //                                 blockExplorerUrls: ["https://mumbai.polygonscan.com/"]
    //                             },
    //                         ],
    //                     });
    //                 } catch (error) {
    //                     console.log(error);
    //                 }
    //             }
    //             console.log(error);
    //         }
    //     } else {
    //         // If window.ethereum is not found then MetaMask is not installed
    //         alert('MetaMask is not installed. Please install it to use this app: https://metamask.io/download.html');
    //     }
    // }

    // // Render Methods
    // const renderNotConnectedContainer = () => (<>
    //     <div >
    //         <button onClick={connectWallet} className="px-3 py-2 flex items-center  uppercase font-bold leading-snug text-white hover:opacity-75 rounded-lg bg-black">
    //             Connect Wallet
    //         </button>
    //     </div>
    // </>
    // );

    // const renderConnectedContainer = () => {
    //     if (network !== 'Polygon Mumbai Testnet') {
    //         return (<>
    //             {/* This button will call our switch network function */}
    //             <button className='px-3 py-2 flex items-center  uppercase font-bold leading-snug text-white hover:opacity-75 rounded-lg bg-black' onClick={switchNetwork}>Switch Network</button>
    //         </>
    //         );
    //     }
    //     return (<div >
    //         <p className='px-3 py-2 flex items-center  font-bold leading-snug text-white hover:opacity-75 rounded-lg bg-black'> Wallet: {currentAccount.slice(0, 6)}...{currentAccount.slice(-4)} </p>
    //     </div>);
    // };
    // useEffect(() => {
    //     checkIfWalletIsConnected();
    // }, []);

    return <>

        <nav className="bg-black px-2 sm:px-4 py-2.5 dark:bg-black fixed w-full z-20 top-0 left-0 ">
            <div className="container flex flex-wrap items-center justify-between mx-auto">
                {/* <a href= className="flex items-center">
                
                </a> */}
                <img src={Logo} width={250} height={100} alt="meet3club logo"/>
                {/* <Image
                    src={Logo}
                    alt="Picture of the author"
                    width={250}
                    height={100}
                /> */}

                {/* <img src={Logo} className="h-6 mr-3 sm:h-9" */}
                <div className="flex md:order-2">
                    <button type="button"  className="text-white bg-purple-700 hover:bg-violet-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"> Connect Wallet </button>
                    <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                    </button>
                </div>
                {/* <p>Connected as: {account}</p> */}
                <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                    <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-black dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li>
                            <Link to="/" className="block py-2 pl-3 pr-4 text-white bg-white rounded md:bg-transparent md:text-white md:p-0 dark:text-white" >Home</Link>
                        </li>

                        <li>
                            <Link to="/meeting" className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Meeting</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <Outlet />

    </>
}