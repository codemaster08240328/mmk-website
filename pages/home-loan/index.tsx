import React from 'react';

import './style.scss';
import Layout from '../../components/Layout';
import HeaderNav from '../../components/HeaderNav';
import HomeImg from '../../assets/homeLoan/home.png';
import PexelsImg from '../../assets/homeLoan/pexels.png';
import FAQ, { Tq_a } from '../../components/FAQ';
import MobileHeaderNav from '../../components/mobile/HeaderNav';

const steps = [
  {
    title: 'Share details',
    description: 'Answer a few quick questions in less than 1 min.'
  },
  {
    title: 'Get matched',
    description: 'Based on the information you provide and your creditworthiness our algorithms match you with the best offer.'
  },
  {
    title: 'Get approved',
    description: 'Fill your loan application online without leaving our website and get expedited approvals.'
  },
]

const Q_As: Array<Tq_a> = [
  {
    question: 'Can I take a home loan now or wait?',
    answer: (
      <div>
        Home loan is a loan with a very long time-frame. Generally, people opt for a home loan for 20 to 30 years. Mostly, customers avail of loans on floating interest rates. The rates keep changing, and long-term loans for a tenure of 20 years cannot be predictable. Home loan rates will change in 20 years, so making a decision to take a home loan just based on the interest rates is not a smart idea. So, the idea of taking a loan at a lower interest rate has low relevance in the long run.
        <br />
        <br />
        Therefore, the right time to take a home loan is when:
        <ul>
          <li>The property you intend to buy is good and cannot be missed.</li>
          <li>The property is according to your requirements, and you think that the prices may increase in the future.</li>
          <li>The EMI that you have to pay per month is above your monthly expense budgets, and you can pay that amount comfortably.</li>
        </ul>
      </div>
    )
  },
  {
    question: 'How to apply for a home loan?',
    answer: (
      <div>
        Let's discuss the steps involved in applying for a home loan.
        <br />
        <br />
        The primary step involved in the process is to find the property that you are planning to buy. Then you should verify the documents of that property. Simultaneously, you can start searching for a lender or financial institution who can offer the best home loans after checking your eligibility criteria.
      </div>
    )
  },
  {
    question: 'What are the home loan eligibility factors?',
    answer: (
      <div>
        Banks and other NBFCs offer the loan amount based on your credit score, credit history, monthly income and the property value. The maximum amount that you get is typically 50-60% of your income.
      </div>
    )
  },
  {
    question: 'How to choose the best home loan?',
    answer: (
      <div>
        Comparing home loan interest rates of various banks is the most important feature in the home loan selection process. However, you should not forget to compare other charges like application charges, processing charges, and legal charges of various loan offers. To check the interest rates & other charges offered by various banks, mymoneykarma.com has brought in a Home Loan Comparison Chart across various government and private banks. Banks offer fixed and floating rates in home loans. Most customers choose floating rates.
        <br /><br />
        Home loan application process: After you have selected your lender, you have to fill in the home loan application form, where the lender requires complete details of your financial assets and other personal & professional details together with the property details & its costs.
        <br /><br />
        Home loan verification process: You need to submit the necessary documents to the bank, which will be compared and verified together with the details that you have mentioned in the application form.
      </div>
    )
  },
  {
    question: 'Is there a credit score check involved?',
    answer: (
      <div>
        Yes, banks check out the borrower’s loan eligibility and repayment capacity before deciding on the amount of loan to be approved. Banks determine the applicant's eligibility by checking his/her credit history through their credit score. Therefore, the credit score plays a critical role in deciding your eligibility for loan. If you have a low credit score, then banks umay pfront reject your application on the basis of earlier credit defaults; on the other hand, high credit score gives a green signal to your application
        <br /><br />
        Banks sanction loans & send the same to the borrower: After the credit appraisal of the borrower, banks decide the final amount & sanction the loan, with further details like the rate of interest, tenure and repayment period, etc.
        <br /><br />
        Copy of acceptance to the bank: The borrower has to send an acceptance letter to the bank, stating that he agrees to the terms and conditions of the bank.
        <br /><br />
        Legal check of all the documents: Banks further ask for the legal documents of the property that the borrower is willing to sign up as collateral to get the loan, and they check its authenticity. The next step is the valuation of the property, where an official of the concerned bank visits the location of the property; he conducts the verification process and sends it to the bank. Then the loan gets approved.
      </div>
    )
  },
  {
    question: 'How does the signing of home loan agreement & disbursal take place?',
    answer: (
      <div>
        The borrower signs the loan agreement & the bank disburses the loan amount after verifying the authenticity of all the required documents.
        <br /><br />
        In general, all the documents that are required to process your loan application are similar. Some banks may have specific requirements, but these are the documents generally required:.
        <ul>
          <li>Earning potential</li>
          <li>Age proof</li>
          <li>Address proof</li>
          <li>Income proof of the applicant</li>
          <li>6 months bank account statement</li>
          <li>Passport size photograph of the applicant</li>
        </ul>
      </div>
    )
  },
  {
    question: 'Why home loan?',
    answer: (
      <div>
        In the last few years, real estate has been one of the best investment options for investors. No matter how profitable it sounds, the rising growth of real estate as an investment option has led to high-reaching prices of property in the country. Both land and buildings have become quite expensive for customers to buy. This has led to an upsurge in the number of home loan applications each day.
        <br /><br />
        Even though rising prices of real estate is one reason for borrowers to avail of home loans, another major reason behind this is that property transactions are generally hefty as compared with other daily financial transactions. It is not at all guaranteed that the buyer will have the entire property cost available with him or her at the time of acquiring the property. This is where home loans step in and bridge the gap between property seller and buyer.
        <br /><br />
        Banks pay on behalf of property buyers in return for a particular rate of interest. The general rule of 80-20 applies here, which means that banks offer only 80% of the value of a home to customers and the remaining 20% is to be borne by the property buyer. This serves as a win-win proposition for both banks & capital buyers, as the banks are able to make profits by loaning out money while buyers are able to assimilate the entire cost of the property and pay it back within a fixed period of time.
        <br /><br />
        Home loans are eligible for certain income tax exemptions, which can be used to save up on the amount of income tax that an individual pays every financial year. According to the income tax act, under section 24, tax benefit can be claimed on up to Rs.1.5 lakh out of the interest component of your home loan. In case you reside in the house bought through loan, then you can claim a maximum exemption of Rs.1 lakh on the principal amount of the home loan too.
      </div>
    )
  },
  {
    question: 'What are the different types of a home loan?',
    answer: (
      <div>
        Depending upon the type of property being purchased and the amount of loan being availed, home loans can be classified into the following different types. In India, banks and NBFCs generally offer home loans under any one of the following listed variants of housing loans.
        <br /><br />
        <ul>
          <li>New Housing Loans</li>
          <li>Refinance</li>
        </ul>
      </div>
    )
  },
  {
    question: 'What are the basic features of a home loan?',
    answer: (
      <div>
        Some of the most outstanding features of home loans are outlined below.
        <ul>
          <li>Home Loans are ensured advances. This means that home loans are offered in return for a security deposited by the loan borrower.</li>
          <li>Interest rates are flexible, being either fixed or floating. The Indian government has come up with a new marginal cost of funds based lending rate or MCLR, which is to be used by banks to decide the rate of interest at which they can lend money to a home loan applicant. The earlier base rate used to be the rate based on which banks used to decide their lending rate. MCLR is a more flexible rate that takes a lot of factors into account like funding composition and strategies. MCLR can be reset by banks after every specific interval of time. For example, if a bank decides to reset their MCLR annually, then your home loan rate will reset after every one year.</li>
          <li>Home loan interest rates are lower when compared to unsecured personal advances. Unsecured personal loans have a higher risk ratio associated with them since the bank does not have any security deposit to fall back on in case of a loan default.</li>
          <li>The advance can be used to fund property for residential or investment purposes. Whether you need a house to stay in or for investment purposes, home loan can be availed from any bank of your choice.</li>
          <li>Amounts offered are higher on other types of loans, usually up to certain percent of the property value.</li>
          <li>Considering the cost of buying property as compared to any other commodity, the loan amount offered and sanctioned is substantial as compared to other loan types. Hence, the loan tenures offered for home loans are also longer than those for other loans.</li>
          <li>Repayments are made in EMIs (Equated Monthly Installments). Since the amounts approved towards home loans are usually huge and the tenure also is long, the repayment of home loans is done in equal monthly installments.</li>
          <li>Prepayments are allowed, in order to cut down liabilities. Prepayment of home loan is allowed by all banks - private and public. Earlier, some banks used to charge pre-payment fees in case of earlier than stipulated repayment of home loan amount. However, these days, most public & private banks let borrowers pay off their home loan as and when convenient. Most banks have stopped charging prepayment charges for the same.</li>
          <li>Home loans are long-term in nature and usually vary between 5 - 30 financial years. Since the loan quantum for home loans is generally greater than all other types of loans, the repayment period is quite longer than that of any other loan type.</li>
          <li>Non-interest charges include processing fees, pre-payment charges, inspection fees, documentation fees, etc. Apart from the interest charged on the home loan amount, there also are various charges that are levied while the loan sanction process is under way. These charges are communicated to loan applicants at the time of application.</li>
          <li>Home loans allow for joint loan applications. Since the loan quantum is high and the tax benefit also is good, banks allow for co-application or joint application of home loans.</li>
        </ul>
        <br />
        Home loans certify for tax benefits as per provisions of the IT Act, 1961, and hence make for a good investment option.
      </div>
    )
  },
  {
    question: 'What about home loan interest rates?',
    answer: (
      <div>
        The interest rate charged on any home loan scheme is one of the primary features. The rate of interest is what generally helps a customer decide in favor of or against a home loan scheme. Fixed and floating rate of interest are the two types of interest rates that banks normally ask customers to choose from at the time of home loan application.
        <br /><br />
        <b>Visit</b>: <a href="https://www.mymoneykarma.com/refinance-and-home-loan-deals-in-India.html">Home loan interest rates in India</a>
      </div>
    )
  },
  {
    question: 'What are the eligibility factors of the home loan?',
    answer: (
      <div>
        To get a home loans quickly, there are certain eligibility criteria to adhere to. Please refer to the details mentioned below for home loan eligibility:
        <ul>
          <li>Age: 21 – 65 Years</li>
          <li>Income range: 5-7 lakhs</li>
          <li>Employment type: self or salaried</li>
          <li>Status of employment: Salaried/Business</li>
          <li>Residence type: Rental/Own</li>
          <li>Status of resident: At least a year</li>
          <li>Credit rating: Credit score rating from a recognized agency</li>
          <li>Type of property: Effects on loan eligibility</li>
        </ul>

      </div>
    )
  }
]

