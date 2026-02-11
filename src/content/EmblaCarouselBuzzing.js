import React, { useCallback, useEffect, useRef } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import {
  NextButton,
  PrevButton,
  usePrevNextButtons
} from './EmblaCarouselArrowButtonsInTheMedia';
import '../assets/css/EmblaCarousel.css';

// --- Image Imports ---
import b3400 from "../assets/img/global-400w.webp";
import b3600 from "../assets/img/global-600w.webp";
import b2 from "../assets/img/board_game.webp";
import b2400 from "../assets/img/board_game-400w.webp";
import b2600 from "../assets/img/board_game-600w.webp";
import b3 from "../assets/img/global.webp";
import b4 from "../assets/img/awards/Purple.webp";
import b4_400 from "../assets/img/awards/Purple-400w.webp";
import b4_700 from "../assets/img/awards/Purple-700w.webp";
import b5 from "../assets/img/awards/session2.webp";
import b5_400 from "../assets/img/awards/session2-400w.webp";
import b5_700 from "../assets/img/awards/session2-700w.webp";
import b6 from "../assets/img/awards/arvr.webp";
import b6_400 from "../assets/img/awards/arvr-400w.webp";
import b6_700 from "../assets/img/awards/arvr-700w.webp";
import b8 from "../assets/img/awards/Nazara.webp";
import b9 from "../assets/img/awards/newgdc.webp";
import animationexp from "../assets/img/animationexp.jpg";
import bui1f from "../assets/img/bspframebox.jpg";
import bui2 from "../assets/img/IGDC2023.webp";
import bui3 from "../assets/img/nazara.webp";
import bui3_400 from "../assets/img/nazara-400.webp";
import bui3_800 from "../assets/img/nazara-800.webp";
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
import awardfoura400 from "../assets/img/PR4-400w.webp";
import awardfoura700 from "../assets/img/PR4-700w.webp";
import awardfivea from "../assets/img/PR5.webp";
import awardfivea400 from "../assets/img/PR5-400w.webp";
import awardfivea700 from "../assets/img/PR5-700w.webp";
import awardthreea from "../assets/img/PR3.webp";

// --- Slides Array with Responsive srcSet ---
const slides = [
  {
    src: b4,
    srcSet: `${b4_400} 400w, ${b4_700} 700w, ${b4} 1200w`,
    sizes: "(max-width: 768px) 90vw, 696px",
    alt: "Purple Talk",
    text: "Purple Talk"
  },
  {
    src: b2,
    srcSet: `${b2400} 400w, ${b2600} 600w, ${b2} 1200w`,
    sizes: "(max-width: 768px) 90vw, 696px",
    alt: "Board Game Workshop",
    text: "Board Game Workshop"
  },
  {
    src: b3,
    srcSet: `${b3400} 400w, ${b3600} 600w, ${b3} 1200w`,
    sizes: "(max-width: 768px) 90vw, 696px",
    alt: "Global Game Jam",
    text: "Global Game Jam"
  },
  {
    src: b5,
    srcSet: `${b5_400} 400w, ${b5_700} 700w, ${b5} 1200w`,
    sizes: "(max-width: 768px) 90vw, 696px",
    alt: "Interactive sessions",
    text: "Interactive sessions"
  },
  {
    src: b6,
    srcSet: `${b6_400} 400w, ${b6_700} 700w, ${b6} 1200w`,
    sizes: "(max-width: 768px) 90vw, 696px",
    alt: "AR VR Workshop",
    text: "AR VR Workshop"
  },
  { src: b8, alt: "Nazara", text: "Nazara" },
  { src: b9, alt: "IGDC", text: "IGDC" },
  { src: epa, alt: "Times Education", text: "Times Education E-paper Article 2024" },
  { src: bui2, alt: "IGDC 2023", text: "IGDC 2023" },
  { src: bui5, alt: "ET Achievers", text: "ET achievers 2025" },
  { src: bui6, alt: "EduSpark Awards", text: "EduSpark Awards 2023" },
  { src: bui7, alt: "BSP Students", text: "BSP Students at IGDC" },
  {
    src: animationexp,
    alt: "Backstage Pass students at IGDC 2025",
    text: "Backstage Pass students at IGDC 2025",
    href: "https://www.animationxpress.com/latest-news/backstage-pass-and-frameboxx-sign-mou-to-launch-diplomas-in-game-development/"
  },
  {
    src: bui1f,
    alt: "Backstage Pass Collaborated with Frameboxx",
    text: "Backstage Pass Collaborated with Frameboxx",
    href: "https://www.animationxpress.com/latest-news/double-win-for-backstage-pass-students-at-igdc-2025/"
  },
  { src: awardfour, alt: "Student Game of the Year IGDC 2025", text: "Student Game of the year at IGDC 2025" },
  { src: awardeight, alt: "Runner-up IGDC 2025", text: "Student Game of the year - runner-up at IGDC 2025" },
  { src: awardseven, alt: "GEM Award 2025", text: "GEM Award 2025 - Best Hyper Casual Game" },
  { src: awardsix, alt: "Student Game of the Year 2023", text: "Student Game of Year at IGDC 2023" },
  { src: awardone, alt: "Casual Connect 2015", text: "Casual Connect 2015" },
  { src: awardthree, alt: "Student Game of the Year 2019", text: "Student Game of the year at IGDC 2019" },
  { src: awardfive, alt: "In-house Competition 2023", text: "In house Game development competition 2023" },
  {
    src: awardig,
    alt: "IGDC Hyderabad developers",
    text: "Hyderabad-based game developers shine at IGDC",
    href: "https://www.thehindu.com/sci-tech/technology/at-india-games-developer-conference-2024-three-hyderabad-based-game-developers-shine/article68913734.ece/amp/"
  },
  {
    src: awardonea,
    alt: "IGDC 2018 Awards",
    text: "Backstage Pass Students Take Home Awards and Accolades at IGDC 2018",
    href: "https://timesofindia.indiatimes.com/education/news/backstage-pass-students-take-home-awards-and-accolades-at-igdc-2018/articleshow/67140616.cms"
  },
  {
    src: awardtwoa,
    alt: "Gaming Career",
    text: "Turn your passion for gaming into a rewarding career",
    href: "https://www.thehindu.com/brandhub/turn-your-passion-for-gaming-into-a-rewarding-career/article65665332.ece"
  },
  {
    src: awardfoura,
    srcSet: `${awardfoura400} 400w, ${awardfoura700} 700w, ${awardfoura} 1200w`,
    sizes: "(max-width: 768px) 90vw, 696px",
    alt: "Backstage Pass College",
    text: "How Backstage Pass Gaming College Prepare Students to Join the Top Game and Technology Companies",
    href: "https://www.dnaindia.com/education/report-how-backstage-pass-gaming-college-prepare-students-to-join-the-top-game-and-technology-companies-2897946"
  },
  {
    src: awardfivea,
    srcSet: `${awardfivea400} 400w, ${awardfivea700} 700w, ${awardfivea} 1200w`,
    sizes: "(max-width: 768px) 90vw, 696px",
    alt: "Gaming Education India",
    text: "This gaming college in India is revolutionising gaming education",
    href: "https://www.forbesindia.com/article/brand-connect/this-gaming-college-in-india-is-revolutionising-gaming-education/60133/1"
  },
  { src: awardthreea, alt: "World-class gaming education", text: "Backstage Pass brings world-class gaming education right to your doorstep", href: "https://yourstory.com/2020/06/backstage-world-class-gaming-education" },
  {
    src: bui3,
    srcSet: `${bui3_400} 400w, ${bui3_800} 800w, ${bui3} 1200w`,
    sizes: "(max-width: 768px) 90vw, 730px",
    alt: "Nazara Technologies Studio Visit",
    text: "Nazara Technologies Studio Visit"
  },
];

