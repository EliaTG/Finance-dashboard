import React from 'react';
import './sidebar.css';
import {Home, SwapVert,Timeline, Notifications, Settings, ExitToApp, Add} from '@material-ui/icons/';

function Sidebar() {
    return (
        <div className='sidebar'>
            <div className="sidebarWrapper">
                    <div className="sidebarAccount">
                        <div className="topAvatar"></div>
                        <div className="bottomAvatar"></div>
                        <div className="addAccount">
                            <Add className="sidebarIcon"/>
                        </div>
                       
                    </div>
                    <div className="sidebarMenu">
                        <ul className="sidebarList">
                            <li className="sidebarListItem active">
                              <Home className="sidebarIcon"/>
                            </li>
                            <li className="sidebarListItem">
                              <Timeline className="sidebarIcon"/>
                            </li>
                            <li className="sidebarListItem">
                              <SwapVert className="sidebarIcon"/>
                            </li>
                            <li className="sidebarListItem">
                              <Notifications className="sidebarIcon"/>
                              <span className="topIconSidebar">2</span>
                            </li>
                        </ul>
                             <div className="BottomMenu">
                                    <li className='sidebarListItem'>
                                        <Settings className="sidebarIcon"/>
                                    </li>
                                    <li className='sidebarListItem'>
                                        <ExitToApp className="sidebarIcon"/>
                                    </li>
                             </div>

                    </div>
            </div>
        </div>
    )
}

export default  Sidebar;