import React from 'react';

import './style.scss';
import Layout from '../../components/Layout';
import HeaderNav from '../../components/HeaderNav';
import CreditImg from '../../assets/creditScore/credit.png';
import HomeImg from '../../assets/creditScore/credit_score.png';

const steps = [
  {
    title: 'Completely Free - No Fee or Charge',
    description: 'Save more than Rs 4300 and get your credit score analysis for free.'
  },
  {
    title: 'View your credit score & report anytime',
    description: 'See your credit score and credit report analysis when ever you want to.'
  },
  {
    title: 'See ways to improve your credit score and save money',
    description: 'See personalized insights to improve your score and save money on any debt you might have.'
  },
]

const CreditScore = () => {
  return (
    <Layout title="Credit Score">
      <div className="header pb-0">
        <HeaderNav />
        <div className="header-content">
          <div className="header-content-text w-65" >
            <h1>Credit Scores are Complex</h1>
            <p className="header-content-description">
              We simplify them for you.
            </p>
            <button className="mmk-btn header-content-btn active-btn">Start now</button>
          </div>
          <div className="header-content-img-wrapper w-35">
            <img src={HomeImg} alt="home_img" />
          </div>
        </div>
      </div>
      <div className="page-row cs-content">
        <div className="cs-content-text">
          <h2>Why us?</h2>
          <ul>
            <li>Free credit score analysis.</li>
            <li>Simplified credit report to help you understand <br /> your score.</li>
            <li>Personalized credit score insights to help you <br /> improve your score.</li>
          </ul>
        </div>
        <div className="cs-content-img-wrapper">
          <img src={CreditImg} alt="clay-mockup" />
        </div>
      </div>
      <div className="cs-hiw">
        <h2>Here's how it works</h2>
        <div className="cs-hiw-steps">
          {
            steps.map((item, index) => (
              <div className="cs-hiw-steps-item" key={index.toString()}>
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

export default CreditScore