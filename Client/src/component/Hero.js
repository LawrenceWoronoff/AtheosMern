import './Hero.css';
import carouselBox from "../assets/Carrusel-Box.png";
import {useEffect, useRef} from "react";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

function Hero() {
  const heroCarousel = useRef();
  const hero = useRef();

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', updateSize);
  }, []);

  const handleScroll = () => {
    const heroPositionTop = hero.current.getBoundingClientRect().top;
    const heroHeight = hero.current.getBoundingClientRect().bottom - hero.current.getBoundingClientRect().top;
    const carouselHeight = window.innerWidth > 768 ? 180 : 240;

    heroCarousel.current.style.top = (heroPositionTop  / 4 + heroHeight / 2 - carouselHeight / 2) + "px";
  }

  const updateSize = () => {
    const heroPositionTop = hero.current.getBoundingClientRect().top;
    const heroHeight = hero.current.getBoundingClientRect().bottom - hero.current.getBoundingClientRect().top;
    const carouselHeight = window.innerWidth > 768 ? 180 : 240;

    heroCarousel.current.style.top = (heroPositionTop  / 4 + heroHeight / 2 - carouselHeight / 2) + "px";
  }

  return (
    <div className="Hero position-relative d-flex align-items-center" ref={hero}>
        <div className="HeroCarousel position-absolute d-flex align-items-center" style={{backgroundImage: `url(${carouselBox})` }} ref={heroCarousel}>
              <Carousel  autoPlay={true} infiniteLoop={true} swipeable={true} emulateTouch={true} showArrows={true}  showStatus={false} showThumbs={false} interval={5000} transitionTime={1000}>
                  <div>
                      <p className="sms-perrter text-white carousel-label">THE GATES OF THE UNDERWORLD ARE NOW OPEN</p>
                  </div>
                  <div>
                      <p className="sms-perrter text-white carousel-label">YOU ARE A BODILESS SOUL, AN ETHEREAL REMANT OF ETHER</p>
                  </div>
                  <div> 
                      <p className="sms-perrter text-white carousel-label">FORGE UNIQUE AND POWERFUL NFT ITEMS TO DEFEAT YOUR ENEMIES</p>
                  </div>
                  <div> 
                      <p className="sms-perrter text-white carousel-label">SEARCH AND OBTAIN SKINS WORTHY OF YOUR POWER</p>
                  </div>
              </Carousel>
            
        </div>
    </div>
  );
}

export default Hero;
