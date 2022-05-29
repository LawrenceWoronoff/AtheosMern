import './VideoPopUp.css';
import {useState, useEffect, useRef} from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import videoFile from "../assets/Atheos-2022.mp4";
import { useSelector, useDispatch } from 'react-redux';
import { videoActions } from '../_actions';

function VidoePopUp() {
  const {video_open} = useSelector((state) => state.rootReducer.chracter_reducer);
  const dispatch = useDispatch();

  const closeVideoWindow = () => {
    dispatch(videoActions.videoOpenTrigger(false));
    let video = document.getElementById("popupVideo");
    video.pause();
  }

  useEffect(() => {
    let video = document.getElementById("popupVideo");
    
    if(video_open == true){
      video.load();
      video.play();
    } else {
      video.pause();
    }
  }, [video_open]);

  return (
    <div className={`VidoePopUp position-fixed top-0 left-0 w-100 ${video_open ? 'd-flex' : 'd-none'} justify-content-center`}>
       <div className='w-100  d-sm-flex'>
          <video
          id="popupVideo"
          autoPlay
          // loop
          // muted
          src={videoFile} 
          style={{ width: '100%', height:'auto', zIndex:'1000'}}/>
       </div>
       <AiOutlineCloseCircle onClick={closeVideoWindow}/>
    </div>
  );
}

export default VidoePopUp;

