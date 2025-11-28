import React, { useCallback, useEffect, useRef } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import {
  NextButton,
  PrevButton,
  usePrevNextButtons
} from './EmblaCarouselArrowButtonsInTheMedia'
import awardtwo from "../assets/img/PR6.webp"
import awardthree from "../assets/img/PR3.webp"
import awardone from "../assets/img/PR1.webp"
import awardfive from "../assets/img/PR5.webp"
import awardfour from "../assets/img/PR4.webp"
import { FiArrowRight } from "react-icons/fi";
import awardig from "../assets/img/igdc2024.webp";

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
      return slideNode.querySelector('.embla__parallax__layerbM')
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

  // --- Auto Scroll Left Loop ---
  let autoScrollInterval

  const autoScrollLeft = () => {
    if (!emblaApi) return
    if (emblaApi.canScrollPrev()) {
      emblaApi.scrollPrev()
    } else {
      emblaApi.scrollTo(emblaApi.scrollSnapList().length - 1) // Jump to last slide when at first
    }
  }

  autoScrollInterval = setInterval(autoScrollLeft, 30000000) // scroll every 3 seconds

  // --- Existing Logic ---
  setTweenNodes(emblaApi)
  setTweenFactor(emblaApi)
  tweenParallax(emblaApi)

  emblaApi
    .on('reInit', setTweenNodes)
    .on('reInit', setTweenFactor)
    .on('reInit', tweenParallax)
    .on('scroll', tweenParallax)
    .on('slideFocus', tweenParallax)

  // Cleanup on unmount
  return () => {
    clearInterval(autoScrollInterval)
  }
}, [emblaApi, setTweenFactor, setTweenNodes, tweenParallax])
  
  return (
   <div className="emblabaM">
  <div className="embla__viewportbaM" ref={emblaRef}>
    <div className="embla__containerbaM">

      {/* SLIDE 1 */}
      <div className="embla__slidebaM imgm" key={1}>
        <div className="embla__parallaxbaM">
          <div className="embla__parallax__layerbaM incontent1">

            <div>
              <img className="embla__slide__imgbaM embla__parallax__imgbaM"
                src={awardig}
                alt="Your alt text" />
            </div>

            <div className="incontent">
              <p>Hyderabad-based game developers shine at IGDC</p>

              <a
                className="readmore-btn"
                href="https://www.thehindu.com/sci-tech/technology/at-india-games-developer-conference-2024-three-hyderabad-based-game-developers-shine/article68913734.ece/amp/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Read more <FiArrowRight className="arros" />
              </a>
            </div>

          </div>
        </div>
      </div>

      {/* SLIDE 2 */}
      <div className="embla__slidebaM imgm" key={6}>
        <div className="embla__parallaxbaM">
          <div className="embla__parallax__layerbaM incontent1">

            <div>
              <img className="embla__slide__imgbaM embla__parallax__imgbaM"
                src={awardone}
                alt="Your alt text" />
            </div>

            <div className="incontent">
              <p>Backstage Pass Students Take Home Awards and Accolades at IGDC 2018</p>

              <a
                className="readmore-btn"
                href="https://timesofindia.indiatimes.com/education/news/backstage-pass-students-take-home-awards-and-accolades-at-igdc-2018/articleshow/67140616.cms"
                target="_blank"
                rel="noopener noreferrer"
              >
                Read more <FiArrowRight className="arros" />
              </a>
            </div>

          </div>
        </div>
      </div>

      {/* SLIDE 3 */}
      <div className="embla__slidebaM imgm" key={2}>
        <div className="embla__parallaxbaM">
          <div className="embla__parallax__layerbaM incontent1">

            <div>
              <img className="embla__slide__imgbaM embla__parallax__imgbaM"
                src={awardtwo}
                alt="Your alt text" />
            </div>

            <div className="incontent">
              <p>Turn your passion for gaming into a rewarding career</p>

              <a
                className="readmore-btn"
                href="https://www.thehindu.com/brandhub/turn-your-passion-for-gaming-into-a-rewarding-career/article65665332.ece"
                target="_blank"
                rel="noopener noreferrer"
              >
                Read more <FiArrowRight className="arros" />
              </a>
            </div>

          </div>
        </div>
      </div>

      {/* SLIDE 4 */}
      <div className="embla__slidebaM imgm" key={3}>
        <div className="embla__parallaxbaM">
          <div className="embla__parallax__layerbaM incontent1">

            <div>
              <img className="embla__slide__imgbaM embla__parallax__imgbaM"
                src={awardfour}
                alt="Your alt text" />
            </div>

            <div className="incontent">
              <p>How Backstage Pass Gaming College Prepare Students to Join the Top Game and Technology Companies</p>

              <a
                className="readmore-btn"
                href="https://www.dnaindia.com/education/report-how-backstage-pass-gaming-college-prepare-students-to-join-the-top-game-and-technology-companies-2897946"
                target="_blank"
                rel="noopener noreferrer"
              >
                Read more <FiArrowRight className="arros" />
              </a>
            </div>

          </div>
        </div>
      </div>

      {/* SLIDE 5 */}
      <div className="embla__slidebaM imgm" key={4}>
        <div className="embla__parallaxbaM">
          <div className="embla__parallax__layerbaM incontent1">

            <div>
              <img className="embla__slide__imgbaM embla__parallax__imgbaM"
                src={awardfive}
                alt="Your alt text" />
            </div>

            <div className="incontent">
              <p>This gaming college in India is revolutionising gaming education</p>

              <a
                className="readmore-btn"
                href="https://www.forbesindia.com/article/brand-connect/this-gaming-college-in-india-is-revolutionising-gaming-education/60133/1"
                target="_blank"
                rel="noopener noreferrer"
              >
                Read more <FiArrowRight className="arros" />
              </a>
            </div>

          </div>
        </div>
      </div>

      {/* SLIDE 6 */}
      <div className="embla__slidebaM imgm" key={5}>
        <div className="embla__parallaxbaM">
          <div className="embla__parallax__layerbaM incontent1">

            <div>
              <img className="embla__slide__imgbaM embla__parallax__imgbaM"
                src={awardthree}
                alt="Your alt text" />
            </div>

            <div className="incontent">
              <p>Backstage Pass brings world-class gaming education right to your doorstep</p>

              <a
                className="readmore-btn"
                href="https://yourstory.com/2020/06/backstage-world-class-gaming-education"
                target="_blank"
                rel="noopener noreferrer"
              >
                Read more <FiArrowRight className="arros" />
              </a>
            </div>

          </div>
        </div>
      </div>

    </div>
  </div>

  <div className="embla__controlsbaM">
    <div className="embla__buttonsbaM">
      <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
      <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
    </div>
  </div>
</div>

  )
}

export default EmblaCarousel
