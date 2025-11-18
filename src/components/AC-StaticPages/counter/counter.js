// import React, { useState, useEffect, useRef } from "react";
// import CountUp from "react-countup";

// import job from "../../../assets/img/placentsn.webp";
// import ins from "../../../assets/img/yaen.webp";
// import awd from "../../../assets/img/awardsn.webp";
// import grad from "../../../assets/img/studentsi.webp";
// import clock from "../../../assets/img/hrs.webp";

// // const stats = [
// //   {
// //     icon: grad,
// //     end: 1500,
// //     suffix: "+",
// //     label: "Students",
// //   },
// //   {
// //     icon: ins,
// //     end: 15,
// //     suffix: "",
// //     label: "Years of\nAcademic\nExcellence",
// //   },
// //   {
// //     icon: clock,
// //     end: 200,
// //     suffix: "K+",
// //     label: "Mentoring\nHours",
// //   },
// //   {
// //     icon: awd,
// //     end: 30,
// //     suffix: "+",
// //     label: "Awards Won",
// //   },
// //   {
// //     icon: job,
// //     end: 100,
// //     suffix: "%",
// //     label: "Placement\nSupport",
// //   },
// // ];

// const ScrollTriggerCountUp = () => {
//   const [isInView, setIsInView] = useState(false);
//   const [isInViewTriggered, setIsInViewTriggered] = useState(false);
//   const countUpRef = useRef(null);

//   const checkInView = () => {
//     if (countUpRef.current) {
//       const rect = countUpRef.current.getBoundingClientRect();
//       const inView = rect.top < window.innerHeight && rect.bottom > 0;

//       if (inView && !isInViewTriggered) {
//         setIsInView(true);
//         setIsInViewTriggered(true);
//       }
//     }
//   };

//   useEffect(() => {
//     window.addEventListener("scroll", checkInView);
//     checkInView();
//     return () => {
//       window.removeEventListener("scroll", checkInView);
//     };
//   }, [isInViewTriggered]);

//   return (
// //     <div style={{ background: "#fff", padding: "40px 20px" }}>
// //       <div ref={countUpRef} style={{ textAlign: "center" }}>
// //         {isInView && (
// //           <div className="mblcounter">
// //   {stats.map((item, index) => (
// //   <div
// //     key={index}
// //     className="cntr"
// //     style={{
// //       display: "flex",
// //       alignItems: "center",
// //       marginBottom: "20px",
// //       width: "100%",
// //     }}
// //   >
   
// //     <div
// //       style={{
// //         flex: "0 0 90px",     
// //         width: "90px",
// //         height: "90px",
// //         display: "flex",
// //         alignItems: "center",
// //         justifyContent: "flex-start",
// //         paddingLeft: "12px", 
// //         boxSizing: "border-box",
// //       }}
// //     >
// //       <img
// //         src={item.icon}
// //         alt={item.label}
// //         style={{
// //           width: "70%",
// //           height: "70%",
// //           objectFit: "contain",
// //           display: "block",
// //         }}
// //       />
// //     </div>

// //     <div
// //       style={{
// //         flex: "1",            
// //         textAlign: "left",    
// //       }}
// //     >
// //       <div style={{ display: "flex", alignItems: "baseline" }}>
// //         <CountUp
// //           start={0}
// //           end={item.end}
// //           duration={3}
// //           separator=","
// //           style={{
// //             fontSize: "40px",
// //             fontWeight: "900",
// //             color: "#000",
// //             lineHeight: "1",
// //           }}
// //         />
// //         <span
// //           style={{
// //             fontSize: "40px",
// //             fontWeight: "900",
// //             color: "#000",
// //             marginLeft: "4px",
// //           }}
// //         >
// //           {item.suffix}
// //         </span>
// //       </div>
// //       <p
// //         style={{
// //           fontSize: "12px",
// //           fontWeight: "700",
// //           color: "#000",
// //           lineHeight: "1.3",
// //           marginTop: "4px",
         
// //         }}
// //       >
// //         {item.label}
// //       </p>
// //     </div>
// //   </div>
// // ))}



// //           </div>
// //         )}
// //       </div>
// //     </div>
//   );
// };

// export default ScrollTriggerCountUp;
