import React, { useCallback, useEffect, useRef, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import rajath from '../assets/img/test/rajatojha.webp'
import anshul from '../assets/img/test/AnshulSoni.webp'
import sridar from '../assets/img/test/shridhar.webp'
import navin from '../assets/img/test/navinmandal.webp'
import kash from '../assets/img/test/kashyapreddy.webp'
import asar from '../assets/img/test/Asar.webp'
import jithin from '../assets/img/test/JithinPeter.webp'
import sushil from '../assets/img/test/SushilGeorge.webp'
import anand from '../assets/img/test/AnandDhwale.webp'
import suryashankh from '../assets/img/test/Suryashankha.webp'
import aniket from '../assets/img/test/AniketMukhi.webp'
import joesph from '../assets/img/test/JoesphKalathil.webp'
import srivast from '../assets/img/test/Srivatsan.webp'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import thumbnail from "../assets/img/thumbnail.webp";
import {
  NextButton,
  PrevButton,
  usePrevNextButtons
} from './EmblaCarouselArrowButtonsTest'
//import { useDotButton } from './EmblaCarouselDotButton'

const TWEEN_FACTOR_BASE = 0.00

const numberWithinRange = (number, min, max) =>
  Math.min(Math.max(number, min), max)

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

  const content = `"From being a student in the first batch of Backstage Pass to being a mentor later, I have seen BSP grow from a small ambitious game development & game design institute to a full-fledged gaming college. With the game industry's continued growth and future potential, I'm certain they're on the right track to impart the right knowledge and skills to produce competent professionals."`;

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };







  const [showMore2, setShowMore2] = useState(false);

  const content2 = `"Backstage Pass has an advantage over other colleges since its students are industry-ready, meaning they are ready to begin their careers immediately after graduation, without additional training or fine-tuning. As far as I know, Backstage Pass is the only college dedicated exclusively to game development and game art & design"`;

  const toggleShowMore2 = () => {
    setShowMore2(!showMore2);
  };
  const [showMore3, setShowMore3] = useState(false);

  const content3 = `"We have been recruiting from Backstage Pass for a couple of years now. They have a certain quality and their courses are amazing! We don't have to wait until the end of the academic year for us to be able to hire their students. Instead, we can hire them right in the middle because they are excellent in what they do. We definitely recommend Backstage Pass."`;

  const toggleShowMore3 = () => {
    setShowMore3(!showMore3);
  };
  const [showMore4, setShowMore4] = useState(false);

  const content4 = `"Backstage Pass brings the like-minded under a single roof. Our courses related to game development & game design were custom- tailored to meet the requirements of the game industry and I feel it is the right place to start for a successful career in the game industry."`;

  const toggleShowMore4 = () => {
    setShowMore4(!showMore4);
  };
  const [showMore5, setShowMore5] = useState(false);

  const content5 = `"One of the best aspects of Backstage Pass is that it gives you the option to interact with a lot of individuals who have a strong interest in game development and the freedom to work together with students from other streams, such as design or art, to create incredible outcomes."`;

  const toggleShowMore5 = () => {
    setShowMore5(!showMore5);
  };
  const [showMore6, setShowMore6] = useState(false);

  const content6 = `"Innovation and adaptability are crucial for growth in the modern generation. Therefore, we require a creative and determined workforce. Students from Backstage Pass have excelled in both of these areas. We were very impressed with how they questioned the status quo and developed more effective working methods."`;

  const toggleShowMore6 = () => {
    setShowMore6(!showMore6);
  };
  const [showMore7, setShowMore7] = useState(false);

  const content7 = `"Backstage Pass is the first of its kind of gaming college in India with some great industry experts. I had the joy of learning from the people who work in the game industry and was taught about the working of the game industry that helped me a lot while working at EA Sports. So, Backstage Pass was a life-changing experience."`;

  const toggleShowMore7 = () => {
    setShowMore7(!showMore7);
  };

  const [showMore8, setShowMore8] = useState(false);

  const content8 = `"Our front-end lead Arsalan is a graduate from Backstage Pass and it is a pleasure to see how passionate he is about gaming. Whenever we interview a candidate from Backstage Pass, we find something unique that they bring in; their focus, understanding and knowledge about gaming even before they start working in a company."`;

  const toggleShowMore8 = () => {
    setShowMore8(!showMore8);
  };
  const [showMore9, setShowMore9] = useState(false);

  const content9 = `"While doing my Graduation at Backstage Pass, I started my own Game studio Seven Summits with the help of this gaming college. We learned concepts related to Game Art, Game Design, Level design, etc. from Industry Experts. In order to mark your footprint in the game industry, Backstage Pass is the best place to start."`;

  const toggleShowMore9 = () => {
    setShowMore9(!showMore9);
  };
  const [showMore10, setShowMore10] = useState(false);

  const content10 = `"When I was searching for colleges that offer Game Art and Design courses, Backstage Pass stood out as the best choice. Once I joined, I discovered the vast opportunities within the gaming industry. In just two years, my skills improved by 60%, thanks to the solid foundation provided. I also worked on a game called Infocus, which was recognized at IGDC. The one-on-one mentorship at Backstage Pass played a crucial role in my learning, as it helped identify and refine the specific skills I needed to develop."`;

  const toggleShowMore10 = () => {
    setShowMore10(!showMore10);
  };
  const [showMore11, setShowMore11] = useState(false);

  const content11 = `"My passion for gaming led me to pursue a course at Backstage Pass, and it completely transformed my understanding of game art. I learned how entertainment-focused artwork differs from traditional fine arts and how to approach art in a way that makes it a seamless part of the game world. This insight helped me develop a structured approach to game art, turning creativity into immersive gaming experiences."`;

  const toggleShowMore11 = () => {
    setShowMore11(!showMore11);
  };
  const [showMore12, setShowMore12] = useState(false);

  const content12 = `"Backstage Pass is one of the few colleges in India that offers a game development course with computer science as a core subject and it truly stands out in this category. The mentors were incredibly supportive throughout my journey. After years of playing games, the ability to now create games that millions enjoy is a rewarding experience. Looking back, I can confidently say that my four years at Backstage Pass were well worth the effort."`;

  const toggleShowMore12 = () => {
    setShowMore12(!showMore12);
  };
  const [showMore13, setShowMore13] = useState(false);

  const content13 = `"Backstage Pass was the catalyst that let me do bigger things as it provided me a very strong foundation. It was more than just exams. There is a lot of scope for knowledge sharing and it played a big role in how I was able to get good at my craft."`;

  const toggleShowMore13 = () => {
    setShowMore13(!showMore13);
  };

  return (
    <div className="embla3">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">

          <div className="embla__slidetS tsetm" key={1} data-label="In Progress" style={{ height: "max-content" }}>
            <div className="embla__slide__number">
              <div className="testimonial-slide w-slide">
                <div className="testimonial-columns">

                  <div className="testimonial-content-wrap">
                    <div className="testimonial-content-block">
                      <div className="tname"><LazyLoadImage effect="blur" src={rajath} placeholderSrc={thumbnail} width="150" height="150" className="testimonial-image" alt="rajath" /></div>
                      <div className="ribbon ribbon-new"><span>RECRUITERS</span></div>
                      <div className="tcontent">
                        <p className="author-name">Rajat Ojha</p>
                        <p className="author-designation">CEO & Co-Founder, <br />Gamitronics</p>
                        {/* <p style={{ color: "#fff", fontSize: "21px" }}>Recuiter Testimonials</p> */}
                        <p className="testimonial-paragraph">
                          {showMore2 ? content2 : `${content2.substring(0, 150)}...`}

                        </p>

                        <button onClick={toggleShowMore2}>
                          {showMore2 ? 'Show Less' : 'Show More'}
                        </button>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="embla__slidetS" key={2} style={{ height: "max-content" }}>
            <div className="embla__slide__number">
              <div className="testimonial-slide w-slide">
                <div className="testimonial-columns">

                  <div className="testimonial-content-wrap">
                    <div className="testimonial-content-block">
                      <div className="tname"><LazyLoadImage effect="blur" src={sridar} placeholderSrc={thumbnail} width="150" height="150" className="testimonial-image" alt="sridar" /></div>

                      <div className="ribbon ribbon-new"><span>RECRUITERS</span></div>
                      <div className="tcontent">
                        <p className="author-name">Sridhar</p>
                        <p className='author-designation'>CEO, <br />Purple Talk</p>
                        <p className="testimonial-paragraph">
                          {showMore3 ? content3 : `${content3.substring(0, 150)}...`}

                        </p>

                        <button onClick={toggleShowMore3}>
                          {showMore3 ? 'Show Less' : 'Show More'}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="embla__slidetS" key={3} style={{ height: "max-content" }}>
            <div className="embla__slide__number">
              <div className="testimonial-slide w-slide">
                <div className="testimonial-columns">

                  <div className="testimonial-content-wrap">
                    <div className="testimonial-content-block">
                      <div className="tname"><LazyLoadImage effect="blur" src={navin} placeholderSrc={thumbnail} width="150" height="150" className="testimonial-image" alt="navin" /></div>
                      <div className="ribbon ribbon-new"><span>RECRUITERS</span></div>

                      <div className="tcontent">
                        <p className="author-name">Navin Mandal</p>
                        <p className='author-designation'>Co-Founder & CTO, <br /> Immersive Labz</p>
                        <p className="testimonial-paragraph">
                          {showMore6 ? content6 : `${content6.substring(0, 150)}...`}

                        </p>

                        <button onClick={toggleShowMore6}>
                          {showMore6 ? 'Show Less' : 'Show More'}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="embla__slidetS" key={4} style={{ height: "max-content" }}>
            <div className="embla__slide__number">
              <div className="testimonial-slide w-slide">
                <div className="testimonial-columns">
                  <div className="testimonial-content-wrap">
                    <div className="testimonial-content-block">
                      <div className="tname"><LazyLoadImage effect="blur" src={kash} placeholderSrc={thumbnail} width="150" height="150" className="testimonial-image" alt="kashyap" /></div>
                      <div className="ribbon ribbon-new"><span>RECRUITERS</span></div>

                      <div className="tcontent">
                        <p className="author-name">Kashyap Reddy</p>
                        <p className='author-designation'>Co-Founder, <br /> HitWicket</p>
                        <p className="testimonial-paragraph">
                          {showMore8 ? content8 : `${content8.substring(0, 150)}...`}

                        </p>

                        <button onClick={toggleShowMore8}>
                          {showMore8 ? 'Show Less' : 'Show More'}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="embla__slidetS" key={10} style={{ height: "max-content" }}>
            <div className="embla__slide__number">
              <div className="testimonial-slide w-slide">
                <div className="testimonial-columns">

                  <div className="testimonial-content-wrap">
                    <div className="testimonial-content-block">
                      <div className="tname"><LazyLoadImage effect="blur" src={jithin} placeholderSrc={thumbnail} width="150" height="150" className="testimonial-image" alt="jithin" /></div>
                      <div className="ribbon1 ribbon-new1"><span>ALUMNI</span></div>
                      <div className="tcontent">
                        <p className="author-name">Jithin Peter</p>
                        <p className='author-designation'>Sr. Game Programmer, <br />sumo digital, Bangalore

                        </p>

                        <p className="testimonial-paragraph">
                          {showMore4 ? content4 : `${content4.substring(0, 135)}...`}

                        </p>

                        <button onClick={toggleShowMore4}>
                          {showMore4 ? 'Show Less' : 'Show More'}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="embla__slidetS" key={13} style={{ height: "max-content" }}>
            <div className="embla__slide__number">
              <div className="testimonial-slide w-slide">
                <div className="testimonial-columns">
                  <div className="testimonial-content-wrap">
                    <div className="testimonial-content-block">
                      <div className="tname"><LazyLoadImage effect="blur" src={joesph} placeholderSrc={thumbnail} width="150" height="150" className="testimonial-image" alt="joesph" /></div>
                      <div className="ribbon1 ribbon-new1"><span>ALUMNI</span></div>

                      <div className="tcontent">
                        <p className="author-name">JOSEPH KALATHIL

                        </p>
                        <p className='author-designation'>Gameplay Programmer
                          <br />Hacksaw studios,stockholm, sweden

                        </p>


                        <p className="testimonial-paragraph">
                          {showMore13 ? content13 : `${content13.substring(0, 150)}...`}

                        </p>

                        <button onClick={toggleShowMore13}>
                          {showMore13 ? 'Show Less' : 'Show More'}
                        </button>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="embla__slidetS" key={12} style={{ height: "max-content" }}>
            <div className="embla__slide__number">
              <div className="testimonial-slide w-slide">
                <div className="testimonial-columns">

                  <div className="testimonial-content-wrap">
                    <div className="testimonial-content-block">
                      <div className="tname"><LazyLoadImage effect="blur" src={anand} placeholderSrc={thumbnail} width="150" height="150" className="testimonial-image" alt="anand" /></div>
                      <div className="ribbon1 ribbon-new1"><span>ALUMNI</span></div>
                      <div className="tcontent">
                        <p className="author-name">Anand Dhavle
                        </p>
                        <p className='author-designation'>Gameplay Programmer, <br />Tarsier Studios, Sweden

                        </p>


                        <p className="testimonial-paragraph">
                          {showMore5 ? content5 : `${content5.substring(0, 150)}...`}

                        </p>

                        <button onClick={toggleShowMore5}>
                          {showMore5 ? 'Show Less' : 'Show More'}
                        </button>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="embla__slidetS" key={11} style={{ height: "max-content" }}>
            <div className="embla__slide__number">
              <div className="testimonial-slide w-slide">
                <div className="testimonial-columns">

                  <div className="testimonial-content-wrap">
                    <div className="testimonial-content-block">
                      <div className="tname"><LazyLoadImage effect="blur" src={sushil} placeholderSrc={thumbnail} width="150" height="150" className="testimonial-image" alt="sushil" /></div>
                      <div className="ribbon1 ribbon-new1"><span>ALUMNI</span></div>
                      <div className="tcontent">
                        <p className="author-name">Sushil George
                        </p>
                        <p className='author-designation'>Sr. Game Developer, Product Madness, London, UK

                        </p>
                        <p className="testimonial-paragraph">
                          {showMore ? content : `${content.substring(0, 150)}...`}

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
          </div>
          <div className="embla__slidetS" key={9} style={{ height: "max-content" }}>
            <div className="embla__slide__number">
              <div className="testimonial-slide w-slide">
                <div className="testimonial-columns">
                  <div className="testimonial-content-wrap">
                    <div className="testimonial-content-block">
                      <div className="tname"><LazyLoadImage effect="blur" src={asar} placeholderSrc={thumbnail} width="150" height="150" className="testimonial-image" alt="Asar" /></div>
                      <div className="ribbon1 ribbon-new1"><span>ALUMNI</span></div>

                      <div className="tcontent">
                        <p className="author-name">Asar Dhandala

                        </p>
                        <p className='author-designation'>Founder/ Game Designer/ Producer, Seven Summits

                        </p>
                        <p className="testimonial-paragraph" style={{ width: "150% !important" }}>
                          {showMore9 ? content9 : `${content9.substring(0, 150)}...`}

                        </p>

                        <button onClick={toggleShowMore9}>
                          {showMore9 ? 'Show Less' : 'Show More'}
                        </button>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>






      <div className="embla__slidetS" key={7} style={{ height: "max-content" }}>
            <div className="embla__slide__number">
              <div className="testimonial-slide w-slide">
                <div className="testimonial-columns">
                  <div className="testimonial-content-wrap">
                    <div className="testimonial-content-block">
                      <div className="tname"><LazyLoadImage effect="blur"   src={anshul} width="150" height="150" className="testimonial-image" alt="anshul" /></div>
                      <div className="ribbon1 ribbon-new1"><span>ALUMNI</span></div>

                      <div className="tcontent">
                        <p className="author-name">Anshul Soni
                        </p>
                        <p className='author-designation'>Software Engineer, EA Sports, Seattle, USA

                        </p>
                        <p className="testimonial-paragraph">
                          {showMore7 ? content7 : `${content7.substring(0, 150)}...`}

                        </p>

                        <button onClick={toggleShowMore7}>
                          {showMore7 ? 'Show Less' : 'Show More'}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> 

          <div className="embla__slidetS" key={5} style={{ height: "max-content" }}>
            <div className="embla__slide__number">
              <div className="testimonial-slide w-slide">
                <div className="testimonial-columns">

                  <div className="testimonial-content-wrap">
                    <div className="testimonial-content-block">
                      <div className="tname"><LazyLoadImage effect="blur" src={aniket} placeholderSrc={thumbnail} width="150" height="150" className="testimonial-image" alt="aniket" /></div>
                      <div className="ribbon1 ribbon-new1"><span>Student</span></div>

                      <div className="tcontent">
                        <p className="author-name">Aniket Mukhi</p>
                        <p className='author-designation'>4th-Year Student in <br /> Game Art & Design


                        </p>
                        <p className="testimonial-paragraph">
                          {showMore10 ? content10 : `${content10.substring(0, 150)}...`}

                        </p>

                        <button onClick={toggleShowMore10}>
                          {showMore10 ? 'Show Less' : 'Show More'}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="embla__slidetS" key={6} style={{ height: "max-content" }}>
            <div className="embla__slide__number">
              <div className="testimonial-slide w-slide">
                <div className="testimonial-columns">
                  <div className="testimonial-content-wrap">
                    <div className="testimonial-content-block">
                      <div className="tname"><LazyLoadImage effect="blur" src={suryashankh} placeholderSrc={thumbnail} width="150" height="150" className="testimonial-image" alt="suryashankh" /></div>
                      <div className="ribbon1 ribbon-new1"><span>ALUMNI</span></div>

                      <div className="tcontent">
                        <p className="author-name">Surya Shanka</p>
                        <p className='author-designation'>Concept artist at <br /> Hitwicket


                        </p>
                        <p className="testimonial-paragraph">
                          {showMore11 ? content11 : `${content11.substring(0, 135)}...`}

                        </p>

                        <button onClick={toggleShowMore11}>
                          {showMore11 ? 'Show Less' : 'Show More'}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="embla__slidetS" key={8} style={{ height: "max-content" }}>
            <div className="embla__slide__number">
              <div className="testimonial-slide w-slide">
                <div className="testimonial-columns">
                  <div className="testimonial-content-wrap">
                    <div className="testimonial-content-block">
                      <div className="tname"><LazyLoadImage effect="blur" src={srivast} placeholderSrc={thumbnail} width="150" height="150" className="testimonial-image" alt="srivast" /></div>
                      <div className="ribbon1 ribbon-new1"><span>ALUMNI</span></div>

                      <div className="tcontent">
                        <p className="author-name" style={{ marginBottom: "13px" }}>Srivatsan
                        </p>
                        <p className='author-designation' style={{ marginBottom: "13px", fontSize: "20px" }}>Prativadibhayankara</p>
                        <p className='author-designation'> Senior Unity Developer, Product Madness

                        </p>
                        <p className="testimonial-paragraph">
                          {showMore12 ? content12 : `${content12.substring(0, 135)}....`}

                        </p>

                        <button onClick={toggleShowMore12}>
                          {showMore12 ? 'Show Less' : 'Show More'}
                        </button>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

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
