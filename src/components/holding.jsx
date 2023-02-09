import React, { useEffect, useState } from "react";

const NFTs = (props) => {
    let [users, setUsers] = useState([]);

    const uri = "https://api.nftport.xyz/v0/accounts/" + "0x30BCD2e90B3C05e54446568d823408B2ddfa7A01" + "?chain=polygon&include=metadata"
    // const uri = "https://api.nftport.xyz/v0/accounts/" + props.address + "?chain=polygon&include=metadata"

    const getNfts = async () => {
        fetch(
            uri,
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: "42ec3f01-50a1-4d70-ab64-68582bcff6e2",
                },
            }
        )
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                console.log(data.nfts);
                setUsers(data.nfts);
            })
            .catch((err) => {
                console.error(err);
            });
    };

    useEffect(() => {
        getNfts();
    }, []);

    return <>


        <div className="items-center mt-2 md:mb-12 md:grid-cols-2 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-900 via-gray-900 to-black">
            <figure className="flex flex-col items-center justify-center  p-5 m-5">

                <div className="max-w-l ">
                    <div>
                        <h5 className="mb-1 text-center font-polySans text-2xl font-bold tracking-tight text-gray-100 dark:text-white">My Holdings</h5>
                    </div>

                    {/* <img src={require('../static/meet3club.png')} /> */}

                    <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-16 lg:grid-cols-3">
                        {users.map((currlem) => {
                            if (currlem.cached_file_url != null) {
                                return (
                                    <article
                                        className="rounded-xl bg-gradient-to-r  from-green-300 via-blue-500 to-purple-600 p-2 shadow-xl transition hover:animate-background hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s]"
                                    >

                                        <div className=" bg-white sm:p-6">
                                            <img src={currlem.cached_file_url} alt={currlem.name}
                                                decoding="async" data-nimg="fill"
                                                style={{ width: "100%", height: "50vh", objectFit: 'cover' }}
                                                sizes="(max-width: 600px) 200px, 380px"
                                                width='350' height='344'
                                            />

                                            {/* <Image
                                                src={currlem.cached_file_url}
                                                
                                                width="350"
                                                height="390"
                                                // loading='lazy'
                                                // fill
                                                style={{ objectFit: "cover" }}

                                            /> */}

                                            <div>
                                                <h3 className="mt-2 text-lg font-medium text-gray-900">
                                                    {currlem.name}
                                                </h3>
                                            </div>
                                        </div>
                                    </article>
                                );
                            }
                        })}
                    </div>
                </div>

            </figure>
        </div>
    </>


};
export default NFTs;
