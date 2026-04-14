import React, { useEffect, useCallback, useRef, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
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
  {
    name: "Jithin Peter",
    image: webvban1,
    video: "https://www.youtube.com/shorts/gY7TXYWoi5w"
  },
  {
    name: "Sandeep",
    image: webvban3,
    video: "https://www.youtube.com/shorts/zhir5FxzGFI"
  },
  {
    name: "Ankush",
    image: webvban4,
    video: "https://www.youtube.com/shorts/BBc74tIWqKk"
  },
  {
    name: "Vipul",
    image: webvban5,
    video: "https://www.youtube.com/shorts/lmQ0tylpeuw"
  },
  {
    name: "Rishi Prakash",
    image: webvban8,
    video: "https://www.youtube.com/shorts/-h33trH8YLU"
  },
  {
    name: "Rajiv Chavli",
    image: webvban6,
    video: "https://www.youtube.com/shorts/8RogLRiFQY8"
  },

  {
    name: " Bhanu Verma",
    image: webvban2,
    video: "https://www.youtube.com/watch?v=V-Y3VxFxjys"
  },
  {
    name: "Harshit",
    image: webvban7,
    video: "https://www.youtube.com/watch?v=xi-1AeB7Krg"
  },
  {
    name: "Krushna",
    image: webvban9,
    video: "https://www.youtube.com/shorts/dLvatbiLrwM"
  }
];
const TWEEN_FACTOR_BASE = 0.2

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
  const tweenFactor = useRef(0)
  const tweenNodes = useRef([])
  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi)
  const setTweenNodes = useCallback((emblaApi) => {
    tweenNodes.current = emblaApi.slideNodes().map((slideNode) => {
      return slideNode.querySelector('.embla__parallax__layerbM')
    })
  }, [])

  const setTweenFactor = useCallback((emblaApi) => {
    tweenFactor.current = TWEEN_FACTOR_BASE * emblaApi.scrollSnapList().length
  }, [])

  const tweenParallax = useCallback((emblaApi, eventName) => {
    const engine = emblaApi.internalEngine()
    const scrollProgress = emblaApi.scrollProgress()
    const slidesInView = emblaApi.slidesInView()
    const isScrollEvent = eventName === 'scroll'

    emblaApi.scrollSnapList().forEach((scrollSnap, snapIndex) => {
      let diffToTarget = scrollSnap - scrollProgress
      const slidesInSnap = engine.slideRegistry[snapIndex]

      slidesInSnap.forEach((slideIndex) => {
        if (isScrollEvent && !slidesInView.includes(slideIndex)) return

        if (engine.options.loop) {
          engine.slideLooper.loopPoints.forEach((loopItem) => {
            const target = loopItem.target()

            if (slideIndex === loopItem.index && target !== 0) {
              const sign = Math.sign(target)

              if (sign === -1) {
                diffToTarget = scrollSnap - (1 + scrollProgress)
              }
              if (sign === 1) {
                diffToTarget = scrollSnap + (1 - scrollProgress)
              }
            }
          })
        }
      })
    })
  }, [])
  useEffect(() => {
    if (!emblaApi) return

    let autoScrollInterval

    const autoScrollLeft = () => {
      if (emblaApi.canScrollPrev()) {
        emblaApi.scrollPrev()
      } else {
        emblaApi.scrollTo(emblaApi.scrollSnapList().length - 1)
      }
    }

    const startAutoScroll = () => {
      stopAutoScroll()
      autoScrollInterval = setInterval(autoScrollLeft, 3000)
    }

    const stopAutoScroll = () => {
      if (autoScrollInterval) {
        clearInterval(autoScrollInterval)
        autoScrollInterval = null
      }
    }

    startAutoScroll()

    const emblaRoot = emblaApi.rootNode()

    emblaRoot.addEventListener('mouseenter', stopAutoScroll)
    emblaRoot.addEventListener('mouseleave', startAutoScroll)

    setTweenNodes(emblaApi)
    setTweenFactor(emblaApi)
    tweenParallax(emblaApi)

    emblaApi
      .on('reInit', setTweenNodes)
      .on('reInit', setTweenFactor)
      .on('reInit', tweenParallax)
      .on('scroll', tweenParallax)
      .on('slideFocus', tweenParallax)

    return () => {
      stopAutoScroll()
      emblaRoot.removeEventListener('mouseenter', stopAutoScroll)
      emblaRoot.removeEventListener('mouseleave', startAutoScroll)
    }
  }, [emblaApi, setTweenFactor, setTweenNodes, tweenParallax])

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