import React from 'react';
import Link from 'next/link';
// import { links } from '../HeaderNav';
import LogoImg from '../../assets/mobile-logo.png';
import HamburgerIcon from '../../assets/hamburger.png';

import './header.scss';


const MobileHeaderNav = () => {
  return (
    <div className="mobile-header-nav-wrapper">
      <Link href="/">
        <img src={LogoImg} alt="logo-img" className="logo-img" />
      </Link>
      <div>
        <img src={HamburgerIcon} />
      </div>
    </div>
  );
}

export default MobileHeaderNav;