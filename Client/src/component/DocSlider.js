import './DocSlider.css';
import DocSliderOriginal from "../assets/DocSliderOrg.png";
import DocSliderHover from "../assets/DocSliderHover.png";
import {useState} from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

function DocSlider() {
  const [backgroundImage, setBackground] = useState('backgrounds/DocSliderOrg.png');
  return (
    <div className="DocSlider position-relative"  style={{ height:'110vh', backgroundImage:`url(${backgroundImage})`}}>
        <div className="position-absolute w-100 h-100 left-0 top-0">
            <div className="row m-0 w-100 h-100" style={{padding: '3%'}}>
                <div className="d-none d-md-block col-xl-8 col-md-6">

                </div>  
                <div className="col-xl-4 col-md-6 col-xs-12 DocSliderCarousel d-flex align-items-center" style={{backgroundColor: '#0201018A'}} 
                     onMouseOver={() => {setBackground('backgrounds/DocSliderHover.png')}} 
                     onMouseLeave={() => {setBackground('backgrounds/DocSliderOrg.png')}} 
                     >
                    <Carousel autoPlay={false} infiniteLoop={true} swipeable={true} emulateTouch={true} showArrows={true}  showStatus={false} showIndicators={false} showThumbs={false} interval={5000} transitionTime={1000}>
                        <div className='text-white text-start carousel-li-container' style={{height: '100%', display: 'flex', alignItems:'center', justifyContent:'center' }}>
                          <div>
                            <h1 className='sms-perrter doc-slider-header'>Governance</h1>
                            <p className='doc-slider-content'>
                              <span style={{color: 'rgb(255, 196, 0)'}}>Community Driven</span> System
                              <br/>
                              <br/>
                              Decentralized Fair Governance
                              <br/>
                              <br/>
                              Based on:
                              <br/>
                              <span style={{color: 'rgb(255, 196, 0)'}}>Constitutions </span> and <span style={{color: 'rgb(255, 196, 0)'}}>Manifestos </span> 
                            </p>
                            <button className="slider-button">Governance Doc</button>
                          </div>
                        </div>
                        <div className='text-white text-start carousel-li-container' style={{height: '100%', display: 'flex', alignItems:'center', justifyContent:'center' }}>
                          <div>
                            <h1 className='sms-perrter doc-slider-header'>Economy</h1>
                            <p className='doc-slider-content'>
                              Dual Token Model
                              <br/>
                              <br/>
                              <span style={{color: 'rgb(255, 196, 0)'}}>$ARPG </span>
                              <br/>        
                              Governance and Staking
                              <br/>
                              <br/>
                              <span style={{color: 'rgb(255, 196, 0)'}}>$SOULS </span>
                              <br/>              
                              In-Game Currency
                            </p>
                            <button className="slider-button">Tokenomics Doc</button>
                          </div>
                        </div>
                        <div className='text-white text-start carousel-li-container' style={{height: '100%', display: 'flex', alignItems:'center', justifyContent:'center' }}>
                          <div>
                            <h1 className='sms-perrter doc-slider-header'>The Game</h1>
                            <p className='doc-slider-content'>
                              Hack-and-slash ARPG
                              <br/>
                              <br/>
                              <span style={{color: 'rgb(255, 196, 0)'}}>Every run is meaningful </span> 
                              <br/>
                              <br/>
                              7 Levels Dungeon Crawler Generator
                              <br/>
                              <br/>
                              <span style={{color: 'rgb(255, 196, 0)'}}>Succeed</span> or <span style={{color: 'rgb(255, 196, 0)'}}>Lose </span> Item System
                            </p>
                            <button className="slider-button">Game Design Doc</button>
                          </div>
                        </div>
                    </Carousel>
                </div>
            </div>
        </div>
    </div>
  );
}

export default DocSlider;
