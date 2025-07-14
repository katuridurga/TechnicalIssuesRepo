import React, { useCallback, useEffect, useRef } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import rajath from '../assets/img/test/rajatojha.webp'
import sridar from '../assets/img/test/.webp'
import navin from '../assets/img/test/navinmandal.webp'
import kash from '../assets/img/test/kashyapreddy.webp'
import satish from '../assets/img/test/SatishChandra.webp'
import harshni from '../assets/img/test/HarshiniIsvi.webp'
import asar from '../assets/img/test/Asar.webp'
import anshul from '../assets/img/test/AnshulSoni.webp'
import jithin from '../assets/img/test/JithinPeter.webp'
import sushil from '../assets/img/test/SushilGeorge.webp'
import anand from '../assets/img/test/AnandDhwale.webp'
import piyush from '../assets/img/test/PiyushSain.webp'
import shubham from '../assets/img/test/ShubhamNandwani.webp'
import kesav from '../assets/img/test/kesav.webp'

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
  const { slides, options } = props
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

  return (
    <div className="embla3">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">

          <div className="embla__slidet tsetm" key={1} data-label="In Progress">
            <div className="embla__slide__number">
              <div className="testimonial-slide w-slide">
                <div className="testimonial-columns">

                  <div className="testimonial-content-wrap">
                    <div className="testimonial-content-block">
                      <div className="tname"><img src={rajath} width="150" height="150" className="testimonial-image" alt="rajath" /></div>
                      <div className="ribbon ribbon-new"><span>Recuiter</span></div>
                      <div className="tcontent">
                      <h4 className="author-name">Rajat Ojha</h4>
                      <h6 className="author-designation">CEO & Co-Founder, Gamitronics</h6>
                      {/* <p style={{ color: "#fff", fontSize: "21px" }}>Recuiter Testimonials</p> */}
                        <p className="testimonial-paragraph">"Backstage Pass has an advantage over other colleges since its students are industry-ready, meaning they are ready to begin their careers immediately after graduation, without additional training or fine-tuning. As far as I know, Backstage Pass is the only college dedicated exclusively to game development and game art & design"</p>
                        
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
       
          <div className="embla__slidet" key={2}>
            <div className="embla__slide__number">
              <div className="testimonial-slide w-slide">
                <div className="testimonial-columns">

                  <div className="testimonial-content-wrap">
                    <div className="testimonial-content-block">
                      <div className="tname"><img src={sridar} width="150" height="150" className="testimonial-image" alt="sridar" /></div>
                      <div className="ribbon ribbon-new"><span>Recuiter</span></div>

                      <div className="ribbon ribbon-new"><span>Recuiter</span></div>
                      <div className="tcontent">
                      <h4 className="author-name">Sridhar</h4>
                      <h6 className='author-designation'>CEO, Purple Talk</h6>
                        <p className="testimonial-paragraph">"We have been recruiting from Backstage Pass for a couple of years now. They have a certain quality and their courses are amazing! We don't have to wait until the end of the academic year for us to be able to hire their students. Instead, we can hire them right in the middle because they are excellent in what they do. We definitely recommend Backstage Pass."</p>
                        
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="embla__slidet" key={10}>
            <div className="embla__slide__number">
              <div className="testimonial-slide w-slide">
                <div className="testimonial-columns">

                  <div className="testimonial-content-wrap">
                    <div className="testimonial-content-block">
                      <div className="tname"><img src={jithin} width="150" height="150" className="testimonial-image" alt="jithin" /></div>
                      <div className="ribbon1 ribbon-new1"><span>Student</span></div>
                      <div className="tcontent">
                      <h4 className="author-name">Jithin Peter</h4>
                      <h6 className='author-designation'>Sr. Game Programmer, Sumo Video Games, Bangalore

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
              <div className="testimonial-slide w-slide">
                <div className="testimonial-columns">

                  <div className="testimonial-content-wrap">
                    <div className="testimonial-content-block">
                      <div className="tname"><img src={anand} width="150" height="150" className="testimonial-image" alt="anand" /></div>
                      <div className="ribbon1 ribbon-new1"><span>Student</span></div>
                      <div className="tcontent">
                      <h4 className="author-name">Anand Dhavle
                      </h4>
                      <h6 className='author-designation'>Gameplay Programmer, Tarsier Studios, Sweden

</h6>
                        <p className="testimonial-paragraph">"One of the best aspects of Backstage Pass is that it gives you the option to interact with a lot of individuals who have a strong interest in game development and the freedom to work together with students from other streams, such as design or art, to create incredible outcomes."</p>
                        
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="embla__slidet" key={13}>
            <div className="embla__slide__number">
              <div className="testimonial-slide w-slide">
                <div className="testimonial-columns">

                  <div className="testimonial-content-wrap">
                    <div className="testimonial-content-block">
                      <div className="tname"><img src={piyush} width="150" height="150" className="testimonial-image" alt="piyush" /></div>
                      <div className="ribbon1 ribbon-new1"><span>Student</span></div>
                      <div className="tcontent">
                      <h4 className="author-name">Piyush Sain
                      </h4>
                      <h6 className='author-designation'>2D Artist, Ubisoft, Pune

</h6>
                        <p className="testimonial-paragraph">"Backstage Pass with the support from their highly experienced faculties, gave me the opportunity of collaborating with an actual multidisciplinary game development project. From stages of concept and game design through production, every lesson taught was worth it."</p>
                        
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="embla__slidet" key={11}>
            <div className="embla__slide__number">
              <div className="testimonial-slide w-slide">
                <div className="testimonial-columns">

                  <div className="testimonial-content-wrap">
                    <div className="testimonial-content-block">
                      <div className="tname"><img src={sushil} width="150" height="150" className="testimonial-image" alt="sushil" /></div>
                      <div className="ribbon1 ribbon-new1"><span>Student</span></div>
                      <div className="tcontent">
                      <h4 className="author-name">Sushil George
                      </h4>
                      <h6 className='author-designation'>Sr. Game Developer, Product Madness, London, UK

</h6>
                        <p className="testimonial-paragraph">"From being a student in the first batch of Backstage Pass to being a mentor later, I have seen BSP grow from a small ambitious game development & game design institute to a full-fledged gaming college. With the game industry's continued growth and future potential, I'm certain they're on the right track to impart the right knowledge and skills to produce competent professionals."</p>
                        
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="embla__slidet" key={14}>
            <div className="embla__slide__number">
              <div className="testimonial-slide w-slide">
                <div className="testimonial-columns">
                  <div className="testimonial-content-wrap">
                    <div className="testimonial-content-block">
                      <div className="tname"><img src={shubham} width="150" height="150" className="testimonial-image" alt="subham" /></div>
                      <div className="ribbon1 ribbon-new1"><span>Student</span></div>

                      <div className="tcontent">
                      <h4 className="author-name">Keshav Sharma


                      </h4>
                      <h6 className='author-designation'>Unity Programmer, Gamitronics



</h6>
                        <p className="testimonial-paragraph">"My experience at Backstage Pass has been great. During my PG Diploma course, I learned under the guidance of the finest out there in the industry. There were challenges in everyday tasks that made my mind think of overcoming them by seeing them with a new perspective. All this has been possible due to the intensive work with hands-on experience in every aspect that was introduced. The course, my instructors, and in all, Backstage Pass has fully prepared me for the industry. Thank you for this wonderful opportunity."</p>
                        
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="embla__slidet" key={3}>
            <div className="embla__slide__number">
              <div className="testimonial-slide w-slide">
                <div className="testimonial-columns">

                  <div className="testimonial-content-wrap">
                    <div className="testimonial-content-block">
                      <div className="tname"><img src={navin} width="150" height="150" className="testimonial-image" alt="navin" /></div>
                      <div className="ribbon ribbon-new"><span>Recuiter</span></div>

                      <div className="tcontent">
                      <h4 className="author-name">Navin Mandal</h4>
                      <h6 className='author-designation'>Co-Founder & CTO, Immersive Labz</h6>
                        <p className="testimonial-paragraph">"Innovation and adaptability are crucial for growth in the modern generation. Therefore, we require a creative and determined workforce. Students from Backstage Pass have excelled in both of these areas. We were very impressed with how they questioned the status quo and developed more effective working methods."</p>
                        
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="embla__slidet" key={9}>
            <div className="embla__slide__number">
              <div className="testimonial-slide w-slide">
                <div className="testimonial-columns">
                  <div className="testimonial-content-wrap">
                    <div className="testimonial-content-block">
                      <div className="tname"><img src={asar} width="150" height="150" className="testimonial-image" alt="Asar" /></div>
                      <div className="ribbon1 ribbon-new1"><span>Student</span></div>

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
          </div>
          <div className="embla__slidet" key={4}>
            <div className="embla__slide__number">
              <div className="testimonial-slide w-slide">
                <div className="testimonial-columns">
                  <div className="testimonial-content-wrap">
                    <div className="testimonial-content-block">
                      <div className="tname"><img src={kash} width="150" height="150" className="testimonial-image" alt="kashyap" /></div>
                      <div className="ribbon ribbon-new"><span>Recuiter</span></div>

                      <div className="tcontent">
                      <h4 className="author-name">Kashyap Reddy</h4>
                      <h6 className='author-designation'>Co-Founder, HitWicket</h6>
                        <p className="testimonial-paragraph">"Our front-end lead Arsalan is a graduate from Backstage Pass and it is a pleasure to see how passionate he is about gaming. Whenever we interview a candidate from Backstage Pass, we find something unique that they bring in; their focus, understanding and knowledge about gaming even before they start working in a company."</p>
                        
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="embla__slidet" key={5}>
            <div className="embla__slide__number">
              <div className="testimonial-slide w-slide">
                <div className="testimonial-columns">
                  <div className="testimonial-content-wrap">
                    <div className="testimonial-content-block">
                      <div className="tname"><img src={satish} width="150" height="150" className="testimonial-image" alt="satish" /></div>
                      <div className="ribbon1 ribbon-new1"><span>Student</span></div>

                      <div className="tcontent">
                      <h4 className="author-name">Satish Chandra</h4>
                      <h6 className='author-designation'>CEO & Founder, TeaPot Games</h6>
                        <p className="testimonial-paragraph">"Backstage Pass really helped me in my transition to become a Game Developer. It helped me a lot with the concepts of game engines, game programming concepts, game design etc. by industry experts."</p>
                        
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="embla__slidet" key={6}>
            <div className="embla__slide__number">
              <div className="testimonial-slide w-slide">
                <div className="testimonial-columns">
                  <div className="testimonial-content-wrap">
                    <div className="testimonial-content-block">
                      <div className="tname"><img src={harshni} width="150" height="150" className="testimonial-image" alt="harshni" /></div>
                      <div className="ribbon1 ribbon-new1"><span>Student</span></div>

                      <div className="tcontent">
                      <h4 className="author-name">Harshini Isvi</h4>
                      <h6 className='author-designation'>Concept Artist, Ivy Comptech, Hyderabad</h6>
                        <p className="testimonial-paragraph">"Being a girl in this industry was challenging but Backstage Pass helped me grow into it with highly experienced mentors and with its contacts in the industry, helped to build a portfolio that suits the industry requirements."</p>
                        
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* <div className="embla__slidet" key={7}>
            <div className="embla__slide__number">
              <div className="testimonial-slide w-slide">
                <div className="testimonial-columns">
                  <div className="testimonial-content-wrap">
                    <div className="testimonial-content-block">
                      <div className="tname"><img src={anshul} width="150" height="150" className="testimonial-image" alt="anshul" /></div>
                      <div className="ribbon1 ribbon-new1"><span>Student</span></div>

                      <div className="tcontent">
                      <h4 className="author-name">Anshul Soni
                      </h4>
                      <h6 className='author-designation'>Software Engineer, EA Sports, Seattle, USA

</h6>
                        <p className="testimonial-paragraph">"Backstage Pass is the first of its kind of gaming college in India with some great industry experts. I had the joy of learning from the people who work in the game industry and was taught about the working of the game industry that helped me a lot while working at EA Sports. So, Backstage Pass was a life-changing experience."</p>
                        
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
          {/* <div className="embla__slidet" key={8}>
            <div className="embla__slide__number">
              <div className="testimonial-slide w-slide">
                <div className="testimonial-columns">
                  <div className="testimonial-content-wrap">
                    <div className="testimonial-content-block">
                      <div className="tname"><img src={shubham} width="150" height="150" className="testimonial-image" alt="subham" /></div>
                      <div className="ribbon1 ribbon-new1"><span>Student</span></div>

                      <div className="tcontent">
                      <h4 className="author-name">Shubham Nandwani

                      </h4>
                      <h6 className='author-designation'>Unity Development Intern, Zvky Design Studio

</h6>
                        <p className="testimonial-paragraph">"The experience at Backstage Pass has been splendid. When I first joined Backstage Pass, I was very skeptical about the Institute as it was the new branch in Bengaluru and we were mostly the first batch. I had taken up Game Development Diploma after finishing my BE Degree in Computer Science so coding was not new for me however the course was very thorough as we were taught from the basics of coding, teachers helped me with every single doubt I had. Sadly, our course was distracted by the pandemic however that didn't stop Backstage Pass from letting us move on with course. Our course was completed and the exams were done online, everything went smooth. The placement opportunity at Backstage Pass is excellent as with the help of Backstage Pass I was placed in Zvky Design Studios. I thank Backstage Pass for the best one year of my life."</p>
                        
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
        <div className="embla__buttonss">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>

        {/* <div className="embla__dots">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={'embla__dot'.concat(
                index === selectedIndex ? ' embla__dot--selected' : ''
              )}
            />
          ))}
        </div> */}
      </div>
    </div>
  )
}

export default EmblaCarousel
