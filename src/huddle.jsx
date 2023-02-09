import React, { useEffect, useState } from "react";
import { doc, setDoc, getDocs, updateDoc, collection, query, where, limit, onSnapshot } from "firebase/firestore";
import { myDatabase } from "./firebaseInit"
import { networks } from './utils/networks';

import {
  HuddleClientProvider,
  getHuddleClient,
} from "@huddle01/huddle01-client";

import { useHuddleStore } from "@huddle01/huddle01-client/store";
import PeerVideoAudioElem from "./components/PeerVideoAudioElem";
import MeVideoElem from "./components/MeVideoElem";

function Huddle() {
  const huddleClient = getHuddleClient("6cf466614f891d0d82f5ad03c58924894ee37accbea11efc08f63bdd0d30dfc9");
  const peersKeys = useHuddleStore((state) => Object.keys(state.peers));
  const lobbyPeers = useHuddleStore((state) => state.lobbyPeers);
  const roomState = useHuddleStore((state) => state.roomState);
  const recordingState = useHuddleStore((state) => state.recordingState);
  const recordings = useHuddleStore((state) => state.recordings);
  const [message, setMessage] = useState('');


  const [currentAccount, setCurrentAccount] = useState('');
  const [network, setNetwork] = useState('');
  const [status, setStatus] = useState(false);
  const [roomID, setRoomID] = useState('');
  const [isRoomCreated, setRoomCreated] = useState(false);

  const connectWallet = async () => {
    try {
      const { ethereum } = window;

      if (!ethereum) {
        alert("Get MetaMask -> https://metamask.io/");
        return;
      }
      const accounts = await ethereum.request({ method: "eth_requestAccounts" });
      console.log("Connected", accounts[0]);
      setCurrentAccount(accounts[0]);
    } catch (error) {
      console.log(error)
    }
  }

  const checkIfWalletIsConnected = async () => {
    const { ethereum } = window;

    if (!ethereum) {
      console.log('Make sure you have metamask!');
      return;
    } else {
      console.log('We have the ethereum object', ethereum);
    }

    const accounts = await ethereum.request({ method: 'eth_accounts' });

    if (accounts.length !== 0) {
      const account = accounts[0];
      console.log('Found an authorized account:', account);
      setCurrentAccount(account);
    } else {
      console.log('No authorized account found');
    }

    const chainId = await ethereum.request({ method: 'eth_chainId' });
    setNetwork(networks[chainId]);

    ethereum.on('chainChanged', handleChainChanged);

    function handleChainChanged(_chainId) {
      window.location.reload();
    }
  };

  const switchNetwork = async () => {
    if (window.ethereum) {
      try {
        await window.ethereum.request({
          method: 'wallet_switchEthereumChain',
          params: [{ chainId: '0x13881' }],
        });
      } catch (error) {
        if (error.code === 4902) {
          try {
            await window.ethereum.request({
              method: 'wallet_addEthereumChain',
              params: [
                {
                  chainId: '0x13881',
                  chainName: 'Polygon Mumbai Testnet',
                  rpcUrls: ['https://rpc-mumbai.maticvigil.com/'],
                  nativeCurrency: {
                    name: "Mumbai Matic",
                    symbol: "MATIC",
                    decimals: 18
                  },
                  blockExplorerUrls: ["https://mumbai.polygonscan.com/"]
                },
              ],
            });
          } catch (error) {
            console.log(error);
          }
        }
        console.log(error);
      }
    } else {
      alert('MetaMask is not installed. Please install it to use this app: https://metamask.io/download.html');
    }
  }

  // Render Methods
  const renderNotConnectedContainer = () => (<>
    <center>
      <div className="text-6xl pt-32">
        <button onClick={connectWallet} className="rounded-lg bg-yellow-400 hover:opacity-75 p-8">
          Connect Wallet
        </button>
      </div>
    </center>
  </>
  );
  const renderFinderContainer = () => {
    /////////////   THE FINDER CONTAINER   /////////////
    return (
      <div>
      <center>
      <div className="text-6xl px-32 py-32">
      <div className="text-zinc-900">{message}</div><br />
      <button onClick={findMatch}>Find a Match</button>
      </div>
      </center>
    </div>
    );
    /////////////  THE FINDER CONTAINER   /////////////
  }

  const renderMeetContainer = () => {
    /////////////   THE MEET CONTAINER   /////////////
    return (
      <div>
        <HuddleClientProvider value={huddleClient}>
          <center>
            Room ID : {roomID}
            <div className="">
              <div className="">
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

                                <MeVideoElem />
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
            
              </div>

              <div className="">
                <div className="">
                  {peersKeys.map((key) => (
                    <PeerVideoAudioElem key={`peerId-${key}`} peerIdAtIndex={key} />

                  ))}
                </div>
              </div>
            </div>
            <div className="">
              <button onClick={handleJoin}>Join Room</button>
              <button onClick={() => huddleClient.enableWebcam()}>
                Enable Webcam
              </button>
              <button onClick={() => huddleClient.disableWebcam()}>
                Disable Webcam
              </button>
              <button onClick={() => huddleClient.allowAllLobbyPeersToJoinRoom()}>
              allowAllLobbyPeersToJoinRoom()
            </button>
              <button onClick={() => handleSkip()}>
                Skip
              </button>
            </div>
          </center>
        </HuddleClientProvider>
      </div>
    );
    /////////////  THE MEET CONTAINER   /////////////
  }
  const renderConnectedContainer = () => {
    if (network !== 'Polygon Mumbai Testnet') {
      return (<>
        <center>
          <div className="text-6xl pt-32">
            <h2>Please switch to Polygon Mumbai Testnet</h2>
            <br />
            <button className='rounded-lg bg-yellow-400 hover:opacity-75 p-8' onClick={switchNetwork}>Click here to switch</button>
          </div>
        </center>
      </>
      );
    }
    return (<div >
      <div>
        {!status && renderFinderContainer()}
        {status && renderMeetContainer()}
      </div>
    </div>);
  };

  useEffect(() => {
    checkIfWalletIsConnected();
  }, []);

  useEffect(() =>{
    console.log(roomID, '- Room ID Has changed')
  }, [roomID])

  const findMatch = async () => {

    const q = query(collection(myDatabase, "Users"), where("status", "==", false), limit(1));
    const querySnapshot = await getDocs(q);
     console.log(querySnapshot.size)
    if (querySnapshot.size > 0) {
      querySnapshot.forEach((doc) => {
        if (doc.id != currentAccount) {
          setRoomID(doc.id)
          console.log(doc.id, " => ", doc.data().status);
          console.log("Found Room Match")
          console.log("Set Status to true")
        }
        else{
          createRoom();
        }

      });

      if(roomID != currentAccount){
        await updateDoc(doc(myDatabase, "Users", roomID), {
          status: true
        });
  
        setStatus(true)
        // huddleClient.enableWebcam()
        handleJoin()
        huddleClient.allowAllLobbyPeersToJoinRoom()
        console.log("joined --->" + roomID)
      }
      
    }
    else {
      console.log("Not Found")
      createRoom();
    }
  }

  const createRoom = async () => {
    await setDoc(doc(myDatabase, "Users", currentAccount), {
      type: "punk",
      status: false
    });

    setRoomID(currentAccount);

    console.log("Created Room" + roomID)

    console.log("Waiting for Participant")

    const unsub = onSnapshot(doc(myDatabase, "Users", currentAccount), (doc) => {
      console.log("Current data: ", doc.data());
      setMessage("waiting for participant to join")
      if (doc.data().status == true) {
        setMessage("")
        setStatus(true)
        huddleClient.enableWebcam()
        //handleJoin()
        //huddleClient.allowAllLobbyPeersToJoinRoom()
      }
    });
  }

  const handleSkip = async () => {
    setStatus(false);
    findMatch();
  };

  const handleJoin = async () => {
    try {
      await huddleClient.join(roomID, {
        address: currentAccount,
        wallet: currentAccount,
        ens: "axit.eth",
      });

      console.log("joined");
    } catch (error) {
      console.log({ error });
    }
  };

  return (
    <>
      <div>
        <center>
          {!currentAccount && renderNotConnectedContainer()}
          {currentAccount && renderConnectedContainer()}
        </center>
      </div>
    </>
  );
}


export default Huddle;
