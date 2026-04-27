import React, { useEffect, useState } from "react";
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
import webvban10 from "../assets/img/test/ankush-800w.webp";
import webvban11 from "../assets/img/test/vipul-800w.webp";
import webvban12 from "../assets/img/test/rajiv-800w.webp";
import webvban13 from "../assets/img/test/harshit-800w.webp";
import webvban14 from "../assets/img/test/rishi-800w.webp";
import webvban15 from "../assets/img/test/Krushna-800w.webp";
import webvban16 from "../assets/img/test/WebsiteVideoBanner1-800w.webp";
import webvban17 from "../assets/img/test/Bhanu-800w.webp";
import webvban18 from "../assets/img/test/sandeep-800w.webp";


import webvban19 from "../assets/img/test/ankush-400w.webp";
import webvban20 from "../assets/img/test/vipul-400w.webp";
import webvban21 from "../assets/img/test/rajiv-400w.webp";
import webvban22 from "../assets/img/test/harshit-400w.webp";
import webvban23 from "../assets/img/test/rishi-400w.webp";
import webvban24 from "../assets/img/test/Krushna-400w.webp";
import webvban25 from "../assets/img/test/WebsiteVideoBanner1-400w.webp";
import webvban26 from "../assets/img/test/Bhanu-400w.webp";
import webvban27 from "../assets/img/test/sandeep-400w.webp";


const data = [
  {
    name: "Jithin Peter", img400: webvban25,
    img800: webvban16, videoId: "gY7TXYWoi5w", videoUrl: "https://www.youtube.com/shorts/gY7TXYWoi5w"
  },
  {
    name: "Sandeep", img400: webvban27,
    img800: webvban18,
    videoId: "zhir5FxzGFI", videoUrl: "https://www.youtube.com/shorts/BBc74tIWqKk"
  },
  {
    name: "Ankush", img400: webvban19,
    img800: webvban10, videoId: "BBc74tIWqKk", videoUrl: "https://www.youtube.com/shorts/BBc74tIWqKk"
  },
  {
    name: "Vipul", img400: webvban20,
    img800: webvban11, videoId: "lmQ0tylpeuw"
  },
  {
    name: "Rishi Prakash", img400: webvban23,
    img800: webvban14, videoId: "-h33trH8YLU", videoUrl: "https://www.youtube.com/shorts/BBc74tIWqKk"
  },
  {
    name: "Rajiv Chavli", img400: webvban21,
    img800: webvban12, videoId: "8RogLRiFQY8", videoUrl: "https://www.youtube.com/shorts/BBc74tIWqKk"
  },
  {
    name: "Bhanu Verma", img400: webvban17,
    img800: webvban12, videoId: "V-Y3VxFxjys", videoUrl: "https://www.youtube.com/shorts/BBc74tIWqKk"
  },
  {
    name: "Harshit", img400: webvban22,
    img800: webvban13, videoId: "xi-1AeB7Krg", videoUrl: "https://www.youtube.com/shorts/BBc74tIWqKk"
  },
  {
    name: "Krushna", img400: webvban24,
    img800: webvban15, videoId: "dLvatbiLrwM", videoUrl: "https://www.youtube.com/shorts/BBc74tIWqKk"
  }
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
                    <>
                      <a
                        href={`https://www.youtube.com/watch?v=${item.videoId}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="video-thumbnail"
                      >
                        {/* <img src={item.image} alt={item.name} /> */}
                 <img
  src={item.img400}
  srcSet={`${item.img400} 400w, ${item.img800} 800w`}
  sizes="(max-width: 768px) 100vw, 391px"
  alt={item.name}
  width="391"
  height="220"
  loading={index === 0 ? "eager" : "lazy"}
  fetchpriority={index === 0 ? "high" : "low"}
  decoding="async"
/>
                      </a>

                      {/* 🔥 MOVE BUTTON OUTSIDE */}
                      <div
                        className="play-btnvideo"
                        onClick={() =>
                          window.open(`https://www.youtube.com/watch?v=${item.videoId}`, "_blank")
                        }
                      >
                        <div className="custom-button">
                          <div className="play-icon1"></div>
                        </div>
                      </div>
                    </>
                  ) : (
                    activeVideo === index ? (
                      <div className="iframe-container">
                        <iframe
                          src={`https://www.youtube.com/embed/${item.videoId}?autoplay=1&mute=1&playsinline=1`}
                          title="YouTube video player"
                          className="video-frame"
                          allow="autoplay; encrypted-media"
                          allowFullScreen
                        />
                      </div>
                    ) : (
                      <>
                        <div
                          className="video-thumbnail"
                          onClick={(e) => {
                            e.stopPropagation();
                            setActiveVideo(index);
                            setIsPlaying(true);
                          }}
                        >
                          {/* <img src={item.image} alt={item.name} /> */}
                         <img
  src={item.img400}
  srcSet={`${item.img400} 400w, ${item.img800} 800w`}
  sizes="(max-width: 768px) 100vw, 391px"
  alt={item.name}
  width="391"
  height="220"
  loading={index === 0 ? "eager" : "lazy"}
  fetchpriority={index === 0 ? "high" : "low"}
  decoding="async"
/>
                        </div>

                        {/* 🔥 OUTSIDE again */}
                        <div
                          className="play-btnvideo"
                          onClick={(e) => {
                            e.stopPropagation();
                            setActiveVideo(index);
                            setIsPlaying(true);
                          }}
                        >
                          <div className="custom-button">
                            <div className="play-icon1"></div>
                          </div>
                        </div>
                      </>
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