import React from 'react';
import InImg from '../../assets/mission/in.png';
import IllustrationImg from '../../assets/mission/illustration.png';
import './TeamItem.scss';

export type TProps = {
  name: string,
  mission: string,
  desc?: React.ReactNode,
  social?: string,
  img: string,
  bank1: string,
  bank2: string,
  profileImg?: string,
}

const TeamItem = ({ img, name, mission, bank1, bank2 }: TProps) => (
  <div className="team-item">
    <div className="team-item-img-wrapper">
      <img src={img} className="team-profile-img" alt="profile_img" />
    </div>
    <div className="team-item-content">
      <div className="team-item-name">{name}</div>
      <div className="team-item-mission">{mission}</div>
      <div className="team-item-social">
        <img src={bank1} alt="bank1" className="ml-8" />
        <img src={bank2} alt="bank2" className="ml-8" />
      </div>
      {/* <div className="team-item-divider" />
      <div className="team-item-desc">{desc}</div> */}
    </div>
  </div>
)

export default TeamItem