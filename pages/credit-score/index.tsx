import React from 'react';

import './style.scss';
import Layout from '../../components/Layout';
import HeaderNav from '../../components/HeaderNav';
import CreditImg from '../../assets/creditScore/credit.png';
import HomeImg from '../../assets/creditScore/credit_score.png';
import FAQ, { Tq_a } from '../../components/FAQ';

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

const Q_As: Array<Tq_a> = [{
  question: 'What is Credit Score?',
  answer: (
    <div>
      A credit score is a 3-digit number that reflects your credit behavior. Consider it as marks awarded to you by various financial institutions for your financial conduct. A high credit score and your good performance are positively related and is an indicator of your good financial management skills, thus making you eligible for all kinds of loans. It would also enable you to bargain for better interest rates with your bank. On the other hand, a low credit score indicates that you are not managing your finances well and raises doubt on your creditworthiness.
      <br /><br />
      So, long story short, the higher your credit score, the higher your creditworthiness. Similarly, a bad score makes you a bad borrower for financial institutions.
      <br /><br />
      How to calculate your credit score for free on mymoneykarma?
      <br /><br />
      Just follow these simple steps:
      <ul>
        <li>Visit our website</li>
        <li>Click the credit score option in the menu bar.</li>
        <li>Enter your name and email id.</li>
        <li>You will be allotted a group and entered in out waitlist</li>
        <li>Spread the word about mymoneykarma, and we will move you to a higher spot</li>
      </ul>
    </div>
  )
}, {
  question: 'Who can compute credit score?',
  answer: (
    <div>
      Credit score is calculated by Credit Information Companies. In India, there are 4 companies that perform this job. Equifax is one among them, and we give you your Equifax Credit Score. Now let’s try to understand how these companies actually calculate the credit score.
      <br /><br />
      When you make a transaction - the ones that are relevant to calculating your credit score - banks forward the details of it to all four credit agencies. It is a compulsion made by regulators for banks to share information with the credit agencies. Essentially, banks keep the Credit Information Companies updated about your monetary habits. Whenever a bank needs to check your credit score, they can reach out to any one of the bureaus. It doesn’t matter which one they approach because all four are equally at par with each other and would reflect nearly the same result for you.
      <br /><br />
      After receiving information from the bank, credit bureaus get down to the task of collecting more information about your financial habits from other banks and financial institutions. The credit bureaus then process this information to formulate what is called a credit report.
      <br /><br />
      So, now you must be wondering what a credit report is.
      <br /><br />
      It is nothing but your financial report card. Remember the ones you used to get in school? A credit report is similar, but it contains your credit score instead of academic grades. It’s wiser to check your score from time to time, preferably on a yearly basis.
    </div>
  )
}, {
  question: 'Why should I check my credit score?',
  answer: (
    <div>
      It is important to keep an eye on your credit score because it’s the best way to gauge your luck to get a new line of credit. <br /><br />
      Another reason to check your credit score is to determine why it dips and also to crosscheck whether the credit agencies committed any error while computing it. This would help you to make timely amends.
    </div>
  )
}, {
  question: 'Do all the four credit rating agencies follow the same methodology?',
  answer: (
    <div>
      The methodology adopted by these agencies to calculate your credit score might differ, but they all reflect the same result. So, no matter which agency computes, your credit score calculated by all will be very similar. This is more so because banks intimate relevant information to all the four agencies without any bias. Therefore, whichever agency your bank hires to calculate your credit score, there won’t be any major discrepancy.
    </div>
  )
}, {
  question: 'Why is mymoneykarma offering these services for free?',
  answer: (
    <div>
      We, at mymoneykarma, are on the mission to help you take charge of your financial future. As a first step, we want to empower you with your free credit score that will help you get credit whenever you need it.
      <br /><br />
      If you have a good credit score, then you can be confident that your loan application will be approved without any hassle. You also tend to be in a good position to bargain your interest rate with your lender bank and also ask for some additional benefits. On the contrary, seeking a loan with low credit score further reduces your credit score, let alone getting approval for a new credit line. Hence, check your credit score before you apply for a financial product.
      <br /><br />
      So, if you have a poor credit score, it would be wise to manage your finances better by paying your dues on time for a few months to reap its benefits in the form of good credit score awarded by the credit agencies.
      <br /><br />
      Therefore, we want to help you monitor your credit score regularly and ensure that you have a good credit score.
    </div>
  )
}, {
  question: 'How to analyze the credit score?',
  answer: (
    <div>
      Your credit score can be any number between 0-900 points. You can use the following points as a guideline to know what your score means:
      <ul>
        <li><b>Below 300:</b>You are too risky for any banker or lender. You do not have sufficient history to allow banks to judge your creditworthiness.</li>
        <li><b>300-499:</b>This range tends to be the poor score one. If an individual finds him/herself in this category, then he/she cannot afford to miss any payment on their ongoing credit card bills or loan installments.</li>
        <li><b>600-749:</b>This is the median range. In this category, some banks accept the loan requests and some don’t.</li>
        <li><b>750-900:</b>Being in this category gives you an edge over others as banks prefer clients in this category, and they themselves make efforts to offer loans and credit cards at attractive rates.</li>
      </ul>
    </div>
  )
}, {
  question: 'What are factors considered in the calculation of credit score?',
  answer: (
    <div>
      The following factors are considered in the calculation of your credit score:
      <ul>
        <li>
          <b>Credit history</b> <br /><br />
          This factor plays a crucial role in determining an individual’s credit score. It takes into account all the past payments of credit cards and loan installments, it checks whether they were paid on time, in advance or paid late, and also if an individual defaulted and failed to make any of his/her payments. To use this factor as an advantage for scoring a good credit score, all the payments should be made within the time limit.
        </li>
        <li>
          <b>Type of credit</b> <br /><br />
          This is another important factor that affects the credit score. All the 4 credit agencies take into consideration the type of loan (secured or unsecured) which have been taken in the past and how old the credit history is. Those with high credit score usually have a mix of secured and unsecured loans instead of only relying on a single type of debt like a personal loan or credit cards. A credit mix comprising credit cards (unsecured debt) along with a property loan (secured debt) may be better than simply relying on just a credit card to maintain a high score.
        </li>
        <li>
          <b>Credit Exposure</b> <br /><br />
          This also contributes to how high or low your credit score is. If you have some debt such as a credit card that you use, it skews the score to the higher side, while having no debt at all may work against you. In addition, individuals who have a lower debt to credit ratio {"(<40%)"} tend to have a higher credit score as it acts as a proof of their ability to take on additional debt and repay it in the future.
        </li>
        <li>
          <b>Other Factors:</b> <br /><br />
          There are some other factors that are also responsible for a good (high) or bad (low) credit score. The remaining of the total credit score is based on these factors. Applicants who have successfully handled credit such as loans and credit cards longer tend to have higher credit scores. On the other hand, individuals who have been denied new lines of credit multiple times tend to have a lower credit score as these lenders' checks show up as hard inquiries on your credit report.
        </li>
      </ul>
    </div>
  )
}, {
  question: 'What is the difference between a Credit Rating, Credit Score, and a Credit Report?',
  answer: (
    <div>
      The term credit score, credit rating, and credit reports can be a bit confusing. However, the following list should help you understand each of the terms:
      <br /><br />
      A credit score is a three-digit numerical representation of your financial credibility that can vary from a score of 300 to 900, while 'credit rating' refers to similar scores that are assigned to businesses and companies. The credit reports contain a detailed overview of your credit history based on your past credit and loan details.
      <br /><br />
      A credit score or credit rating can change on a monthly basis based on the information provided by banks and non-banking financial companies (NBFCs). If there are any changes, however, the information is stored on your credit report, and it stays for many years.
      <br /><br />
      A credit score is represented by a numerical value while the credit ratings are indicated in ratings such as A, A+, etc.
    </div>
  )
}, {
  question: 'Planing to apply for loan or credit card, Simple check points?',
  answer: (
    <div>
      <ul>
        <li>Your credit score must range between 300 and 900</li>
        <li>90 % of the loans are typically approved for individuals with a score greater than 750</li>
        <li>Higher the credit score, more likely are the chances of getting your loan approved</li>
      </ul>
    </div>
  )
}, {
  question: 'How can I get a free credit score?',
  answer: (
    <div>
      Talk to our customer centric team who will help you get your credit score for free in few minutes.
    </div>
  )
}, {
  question: 'What is Credit Score?',
  answer: (
    <div>
      There are several credit information companies that gave a detailed synopsis of your financial health. They also allocate a score that reflects your creditworthiness. Based on this score, your eligibility to apply for Loans or Credit Cards is estimated.
    </div>
  )
}, {
  question: 'How do you know your credit score? Is the credit report through mymoneykarma free?',
  answer: (
    <div>
      By using mymoneykarma credit analysis tool, you can get your credit report and check your credit history. It is a free service, and we don't charge anything.
    </div>
  )
}, {
  question: 'What are the benefits of having a good credit score?',
  answer: (
    <div>
      <ul>
        <li>Increased credit card limits</li>
        <li>Better loan rates</li>
        <li>Better credit card deals</li>
      </ul>
    </div>
  )
}, {
  question: 'What are the top 5 credit score mistakes?',
  answer: (
    <div>
      <ul>
        <li>Making less than the minimum payment</li>
        <li>Applying for too many new credit lines at once</li>
        <li>Not keeping tabs on your card balance</li>
        <li>Not maximizing your credit limit</li>
        <li>Having credit limits that are too low</li>
      </ul>
    </div>
  )
}]

