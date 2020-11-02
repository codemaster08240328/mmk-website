import React from 'react';
import Layout from '../../components/Layout';
import HeaderNav from '../../components/HeaderNav';
import HomeImg from '../../assets/personalLoan/pl-home.png';
import ClayImg from '../../assets/personalLoan/clay-mockup.png';

import './style.scss';

const steps = [
  {
    title: 'Share details',
    description: 'Answer a few quick questions in less than 1 min.'
  },
  {
    title: 'Get matched',
    description: 'Our recommendation engine matches you to the ideal lender based on your answers and credit history.'
  },
  {
    title: 'Get money',
    description: 'Complete application and upload documents on our website and get your loan approved in less than 1 hour.'
  },
]


const PersonalLoan = () => {
  return (
    <Layout title="Personal Loans">
      <div className="header">
        <HeaderNav />
        <div className="header-content">
          <div className="header-content-text" >
            <h1>Personal Loans at Lowest Interest Rates</h1>
            <p className="header-content-description">Our recommendation engine finds the loan best suited to your needs in less than 60 seconds.</p>
          </div>
          <div className="header-content-img-wrapper">
            <img src={HomeImg} alt="home_img" />
          </div>
        </div>
      </div>
      <div className="page-row pl-content">
        <div className="pl-content-text">
          <h2>Why get a personal loan from us?</h2>
          <ul>
            <li>Matched to best option in 60 seconds or less.</li>
            <li>100% online.</li>
            <li>Approved in 1 hour or less.</li>
          </ul>
        </div>
        <div className="pl-content-img-wrapper">
          <img src={ClayImg} alt="clay-mockup" />
        </div>
      </div>
      <div className="pl-hiw">
        <h2>Here's how it works</h2>
        <div className="pl-hiw-steps">
          {
            steps.map((item, index) => (
              <div className="pl-hiw-steps-item" key={index.toString()}>
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

export default PersonalLoan