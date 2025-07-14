import React from "react";
import { useSelector, shallowEqual } from "react-redux";


export default function TopBar() {

  const isMobileState = useSelector(
    state => state.mainReducer.isMobile,
    shallowEqual
  );

  if (!isMobileState) {
    return (
      <div className="top-menu-block">
        <div className="head-container">
          <div className="head-wrapper">
            <div className="top-menu">
              <div className="top-menu-icon">
                <img className="topbar-icon" alt="Whatsapp" />
                
              </div>
              <div className="top-menu-icon">
                <img className="topbar-icon" alt="Whatsapp"/>
                
              </div>
              <div className="top-menu-icon">
                <img className="topbar-icon" alt="Whatsapp" />
               
              </div>
            </div>
            <div className="social-connect">
              <div>Síganos</div>
              <div className="social-connect-inner">
                
              </div>
              <div className="social-connect-inner">
                
              </div>
              <div className="social-connect-inner">
                
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  else {
    return null;
  }
}
