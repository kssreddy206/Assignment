import React, { useState } from 'react'
import '../HomePage/HomePage.css';
import ReactAudioPlayer from 'react-audio-player';
import wheelerImg  from '../../assets/images/Picsart_22-11-24_12-14-54-912-removebg-preview.png';
import congratulations from '../../assets/Music/Congratulations.mp3';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function FinalPage({reward}) {
  const [randomValue,setRandomValue] = useState(`GRE2ES1${Math.round(Math.random()*100)}`);

 
  return (
    <>
    <div className={`homePage_container bg-[#CADB7F] h-full w-full`}>
      <ReactAudioPlayer
          src={congratulations}
          autoPlay={true}
          volume={0.5}
        />
        <div className={`left_container`}>
            <img src={wheelerImg} alt="wheelerImg" className='w-[400px] h-[400px]'/>
        </div>
        <div className={`right_container`}>
          <div style={{display:'flex',flexFlow:'column', gap:'22px'}}>
                  <div style={{display:'flex',justifyContent:'center',color:'black',fontWeight:'bold'}}><h2>Congrats! You Won:</h2></div>
                  <div style={{display:'flex',justifyContent:'center',fontWeight:'bold',fontSize:'26px',textAlign:'center'}}><h1>{reward?reward:'20% Off Coupon on Best Sellers'}</h1></div>
                  <div style={{display:'flex',flexFlow:'row', justifyContent:'center',color:'#ffff'}}>
                      <div style={{height:'70px',display:'flex',justifyContent:'center',alignItems:'center', padding:'1px 8px 8px 8px',borderBottomLeftRadius:'10px',borderTopLeftRadius:'10px',backgroundColor:'#14141433'}}>
                        <span style={{fontSize:'42px',color:'#ffff',fontWeight:'bold'}}>{`${randomValue}`}</span>
                        <span style={{fontSize:'42px',color:'#ffff',fontWeight:'bold'}}></span>
                      </div>
                      <div onClick={()=>{navigator.clipboard.writeText(`${randomValue}`)}} style={{cursor:'pointer',padding:'10px',borderBottomRightRadius:'10px',borderTopRightRadius:'10px',backgroundColor:'#146531',display:'flex',justifyContent:'center',alignItems:'center'}}>
                        <span style={{fontSize:'32px',color:'#ffff',fontWeight:'bold'}} title='Copy'>Copy</span>
                      </div>
                  </div>
                  <div style={{display:'flex',justifyContent:'center'}}>
                    <button
                    title='Copy'
                     onClick={()=>{
                      navigator.clipboard.writeText(`${randomValue}`,
                      toast("Copied!!"));
                      }} style={{cursor:'pointer',width:'310px',height:'60px',display:'flex',alignItems:'center',justifyContent:'center', borderRadius:'50px',backgroundColor:'#146531',color:'#ffff',fontWeight:'bold',fontSize:'20px'}}>Close Panel & Copy</button>
                      <ToastContainer />
                  </div>
                  <div style={{display:'flex',justifyContent:'center'}}><i style={{fontSize:'10px',color:'#146531'}}>*You can claim your coupon for 10 minutes only!</i></div>
            </div>          
        </div>
     </div>
    </>
  )
}
