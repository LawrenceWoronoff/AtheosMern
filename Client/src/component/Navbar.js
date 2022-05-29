import './Navbar.css';
import {useState, useEffect, useRef} from "react";
import hamburgerOpen from "../assets/HamburgerOpen.png";
import hamburgerClose from "../assets/HamburgerClose.png";

import {BsCaretDownFill} from "react-icons/bs";

function Navbar() {
  const [showNav, setShowNav] = useState(false);
  const [hamburgerImage, setHamburgerImage] = useState(hamburgerOpen);

  useEffect(() => {
   
  }, []);

  const toogleMenu = () => {
    setShowNav(showNav ? false : true);
    setHamburgerImage(showNav ? hamburgerOpen : hamburgerClose)
  }

  return (
    <div className="Navbar position-fixed top-0 left-0 w-100 d-flex justify-content-center">
        <nav className="menu-desktop" style={{display: `${showNav ? 'flex' : 'none'}`}}>
          <ul className="menu">
            <li className="dropdown dropdown-6">
              Game Settings
            </li>
            <li className="dropdown dropdown-6">
              Whitepaper<span className='ms-2'><BsCaretDownFill/></span>
              <ul className="dropdown_menu dropdown_menu--animated dropdown_menu-6">
                <li className="dropdown_item-1">Tokenomics</li>
                <li className="dropdown_item-2">Token supply</li>
                <li className="dropdown_item-3">Governance</li>
                <li className="dropdown_item-4">Team</li>
              </ul>
            </li>
            <li className="dropdown dropdown-6">
              Social<span className='ms-2'><BsCaretDownFill/></span>
              <ul className="dropdown_menu dropdown_menu--animated dropdown_menu-6">
                <li className="dropdown_item-1">Discord</li>
                <li className="dropdown_item-2">Telegram</li>
                <li className="dropdown_item-3">Twitter</li>
                <li className="dropdown_item-4">Reddit</li>
              </ul>
            </li>
            <li className="dropdown dropdown-6">
              More<span className='ms-2'><BsCaretDownFill/></span>
              <ul className="dropdown_menu dropdown_menu--animated dropdown_menu-6">
                <li className="dropdown_item-1">LITEPAPER</li>
                <li className="dropdown_item-2">FAQ</li>
              </ul>
            </li>
          </ul>
        </nav>
        <div className="wrapper-mobile">
          <nav className='nav-mobile'>
            <input type="checkbox" id="menu" name="menu" className="m-menu__checkbox"/>
            <label className="m-menu__toggle" htmlFor="menu">
              <svg width="35" height="35" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="butt" strokeLinejoin="arcs"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
            </label>
            {/* <label className="m-menu__overlay" htmlFor="menu"></label> */}
            <div className="m-menu">
              <div className="m-menu__header">
                <label className="m-menu__toggle" htmlFor="menu">
                  <svg width="35" height="35" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="3" strokeLinecap="butt" strokeLinejoin="arcs">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </label>
                <span>Home</span>
              </div>
              <ul>
                <li><label>Game Settings</label></li>
                <li>
                  <label className="a-label__chevron" htmlFor="item-2">Whitepaper</label>
                  <input type="checkbox" id="item-2" name="item-2" className="m-menu__checkbox"/>
                  <div className="m-menu">
                    <div className="m-menu__header">
                      <label className="m-menu__toggle" htmlFor="item-2">
                        <svg width="35" height="35" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="3" strokeLinecap="butt" strokeLinejoin="arcs">
                          <path d="M19 12H6M12 5l-7 7 7 7"/>
                        </svg>
                      </label>
                      <span>Whitepaper</span>
                    </div>
                    <ul>
                      <li><label>Tokenomics</label></li>
                      <li><label>Token supply</label></li>
                      <li><label>Governance</label></li>
                      <li><label>Team</label></li>
                    </ul>
                  </div>
                </li>
                <li>
                  <label className="a-label__chevron" htmlFor="item-3">Social</label>
                  <input type="checkbox" id="item-3" name="item-3" className="m-menu__checkbox"/>
                  <div className="m-menu">
                    <div className="m-menu__header">
                      <label className="m-menu__toggle" htmlFor="item-3">
                        <svg width="35" height="35" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="3" strokeLinecap="butt" strokeLinejoin="arcs">
                          <path d="M19 12H6M12 5l-7 7 7 7"/>
                        </svg>
                      </label>
                      <span>Social</span>
                    </div>
                    <ul>
                      <li><label>Discord</label></li>
                      <li><label>Telegram</label></li>
                      <li><label>Twitter</label></li>
                      <li><label>Reddit</label></li>
                    </ul>
                  </div>
                </li>
                <li>
                  <label className="a-label__chevron" htmlFor="item-4">More</label>
                  <input type="checkbox" id="item-4" name="item-4" className="m-menu__checkbox"/>
                  <div className="m-menu">
                    <div className="m-menu__header">
                      <label className="m-menu__toggle" htmlFor="item-4">
                        <svg width="35" height="35" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="3" strokeLinecap="butt" strokeLinejoin="arcs">
                          <path d="M19 12H6M12 5l-7 7 7 7"/>
                        </svg>
                      </label>
                      <span>More</span>
                    </div>
                    <ul>
                      <li><label>LITEPAPER</label></li>
                      <li><label>FAQ</label></li>
                    </ul>
                  </div>
                </li>
                
              </ul>  
            </div>
          </nav>
        </div>
        <img className='position-absolute top-0 hamburger-desktop' src={hamburgerImage} onClick={toogleMenu}/>
    </div>
  );
}

export default Navbar;

