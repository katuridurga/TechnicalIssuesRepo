import React, { useCallback, useEffect, useRef, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import satish from '../assets/img/test/SatishChandra.webp'
import harshni from '../assets/img/test/HarshiniIsvi.webp'
import asar from '../assets/img/test/Asar.webp'
import jithin from '../assets/img/test/JithinPeter.webp'
import sushil from '../assets/img/test/SushilGeorge.webp'
import anand from '../assets/img/test/AnandDhwale.webp'
import piyush from '../assets/img/test/PiyushSain.webp'
import shubham from '../assets/img/test/ShubhamNandwani.webp'

import {
  NextButton,
  PrevButton,
  usePrevNextButtons
} from './EmblaCarouselArrowButtonsTest'
import { useDotButton } from './EmblaCarouselDotButton'

const TWEEN_FACTOR_BASE = 0.00

const numberWithinRange = (number, min, max) =>
  Math.min(Math.max(number, min), max)

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


  const [showMore, setShowMore] = useState(false);

  const content = `"My experience at Backstage Pass has been great. During my PG Diploma course, I learned under the guidance of the finest out there in the industry. There were challenges in everyday tasks that made my mind think of overcoming them by seeing them with a new perspective. All this has been possible due to the intensive work with hands-on experience in every aspect that was introduced. The course, my instructors, and in all, Backstage Pass has fully prepared me for the industry. Thank you for this wonderful opportunity."`;

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };


  const [showMore1, setShowMore1] = useState(false);

  const content1 = `"From being a student in the first batch of Backstage Pass to being a mentor later, I have seen BSP grow from a small ambitious game development & game design institute to a full-fledged gaming college. With the game industry's continued growth and future potential, I'm certain they're on the right track to impart the right knowledge and skills to produce competent professionals."`;

  const toggleShowMore1 = () => {
    setShowMore1(!showMore1);
  };

  return (
    <div className="embla3">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {window.location.pathname === "/landingpage/certified-diploma-unity-game-development/" || window.location.pathname === "/landingpage/certified-diploma-unreal-game-development/" || window.location.pathname === "/landingpage/certified-diploma-game-design-with-unreal-blueprints/" || window.location.pathname === "/landingpage/certified-diploma-3d-hard-surface-modeling-texturing/" ? null :
            <div className="embla__slidet" key={14}>
              <div className="embla__slide__number">
                <div className="testimonial-slide w-slides">
                  <div className="testimonial-columns">
                    <div className="testimonial-content-wrap">
                      <div className="testimonial-content-block">
                        <div className="tname"><img src={shubham} width="150" height="150" className="testimonial-image" alt="subham" /></div>


                        <div className="tcontent">
                          <h4 className="author-name">Keshav Sharma


                          </h4>
                          <h6 className='author-designation'>Unity Programmer, <br />Gamitronics



                          </h6>
                          <p className="testimonial-paragraph">
                            {showMore ? content : `${content.substring(0, 300)}...`}

                          </p>

                          <button onClick={toggleShowMore}>
                            {showMore ? 'Show Less' : 'Show More'}
                          </button>

                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>}
          <div className="embla__slidet" key={11}>
            <div className="embla__slide__number">
              <div className="testimonial-slide w-slides">
                <div className="testimonial-columns">

                  <div className="testimonial-content-wrap">
                    <div className="testimonial-content-block">
                      <div className="tname"><img src={sushil} width="150" height="150" className="testimonial-image" alt="sushil" /></div>

                      <div className="tcontent">
                        <h4 className="author-name">Sushil George
                        </h4>
                        <h6 className='author-designation'>Sr. Game Developer, Product Madness, London, UK

                        </h6>
                        <p className="testimonial-paragraph">
                          {showMore1 ? content1 : `${content1.substring(0, 270)}...`}

                        </p>

                        <button onClick={toggleShowMore1}>
                          {showMore1 ? 'Show Less' : 'Show More'}
                        </button>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="embla__slidet" key={10}>
            <div className="embla__slide__number">
              <div className="testimonial-slide w-slides">
                <div className="testimonial-columns">

                  <div className="testimonial-content-wrap">
                    <div className="testimonial-content-block">
                      <div className="tname"><img src={jithin} width="150" height="150" className="testimonial-image" alt="jithin" /></div>

                      <div className="tcontent">
                        <h4 className="author-name">Jithin Peter</h4>
                        <h6 className='author-designation'>Sr. Game Programmer, <br />Sumo Video Games, Bangalore

                        </h6>
                        <p className="testimonial-paragraph">"Backstage Pass brings the like-minded under a single roof. Our courses related to game development & game design were custom- tailored to meet the requirements of the game industry and I feel it is the right place to start for a successful career in the game industry."</p>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="embla__slidet" key={12}>
            <div className="embla__slide__number">
              <div className="testimonial-slide w-slides">
                <div className="testimonial-columns">

                  <div className="testimonial-content-wrap">
                    <div className="testimonial-content-block">
                      <div className="tname"><img src={anand} width="150" height="150" className="testimonial-image" alt="anand" /></div>

                      <div className="tcontent">
                        <h4 className="author-name">Anand Dhavle
                        </h4>
                        <h6 className='author-designation'>Gameplay Programmer, <br />Tarsier Studios, Sweden

                        </h6>
                        <p className="testimonial-paragraph">"One of the best aspects of Backstage Pass is that it gives you the option to interact with a lot of individuals who have a strong interest in game development and the freedom to work together with students from other streams, such as design or art, to create incredible outcomes."</p>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {window.location.pathname === "/landingpage/certified-diploma-unity-game-development/" || window.location.pathname === "/landingpage/certified-diploma-unreal-game-development/" || window.location.pathname === "/landingpage/certified-diploma-game-design-with-unreal-blueprints/" || window.location.pathname === "/landingpage/certified-diploma-3d-hard-surface-modeling-texturing/" ? null :
            <div className="embla__slidet" key={13}>
              <div className="embla__slide__number">
                <div className="testimonial-slide w-slides">
                  <div className="testimonial-columns">

                    <div className="testimonial-content-wrap">
                      <div className="testimonial-content-block">
                        <div className="tname"><img src={piyush} width="150" height="150" className="testimonial-image" alt="piyush" /></div>

                        <div className="tcontent">
                          <h4 className="author-name">Piyush Sain
                          </h4>
                          <h6 className='author-designation'>2D Artist, Ubisoft, <br />Pune

                          </h6>
                          <p className="testimonial-paragraph">"Backstage Pass with the support from their highly experienced faculties, gave me the opportunity of collaborating with an actual multidisciplinary game development project. From stages of concept and game design through production, every lesson taught was worth it."</p>

                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>}


          {window.location.pathname === "/landingpage/certified-diploma-unity-game-development/" || window.location.pathname === "/landingpage/certified-diploma-unreal-game-development/" || window.location.pathname === "/landingpage/certified-diploma-game-design-with-unreal-blueprints/" || window.location.pathname === "/landingpage/certified-diploma-3d-hard-surface-modeling-texturing/" ? null :
            <div className="embla__slidet" key={9}>
              <div className="embla__slide__number">
                <div className="testimonial-slide w-slides">
                  <div className="testimonial-columns">
                    <div className="testimonial-content-wrap">
                      <div className="testimonial-content-block">
                        <div className="tname"><img src={asar} width="150" height="150" className="testimonial-image" alt="Asar" /></div>


                        <div className="tcontent">
                          <h4 className="author-name">Asar Dhandala

                          </h4>
                          <h6 className='author-designation'>Founder/ Game Designer/ Producer, Seven Summits

                          </h6>
                          <p className="testimonial-paragraph">"While doing my Graduation at Backstage Pass, I started my own Game studio Seven Summits with the help of this gaming college. We learned concepts related to Game Art, Game Design, Level design, etc. from Industry Experts. In order to mark your footprint in the game industry, Backstage Pass is the best place to start."</p>

                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>}

          {window.location.pathname === "/landingpage/certified-diploma-unity-game-development/" || window.location.pathname === "/landingpage/certified-diploma-unreal-game-development/" || window.location.pathname === "/landingpage/certified-diploma-game-design-with-unreal-blueprints/" || window.location.pathname === "/landingpage/certified-diploma-3d-hard-surface-modeling-texturing/" ? null :
            <div className="embla__slidet" key={5}>
              <div className="embla__slide__number">
                <div className="testimonial-slide w-slides">
                  <div className="testimonial-columns">
                    <div className="testimonial-content-wrap">
                      <div className="testimonial-content-block">
                        <div className="tname"><img src={satish} width="150" height="150" className="testimonial-image" alt="satish" /></div>


                        <div className="tcontent">
                          <h4 className="author-name">Satish Chandra</h4>
                          <h6 className='author-designation'>CEO & Founder, <br />TeaPot Games</h6>
                          <p className="testimonial-paragraph">"Backstage Pass really helped me in my transition to become a Game Developer. It helped me a lot with the concepts of game engines, game programming concepts, game design etc. by industry experts."</p>

                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>}
          {window.location.pathname === "/landingpage/certified-diploma-unity-game-development/" || window.location.pathname === "/landingpage/certified-diploma-unreal-game-development/" || window.location.pathname === "/landingpage/certified-diploma-game-design-with-unreal-blueprints/" || window.location.pathname === "/landingpage/certified-diploma-3d-hard-surface-modeling-texturing/" ? null :
            <div className="embla__slidet" key={6}>
              <div className="embla__slide__number">
                <div className="testimonial-slide w-slides">
                  <div className="testimonial-columns">
                    <div className="testimonial-content-wrap">
                      <div className="testimonial-content-block">
                        <div className="tname"><img src={harshni} width="150" height="150" className="testimonial-image" alt="harshni" /></div>


                        <div className="tcontent">
                          <h4 className="author-name">Harshini Isvi</h4>
                          <h6 className='author-designation'>Concept Artist, Ivy Comptech, <br />Hyderabad</h6>
                          <p className="testimonial-paragraph">"Being a girl in this industry was challenging but Backstage Pass helped me grow into it with highly experienced mentors and with its contacts in the industry, helped to build a portfolio that suits the industry requirements."</p>

                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>}
          {/* 
          <div className="embla__slidet" key={7}>
            <div className="embla__slide__number">
              <div className="testimonial-slide w-slides">
                <div className="testimonial-columns">
                  <div className="testimonial-content-wrap">
                    <div className="testimonial-content-block">
                      <div className="tname"><img src={anshul} width="150" height="150" className="testimonial-image" alt="anshul" /></div>


                      <div className="tcontent">
                        <h4 className="author-name">Anshul Soni
                        </h4>
                        <h6 className='author-designation'>Software Engineer, EA Sports, <br/>Seattle, USA

                        </h6>
                        <p className="testimonial-paragraph">"Backstage Pass is the first of its kind of gaming college in India with some great industry experts. I had the joy of learning from the people who work in the game industry and was taught about the working of the game industry that helped me a lot while working at EA Sports. So, Backstage Pass was a life-changing experience."</p>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}

        </div>
      </div>

      <div className="embla__controlss">
        <div className="embla__buttonssLL">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} style={{}} />
        </div>


      </div>
    </div>
  )
}

export default EmblaCarousel
