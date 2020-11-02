import React from 'react';

import './style.scss';
import Layout from '../../components/Layout';
import HeaderNav from '../../components/HeaderNav';
import HomeImg from '../../assets/goldLoan/home.png';
import GoldLoanImg from '../../assets/goldLoan/goldLoan.png';

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
        <div className="header-content">
          <div className="header-content-text" >
            <h1>No stress gold loans from the market leaders</h1>
            <button className="mmk-btn header-content-btn active-btn">Start now</button>
          </div>
          <div className="header-content-img-wrapper">
            <img src={HomeImg} alt="home_img" />
          </div>
        </div>
      </div>
      <div className="page-row gl-content">
        <div className="gl-content-text">
          <h2>Why get your gold loan from us?</h2>
          <ul>
            <li>Highest value for your gold.</li>
            <li>Lowest interest rates in the market.</li>
            <li>Get money in your account in less than 1 hour.</li>
          </ul>
        </div>
        <div className="gl-content-img-wrapper">
          <img src={GoldLoanImg} alt="clay-mockup" />
        </div>
      </div>
      <div className="gl-hiw">
        <h2>Here's how it works</h2>
        <div className="gl-hiw-steps">
          {
            steps.map((item, index) => (
              <div className="gl-hiw-steps-item" key={index.toString()}>
                <span className="step-text">
                  {`Step${index + 1}`}
                </span>
                <h3>
                  {item.title}
                </h3>
                <p>
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