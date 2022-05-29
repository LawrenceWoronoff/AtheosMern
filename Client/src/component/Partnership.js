import './Partnership.css';
import SkyCity from "../assets/SkyCity.jpg";
import {useEffect, useRef} from "react";


function Partnership() {
  const partnerShip = useRef();
  const partnerContent = useRef();

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', updateSize);
  }, []);

  const handleScroll = () => {
    const partnerShipPositionTop = partnerShip.current.getBoundingClientRect().top;
    const partnerShipHeight = partnerShip.current.getBoundingClientRect().height;
    const labelHeight = 160;

    partnerContent.current.style.top = (partnerShipPositionTop  / 4 + partnerShipHeight / 2 - labelHeight / 2) + "px";
  }

  const updateSize = () => {
    const partnerShipPositionTop = partnerShip.current.getBoundingClientRect().top;
    const partnerShipHeight = partnerShip.current.getBoundingClientRect().height;
    const labelHeight = 160;

    partnerContent.current.style.top = (partnerShipPositionTop  / 4 + partnerShipHeight / 2 - labelHeight / 2) + "px";
  }

  return (
    <div className="Partnership position-relative" ref={partnerShip} style={{backgroundImage:`url(${SkyCity})`, height: '100vh'}}>
      <div className="position-absolute partnerContent" ref={partnerContent}>
          <h1 className='sms-perrter text-white partner-label-1'>Partnerships</h1>
          <h2 className='sms-perrter text-white partner-label-2'>To be Announced</h2>
      </div>
    </div>
  );
}

export default Partnership;
