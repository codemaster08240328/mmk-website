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
          <h4 className="color-text-white">Most searched links +</h4>
        </div>
        {
          openLink &&

          <div className="link-wrapper">
            <div className="link-wrapper-tool">
              <div className="link-title">TOOLS</div>
              <div className="links">
                <a className="mobile-link-item" href="https://www.mymoneykarma.com/tools.html">Financial Tools</a>
                <a className="mobile-link-item" href="https://www.mymoneykarma.com/info-credit-cards/credit-card-bill-payment.html">Credit Card Bill Payment</a>
                <a className="mobile-link-item" href="https://www.mymoneykarma.com/info-credit-cards/credit-card-customer-care.html">Credit Card Customer Care</a>
                <a className="mobile-link-item" href="https://www.mymoneykarma.com/home-loan-emi-calculator.html">EMI Calculator for Home Loan</a>
                <a className="mobile-link-item" href="https://www.mymoneykarma.com/auto-and-car-loan-emi-calculator-in-india.html">EMI Calculator for Car Loan</a>
                <a className="mobile-link-item" href="https://www.mymoneykarma.com/personal-loan-emi-calculator.html">EMI Calculator for Personal Loan</a>
                <a className="mobile-link-item" href="https://www.mymoneykarma.com/home-loan-checkup.html">Home loan checkup</a>
                <a className="mobile-link-item" href="https://www.mymoneykarma.com/aadhar-payment-system.html">Aadhar Enabled Payment System</a>
                <a className="mobile-link-item" href="https://www.mymoneykarma.com/e-wallet.html">E Wallet</a>
                <a className="mobile-link-item" href="https://www.mymoneykarma.com/unified-payment-interface.html">UPI (Unified Payment Interface)</a>
                <a className="mobile-link-item" href="https://www.mymoneykarma.com/ussd.html">USSD (Unstructured Supplementary Service Data)</a>
              </div>
            </div>
            <div>
              <div className="link-title-bank">Bank Logins</div>
              <div className="link-wrapper-bank">
                <div className="links">
                  <a  href="https://mymoneykarma.com/sbi-online.html">SBI Online</a>
                  <a href="https://mymoneykarma.com/axis-bank-login.html">Axis Bank Login</a>
                  <a href="https://mymoneykarma.com/icici-bank.html">ICICI Bank</a>
                  <a href="https://mymoneykarma.com/hdfc-bank/">HDFC Bank</a>
                  <a href="https://mymoneykarma.com/icici-net-bank.html">ICICI netbanking</a>
                  <a href="https://mymoneykarma.com/hdfc-net-bank.html">HDFC netbanking</a>
                  <a href="https://mymoneykarma.com/kotak-bank-login.html">Kotak Bank Login</a>
                  <a href="https://mymoneykarma.com/savings-account">Savings Account</a>
                  <a href="https://mymoneykarma.com/driving-licence/">Driving Licence</a> 
                  <a href="https://mymoneykarma.com/two-wheeler">Two Wheeler</a>
                  <a href="https://mymoneykarma.com/mobile-banking">Mobile Banking</a>
                </div>
                <div className="links">
                  <a href="https://mymoneykarma.com/andhra-bank-login.html">Andhra Bank Login</a>
                  <a href="https://mymoneykarma.com/Canara-bank-login.html">Canara Bank Login</a>
                  <a href="https://mymoneykarma.com/idbi-bank-login.html">IDBI Bank Login</a>
                  <a href="https://mymoneykarma.com/lig-login.html">LIC Login</a>
                  <a href="https://mymoneykarma.com/indusind-bank-login.html">Indusind Bank Login</a>
                  <a href="https://mymoneykarma.com/Citi-bank-login.html">Citi Bank Login</a>
                  <a href="https://mymoneykarma.com/pnb-netbanking.html">PNB NetBanking</a>
                  <a href="https://mymoneykarma.com/recurring-deposit">Recurring Deposit</a>
                  <a href="https://mymoneykarma.com/pan.html">PAN</a>
                  <a href="https://mymoneykarma.com/gas">Gas</a>
                  <a href="https://mymoneykarma.com/holidays">Holiday</a>
                </div>
                <div className="links">
                  <a href="https://mymoneykarma.com/passport/">Passport</a>
                  <a href="https://mymoneykarma.com/aadhaar-card.html">Aadhaar Card</a>
                  <a href="https://mymoneykarma.com/epfo.html">EPFO</a>
                  <a href="https://mymoneykarma.com/share-market/index.html">Share Market</a>
                  <a href="https://mymoneykarma.com/kotak-bank-login.html">Kotak Bank Login</a>
                  <a href="https://mymoneykarma.com/yes-bank-login.html">Yes Bank Login</a>
                  <a href="https://mymoneykarma.com/tax.html">Tax</a>
                  <a href="https://mymoneykarma.com/emi-calculator">EMI Calculator</a>
                  <a href="https://mymoneykarma.com/voterid">Voter ID</a>
                  <a href="https://mymoneykarma.com/bank-of-baroda-netbanking.html">Bank of Baroda NetBanking</a>
                </div>
              </div>
            </div>
            <div>
              <div className="link-title">Gold Rate Today</div>
              <div className="links">
                <a className="mobile-link-item" href="https://www.mymoneykarma.com/gold-rate-india.html"> Gold Rate in India </a>
                <a className="mobile-link-item" href="https://www.mymoneykarma.com/gold-rate-bangalore.html"> Gold Rate Bangalore </a>
                <a className="mobile-link-item" href="https://www.mymoneykarma.com/gold-rate-chennai.html"> Gold Rate Chennai </a>
                <a className="mobile-link-item" href="https://www.mymoneykarma.com/gold-rate-mumbai.html"> Gold Rate Mumbai </a>
                <a className="mobile-link-item" href="https://www.mymoneykarma.com/gold-rate-delhi.html"> Gold Rate Delhi </a>
                <a className="mobile-link-item" href="https://www.mymoneykarma.com/gold-rate-hyderabad.html"> Gold Rate Hyderabad </a>
              </div>
            </div>
          </div>
        }
      </div>
      <div className="footer-content">
        <div className="footer-content-wrapper">
          <div className="footer-contact">
            <h4 className="color-text-white">Questions</h4>
            <div className="p2-small color-text-white mt-12 desktop">Email us at: <br /> askus[at]mymoneykarma[dot]com</div>
            <div className="p2-small color-text-white mt-12 mobile">Email us at: askus[at]mymoneykarma[dot]com</div>
          </div>
          <div className="divider mt-80 mmt-16"></div>
          <div className="footer-social">
            {socialIcons.map((item, index) => (
              <a href={item.href} key={index.toString()}>
                <img src={item.src} alt={`Social Icon ${index}`} className="mr-20" />
              </a>
            ))}
          </div>
          <div className="divider"></div>
          <div className="footer-declaimer">
            <div className="p2-small color-text-white">
              Disclaimer: The credit score provided by mymoneykarma is from Equifax. Visitors looking for their credit scores from any other Credit Information Company, are requested to refer to the official website of the concerned company for further details. Any reference to these Credit Information Companies on mymoneykarma website are strictly informative; mymoneykarma doesn't directly transact with them.
            </div>
            <div className="page-row mt-98 mobile-page-row mmt-30">
              <div className="p2-small color-text-white">
                © 2018 mymoneykarma, All Rights ReservedTerms and <br /> ConditionsPrivacy PolicySecurity Disclaimer
              </div>
              <img src={DmcaIcon} alt="dmcaicon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer