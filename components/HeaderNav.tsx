import React, { useState } from 'react';
import Link from 'next/link';
import LogoImg from '../assets/Logo2.png';
// import DownImg from '../assets/downarrow.png';
import './header.scss';

export const links = [
  {
    href: '/credit-score',
    label: 'Credit Score'
  },
  {
    href: '#',
    label: 'Loans',
    children: [
      {
        label: 'Personal loans',
        href: '/personal-loan'
      }, {
        label: 'Home loans',
        href: '/home-loan'
      }, {
        label: 'Gold loans',
        href: '/gold-loan'
      }
    ]
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
  const [selectedNav, setSelectedNav] = useState('')

  return (
    <div className="header-nav-wrapper">
      <Link href="/">
        <img src={LogoImg} alt="logo-img" className="logo-img" />
      </Link>

      <div className="header-nav-items">
        {
          links.map((item, index) => {
            if (!item.children?.length)
              return (
                <Link href={item.href} key={index.toString()}>
                  <div className="header-nav-item">
                    {item.label}
                  </div>
                </Link>
              )
            else {
              return (
                <div key={index.toString()} className="header-menu">
                  <div className="header-nav-item" onClick={() => { if (selectedNav === item.label) { setSelectedNav('') } else { setSelectedNav(item.label) } }}>
                    {item.label}
                    {/* <img src={DownImg} style={{ marginLeft: 5 }} /> */}
                  </div>
                  {
                    selectedNav === item.label &&
                    <div className="header-submenu">
                      {item.children?.map((subMenu, index) => (
                        <Link href={subMenu.href} key={index.toString()}>
                          <div>{subMenu.label}</div>
                        </Link>
                      ))}
                    </div>
                  }

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