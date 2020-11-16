import React, { useState } from 'react';
import Link from 'next/link';
// import { links } from '../HeaderNav';
import LogoImg from '../../assets/mobile-logo.png';
import HamburgerIcon from '../../assets/hamburger.png';
import CloseButtonIcon from '../../assets/Closebutton.png';

import './header.scss';


const MobileHeaderNav = () => {
  const [openMenu, setopenMenu] = useState(false);
  const [selectedMenu, setselectedMenu] = useState('');
  return (
    <div className="mobile-header-nav-wrapper">
      <Link href="/">
        <img src={LogoImg} alt="logo-img" className="logo-img" />
      </Link>
      <div onClick={() => setopenMenu(!openMenu)}>
        <img src={HamburgerIcon} />
      </div>
      {
        openMenu &&
        <div className="nav-menu-drawer-wrapper">
          <div className="nav-menu-drawer-content">
            <div className="nav-menu-drawer-content-texts">
              <div className="nav-menu-drawer-content-close">
                <img src={CloseButtonIcon} alt="close-button" onClick={() => setopenMenu(false)}/>
              </div>
              <div style={{marginTop: 84}}>
                <Link href="/credit-score">
                  <div className="credit-score-text">
                    Credit Score
                  </div>
                </Link>
                <div className={ selectedMenu === 'loan' ? "credit-score-text credit-score-text-active" : "credit-score-text"} onClick={() => { if (selectedMenu === 'loan') { setselectedMenu('') } else { setselectedMenu('loan') } }}>
                  Loans
                </div>
                {
                  selectedMenu === 'loan' &&
                  <div>
                    <Link href="personal-loan">
                      <div className="mobile-nav-link">
                        Personal loans
                      </div>
                    </Link>
                    <Link href="home-loan">
                      <div className="mobile-nav-link">
                        Home loans
                      </div>
                    </Link>
                    <Link href="gold-loan">
                      <div className="mobile-nav-link">
                        Gold loans
                      </div>
                    </Link>
                  </div>
                }
                <div className={ selectedMenu === 'resource' ? "credit-score-text credit-score-text-active" : "credit-score-text"} onClick={() => { if (selectedMenu === 'resource') { setselectedMenu('') } else { setselectedMenu('resource') } }}>
                  Resources
                </div>
                {/* {
                  selectedMenu === 'resource' &&
                  <div>
                    <Link href="personal-loan">
                      <div className="mobile-nav-link">
                        Personal loans
                      </div>
                    </Link>
                    <Link href="home-loan">
                      <div className="mobile-nav-link">
                        Home loans
                      </div>
                    </Link>
                    <Link href="gold-loan">
                      <div className="mobile-nav-link">
                        Gold loans
                      </div>
                    </Link>
                  </div>
                } */}
                <Link href="/about">
                  <div className="credit-score-text">
                    About
                  </div>
                </Link>
              </div>
            </div>
            <div className="nav-menu-drawer-content-action">
              <button className="mmk-btn signup-btn active-btn">SIGN UP</button>
              <button className="mmk-btn signup-btn">SIGN IN</button>
            </div>
          </div>
        </div>
      }
    </div>
  );
}

export default MobileHeaderNav;