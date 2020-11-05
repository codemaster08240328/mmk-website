import React from 'react';
import Layout from '../../components/Layout';
import HeaderNav from '../../components/HeaderNav';
import HomeImg from '../../assets/personalLoan/pl-home.png';
import ClayImg from '../../assets/personalLoan/clay-mockup.png';

import './style.scss';
import FAQ, { Tq_a } from '../../components/FAQ';

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

const Q_As: Array<Tq_a> = [
  {
    question: 'What is a personal loan?',
    answer: (
      <div>
        A personal loan is a loan approved to an individual to fund any personal expense, such as a wedding, a home renovation or a family vacation. Unlike many other kinds of loan, there are less regulations on how the borrowed amount is finally used - the borrower has greater freedom to use the money for any purpose they want.
        <br /><br />
        <b>Two attractive features in personal loans:</b>
        <br /><br />
        It provides flexibility of end-use as there are no restrictions on how you should spend the loan amount. This is in contrast to a home loan or auto loan because when you apply for such loans, you have to spend on the property or vehicle respectively. personal loans give you the freedom to use the money in the way you want.
        <br /><br />
        A personal loan is an 'unsecured loan,' meaning that you are not at all required to provide any security to the lender in the form of cash or any other assets. This might make it more attractive to some customers who may not be able to raise the cash required as collateral.
      </div>
    )
  }, {
    question: 'Where can I get a personal loan?',
    answer: (
      <div>
        You can approach one of the following institutions for a personal loan. All of these will assess your credit history and credit score. They will probably review other factors as well, including your current job and educational qualification before approving you for a loan.
        <br /><br />
        <b>Banks</b>
        <br /><br />
        It is not very easy to get a personal loan from a bank. However, it is the most preferred option as the procedure of obtaining a personal loan from a recognized and reputed financial institution is secure as well as convenient. In all probabilities, you will approach the bank where you already have an account.
        <br /><br />
        <b>P2P Lending</b>
        <br /><br />
        Peer-to-Peer lending is a recent option that has opened up in this field. They offer online suggestions and options for loans, which may be helpful even if you do not qualify for them through more traditional channels.
        <br /><br />
        Regardless of which among the three you choose to go with, make sure that you limit the number of applications, as too many of them can negatively affect your credit score. The moment you apply for a loan, the lender will check your credit report to assess your creditworthiness. This results in a hard inquiry and you lose a few points on your credit score.
        <br /><br />
        You might find other alternatives to personal loans. Payday and car title loans are among those. However, these loans are not recommended as they typically levy exorbitant interest rates and fees.
        <br /><br />
        <b>Getting a personal loan when your credit needs work.</b>
        <br /><br />
        If you have a credit history that needs work, you may consider getting a personal loan. It could be difficult to get and obviously more expensive. The lending body will evaluate your financial situation and your credit history before approving a loan. Interest rates might be very high if your credit score isn't good enough.
        <br /><br />
        If your credit score doesn't satisfy the lending body, you might need a co-signer who has a good credit history in order to get approval for such a loan. However, in that scenario, the co-signer would be legally responsible for repaying the debt. This might complicate the situation, and you are advised to think it through before taking a step ahead.
      </div>
    )
  }, {
    question: 'How do I apply for a Personal loan?',
    answer: (
      <div>
        There are various ways to apply for a loan. You can login and apply directly online at the bank/NBFC's website, or you can go in person to the branch to apply for a loan. Go through online comparison websites; or you can contact us at mymoneykarma.
        <br /><br />
        If you want to apply for a loan and think your credit score might not be good enough, mymoneykarma can guide you on how to boost your score in the most efficient and effective way so that your loan application is approved. You will also be matched with the most suitable loan offer for you in the market. With a good credit score, you can have a faster and hassle-free access to credit.
      </div>
    )
  }, {
    question: 'My credit score is below 750. Will I get a personal loan?',
    answer: (
      <div>
        There is no guarantee that your loan will be approved at a particular score. However, a higher score has a better chance of approval; at the same time, a person with a lower score might also get a loan approval. Therefore, you should not be worried if your credit score is below 750 as that does not mean an automatic loan rejection. Let's elaborate on different ranges of credit score and their impact on personal loan approval:
        <ul>
          <li>300-599: Your personal loan will not get approved because of low credit score. The application itself would initiate a hard inquiry that would serve as a warning sign to potential lenders that you don’t have a good credit history and are in dire need of credit. In such a situation, let mymoneykarma help you improve your <a href="https://www.mymoneykarma.com/blog/5-effective-ways-improve-credit-score/">credit score </a></li>
          <li>600-749: This may not be considered a high score, but you may have chances of getting your loan approved by lenders because lenders might approve your loan based on other factors like your salary, consistency of employment and other liabilities.</li>
          <li>750 Above: Great score to apply for personal loans. The chances of obtaining a loan are higher, but the lenders will still consider other factors such as your salary, other loans, cheque bounces, etc. before taking a final call.</li>
        </ul>
      </div>
    )
  }, {
    question: 'When should I opt for a personal loan?',
    answer: (
      <div>
        If you are in urgent need of money, then a personal loan might be the best option. However, it is important to keep in mind that you will be paying a higher rate of interest on this kind of loan. Therefore, you should have a plan for being able to make all your payments on time. It is important to have a good <a href="https://www.mymoneykarma.com/credit-score.html">credit score</a> to apply for a personal loan. Applications with low credit scores do not have a good chance of being approved; and with each rejection, your credit score goes further down. You can check your credit score at mymoneykarma for free and know which are the banks you should approach based on your <a href="https://www.mymoneykarma.com/credit-score.html">credit score</a>.
      </div>
    )
  }, {
    question: 'How do I know my credit score before applying for a personal loan?',
    answer: (
      <div>
        Let us help you with this. mymoneykarma helps you to get your credit score for free, so that you can take informed decisions.<br />
        mymoneykarma also helps you understand what are the best banks to apply for a personal loan based on your <a href="https://www.mymoneykarma.com/credit-score.html">credit score</a>
      </div>
    )
  }, {
    question: 'What are the documents needed to apply for personal loan?',
    answer: (
      <div>
        <ul>
          <li>Identity proof: Photocopy passport, voter ID card, and driving license.</li>
          <li>Address proof: Photocopy of ration card/telephone or electricity bill/rental agreement/passport.</li>
          <li>3 months' bank statement, updated bank passbook till 6 months</li>
          <li>Current dated salary certificate with Form 16 latest.</li>
        </ul>
      </div>
    )
  }, {
    question: 'What is a personal loan emi calculator or personal loan eligibility check?',
    answer: (
      <div>
        <a href="https://www.mymoneykarma.com/personal-loan-emi-calculator.html"> Personal loan emi calculator</a> is a handy tool to check your eligibility, calculate your emi amount, rate of interest and loan tenure at mymoneykarma.
      </div>
    )
  }
]


const PersonalLoan = () => {
  return (
    <Layout title="Personal Loans">
      <div className="header">
        <HeaderNav />
        <div className="header-content">
          <div className="header-content-text" >
            <div className="header-content-hero-title">Personal Loans at Lowest Interest Rates</div>
            <div className="header-content-hero-subtitle">Our recommendation engine finds the loan best suited to your needs in less than 60 seconds.</div>
          </div>
          <div className="header-content-img-wrapper">
            <img src={HomeImg} alt="home_img" />
          </div>
        </div>
      </div>
      <div className="page-row pl-content">
        <div className="pl-content-text">
          <h1>Why get a personal loan from us?</h1>
          <ul>
            <li><p>Matched to best option in 60 seconds or less.</p></li>
            <li><p>100% online.</p></li>
            <li><p>Approved in 1 hour or less.</p></li>
          </ul>
        </div>
        <div className="pl-content-img-wrapper">
          <img src={ClayImg} alt="clay-mockup" />
        </div>
      </div>
      <div className="pl-hiw">
        <h1>Here's how it works</h1>
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
      <FAQ title="Have questions about personal loans? Get the answers" q_as={Q_As} />
    </Layout>
  )
}

export default PersonalLoan