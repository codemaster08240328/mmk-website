import React from 'react';

import './style.scss';
import Layout from '../../components/Layout';
import HeaderNav from '../../components/HeaderNav';
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
import TeamItem, { TProps } from './TeamItem';

const teams: Array<TProps> = [
  {
    img: SidImg,
    name: 'Siddhartha Shekhar Singh',
    desc: (
      <div>
        Siddhartha is passionate about making a positive impact in the lives of people by helping them manage their finances well. He is an experienced consumer banking professional who has worked in insurance, lending, and wealth management businesses. He has a Master’s degree from <b>Stanford Graduate School of Business.</b>
      </div>
    ),
    mission: 'Cofounder CEO',
    bank1: StanfordImg,
    bank2: CitiBankImg,
    social: 'https://www.linkedin.com/in/siddhartha-shekhar-singh-3733105/'
  },
  {
    img: AlexImg,
    name: 'Alex Haro',
    desc: (
      <div>
        Alex lives the mission of using technology to impact people's lives. He cofounded and led Life360 as its CTO to a monthly user base of over 25 million, finally taking the company public in 2019. He studied Computer Science at <b> Pomona College / Harvey Mudd.</b>
      </div>
    ),
    mission: 'Cofounder CTO',
    bank1: PomonaImg,
    bank2: LifeImg,
    social: 'https://www.linkedin.com/in/alexanderharo/'
  },
  {
    img: VarunImg,
    name: 'Varun Agarwal',
    desc: (
      <div>
        Varun is passionate about creating an ecosystem in the financial services space in which all parties can benefit. He is an experienced consumer services professional who has worked in wealth management and insurance business. He has a Master’s degree from <b>Alliance Business Academy.</b>
      </div>
    ),
    mission: 'COO India',
    bank1: KarvyImg,
    bank2: CitiBankImg,
    social: 'https://in.linkedin.com/in/varun-mymoneykarma'
  },
  {
    img: RamImg,
    name: 'Ram Subramaniam',
    desc: (
      <div>
        Ram is passionate about applying technology and analytics to improve service standards in the consumer financial services industry. He is a serial entrepreneur, who has founded and run successful technology start-ups. He has a Master’s degree from <b>Stanford Graduate School of Business.</b>
      </div>
    ),
    mission: 'Cofounder',
    bank1: StanfordImg,
    bank2: CitiBankImg,
    social: 'https://www.linkedin.com/in/ramsubra'
  },
  {
    img: KunalImg,
    name: 'Kunal Yadav',
    desc: (
      <div>
        Kunal builds products blending behavioral science, data and technology to improve the daily life of users.He founded Gannak Analytics to leverage data science and solve business problems in healthcare, retail and finance. He previously worked in consulting and investment research with Andersen, EY and Fidelity Investments. He is a CA, CPA and has a Masters from <b>Stanford Graduate School of Business.</b>
      </div>
    ),
    mission: 'Chief product and analytics officer',
    bank1: StanfordImg,
    bank2: FidelityImg,
    social: 'https://www.linkedin.com/in/kunaly/'
  },
  {
    img: RohanImg,
    name: 'Rohan Arora',
    desc: (
      <div>
        Rohan prides himself in crafting tranformational journeys to deliver value and customer delight. He has previously worked in FMCG and Media and leveraged those experiences to found and run his own acclaimed foodtech venture. He holds a Computer Engineering Degree from the University of Rajasthan and an <b>MBA from FMS Delhi.</b>
      </div>
    ),
    mission: 'Cofounder',
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

const About = () => {
  return (
    <Layout title="Our mission">
      <div className="header">
        <HeaderNav />
        <div className="header-content">
          <div className="header-content-text" >
            <h1>Our mission</h1>
            <p className="header-content-description">
              Provide financial products that improve lives.
            </p>
          </div>
          <div className="header-content-img-wrapper">
            <img src={HomeImg} alt="home_img" />
          </div>
        </div>
      </div>
      <div className="about-content">
        <div className="about-who">
          <h2 className="mt-91">Leadership</h2>
          <p>
          “We are a group of Stanford alumni with a strong background in banking and technology, passionate about creating a positive impact in the lives of people by helping them manage their finances better. We believe that no two people have the same financial situation, so they should not be given one-size-fits-all financial recommendations. <br /><br /> We are providing <b>FREE</b> and <b>EASY</b> access to personalized financial management using proprietary algorithms.”
          </p>
        </div>
        <div className="about-team">
          <h2>Our Team</h2>
          <div className="about-team-members">
            {
              teams.map((item, index) => (
                <div className="about-team-item">
                  <TeamItem
                    key={index.toString()}
                    social={item.social}
                    name={item.name}
                    bank1={item.bank1}
                    bank2={item.bank2}
                    img={item.img}
                    desc={item.desc}
                    mission={item.mission}
                  />
                </div>
              ))
            }
          </div>
        </div>
        {/* <div className="about-advisers">
          <h2>Advisers</h2>
          <div className="about-advisers-members">
            {
              advisers.map((item, index) => (
                <div className="about-team-item">
                  <TeamItem
                    key={index.toString()}
                    social={item.social}
                    name={item.name}
                    bank1={item.bank1}
                    bank2={item.bank2}
                    img={item.img}
                    desc={item.desc}
                    mission={item.mission}
                  />
                </div>
              ))
            }
          </div>
        </div> */}
      </div>
    </Layout>
  )
}

export default About