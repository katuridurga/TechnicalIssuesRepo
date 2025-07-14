import React, { useCallback, useEffect, useRef } from 'react'
import { useSelector, shallowEqual } from "react-redux";
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

  const isMobileState = useSelector(
    state => state.mainReducer.isMobile,
    shallowEqual
  );
  return (
    <div className="embla3" style={{ maxWidth: isMobileState ? '100%' : '100%' }}>
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">

          <div className="embla__slidetL" key={14}>
            <div className="embla__slide__number">
              <div className="testimonial-slide w-slide">
                <div className="testimonial-columns">
                  <div className="testimonial-content-wrap">
                    <div className="testimonial-content-block lefthd">
                      <div className='left lefth'>
                        <div className="tnameh"><img src={shubham} width="300" height="300" className="testimonial-imageh" alt="subham" /></div></div>

                      <div className='right'>
                        <div className="tcontenth">

                          <p className="testimonial-paragraphs">"My experience at Backstage Pass has been great. During my PG Diploma course, I learned under the guidance of the finest out there in the industry. There were challenges in everyday tasks that made my mind think of overcoming them by seeing them with a new perspective. All this has been possible due to the intensive work with hands-on experience in every aspect that was introduced. The course, my instructors, and in all, Backstage Pass has fully prepared me for the industry. Thank you for this wonderful opportunity."     <h4 className="author-names">Keshav Sharma


                          </h4>
                            <h6 className='author-designations'>Unity Programmer, Gamitronics



                            </h6></p>

                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>


          <div className="embla__slidetL" key={10}>
            <div className="embla__slide__number">
              <div className="testimonial-slide w-slide">
                <div className="testimonial-columns">

                  <div className="testimonial-content-wrap">
                    <div className="testimonial-content-block lefthd">
                      <div className='left lefth'>
                        <div className="tnameh"><img src={jithin} width="300" height="300" className="testimonial-imageh" alt="jithin" /></div></div>
                      <div className='right'>
                        <div className='right'>
                          <div className="tcontenth">

                            <p className="testimonial-paragraphs">"Backstage Pass brings the like-minded under a single roof. Our courses related to game development & game design were custom- tailored to meet the requirements of the game industry and I feel it is the right place to start for a successful career in the game industry."        <h4 className="author-names">Jithin Peter</h4>
                              <h6 className='author-designations'>Sr. Game Programmer, Sumo Video Games, Bangalore

                              </h6></p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="embla__slidetL" key={12}>
            <div className="embla__slide__number">
              <div className="testimonial-slide w-slide">
                <div className="testimonial-columns">

                  <div className="testimonial-content-wrap">
                    <div className="testimonial-content-block lefthd">
                      <div className='left lefth'>
                        <div className="tnameh"><img src={anand} width="300" height="300" className="testimonial-imageh" alt="anand" /></div></div>

                      <div className='right'>
                        <div className="tcontenth">

                          <p className="testimonial-paragraphs">"One of the best aspects of Backstage Pass is that it gives you the option to interact with a lot of individuals who have a strong interest in game development and the freedom to work together with students from other streams, such as design or art, to create incredible outcomes." <h4 className="author-names">Anand Dhavle
                          </h4>
                            <h6 className='author-designation'>Gameplay Programmer, Tarsier Studios, Sweden

                            </h6></p>

                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="embla__slidetL" key={13}>
            <div className="embla__slide__number">
              <div className="testimonial-slide w-slide">
                <div className="testimonial-columns">

                  <div className="testimonial-content-wrap">
                    <div className="testimonial-content-block lefthd">
                      <div className='left lefth'>
                        <div className="tnameh"><img src={piyush} width="300" height="300" className="testimonial-imageh" alt="piyush" /></div></div>

                      <div className='right'>
                        <div className="tcontenth">

                          <p className="testimonial-paragraphs">"Backstage Pass with the support from their highly experienced faculties, gave me the opportunity of collaborating with an actual multidisciplinary game development project. From stages of concept and game design through production, every lesson taught was worth it." <h4 className="author-names">Piyush Sain
                          </h4>
                            <h6 className='author-designations'>2D Artist, Ubisoft, Pune

                            </h6></p>

                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="embla__slidetL" key={11}>
            <div className="embla__slide__number">
              <div className="testimonial-slide w-slide">
                <div className="testimonial-columns">

                  <div className="testimonial-content-wrap">
                    <div className="testimonial-content-block lefthd">
                      <div className='left lefth'>
                        <div className="tnameh"><img src={sushil} width="300" height="300" className="testimonial-imageh" alt="sushil" /></div></div>

                      <div className='right'>
                        <div className="tcontenth">

                          <p className="testimonial-paragraphs">"From being a student in the first batch of Backstage Pass to being a mentor later, I have seen BSP grow from a small ambitious game development & game design institute to a full-fledged gaming college. With the game industry's continued growth and future potential, I'm certain they're on the right track to impart the right knowledge and skills to produce competent professionals." <h4 className="author-names">Sushil George
                          </h4>
                            <h6 className='author-designations'>Sr. Game Developer, Product Madness, London, UK

                            </h6></p>

                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>


          <div className="embla__slidetL" key={9}>
            <div className="embla__slide__number">
              <div className="testimonial-slide w-slide">
                <div className="testimonial-columns">
                  <div className="testimonial-content-wrap">
                    <div className="testimonial-content-block lefthd">
                      <div className='left lefth'>
                        <div className="tnameh"><img src={asar} width="300" height="300" className="testimonial-imageh" alt="Asar" /></div></div>


                      <div className='right'>
                        <div className="tcontenth">

                          <p className="testimonial-paragraphs">"While doing my Graduation at Backstage Pass, I started my own Game studio Seven Summits with the help of this gaming college. We learned concepts related to Game Art, Game Design, Level design, etc. from Industry Experts. In order to mark your footprint in the game industry, Backstage Pass is the best place to start." <h4 className="author-names">Asar Dhandala

                          </h4>
                            <h6 className='author-designations'>Founder/ Game Designer/ Producer, Seven Summits

                            </h6></p>

                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>


          <div className="embla__slidetL" key={5}>
            <div className="embla__slide__number">
              <div className="testimonial-slide w-slide">
                <div className="testimonial-columns">
                  <div className="testimonial-content-wrap">
                    <div className="testimonial-content-block lefthd">
                      <div className='left lefth'>
                        <div className="tnameh"><img src={satish} width="300" height="300" className="testimonial-imageh" alt="satish" /></div></div>

                      <div className='right'>
                        <div className="tcontenth">

                          <p className="testimonial-paragraphs">"Backstage Pass really helped me in my transition to become a Game Developer. It helped me a lot with the concepts of game engines, game programming concepts, game design etc. by industry experts."  <h4 className="author-names">Satish Chandra</h4>
                            <h6 className='author-designations'>CEO & Founder, TeaPot Games</h6></p>

                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="embla__slidetL" key={6}>
            <div className="embla__slide__number">
              <div className="testimonial-slide w-slide">
                <div className="testimonial-columns">
                  <div className="testimonial-content-wrap">
                    <div className="testimonial-content-block lefthd">
                      <div className='left lefth'>
                        <div className="tnameh"><img src={harshni} width="300" height="300" className="testimonial-imageh" alt="harshni" /></div></div>


                      <div className='right'>
                        <div className="tcontenth">

                          <p className="testimonial-paragraphs">"Being a girl in this industry was challenging but Backstage Pass helped me grow into it with highly experienced mentors and with its contacts in the industry, helped to build a portfolio that suits the industry requirements." <h4 className="author-names">Harshini Isvi</h4>
                            <h6 className='author-designations'>Concept Artist, Ivy Comptech, Hyderabad</h6></p>

                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <div className="embla__slidetL" key={7}>
            <div className="embla__slide__number">
              <div className="testimonial-slide w-slide">
                <div className="testimonial-columns">
                  <div className="testimonial-content-wrap">
                  <div className="testimonial-content-block lefthd">
                  <div className='left lefth'>
                      <div className="tnameh"><img src={anshul} width="300" height="300" className="testimonial-imageh" alt="anshul" /></div></div>
                     

                      <div className='right'>
                      <div className="tcontenth">
                                        
                        <p className="testimonial-paragraphs">"Backstage Pass is the first of its kind of gaming college in India with some great industry experts. I had the joy of learning from the people who work in the game industry and was taught about the working of the game industry that helped me a lot while working at EA Sports. So, Backstage Pass was a life-changing experience."       <h4 className="author-names">Anshul Soni
                      </h4>
                      <h6 className='author-designations'>Software Engineer, EA Sports, Seattle, USA

</h6></p>
                        
                      </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}

        </div>
      </div>

      <div className="embla__controlssL">
        <div className="embla__buttonss">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>


      </div>
    </div>
  )
}

export default EmblaCarousel
