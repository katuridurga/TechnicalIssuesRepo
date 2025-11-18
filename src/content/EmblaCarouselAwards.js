import React, { useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import "../assets/css/AwardsCarousel.css";

import award1 from "../assets/img/awards/Best_Education_Brand_2018.webp";
import award2 from "../assets/img/awards/Times_Education_Excellence_2019.webp";
import award3 from "../assets/img/awards/Time_Excellence_Awards_2020.webp";
import award4 from "../assets/img/awards/Times_Education_Excellence_2021.webp";
import award5 from "../assets/img/awards/Times_Education_Excellence_2022.webp";
import award6 from "../assets/img/banners/2023.webp";
import award7 from "../assets/img/awards/Times_Education_Excellence_2023.webp";

const awardsimg = [
  { img: award1, text: "Best Education Brand Award – Economic Times 2018" },
  { img: award2, text: "Times Education Excellence Awards 2018-19" },
  { img: award3, text: "Times Excellence Award 2019-20" },
  { img: award4, text: "Times Education Excellence Award 2020-21" },
  { img: award5, text: "Times Education Excellence Awards 2022" },
  { img: award6, text: "Emerging Leader Award – Eduspark Awards 2023" },
  { img: award7, text: "Times Education Excellence Awards 2023" },
];

const EmblaCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
  });

useEffect(() => {
  if (!emblaApi) return;

  const id = setInterval(() => {
    emblaApi.scrollNext();   // RIGHT → LEFT for your layout
  }, 2500);

  return () => clearInterval(id);
}, [emblaApi]);


  return (
    <div className="emblaaward">
      <div className="embla__viewportaward" ref={emblaRef}>
        <div className="embla__containeraward">
          {awardsimg.map((awds, index) => (
            <div className="embla__slideaward" key={index}>
              <div className="embla__image-wrapperawrd">
                <span>
                  <LazyLoadImage
                    src={awds.img}
                    alt={awds.text}
                    effect="blur"
                    className="embla__slide__imgawards"
                  />
                  <p className="embla__captionaward">{awds.text}</p>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EmblaCarousel;
