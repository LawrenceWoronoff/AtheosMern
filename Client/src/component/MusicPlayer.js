import './MusicPlayer.css';
import {useState, useEffect, useRef} from "react";
import musicBoy from "../assets/musicBoy.png";
import musicPlayerBack from "../assets/musicPlayerBack.png";
import musicPlayerBackSmall from "../assets/musicPlayerBackSmall.png";
import {FaStepBackward, FaPlay, FaPause, FaStepForward} from "react-icons/fa";
import {BiCollapse} from "react-icons/bi";
import {FaMusic} from "react-icons/fa";

import musicPrevBtn from "../assets/Music_previous.png";
import musicPlayBtn from "../assets/Music_Play.png";
import musicPauseBtn from "../assets/Music_pause.png";
import musicNextBtn from "../assets/Music_next.png";


function MusicPlayer() {
  const [musicOpen, setMusicOpen] = useState(false);
  const [musicPlay, setMusicPlay] = useState(false);
  const [index, setIndex]         = useState(0);
  const songs = [
    'BackgroundMusic1.mp3',
    'music_2.mp3',
    'Test Audio2.mp3',
  ];

  useEffect(() => {
    for(let i = 0; i < songs.length; i++){
      let audioDom = document.getElementById(`song${i}`);
      audioDom.pause();
    }
    if(musicPlay){
      let audioDom = document.getElementById(`song${index}`);
      audioDom.currentTime = 0;
      audioDom.play();
    }
  }, [index, musicPlay]);

  const OpenMusicPlayerLayout = () => {
    if(!musicOpen){
      setMusicOpen(true);
    }
  }
  const toogleMusicPlayerLayout = () => {
    if(!musicOpen){
      setMusicOpen(true);
    } else {
      setMusicOpen(false);
    }
  }

  const toogleMusicStatus = () => {
    if(!musicPlay){
      setMusicPlay(true);
    } else {
      setMusicPlay(false);
    }
  }

  const changeMusic = (offset) => {
    if(index + offset < 0 || index + offset > songs.length - 1)
      return;
    
    setIndex(index + offset); 
  }

  return (
    <div className="MusicPlayer position-fixed d-flex justify-content-center" onClick={OpenMusicPlayerLayout}>
      <div className='d-flex justify-content-center position-relative' style={{height: '75px', paddingLeft: `${musicOpen ? '130px' : '110px'}`}}>
        

        <img className='position-absolute music-back top-0 start-0 w-100' style={{zIndex: '-1'}} src={!musicOpen ? musicPlayerBackSmall : musicPlayerBack}/>
        <img className={`position-absolute music-boy ${musicOpen ? 'extend' : ''}`} style={{zIndex: 1, left: '5px'}} src={musicBoy}/>
        <div style={{width: '20px'}}>
          {
            songs.map((song, index) => {
              return <audio id={`song${index}`} src={`/music/${song}`} key={index}/>
            })
          }
        {/* <audio autoPlay src='/music/BackgroundMusic1.mp3'/> */}
          <div id="preloader_1" style={{display: `${musicOpen && musicPlay ? 'block' : 'none'}`}}>
              <span></span>
              <span></span>
              <span></span>
          </div> 
        </div>
        <div className='justify-content-center align-items-center text-white music-title' style={{display: `${musicOpen && musicPlay ? 'flex' : 'none'}`}}>
            <p style={{margin:'0px 20px'}}>{songs[index].substring(0, songs[index].length - 4)}</p>
        </div>
        <div className='justify-content-center' style={{padding:'25px 20px 20px 20px', display: `${musicOpen ? 'flex' : 'none'}`}}>
          <div className='musicButton mx-3'>
            <img className="music-icon" src={musicPrevBtn} onClick={() => {changeMusic(1)}} alt=""/>
          </div>
          <div className='musicButton mx-3'>
            {
              !musicPlay &&
              <img className="music-icon" src={musicPlayBtn} onClick={toogleMusicStatus} alt=""/>
            }
            {
              musicPlay &&
              <img className="music-icon" src={musicPauseBtn} onClick={toogleMusicStatus} alt=""/>
            }
          </div>
          <div className='musicButton mx-3'>
            <img className="music-icon" src={musicNextBtn} onClick={() => {changeMusic(1)}} alt=""/>
          </div>          
        </div>
        <div className='position-absolute toogle-music' onClick={toogleMusicPlayerLayout}>
            {
            !musicOpen &&
            <FaMusic/>
            }
            {
            musicOpen &&
            <BiCollapse/>
            }
        </div>
      </div>
    </div>
  );
}

export default MusicPlayer;

