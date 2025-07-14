import React, { useCallback, useEffect, useRef } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import {
  NextButton,
  PrevButton,
  usePrevNextButtons
} from './EmblaCarouselArrowButtonsAward'
import awardtwo from "../assets/img/awards/newgdc.webp"
import awardthree from "../assets/img/awards/IGDC19.webp"
import awardone from "../assets/img/awards/NGDC.webp"
import awardfive from "../assets/img/awards/competition.webp"
import awardfour from "../assets/img/awards/IGDC22.webp"
import awardsix from "../assets/img/awards/IGDC23.webp"



const TWEEN_FACTOR_BASE = 0.2

const EmblaCarousel = (props) => {
  const { options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options)
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

  return (
    <div className="emblaba">
      <div className="embla__viewportba" ref={emblaRef}>
        <div className="embla__containerba">

          <div className=".embla__slideba imgp" key={1}>
            <div className="embla__parallaxba">
              <div className="embla__parallax__layerba">
                <img
                  className="embla__slide__imgba embla__parallax__imgba"
                  src={awardone}
                  alt="Your alt text"
                />
                <div className="buzzdiva">
                  {/* <p>NGDC 2015
                    </p> */}
                  <p>Casual connect 2015 </p>
                </div>

              </div>
            </div>
          </div>

          <div className=".embla__slideba imgp" key={2}>
            <div className="embla__parallaxba">
              <div className="embla__parallax__layerba">
                <img
                  className="embla__slide__imgba embla__parallax__imgba"
                  src={awardtwo}
                  alt="Your alt text"
                />
                <div className="buzzdiva">
                  <p>Upcoming Game of the year at IGDC 2019</p>
                </div>
              </div>
            </div>
          </div>

          <div className=".embla__slideba imgp" key={3}>
            <div className="embla__parallaxba">
              <div className="embla__parallax__layerba">
                <img
                  className="embla__slide__imgba embla__parallax__imgba"
                  src={awardthree}
                  alt="Your alt text"
                />
                <div className="buzzdiva">
                  <p>Student game of the year at IGDC 2019</p>
                </div>
              </div>
            </div>
          </div>

          <div className=".embla__slideba imgp" key={4}>
            <div className="embla__parallaxba">
              <div className="embla__parallax__layerba">
                <img
                  className="embla__slide__imgba embla__parallax__imgba"
                  src={awardfour}
                  alt="Your alt text"
                />
                <div className="buzzdiva">
                  <p>Hyper casual Game of the year- Student Game of the year at IGDC 2022</p>
                </div>

              </div>
            </div>
          </div>

          <div className=".embla__slideba imgp" key={5}>
            <div className="embla__parallaxba">
              <div className="embla__parallax__layerba">
                <img
                  className="embla__slide__imgba embla__parallax__imgba"
                  src={awardfive}
                  alt="Your alt text"
                />
                <div className="buzzdiva">
                  <p>In house Game development competition 2023 </p>
                </div>
              </div>
            </div>
          </div>

          <div className=".embla__slideba imgp" key={6}>
            <div className="embla__parallaxba">
              <div className="embla__parallax__layerba">
                <img
                  className="embla__slide__imgba embla__parallax__imgba"
                  src={awardsix}
                  alt="Your alt text"
                />
                <div className="buzzdiva">
                  <p>Student Game of the Year at IGDC 2023</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      <div className="embla__controlsba">
        <div className="embla__buttonsba">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>


      </div>
    </div>
  )
}

export default EmblaCarousel
