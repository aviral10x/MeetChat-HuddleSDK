import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/header'
import Hero from '../components/hero'
import Matching from '../components/matching'
import Holding from '../components/holding'

const Match = () => {
    return (
        <div >
            <Header />
            <Matching />
           
            <Head>
                <title>Meet3Club</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

        </div>
    )
}

export default Match