const TWEEN_FACTOR_BASE = 0.2;

const EmblaCarousel = ({ options }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const tweenFactor = useRef(0);
  const tweenNodes = useRef([]);

  const { onPrevButtonClick, onNextButtonClick } = usePrevNextButtons(emblaApi);

  const setTweenNodes = useCallback((emblaApi) => {
    tweenNodes.current = emblaApi.slideNodes().map((slideNode) =>
      slideNode.querySelector('.embla__parallax__layerbM')
    );
  }, []);

  const setTweenFactor = useCallback((emblaApi) => {
    tweenFactor.current = TWEEN_FACTOR_BASE * emblaApi.scrollSnapList().length;
  }, []);

  const tweenParallax = useCallback((emblaApi, eventName) => {
    // Parallax logic can be extended here if needed
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    let autoScrollInterval;

    const startAutoScroll = () => {
      autoScrollInterval = setInterval(() => {
        if (emblaApi.canScrollNext()) {
          emblaApi.scrollNext();
        } else {
          emblaApi.scrollTo(0);
        }
      }, 3000);
    };

    const stopAutoScroll = () => clearInterval(autoScrollInterval);

    startAutoScroll();

    setTweenNodes(emblaApi);
    setTweenFactor(emblaApi);
    tweenParallax(emblaApi);

    emblaApi
      .on('reInit', setTweenNodes)
      .on('reInit', setTweenFactor)
      .on('reInit', tweenParallax)
      .on('scroll', tweenParallax)
      .on('slideFocus', tweenParallax);

    const emblaRoot = emblaApi.rootNode();
    emblaRoot.addEventListener('mouseenter', stopAutoScroll);
    emblaRoot.addEventListener('mouseleave', startAutoScroll);

    return () => {
      stopAutoScroll();
      emblaRoot.removeEventListener('mouseenter', stopAutoScroll);
      emblaRoot.removeEventListener('mouseleave', startAutoScroll);
    };
  }, [emblaApi, setTweenFactor, setTweenNodes, tweenParallax]);

  return (
    <div className="emblabuzz">
      <div className="embla__viewportbuzz" ref={emblaRef}>
        <div className="embla__containerbuzz">
          {slides.map((slide, index) => (
            <div className="embla__slidebuzz" key={index}>
              <img
                src={slide.src}
                srcSet={slide.srcSet}
                sizes={slide.sizes}
                alt={slide.alt}
                width={696}
                height={392}
                loading={index === 0 ? "eager" : "lazy"}
                fetchpriority={index === 0 ? "high" : undefined}
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
