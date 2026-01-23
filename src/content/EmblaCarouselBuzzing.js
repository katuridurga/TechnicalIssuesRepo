import React, { useCallback, useEffect, useRef } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import {
  NextButton,
  PrevButton,
  usePrevNextButtons
} from './EmblaCarouselArrowButtonsInTheMedia';
import '../assets/css/EmblaCarousel.css'; // Your CSS file

import b2 from "../assets/img/board_game.webp";
import b3 from "../assets/img/global.webp";
import b4 from "../assets/img/awards/Purple.webp";
import b5 from "../assets/img/awards/session2.webp";
import b6 from "../assets/img/awards/arvr.webp";
import b8 from "../assets/img/awards/Nazara.webp";
import b9 from "../assets/img/awards/newgdc.webp";
import animationexp from "../assets/img/animationexp.jpg";
import bui1f from "../assets/img/bspframebox.jpg";
import bui2 from "../assets/img/IGDC2023.webp";
import bui3 from "../assets/img/nazara.jpg";
import bui4 from "../assets/img/ga21.webp";
import bui5 from "../assets/img/eta24.webp";
import bui6 from "../assets/img/esa24.webp";
import bui7 from "../assets/img/BSPsIGDC.webp";
import epa from "../assets/img/awards/Timesawardepaper.webp";
import awardthree from "../assets/img/awards/IGDC19.webp";
import awardone from "../assets/img/awards/NGDC.webp";
import awardfive from "../assets/img/awards/competition.webp";
import awardfour from "../assets/img/awards/igdc2025.jpg";
import awardsix from "../assets/img/awards/IGDC23.webp";
import awardseven from "../assets/img/awards/GEM-AWARDS-2025.webp";
import awardeight from "../assets/img/awards/JayJainAward.webp";
import awardig from "../assets/img/igdc2024.webp";
import awardonea from "../assets/img/PR1.webp";
import awardtwoa from "../assets/img/PR6.webp";
import awardfoura from "../assets/img/PR4.webp";
import awardfivea from "../assets/img/PR5.webp";
import awardthreea from "../assets/img/PR3.webp";

const slides = [
  { src: b4, alt: "Purple Talk", text: "Purple Talk" },
  { src: b2, alt: "Board Game Workshop", text: "Board Game Workshop" },
  { src: b3, alt: "Global Game Jam", text: "Global Game Jam" },
  { src: b5, alt: "Interactive sessions", text: "Interactive sessions" },
  { src: b6, alt: "AR VR Workshop", text: "AR VR Workshop" },
  { src: b8, alt: "Nazara", text: "Nazara" },
  { src: b9, alt: "IGDC", text: "IGDC" },
  { src: epa, alt: "Times Education", text: "Times Education E-paper Article 2024" },
  { src: bui2, alt: "IGDC 2023", text: "IGDC 2023" },
  { src: bui4, alt: "GAME Awards 2021", text: "GAME Awards 2021" },
  { src: bui5, alt: "ET Achievers", text: "ET achievers 2025" },
  { src: bui6, alt: "EduSpark Awards", text: "EduSpark Awards 2023" },
  { src: bui7, alt: "BSP Students", text: "BSP Students at IGDC" },
  { src: animationexp, alt: "Backstage Pass students at IGDC 2025", text: "Backstage Pass students at IGDC 2025", href:"https://www.animationxpress.com/latest-news/backstage-pass-and-frameboxx-sign-mou-to-launch-diplomas-in-game-development/" },
  { src: bui1f, alt: "Backstage Pass Collaborated with Frameboxx", text: "Backstage Pass Collaborated with Frameboxx", href:"https://www.animationxpress.com/latest-news/double-win-for-backstage-pass-students-at-igdc-2025/" },
  { src: awardfour, alt: "Student Game of the Year IGDC 2025", text: "Student Game of the year at IGDC 2025" },
  { src: awardeight, alt: "Runner-up IGDC 2025", text: "Student Game of the year - runner-up at IGDC 2025" },
  { src: awardseven, alt: "GEM Award 2025", text: "GEM Award 2025 - Best Hyper Casual Game" },
  { src: awardsix, alt: "Student Game of the Year 2023", text: "Student Game of the Year at IGDC 2023" },
  { src: awardone, alt: "Casual Connect 2015", text: "Casual Connect 2015" },
  { src: awardthree, alt: "Student Game of the Year 2019", text: "Student game of the year at IGDC 2019" },
  { src: awardfive, alt: "In-house Competition 2023", text: "In house Game development competition 2023" },
  { src: awardig, alt: "IGDC Hyderabad developers", text: "Hyderabad-based game developers shine at IGDC", href: "https://www.thehindu.com/sci-tech/technology/at-india-games-developer-conference-2024-three-hyderabad-based-game-developers-shine/article68913734.ece/amp/" },
  { src: awardonea, alt: "IGDC 2018 Awards", text: "Backstage Pass Students Take Home Awards and Accolades at IGDC 2018", href: "https://timesofindia.indiatimes.com/education/news/backstage-pass-students-take-home-awards-and-accolades-at-igdc-2018/articleshow/67140616.cms" },
  { src: awardtwoa, alt: "Gaming Career", text: "Turn your passion for gaming into a rewarding career", href: "https://www.thehindu.com/brandhub/turn-your-passion-for-gaming-into-a-rewarding-career/article65665332.ece" },
  { src: awardfoura, alt: "Backstage Pass College", text: "How Backstage Pass Gaming College Prepare Students to Join the Top Game and Technology Companies", href: "https://www.dnaindia.com/education/report-how-backstage-pass-gaming-college-prepare-students-to-join-the-top-game-and-technology-companies-2897946" },
  { src: awardfivea, alt: "Gaming Education India", text: "This gaming college in India is revolutionising gaming education", href: "https://www.forbesindia.com/article/brand-connect/this-gaming-college-in-india-is-revolutionising-gaming-education/60133/1" },
  { src: awardthreea, alt: "World-class gaming education", text: "Backstage Pass brings world-class gaming education right to your doorstep", href: "https://yourstory.com/2020/06/backstage-world-class-gaming-education" },
  { src: bui3, alt: "Nazara Technologies Studio Visit", text: "Nazara Technologies Studio Visit" },
];

