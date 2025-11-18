import React, { useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import '../assets/css/EmblaCarousel.css'; // 👈 Create this CSS file (below)
import b2 from "../assets/img/board_game.webp";
import b3 from "../assets/img/global.webp";
import b4 from "../assets/img/awards/Purple.webp";
import b5 from "../assets/img/awards/session2.webp";
import b6 from "../assets/img/awards/arvr.webp";
import awardtwo from "../assets/img/PR6.webp";
import b8 from "../assets/img/awards/Nazara.webp";
import b9 from "../assets/img/awards/newgdc.webp";
import bui1 from "../assets/img/te21.webp";
import bui2 from "../assets/img/IGDC2023.webp";
import bui3 from "../assets/img/IGDC2022.webp";
import bui4 from "../assets/img/ga21.webp";
import bui5 from "../assets/img/eta24.webp";
import bui6 from "../assets/img/esa24.webp";
import bui7 from "../assets/img/BSPsIGDC.webp";
import bui8 from "../assets/img/thumbnail.webp";

const slides = [
  { src: b4, alt: "Purple Talk", text: "Purple Talk" },
  { src: b2, alt: "Board Game Workshop", text: "Board Game Workshop" },
  { src: b3, alt: "Global Game Jam", text: "Global Game Jam" },
  { src: b5, alt: "Interactive sessions", text: "Interactive sessions" },
  { src: b6, alt: "AR VR Workshop", text: "AR VR Workshop" },
  { src: awardtwo, alt: "Gaming Career", text: "Turn your passion for gaming into a rewarding career" },
  { src: b8, alt: "Nazara", text: "Nazara" },
  { src: b9, alt: "IGDC", text: "IGDC" },
  { src: bui2, alt: "Times Education", text: "Times Education E-paper Article 2024" },
  { src: bui1, alt: "Times Awards", text: "Times Excellence Awards 2021" },
  { src: bui3, alt: "IGDC 2023", text: "IGDC 2023" },
  { src: bui4, alt: "IGDC 2022", text: "IGDC 2022" },
  { src: bui5, alt: "GAME Awards 2021", text: "GAME Awards 2021" },
  { src: bui6, alt: "ET Achievers", text: "ET achievers 2025" },
  { src: bui7, alt: "EduSpark Awards", text: "EduSpark Awards 2023" },
  { src: bui8, alt: "BSP Students", text: "BSP Students at IGDC" }
];

const EmblaCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    loop: false,
    slidesToScroll: 3, // scroll by 3 at a time
  });

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  return (
   <div className="emblabuzz">
  {/* Left Arrow */}
  <button className="embla__buttonbuzz embla__buttonbuzz--prev" onClick={scrollPrev}>
    ‹
  </button>

  {/* Viewport */}
  <div className="embla__viewportbuzz" ref={emblaRef}>
    <div className="embla__containerbuzz">
      {slides.map((slide, index) => (
        <div className="embla__slidebuzz" key={index}>
          <div className="embla__image-wrapper">
            <span>
            <LazyLoadImage
              src={slide.src}
              alt={slide.alt}
              effect="blur"
              className="embla__slide__imgbuzz"
              
            />
              <p className="embla__captionbuzz">{slide.text}</p>
             </span>
          </div>
        </div>
      ))}
    </div>
  </div>

  {/* Right Arrow */}
  <button className="embla__buttonbuzz embla__buttonbuzz--next" onClick={scrollNext}>
    ›
  </button>
</div>
  );
};

export default EmblaCarousel;
