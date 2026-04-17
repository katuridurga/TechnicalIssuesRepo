import React, { useEffect, useCallback, useRef, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { useSelector, shallowEqual } from "react-redux";
import "./YoutubeVideosMain.css";
import {
  NextButton,
  PrevButton,
  usePrevNextButtons
} from './EmblaCarouselArrowButtons'

import webvban1 from "../assets/img/test/WebsiteVideoBanner1.webp";
import webvban2 from "../assets/img/test/Bhanu.webp";
import webvban3 from "../assets/img/test/sandeep.webp";
import webvban4 from "../assets/img/test/ankush.webp";
import webvban5 from "../assets/img/test/vipul.webp";
import webvban6 from "../assets/img/test/rajiv.webp";
import webvban7 from "../assets/img/test/harshit.webp";
import webvban8 from "../assets/img/test/rishi.webp";
import webvban9 from "../assets/img/test/Krushna.webp";

const data = [
  { name: "Jithin Peter", image: webvban1, videoId: "gY7TXYWoi5w", videoUrl: "https://www.youtube.com/shorts/gY7TXYWoi5w" },
  { name: "Sandeep", image: webvban3, videoId: "zhir5FxzGFI", videoUrl: "https://www.youtube.com/shorts/BBc74tIWqKk" },
  { name: "Ankush", image: webvban4, videoId: "BBc74tIWqKk", videoUrl: "https://www.youtube.com/shorts/BBc74tIWqKk" },
  { name: "Vipul", image: webvban5, videoId: "lmQ0tylpeuw" },
  { name: "Rishi Prakash", image: webvban8, videoId: "-h33trH8YLU", videoUrl: "https://www.youtube.com/shorts/BBc74tIWqKk" },
  { name: "Rajiv Chavli", image: webvban6, videoId: "8RogLRiFQY8", videoUrl: "https://www.youtube.com/shorts/BBc74tIWqKk" },
  { name: "Bhanu Verma", image: webvban2, videoId: "V-Y3VxFxjys", videoUrl: "https://www.youtube.com/shorts/BBc74tIWqKk" },
  { name: "Harshit", image: webvban7, videoId: "xi-1AeB7Krg", videoUrl: "https://www.youtube.com/shorts/BBc74tIWqKk" },
  { name: "Krushna", image: webvban9, videoId: "dLvatbiLrwM", videoUrl: "https://www.youtube.com/shorts/BBc74tIWqKk" }
];

const EmblaCarouselTestimonilasVideos = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start"
  });

  const [activeVideo, setActiveVideo] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false); // ✅ IMPORTANT

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi);

  const isMobileState = useSelector(
    state => state.mainReducer.isMobile,
    shallowEqual
  );

  // ✅ STOP VIDEO WHEN SLIDE CHANGES
  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setActiveVideo(null);
      setIsPlaying(false);
    };

    emblaApi.on("select", onSelect);
    return () => emblaApi.off("select", onSelect);
  }, [emblaApi]);

  // ✅ AUTO SCROLL (STOP WHEN VIDEO PLAYS)
  useEffect(() => {
    if (!emblaApi || isPlaying) return;

    let interval = setInterval(() => {
      if (emblaApi.canScrollNext()) {
        emblaApi.scrollNext();
      } else {
        emblaApi.scrollTo(0);
      }
    }, 40000);

    return () => clearInterval(interval);
  }, [emblaApi, isPlaying]);
  useEffect(() => {
    const handleError = (e) => {
      if (e.message?.includes("reading '1'")) {
        e.preventDefault(); // ✅ stop error breaking app
        return true;
      }
    };

    window.addEventListener("error", handleError);

    return () => {
      window.removeEventListener("error", handleError);
    };
  }, []);
  useEffect(() => {
    const handleError = (e) => {
      if (
        e.message?.includes("reading '1'") ||
        e.filename?.includes("content.bundle")
      ) {
        return true; // ✅ silently ignore extension errors
      }
    };

    window.addEventListener("error", handleError);

    return () => {
      window.removeEventListener("error", handleError);
    };
  }, []);
  return (
    <div className="emblavideo">
      <div className="embla__viewportvideo" ref={emblaRef}>
        <div className="embla__containervideo">
          {data.map((item, index) => (
            <div className="embla__slidevideo" key={index}>
              <div className="cardvideo">
{/* 
                <div className="image-wrappervideo">
                 {activeVideo === index ? (
  isMobileState ? (
    // ✅ MOBILE → open YouTube instead of iframe
    <div
      className="video-thumbnail"
      onClick={(e) => {
        e.stopPropagation();
        window.open(
          `https://www.youtube.com/watch?v=${item.videoId}`,
          "_blank"
        );
      }}
    >
      <img src={item.image} alt={item.name} />
      <div className="play-btnvideo">▶</div>
    </div>
  ) : (
    // ✅ DESKTOP → iframe autoplay works
    <iframe
      src={`https://www.youtube.com/embed/${item.videoId}?autoplay=1&mute=1`}
      className="video-frame"
      allow="autoplay; encrypted-media"
      allowFullScreen
    />
  )
) : (
  <div
    className="video-thumbnail"
    onClick={(e) => {
      e.stopPropagation();
      if (isMobileState) {
        // ✅ MOBILE → directly open YouTube
        window.open(
          `https://www.youtube.com/watch?v=${item.videoId}`,
          "_blank"
        );
      } else {
        // ✅ DESKTOP → show iframe
        setActiveVideo(index);
      }
    }}
    onTouchStart={(e) => e.stopPropagation()}
    onPointerDown={(e) => e.stopPropagation()}
  >
    <img src={item.image} alt={item.name} />
    <div className="play-btnvideo">▶</div>
  </div>
)}
                </div> */}

<div className="image-wrappervideo">
  {isMobileState ? (
    // ✅ MOBILE → NEVER use state, NEVER render iframe
    <a
      href={`https://www.youtube.com/watch?v=${item.videoId}`}
      target="_blank"
      rel="noopener noreferrer"
      className="video-thumbnail"
      onClick={(e) => e.stopPropagation()}
    >
      <img src={item.image} alt={item.name} />
      <div className="play-btnvideo">
         <div className="custuom-button">
         <div className="play-icon1"></div>
         </div>
      </div>
    </a>
  ) : (
    // ✅ DESKTOP ONLY
    activeVideo === index ? (
      <div className="iframe-container">
        <iframe
          src={`https://www.youtube.com/embed/${item.videoId}?autoplay=1&mute=1&playsinline=1`}
          className="video-frame"
          allow="autoplay; encrypted-media"
          allowFullScreen
        />
      </div>
    ) : (
      <div
        className="video-thumbnail"
        onClick={(e) => {
          e.stopPropagation();
          setActiveVideo(index);
          setIsPlaying(true); // ✅ keep your logic
        }}
      >
        <img src={item.image} alt={item.name} />
        <div className="play-btnvideo">
           <div className="custuom-button">
<div className="play-icon1"></div>
</div>
        </div>
      </div>
    )
  )}
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