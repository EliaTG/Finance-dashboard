import Profile from '../components/profilebox/Profile.jsx'
import Tranhistory from '../components/transactionhistory/Tranhistory.jsx'
import './home.css'

export default function Home() {
    return (
        <div className='home'>
            <Profile/>
            <Tranhistory />

        </div>
    )
}
