import React from 'react';
import './profile.css';
import {PersonOutline,ArrowUpward, ArrowDownward,Delete, MoreVert, Add } from '@material-ui/icons/';


export default function Profile() {
    return (
        <div className='profilebox'>
            <div className='profile'>
                <div className="profilepicture"></div>
                <h3>Emma Heikkinen</h3>
                <div className="profileIcon">
                <PersonOutline/><p>Profile</p>
                </div>
          </div>
          <Balancebox/>
          <Recentpayment/>
        </div>
        
    )
}

function Balancebox() {
    return (
        <div className='balancebox'>
            <span>Total Balance</span>
           <h2>$20,183</h2>
           <span>USD</span>
           <div>
               <div className="date">
                    <span>Date</span>
                    <span>8/24</span>
               </div>
               <div className="status">
                    <span>Card status</span>
                    <span>Active</span>
               </div>
           </div>
           <div className="button">
               <button> <ArrowUpward/> Send</button>
               <button> <ArrowDownward/> Receive</button>
           </div>
        </div>
    )
}
function Recentpayment() {
    return (
        <div className='paymentbox'>
           <div>
                <h3>Recent</h3>
                <Delete/>
                <MoreVert/>
            </div> 
            <div className='Avataruser'>
            
                <div className="FirstAvatar"></div>
                <div className="SecondAvatar"></div>
                <div className="ThirdAvatar"></div>
                <div className="FourthAvatar"></div>
                <div className="addAvatar">
                        <Add className="paymentIcon"/>
                </div>
                       
        
            </div>      
          
        </div>
    )
}
