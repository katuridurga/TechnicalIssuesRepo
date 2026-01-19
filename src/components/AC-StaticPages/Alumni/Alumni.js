//import React, { useState } from 'react'
import React, { useState } from 'react';
import "./Alumni.css";
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Marquee from "react-fast-marquee";
import r1 from "../../../assets/img/partners/r1.webp";
import r2 from "../../../assets/img/partners/r2.webp";
import r4 from "../../../assets/img/partners/r4.webp";
import r5 from "../../../assets/img/partners/r5.webp";
import r6 from "../../../assets/img/partners/r6.webp";
import r7 from "../../../assets/img/partners/r7.webp";
import r8 from "../../../assets/img/partners/SumoDigital.webp";
import r9 from "../../../assets/img/partners/Ubisoft.webp";
import r10 from "../../../assets/img/partners/Sony.webp";
import r11 from "../../../assets/img/partners/Qualcomm.webp";
import r12 from "../../../assets/img/partners/Juego.webp";
import r13 from "../../../assets/img/partners/Gamitronics.webp";
import r14 from "../../../assets/img/partners/GSNgames.webp";
import speaker7 from "../../../assets/img/alumni-images/WEBSITE-ALUMNI-SUCCESS/DennchenLama.webp";
import speaker8 from "../../../assets/img/alumni-images/WEBSITE-ALUMNI-SUCCESS/DevashishTiwari.webp";
import speaker9 from "../../../assets/img/alumni-images/WEBSITE-ALUMNI-SUCCESS/DikshaSubba.webp";
import speaker10 from "../../../assets/img/alumni-images/WEBSITE-ALUMNI-SUCCESS/EkagraMittal.webp";
import speaker11 from "../../../assets/img/alumni-images/WEBSITE-ALUMNI-SUCCESS/GiriNithinYogendra.webp";
import speaker12 from "../../../assets/img/alumni-images/WEBSITE-ALUMNI-SUCCESS/HarshalShinde.webp";
import speaker13 from "../../../assets/img/alumni-images/WEBSITE-ALUMNI-SUCCESS/HritamSamanta.webp";
import speaker14 from "../../../assets/img/alumni-images/WEBSITE-ALUMNI-SUCCESS/JithinPeter.webp";
import speaker15 from "../../../assets/img/alumni-images/WEBSITE-ALUMNI-SUCCESS/Naanisreeram.webp";
import speaker16 from "../../../assets/img/alumni-images/WEBSITE-ALUMNI-SUCCESS/Pallicharantej.webp";
import speaker17 from "../../../assets/img/alumni-images/WEBSITE-ALUMNI-SUCCESS/RishiPrakaashSM.webp";
import speaker18 from "../../../assets/img/alumni-images/WEBSITE-ALUMNI-SUCCESS/SrutiChekka.webp";
import speaker19 from "../../../assets/img/alumni-images/WEBSITE-ALUMNI-SUCCESS/TarunReddi.webp";
import speaker20 from "../../../assets/img/alumni-images/WEBSITE-ALUMNI-SUCCESS/VijaySivatejMareedu.webp";
import speaker1 from "../../../assets/img/alumni-images/WEBSITE-ALUMNI-SUCCESS/AnicsChacko.webp";
import speaker2 from "../../../assets/img/alumni-images/WEBSITE-ALUMNI-SUCCESS/DivyanshuSoni.webp";
import speaker3 from "../../../assets/img/alumni-images/WEBSITE-ALUMNI-SUCCESS/AnshulSoni.webp";
import speaker4 from "../../../assets/img/alumni-images/WEBSITE-ALUMNI-SUCCESS/JosephKalathil.webp";
import speaker5 from "../../../assets/img/alumni-images/WEBSITE-ALUMNI-SUCCESS/AakashParameswaran.webp";
import speaker6 from "../../../assets/img/alumni-images/WEBSITE-ALUMNI-SUCCESS/AdityaMehta.webp";
import speaker21 from "../../../assets/img/alumni-images/WEBSITE-ALUMNI-SUCCESS/Harshiniisvi.webp";
import speaker22 from "../../../assets/img/alumni-images/WEBSITE-ALUMNI-SUCCESS/SimbramDas.webp";
import speaker23 from "../../../assets/img/alumni-images/WEBSITE-ALUMNI-SUCCESS/AnirudhBhandari.webp";
import speaker24 from "../../../assets/img/alumni-images/WEBSITE-ALUMNI-SUCCESS/RajivChavali.webp";
import speaker25 from "../../../assets/img/alumni-images/WEBSITE-ALUMNI-SUCCESS/NagnathChippa.webp";
import speaker26 from "../../../assets/img/alumni-images/WEBSITE-ALUMNI-SUCCESS/SrivatsanP.webp";
import speaker27 from "../../../assets/img/alumni-images/WEBSITE-ALUMNI-SUCCESS/AgnibhaGoswami.webp";
import speaker28 from "../../../assets/img/alumni-images/WEBSITE-ALUMNI-SUCCESS/Amitprem.webp";
import speaker29 from "../../../assets/img/alumni-images/WEBSITE-ALUMNI-SUCCESS/BadepallyAjay.webp";
import speaker30 from "../../../assets/img/alumni-images/WEBSITE-ALUMNI-SUCCESS/SrivatsanP.webp";
import speaker31 from "../../../assets/img/alumni-images/WEBSITE-ALUMNI-SUCCESS/MDArsalaan.webp";
import speaker32 from "../../../assets/img/alumni-images/WEBSITE-ALUMNI-SUCCESS/AnmolNikam.webp";
import speaker33 from "../../../assets/img/alumni-images/WEBSITE-ALUMNI-SUCCESS/SravyaReddy.webp";
import speaker34 from "../../../assets/img/alumni-images/WEBSITE-ALUMNI-SUCCESS/SuryaShanka.webp";
import speaker35 from "../../../assets/img/alumni-images/WEBSITE-ALUMNI-SUCCESS/MeghaPandichelvam.webp";
import speaker36 from "../../../assets/img/alumni-images/WEBSITE-ALUMNI-SUCCESS/SiddharthChari.webp";
import speaker37 from "../../../assets/img/alumni-images/WEBSITE-ALUMNI-SUCCESS/NandhiniR.webp";
import speaker38 from "../../../assets/img/alumni-images/WEBSITE-ALUMNI-SUCCESS/AnandDhavle.webp";
import speaker39 from "../../../assets/img/alumni-images/WEBSITE-ALUMNI-SUCCESS/DheerajDhall.webp";
import speaker40 from "../../../assets/img/alumni-images/WEBSITE-ALUMNI-SUCCESS/AmanAgnihotri.webp";
import speaker41 from "../../../assets/img/alumni-images/WEBSITE-ALUMNI-SUCCESS/AkanshaMehta.webp";
import speaker42 from "../../../assets/img/alumni-images/WEBSITE-ALUMNI-SUCCESS/RohitLalwani.webp";
import speaker43 from "../../../assets/img/alumni-images/WEBSITE-ALUMNI-SUCCESS/SurabhiBishnoi.webp";
import speaker44 from "../../../assets/img/alumni-images/WEBSITE-ALUMNI-SUCCESS/SikanderManshahia.webp";
import speaker45 from "../../../assets/img/alumni-images/WEBSITE-ALUMNI-SUCCESS/PriyankaWakchaure.webp";
import speaker46 from "../../../assets/img/alumni-images/WEBSITE-ALUMNI-SUCCESS/RishabPullancheri.webp";
import speaker47 from "../../../assets/img/alumni-images/WEBSITE-ALUMNI-SUCCESS/AnchitChoudhary.webp";
import speaker48 from "../../../assets/img/alumni-images/WEBSITE-ALUMNI-SUCCESS/AdithyaPatel.webp";
import speaker49 from "../../../assets/img/alumni-images/WEBSITE-ALUMNI-SUCCESS/HarshitAdepu.webp";
import speaker50 from "../../../assets/img/alumni-images/WEBSITE-ALUMNI-SUCCESS/LohithsaisrinivasV.webp";
import speaker51 from "../../../assets/img/alumni-images/WEBSITE-ALUMNI-SUCCESS/ArjunBhandari.webp";
import speaker52 from "../../../assets/img/alumni-images/WEBSITE-ALUMNI-SUCCESS/RohanB.webp";
import speaker53 from "../../../assets/img/alumni-images/WEBSITE-ALUMNI-SUCCESS/SuryaPrakashReddyKatta.webp";
import speaker54 from "../../../assets/img/alumni-images/WEBSITE-ALUMNI-SUCCESS/VeekshithKolanupaka.webp";
import speaker55 from "../../../assets/img/alumni-images/WEBSITE-ALUMNI-SUCCESS/AmanAlmadi.webp";
import speaker56 from "../../../assets/img/alumni-images/WEBSITE-ALUMNI-SUCCESS/AakashkennethNogarSrivastava.webp";
import speaker57 from "../../../assets/img/alumni-images/WEBSITE-ALUMNI-SUCCESS/SandeepKumar.webp";
import speaker58 from "../../../assets/img/alumni-images/WEBSITE-ALUMNI-SUCCESS/SinniSundi.webp";
import speaker59 from "../../../assets/img/alumni-images/WEBSITE-ALUMNI-SUCCESS/Ishakmohmmedkhan.webp";
import speaker60 from "../../../assets/img/alumni-images/WEBSITE-ALUMNI-SUCCESS/IbrahimSabeel.webp";
import speaker61 from "../../../assets/img/alumni-images/WEBSITE-ALUMNI-SUCCESS/ShaikAlthmash.webp";
import speaker62 from "../../../assets/img/alumni-images/WEBSITE-ALUMNI-SUCCESS/RahulHansda.webp";
import speaker63 from "../../../assets/img/alumni-images/WEBSITE-ALUMNI-SUCCESS/RiyazAkramShaik.webp";
import speaker64 from "../../../assets/img/alumni-images/WEBSITE-ALUMNI-SUCCESS/HarshKarangutkar.webp";
import speaker66 from "../../../assets/img/alumni-images/WEBSITE-ALUMNI-SUCCESS/ManasChhetri.webp";
import speaker67 from "../../../assets/img/alumni-images/WEBSITE-ALUMNI-SUCCESS/NandeeshKhyalappa.webp";
import speaker68 from "../../../assets/img/alumni-images/WEBSITE-ALUMNI-SUCCESS/Deepanshusingh.webp";
import speaker69 from "../../../assets/img/alumni-images/WEBSITE-ALUMNI-SUCCESS/ArghyaSamanta.webp";
import speaker70 from "../../../assets/img/alumni-images/WEBSITE-ALUMNI-SUCCESS/SushilKonnully.webp";
import speaker71 from "../../../assets/img/alumni-images/WEBSITE-ALUMNI-SUCCESS/JatinPandey.webp";
import speaker72 from "../../../assets/img/alumni-images/WEBSITE-ALUMNI-SUCCESS/RoushanKumar.webp";
import speaker73 from "../../../assets/img/alumni-images/WEBSITE-ALUMNI-SUCCESS/PalashParate.webp";
import speaker74 from "../../../assets/img/alumni-images/WEBSITE-ALUMNI-SUCCESS/AbhiA.webp";
import speaker75 from "../../../assets/img/alumni-images/WEBSITE-ALUMNI-SUCCESS/AdityaSharma.webp";
import speaker76 from "../../../assets/img/alumni-images/WEBSITE-ALUMNI-SUCCESS/Rishav.webp";
import speaker77 from "../../../assets/img/alumni-images/WEBSITE-ALUMNI-SUCCESS/MehulParakh.webp";
import speaker78 from "../../../assets/img/alumni-images/WEBSITE-ALUMNI-SUCCESS/AkshatPuri.webp";


