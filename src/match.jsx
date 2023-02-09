import Header from './components/header'
import Matching from './components/matching'

const Match = () => {
    return (
        <div className='h-screen bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-900 via-gray-900 to-black'>
            <Header />
            <Matching />
            <div>
                <title>Meet3Club</title>
                <link rel="icon" href="/favicon.ico" />

            </div>
        </div>
    )
}

export default Match