const HomeLoan = () => {
  return (
    <Layout title="Home Loans">
      <div className="header">
        <HeaderNav />
        <MobileHeaderNav />
        <div className="header-content">
          <div className="header-content-text" >
            <div className="header-content-hero-title">Home Loans at Lowest Interest Rates</div>
            <div className="header-content-hero-subtitle">
              A home is a huge investment, and buying a home can be stressful. We help you understand your options and simhlify your journey toward owning your dream home.
            </div>
            <button className="mmk-btn header-content-btn active-btn desktop">See my options</button>
          </div>
          <div className="header-content-img-wrapper">
            <img src={HomeImg} alt="home_img" />
          </div>
          <div>
            <button className="mmk-btn mobile-header-content-btn active-btn mobile">See my options</button>
          </div>
        </div>
      </div>
      <div className="page-row hl-content mobile-not-reversed">
        <div className="hl-content-text">
          <h1>Why get your home loan from us?</h1>
          <ul>
            <li className="desktop"><p>Save time by evaluating offers from many of <br /> the top providers in the market in one place.</p></li>
            <li className="mobile"><p>Save time by evaluating offers from many of the top providers in the market in one place.</p></li>
            <li className="desktop"><p>Get matched with the cheapest home loan offer <br /> in the market.</p></li>
            <li className="mobile"><p>Get matched with the cheapest home loan offer in the market.</p></li>
            <li><p>Get expedited approvals.</p></li>
          </ul>
        </div>
        <div className="hl-content-img-wrapper">
          <img src={PexelsImg} alt="clay-mockup" />
        </div>
      </div>
      <div className="hl-hiw">
        <h1>Here's how it works</h1>
        <div className="hl-hiw-steps">
          {
            steps.map((item, index) => (
              <div className="hl-hiw-steps-item" key={index.toString()}>
                <h4>
                  {`Step${index + 1}`}
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
      <FAQ title="Have questions about home loans? Get the answers" q_as={Q_As} />
    </Layout>
  )
}

export default HomeLoan