import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
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



function WorkshopYearly(props) {
  const slug = props.match?.params?.slug;

  console.log("MATCH:", props.match);
  console.log("SLUG:", slug);

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [slides, setSlides] = useState([]);
  const [title, setTitle] = useState("");

 useEffect(() => {
  if (!slug) return;

  fetch(`https://www.backstagepass.co.in/reactapi/eventapi/event_slides.php?slug=${slug}`)
    .then(res => res.json())
    .then(result => {
      if (result.status && result.data) {
        setSlides(result.data);
        setTitle(result.slug); // ✅ save title
      } else {
        setSlides([]);
      }
    });
}, [slug]);

  const data = slides || [];
//const title = result?.slug || "Event Gallery";

  return (
      <>
     <div className='courseBanner'>
            <img alt="Courses Banner" title='Courses Banner' src={courseBanner} />
          </div>
               
    <div className="sliderPage">
  <div class="courses-wrapper"><h2 class="mainHeadingTotal">{title}</h2>
                      
                    </div>
 

      <div className="emblaworkshop">
        <div className="embla__viewportworkshop" ref={emblaRef}>
          <div className="embla__containerworkshop">


{data.length === 0 ? (
  <p>No images found</p>
) : (
  data.map((item, index) => (
    <div className="awardItem" key={index}>
      <img src={item.image} alt={item.alt} />

      <div className="awardTitle">
        {item.alt}
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
export default withRouter(WorkshopYearly);