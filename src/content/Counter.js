import React from "react";
import CountUp from "react-countup";
import { CiTrophy, CiBookmarkCheck, CiHeart, CiAlarmOn, CiUser  } from "react-icons/ci";



export default function Counter({ number, title }) {
  return (
    <div className="number">
      <div className="CounterIcon">
        {title === "Years of Exp" ? <CiTrophy />: null}
        {title === "Awards Won" ? <CiBookmarkCheck />: null}
        {title === "Placement Support" ? <CiHeart  />: null}
        {title === "Students" ? <CiUser />: null}
        {title === "Mentoring Hours" ? <CiAlarmOn />: null}
        
        </div>
      <div>
      <CountUp 
        start={0}
        duration={10} 
        className="counter" 
        end={number} />
      <span>{title}</span>
      </div>
    </div>
  );
}
