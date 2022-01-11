import React from 'react';
import Topbar from './components/topbar/Topbar';
import Sidebar from './components/sidebar/Sidebar';
import Profile from './components/profilebox/Profile';
import Chart from './components/chart/chart';
import Home from './pages/Home'
import './App.css';

function App() {
    return (
        <div>
            <Topbar/>
            <div className="container">
                <Sidebar/>
                <Home/>
            </div>

            {/* <div className="hero">
                <Home/> */}
                 {/* <Profile className='item-1'/> */}
                 {/* <Chart  className='item-2'/> */}
            {/* </div> */}
            {/* <div className='container'>
                <Sidebar/>
                <div className='others'>
                    <Profile/>
                </div>
            </div> */}
        </div>
    )
}
export default App;