const TWEEN_FACTOR_BASE = 0.2;

const EmblaCarousel = (props) => {
  const { options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const tweenFactor = useRef(0);
  const tweenNodes = useRef([]);

  const {
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi);

  const setTweenNodes = useCallback((emblaApi) => {
    tweenNodes.current = emblaApi.slideNodes().map((slideNode) => {
      return slideNode.querySelector('.embla__parallax__layerbM');
    });
  }, []);

  const setTweenFactor = useCallback((emblaApi) => {
    tweenFactor.current = TWEEN_FACTOR_BASE * emblaApi.scrollSnapList().length;
  }, []);

  const tweenParallax = useCallback((emblaApi, eventName) => {
    const engine = emblaApi.internalEngine();
    const scrollProgress = emblaApi.scrollProgress();
    const slidesInView = emblaApi.slidesInView();
    const isScrollEvent = eventName === 'scroll';

    emblaApi.scrollSnapList().forEach((scrollSnap, snapIndex) => {
      let diffToTarget = scrollSnap - scrollProgress;
      const slidesInSnap = engine.slideRegistry[snapIndex];

      slidesInSnap.forEach((slideIndex) => {
        if (isScrollEvent && !slidesInView.includes(slideIndex)) return;

        if (engine.options.loop) {
          engine.slideLooper.loopPoints.forEach((loopItem) => {
            const target = loopItem.target();

            if (slideIndex === loopItem.index && target !== 0) {
              const sign = Math.sign(target);

              if (sign === -1) diffToTarget = scrollSnap - (1 + scrollProgress);
              if (sign === 1) diffToTarget = scrollSnap + (1 - scrollProgress);
            }
          });
        }
      });
    });
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    // --- Auto Scroll Left Loop ---
    const autoScrollInterval = setInterval(() => {
      if (emblaApi.canScrollPrev()) emblaApi.scrollPrev();
    }, 3000);

    // --- Existing Logic ---
    setTweenNodes(emblaApi);
    setTweenFactor(emblaApi);
    tweenParallax(emblaApi);

    emblaApi
      .on('reInit', setTweenNodes)
      .on('reInit', setTweenFactor)
      .on('reInit', tweenParallax)
      .on('scroll', tweenParallax)
      .on('slideFocus', tweenParallax);

    return () => clearInterval(autoScrollInterval);
  }, [emblaApi, setTweenFactor, setTweenNodes, tweenParallax]);

  return (
    <div className="emblabuzz">
      <div className="embla__viewportbuzz" ref={emblaRef}>
        <div className="embla__containerbuzz">
          {slides.map((slide, index) => (
            <div className="embla__slidebuzz" key={index}>
              <img
                src={slide.src}
                alt={slide.alt}
                width={586}
                height={330}
                loading="eager" // ✅ Fully LCP-friendly
                fetchpriority={index === 0 ? "high" : undefined} // ✅ only first slide
                className="embla__slide__imgbuzz"
                style={{ width: "100%", height: "auto" }}
              />
              <p className="embla__captionbuzz">
                {slide.text}
                {slide.href && (
                  <a
                    href={slide.href}
                    style={{ marginLeft: "6px", color: "#ee1b24" }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Read More
                  </a>
                )}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="embla__controlsbaM">
        <div className="embla__buttonsbaM" style={{ background: "none" }}>
          <PrevButton onClick={onPrevButtonClick} style={{ color: "#fff" }} />
          <NextButton onClick={onNextButtonClick} style={{ color: "#fff" }} />
        </div>
      </div>
    </div>
  );
};

export default EmblaCarousel;
