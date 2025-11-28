import React, { useCallback, useEffect, useRef } from 'react'
import useEmblaCarousel from 'embla-carousel-react'

import { useSelector, shallowEqual } from "react-redux";
import ig from '../assets/img/partners/Terminator-Genisys-Future-War.webp';
import ig2 from "../assets/img/partners/Hit-Wicket.webp";
import ig1 from "../assets/img/partners/FORZA-7.webp";
const TWEEN_FACTOR_BASE = 0.2

const EmblaCarousel = (props) => {
  const { options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options)
  const tweenFactor = useRef(0)
  const tweenNodes = useRef([])

  const setTweenNodes = useCallback((emblaApi) => {
    tweenNodes.current = emblaApi.slideNodes().map((slideNode) => {
      return slideNode.querySelector('.embla__parallax__layerb')
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

        // const translate = diffToTarget * (-1 * tweenFactor.current) * 100
        // const tweenNode = tweenNodes.current[slideIndex]
        // tweenNode.style.transform = `translateX(${translate}%)`
      })
    })
  }, [])

  useEffect(() => {
    if (!emblaApi) return

    setTweenNodes(emblaApi)
    setTweenFactor(emblaApi)
    tweenParallax(emblaApi)

    emblaApi
      .on('reInit', setTweenNodes)
      .on('reInit', setTweenFactor)
      .on('reInit', tweenParallax)
      .on('scroll', tweenParallax)
      .on('slideFocus', tweenParallax)
  }, [emblaApi, setTweenFactor, setTweenNodes, tweenParallax])
  const isMobileState = useSelector(
    state => state.mainReducer.isMobile,
    shallowEqual
  );
  return (
    <div className="emblaba-2">
      <div className="embla__viewportba-2" ref={emblaRef}>
        <div className="embla__containerba-2 clinm">


          <div className=".embla__slideba imgp-22a" key={1}>
            <div className="embla__parallaxba-2">
              <div className="embla__parallax__layerba-2">
                <img
                  className="embla__slide__imgba-22g embla__parallax__imgba-2"
                  src={ig1}
                  alt="ig1"
                  style={{ width: isMobileState ? "100%" : "100%", height: isMobileState ? "250px" : "270px" }}
                />
                <div className="buzzdiv-2" style={{ padding: "8px 30px" }}>
                  <h1>3D Environment Artist
                  </h1>
                </div>
              </div>
            </div>
          </div>


          <div className=".embla__slideba imgp-22a" key={2}>
            <div className="embla__parallaxba-2">
              <div className="embla__parallax__layerba-2">
                <img
                  className="embla__slide__imgba-22g embla__parallax__imgba-2"

                  src={ig}
                  alt="ig"
                  style={{ width: isMobileState ? "100%" : "100%", height: isMobileState ? "250px" : "270px" }}
                />
                <div className="buzzdiv-2" style={{ padding: "8px 30px" }}>
                  <h1>Senior Game Designer
                  </h1>
                </div>
              </div>
            </div>
          </div>



          <div className=".embla__slideba imgp-22a" key={3}>
            <div className="embla__parallaxba-2">
              <div className="embla__parallax__layerba-2">
                <img
                  className="embla__slide__imgba-22g embla__parallax__imgba-2"
                  src={ig2}
                  alt="ig2"
                  style={{ width: isMobileState ? "100%" : "100%", height: isMobileState ? "250px" : "270px" }}
                />
                <div className="buzzdiv-2" style={{ padding: "8px 30px" }}>
                  <h1>Concept Artist
                  </h1>
                </div>
              </div>
            </div>
          </div>













        </div>
      </div>


    </div>
  )
}

export default EmblaCarousel