import { useSelector, shallowEqual } from "react-redux";


import { Helmet } from "react-helmet";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};







function Alumni() {
  const isMobileState = useSelector(
    state => state.mainReducer.isMobile,
    shallowEqual
  );
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = isMobileState ? 77 : 15;
  const totalPages = Math.ceil(data.length / itemsPerPage);
  const indexOfLast = currentPage * itemsPerPage;
  const indexOfFirst = indexOfLast - itemsPerPage;
  const currentItems = data.slice(indexOfFirst, indexOfLast);
  const [formData, setFormData] = useState({
    name: '',
    year: '',
    course: '',
    campus: '',
    number: '',
    email: '',
    linkdin: '',
    emply: '',
    org: '',
    des: '',
  });

  const handleChange = (e) => {

    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Form Data Submitted:', formData);

    alert("Data Submitted Succesfully");
    fetch('https://www.backstagepass.co.in/reactapi/alumini.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
      })
      .catch(error => {
        console.error('Error:', error);
      });


    setFormData({
      name: '',
      year: '',
      course: '',
      campus: '',
      number: '',
      email: '',
      linkdin: '',
      emply: '',
      org: '',
      des: '',
    });
  };

  const speakers = [
  {
    img: speaker3,
    name: "Anshul Soni",
    title: "Engineering Manager",
    subtitle: "Electronic Arts (EA), Canada",
    alt: "Anshul Soni - Engineering Manager at Electronic Arts (EA), Canada"
  },
  {
    img: speaker24,
    name: "Rajiv Chavali",
    title: "Lead Producer",
    subtitle: "Zynga, Bengaluru",
    alt: "Rajiv Chavali - Lead Producer at Zynga, Bengaluru"
  },
  {
    img: speaker22,
    name: "Simbram Das",
    title: "Project Co-ordinator",
    subtitle: "Lakshya Digital, Pune",
    alt: "Simbram Das - Project Co-ordinator at Lakshya Digital, Pune"
  },
  {
    img: speaker14,
    name: "Jithin Peter",
    title: "Programmer",
    subtitle: "Sumo Digital Ltd, Pune",
    alt: "Jithin Peter - Programmer at Sumo Digital Ltd, Pune"
  },
  {
    img: speaker6,
    name: "Aditya Mehta",
    title: "Senior Game Designer",
    subtitle: "Scopely, USA",
    alt: "Aditya Mehta - Senior Game Designer at Scopely, USA"
  },
  {
    img: speaker70,
    name: "Sushil Konnully",
    title: "Software Development Lead",
    subtitle: "Product Madness, London",
    alt: "Sushil Konnully - Software Development Lead at Product Madness, London"
  },
  {
    img: speaker4,
    name: "Joseph Kalathil",
    title: "Backend Platform Engineer",
    subtitle: "Hacksaw Studios,  Sweden",
    alt: "Joseph Kalathil - Backend Platform Engineer at Hacksaw Studios"
  },
  {
    img: speaker7,
    name: "Dennchen Lama",
    title: "Game Designer",
    subtitle: "Ubisoft, UAE",
    alt: "Dennchen Lama - Game Designer at Ubisoft, UAE"
  },
  {
    img: speaker5,
    name: "Aakash Parameswaran",
    title: "Founder/CEO",
    subtitle: "Fable Fox, Canada",
    alt: "Aakash Parameswaran - Founder/CEO at Fable Fox, Canada"
  },
  {
    img: speaker25,
    name: "Nagnath Chippa",
    title: "Senior Performance Analysis <br/> <br/> Engineer",
    subtitle: "Arm, USA",
    alt: "Nagnath Chippa - Senior Performance Analysis Engineer at Arm, USA"
  },
  {
    img: speaker18,
    name: "Sruthi Chekka",
    title: "Game Artist",
    subtitle: "88 Games, Bengaluru",
    alt: "Sruthi Chekka - Game Artist at 88 Games, Bengaluru"
  },
  {
    img: speaker26,
    name: "Srivatsan P",
    title: "Game Developer",
    subtitle: "Product Madness, UK",
    alt: "Srivatsan P - Game Developer at Product Madness, UK"
  },
  {
    img: speaker27,
    name: "Agnibha Goswami",
    title: "Specialist - Program <br/> <br/> Management",
    subtitle: "Core42, UAE",
    alt: "Agnibha Goswami - Specialist - Program Management at Core42, UAE"
  },
  {
    img: speaker19,
    name: "Tarun Reddi",
    title: "Project Manager",
    subtitle: "Pidgin, USA",
    alt: "Tarun Reddi - Project Manager at Pidgin, USA"
  },
  {
    img: speaker35,
    name: "Megha Pandichelvam",
    title: "Unity Developer",
    subtitle: "Aarquie Solutions, USA",
    alt: "Megha Pandichelvam - Unity Developer at Aarquie Solutions, USA"
  },
  {
    img: speaker29,
    name: "Badepally Ajay",
    title: "XR Developer/ AR/VR Specialist",
    subtitle: "The Digital ARM, USA",
    alt: "Badepally Ajay - XR Developer/AR/VR Specialist at The Digital ARM, USA"
  },
  {
    img: speaker9,
    name: "Diksha Subba",
    title: "Game Developer",
    subtitle: "Gape Labs, Bengaluru",
    alt: "Diksha Subba - Game Developer at Gape Labs, Bengaluru"
  },
  {
    img: speaker78,
    name: "Akshat Puri",
    title: "Engineer, Engine",
    subtitle: "LightFuryGames, Bengaluru",
    alt: "Akshat Puri - Engine Engineer at LightFuryGames, Bengaluru"
  },
  {
    img: speaker31,
    name: "MD Arsalaan",
    title: "Lead Unity Developer",
    subtitle: "Hitwicket, Hyderabad",
    alt: "MD Arsalaan - Lead Unity Developer at Hitwicket, Hyderabad"
  },
  {
    img: speaker32,
    name: "Anmol Nikam",
    title: "Lead Designer",
    subtitle: "QualSights, Chicago",
    alt: "Anmol Nikam - Lead Designer at QualSights, Chicago"
  },
  {
    img: speaker33,
    name: "Sravya Reddy",
    title: "Game Designer",
    subtitle: "Holy Cow Productions, Bengaluru",
    alt: "Sravya Reddy - Game Designer at Holy Cow Productions, Bengaluru"
  },
  {
    img: speaker34,
    name: "Surya Shankha Chakraborty",
    title: "Concept artist",
    subtitle: "Hitwicket, Hyderabad",
    alt: "Surya Shankha Chakraborty - Concept Artist, Hitwicket, Hyderabad"
  },
  {
    img: speaker36,
    name: "Siddharth Chari",
    title: "3D Generalist / Unity Animator",
    subtitle: "Infinity Games, Pune",
    alt: "Siddharth Chari - 3D Generalist / Unity Animator at Infinity Games, Pune"
  },
  {
    img: speaker37,
    name: "Nandhini R",
    title: "Senior Consultant",
    subtitle: "Oracle, Bengaluru",
    alt: "Nandhini R - Senior Consultant at Oracle, Bengaluru"
  },
  {
    img: speaker21,
    name: "Harshini isvi",
    title: "Senior Designer",
    subtitle: "IVY, Hyderabad",
    alt: "Harshini Isvi - Senior Designer at IVY, Hyderabad"
  },
  {
    img: speaker28,
    name: "Amit prem",
    title: "Concept Artist",
    subtitle: "SuperGaming, Pune",
    alt: "Amit Prem - Concept Artist at SuperGaming, Pune"
  },
  {
    img: speaker38,
    name: "Anand Dhavle",
    title: "Senior Gameplay Programmer",
    subtitle: "Tara Gaming Limited, Pune",
    alt: "Anand Dhavle - Senior Gameplay Programmer at Tara Gaming Limited, Pune"
  },
  {
    img: speaker23,
    name: "Anirudh Bhandari",
    title: "Senior Engineer",
    subtitle: "Qualcomm, Bengaluru",
    alt: "Anirudh Bhandari - Senior Engineer at Qualcomm, Bengaluru"
  },
  {
    img: speaker15,
    name: "Nani Surya Teja Sreerama",
    title: "Software Developer",
    subtitle: "East Side Games, Canada",
    alt: "Nani Surya Teja Sreerama - Software Developer at East Side Games, Canada"
  },
  {
    img: speaker39,
    name: "Dheeraj Dhall",
    title: "Senior Software Engineer",
    subtitle: "The Predictive Index, United States",
    alt: "Dheeraj Dhall - Senior Software Engineer at The Predictive Index, United States"
  },
  {
    img: speaker40,
    name: "Aman Agnihotri",
    title: "Senior Platform Engineer",
    subtitle: "Tempo, Hollywood",
    alt: "Aman Agnihotri - Senior Platform Engineer at Tempo, Hollywood"
  },
  {
    img: speaker41,
    name: "Akansha Mehta",
    title: "QA Tester",
    subtitle: "Rockstar Games, USA",
    alt: "Akansha Mehta - QA Tester at Rockstar Games, USA"
  },
  {
    img: speaker11,
    name: "Giri Nithin Yogendra",
    title: "Software Developer",
    subtitle: "Paycom, USA",
    alt: "Giri Nithin Yogendra - Software Developer at Paycom, USA"
  },
  {
    img: speaker42,
    name: "Rohit Lalwani",
    title: "Associate Tools Programmer",
    subtitle: "Rockstar North, UK",
    alt: "Rohit Lalwani - Associate Tools Programmer at Rockstar North, UK"
  },
  {
    img: speaker43,
    name: "Surabhi Bishnoi",
    title: "Game Developer",
    subtitle: "RouteToMarket Media India Pvt Ltd, Bengaluru",
    alt: "Surabhi Bishnoi - Game Developer at RouteToMarket Media India Pvt Ltd, Bengaluru"
  },
  {
    img: speaker2,
    name: "Divyanshu Soni",
    title: "Motion Graphic Designer",
    subtitle: "HitWicket, Hyderabad",
    alt: "Divyanshu Soni - Motion Graphic Designer at HitWicket, Hyderabad"
  },
  {
    img: speaker44,
    name: "Sikander Manshahia",
    title: "Performance Analysis Engineer",
    subtitle: "Arm, UK",
    alt: "Sikander Manshahia - Performance Analysis Engineer at Arm, UK"
  },
  {
    img: speaker45,
    name: "Priyanka Wakchaure",
    title: "Unity Game Developer",
    subtitle: "Supercode Games, Hyderabad",
    alt: "Priyanka Wakchaure - Unity Game Developer at Supercode Games, Hyderabad"
  },
  {
    img: speaker71,
    name: "Jatin Pandey",
    title: "Game Developer",
    subtitle: "Magadha Studio, Surat",
    alt: "Jatin Pandey - Game Developer at Magadha Studio, Surat"
  },
    {
    img: speaker77,
    name: "Mehul Parakh",
    title: "Senior Unity Developer",
    subtitle: "Underpin Technology, UAE",
    alt: "Mehul Parakh - Senior Unity Developer at Underpin Technology, UAE"
  },

  {
    img: speaker17,
    name: "Rishi Prakaash S M",
    title: "Software Developer",
    subtitle: "Mobilityware, USA",
    alt: "Rishi Prakaash S M - Software Developer at Mobilityware, USA"
  },
    {
    img: speaker74,
    name: "Abhi Astu",
    title: "3D Artist",
    subtitle: "SuperGaming, Pune",
    alt: "Abhi Astu - 3D Artist at SuperGaming, Pune"
  },
    {
    img: speaker12,
    name: "Harshal Shinde",
    title: "Game Developer",
    subtitle: "Boo boo games, Ahemdabad",
    alt: "Harshal Shinde - Game Developer at Boo Boo Games, Ahemdabad"
  },
  {
    img: speaker46,
    name: "Rishab Pullancheri",
    title: "3D Artist",
    subtitle: "Street Lamp Games, Hyderabad",
    alt: "Rishab Pullancheri - 3D Artist at Street Lamp Games, Hyderabad"
  },
  {
    img: speaker47,
    name: "Anchit Choudhary",
    title: "2D Concept Artist",
    subtitle: "Msarii, UAE",
    alt: "Anchit Choudhary - 2D Concept Artist at Msarii, UAE"
  },
  {
    img: speaker20,
    name: "Vijay Sivatej Mareedu",
    title: "3D Artist",
    subtitle: "GameShastra, Hyderabad",
    alt: "Vijay Sivatej Mareedu - 3D Artist at GameShastra, Hyderabad"
  },

  {
    img: speaker1,
    name: "Anics Chacko",
    title: "Gameplay Engineer",
    subtitle: "Zynga, Hyderabad",
    alt: "Anics Chacko - Gameplay Engineer at Zynga, Hyderabad"
  },
  {
    img: speaker48,
    name: "Adithya Patel",
    title: "Game Developer",
    subtitle: "SuperGaming, Pune",
    alt: "Adithya Patel - Game Developer at SuperGaming, Pune"
  },
  {
    img: speaker49,
    name: "Harshit Adepu",
    title: "Game Developer",
    subtitle: "Super Gaming, Pune",
    alt: "Harshit Adepu - Game Developer at Super Gaming, Pune"
  },
  {
    img: speaker50,
    name: "Lohith sai srinivas V",
    title: "Unity Programmer",
    subtitle: "Hitwicket, Hyderabad",
    alt: "Lohith Sai Srinivas V - Unity Programmer at Hitwicket, Hyderabad"
  },
  {
    img: speaker51,
    name: "Arjun Bhandari",
    title: "Game Developer",
    subtitle: "Street Lamp Games Pvt Ltd, Hyderabad",
    alt: "Arjun Bhandari - Game Developer at Street Lamp Games Pvt Ltd, Hyderabad"
  },
  {
    img: speaker52,
    name: "Rohan B",
    title: "Senior 2D Artist",
    subtitle: "Street Lamp Games Pvt Ltd, Hyderabad",
    alt: "Rohan B - Senior 2D Artist at Street Lamp Games Pvt Ltd, Hyderabad"
  },
  {
    img: speaker53,
    name: "Surya Prakash Reddy Katta",
    title: "Data Analyst",
    subtitle: "Dell Technologies, Round Rock, Texas",
    alt: "Surya Prakash Reddy Katta - Data Analyst at Dell Technologies, Round Rock, Texas"
  },
  {
    img: speaker54,
    name: "Veekshith Kolanupaka",
    title: "Co-Founder",
    subtitle: "NearMint Studios, Hyderabad",
    alt: "Veekshith Kolanupaka - Co-Founder at NearMint Studios, Hyderabad"
  },
  {
    img: speaker55,
    name: "Aman Almadi",
    title: "Game Developer",
    subtitle: "Pragmatic Play, Gibraltar",
    alt: "Aman Almadi - Game Developer at Pragmatic Play, Gibraltar"
  },
  {
    img: speaker56,
    name: "Aakash kenneth Nogar Srivastava",
    title: "Lead 3D Artist",
    subtitle: "Street Lamp Games Pvt Ltd, Hyderabad",
    alt: "Aakash Kenneth Nogar Srivastava - Lead 3D Artist at Street Lamp Games Pvt Ltd, Hyderabad"
  },
  {
    img: speaker8,
    name: "Devashish Tiwari",
    title: "Game Play Programmer",
    subtitle: "Tuttifrutti Interactive, Kerala",
    alt: "Devashish Tiwari - Gameplay Programmer at Tuttifrutti Interactive, Kerala"
  },
  {
    img: speaker57,
    name: "Sandeep Kumar",
    title: "Unity Developer and Game <br/><br/> Designer",
    subtitle: "Striking Boltz, Hyderabad",
    alt: "Sandeep Kumar - Unity Developer and Game Designer at Striking Boltz, Hyderabad"
  },
  {
    img: speaker58,
    name: "Sinni Sundi",
    title: "2D Game Artist",
    subtitle: "Octro Inc, Delhi",
    alt: "Sinni Sundi - 2D Game Artist at Octro Inc, Delhi"
  },
  {
    img: speaker59,
    name: "Ishak mohmmed khan",
    title: "3D Artist",
    subtitle: "Destiny Interactive Pvt Ltd, Hyderabad",
    alt: "Ishak Mohmmed Khan - 3D Artist at Destiny Interactive Pvt Ltd, Hyderabad"
  },
  {
    img: speaker60,
    name: "Ibrahim Sabeel",
    title: "Senior Game Taxonomy Specialist",
    subtitle: "Gameopedia, Hyderabad",
    alt: "Ibrahim Sabeel - Senior Game Taxonomy Specialist at Gameopedia, Hyderabad"
  },
  {
    img: speaker10,
    name: "Ekagra Mittal",
    title: "Junior Engineer",
    subtitle: "Kuro Gaming, Hyderabad",
    alt: "Ekagra Mittal - Junior Engineer at Kuro Gaming, Hyderabad"
  },
  {
    img: speaker13,
    name: "Hritam Samanta",
    title: "Graphic User Interface Designer",
    subtitle: "American Software Resources, Inc, Hyderabad",
    alt: "Hritam Samanta - Graphic User Interface Designer at American Software Resources, Inc, Hyderabad"
  },
  {
    img: speaker16,
    name: "Palli charan tej",
    title: "Graphic User Interface Designer",
    subtitle: "American S/W Resources, Hyderabad",
    alt: "Palli Charan Tej - Graphic User Interface Designer at American S/W Resources, Hyderabad"
  },
  {
    img: speaker61,
    name: "Shaik Althmash",
    title: "2D artist",
    subtitle: "PlaySimple Games, Bengaluru",
    alt: "Shaik Althmash - 2D Artist at PlaySimple Games, Bengaluru"
  },
  {
    img: speaker62,
    name: "Rahul Hansda",
    title: "2D Associate Game Artist",
    subtitle: "ZVKY, Bangalore",
    alt: "Rahul Hansda - 2D Associate Game Artist at ZVKY, Bangalore"
  },
  {
    img: speaker63,
    name: "Riyaz Akram Shaik",
    title: "Game Artist",
    subtitle: "Vandelay Technologies, Bangalore",
    alt: "Riyaz Akram Shaik - Game Artist at Vandelay Technologies, Bangalore"
  },
  {
    img: speaker64,
    name: "Harsh Karangutkar",
    title: "3D Artist",
    subtitle: "INF IDEAZZZZ CREATIVE PVT LTD, Mumbai",
    alt: "Harsh Karangutkar - 3D Artist at INF IDEAZZZZ CREATIVE PVT LTD, Mumbai"
  },
 
  {
    img: speaker69,
    name: "Arghya Samanta",
    title: "Associate 3D Generalist",
    subtitle: "Ayelet Studios, Chennai",
    alt: "Arghya Samanta - Associate 3D Generalist at Ayelet Studios, Chennai"
  },
  {
    img: speaker66,
    name: "Manas Chhetri",
    title: "Game designer",
    subtitle: "Street Lamp Games, Hyderabad",
    alt: "Manas Chhetri - Game Designer at Street Lamp Games, Hyderabad"
  },
  {
    img: speaker67,
    name: "Nandeesh Khyalappa",
    title: "Game Developer",
    subtitle: "Flying Ants Studios, Hyderabad",
    alt: "Nandeesh Khyalappa - Game Developer at Flying Ants Studios, Hyderabad"
  },
  {
    img: speaker68,
    name: "Deepanshu singh",
    title: "Game Programmer",
    subtitle: "Xansr Technologies, Hyderabad",
    alt: "Deepanshu Singh - Game Programmer at Xansr Technologies, Hyderabad"
  },
  {
    img: speaker72,
    name: "Roushan (Legenkit) Kumar",
    title: "Unity Developer",
    subtitle: "BooBoo Games, Hyderabad",
    alt: "Roushan (Legenkit) Kumar - Unity Developer at BooBoo Games, Hyderabad"
  },
  {
    img: speaker73,
    name: "Palash Parathe",
    title: "Unity Game Developer",
    subtitle: "Gameshstra, Hyderabad",
    alt: "Palash Parathe - Unity Game Developer at Gameshstra, Hyderabad"
  },

  {
    img: speaker75,
    name: "Aditya Sharma",
    title: "3D Character Artist",
    subtitle: "Little Red Zombies Studios Pvt. Ltd, Hyderabad",
    alt: "Aditya Sharma - 3D Character Artist at Little Red Zombies Studios Pvt. Ltd, Hyderabad"
  },
  {
    img: speaker76,
    name: "Rishav Anand",
    title: "3D Artist",
    subtitle: "Lakshya Digital, Pune",
    alt: "Rishav Anand - 3D Artist at Lakshya Digital, Pune"
  }
];

  React.useEffect(() => {
    setData(speakers);
  }, []);
