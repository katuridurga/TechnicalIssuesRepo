import React, { useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import "./YoutubeVideosMain.css";
import {
  NextButton,
  PrevButton,
  usePrevNextButtons
} from './EmblaCarouselArrowButtons'
import webvban1 from "../assets/img/test/WebsiteVideoBanner1.webp";
import webvban2 from "../assets/img/test/WebsiteVideoBanner2.webp";

const data = [
  {
    name: "Jithin Peter",
    image: webvban2,
    video: "https://www.youtube.com/shorts/gY7TXYWoi5w"
  },
  {
    name: "Sandeep",
    image: webvban1,
    video: "https://www.youtube.com/shorts/zhir5FxzGFI"
  },
  {
    name: "Ankush",
    image: webvban2,
    video: "https://www.youtube.com/shorts/BBc74tIWqKk"
  },
  {
    name: "Vipul",
    image: webvban1,
    video: "https://www.youtube.com/shorts/lmQ0tylpeuw"
  },
  {
    name: "Rishi Prakash",
    image: webvban2,
    video: "https://www.youtube.com/shorts/-h33trH8YLU"
  },
  {
    name: "Rajiv Chavli",
    image: webvban1,
    video: "https://www.youtube.com/shorts/8RogLRiFQY8"
  },
  {
    name: "Harshit",
    image: webvban2,
    video: "https://www.youtube.com/watch?v=xi-1AeB7Krg"
  }
];

const EmblaCarouselTestimonilasVideos = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start"
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);
const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi)

  return (
    <div className="emblavideo">
 

      <div className="embla__viewportvideo" ref={emblaRef}>
        <div className="embla__containervideo">
          {data.map((item, index) => (
            <div className="embla__slidevideo" key={index}>
              <div className="cardvideo">
                <div className="image-wrappervideo">
                  <img src={item.image} alt={item.name} />
                  <a
                    href={item.video}
                    target="_blank"
                    rel="noreferrer"
                    className="play-btnvideo"
                  >
                    ▶
                  </a>
                </div>

                
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="embla__controls">
          <div className="embla__buttons">
            <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
            <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
          </div>
        </div>

    </div>
  );
};

export default EmblaCarouselTestimonilasVideos;