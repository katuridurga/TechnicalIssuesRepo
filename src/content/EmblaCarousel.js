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
// import newbang from "../assets/img/banners/gaming1.webp";
// import newban2 from "../assets/img/banners/learning.webp";
import newban3 from "../assets/img/banners/alumni.webp";
import mbnewban0 from "../assets/img/mobilebanner/homepagebanner/igdcbm.webp";
import mbnewbanF from "../assets/img/mobilebanner/homepagebanner/NewCampus.webp";
// import mbnewban2 from "../assets/img/mobilebanner/homepagebanner/learning.webp";
import mbnewban3 from "../assets/img/mobilebanner/homepagebanner/alumni.webp";


const TWEEN_FACTOR_BASE = 0.84

const numberWithinRange = (number, min, max) =>
  Math.min(Math.max(number, min), max)

const EmblaCarousel = (props) => {
  useEffect(() => {
    // Preload the LCP image to optimize loading
    const preloadLink = document.createElement('link');
    preloadLink.rel = 'preload';
    preloadLink.href = newban1; // Or replace with the image that's critical for LCP
    preloadLink.as = 'image';
    document.head.appendChild(preloadLink);

    return () => {
      document.head.removeChild(preloadLink); // Clean up on unmount
    };
  }, [newban1]);  // If newban1 changes dynamically, adjust accordingly

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
              <picture>
                <source srcSet={mbnewban0} media="(max-width: 768px)" />
                <img
                  src={newban1}
                  alt="Home Banner"
                  width={1526}
                  height={450}
                  decoding="async"
                  fetchpriority="high"
                  // Remove loading="lazy" to ensure immediate loading for LCP image
                  style={{ width: "100%", margin: "0 auto", height: "auto" }}
                />
              </picture>



            </div>



            <div className="embla__slide" key={220}>
          <picture>
  {/* Mobile WebP Image for smaller screens (max-width: 768px) */}
  <source srcSet={mbnewbanF} media="(max-width: 768px)" type="image/webp" />
  
  {/* Desktop WebP Image for larger screens */}
  <source srcSet={newbanF} media="(min-width: 769px)" type="image/webp" />

  {/* Mobile JPG Image fallback */}
  <source srcSet={mbnewbanF.replace('.webp', '.jpg')} media="(max-width: 768px)" type="image/jpeg" />

  {/* Desktop JPG Image fallback */}
  <source srcSet={newbanF.replace('.webp', '.jpg')} media="(min-width: 769px)" type="image/jpeg" />

  {/* Fallback image (WebP or JPG depending on the browser support) */}
  <img
    src={newbanF} // Default image for browsers that don't support <picture> or <source> elements
    alt="Home Banner"
    width={1526}
    height={450}
    fetchpriority="high"
    decoding="async"
    style={{ width: "100%", margin: "0 auto", height: "auto" }}
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
    loading="lazy"  // ✅ Native lazy loading for images that are not critical for LCP
    decoding="async" // Helps with non-blocking rendering
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
