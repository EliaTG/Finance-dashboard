import React from 'react';
import './profile.css';
import {PersonOutline} from '@material-ui/icons/';


export default function Profile() {
    return (
        <div className='profile'>
            <div className="profilepicture"></div>
            <h3>Emma Heikkinen</h3>
            <div className="profileIcon">
            <PersonOutline/><p>Profile</p>
            </div>
           
        </div>
    )
}
