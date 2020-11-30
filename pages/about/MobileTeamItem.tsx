import React from 'react';
import InImg from '../../assets/mission/in.png';
import './TeamItem.scss';

export type TProps = {
  name: string,
  mission: string,
  social?: string,
  img: string,
  bank1: string,
  bank2: string
}

const MobileTeamItem = ({ img, name, mission, social, bank1, bank2 }: TProps) => {
  return(
    <div className="mobile-team-item">
      <img className="mobile-team-item-img" src={img} alt={name}/>
      <div className="mobile-team-item-name">{name}</div>
      <div className="mobile-team-item-mission">{mission}</div>
      <a href={social}><img src={InImg} alt="linkedin" className="mobile-team-item-linkimg"/></a>
      <div className="mobile-team-item-bankimg">
        <img src={bank1} alt="bank1" className="ml-8" />
        <img src={bank2} alt="bank2" className="ml-8" />
      </div>
    </div>
  )
}

export default MobileTeamItem