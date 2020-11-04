import React, { useState } from 'react';

import TwitterIcon from '../assets/footer/twitter.png'
import WordpressIcon from '../assets/footer/wordpress.png'
import FacebookIcon from '../assets/footer/facebook.png'
import LinkedinIcon from '../assets/footer/linkedin.png'
import DmcaIcon from '../assets/footer/dmca.png'

import './footer.scss';

const socialIcons = [{
  src: TwitterIcon,
  href: 'https://twitter.com/mymoneykarma'
}, {
  src: FacebookIcon,
  href: 'https://www.facebook.com/mymoneykarma'
}, {
  src: LinkedinIcon,
  href: 'https://www.linkedin.com/company/mymoneykarma/'
}, {
  src: WordpressIcon,
  href: 'https://www.mymoneykarma.com/blog'
}]

const Footer = () => {
  const [openLink, setOpenLink] = useState(false)
  return (
    <div className="footer-wrapper">
      <div className="footer-links">
        <div className="footer-links-title" onClick={() => setOpenLink(!openLink)}>
          <h4>Most searched links +</h4>
        </div>
        {
          openLink &&

          <div className="link-wrapper">
            <div className="link-wrapper-tool">
              <div className="link-title">TOOLS</div>
              <div className="links">
                <a href="">Financial Tools</a>
                <a href="">Credit Card Bill</a>
                <a href="">Payment</a>
                <a href="">Credit Card Customer Care</a>
                <a href="">EMI Calculator for Home Loan</a>
                <a href="">EMI Calculator for Car Loan</a>
                <a href="">EMI Calculator for Personal Loan</a>
                <a href="">EMI Calculator for Personal Loan</a>
                <a href="">Home loan checkup</a>
                <a href="">Aadhar Enabled</a>
                <a href="">Payment System</a>
                <a href="">E Wallet</a>
                <a href="">UPI (Unified Payment Interface)</a>
                <a href="">USSD (Unstructured Supplementary Service Data)</a>
              </div>
            </div>
            <div>
              <div className="link-title-bank">Bank Logins</div>
              <div className="link-wrapper-bank">
                <div className="links">
                  <a href="">SBI Online</a>
                  <a href="">Axis Bank Login</a>
                  <a href="">ICICI Bank</a>
                  <a href="">HDFC Bank</a>
                  <a href="">ICICI netbanking</a>
                  <a href="">HDFC netbanking</a>
                  <a href="">Kotak Bank Login</a>
                  <a href="">Savings Account</a>
                  <a href="">Driving Licence</a>
                  <a href="">Two Wheeler</a>
                  <a href="">Mobile Banking</a>
                </div>
                <div className="links">
                  <a href="">Andhra Bank Login</a>
                  <a href="">Canara Bank Login</a>
                  <a href="">IDBI Bank Login</a>
                  <a href="">LIC Login</a>
                  <a href="">Indusind Bank Login</a>
                  <a href="">Citi Bank Login</a>
                  <a href="">PNB NetBanking</a>
                  <a href="">Recurring Deposit</a>
                  <a href="">PAN</a>
                  <a href="">Gas</a>
                  <a href="">Holiday</a>
                </div>
                <div className="links">
                  <a href="">Passport</a>
                  <a href="">Andhaar Card</a>
                  <a href="">EPFO</a>
                  <a href="">Share Market</a>
                  <a href="">Kotak Bank Login</a>
                  <a href="">Yes Bank Login</a>
                  <a href="">Tax</a>
                  <a href="">EMI Calculator</a>
                  <a href="">Voter ID</a>
                  <a href="">Bank of Baroda NetBanking</a>
                </div>
              </div>
            </div>
            <div>
              <div className="link-title">Gold Rate Today</div>
              <div className="links">
                <a href=""> Gold Rate in India </a>
                <a href=""> Gold Rate Bangalore </a>
                <a href=""> Gold Rate Chennai </a>
                <a href=""> Gold Rate Mumbai </a>
                <a href=""> Gold Rate Delhi </a>
                <a href=""> Gold Rate Hyderabad </a>
              </div>
            </div>
          </div>
        }
      </div>
      <div className="footer-content">
        <div className="footer-content-wrapper">
          <div className="footer-contact">
            <h4>Questions</h4>
            <p>Email us at: <br /> askus[at]mymoneykarma[dot]com</p>
          </div>
          <div className="divider mt-80"></div>
          <div className="footer-social">
            {socialIcons.map((item, index) => (
              <a href={item.href} key={index.toString()}>
                <img src={item.src} alt={`Social Icon ${index}`} className="mr-20" />
              </a>
            ))}
          </div>
          <div className="divider"></div>
          <div className="footer-declaimer">
            <p>
              Disclaimer: The credit score provided by mymoneykarma is from Equifax. Visitors looking for their credit scores from any other Credit Information Company, are requested to refer to the official website of the concerned company for further details. Any reference to these Credit Information Companies on mymoneykarma website are strictly informative; mymoneykarma doesn't directly transact with them.
            </p>
            <div className="page-row mt-98">
              <p>
                © 2018 mymoneykarma, All Rights ReservedTerms and <br /> ConditionsPrivacy PolicySecurity Disclaimer
              </p>
              <img src={DmcaIcon} alt="dmcaicon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer