import React, { useCallback, useEffect, useRef } from 'react'
import useEmblaCarousel from 'embla-carousel-react'

import { useSelector, shallowEqual } from "react-redux";
import {
  NextButton,
  PrevButton,
  usePrevNextButtons
} from './EmblaCarouselArrowButtonsGames'
import { useDotButton } from './EmblaCarouselDotButtonBuzz'
import B1 from "../assets/img/banners/business-standard-logo.png";
import B2 from "../assets/img/banners/forbes-logo.webp";
import B3 from "../assets/img/banners/et-logo.webp";
import B4 from "../assets/img/banners/thehindu-logo.svg";

const TWEEN_FACTOR_BASE = 0.2

const EmblaCarousel = (props) => {
  const { options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options)
  const tweenFactor = useRef(0)
  const tweenNodes = useRef([])

  const { } =
    useDotButton(emblaApi)

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi)

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
        <div className="embla__containerba-2">

          <div className=".embla__slideba-2 imgp-2" key={1}>
            <div className="embla__parallaxba-2" style={{ background: isMobileState ? "#222" : "#222" }}>
              <div className="embla__parallax__layerba-2-21">
                <img

                  className="embla__slide__imgba-26 embla__parallax__imgba-2"
                  src={B1}
                  alt="Your alt text"
                />
                {/* <div className="buzzdiv-2">
                    <h1>Dota Game</h1>
                  </div> */}

              </div>
            </div>
          </div>

          <div className=".embla__slideba imgp-2" key={2}>
            <div className="embla__parallaxba-2">
              <div className="embla__parallax__layerba-2-21">
                <img
                  className="embla__slide__imgba-26 embla__parallax__imgba-2"
                  src={B2}
                  alt="Your alt text"
                />
                {/* <div className="buzzdiv-2">
                    <h1>Pacman Game</h1>
                  </div> */}
              </div>
            </div>
          </div>

          <div className=".embla__slideba imgp-2" key={3}>
            <div className="embla__parallaxba-2" style={{ background: isMobileState ? "#fff" : "#222" }}>
              <div className="embla__parallax__layerba-2-21">
                <img

                  className="embla__slide__imgba-26 embla__parallax__imgba-2"
                  src={B3}
                  alt="Your alt text"
                />
                {/* <div className="buzzdiv-2">
                    <h1>Minecraft Game</h1>
                  </div> */}
              </div>
            </div>
          </div>

          <div className=".embla__slideba imgp-2" key={4}>
            <div className="embla__parallaxba-2" style={{ background: isMobileState ? "#fff" : "#222" }}>
              <div className="embla__parallax__layerba-2-21">
                <img

                  className="embla__slide__imgba-26 embla__parallax__imgba-2"
                  src={B4}
                  alt="Your alt text"
                />
                {/* <div className="buzzdiv-2">
                    <h1>Pacman Game</h1>
                  </div> */}
              </div>
            </div>
          </div>



        </div>
      </div>

      <div className="embla__controlsba-2">
        <div className="embla__buttonsba-2">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>


      </div>
    </div>
  )
}

export default EmblaCarousel