const speakersRef = React.useRef(null);

  return (
    <>
      <div className={`et_pb_section et_pb_section_0 et_pb_with_background et_section_regular ${isMobileState ? 'MobileClassass' : 'AssistanceB'}`}>
        <div className="et_pb_row et_pb_row_0">
          <div className="et_pb_column et_pb_column_4_4 et_pb_column_0  et_pb_css_mix_blend_mode_passthrough et-last-child">
            <div className="et_pb_module et_pb_text et_pb_text_0  et_pb_text_align_left et_pb_bg_layout_light">
              <div className="et_pb_text_inner"><h1 className="title white-txt">Alumni Success</h1></div>
            </div>
          </div>
        </div>
      </div>
      <div className="courses-container">
        <Helmet>
          <script type="application/ld+json">
            {`
        {
          "@context": "https://schema.org/", 
          "@type": "BreadcrumbList", 
          "itemListElement": [{
            "@type": "ListItem", 
            "position": 1, 
            "name": "India’s Best Game Development college | Backstage Pass Institute of Gaming",
            "item": "https://www.backstagepass.co.in/"  
          },{
            "@type": "ListItem", 
            "position": 2, 
            "name": "Alumni Success | Backstage Pass Institute of Gaming",
            "item": "https://www.backstagepass.co.in/life-at-bsp/alumni-success/"  
          }]
        }
          `}
          </script>
          <script type="application/ld+json">
            {`
          {
            "@context": "https://schema.org/",
            "@type": "WebSite",
            "name": "Backstage Pass Institute of Gaming",
            "url": "https://www.backstagepass.co.in/",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://www.backstagepass.co.in/life-at-bsp/alumni-success/{search_term_string}",
              "query-input": "required name=search_term_string"
            }
          }
            `}
          </script>
          <title>Alumni Success | Backstage Pass Institute of Gaming</title>
          <meta property="og:title" content="Alumni Success | Backstage Pass Institute of Gaming" />
          <meta property="og:description" name="description" content="Backstage Pass graduates are making an impact in the gaming industry. Explore inspiring success stories and connect with our alumni network for career growth." />
          <meta property="og:url" content="https://www.backstagepass.co.in/life-at-bsp/alumni-success/" />
          <link rel="canonical" href="https://www.backstagepass.co.in/life-at-bsp/alumni-success/" />
        </Helmet>

        <div className="courses-wrapper">
          <div className="CourseesOverViewA">
            <p className="suprts mar-t" style={{ marginTop: isMobileState ? "20px" : "30px" }}>Backstage Pass is leaving its mark not only across India but across the globe. Some of the top companies that our alumni are currently working at are:</p>


            <Marquee pauseOnHover={true} // ✅ stops scroll on hover
              speed={100}
              style={{
                padding: "0px 20px",
                marginBottom: isMobileState ? "0px" : "10px",
              }} className='recuitersList'>
              <img alt="rec4" src={r4} width={"300"} height={"81"} />
              <img alt="rec1" src={r1} width={"300"} height={"81"} />
              <img alt="rec10" src={r7} width={"300"} height={"81"} />
              <img alt="rec2" src={r2} width={"300"} height={"81"} />
              <img alt="rec10" src={r10} width={"300"} height={"81"} />
              {/* <img alt="rec3" src={r3} width={"300"} height={"81"} /> */}

              <img alt="rec12" src={r12} width={"300"} height={"81"} />
              <img alt="rec5" src={r5} width={"300"} height={"81"} />
              <img alt="rec13" src={r13} width={"300"} height={"81"} />
              <img alt="rec9" src={r6} width={"300"} height={"81"} />

              <img alt="rec8" src={r8} width={"300"} height={"81"} />
              <img alt="rec9" src={r9} width={"300"} height={"81"} />

              <img alt="rec11" src={r11} width={"300"} height={"81"} />


              <img alt="rec14" src={r14} width={"300"} height={"81"} />
            </Marquee>

            <h2 className="mainHeadingTotal">What Are They Working As?</h2>
           <div className="speakers-container" ref={speakersRef}>
  {currentItems.map((s, i) => (
    <div className="speaker-card" key={i}>
      <div className="speaker-box">
        <img src={s.img} alt={s.alt} />
        <span className="speaker-border"></span>
      </div>

      <h3 className="speaker-name">{s.name}</h3>

      <p
        className="speaker-title"
        dangerouslySetInnerHTML={{ __html: s.title }}
      ></p>

      <p style={{ color: "#000", opacity: "0.8", fontSize: "13px" }}>
        {s.subtitle}
      </p>
    </div>
  ))}

  {totalPages > 1 && (
    <div className="pagination-containera pagination-inside">
      {Array.from({ length: totalPages }).map((_, i) => (
        <button
          key={i}
          className={`page-btna ${currentPage === i + 1 ? "active" : ""}`}
          onClick={() => {
            setCurrentPage(i + 1);

            requestAnimationFrame(() => {
              if (speakersRef.current) {
                speakersRef.current.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
              }
            });
          }}
        >
          {i + 1}
        </button>
      ))}
    </div>
  )}
</div>




            <h2 className="mainHeadingTotal" style={{ marginBottom: isMobileState ? "0px" : "30px" }}>Get In Touch With Us</h2>
            <p className="suprtsMobile mobilehead">If you have graduated from Backstage Pass, we would love to get in touch with you. Fill the form below to register yourself into our Alumni Database.<br /><br />
              Don’t worry, we will not spam your inbox or call log!
            </p>
            <div className="fom-ad">
              <div className="containers">
                <form onSubmit={handleSubmit}>
                  <h3 className="mainHeadingTotal">Alumni Registration Form </h3>
                  <div className="contents">
                    <div className="input-boxs">
                      <label htmlFor="name">Name</label>
                      <input type="text" placeholder="Name" name="name" value={formData.name} onChange={handleChange} required style={{ border: "1px solid #ccc" }} />
                    </div>
                    <div className="input-boxs">
                      <label htmlFor="year">Year Of Graduation</label>
                      <input type="text" placeholder="Year" name="year" value={formData.year} onChange={handleChange} style={{ border: "1px solid #ccc" }}
                      />
                    </div>
                    <div className="input-boxs">
                      <label htmlFor="course">Course</label>
                      <input type="text" placeholder="Course" name="course" value={formData.course} onChange={handleChange} required style={{ border: "1px solid #ccc" }} />
                    </div>
                    <div className="input-boxs">
                      <label htmlFor="campus">Campus</label>
                      <input type="text" placeholder="Campus" name="campus" value={formData.campus} onChange={handleChange} style={{ border: "1px solid #ccc" }} />
                    </div>
                    <div className="input-boxs">
                      <label htmlFor="number">Mobile Number</label>
                      <input type="tel" placeholder="Mobile Number" name="number" pattern="[6-9][0-9]{9}" minLength="10" maxLength="10" value={formData.number} onChange={handleChange} style={{ border: "1px solid #ccc" }} />
                    </div>
                    <div className="input-boxs">
                      <label htmlFor="email">Email ID</label>
                      <input type="email" placeholder="Email ID" name="email" value={formData.email} onChange={handleChange} style={{ border: "1px solid #ccc" }} />
                    </div>
                    <div className="input-boxs">
                      <label htmlFor="linkdin">LinkedIn</label>
                      <input type="url" placeholder="LinkedIn" name="linkdin" value={formData.linkdin} onChange={handleChange} style={{ border: "1px solid #ccc" }} />
                    </div>
                    <div className="input-boxs">
                      <label htmlFor="emply">Employment Status</label>
                      <input type="text" placeholder="Employment Status" name="emply" value={formData.emply} onChange={handleChange} style={{ border: "1px solid #ccc" }} />
                    </div>
                    <div className="input-boxs">
                      <label htmlFor="org">Current Organisation</label>
                      <input type="text" placeholder="Current Organisation" name="org" value={formData.org} onChange={handleChange} required style={{ border: "1px solid #ccc" }} />
                    </div>
                    <div className="input-boxs">
                      <label htmlFor="des">Designation</label>
                      <input type="text" placeholder="Designation" name="des" value={formData.des} onChange={handleChange} style={{ border: "1px solid #ccc" }} />
                    </div>
                  </div>

                  <div style={{ width: "220px", margin: "0 auto" }}>
                    <button type="submit" className='three button brand size200 w-full sm:w-auto'>SUBMIT</button>
                  </div>
                </form>
              </div>
            </div>

          </div>

        </div>

      </div>

    </>
  )
}

export default Alumni;

