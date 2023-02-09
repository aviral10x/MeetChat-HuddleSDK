import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/header'
import Hero from '../components/hero'
import Meet from '../components/meet'
import Holding from '../components/holding'

const Meeting= () => {
    return (
        <div >
            <Header />
           <Meet />
           <Holding />
            <Head>
                <title>Meet3Club</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
        </div>
    )
}

export default Meeting

