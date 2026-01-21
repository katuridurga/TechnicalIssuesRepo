import React, { useCallback, useEffect, useRef } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import {
  NextButton,
  PrevButton,
  usePrevNextButtons
} from './EmblaCarouselArrowButtons'
import 'react-lazy-load-image-component/src/effects/blur.css';
import newbanF from "../assets/img/banners/NewCampus.webp";
import newban1 from "../assets/img/banners/igdcb.webp";
import newban3 from "../assets/img/banners/alumni.webp";
import mbnewban0 from "../assets/img/mobilebanner/homepagebanner/igdcbm.webp";
import mbnewbanF from "../assets/img/mobilebanner/homepagebanner/NewCampus.webp";
import mbnewban3 from "../assets/img/mobilebanner/homepagebanner/alumni.webp";


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
              {/* <picture>
                <source srcSet={mbnewban0} media="(max-width: 768px)" />
                <img
                  src={newban1}
                  alt="Home Banner"
                  width={1526}
                  height={450}
                  decoding="async"
                  fetchpriority="high"
                  loading="lazy"
                  style={{ width: "100%", margin: "0 auto", height: "auto" }}
                />
              </picture> */}
            <picture>
  <source
    srcSet={mbnewban0}
    media="(max-width: 768px)"
  />
  <img
    src={newban1}
    srcSet={`${newban1} 1526w`}
    sizes="100vw"
    alt="Home Banner"
    width={1526}
    height={450}
    loading="eager"
    decoding="async"
    fetchpriority="high"
    style={{ width: "100%", height: "auto" }}
  />
</picture>


            </div>
            <div className="embla__slide" key={220}>
              <picture>
                <source srcSet={mbnewbanF} media="(max-width: 768px)" />
                {/* <img
                  src={newbanF}
                  alt="Home Banner"
                  width={1526}
                  height={450}
                  fetchpriority="high"
                  decoding="async"
                  style={{ width: "100%" }}
                /> */}
                <img
                  src="NewCampus-1200.webp"
                  srcset="
    NewCampus-390.webp 390w,
    NewCampus-768.webp 768w,
    NewCampus-1200.webp 1200w
  "
                  sizes="(max-width: 768px) 100vw, 1200px"
                  alt="Home Banner"
                  fetchpriority="high"
                  decoding="async"
                />

              </picture>
            </div>
            <div className="embla__slide" key={3}>
              <picture>
                <source srcSet={mbnewban3} media="(max-width: 768px)" />
                <img
                  src={newban3}
                  alt="Home Banner"
                  width={1526}
                  height={450}
                  loading="lazy"  // ✅ Native lazy loading
                  style={{ width: "100%", margin: "0 auto" }}
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
