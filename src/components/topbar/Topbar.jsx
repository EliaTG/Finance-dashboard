import React from 'react'
import './topbar.css'
import {Search, Notifications, Brightness2, WbSunny} from '@material-ui/icons/';

export default function Topbar() {
    return (
        <div className='topbar'>
           <div className="topbarwrapper">
                <div className="topleft">
                    <span className="logo">Dashboard</span>
                </div>
                <div className="topright">
                     <div className="topbarIcons">
                        <Search/>
                     </div>

                     <div className="topbarIcons">
                        <Notifications/>
                        <span className="topIconBag">2</span>
                     </div>

                     <div className="Darkmode">
                         <Brightness2 className='dark'/>
                         <WbSunny className='light'/> 
                     </div>
                   
                </div>
           </div>
          
        </div>
    )
}


