import React from 'react';
import Topbar from './components/topbar/Topbar';
import Sidebar from './components/sidebar/Sidebar';
import Profile from './components/profilebox/profile';
import './App.css';

function App() {
    return (
        <div>
            <Topbar/>
            <div className='container'>
                <Sidebar/>
                <div className='others'>
                    <Profile/>
                </div>
            </div>
        </div>
    )
}
export default App;
