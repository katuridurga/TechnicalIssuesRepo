import React, { useCallback, useEffect, useRef } from 'react'
import { useSelector, shallowEqual } from "react-redux"
import useEmblaCarousel from 'embla-carousel-react'
import {
  NextButton,
  PrevButton,
  usePrevNextButtons
} from './EmblaCarouselArrowButtonsBuzz';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { useDotButton } from './EmblaCarouselDotButtonBuzz'
import b2 from "../assets/img/board_game.webp";
import b3 from "../assets/img/global.webp";
import b4 from "../assets/img/awards/Purple.webp";
import b5 from "../assets/img/awards/session2.webp";
import b6 from "../assets/img/awards/arvr.webp";
import bui1 from "../assets/img/ts24.webp";
import b8 from "../assets/img/awards/Nazara.webp";
import b9 from "../assets/img/awards/newgdc.webp";
import awardtwo from "../assets/img/PR6.webp"
import bui2 from "../assets/img/te21.webp"
import bui3 from "../assets/img/IGDC2023.webp"
import bui4 from "../assets/img/IGDC2022.webp"
import bui5 from "../assets/img/ga21.webp";
import bui6 from "../assets/img/eta24.webp";
import bui7 from "../assets/img/esa24.webp";
import bui8 from "../assets/img/BSPsIGDC.webp";
import thumbnail from "../assets/img/thumbnail.webp";
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

  // const setTweenNodes = useCallback((emblaApi) => {
  //   tweenNodes.current = emblaApi.slideNodes().map((slideNode) => {
  //     return slideNode.querySelector('.embla__parallax__layerb')
  //   })
  // }, [])

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

        const translate = diffToTarget * (-1 * tweenFactor.current) * 100
        const tweenNode = tweenNodes.current[slideIndex]
        tweenNode.style.transform = `translateX(${translate}%)`
      })
    })
  }, [])

  // useEffect(() => {
  //   if (!emblaApi) return

  //   setTweenNodes(emblaApi)
  //   setTweenFactor(emblaApi)
  //   tweenParallax(emblaApi)

  //   emblaApi
  //     .on('reInit', setTweenNodes)
  //     .on('reInit', setTweenFactor)
  //     .on('reInit', tweenParallax)
  //     .on('scroll', tweenParallax)
  //     .on('slideFocus', tweenParallax)
  // }, [emblaApi, setTweenFactor, setTweenNodes, tweenParallax])
  const isMobileState = useSelector(
    state => state.mainReducer.isMobile,
    shallowEqual
  );
  return (
    <div className="emblab">
      <div className="embla__viewportb" ref={emblaRef}>
        <div className="embla__containerb">

          <div className="embla__slideb" key={1}>
            <div className="embla__parallaxb">
              <div className="embla__parallax__layerb">
                <LazyLoadImage effect="blur"
                  className="embla__slide__imgb embla__parallax__imgb"
                  src={b4}
                  placeholderSrc={thumbnail}
                  alt="purple"
                />
                <div className="buzzdivh">
                  <p>Purple Talk</p>
                </div>

              </div>
            </div>
          </div>

          <div className="embla__slideb" key={2}>
            <div className="embla__parallaxb">
              <div className="embla__parallax__layerb">
                <LazyLoadImage effect="blur"
                  className="embla__slide__imgb embla__parallax__imgb"
                  src={b2}
                  placeholderSrc={thumbnail}
                  alt="Your alt text"
                />
                <div className="buzzdivh">
                  <p>Board Game Workshop</p>
                </div>
              </div>
            </div>
          </div>

          <div className="embla__slideb" key={3}>
            <div className="embla__parallaxb">
              <div className="embla__parallax__layerb">
                <LazyLoadImage effect="blur"
                  className="embla__slide__imgb embla__parallax__imgb"
                  src={b3}
                  placeholderSrc={thumbnail}
                  alt="Your alt text"
                />
                <div className="buzzdivh">
                  <p>Global Game Jam </p>
                </div>
              </div>
            </div>
          </div>

          <div className="embla__slideb" key={4}>
            <div className="embla__parallaxb">
              <div className="embla__parallax__layerb">
                <LazyLoadImage effect="blur"
                  className="embla__slide__imgb embla__parallax__imgb"
                  src={b5}
                  placeholderSrc={thumbnail}
                  alt="session"
                />
                <div className="buzzdivh">
                  <p>Interactive sessions</p>
                </div>
              </div>
            </div>
          </div>

          <div className="embla__slideb" key={5}>
            <div className="embla__parallaxb">
              <div className="embla__parallax__layerb">
                <LazyLoadImage effect="blur"
                  className="embla__slide__imgb embla__parallax__imgb"
                  src={b6}
                  placeholderSrc={thumbnail}
                  alt="Your alt text"
                />
                <div className="buzzdivh">
                  <p>AR VR Workshop</p>
                </div>
              </div>
            </div>
          </div>

          <div className="embla__slideb" key={6}>
            <div className="embla__parallaxb">
              <div className="embla__parallax__layerb">
                <LazyLoadImage effect="blur"
                  className="embla__slide__imgb embla__parallax__imgb"
                  src={awardtwo}
                  placeholderSrc={thumbnail}
                  alt="Your alt text"
                />
                <div className="buzzdivh">
                  <p>Turn your passion for gaming into a rewarding career </p>
                </div>
              </div>
            </div>
          </div>
          <div className="embla__slideb" key={7}>
            <div className="embla__parallaxb">
              <div className="embla__parallax__layerb">
                <LazyLoadImage effect="blur"
                  className="embla__slide__imgb embla__parallax__imgb"
                  src={b8}
                  placeholderSrc={thumbnail}
                  alt="Your alt text"
                />
                <div className="buzzdivh">
                  <p>Nazara</p>
                </div>
              </div>
            </div>
          </div>
          <div className="embla__slideb" key={8}>
            <div className="embla__parallaxb">
              <div className="embla__parallax__layerb">
                <LazyLoadImage effect="blur"
                  className="embla__slide__imgb embla__parallax__imgb"
                  src={b9}
                  placeholderSrc={thumbnail}
                  alt="Your alt text"
                />
                <div className="buzzdivh">
                  <p>IGDC </p>
                </div>
              </div>
            </div>
          </div>
          <div className="embla__slideb" key={9}>
            <div className="embla__parallaxb">
              <div className="embla__parallax__layerb">
                <LazyLoadImage effect="blur"
                  className="embla__slide__imgb embla__parallax__imgb"
                  src={bui2}
                  placeholderSrc={thumbnail}
                  alt="Your alt text"
                  style={{ objectPosition: "center" }}
                />
                <div className="buzzdivh">
                  <p>Times Education E-paper Article 2024
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="embla__slideb" key={10}>
            <div className="embla__parallaxb">
              <div className="embla__parallax__layerb">
                <LazyLoadImage effect="blur"
                  className="embla__slide__imgb embla__parallax__imgb"
                  src={bui1}
                  placeholderSrc={thumbnail}
                  alt="Your alt text"
                  style={{ objectPosition: "top" }}
                />
                <div className="buzzdivh">
                  <p>Times Excellence Awards 2021</p>
                </div>
              </div>
            </div>
          </div>
          <div className="embla__slideb" key={11}>
            <div className="embla__parallaxb">
              <div className="embla__parallax__layerb">
                <LazyLoadImage effect="blur"
                  className="embla__slide__imgb embla__parallax__imgb"
                  src={bui3}
                  placeholderSrc={thumbnail}
                  alt="Your alt text"
                  style={{ objectPosition: "top" }}
                />
                <div className="buzzdivh">
                  <p>IGDC 2023</p>
                </div>
              </div>
            </div>
          </div>
          <div className="embla__slideb" key={12}>
            <div className="embla__parallaxb">
              <div className="embla__parallax__layerb">
                <LazyLoadImage effect="blur"
                  className="embla__slide__imgb embla__parallax__imgb"
                  src={bui4}
                  placeholderSrc={thumbnail}
                  alt="Your alt text"
                />
                <div className="buzzdivh">
                  <p>IGDC 2022</p>
                </div>
              </div>
            </div>
          </div>
          <div className="embla__slideb" key={13}>
            <div className="embla__parallaxb">
              <div className="embla__parallax__layerb">
                <LazyLoadImage effect="blur"
                  className="embla__slide__imgb embla__parallax__imgb"
                  src={bui5}
                  placeholderSrc={thumbnail}
                  alt="Your alt text"
                  style={{ objectPosition: "top" }}
                />
                <div className="buzzdivh">
                  <p>GAME Awards 2021</p>
                </div>
              </div>
            </div>
          </div>
          <div className="embla__slideb" key={131}>
            <div className="embla__parallaxb">
              <div className="embla__parallax__layerb">
                <LazyLoadImage effect="blur"
                  className="embla__slide__imgb embla__parallax__imgb"
                  src={bui6}
                  placeholderSrc={thumbnail}
                  alt="Your alt text"
                  style={{ objectPosition: "top", objectFit: isMobileState ? "contain" : "none" }}

                />
                <div className="buzzdivh">
                  <p>ET achievers 2025</p>
                </div>
              </div>
            </div>
          </div>
          <div className="embla__slideb" key={132}>
            <div className="embla__parallaxb">
              <div className="embla__parallax__layerb">
                <LazyLoadImage effect="blur"
                  className="embla__slide__imgb embla__parallax__imgb"
                  src={bui7}
                  placeholderSrc={thumbnail}
                  alt="Your alt text"
                  style={{ objectPosition: "top" }}
                />
                <div className="buzzdivh">
                  <p>EduSpark Awards 2023</p>
                </div>
              </div>
            </div>
          </div>
          <div className="embla__slideb" key={133}>
            <div className="embla__parallaxb">
              <div className="embla__parallax__layerb">
                <LazyLoadImage effect="blur"
                  className="embla__slide__imgb embla__parallax__imgb"
                  src={bui8}
                  placeholderSrc={thumbnail}
                  alt="Your alt text"
                  style={{ objectPosition: "top" }}
                />
                <div className="buzzdivh">
                  <p>BSP Students at IGDC</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="embla__controlsb">
        <div className="embla__buttonsb">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>


      </div>
    </div>
  )
}

export default EmblaCarousel
