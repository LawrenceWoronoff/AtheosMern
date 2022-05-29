import './Footer.css';
import { BsDiscord, BsTelegram, BsReddit } from "react-icons/bs";
import { FaTwitterSquare } from "react-icons/fa";

function Footer() {
  return (
    <div className="Footer position-relative">
      <div className="position-absolute w-100 h-100 left-0 top-0 background-overlay"></div>
      <div className="position-absolute w-100 h-100 left-0 top-0">
          <div className="d-flex flex-column justify-content-end w-100 h-100 footer-container">
              <div className='d-flex justify-content-center' style={{marginBottom: '40px'}}>
                <div className='row w-100' style={{maxWidth: '1280px'}}>
                  <div className='col-12 col-lg-4 col-xl-6'>
                    <h2 className="sms-perrter text-start" style={{fontSize: '30px', lineHeight: '1.5em', color: '#d2cdcd'}}><span>Subscribe</span></h2>
                    <p className='text-start' style={{color: '#d2cdcd'}}>Be the first to be informed about our upcoming news and events!</p>
                  </div>
                  <div className='col-12 col-lg-8 col-xl-6'>
                    <div className='row m-0'>
                      <input className='col-12 col-md-8 subscribeInput' placeholder='your email:'/>
                      <button type='submit' className='col-12 col-md-4 subscribeBtn'>Subscribe Now</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className='row'>
                <div className='followUs offset-md-8 col-md-4 col-12'>
                  <p className="text-white text-start">
                    Follow US
                  </p>
                  <div className="row d-flex align-items-center" style={{height:'40px'}}>
                    <div className='socialLayout p-0 d-flex justify-content-center align-items-center'>
                      <div className="socialIcon d-flex justify-content-center align-items-center">
                        <div className="favIcon">
                          <BsDiscord/>
                        </div>
                      </div>
                    </div>
                    <div className='socialLayout p-0 d-flex justify-content-center align-items-center'>
                      <div className="socialIcon d-flex justify-content-center align-items-center">
                        <div className="favIcon">
                          <BsTelegram/>
                        </div>
                      </div>
                    </div>
                    <div className='socialLayout p-0 d-flex justify-content-center align-items-center'>
                      <div className="socialIcon d-flex justify-content-center align-items-center">
                        <div className="favIcon">
                          <FaTwitterSquare/>
                        </div>
                      </div>
                    </div>
                    <div className='socialLayout p-0 d-flex justify-content-center align-items-center'>
                      <div className="socialIcon d-flex justify-content-center align-items-center">
                        <div className="favIcon">
                          <BsReddit/>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='copyRight'>
                  Atheos © 2021. All rights reserved
              </div>
          </div>
      </div>
    </div>
  );
}

export default Footer;
