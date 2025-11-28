import React, { useCallback, useEffect, useRef } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import mentor1 from "../../src/assets/img/test/mentor1.webp";
import men2 from "../../src/assets/img/test/men2.webp";
import { TfiLinkedin } from "react-icons/tfi";
import {
  NextButton,
  PrevButton,
  usePrevNextButtons
} from './EmblaCarouselArrowMentors.js'

const TWEEN_FACTOR_BASE = 0.00

const numberWithinRange = (number, min, max) =>
  Math.min(Math.max(number, min), max)

const EmblaCarouselMentors = (props) => {
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
      return slideNode.querySelector('.embla__slide__number')
    })
  }, [])

  const setTweenFactor = useCallback((emblaApi) => {
    tweenFactor.current = TWEEN_FACTOR_BASE * emblaApi.scrollSnapList().length
  }, [])

  const tweenScale = useCallback((emblaApi, eventName) => {
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
        const scale = numberWithinRange(tweenValue, 0, 1).toString()
        const tweenNode = tweenNodes.current[slideIndex]
        tweenNode.style.transform = `scale(${scale})`
      })
    })
  }, [])

  useEffect(() => {
    if (!emblaApi) return

    setTweenNodes(emblaApi)
    setTweenFactor(emblaApi)
    tweenScale(emblaApi)

    emblaApi
      .on('reInit', setTweenNodes)
      .on('reInit', setTweenFactor)
      .on('reInit', tweenScale)
      .on('scroll', tweenScale)
      .on('slideFocus', tweenScale)
  }, [emblaApi, setTweenFactor, setTweenNodes, tweenScale])

  return (
    <div className="embla3" style={{position: "relative"}}>
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container card__collection clear-fix" style={{ overflow: "visible"}}>

      

          <div className="embla__slidet" key={1} data-label="In Progress">
            <div className="embla__slide__number">
            <div className="cards cards--two">
                          <img src={mentor1} className="img-responsive" alt="Cards" />
                          <span className="cards--two__rect"></span>
                          <p>
                            <ul className="cards__list">
                              <li style={{ left: "5px" }}><TfiLinkedin /></li>
                            </ul>
                          </p><br />
                          <p>A. Bala Krishna (Principal)</p><br />
                          <p style={{ lineHeight: "77px" }}>Professor Computer Science</p>

                        </div>
            </div>
          </div>

          <div className="embla__slidet" key={2}>
            <div className="embla__slide__number">
            <div className="cards cards--two">
                          <img src={men2} className="img-responsive" alt="Cards" />
                          <span className="cards--two__rect"></span>
                          <p>
                            <ul className="cards__list">
                              <li style={{ left: "5px" }}><TfiLinkedin /></li>
                            </ul>
                          </p><br />
                          <p>N. Swapna (Vice Principal)
                          </p><br />
                          <p style={{ lineHeight: "77px" }}>Associate Professor
                            Computer Science
                          </p>
                        </div>
            </div>
          </div>
          <div className="embla__slidet" key={3}>
            <div className="embla__slide__number">
            <div className="cards cards--two">
                          <img src={mentor1} className="img-responsive" alt="Cards" />
                          <span className="cards--two__rect"></span>
                          <p>
                            <ul className="cards__list">
                              <li style={{ left: "5px" }}><TfiLinkedin /></li>
                            </ul>
                          </p><br />
                          <p>Krishna Prasad</p><br />
                          <p style={{ lineHeight: "77px" }}>Assistant Professor Computer Science
                          </p>
                        </div>
            </div>
          </div>
          <div className="embla__slidet" key={4}>
            <div className="embla__slide__number">
            <div className="cards cards--two">
                          <img src={mentor1} className="img-responsive" alt="Cards" />
                          <span className="cards--two__rect"></span>
                          <p>
                            <ul className="cards__list">
                              <li style={{ left: "5px" }}><TfiLinkedin /></li>
                            </ul>
                          </p><br />
                          <p>Sania Arzoo</p><br />
                          <p style={{ lineHeight: "77px" }}>Assistant Professor Computer Science
                          </p>
                        </div>
            </div>
          </div>

          <div className="embla__slidet" key={5}>
            <div className="embla__slide__number">
            <div className="cards cards--two">
                          <img src={mentor1} className="img-responsive" alt="Cards" />
                          <span className="cards--two__rect"></span>
                          <p>
                            <ul className="cards__list">
                              <li style={{ left: "5px" }}><TfiLinkedin /></li>
                            </ul>
                          </p><br />
                          <p>Sandeep Salimeda</p><br />
                          <p style={{ lineHeight: "77px" }}>Senior Instructor <br />Game Programming</p>
                        </div>
            </div>
          </div>
          
          <div className="embla__slidet" key={6}>
            <div className="embla__slide__number">
            <div className="cards cards--two">
                          <img src={mentor1} className="img-responsive" alt="Cards" />
                          <span className="cards--two__rect"></span>
                          <p>
                            <ul className="cards__list">
                              <li style={{ left: "5px" }}><TfiLinkedin /></li>
                            </ul>
                          </p><br />
                          <p>N. D. Sandeep</p><br />
                          <p style={{ lineHeight: "77px" }}>Senior Instructor <br />Game Programming</p>
                        </div>

            </div>
          </div>
          
          <div className="embla__slidet" key={7}>
            <div className="embla__slide__number">
            <div className="cards cards--two">
                          <img src={mentor1} className="img-responsive" alt="Cards" />
                          <span className="cards--two__rect"></span>
                          <p>
                            <ul className="cards__list">
                              <li style={{ left: "5px" }}><TfiLinkedin /></li>
                            </ul>
                          </p><br />
                          <p>Niraj Sangani</p><br />
                          <p style={{ lineHeight: "77px" }}>Master Instructor Game Design</p>
                        </div>
            </div>
          </div>
          <div className="embla__slidet" key={8}>
            <div className="embla__slide__number">
            <div className="cards cards--two">
                          <img src={mentor1} className="img-responsive" alt="Cards" />
                          <span className="cards--two__rect"></span>
                          <p>
                            <ul className="cards__list">
                              <li style={{ left: "5px" }}><TfiLinkedin /></li>
                            </ul>
                          </p><br />
                          <p>Sundheep Sambharaju</p><br />
                          <p style={{ lineHeight: "77px" }}>Senior Instructor Game Design</p>
                        </div>
            </div>
          </div>

          <div className="embla__slidet" key={9}>
            <div className="embla__slide__number">
            <div className="cards cards--two">
                          <img src={mentor1} className="img-responsive" alt="Cards" />
                          <span className="cards--two__rect"></span>
                          <p>
                            <ul className="cards__list">
                              <li style={{ left: "5px" }}><TfiLinkedin /></li>
                            </ul>
                          </p><br />
                          <p>Dhruva Mota</p><br />
                          <p style={{ lineHeight: "77px" }}>Mentor Game Design</p>
                        </div>
            </div>
          </div>
        </div>
      </div>

      <div className="embla__controlss">
        <div className="embla__buttonss" style={{top: "45%"}}>
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>

        
      </div>
    </div>
  )
}

export default EmblaCarouselMentors
