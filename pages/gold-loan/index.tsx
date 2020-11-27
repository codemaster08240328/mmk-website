import React from 'react';

import './style.scss';
import Layout from '../../components/Layout';
import HeaderNav from '../../components/HeaderNav';
import HomeImg from '../../assets/goldLoan/home.png';
import GoldLoanImg from '../../assets/goldLoan/goldLoan.png';
import MobileHeaderNav from '../../components/mobile/HeaderNav';
import FAQ, { Tq_a } from '../../components/FAQ';

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

const Q_As: Array<Tq_a> = [
  {
    question: 'What is a gold loan?',
    answer: (
      <div>
        A gold loan is a type of loan in which you get a loan against your gold. Gold loans are secured loans because here your gold is kept as security or collateral. Items you can generally deposit include gold jewelry and gold ornaments.
      </div>
    )
  },
  {
    question: 'Which bank is best for gold loans?',
    answer: (
      <div>
        There are several things you need to see before choosing a gold loan: interest rate and processing fee. Here are the banks that offer the top gold loan interest rate and processing fee.
        <ul>
          <li>Kotak Mahindra Bank - Interest rate is 10.5% to 17 % and Processing Fee is up to 2%.</li>
          <li>HDFC Bank- Interest rate is 9.90% to 17.90% and Processing Fee is up to 1.50% + GST.</li>
          <li>Bandhan Bank: Interest rate is 10.99% to 18% and Processing Fee is up to 1% + GST.</li>
          <li>ICICI Bank- Interest rate is 10% to 19.76% and Processing Fee is up to 1% of the loan amount.</li>
        </ul>
      </div>
    )
  },
  {
    question: 'What is the eligibility for a gold loan?',
    answer: (
      <div>
        Eligibility depends on a number of factors, and this depends from one bank to another. Generally, the more pure your gold is, the more loan amount you’ll get. Secondly, your credit score won’t be much important here as much as your gold’s purity, but lenders shall still check it. Before you pick a gold loan from a bank, check your eligibility. You don’t want to get rejected, since it affects your credit score.
      </div>
    )
  },
  {
    question: 'Which bank gives the highest value for a gold loan?',
    answer: (
      <div>
        There are several banks that give you the highest value for a gold loan.
        <ul>
          <li>Central Bank of India- Loan amount is 70% of the current market price or 22k gold, whichever is higher</li>
          <li>Bank of Baroda- Loan amount is Rs. 0.25 lakh to Rs. 25 lakh</li>
          <li>SBI- Loan amount is Rs. 20,000 to Rs. 20 lakh</li>
          <li>IIFL- Loan amount is 75% of the market value of your gold</li>
        </ul>
      </div>
    )
  },
  {
    question: 'How to calculate gold loan interest?',
    answer: (
      <div>
        You can find this out by subtracting the principal loan amount from the total amount to be repaid. This amount can be calculated with the aid of an EMI calculator. 
      </div>
    )
  },
  {
    question: 'Which is the best gold loan or personal loan?',
    answer: (
      <div>
        Getting a gold loan is more advantageous right now. This is due to several factors. First of all, due to the Covid-19 situation, most banks are not willing to give personal loans. However, they are eager to give gold loans right now. Personal loans are unsecured loans while gold loans are secured loans. This also means that gold loans have lower interest rates.
      </div>
    )
  },
  {
    question: 'How does gold loan work?',
    answer: (
      <div>
        The process of getting a gold loan is similar to getting a secured loan, the ones which require you to give security. Here you need to pledge gold of 18 to 24 karats as collateral. The loan amount you can get is generally 80% of your gold’s value, based on the gold’s quantity and on the current market price.
      </div>
    )
  },
  {
    question: 'How do I repay my gold loan?',
    answer: (
      <div>
        There are 4 different ways of repaying your gold loans.
        <ul>
          <li>Pay interest as EMI and pay Principal later</li>
          <li>Make partial payments</li>
          <li>Bullet repayment</li>
          <li>Regular EMI option</li>
        </ul>
      </div>
    )
  },
  {
    question: 'How much loan can I get per gram of gold?',
    answer: (
      <div>
        Here is how much gold loan per gram you can get from top banks and NBFCs like SBI, HDFC, Mannapuram, Yes Bank and Axis Bank.
        <br /><br />
        Gold loan per gram: Rs: 2772 to Rs. 3388.
      </div>
    )
  },
  {
    question: 'Which bank gives the lowest interest rate for a gold loan?',
    answer: (
      <div>
        SBI Gold loans have the lowest interest rate of 7.50%.
      </div>
    )
  },
  {
    question: 'How to take a gold loan?',
    answer: (
      <div>
        The concept of a gold loan is simple. You pledge your gold to the lender in return of the loan money. The loan is therefore in lieu of your deposited gold. To get a gold loan, you need to visit a bank to submit the ornaments. The lender then checks the ornaments for authenticity and gold purity. The evaluation is done on the basis of the market value.
      </div>
    )
  },
  {
    question: 'What is the gold loan interest rate?',
    answer: (
      <div>
        Gold loan rate varies from one bank to another. Be sure to see the interest rate before applying.
      </div>
    )
  }
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
      <FAQ title="Have questions about gold loans? Get the answers" q_as={Q_As} />
    </Layout>
  )
}

export default GoldLoan