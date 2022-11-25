import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import WheelComponent from 'react-wheel-of-prizes'
// import Sound from 'react-sound';
import ReactAudioPlayer from 'react-audio-player';
import congratulations from '../../assets/Music/Congratulations.mp3';
import './MainPage.css';

export default function MainPage({setReward}) {
  const [playBgm, setPlayBgm] = useState(false);

  const segments = [
    'HOT CHOCLATE FREE WITH TEA',
    '30% SITEWIDE OFF',
    'BUY 1 GET 1 FREE',
    'FREE COFFEE MUG  ON PURCHASE WORTH 1000+',
    ' Buy 2 Effervescent tablets & get 1 free',
    'Free 50g tea on purchase of Rs. 500',
  ]
  const segColors = [
    '#EFEFD1',
    '#E50101 ',
    '#EFEFD1',
    '#E50101 ',
    '#EFEFD1',
    '#E50101 '
  ]

  const navigate = useNavigate();
  const onFinished = (winner) => {
    setReward(winner);
    setTimeout(()=>{
      navigate('/finalPage');
    },3000)
  }
  return (
    <>
    <div className={`mainPage_container bg-[#CADB7F] h-full w-full`}>
        {/* <Sound url={congratulations} playStatus={true} playFromPosition={10} /> */}
        <div className={`mainPageDiv`}>
            {/* <img src={wheelerImg} alt="wheelerImg" className='w-[400px] h-[400px]'/> */}
            <WheelComponent
              segments={segments}
              segColors={segColors}
              winningSegment='won 10'
              onFinished={(winner) => {onFinished(winner)}}
              primaryColor='black'
              contrastColor='white'
              buttonText='SPIN'
              isOnlyOnce={true}
              size={290}
              upDuration={70}
              downDuration={90}
              fontFamily='Arial'
            />
            <div className='spinButton_container'>
              <button onClick={()=>{}} className='spinButton'>Spin</button>
            </div>
        </div>
      </div>
    </>
  )
}
