import React from 'react';
import EquifaxImg from '../../../assets/finance/equifax.png';

import './GetIntelligent.scss';

const GetIntelligent = () => (
  <div className="get-intelligent-wrapper">
    <h2>Get Intelligent about your finances</h2>

    <button className="mmk-btn active-btn">Sign Up</button>
    <div className="get-intelligent-wrapper-short-txt">
      <p>Credit Score powered by</p>
      <img src={EquifaxImg} alt="equifaximg" />
    </div>
  </div>
)

export default GetIntelligent