const CreditScore = () => {
  return (
    <Layout title="Credit Score">
      <div className="header pb-0">
        <HeaderNav />
        <div className="header-content">
          <div className="header-content-text w-65"  style={{marginTop: 180}}>
            <div className="header-content-hero-title">Credit Scores are Complex</div>
            <div className="header-content-hero-subtitle">We simplify them for you.</div>
            <button className="mmk-btn header-content-btn active-btn">Start now</button>
          </div>
          <div className="header-content-img-wrapper w-35">
            <img src={HomeImg} alt="home_img" />
          </div>
        </div>
      </div>
      <div className="page-row cs-content">
        <div className="cs-content-text">
          <h1>Why us?</h1>
          <ul>
            <li><p>Free credit score analysis.</p></li>
            <li><p>Simplified credit report to help you understand <br /> your score.</p></li>
            <li><p>Personalized credit score insights to help you <br /> improve your score.</p></li>
          </ul>
        </div>
        <div className="cs-content-img-wrapper">
          <img src={CreditImg} alt="clay-mockup" />
        </div>
      </div>
      <div className="cs-hiw">
        <h1>Here's how it works</h1>
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
      <FAQ title="Have questions about credit score? Get the answers." q_as={Q_As} />
    </Layout>
  )
}

export default CreditScore