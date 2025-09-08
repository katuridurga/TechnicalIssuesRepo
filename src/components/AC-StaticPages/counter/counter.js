import React, { useState, useEffect, useRef } from 'react';
import CountUp from 'react-countup'; // For easy count-up animations
import job from '../../../assets/img/11m.webp';
import ins from '../../../assets/img/12m.webp';
import awd from '../../../assets/img/13m.webp';
import grad from '../../../assets/img/14m.webp';
import clock from '../../../assets/img/15m.webp';

const ScrollTriggerCountUp = () => {
  const [isInView, setIsInView] = useState(false);
  const countUpRef = useRef(null);

  // Function to check if the element is in view
  const checkInView = () => {
    if (countUpRef.current) {
      const rect = countUpRef.current.getBoundingClientRect();
      const isInView = rect.top >= 0 && rect.bottom <= window.innerHeight;
      // Trigger count-up only once
      if (isInView && !isInViewTriggered) {
        setIsInView(true);
        setIsInViewTriggered(true); // Prevent further triggering
      }
    }
  };

  const [isInViewTriggered, setIsInViewTriggered] = useState(false);

  // Set up scroll event listener
  useEffect(() => {
    window.addEventListener('scroll', checkInView);
    checkInView(); // Check on mount in case element is already in view

    // Clean up the event listener
    return () => {
      window.removeEventListener('scroll', checkInView);
    };
  }, [checkInView]);

  return (
    <div style={{ height: 'auto' , background:"#000"}}> {/* Makes the page tall enough to scroll */}
      <div
        ref={countUpRef}
        style={{
         // Position the element towards the middle of the viewport
          textAlign: 'center',
          fontSize: '50px',
        }}
      >
        {isInView && (
            <div className='mblcounter'>
        <div className="cntr" style={{ display: "flex", alignItems: "center", gap: "20px", minHeight: "120px" }}>
  <div className="left">
    <img src={grad} alt="count" width="90" height="90" />
  </div>
  <div className="right" style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
    <div style={{ minWidth: "120px", display: "flex", alignItems: "center" }}>
      <CountUp
        start={0}
        end={1000}
        duration={3}
        separator=","
        style={{ fontSize: "40px", fontWeight: "900", color: "#fff" }}
      />
      <span style={{ fontSize: "40px", fontWeight: "900", color: "#fff" }}>+</span>
    </div>
    <p style={{ fontSize: "20px", fontWeight: "900", color: "#fff" }}>Students</p>
  </div>
</div>
<div className="cntr" style={{
  display: "flex",
  alignItems: "center",
  gap: "20px",
  minHeight: "120px" // reserve enough vertical space
}}>
  <div className="left">
    <img src={ins} alt="insurance" width="90" height="90" />
  </div>
  <div className="right" style={{
    display: "flex",
    flexDirection: "column",
    justifyContent: "center"
  }}>
    <div style={{
      minWidth: "60px", // reserves width for 2-digit numbers
      display: "flex",
      alignItems: "center"
    }}>
      <CountUp
        start={0}
        end={15}
        duration={3}
        separator=","
        style={{ fontSize: "40px", fontWeight: "900", color: "#fff" }}
      />
    </div>
    <p style={{ fontSize: "20px", fontWeight: "900", color: "#fff" }}>
      Years of <br/> Academic <br/> Excellence
    </p>
  </div>
</div>

          <div className="cntr">
          <div className="left">

<div> <img src={clock} alt="clock" width="90" height="90" /></div>
</div>
           <div className='right'>
           <CountUp start={0} end={200} duration={3} separator="," style={{fontSize:"40px",fontWeight:"900",color:"#fff"}}/><span style={{fontSize:"40px",fontWeight:"900",color:"#fff"}}>K+</span>
           <p style={{fontSize:"20px",fontWeight:"900",color:"#fff"}}>Mentoring <br/> Hours</p>
           </div>
           </div>
           <div className="cntr" style={{
  display: "flex",
  alignItems: "center",
  gap: "20px",
  minHeight: "120px"
}}>
  <div className="left">
    <img src={awd} alt="award" width="90" height="90" style={{ display: "block" }} />
  </div>
  <div className="right" style={{
    display: "flex",
    flexDirection: "column",
    justifyContent: "center"
  }}>
    <div style={{
      minWidth: "70px",
      display: "flex",
      alignItems: "center"
    }}>
      <CountUp
        start={0}
        end={30}
        duration={3}
        separator=","
        style={{ fontSize: "40px", fontWeight: "900", color: "#fff" }}
      />
      <span style={{ fontSize: "40px", fontWeight: "900", color: "#fff" }}>+</span>
    </div>
    <p style={{ fontSize: "20px", fontWeight: "900", color: "#fff" }}>
      Awards Won
    </p>
  </div>
</div>

<div className="cntr" style={{
  display: "flex",
  alignItems: "center",
  gap: "20px",
  minHeight: "120px"
}}>
  <div className="left">
    <img
      src={job}
      alt="count"
      width="90"
      height="90"
      style={{ display: "block" }}
    />
  </div>
  <div className="right" style={{
    display: "flex",
    flexDirection: "column",
    justifyContent: "center"
  }}>
    <div style={{
      minWidth: "90px", // reserve space for "100%"
      display: "flex",
      alignItems: "center"
    }}>
      <CountUp
        start={0}
        end={100}
        duration={3}
        separator=","
        style={{ fontSize: "40px", fontWeight: "900", color: "#fff" }}
      />
      <span style={{ fontSize: "40px", fontWeight: "900", color: "#fff" }}>%</span>
    </div>
    <p style={{
      fontSize: "20px",
      fontWeight: "900",
      color: "#fff",
      lineHeight: "1.3"
    }}>
      Placement <br /> Support
    </p>
  </div>
</div>

         </div>
        )}
      </div>
    </div>
  );
};

export default ScrollTriggerCountUp;
