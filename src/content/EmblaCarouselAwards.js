import React, { useCallback, useEffect, useRef } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import {
  NextButton,
  PrevButton,
  usePrevNextButtons
} from './EmblaCarouselArrowButtonsAward'
import { useDotButton } from './EmblaCarouselDotButtonBuzz';
import awd1 from "../assets/img/banners/2018.webp";
import awr1 from "../assets/img/banners/2023.webp";
import awr2 from "../assets/img/banners/times2018.webp";
import awr3 from "../assets/img/banners/times2022.webp";
import awr4 from "../assets/img/banners/times2019.webp";
import awr6 from "../assets/img/banners/Time.webp";
import awr7 from "../assets/img/banners/times2023.webp";
const TWEEN_FACTOR_BASE = 0.2

const EmblaCarousel = (props) => {
  const { options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options)
  const tweenFactor = useRef(0)
  const tweenNodes = useRef([])

  const {} =
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
          
            <div className=".embla__slideba imgn" key={1}>
              <div className="embla__parallaxba">
                <div className="embla__parallax__layerba">
                  <img
                    className="embla__slide__imgba embla__parallax__imgba"
                    src={awd1}
                    alt="Your alt text"
                  />
                  <div className="buzzdiv">
                    <p>Best Education Brand Award Economic Times 2018
                    </p>
                  </div>
                  
                </div>
              </div>
            </div>
            <div className=".embla__slideba imgn" key={2}>
              <div className="embla__parallaxba">
                <div className="embla__parallax__layerba">
                  <img
                    className="embla__slide__imgba embla__parallax__imgba"
                    src={awr2}
                    alt="Your alt text"
                  />
                  <div className="buzzdiv">
                    <p>Times Education Excellence Awards 2018-19
                    </p>
                  </div>
                  
                </div>
              </div>
            </div>
            <div className=".embla__slideba imgn" key={3}>
              <div className="embla__parallaxba">
                <div className="embla__parallax__layerba">
                  <img
                    className="embla__slide__imgba embla__parallax__imgba"
                    src={awr4}
                    alt="Your alt text"
                    style={{objectPosition:"center"}}
                  />
                   <div className="buzzdiv">
                    <p>Times Excellence Award 2019-20
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className=".embla__slideba imgn" key={3}>
              <div className="embla__parallaxba">
                <div className="embla__parallax__layerba">
                  <img
                    className="embla__slide__imgba embla__parallax__imgba"
                    src={awr6}
                    alt="Your alt text"
                  />
                   <div className="buzzdiv">
                    <p>Times Education Excellence Award 2020-21
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className=".embla__slideba imgn" key={4}>
              <div className="embla__parallaxba">
                <div className="embla__parallax__layerba">
                  <img
                    className="embla__slide__imgba embla__parallax__imgba"
                    src={awr3}
                    alt="Your alt text"
                    style={{objectPosition:"center"}}
                  />
                   <div className="buzzdiv">
                    <p>Times Education Excellence Awards 2022
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className=".embla__slideba imgn" key={5}>
              <div className="embla__parallaxba">
                <div className="embla__parallax__layerba">
                  <img
                    className="embla__slide__imgba embla__parallax__imgba"
                    src={awr1}
                    alt="Your alt text"
                  />
                   <div className="buzzdiv">
                    <p>Emerging Leader Award at the Eduspark Awards 2023</p>
                  </div>
                </div>
              </div>
            </div>

            <div className=".embla__slideba imgn" key={6}>
              <div className="embla__parallaxba">
                <div className="embla__parallax__layerba">
                  <img
                    className="embla__slide__imgba embla__parallax__imgba"
                    src={awr7}
                    alt="Your alt text"
                  />
                   <div className="buzzdiv">
                    <p>Times Education Excellence Awards 2023
                    </p>
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
