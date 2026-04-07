import React, { useCallback, useEffect, useRef } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import {
  NextButton,
  PrevButton,
  usePrevNextButtons
} from './EmblaCarouselArrowButtons'
import 'react-lazy-load-image-component/src/effects/blur.css';
import newbanF from "../assets/img/banners/NewCampus.webp";
import newban400 from "../assets/img/banners/NewCampus-400w.webp";
import newban800 from "../assets/img/banners/NewCampus-800w.webp";
import newban1200 from "../assets/img/banners/NewCampus-1200w.webp";
import newban1 from "../assets/img/banners/igdcb.webp";
import newban1400 from "../assets/img/banners/igdcb-400w.webp";
import newban1800 from "../assets/img/banners/igdcb-800w.webp";
import newban11200 from "../assets/img/banners/igdcb-1200w.webp";
import newban3 from "../assets/img/banners/alumni.webp";
import newban3400 from "../assets/img/banners/alumni-400w.webp";
import newban3800 from "../assets/img/banners/alumni-800w.webp";
import newban31200 from "../assets/img/banners/alumni-1200w.webp";
import mbnewban0 from "../assets/img/mobilebanner/homepagebanner/igdcbm.webp";
import mbnewbanF from "../assets/img/mobilebanner/homepagebanner/NewCampus.webp";
import mbnewban3 from "../assets/img/mobilebanner/homepagebanner/alumni.webp";
import clgband from "../assets/img/banners/Collage-Desktop-Banner.webp";
import clgbanm from "../assets/img/mobilebanner/homepagebanner/Collage-Mobile-Banner.webp";

const TWEEN_FACTOR_BASE = 0.84

const numberWithinRange = (number, min, max) =>
  Math.min(Math.max(number, min), max)

const EmblaCarousel = (props) => {

  const { options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options)
  const tweenFactor = useRef(0)
  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi)

  const setTweenFactor = useCallback((emblaApi) => {
    tweenFactor.current = TWEEN_FACTOR_BASE * emblaApi.scrollSnapList().length
  }, [])

  const tweenOpacity = useCallback((emblaApi, eventName) => {
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

        const tweenValue = 1 - Math.abs(diffToTarget * tweenFactor.current)
        const opacity = numberWithinRange(tweenValue, 0, 1).toString()
        emblaApi.slideNodes()[slideIndex].style.opacity = opacity
      })
    })
  }, [])

  useEffect(() => {
    if (!emblaApi) return

    setTweenFactor(emblaApi)
    tweenOpacity(emblaApi)
    emblaApi
      .on('reInit', setTweenFactor)
      .on('reInit', tweenOpacity)
      .on('scroll', tweenOpacity)
      .on('slideFocus', tweenOpacity)
  }, [emblaApi, setTweenFactor, tweenOpacity]);

  const [isMobile, setIsMobile] = React.useState(null)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768)
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])


  return (
    <div>

      <div className="embla">
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container">
          
  <div className="embla__slide" key={0}>
    <div className="banner-wrapper">
      <picture>
        {/* Mobile banner */}
        <source srcSet={clgbanm} media="(max-width: 768px)" />

        {/* Desktop banner */}
        <img
          src={clgband}
          alt="gaming college"
          width={1526}
          height={450}
          className="banner-img"
        />
      </picture>
 <div className="banner-overlay"></div>
      {/* Centered Content */}
      <div className="banner-content">
        <h1 className="title1 white-txt"><span>India's #1</span> Game Design & Development College</h1>
        <div >
           <a className='banenbtn animated-button' href="/courses/" target="_blank">View Courses</a>
          <a className='banenbtn2 btn-swipe' href="/enquire-now/">Enquire Now</a>
        </div>
      </div>
    </div>
  </div>

            <div className="embla__slide" key={1}>
              {/* <picture>
                <source srcSet={mbnewban0} media="(max-width: 768px)" />
                <img
                  src={newban1}
                  alt="Backstage pass students at IGDC 2025"
                  width={1526}
                  height={450}
                  loading="eager"          // ✅ REQUIRED for LCP
                  fetchpriority="high"     // ✅ GOOD
                  style={{ width: "100%", margin: "0 auto", height: "auto" }}
                />
              </picture> */}
              <picture>
                {/* Mobile */}
                <source
                  srcSet={mbnewban0}
                  media="(max-width: 768px)"
                />

                {/* Desktop responsive */}
                <source
                  srcSet={`
                      ${newban1400} 400w,
                      ${newban1800} 800w,
                      ${newban11200} 1200w,
                      ${newban1} 1500w
                    `}
                     sizes="100vw"
                />

                {/* LCP image */}
                <img
                  src={newban1800}
                  alt="Backstage Pass New campus"
                  width="1526"
                  height="450"
                  loading="eager"
                  fetchpriority="high"
                  decoding="async"
                  style={{ width: "100%", height: "auto" }}
                />
              </picture>

            </div>
            <div className="embla__slide" key={220}>
              {/* <picture>
                <source srcSet={mbnewbanF} media="(max-width: 768px)" />
                <img
                  src={newbanF}
                  alt="Backtage Pass New campaus"
                  width={1526}
                  height={450}
                  fetchpriority="high"
                  decoding="async"
                  style={{ width: "100%" }}
                />
              </picture> */}
              <picture>
                {/* Mobile banner */}
                <source
                  srcSet={mbnewbanF}
                  media="(max-width: 768px)"
                />
                {/* Desktop responsive images */}
                <source
                      srcSet={`
                    ${newban400} 400w,
                    ${newban800} 800w,
                    ${newban1200} 1200w,
                    ${newbanF} 1500w
                  `}
                  sizes="1340px"
                />
                {/* Fallback image */}
                <img
                  src={newban800}
                  alt="Backstage Pass New campus"
                  width="1526"
                  height="450"
                  fetchpriority="high"
                  decoding="async"
                  style={{ width: "100%", height: "auto" }}
                />
              </picture>
            </div>
            <div className="embla__slide" key={3}>
              {/* <picture>
                <source srcSet={mbnewban3} media="(max-width: 768px)" />
                <img
                  src={newban3}
                  alt="Alumni Success Stories"
                  width={1526}
                  height={450}
                  loading="lazy"  // ✅ Native lazy loading
                  style={{ width: "100%", margin: "0 auto" }}
                />
              </picture> */}
              <picture>
                {/* Mobile banner */}
                <source
                  srcSet={mbnewban3}
                  media="(max-width: 768px)"
                />
                {/* Desktop responsive images */}
                <source
                  srcSet={`
                ${newban3400} 400w,
                ${newban3800} 800w,
                ${newban31200} 1200w,
                ${newban3} 1500w
              `}
                  sizes="1340px"
                />
                <img
                  src={newban3800}
                  alt="Backstage Pass New campus"
                  width="1526"
                  height="450"
                  fetchpriority="high"
                  decoding="async"
                  style={{ width: "100%", height: "auto" }}
                />
              </picture>
            </div>
          </div>
        </div>
        <div className="embla__controls">
          <div className="embla__buttons">
            <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
            <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
          </div>
        </div>

      </div>
    </div>
  )
}

export default EmblaCarousel
