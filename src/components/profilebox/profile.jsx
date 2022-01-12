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
          <div className='line'></div>
        </div>
        
    )
}

function Balancebox() {
    return (
        <div className='balancebox'>
            <p>Total Balance</p>
           <h2>$20,183</h2>
           <span className='usd'>USD</span>
           <div>
               <div className="date">
                    <span>Date</span>
                    <span>8/24</span>
               </div>
               <div className="status">
                    <span>Card status</span>
                    <span className='active'>Active</span>
               </div>
           </div>
           <div className="button">
               <button> <ArrowUpward className='arrowup' /> <span className='btnsend'>Send</span></button>
               <button> <ArrowDownward className='arrowdown'/> <span className='btnreceive' >Receive</span></button>
           </div>
        </div>
    )
}
function Recentpayment() {
    return (
        <div className='paymentbox'>
           <div className='recenttitle'>
                <h3>Recent</h3>
                <div className="paymentIcon">
                    <Delete/>
                    <MoreVert/>
                </div>
               
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
            <div className="spendingmoney">
                <span>$599.00</span>
                <span>5 jan, 2022</span>
            </div>   
          
        </div>
    )
}
