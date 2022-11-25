import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
// import {Link} from "react-router-dom";
import './HomePage.css';
import wheelerImg  from '../../assets/images/Picsart_22-11-24_12-14-54-912-removebg-preview.png'

export default function HomePage() {
    const [checkBox,setCheckBox] = useState(false);
    const navigate = useNavigate();
    const formSubmit = (event)=>{
        event.preventDefault();
        navigate('/mainPage');
    }
  return (
    <div className={`homePage_container bg-[#CADB7F] h-full w-full`}>
        <div className={`left_container`}>
            <img src={wheelerImg} alt="wheelerImg" className='w-[400px] h-[400px]'/>
        </div>
        <div className={`right_container`}>
            <div className='sub_container'>
                <div>
                    <center>
                    <h2>EngageBud Spin-Wheel</h2>
                    </center>
                </div>
                <form onSubmit={formSubmit} className='flex flex-col' style={{display:'flex',flexFlow:'column', gap:'22px'}}>
                    <div style={{display:'flex',flexFlow:'row', gap:'2px',justifyContent:'flex-start'}}>
                        
                        <span style={{width:'100%'}}><p>Email</p> <input style={{paddingLeft:'5px',borderRadius:'4px'}} type="email" onChange={()=>{}} required/></span>
                    </div>
                    <div style={{display:'flex',flexFlow:'row', gap:'2px',justifyContent:'flex-start'}}>
                        
                        <span style={{width:'100%'}}><p>Password</p> <input style={{paddingLeft:'5px',borderRadius:'4px'}} type="mobile" onChange={()=>{}} required/></span>
                    </div>
                    <div className='checkBox_container_parent my-[16px] w-full flex justify-between'>
                        <span style={{border:'1px solid black',borderRadius:'3px',margin:'4px',backgroundColor:`${checkBox?'#ffff':'black'}`}} className='checkBox_container agreeBox' onClick={()=>{setCheckBox(!checkBox)}}>
                            <input className='checkBox' type="checkbox" required/>
                        </span>
                        <span>
                        I agree to receiving recurring automated messages at the <br/> number I have provided. <br/>
                        Consent is not a condition to purchase.
                        </span>
                    </div>
                    <div className='mt-[16px] w-full'>
                        <button type='submit' className='tryButton w-full h-[50px] bg-[#146531] text-[#ffff]'>Try your luck</button>
                    </div>
                </form>
                <div>
                    <div style={{fontSize:'9px'}}>
                        <span>*You can spin the wheel only once!</span>
                        <span>*If you win, you can claim your coupon for 10 minutes only!</span>
                    </div>
                    <div style={{width:'full',display:'flex',justifyContent:'flex-end',padding:'16px 0px'}}>
                        <span>No, I don’t feel lucky</span>
                        <span style={{cursor:'pointer',margin:'0px 3px'}} onClick={()=>{}}>
                            <i style={{fontSize:'22px'}} className="fa fa-times" aria-hidden="true"></i>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
