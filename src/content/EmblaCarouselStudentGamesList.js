import React, { useCallback, useEffect, useRef } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { useSelector, shallowEqual, useDispatch } from "react-redux"

import {
  NextButton,
  PrevButton,
  usePrevNextButtons
} from './EmblaCarouselArrowButtonsGames'
import { useDotButton } from './EmblaCarouselDotButtonBuzz' 

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
const isMobileState = useSelector(
    state => state.mainReducer.isMobile,
    shallowEqual
  );
  return (
    <div className="emblaba-2">
      <div className="embla__viewportba-2" ref={emblaRef}>
        <div className="embla__containerba-2">
          
            <div className=".embla__slideba-2 imgp-22" key={1}>
              <div className="embla__parallaxba-2">
                <div className="embla__parallax__layerba-2">
                  <img
                    className="embla__slide__imgba-22 embla__parallax__imgba-2"
                    src={"https://cdn.infobot.org/com.glu.sniperx-header.png"}
                    alt="Your alt text"
                    height={isMobileState ? "220" : "220"} 
              width={isMobileState ? "486" : "525"}
                  />
                  {/* <div className="buzzdiv-2">
                    <h1>Dota Game</h1>
                  </div> */}
                  
                </div>
              </div>
            </div>

            <div className=".embla__slideba imgp-22" key={6}>
              <div className="embla__parallaxba-2">
                <div className="embla__parallax__layerba-2">
                  <img
                    className="embla__slide__imgba-22 embla__parallax__imgba-2"
                    src={"https://images3.alphacoders.com/128/thumb-1920-1283280.jpg"}
                    alt="images3"
                    height={isMobileState ? "220" : "220"} 
                    width={isMobileState ? "486" : "525"}
                  />
                   {/* <div className="buzzdiv-2">
                    <h1>Minecraft Game</h1>
                  </div> */}
                </div>
              </div>
            </div>


            <div className=".embla__slideba imgp-22" key={6}>
              <div className="embla__parallaxba-2">
                <div className="embla__parallax__layerba-2">
                  <img
                    className="embla__slide__imgba-22 embla__parallax__imgba-2"
                    style={{objectPosition: "center"}}
                    height={isMobileState ? "220" : "220"} 
                    width={isMobileState ? "486" : "525"}
                    src={"https://images.squarespace-cdn.com/content/v1/615dd9c46ea913604f68e0aa/1641862191916-N0LGJ4U0GURCQOOBH3HE/Thumbnail_Crackdown+3.jpg"}
                    alt="Your alt text"
                  />
                   {/* <div className="buzzdiv-2">
                    <h1>Minecraft Game</h1>
                  </div> */}
                </div>
              </div>
            </div>

            {/* <div className=".embla__slideba imgp-22" key={2}>
              <div className="embla__parallaxba-2">
                <div className="embla__parallax__layerba-2">
                  <img
                    className="embla__slide__imgba-22 embla__parallax__imgba-2"
                    src={"https://static.wikia.nocookie.net/starwars/images/d/d9/Star-Wars-Squadrons.jpg/revision/latest"}
                    alt="Your alt text"
                  />
                   
                </div>
              </div>
            </div> */}

            <div className=".embla__slideba imgp-22" key={3}>
              <div className="embla__parallaxba-2">
                <div className="embla__parallax__layerba-2">
                  <img
                    className="embla__slide__imgba-22 embla__parallax__imgba-2"
                    src={"https://img.youtube.com/vi/qLkqJVln9ns/maxresdefault.jpg"}
                    alt="Your alt text"
                    height={isMobileState ? "220" : "220"} 
              width={isMobileState ? "486" : "525"}
                  />
                   {/* <div className="buzzdiv-2">
                    <h1>Minecraft Game</h1>
                  </div> */}
                </div>
              </div>
            </div>

            <div className=".embla__slideba imgp-22" key={4}>
              <div className="embla__parallaxba-2">
                <div className="embla__parallax__layerba-2">
                  <img
                    className="embla__slide__imgba-22 embla__parallax__imgba-2"
                    src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMjly1KJTpRHMaFpZA9XW5bat_I4RrpLNlflqsFZX7H2L-bqAKs8ukw-84JqgElQqW-H4&usqp=CAU"}
                    alt="Your alt text"
                    height={isMobileState ? "220" : "220"} 
                    width={isMobileState ? "486" : "525"}
                  />
                   {/* <div className="buzzdiv-2">
                    <h1>Pacman Game</h1>
                  </div> */}
                </div>
              </div>
            </div>

         

           


           

            <div className=".embla__slideba imgp-22" key={6}>
              <div className="embla__parallaxba-2">
                <div className="embla__parallax__layerba-2">
                  <img
                  style={{objectPosition: "bottom"}}
                  height={isMobileState ? "220" : "220"} 
                  width={isMobileState ? "486" : "525"}
                    className="embla__slide__imgba-22 embla__parallax__imgba-2"
                    src={"https://wallpapers.com/images/hd/texas-chainsaw-massacre-scary-poster-786e7gfiyuete0kn.jpg"}
                    alt="Your alt text"
                  />
                   {/* <div className="buzzdiv-2">
                    <h1>Minecraft Game</h1>
                  </div> */}
                </div>
              </div>
            </div>

            <div className=".embla__slideba imgp-22" key={6}>
              <div className="embla__parallaxba-2">
                <div className="embla__parallax__layerba-2">
                  <img
                    className="embla__slide__imgba-22 embla__parallax__imgba-2"
                    src={"https://assets.goal.com/images/v3/bltde95f09fad0ce0f3/f7503bfbd076bcb69f0957343c00be42da8f388d.jpg?auto=webp&format=pjpg&width=1080&quality=60"}
                    alt="Your alt text"
                    height={isMobileState ? "220" : "220"} 
                    width={isMobileState ? "486" : "525"}
                  />
                   {/* <div className="buzzdiv-2">
                    <h1>Minecraft Game</h1>
                  </div> */}
                </div>
              </div>
            </div>

            {/* <div className=".embla__slideba imgp-22" key={6}>
              <div className="embla__parallaxba-2">
                <div className="embla__parallax__layerba-2">
                  <img
                  style={{objectPosition: "center"}}
                    className="embla__slide__imgba-22 embla__parallax__imgba-2"
                    src={pakmanimage}
                    alt="Your alt text"
                  />
                 
                </div>
              </div>
            </div> */}

            <div className=".embla__slideba imgp-22" key={6}>
              <div className="embla__parallaxba-2">
                <div className="embla__parallax__layerba-2">
                  <img
                  style={{objectPosition: "bottom"}}
                  height={isMobileState ? "220" : "220"} 
                  width={isMobileState ? "486" : "525"}
                    className="embla__slide__imgba-22 embla__parallax__imgba-2"
                    src={"https://images.squarespace-cdn.com/content/5e32c700db6dd75a6c7df8d1/1584712393283-3M810KPHNUXUOINCNVTZ/Spyder_OnlineAsset_1280x720.png?content-type=image%2Fpng"}
                    alt="image"
                  />
                   {/* <div className="buzzdiv-2">
                    <h1>Minecraft Game</h1>
                  </div> */}
                </div>
              </div>
            </div>


            <div className=".embla__slideba imgp-22" key={6}>
              <div className="embla__parallaxba-2">
                <div className="embla__parallax__layerba-2">
                  <img
                    className="embla__slide__imgba-22 embla__parallax__imgba-2"
                    src={"https://images5.alphacoders.com/103/thumb-1920-1037076.jpg"}
                    alt="images5"
                    height={isMobileState ? "220" : "220"} 
                    width={isMobileState ? "486" : "525"}                  />
                   {/* <div className="buzzdiv-2">
                    <h1>Minecraft Game</h1>
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
