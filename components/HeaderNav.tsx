import React from 'react';
import Link from 'next/link';
import LogoImg from '../assets/logo.png';
import DownImg from '../assets/downarrow.png';
import './header.scss';

const links = [
  {
    href: '/credit-score',
    label: 'Credit Score'
  },
  {
    href: '#',
    label: 'Loan'
  },
  {
    href: '#',
    label: 'Resources'
  },
  {
    href: '/about',
    label: 'About'
  },
]

const HeaderNav = () => {
  return (
    <div className="header-nav-wrapper">
      <Link href="/">
        <img src={LogoImg} alt="logo-img" />
      </Link>

      <div className="header-nav-items">
        {
          links.map((item, index) => {
            if (item.label !== 'Loan' && item.label !== 'Resources')
              return (
                <Link href={item.href} key={index.toString()}>
                  <div className="header-nav-item">
                    {item.label}
                  </div>
                </Link>
              )
            else {
              return (
                <div key={index.toString()}>
                  <div className="header-nav-item">
                    {item.label}
                    <img src={DownImg} style={{ marginLeft: 5 }} />
                  </div>
                </div>
              )
            }
          }
          )
        }
      </div>

      <div className="header-nav-action">
        <button className="mmk-btn signin-btn">Sign In</button>
        <button className="mmk-btn signup-btn active-btn">Sign Up</button>
      </div>
    </div>
  )
}

export default HeaderNav