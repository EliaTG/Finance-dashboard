import React from 'react';
import Topbar from './components/topbar/Topbar';
import Sidebar from './components/sidebar/Sidebar';
import Profile from './components/profilebox/Profile';
import './App.css';

function App() {
    return (
        <div className="container">
            <Sidebar/>
            <Profile/>
            <Topbar/>
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
