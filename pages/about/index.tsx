import React, { useState } from 'react';

import './style.scss';
import Layout from '../../components/Layout';
import HeaderNav from '../../components/HeaderNav';
import MobileHeaderNav from '../../components/mobile/HeaderNav';
import HomeImg from '../../assets/mission/revenue.png';
import RamImg from '../../assets/mission/ramsubra.png';
import VarunImg from '../../assets/mission/varun.png';
import RohanImg from '../../assets/mission/rohan.png';
import AlexImg from '../../assets/mission/alex.png';
import SidImg from '../../assets/mission/sid.png';
import KunalImg from '../../assets/mission/kunal.png';
import StanfordImg from '../../assets/mission/stanford-business.png';
import KarvyImg from '../../assets/mission/karvy.png'
import FmsImg from '../../assets/mission/fms.png'
import HuiImg from '../../assets/mission/hui.png'
import PomonaImg from '../../assets/mission/pomona.png'
import LifeImg from '../../assets/mission/life.png'
import FidelityImg from '../../assets/mission/fidelity.png'
import CitiBankImg from '../../assets/mission/citibank.png';
import TrustImg from '../../assets/mission/value-trust.png';
import CustomerImg from '../../assets/mission/value-customer-first.png';
import IntegrityImg from '../../assets/mission/value-integrity.png';
import ExcellenceImg from '../../assets/mission/value-excellence.png';
import RaiseBarImg from '../../assets/mission/value-raise-bar.png';
import TeamItem, { TProps } from './TeamItem';
import MobileTeamItem from './MobileTeamItem';

import VarunProfileImg from '../../assets/mission/varun-agarwal.png';
import SidProfileImg from '../../assets/mission/siddharthas.png';
import AlexProfileImg from '../../assets/mission/alexHaro.png';
import RamProfileImg from '../../assets/mission/ramsubra_profile.png';
import KunalProfileImg from '../../assets/mission/kunal_profile.png';
import RohanProfileImg from '../../assets/mission/Rohan_profile.png';
import InImg from '../../assets/mission/linkedin.png';
import CloseBtn from '../../assets/Closebutton.png';

const teams: Array<TProps> = [
  {
    img: SidImg,
    profileImg: SidProfileImg,
    name: 'Siddhartha Shekhar Singh',
    desc: (
      <div>
        Siddhartha is passionate about making a positive impact in the lives of people by helping them manage their finances well.
        <br /><br />
        He is an experienced consumer banking professional who has worked in insurance, lending, and wealth management businesses.
        <br /><br />
        He has a Master’s degree from <br />
        <b>Stanford Graduate School of Business.</b>
      </div>
    ),
    mission: 'COFOUNDER - CEO',
    bank1: StanfordImg,
    bank2: CitiBankImg,
    social: 'https://www.linkedin.com/in/siddhartha-shekhar-singh-3733105/'
  },
  {
    img: AlexImg,
    profileImg: AlexProfileImg,
    name: 'Alex Haro',
    desc: (
      <div>
        Alex lives the mission of using technology to impact people's lives.
        <br /><br />
        He cofounded and led Life360 as its CTO to a monthly user base of over 25 million, finally taking the company public in 2019.
        <br /><br />
        He studied Computer Science at <br />
        <b> Pomona College / Harvey Mudd.</b>
      </div>
    ),
    mission: 'COFOUNDER - CTO',
    bank1: PomonaImg,
    bank2: LifeImg,
    social: 'https://www.linkedin.com/in/alexanderharo/'
  },
  {
    img: VarunImg,
    profileImg: VarunProfileImg,
    name: 'Varun Agarwal',
    desc: (
      <div>
        Varun is passionate about creating an ecosystem in the financial services space in which all parties can benefit.
        <br /><br />
        He is an experienced consumer services professional who has worked in wealth management and insurance business.
        <br /><br />
        He has a Master’s degree from<br />
        <b>Alliance Business Academy.</b>
      </div>
    ),
    mission: 'COO INDIA',
    bank1: KarvyImg,
    bank2: CitiBankImg,
    social: 'https://in.linkedin.com/in/varun-mymoneykarma'
  },
  {
    img: RamImg,
    profileImg: RamProfileImg,
    name: 'Ram Subramaniam',
    desc: (
      <div>
        Ram is passionate about applying technology and analytics to improve service standards in the consumer financial services industry.
        <br /><br />
        He is a serial entrepreneur, who has founded and run successful technology start-ups.
        <br /><br />
        He has a Master’s degree from <br />
        <b>Stanford Graduate School of Business.</b>
      </div>
    ),
    mission: 'COFOUNDER',
    bank1: StanfordImg,
    bank2: CitiBankImg,
    social: 'https://www.linkedin.com/in/ramsubra'
  },
  {
    img: KunalImg,
    profileImg: KunalProfileImg,
    name: 'Kunal Yadav',
    desc: (
      <div>
        Kunal builds products blending behavioral science, data and technology to improve the daily life of users.
        <br /><br />
        He founded Gannak Analytics to leverage data science and solve business problems in healthcare, retail and finance. He previously worked in consulting and investment research with Andersen, EY and Fidelity Investments.
        <br /><br />
        He is a CA, CPA and has a Masters from <b>Stanford Graduate School of Business.</b>
      </div>
    ),
    mission: 'CHIEF PRODUCT AND ANALYTICS OFFICER',
    bank1: StanfordImg,
    bank2: FidelityImg,
    social: 'https://www.linkedin.com/in/kunaly/'
  },
  {
    img: RohanImg,
    profileImg: RohanProfileImg,
    name: 'Rohan Arora',
    desc: (
      <div>
        Rohan prides himself in crafting tranformational journeys to deliver value and customer delight.
        <br /><br />
        He has previously worked in FMCG and Media and leveraged those experiences to found and run his own acclaimed foodtech venture.
        <br /><br />
        He holds a Computer Engineering Degree from the University of Rajasthan and an <b>MBA from FMS Delhi.</b>
      </div>
    ),
    mission: 'BUSINESS HEAD',
    bank1: FmsImg,
    bank2: HuiImg,
    social: 'https://www.linkedin.com/in/rohan-arora-bueno/'
  }
]

