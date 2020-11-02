import React from 'react';
import Layout from '../../components/Layout';
import HeaderNav from '../../components/HeaderNav';
import GetIntelligent from './components/GetIntelligent';
import CreditScoreImg from '../../assets/finance/credit_score.png';
import RecommendationImg from '../../assets/finance/recomendation.png';
import InterestSavingsImg from '../../assets/finance/interest_savings.png';
import AxisBankImg from '../../assets/finance/axis.png';
import BajajImg from '../../assets/finance/bajaj.png';
import DcbBankImg from '../../assets/finance/dcb.png';
import DhflBankImg from '../../assets/finance/dhfl.png';
import FullertonBankImg from '../../assets/finance/fullerton-india.png';
import HdbBankImg from '../../assets/finance/hdb.png';
import HdfcBankImg from '../../assets/finance/hdfc-bank.png';
import HdfcSalesBankImg from '../../assets/finance/hdfc-sales-pvt.png';
import HeroBankImg from '../../assets/finance/hero.png';
import HindujaBankImg from '../../assets/finance/hinduja-housing.png';
import IcicBankImg from '../../assets/finance/icici-bank.png';
import IdfcBankImg from '../../assets/finance/idfc.png';
import IndiaBullsBankImg from '../../assets/finance/india-bulls-housing.png';
import IndusindBankImg from '../../assets/finance/indusind-bank.png';
import LicHflBankImg from '../../assets/finance/lic-hfl.png';
import LtBankImg from '../../assets/finance/lt.png';
import PnbBankImg from '../../assets/finance/pnb-housing.png';
import RblBankImg from '../../assets/finance/rbl-bank.png';
import SbfcBankImg from '../../assets/finance/sbfc.png';
import TataBankImg from '../../assets/finance/tata-capital.png';
import YesBankImg from '../../assets/finance/yes-bank.png';
import AdityaImg from '../../assets/finance/aditya-birla.png';


import HomeImg from '../../assets/finance/home.png';
import './style.scss';

const contents = [
  {
    imgSrc: CreditScoreImg,
    title: 'See where you are',
    description: 'Understand your current financial position and how you can improve it.'
  },
  {
    imgSrc: RecommendationImg,
    title: 'Find what is best for you',
    description: 'Get personalized recommendations to improved your finances.'
  },
  {
    imgSrc: InterestSavingsImg,
    title: 'Completely Unbiased',
    description: 'Our recommendations will always be unbiased and focused on improving your finances.'
  }
];

const banks = [
  AdityaImg, AxisBankImg, BajajImg, DcbBankImg, DhflBankImg, FullertonBankImg, HdbBankImg, HeroBankImg, HindujaBankImg, IcicBankImg, HdfcSalesBankImg, HdfcBankImg, IdfcBankImg, PnbBankImg, LtBankImg, LicHflBankImg, IndusindBankImg, IndiaBullsBankImg, '', RblBankImg, YesBankImg, TataBankImg, SbfcBankImg, ''
]

const IntelligentFinance = () => (
  <Layout title="Intelligent Finance">
    <div className="header">
      <HeaderNav />
      <div className="header-content">
        <div className="header-content-text" >
          <h1>Intelligent Finance</h1>
          <p className="header-content-description">Faster, easier and secure way of managing your money.</p>
          <button className="mmk-btn header-content-btn active-btn">Get started</button>
        </div>
        <div className="header-content-img-wrapper">
          <img src={HomeImg} alt="home_img" />
        </div>
      </div>
    </div>
    <div className="intelligence-page-content">

      {
        contents.map((item, index) => (
          <div className={index % 2 === 0 ? "page-row" : "page-row reversed"} key={index.toString()}>
            <div className="page-row-item-img">
              <img src={item.imgSrc} alt={`page_content_row_image_${index}`} />
            </div>
            <div className="page-row-item-content">
              <h2>{item.title}</h2>
              <p className="pr-40 mt-24">{item.description}</p>
            </div>
          </div>
        ))
      }
    </div>
    <GetIntelligent />
    <h2 className="bank-partner-title">Banking Partners</h2>
    <div className="bank-partner-wrapper">
      {banks.map((item, index) => (
        <div className="bank-img-wrapper">
          {item && <img src={item} alt={`${index}-bank-img`} />}
        </div>
      ))}
    </div>
  </Layout>)
  ;

export default IntelligentFinance;