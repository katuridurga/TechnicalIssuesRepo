import React, { useCallback } from 'react'
import { useDotButton } from './EmblaCarouselDotButton1'
import Autoplay from 'embla-carousel-autoplay'
import {
  NextButton,
  PrevButton,
  usePrevNextButtons
} from './EmblaCarouselArrowButtonsss'
import useEmblaCarousel from 'embla-carousel-react';
import course1 from "../assets/img/mscgaming.png";
import course2 from "../assets/img/BD.webp";
import course3 from "../assets/img/course-32-590x430.webp";
import { FiArrowRight } from "react-icons/fi";



const EmblaCarousel = (props) => {
  const { options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()])
  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi)
  const onNavButtonClick = useCallback((emblaApi) => {
    const autoplay = emblaApi?.plugins()?.autoplay
    if (!autoplay) return

    const resetOrStop =
      autoplay.options.stopOnInteraction === false
        ? autoplay.reset
        : autoplay.stop

    resetOrStop()
  }, [])

  const {} = useDotButton(
    emblaApi,
    onNavButtonClick
  )

  return (
    <section className="embla1">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">

          <div className="embla__slide" key={1}>
            <div className="eduvibe-single-course course-style-3 radius-small">
              <div className="inner">
                <div className="thumbnail">
                  <a className="course-thumb" href="#">
                    <img decoding="async" className="w-100" src={course1} width="363px" height="264px" alt="course-32" />
                  </a>
                  <div className="top-position status-group left-top">
                    <span className="eduvibe-status status-01 bg-secondary-color">17% Off</span>
                    <span className="eduvibe-status status-01 bg-primary-color capitalize">expert</span>
                  </div>

                </div>
                <div className="content">
                  <div className="course-price-wrapper">
                  </div><h4 className="title"><a href="#">BSc (Hons) Computer Science & Game Development</a></h4>
                 
                  <div className="card-bottom"><div className="read-more-btn"><a className="btn-transparent" href="#">Enroll Now <FiArrowRight />
                  </a></div></div></div></div></div>
          </div>

          <div className="embla__slide" key={2}>
            <div className="eduvibe-single-course course-style-3 radius-small">
              <div className="inner">
                <div className="thumbnail">
                  <a className="course-thumb" href="#">
                    <img decoding="async" className="w-100" src={course2} width="363px" height="264px" alt="course-32" />
                  </a>
                  <div className="top-position status-group left-top">
                    <span className="eduvibe-status status-01 bg-secondary-color">17% Off</span>
                    <span className="eduvibe-status status-01 bg-primary-color capitalize">expert</span>
                  </div>

                </div>
                <div className="content">
                  <div className="course-price-wrapper">
          
                  </div><h4 className="title"><a href="#">BA (Hons) Game Art & Design
                  </a></h4>
                 
                  <div className="card-bottom"><div className="read-more-btn"><a className="btn-transparent" href="#">Enroll Now <FiArrowRight /></a></div></div></div></div></div>
          </div>

          <div className="embla__slide" key={3}>
            <div className="eduvibe-single-course course-style-3 radius-small">
              <div className="inner">
                <div className="thumbnail">
                  <a className="course-thumb" href="#">
                    <img decoding="async" className="w-100" src={course3} width="363px" height="264px" alt="course-32" />
                  </a>
                  <div className="top-position status-group left-top">
                    <span className="eduvibe-status status-01 bg-secondary-color">17% Off</span>
                    <span className="eduvibe-status status-01 bg-primary-color capitalize">expert</span>
                  </div>

                </div>
                <div className="content">
                  <div className="course-price-wrapper">
                    
                  </div><h4 className="title"><a href="#">BA (Hons) Augmented Reality & Virtual Reality</a></h4>
             
                  <div className="card-bottom"><div className="read-more-btn"><a className="btn-transparent" href="#">Enroll Now <FiArrowRight /></a></div></div></div></div></div>
          </div>

          <div className="embla__slide" key={4}>
            <div className="eduvibe-single-course course-style-3 radius-small">
              <div className="inner">
                <div className="thumbnail">
                  <a className="course-thumb" href="#">
                    <img decoding="async" className="w-100" src={course1} width="363px" height="264px" alt="course-32" />
                  </a>
                  <div className="top-position status-group left-top">
                    <span className="eduvibe-status status-01 bg-secondary-color">17% Off</span>
                    <span className="eduvibe-status status-01 bg-primary-color capitalize">expert</span>
                  </div>

                </div>
                <div className="content">
                  <div className="course-price-wrapper">
                   
                  </div><h4 className="title"><a href="#">MSc Game Technology</a></h4>
                
                  <div className="card-bottom"><div className="read-more-btn"><a className="btn-transparent" href="#">Enroll Now <FiArrowRight /></a></div></div></div></div></div>
          </div>


        </div>
      </div>
      <div className="embla__controlss">
        <div className="embla__buttonss">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>

      </div>
   

    </section>
  )
}

export default EmblaCarousel
