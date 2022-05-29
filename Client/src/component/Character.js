import './Character.css';
import characterVideo from "../assets/Character.webm";
import commanderVideo from "../assets/commander.webm";
import logoHero from "../assets/Logo.webp";
import hoverText from "../assets/HoverText.png";
import hoverTextSM from "../assets/HoverTextSM.png";

import playVideo from "../assets/playVideo.png";
import {useState} from "react";
import { videoActions } from '../_actions';
import { useDispatch } from 'react-redux';

function Character() {
  const [showText, setShowText] = useState(false);
  const dispatch = useDispatch();

  const videoToogle = () => {
    dispatch(videoActions.videoOpenTrigger(true))
  }
  return (
    <div className="Character position-relative">
      <video className="d-only-sm-hide position-absolute characterVideo"
          autoPlay
          loop
          muted
          src={characterVideo} />
      <div className="position-relative" style={{zIndex: 1001}}>
        <div className="chapterSection">
          <div className="row h-sm-100 m-0">
            <div className="d-only-sm-hide" style={{width:'45%'}}>
              <video className="position-relative"
                autoPlay
                loop
                muted
                src={commanderVideo} 
                style={{ width: '100%', height:'auto', marginLeft: '8%'}}/>
            </div>
            <div className="position-relative right-section">
              <div className='position-relative'>
              <img
                className='logoHero'
                src={logoHero}
                alt="Logo Hero"
                onMouseOver={() => {setShowText(true)}}
                onMouseLeave={() => {setShowText(false)}}
              />
              {
              showText &&
              <img
                className='position-absolute hoverText d-only-sm-hide'
                alt = "Hover Text"
                src={hoverText}
                onMouseOver={() => {setShowText(true)}}
                onMouseLeave={() => {setShowText(false)}}
              />
              }
              {
              showText &&
              <img
                className='position-absolute hoverText d-only-sm-show'
                alt = "Hover Text"
                src={hoverTextSM}
                onMouseOver={() => {setShowText(true)}}
                onMouseLeave={() => {setShowText(false)}}
              />
              }
              </div>
              <div className="quote-group">
                <p className="text-white quote quote-1">How long has it been?</p>
                <p className="text-white quote quote-2">...This is forever pain.</p>
                <p className="text-white quote quote-3">through endless loss, white having nothing.</p>
                <p className="text-white quote quote-4">In The Binding Dark.</p>
              </div>
            </div>
          </div>
          <div className='playVideoContainer'>
            <img
                alt = "Play video"
                className="playVideo"
                src={playVideo}
                onClick={videoToogle}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Character;