// const advisers: Array<TProps> = [
//   {
//     img: RamImg,
//     name: 'Ram Subramaniam',
//     desc: (
//       <div>
//         Ram is passionate about applying technology and analytics to improve service standards in the consumer financial services industry. He is a serial entrepreneur, who has founded and run successful technology start-ups. He has a Master’s degree from <b>Stanford Graduate School of Business.</b>
//       </div>
//     ),
//     mission: 'Cofounder',
//     bank1: StanfordImg,
//     bank2: CitiBankImg,
//     social: 'https://www.linkedin.com/in/ramsubra'
//   },
//   {
//     img: RohanImg,
//     name: 'Rohan Arora',
//     desc: (
//       <div>
//         Rohan prides himself in crafting tranformational journeys to deliver value and customer delight. He has previously worked in FMCG and Media and leveraged those experiences to found and run his own acclaimed foodtech venture. He holds a Computer Engineering Degree from the University of Rajasthan and an <b>MBA from FMS Delhi.</b>
//       </div>
//     ),
//     mission: 'Cofounder',
//     bank1: FmsImg,
//     bank2: HuiImg,
//     social: 'https://www.linkedin.com/in/rohan-arora-bueno/'
//   },
// ]

const values = [
  {
    img: TrustImg,
    title: 'Trust',
    description: 'We work tirelessly to earn and keep customer trust by helping them to save money or to make money.' 
  }, {
    img: CustomerImg,
    title: 'Customers first',
    description: 'We exist because of our customers and obsess to provide them with the best experience. We consider the impact on lives before we think about our interest.'
  }, {
    img: IntegrityImg,
    title: 'Integrity',
    description: 'We act with integrity at all times and do what’s right even when no one is watching.'
  }, {
    img: ExcellenceImg,
    title: 'Excellence',
    description: 'We demand excellence and have relentlessly high standartsfor our selves and the productsand services we deliver.'
  }, {
    img: RaiseBarImg,
    title: 'Raise the bar',
    description: 'We continuosly push the envelope, make bold bets and redefine the paradigm.'
  }
]

const ValueItem: React.FC<{imgSrc: string, title: string, description: string}> = ({imgSrc, title, description}) => (
  <div className="about-value-item">
    <img src={imgSrc} alt={title}/>
    <h2>{title}</h2>
    <p>{description}</p>
  </div>
);

const About = () => {
  const [openProfile, setopenProfile] = useState(false);
  const [selected, setSelected] = useState(0);

  return (
    <Layout title="Our mission">
      <div className="header">
        <HeaderNav />
        <MobileHeaderNav />
        <div className="header-content">
          <div className="header-content-text" style={{marginTop: 200}} >
            <div className="header-content-hero-title">Our mission</div>
            <div className="header-content-hero-subtitle">
              Provide financial products that improve lives.
            </div>
          </div>
          <div className="header-content-img-wrapper">
            <img src={HomeImg} alt="home_img" />
          </div>
        </div>
      </div>
      <div className="about-content">
        <div className="about-value">
          <h1>Our values</h1>
          <div className="about-value-items">
            {values.map(item => (<ValueItem title={item.title} description={item.description} imgSrc={item.img} key={item.title} />))}
          </div>
        </div>
        <div className="about-team">
          <h1 className="mmt-32">Leadership</h1>
          <p className="about-team-description">
          We are a group of Stanford alumni with a strong background in banking and technology, passionate about creating a positive impact in the lives of people by helping them manage their finances better.
          </p>
          <div className="about-team-members">
            {
              teams.map((item, index) => (
                <div className="about-team-item" key={index.toString()} onClick={() => {
                  setopenProfile(true);
                  setSelected(index);
                }}>
                  <TeamItem
                    name={item.name}
                    bank1={item.bank1}
                    bank2={item.bank2}
                    img={item.img}
                    mission={item.mission}
                  />
                  <MobileTeamItem 
                    social={item.social}
                    name={item.name}
                    bank1={item.bank1}
                    bank2={item.bank2}
                    img={item.img}
                    mission={item.mission}
                  />
                </div>
              ))
            }
          </div>
          <div style={{display: 'flex', justifyContent: 'center'}}>
            <div className="mobile-view-more-button mobile">
              View more
            </div>
          </div>
        </div>
        {
          openProfile &&
          <div className="member-profile">
            <div className="member-profile-content">
              <div className="member-profile-content-close" onClick={() => setopenProfile(false)}>
                <img src={CloseBtn} alt="close button"/>
              </div>
              <div className="member-profile-img-wrapper">
                <img src={teams[selected].profileImg} alt="profile_img"/>
              </div>
              <div className="member-profile-text-wrapper">
                <div className="member-profile-text-wrapper-name">{teams[selected].name}</div>
                <div className="member-profile-text-wrapper-mission">{teams[selected].mission}</div>
                <div className="member-profile-text-wrapper-description">
                  {teams[selected].desc}
                </div>
                <div className="member-profile-social">
                  <a href={teams[selected].social}>
                    <img src={InImg} alt="linkedin-connect-img"/>
                  </a>
                </div>
              </div>
            </div>
          </div>
        }
      </div>
    </Layout>
  )
}

export default About