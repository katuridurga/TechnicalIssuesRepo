import React, { useEffect } from "react";
import { useParams } from "react-router";
import useEmblaCarousel from "embla-carousel-react";
import "./WorkshopDetail.css";
import courseBanner from "../../../assets/img/banners/CSGD.webp";
import img1 from "../../../assets/img/awards/DSC05115.jpg";
import img2 from  "../../../assets/img/awards/DSC05136.jpg";
import img3 from "../../../assets/img/awards/DSC05120.jpg";
import img4 from "../../../assets/img/awards/BSP03777.jpg";
import img5 from "../../../assets/img/awards/BSP03792.jpg";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
const allAwards = {
  "2025": [
    { img:img1,
       title: "Achievers 2025",
    },
    { img:img2,
       title: "ET Industry",
    },
    { img:img3,
       title: "ET Industry Achievers 2025",
    }
  ],
  "2024": [
    { img:img4,
       title: "ET Industry Achievers 2025",

     },
    { img:img5,
       title: "ET Industry Achievers 2025",
     }
  ]
};

function WorkshopYearly(props) {
  const year = props.match?.params?.year|| "2025";

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true
  });

  useEffect(() => {
    if (!emblaApi) return;

    const interval = setInterval(() => {
      emblaApi.scrollNext();
    }, 2500);

    return () => clearInterval(interval);
  }, [emblaApi]);

  const data = allAwards[year] || [];
  const title = data[0]?.title || "";

  return (
      <>
     <div className='courseBanner'>
            <img alt="Courses Banner" title='Courses Banner' src={courseBanner} />
          </div>
               
    <div className="sliderPage">

      <h2>{title}</h2>

      <div className="emblaworkshop">
        <div className="embla__viewportworkshop" ref={emblaRef}>
          <div className="embla__containerworkshop">


{data.length === 0 ? (
  <p>No images found</p>
) : (
  data.map((item, index) => (
    <div className="awardItem" key={index}>
      <img src={item.img} alt={item.title} />

      <div className="awardTitle">
        {item.title}
      </div>
    </div>
  ))
)}
          </div>
        </div>

   <button
  className="emblaPrev"
  onClick={() => emblaApi && emblaApi.scrollPrev()}
>
  <ArrowBackIosNewIcon />
</button>

<button
  className="emblaNext"
  onClick={() => emblaApi && emblaApi.scrollNext()}
>
  <ArrowForwardIosIcon />
</button>
      </div>
    </div>
    </>
  );
}

export default WorkshopYearly;