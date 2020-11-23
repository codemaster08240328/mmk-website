import React from 'react';

import './style.scss';
import Layout from '../../components/Layout';
import HeaderNav from '../../components/HeaderNav';
import HomeImg from '../../assets/goldLoan/home.png';
import GoldLoanImg from '../../assets/goldLoan/goldLoan.png';
import MobileHeaderNav from '../../components/mobile/HeaderNav';

const steps = [
  {
    title: 'Share details',
    description: 'Answer a few quick questions in less than 1 min.'
  },
  {
    title: 'See your options',
    description: 'Based on the information you provide and your gold our algorithms matches you with the best offer. '
  },
  {
    title: 'Get money',
    description: 'Get your gold evaluated and get cash instantly. '
  },
]

const GoldLoan = () => {
  return (
    <Layout title="Gold Loans">
      <div className="header">
        <HeaderNav />
        <MobileHeaderNav />
        <div className="header-content">
          <div className="header-content-text" >
            <div className="header-content-hero-title">No stress gold loans from the market leaders</div>
            <button className="mmk-btn header-content-btn active-btn desktop">Start now</button>
          </div>
          <div className="header-content-img-wrapper w-35">
            <img src={HomeImg} alt="home_img" />
          </div>
          <div>
            <button className="mmk-btn mobile-header-content-btn active-btn mobile">See my options</button>
          </div>
        </div>
      </div>
      <div className="page-row gl-content mobile-not-reversed">
        <div className="gl-content-text">
          <h1>Why get your gold loan from us?</h1>
          <ul>
            <li><p>Highest value for your gold.</p></li>
            <li><p>Lowest interest rates in the market.</p></li>
            <li><p>Get money in your account in less than 1 hour.</p></li>
          </ul>
        </div>
        <div className="gl-content-img-wrapper">
          <img src={GoldLoanImg} alt="clay-mockup" />
        </div>
      </div>
      <div className="gl-hiw">
        <h1>Here's how it works</h1>
        <div className="gl-hiw-steps">
          {
            steps.map((item, index) => (
              <div className="gl-hiw-steps-item" key={index.toString()}>
                <h4>
                  {`Step ${index + 1}`}
                </h4>
                <h2 className="mt-16">
                  {item.title}
                </h2>
                <p className="mt-32">
                  {item.description}
                </p>
              </div>
            ))
          }
        </div>
      </div>
    </Layout>
  )
}

export default GoldLoan