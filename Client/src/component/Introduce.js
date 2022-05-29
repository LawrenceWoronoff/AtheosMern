import './Introduce.css';
import introduceVideo from "../assets/introduce.mp4";

function Introduce() {
  return (

    <div className="Introduce position-relative" style={{marginBottom: '-20px'}}>
      <video className="position-relative back-video"
          autoPlay
          loop
          muted
          src={introduceVideo} />
      <div className="position-absolute w-100 h-100" style={{zIndex: 1001, top:0}}>
        <div className="introduceSection d-flex align-items-center h-100" style={{padding: '5%'}}>
          <div className="row w-100 introduce-text-container">
            <div className=" text-start">
              <h2 className="sms-perrter text-white p_12">
                <span>Introducing "</span>
                <span style={{color: '#D9A627'}}>ICE</span>":<br/>
                <span style={{color: '#D9A627'}}>I</span>TEM <span style={{color: '#D9A627'}}>C</span>REATION <span style={{color: '#D9A627'}}>E</span>NGINE 
              </h2>
              <p className="sms-perrter fw-light p_8">
                <span style={{color: '#ffc400'}}>Atheos</span> is a game about <span style={{color: '#ffc400'}}>item creation</span>, not item finding.
              </p>
              <p className="sms-perrter fw-light p_8">
                <span style={{color: '#ffc400'}}>Fight to create</span>:
              </p>
              <p className="sms-perrter fw-light p_8">
                We want to change the way we grind in ARPGs, making every run meaningful.
              </p>
              <p className="sms-perrter fw-light p_8" >
                Our <span style={{color: '#ffc400'}}>Item Creation Engine (ICE)</span> will allow you to create unique items for every single successful level run.
              </p>
              <p className="sms-perrter fw-light p_8">
                Welcome to the future of <span style={{color: '#ffc400'}}>NFT gaming</span>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Introduce;
